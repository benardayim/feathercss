const types = ["w", "h"];

const typeMap = {
    "w": "width",
    "h": "height"
};

export default {
    handle: (className, prefix, suffix) => {
        if (className.length < 4) return null;
        if (!types.includes(className[0]) || className[1] != "-") return null;

        try {
            let sizeText = className.substring(2),
                size = parseInt(sizeText),
                isPercent = sizeText.endsWith("p");
            if (sizeText.length > 1 && !isPercent) size = size / 10;
            return (`.${prefix}${className}${suffix} { ${typeMap[className[0]]}: ${size}${isPercent ? "%" : "em"}; }`);
        } catch (ex) { }
        return null;
    }
}