# FeatherCSS
FeatherCSS is a CSS compiler like TailwindCSS. FeatherCSS aims to provide smallest CSS file and fastest code writing possible.

## Installing
```
npm install https://github.com/benardayim/feathercss.git
```
Then, run
```
npx feathercss
```

> [!TIP]
> If you want it to recompile everytime you save, use `-w` or `--watch` parameter.
> Also if you wish to see debug messages, use `-d` or `--debug`. 

## Which classes can it recognize?

> [!NOTE]
> `color` means any valid css color.
> `lightness` means any number from 0 to 100.
> `em` means any number but if the number is single letter, it passes as is but if it has more than a letter, it gets divided by 10. for example; 5 is 5em but 25 is 2.5em.
> `emp` means it can be either `em` value or a percentage value. percentage means the normal percentage but with another letter, use `p` instead of `%`, for example: use `100p` instead of `100%`
> any `(...)` means *optional* and finally, `<...>` means required.

| Structure | Example | Additional Note |
| --- | --- | --- |
| bg-<color>-*(lightness)* | bg-red, bg-aqua-30 | |
| fg-<color>-*(lightness)* | fg-red, fg-aqua-30 | |
| placeholder-<color>-*(lightness)* | placeholder-red, placeholder-aqua-30 | |
| border-color-<color>-*(lightness)* | border-color-red, border-color-aqua-30 | creates a border with 1px solid <color> |
| radius-<em> | radius-2, radius-15 | |
| border-size-<em> | border-size-2, border-size-15 | |
| fs-<em> | fs-2, fs-15 | |
| gap-<em> | gap-2, gap-15 | |
| transition-<em> | transition-1, transition-03 | |
| <p/m><t/r/b/l/x/y>-<em> | pt-1, mx-25 | margin and padding from bootstrap |
| <t/r/b/l>-<emp> | t-50, l-100p | top right bottom left properties |
| <w/h>-<emp> | w-2, h-25p | width height properties |
| none/block/inline/inline-block/flex/inline-flex | none, flex, block | changes display property |
| absolute/relative/sticky/fixed | absolute, sticky | changes position property |
