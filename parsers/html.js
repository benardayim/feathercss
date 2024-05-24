export default {
    extension: "html",
    parse: (code) => {
        return [...code.matchAll(/class="([^"]+)"/g)].map(e => e[1].split(" ")).flat();
    }
}