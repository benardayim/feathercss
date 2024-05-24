#!/usr/bin/env node
import path from "path";
import { fileURLToPath, pathToFileURL } from "url";
import fsp from "fs/promises";
import fs from "fs";

const defaultConfig = `module.exports = {
    breakpoints: {
        mobile: "576px",
        tablet: "992px"
    },
    outputPath: "./style.css",
    addAfter: "./input.css",
    safeClasses: []
};
`;

const preCSS = `* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
`;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let config = { };
const configPath = path.resolve(process.cwd(), "feathercss.config.js");
try {
    config = (await import(pathToFileURL(configPath))).default;
} catch (ex) {
    if (!fs.existsSync(configPath)) {
        await fsp.writeFile(configPath, defaultConfig);
    }
    config = {
        breakpoints: {
            mobile: "576px",
            tablet: "992px"
        },
        outputPath: "./style.css",
        input: "./input.css",
        safeClasses: []
    };
}

const useWatch = process.argv.some(e => e == "--watch" || e == "-w");
const isDebug = process.argv.some(e => e == "--debug" || e == "-d");

let parsers = [];
let parserFiles = await fsp.readdir(path.resolve(__dirname, "parsers"));
for (let file of parserFiles) {
    if (!file.endsWith(".js")) continue;
    try {
        parsers.push((await import(pathToFileURL(path.resolve(__dirname, "parsers", file)))).default);
    } catch (ex) {
        console.error("Received error while parsing " + file, ex);
    }
}

let generators = [];
let generatorFiles = await fsp.readdir(path.resolve(__dirname, "generators"));
for (let file of generatorFiles) {
    if (!file.endsWith(".js")) continue;
    try {
        generators.push((await import(pathToFileURL(path.resolve(__dirname, "generators", file)))).default);
    } catch (ex) {
        console.error("Received error while parsing " + file, ex);
    }
}

async function scanClasses() {
    let classList = [];

    let search = async (dirPath) => {
        if (!(await fsp.stat(dirPath)).isDirectory()) return;
        if (path.basename(dirPath) == "node_modules") return;
    
        if (useWatch) watch(path.resolve(dirPath));

        let contents = await fsp.readdir(dirPath, { withFileTypes: true });
    
        for (let dirent of contents) {
            if (dirent.isDirectory()) {
                await search(path.resolve(dirPath, dirent.name));
                continue;
            }
            for (let parser of parsers) {
                if (parser.extension != null && !dirent.name.endsWith("." + parser.extension)) continue;
                
                let code = await fsp.readFile(path.resolve(dirPath, dirent.name), { encoding: "utf8" });
                classList.push(...parser.parse(code));
            }
        }
    }

    await search(process.cwd());

    classList.push(...config.safeClasses);
    classList = classList.filter((e, i, arr) => arr.indexOf(e) == i);

    await generateStyles(classList);

    return;
}

let pendingUpdate = true;
let watchers = [];

function watch(destPath) {
    watchers.push(fs.watch(destPath, onChange));
}

function onChange() {
    if (pendingUpdate) return;

    pendingUpdate = true;
    watchers.forEach(e => e.close());
    setTimeout(async () => {
        await scanClasses();
        pendingUpdate = false;
    }, 10);
}

async function generateStyles(classList) {    
    let normal = [];
    let breakpoints = {};
    let breakpointNames = Object.keys(config.breakpoints);
    for (let breakpointName of breakpointNames) {
        breakpoints[breakpointName] = [];
    }
    
    for (let rawClassName of classList) {
        let whereToPut = null;
        
        let parts = rawClassName.split("-");
        if (parts[0] != null && breakpointNames.includes(parts[0])) {
            whereToPut = parts[0];
            parts.splice(0, 1);
        }

        let suffix = "";
        if (parts.length > 1 && ["hover", "focus", "active"].includes(parts.at(-1))) {
            suffix = "-" + parts.at(-1) + ":" + parts.at(-1);
            parts = parts.slice(0, -1);
        }

        let className = parts.join("-");

        for (let generator of generators) {
            let result = generator.handle(className, whereToPut ? whereToPut + "-" : "", suffix);
            if (result == null) continue;

            (whereToPut == null) ? normal.push(result) : breakpoints[whereToPut].push(result);
        }
    }

    isDebug && console.log({
        normal,
        breakpoints
    });

    let result = preCSS + "\n" + normal.join("\n") + "\n";
    for (let breakpointName of breakpointNames) {
        if (breakpoints[breakpointName].length == 0) continue;
        result += `@media screen and (max-width: ${config.breakpoints[breakpointName]}) {\n`
        result += breakpoints[breakpointName].join("\n");
        result += "\n}\n";
    }

    config.addAfter && (result += "\n" + (await fsp.readFile(path.resolve(process.cwd(), config.addAfter), { encoding: "utf8" })));

    await fsp.writeFile(path.resolve(process.cwd(), config.outputPath ?? "./style.css"), result);

    console.log("FeatherCSS Compiled!");
}

await scanClasses();
pendingUpdate = false;