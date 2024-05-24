const values = [
    "absolute", 
    "relative", 
    "fixed", 
    "sticky"
]

export default {
    handle: (className, prefix, suffix) => {
        if (!values.includes(className)) return null;

        return (`.${prefix}${className}${suffix} { position: ${className}; }`);
    }
}