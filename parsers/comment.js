export default {
    parse: (code) => {
        return [...code.matchAll(/feathercss\[([^\[\]]*)\]/g)].map(e => e[1].split(" ")).flat();
    }
}