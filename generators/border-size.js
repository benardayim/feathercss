export default {
    handle: (className, prefix, suffix) => {
        if (className.length < 13) return null;
        if (!className.startsWith("border-size-")) return null;

        try {
            let sizeText = className.substring(12),
                size = parseInt(sizeText);
            if (sizeText.length > 1) size = size / 10;
            return (`.${prefix}${className}${suffix} { border-width: ${size}em; }`);
        } catch (ex) { }
        return null;
    }
}