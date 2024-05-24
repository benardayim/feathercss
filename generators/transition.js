export default {
    handle: (className, prefix, suffix) => {
        if (className.length < 12) return null;
        if (!className.startsWith("transition-")) return null;

        try {
            let sizeText = className.substring(11),
                size = parseInt(sizeText);
            if (sizeText.length > 1) size = size / 10;
            return (`.${prefix}${className}${suffix} { transition: ${size}s; }`);
        } catch (ex) { }
        return null;
    }
}