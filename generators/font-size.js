export default {
    handle: (className, prefix, suffix) => {
        if (className.length < 4) return null;
        if (!className.startsWith("fs-")) return null;

        try {
            let sizeText = className.substring(3),
                size = parseInt(sizeText);
            if (sizeText.length > 1) size = size / 10;
            return (`.${prefix}${className}${suffix} { font-size: ${size}em; }`);
        } catch (ex) { }
        return null;
    }
}