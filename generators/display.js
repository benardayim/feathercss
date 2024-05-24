const values = [
    "none",
    "block",
    "inline",
    "inline-block",
    "flex",
    "inline-flex"
]

export default {
    handle: (className, prefix, suffix) => {
        if (!values.includes(className)) return null;

        return (`.${prefix}${className}${suffix} { display: ${className}; }`);
    }
}