export default {
    handle: (className, prefix, suffix) => {
        if (className.length < 5) return null;
        if (!className.startsWith("gap-")) return null;

        try {
            let sizeText = className.substring(4),
                size = parseInt(sizeText);
            if (sizeText.length > 1) size = size / 10;
            return (`.${prefix}${className}${suffix} { gap: ${size}em; }`);
        } catch (ex) { }
        return null;
    }
}