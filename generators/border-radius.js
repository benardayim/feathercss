export default {
    handle: (className, prefix, suffix) => {
        if (className.length < 8) return null;
        if (!className.startsWith("radius-")) return null;

        try {
            let sizeText = className.substring(7),
                size = parseInt(sizeText);
            if (sizeText.length > 1) size = size / 10;
            return (`.${prefix}${className}${suffix} { border-radius: ${size}em; }`);
        } catch (ex) { }
        return null;
    }
}