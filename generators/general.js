import fsp from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rawStyle = await fsp.readFile(path.resolve(__dirname, "general.css"), { encoding: "utf8" });
const stylesheets = rawStyle.split(/}.*\n/).map((e, i, arr) => (i != arr.length - 1) ? e.trimStart() + "}" : e.trimStart()).map(e => [e.match(/\.([^ ]*) *{/)[1], e]);

export default {
    handle: (className, prefix, suffix) => {
        for (let stylesheet of stylesheets) {
            if (stylesheet[0] != className) continue;

            let prefixIndex = stylesheet[1].match(/[^ .]*[ ]*{/).index;
            let suffixIndex = stylesheet[1].match(/[ ]*{/).index;

            return stylesheet[1].substring(0, prefixIndex) + prefix + stylesheet[1].substring(prefixIndex, suffixIndex) + suffix + stylesheet[1].substring(suffixIndex);
        }
        return null;
    }
}