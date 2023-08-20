# 05 遇到并解决问题

## chrome-font-less-than-12px-not-work

chrome默认会自作聪明地认为字体低于12px会影响阅读，因此常规设置font-size低于12px的值会被重置为12px来处理。
然而，对于epub一些当作装饰性文字的场景，小字号的文字的设置是一个需求。
那么需要解决这个问题。

### 浏览器设置

浏览器的最小字号设置：chrome://settings/fonts。将最小字号改为较少的值，例如8px。

这种方案要求主动修改浏览器设置，但是类似0.5em依旧不生效，必须为px单位。


### 代码设置
- zoom
- -webkit-transform:scale()
- -webkit-text-size-adjust:none （自从chrome 27之后，就取消了对这个属性的支持）

### 最终决策

使用calc来计算相对em的百分比。不推荐hardcode px，一旦hardcode就会失去级联的伸缩能力。
```css
.fs-0e5 {
    /* not work */
    /*font-size: 0.5em;*/

    /* work but hard code in px*/
    /*font-size: 8px;*/

    /* work !*/
    font-size: calc(0.5 * 1em);
}
```
变更：需要将CSS代码中设置小于0.75em的font-size，一律修改成calc()计算。