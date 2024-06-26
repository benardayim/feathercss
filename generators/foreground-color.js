const colors = {
    "aliceblue": { "h": 208, "s": 100, "l": 97 },
    "antiquewhite": { "h": 34, "s": 78, "l": 91 },
    "aqua": { "h": 180, "s": 100, "l": 50 },
    "aquamarine": { "h": 160, "s": 100, "l": 75 },
    "azure": { "h": 180, "s": 100, "l": 97 },
    "beige": { "h": 60, "s": 56, "l": 91 },
    "bisque": { "h": 33, "s": 100, "l": 88 },
    "black": { "h": 0, "s": 0, "l": 0 },
    "blanchedalmond": { "h": 36, "s": 100, "l": 90 },
    "blue": { "h": 240, "s": 100, "l": 50 },
    "blueviolet": { "h": 271, "s": 76, "l": 53 },
    "brown": { "h": 0, "s": 59, "l": 41 },
    "burlywood": { "h": 34, "s": 57, "l": 70 },
    "cadetblue": { "h": 182, "s": 25, "l": 50 },
    "chartreuse": { "h": 90, "s": 100, "l": 50 },
    "chocolate": { "h": 25, "s": 75, "l": 47 },
    "coral": { "h": 16, "s": 100, "l": 66 },
    "cornflowerblue": { "h": 219, "s": 79, "l": 66 },
    "cornsilk": { "h": 48, "s": 100, "l": 93 },
    "crimson": { "h": 348, "s": 83, "l": 47 },
    "cyan": { "h": 180, "s": 100, "l": 50 },
    "darkblue": { "h": 240, "s": 100, "l": 27 },
    "darkcyan": { "h": 180, "s": 100, "l": 27 },
    "darkgoldenrod": { "h": 43, "s": 89, "l": 38 },
    "darkgray": { "h": 0, "s": 0, "l": 66 },
    "darkgreen": { "h": 120, "s": 100, "l": 20 },
    "darkgrey": { "h": 0, "s": 0, "l": 66 },
    "darkkhaki": { "h": 56, "s": 38, "l": 58 },
    "darkmagenta": { "h": 300, "s": 100, "l": 27 },
    "darkolivegreen": { "h": 82, "s": 39, "l": 30 },
    "darkorange": { "h": 33, "s": 100, "l": 50 },
    "darkorchid": { "h": 280, "s": 61, "l": 50 },
    "darkred": { "h": 0, "s": 100, "l": 27 },
    "darksalmon": { "h": 15, "s": 72, "l": 70 },
    "darkseagreen": { "h": 120, "s": 25, "l": 65 },
    "darkslateblue": { "h": 248, "s": 39, "l": 39 },
    "darkslategray": { "h": 180, "s": 25, "l": 25 },
    "darkslategrey": { "h": 180, "s": 25, "l": 25 },
    "darkturquoise": { "h": 181, "s": 100, "l": 41 },
    "darkviolet": { "h": 282, "s": 100, "l": 41 },
    "deeppink": { "h": 328, "s": 100, "l": 54 },
    "deepskyblue": { "h": 195, "s": 100, "l": 50 },
    "dimgray": { "h": 0, "s": 0, "l": 41 },
    "dimgrey": { "h": 0, "s": 0, "l": 41 },
    "dodgerblue": { "h": 210, "s": 100, "l": 56 },
    "firebrick": { "h": 0, "s": 68, "l": 42 },
    "floralwhite": { "h": 40, "s": 100, "l": 97 },
    "forestgreen": { "h": 120, "s": 61, "l": 34 },
    "fuchsia": { "h": 300, "s": 100, "l": 50 },
    "gainsboro": { "h": 0, "s": 0, "l": 86 },
    "ghostwhite": { "h": 240, "s": 100, "l": 99 },
    "goldenrod": { "h": 43, "s": 74, "l": 49 },
    "gold": { "h": 51, "s": 100, "l": 50 },
    "gray": { "h": 0, "s": 0, "l": 50 },
    "green": { "h": 120, "s": 100, "l": 25 },
    "greenyellow": { "h": 84, "s": 100, "l": 59 },
    "grey": { "h": 0, "s": 0, "l": 50 },
    "honeydew": { "h": 120, "s": 100, "l": 97 },
    "hotpink": { "h": 330, "s": 100, "l": 71 },
    "indianred": { "h": 0, "s": 53, "l": 58 },
    "indigo": { "h": 275, "s": 100, "l": 25 },
    "ivory": { "h": 60, "s": 100, "l": 97 },
    "khaki": { "h": 54, "s": 77, "l": 75 },
    "lavenderblush": { "h": 340, "s": 100, "l": 97 },
    "lavender": { "h": 240, "s": 67, "l": 94 },
    "lawngreen": { "h": 90, "s": 100, "l": 49 },
    "lemonchiffon": { "h": 54, "s": 100, "l": 90 },
    "lightblue": { "h": 195, "s": 53, "l": 79 },
    "lightcoral": { "h": 0, "s": 79, "l": 72 },
    "lightcyan": { "h": 180, "s": 100, "l": 94 },
    "lightgoldenrodyellow": { "h": 60, "s": 80, "l": 90 },
    "lightgray": { "h": 0, "s": 0, "l": 83 },
    "lightgreen": { "h": 120, "s": 73, "l": 75 },
    "lightgrey": { "h": 0, "s": 0, "l": 83 },
    "lightpink": { "h": 351, "s": 100, "l": 86 },
    "lightsalmon": { "h": 17, "s": 100, "l": 74 },
    "lightseagreen": { "h": 177, "s": 70, "l": 41 },
    "lightskyblue": { "h": 203, "s": 92, "l": 75 },
    "lightslategray": { "h": 210, "s": 14, "l": 53 },
    "lightslategrey": { "h": 210, "s": 14, "l": 53 },
    "lightsteelblue": { "h": 214, "s": 41, "l": 78 },
    "lightyellow": { "h": 60, "s": 100, "l": 94 },
    "lime": { "h": 120, "s": 100, "l": 50 },
    "limegreen": { "h": 120, "s": 61, "l": 50 },
    "linen": { "h": 30, "s": 67, "l": 94 },
    "magenta": { "h": 300, "s": 100, "l": 50 },
    "maroon": { "h": 0, "s": 100, "l": 25 },
    "mediumaquamarine": { "h": 160, "s": 51, "l": 60 },
    "mediumblue": { "h": 240, "s": 100, "l": 40 },
    "mediumorchid": { "h": 288, "s": 59, "l": 58 },
    "mediumpurple": { "h": 260, "s": 60, "l": 65 },
    "mediumseagreen": { "h": 147, "s": 50, "l": 47 },
    "mediumslateblue": { "h": 249, "s": 80, "l": 67 },
    "mediumspringgreen": { "h": 157, "s": 100, "l": 49 },
    "mediumturquoise": { "h": 178, "s": 60, "l": 55 },
    "mediumvioletred": { "h": 322, "s": 81, "l": 43 },
    "midnightblue": { "h": 240, "s": 64, "l": 27 },
    "mintcream": { "h": 150, "s": 100, "l": 98 },
    "mistyrose": { "h": 6, "s": 100, "l": 94 },
    "moccasin": { "h": 38, "s": 100, "l": 85 },
    "navajowhite": { "h": 36, "s": 100, "l": 84 },
    "navy": { "h": 240, "s": 100, "l": 25 },
    "oldlace": { "h": 39, "s": 85, "l": 95 },
    "olive": { "h": 60, "s": 100, "l": 25 },
    "olivedrab": { "h": 80, "s": 60, "l": 35 },
    "orange": { "h": 39, "s": 100, "l": 50 },
    "orangered": { "h": 16, "s": 100, "l": 50 },
    "orchid": { "h": 302, "s": 59, "l": 65 },
    "palegoldenrod": { "h": 55, "s": 67, "l": 80 },
    "palegreen": { "h": 120, "s": 93, "l": 79 },
    "paleturquoise": { "h": 180, "s": 65, "l": 81 },
    "palevioletred": { "h": 340, "s": 60, "l": 65 },
    "papayawhip": { "h": 37, "s": 100, "l": 92 },
    "peachpuff": { "h": 28, "s": 100, "l": 86 },
    "peru": { "h": 30, "s": 59, "l": 53 },
    "pink": { "h": 350, "s": 100, "l": 88 },
    "plum": { "h": 300, "s": 47, "l": 75 },
    "powderblue": { "h": 187, "s": 52, "l": 80 },
    "purple": { "h": 300, "s": 100, "l": 25 },
    "rebeccapurple": { "h": 270, "s": 50, "l": 40 },
    "red": { "h": 0, "s": 100, "l": 50 },
    "rosybrown": { "h": 0, "s": 25, "l": 65 },
    "royalblue": { "h": 225, "s": 73, "l": 57 },
    "saddlebrown": { "h": 25, "s": 76, "l": 31 },
    "salmon": { "h": 6, "s": 93, "l": 71 },
    "sandybrown": { "h": 28, "s": 87, "l": 67 },
    "seagreen": { "h": 146, "s": 50, "l": 36 },
    "seashell": { "h": 25, "s": 100, "l": 97 },
    "sienna": { "h": 19, "s": 56, "l": 40 },
    "silver": { "h": 0, "s": 0, "l": 75 },
    "skyblue": { "h": 197, "s": 71, "l": 73 },
    "slateblue": { "h": 248, "s": 53, "l": 58 },
    "slategray": { "h": 210, "s": 13, "l": 50 },
    "slategrey": { "h": 210, "s": 13, "l": 50 },
    "snow": { "h": 0, "s": 100, "l": 99 },
    "springgreen": { "h": 150, "s": 100, "l": 50 },
    "steelblue": { "h": 207, "s": 44, "l": 49 },
    "tan": { "h": 34, "s": 44, "l": 69 },
    "teal": { "h": 180, "s": 100, "l": 25 },
    "thistle": { "h": 300, "s": 24, "l": 80 },
    "tomato": { "h": 9, "s": 100, "l": 64 },
    "turquoise": { "h": 174, "s": 72, "l": 56 },
    "violet": { "h": 300, "s": 76, "l": 72 },
    "wheat": { "h": 39, "s": 77, "l": 83 },
    "white": { "h": 0, "s": 0, "l": 100 },
    "whitesmoke": { "h": 0, "s": 0, "l": 96 },
    "yellow": { "h": 60, "s": 100, "l": 50 },
    "yellowgreen": { "h": 80, "s": 61, "l": 50 }
}

const colorNames = Object.keys(colors);

export default {
    handle: (className, prefix, suffix) => {
        if (!className.startsWith("fg-")) return null;

        try {
            let parts = className.split("-");
    
            let colorValue = colors[parts[1]];
            if (colorValue == null) return null;

            let lightness = (parts.length > 2) ? parts[2] : colorValue.l;
    
            return (`.${prefix}${className}${suffix} { color: hsl(${colorValue.h}, ${colorValue.s}%, ${lightness}%); }`);
        } catch (ex) { }
        return null;
    }
}