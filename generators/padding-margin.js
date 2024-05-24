const typeMap = {
    "p": `padding`,
    "m": `margin`
}
const type = Object.keys(typeMap);

const orientationMap = {
    "t": (type, value) => `${type}-top: ${value}`,
    "r": (type, value) => `${type}-right: ${value}`,
    "b": (type, value) => `${type}-bottom: ${value}`,
    "l": (type, value) => `${type}-left: ${value}`,
    "x": (type, value) => `${type}-inline: ${value}`,
    "y": (type, value) => `${type}-top: ${value}; ${type}-bottom: ${value}`,
    "-": (type, value) => `${type}: ${value}`
}
const orientation = Object.keys(orientationMap);

export default {
    handle: (className, prefix, suffix) => {
        if (className.length < 3) return null;
        if (!type.includes(className[0])) return null;
        if (!orientation.includes(className[1])) return null;

        try {
            let sizeText = className.split("-").at(-1),
                size = parseInt(sizeText);
            
            if (sizeText == "auto") return (`.${prefix}${className}${suffix} { ${orientationMap[className[1]](typeMap[className[0]], "auto")}; }`);

            if (isNaN(size)) return null;

            if (sizeText.length > 1) size = size / 10;
            return (`.${prefix}${className}${suffix} { ${orientationMap[className[1]](typeMap[className[0]], size + "em")}; }`);
        } catch (ex) { }
        return null;
    }
}