# tailwindscss class convention



## layout

### aspect ratio
| Class         | Properties            |
| ------------- | --------------------- |
| aspect-auto   | aspect-ratio: auto;   |
| aspect-square | aspect-ratio: 1 / 1;  |
| aspect-video  | aspect-ratio: 16 / 9; |



### container

| Class     | Breakpoint     | Properties         |
| --------- | -------------- | ------------------ |
| container | None           | width: 100%;       |
|           | sm *(640px)*   | max-width: 640px;  |
|           | md *(768px)*   | max-width: 768px;  |
|           | lg (1024px)    | max-width: 1024px; |
|           | xl (1280px)    | max-width: 1280px; |
|           | 2xl *(1536px)* | max-width: 1536px; |

使用模式: `md:container md:mx-auto`



### columns

| Class        | Properties                   |
| ------------ | ---------------------------- |
| columns-1    | columns: 1;                  |
| columns-2    | columns: 2;                  |
| columns-3    | columns: 3;                  |
| columns-4    | columns: 4;                  |
| columns-5    | columns: 5;                  |
| columns-6    | columns: 6;                  |
| columns-7    | columns: 7;                  |
| columns-8    | columns: 8;                  |
| columns-9    | columns: 9;                  |
| columns-10   | columns: 10;                 |
| columns-11   | columns: 11;                 |
| columns-12   | columns: 12;                 |
| columns-auto | columns: auto;               |
| columns-3xs  | columns: 16rem; /* 256px */  |
| columns-2xs  | columns: 18rem; /* 288px */  |
| columns-xs   | columns: 20rem; /* 320px */  |
| columns-sm   | columns: 24rem; /* 384px */  |
| columns-md   | columns: 28rem; /* 448px */  |
| columns-lg   | columns: 32rem; /* 512px */  |
| columns-xl   | columns: 36rem; /* 576px */  |
| columns-2xl  | columns: 42rem; /* 672px */  |
| columns-3xl  | columns: 48rem; /* 768px */  |
| columns-4xl  | columns: 56rem; /* 896px */  |
| columns-5xl  | columns: 64rem; /* 1024px */ |
| columns-6xl  | columns: 72rem; /* 1152px */ |
| columns-7xl  | columns: 80rem; /* 1280px */ |

tailwindcss使用的是**语义化指代标识**，因此例如 columns-md 这个名称，直接是看不出具体的 columns: 28rem; 样式的。

这里，有另外一种思路，那就是**将CSS具体的属性值map到CSS 类名中**，这种方式可以大幅度减少心智负担，我认为是首选方案。

对比：

| 语义化指代                                | 将CSS具体的属性值map到CSS 类名中        |
| ----------------------------------------- | --------------------------------------- |
| .columns-md {<br/>  columns: 28rem;<br/>} | .col-28re {<br/>  columns: 28rem;<br/>} |
| 可行解                                    | 大幅度减少记忆的心智负担                |



### Break After

| Class                  | Properties               |
| ---------------------- | ------------------------ |
| break-after-auto       | break-after: auto;       |
| break-after-avoid      | break-after: avoid;      |
| break-after-all        | break-after: all;        |
| break-after-avoid-page | break-after: avoid-page; |
| break-after-page       | break-after: page;       |
| break-after-left       | break-after: left;       |
| break-after-right      | break-after: right;      |
| break-after-column     | break-after: column;     |



### Break Before

和break-after的命名类似。



### Break Inside

| Class                     | Properties                  |
| ------------------------- | --------------------------- |
| break-inside-auto         | break-inside: auto;         |
| break-inside-avoid        | break-inside: avoid;        |
| break-inside-avoid-page   | break-inside: avoid-page;   |
| break-inside-avoid-column | break-inside: avoid-column; |



### Box Sizing

| Class       | Properties               |
| ----------- | ------------------------ |
| box-border  | box-sizing: border-box;  |
| box-content | box-sizing: content-box; |



### Display

| Class              | Properties                   |
| ------------------ | ---------------------------- |
| block              | display: block;              |
| inline-block       | display: inline-block;       |
| inline             | display: inline;             |
| flex               | display: flex;               |
| inline-flex        | display: inline-flex;        |
| table              | display: table;              |
| inline-table       | display: inline-table;       |
| table-caption      | display: table-caption;      |
| table-cell         | display: table-cell;         |
| table-column       | display: table-column;       |
| table-column-group | display: table-column-group; |
| table-footer-group | display: table-footer-group; |
| table-header-group | display: table-header-group; |
| table-row-group    | display: table-row-group;    |
| table-row          | display: table-row;          |
| flow-root          | display: flow-root;          |
| grid               | display: grid;               |
| inline-grid        | display: inline-grid;        |
| contents           | display: contents;           |
| list-item          | display: list-item;          |
| hidden             | display: none;               |



### Floats

| Class       | Properties    |
| ----------- | ------------- |
| float-right | float: right; |
| float-left  | float: left;  |
| float-none  | float: none;  |

可以缩写为：fl-r，fl-l，fl-none。



### Clear

| Class       | Properties    |
| ----------- | ------------- |
| clear-left  | clear: left;  |
| clear-right | clear: right; |
| clear-both  | clear: both;  |
| clear-none  | clear: none;  |

可以缩写为：cl-l,cl-r,cl-both,cl-none.



### Isolation

| Class          | Properties          |
| -------------- | ------------------- |
| isolate        | isolation: isolate; |
| isolation-auto | isolation: auto;    |



### Object Fit

| Class             | Properties              |
| ----------------- | ----------------------- |
| object-contain    | object-fit: contain;    |
| object-cover      | object-fit: cover;      |
| object-fill       | object-fit: fill;       |
| object-none       | object-fit: none;       |
| object-scale-down | object-fit: scale-down; |



### Object Position

| Class               | Properties                     |
| ------------------- | ------------------------------ |
| object-bottom       | object-position: bottom;       |
| object-center       | object-position: center;       |
| object-left         | object-position: left;         |
| object-left-bottom  | object-position: left bottom;  |
| object-left-top     | object-position: left top;     |
| object-right        | object-position: right;        |
| object-right-bottom | object-position: right bottom; |
| object-right-top    | object-position: right top;    |
| object-top          | object-position: top;          |



### Overflow

| Class              | Properties           |
| ------------------ | -------------------- |
| overflow-auto      | overflow: auto;      |
| overflow-hidden    | overflow: hidden;    |
| overflow-clip      | overflow: clip;      |
| overflow-visible   | overflow: visible;   |
| overflow-scroll    | overflow: scroll;    |
| overflow-x-auto    | overflow-x: auto;    |
| overflow-y-auto    | overflow-y: auto;    |
| overflow-x-hidden  | overflow-x: hidden;  |
| overflow-y-hidden  | overflow-y: hidden;  |
| overflow-x-clip    | overflow-x: clip;    |
| overflow-y-clip    | overflow-y: clip;    |
| overflow-x-visible | overflow-x: visible; |
| overflow-y-visible | overflow-y: visible; |
| overflow-x-scroll  | overflow-x: scroll;  |
| overflow-y-scroll  | overflow-y: scroll;  |



### Overscroll Behavior

| Class                | Properties                      |
| -------------------- | ------------------------------- |
| overscroll-auto      | overscroll-behavior: auto;      |
| overscroll-contain   | overscroll-behavior: contain;   |
| overscroll-none      | overscroll-behavior: none;      |
| overscroll-y-auto    | overscroll-behavior-y: auto;    |
| overscroll-y-contain | overscroll-behavior-y: contain; |
| overscroll-y-none    | overscroll-behavior-y: none;    |
| overscroll-x-auto    | overscroll-behavior-x: auto;    |
| overscroll-x-contain | overscroll-behavior-x: contain; |
| overscroll-x-none    | overscroll-behavior-x: none;    |



### Position

| Class    | Properties          |
| -------- | ------------------- |
| static   | position: static;   |
| fixed    | position: fixed;    |
| absolute | position: absolute; |
| relative | position: relative; |
| sticky   | position: sticky;   |



### Top / Right / Bottom / Left

>https://tailwindcss.com/docs/top-right-bottom-left



### Visibility

| Class     | Properties            |
| --------- | --------------------- |
| visible   | visibility: visible;  |
| invisible | visibility: hidden;   |
| collapse  | visibility: collapse; |



### Z-Index

| Class  | Properties     |
| ------ | -------------- |
| z-0    | z-index: 0;    |
| z-10   | z-index: 10;   |
| z-20   | z-index: 20;   |
| z-30   | z-index: 30;   |
| z-40   | z-index: 40;   |
| z-50   | z-index: 50;   |
| z-auto | z-index: auto; |



## Flexbox & Grid 

### Flex Basis

| Class       | Properties                       |
| ----------- | -------------------------------- |
| basis-0     | flex-basis: 0px;                 |
| basis-1     | flex-basis: 0.25rem; /* 4px */   |
| basis-2     | flex-basis: 0.5rem; /* 8px */    |
| basis-3     | flex-basis: 0.75rem; /* 12px */  |
| basis-4     | flex-basis: 1rem; /* 16px */     |
| basis-5     | flex-basis: 1.25rem; /* 20px */  |
| basis-6     | flex-basis: 1.5rem; /* 24px */   |
| basis-7     | flex-basis: 1.75rem; /* 28px */  |
| basis-8     | flex-basis: 2rem; /* 32px */     |
| basis-9     | flex-basis: 2.25rem; /* 36px */  |
| basis-10    | flex-basis: 2.5rem; /* 40px */   |
| basis-11    | flex-basis: 2.75rem; /* 44px */  |
| basis-12    | flex-basis: 3rem; /* 48px */     |
| basis-14    | flex-basis: 3.5rem; /* 56px */   |
| basis-16    | flex-basis: 4rem; /* 64px */     |
| basis-20    | flex-basis: 5rem; /* 80px */     |
| basis-24    | flex-basis: 6rem; /* 96px */     |
| basis-28    | flex-basis: 7rem; /* 112px */    |
| basis-32    | flex-basis: 8rem; /* 128px */    |
| basis-36    | flex-basis: 9rem; /* 144px */    |
| basis-40    | flex-basis: 10rem; /* 160px */   |
| basis-44    | flex-basis: 11rem; /* 176px */   |
| basis-48    | flex-basis: 12rem; /* 192px */   |
| basis-52    | flex-basis: 13rem; /* 208px */   |
| basis-56    | flex-basis: 14rem; /* 224px */   |
| basis-60    | flex-basis: 15rem; /* 240px */   |
| basis-64    | flex-basis: 16rem; /* 256px */   |
| basis-72    | flex-basis: 18rem; /* 288px */   |
| basis-80    | flex-basis: 20rem; /* 320px */   |
| basis-96    | flex-basis: 24rem; /* 384px */   |
| basis-auto  | flex-basis: auto;                |
| basis-px    | flex-basis: 1px;                 |
| basis-0.5   | flex-basis: 0.125rem; /* 2px */  |
| basis-1.5   | flex-basis: 0.375rem; /* 6px */  |
| basis-2.5   | flex-basis: 0.625rem; /* 10px */ |
| basis-3.5   | flex-basis: 0.875rem; /* 14px */ |
| basis-1/2   | flex-basis: 50%;                 |
| basis-1/3   | flex-basis: 33.333333%;          |
| basis-2/3   | flex-basis: 66.666667%;          |
| basis-1/4   | flex-basis: 25%;                 |
| basis-2/4   | flex-basis: 50%;                 |
| basis-3/4   | flex-basis: 75%;                 |
| basis-1/5   | flex-basis: 20%;                 |
| basis-2/5   | flex-basis: 40%;                 |
| basis-3/5   | flex-basis: 60%;                 |
| basis-4/5   | flex-basis: 80%;                 |
| basis-1/6   | flex-basis: 16.666667%;          |
| basis-2/6   | flex-basis: 33.333333%;          |
| basis-3/6   | flex-basis: 50%;                 |
| basis-4/6   | flex-basis: 66.666667%;          |
| basis-5/6   | flex-basis: 83.333333%;          |
| basis-1/12  | flex-basis: 8.333333%;           |
| basis-2/12  | flex-basis: 16.666667%;          |
| basis-3/12  | flex-basis: 25%;                 |
| basis-4/12  | flex-basis: 33.333333%;          |
| basis-5/12  | flex-basis: 41.666667%;          |
| basis-6/12  | flex-basis: 50%;                 |
| basis-7/12  | flex-basis: 58.333333%;          |
| basis-8/12  | flex-basis: 66.666667%;          |
| basis-9/12  | flex-basis: 75%;                 |
| basis-10/12 | flex-basis: 83.333333%;          |
| basis-11/12 | flex-basis: 91.666667%;          |
| basis-full  | flex-basis: 100%;                |

- basic-0到basic-96
- basic-1/2到basis-11/12

> 思考：CSS类名不支持3.5以及3/4种的点号和斜杆符号，tailwindcss是如何处理的？转化一个类名？还是转义？

```css
.basis-1\/4 {
    flex-basis: 25%;
}
```

探索源码，得知是转义处理。



### Flex Direction

| Class            | Properties                      |
| ---------------- | ------------------------------- |
| flex-row         | flex-direction: row;            |
| flex-row-reverse | flex-direction: row-reverse;    |
| flex-col         | flex-direction: column;         |
| flex-col-reverse | flex-direction: column-reverse; |



### Flex Wrap

| Class             | Properties               |
| ----------------- | ------------------------ |
| flex-wrap         | flex-wrap: wrap;         |
| flex-wrap-reverse | flex-wrap: wrap-reverse; |
| flex-nowrap       | flex-wrap: nowrap;       |



### Flex

| Class        | Properties      |
| ------------ | --------------- |
| flex-1       | flex: 1 1 0%;   |
| flex-auto    | flex: 1 1 auto; |
| flex-initial | flex: 0 1 auto; |
| flex-none    | flex: none;     |



### Flex Grow

| Class  | Properties    |
| ------ | ------------- |
| grow   | flex-grow: 1; |
| grow-0 | flex-grow: 0; |



### Flex Shrink

| Class    | Properties      |
| -------- | --------------- |
| shrink   | flex-shrink: 1; |
| shrink-0 | flex-shrink: 0; |



### Order

| Class       | Properties    |
| ----------- | ------------- |
| order-1     | order: 1;     |
| order-2     | order: 2;     |
| order-3     | order: 3;     |
| order-4     | order: 4;     |
| order-5     | order: 5;     |
| order-6     | order: 6;     |
| order-7     | order: 7;     |
| order-8     | order: 8;     |
| order-9     | order: 9;     |
| order-10    | order: 10;    |
| order-11    | order: 11;    |
| order-12    | order: 12;    |
| order-first | order: -9999; |
| order-last  | order: 9999;  |
| order-none  | order: 0;     |



### Grid Template Columns

| Class          | Properties                                         |
| -------------- | -------------------------------------------------- |
| grid-cols-1    | grid-template-columns: repeat(1, minmax(0, 1fr));  |
| grid-cols-2    | grid-template-columns: repeat(2, minmax(0, 1fr));  |
| grid-cols-3    | grid-template-columns: repeat(3, minmax(0, 1fr));  |
| grid-cols-4    | grid-template-columns: repeat(4, minmax(0, 1fr));  |
| grid-cols-5    | grid-template-columns: repeat(5, minmax(0, 1fr));  |
| grid-cols-6    | grid-template-columns: repeat(6, minmax(0, 1fr));  |
| grid-cols-7    | grid-template-columns: repeat(7, minmax(0, 1fr));  |
| grid-cols-8    | grid-template-columns: repeat(8, minmax(0, 1fr));  |
| grid-cols-9    | grid-template-columns: repeat(9, minmax(0, 1fr));  |
| grid-cols-10   | grid-template-columns: repeat(10, minmax(0, 1fr)); |
| grid-cols-11   | grid-template-columns: repeat(11, minmax(0, 1fr)); |
| grid-cols-12   | grid-template-columns: repeat(12, minmax(0, 1fr)); |
| grid-cols-none | grid-template-columns: none;                       |



### Grid Column Start / End

> https://tailwindcss.com/docs/grid-column



### Grid Template Rows

| Class          | Properties                                     |
| -------------- | ---------------------------------------------- |
| grid-rows-1    | grid-template-rows: repeat(1, minmax(0, 1fr)); |
| grid-rows-2    | grid-template-rows: repeat(2, minmax(0, 1fr)); |
| grid-rows-3    | grid-template-rows: repeat(3, minmax(0, 1fr)); |
| grid-rows-4    | grid-template-rows: repeat(4, minmax(0, 1fr)); |
| grid-rows-5    | grid-template-rows: repeat(5, minmax(0, 1fr)); |
| grid-rows-6    | grid-template-rows: repeat(6, minmax(0, 1fr)); |
| grid-rows-none | grid-template-rows: none;                      |



### Grid Row Start / End

> https://tailwindcss.com/docs/grid-row



### Grid Auto Flow

| Class               | Properties                    |
| ------------------- | ----------------------------- |
| grid-flow-row       | grid-auto-flow: row;          |
| grid-flow-col       | grid-auto-flow: column;       |
| grid-flow-dense     | grid-auto-flow: dense;        |
| grid-flow-row-dense | grid-auto-flow: row dense;    |
| grid-flow-col-dense | grid-auto-flow: column dense; |



### Grid Auto Columns

| Class          | Properties                         |
| -------------- | ---------------------------------- |
| auto-cols-auto | grid-auto-columns: auto;           |
| auto-cols-min  | grid-auto-columns: min-content;    |
| auto-cols-max  | grid-auto-columns: max-content;    |
| auto-cols-fr   | grid-auto-columns: minmax(0, 1fr); |



### Grid Auto Rows

类似Grid Auto Columns。



### Gap

https://tailwindcss.com/docs/gap



### Justify Content

| Class           | Properties                      |
| --------------- | ------------------------------- |
| justify-start   | justify-content: flex-start;    |
| justify-end     | justify-content: flex-end;      |
| justify-center  | justify-content: center;        |
| justify-between | justify-content: space-between; |
| justify-around  | justify-content: space-around;  |
| justify-evenly  | justify-content: space-evenly;  |



### Justify Items

| Class                 | Properties              |
| --------------------- | ----------------------- |
| justify-items-start   | justify-items: start;   |
| justify-items-end     | justify-items: end;     |
| justify-items-center  | justify-items: center;  |
| justify-items-stretch | justify-items: stretch; |



### Justify Self

| Class                | Properties             |
| -------------------- | ---------------------- |
| justify-self-auto    | justify-self: auto;    |
| justify-self-start   | justify-self: start;   |
| justify-self-end     | justify-self: end;     |
| justify-self-center  | justify-self: center;  |
| justify-self-stretch | justify-self: stretch; |



### Align Content

| Class            | Properties                    |
| ---------------- | ----------------------------- |
| content-center   | align-content: center;        |
| content-start    | align-content: flex-start;    |
| content-end      | align-content: flex-end;      |
| content-between  | align-content: space-between; |
| content-around   | align-content: space-around;  |
| content-evenly   | align-content: space-evenly;  |
| content-baseline | align-content: baseline;      |



### Align Items

| Class          | Properties               |
| -------------- | ------------------------ |
| items-start    | align-items: flex-start; |
| items-end      | align-items: flex-end;   |
| items-center   | align-items: center;     |
| items-baseline | align-items: baseline;   |
| items-stretch  | align-items: stretch;    |



### Align Self

| Class         | Properties              |
| ------------- | ----------------------- |
| self-auto     | align-self: auto;       |
| self-start    | align-self: flex-start; |
| self-end      | align-self: flex-end;   |
| self-center   | align-self: center;     |
| self-stretch  | align-self: stretch;    |
| self-baseline | align-self: baseline;   |



此外，还有place-*属性，这里省略。



## spacing

### Padding

| 左侧                | 右侧       |
| ------------------- | ---------- |
| p,px,py,pt,pr,pb,pl | 0,0.5,1-96 |

根据【左侧-右侧】的组合，可以生成很多种预设。



### Margin

> https://tailwindcss.com/docs/margin

| 左侧                | 右侧            |
| ------------------- | --------------- |
| m,mx,my,mt,mr,mb,ml | 0，正整数，小数 |



### Space Between

| space-x-*       | space-y-*       |
| --------------- | --------------- |
| 0，正整数，小数 | 0，正整数，小数 |



## sizing

### Width

示例：

- w-0
- w-px
- w-{1-96}
- w-auto
- w-分数
- w-screen
- w-min
- w-max
- w-fit



### Min-Width

| Class      | Properties              |
| ---------- | ----------------------- |
| min-w-0    | min-width: 0px;         |
| min-w-full | min-width: 100%;        |
| min-w-min  | min-width: min-content; |
| min-w-max  | min-width: max-content; |
| min-w-fit  | min-width: fit-content; |



### Max-Width

| Class            | Properties                     |
| ---------------- | ------------------------------ |
| max-w-0          | max-width: 0rem; /* 0px */     |
| max-w-none       | max-width: none;               |
| max-w-xs         | max-width: 20rem; /* 320px */  |
| max-w-sm         | max-width: 24rem; /* 384px */  |
| max-w-md         | max-width: 28rem; /* 448px */  |
| max-w-lg         | max-width: 32rem; /* 512px */  |
| max-w-xl         | max-width: 36rem; /* 576px */  |
| max-w-2xl        | max-width: 42rem; /* 672px */  |
| max-w-3xl        | max-width: 48rem; /* 768px */  |
| max-w-4xl        | max-width: 56rem; /* 896px */  |
| max-w-5xl        | max-width: 64rem; /* 1024px */ |
| max-w-6xl        | max-width: 72rem; /* 1152px */ |
| max-w-7xl        | max-width: 80rem; /* 1280px */ |
| max-w-full       | max-width: 100%;               |
| max-w-min        | max-width: min-content;        |
| max-w-max        | max-width: max-content;        |
| max-w-fit        | max-width: fit-content;        |
| max-w-prose      | max-width: 65ch;               |
| max-w-screen-sm  | max-width: 640px;              |
| max-w-screen-md  | max-width: 768px;              |
| max-w-screen-lg  | max-width: 1024px;             |
| max-w-screen-xl  | max-width: 1280px;             |
| max-w-screen-2xl | max-width: 1536px;             |

max-w开头。



### Height

类似于width。



### Min-Height

| Class        | Properties               |
| ------------ | ------------------------ |
| min-h-0      | min-height: 0px;         |
| min-h-full   | min-height: 100%;        |
| min-h-screen | min-height: 100vh;       |
| min-h-min    | min-height: min-content; |
| min-h-max    | min-height: max-content; |
| min-h-fit    | min-height: fit-content; |



### Max-Height

类似于height。



## Typography

### Font Family

| Class      | Properties                                                   |
| ---------- | ------------------------------------------------------------ |
| font-sans  | font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; |
| font-serif | font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif; |
| font-mono  | font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; |

三种字体stack，分别是无衬线，衬线，等宽。



### Font Size

text-{xs,sm,base,lg,xl,[2-9]xl}



### Font Smoothing

| Class                | Properties                                                   |
| -------------------- | ------------------------------------------------------------ |
| antialiased          | -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; |
| subpixel-antialiased | -webkit-font-smoothing: auto; -moz-osx-font-smoothing: auto; |



### Font Style

| Class      | Properties          |
| ---------- | ------------------- |
| italic     | font-style: italic; |
| not-italic | font-style: normal; |



### Font Weight

| Class           | Properties        |
| --------------- | ----------------- |
| font-thin       | font-weight: 100; |
| font-extralight | font-weight: 200; |
| font-light      | font-weight: 300; |
| font-normal     | font-weight: 400; |
| font-medium     | font-weight: 500; |
| font-semibold   | font-weight: 600; |
| font-bold       | font-weight: 700; |
| font-extrabold  | font-weight: 800; |
| font-black      | font-weight: 900; |



### Letter Spacing

| Class            | Properties                |
| ---------------- | ------------------------- |
| tracking-tighter | letter-spacing: -0.05em;  |
| tracking-tight   | letter-spacing: -0.025em; |
| tracking-normal  | letter-spacing: 0em;      |
| tracking-wide    | letter-spacing: 0.025em;  |
| tracking-wider   | letter-spacing: 0.05em;   |
| tracking-widest  | letter-spacing: 0.1em;    |



### Line Height

Utilities for controlling the leading (line height) of an element.

| Class           | Properties                       |
| --------------- | -------------------------------- |
| leading-3       | line-height: .75rem; /* 12px */  |
| leading-4       | line-height: 1rem; /* 16px */    |
| leading-5       | line-height: 1.25rem; /* 20px */ |
| leading-6       | line-height: 1.5rem; /* 24px */  |
| leading-7       | line-height: 1.75rem; /* 28px */ |
| leading-8       | line-height: 2rem; /* 32px */    |
| leading-9       | line-height: 2.25rem; /* 36px */ |
| leading-10      | line-height: 2.5rem; /* 40px */  |
| leading-none    | line-height: 1;                  |
| leading-tight   | line-height: 1.25;               |
| leading-snug    | line-height: 1.375;              |
| leading-normal  | line-height: 1.5;                |
| leading-relaxed | line-height: 1.625;              |
| leading-loose   | line-height: 2;                  |



### Text Align

| Class        | Properties           |
| ------------ | -------------------- |
| text-left    | text-align: left;    |
| text-center  | text-align: center;  |
| text-right   | text-align: right;   |
| text-justify | text-align: justify; |
| text-start   | text-align: start;   |
| text-end     | text-align: end;     |



### Text Color

text-{?}



### Text Decoration

| Class        | Properties                          |
| ------------ | ----------------------------------- |
| underline    | text-decoration-line: underline;    |
| overline     | text-decoration-line: overline;     |
| line-through | text-decoration-line: line-through; |
| no-underline | text-decoration-line: none;         |



### Text Decoration Style

| Class             | Properties                     |
| ----------------- | ------------------------------ |
| decoration-solid  | text-decoration-style: solid;  |
| decoration-double | text-decoration-style: double; |
| decoration-dotted | text-decoration-style: dotted; |
| decoration-dashed | text-decoration-style: dashed; |
| decoration-wavy   | text-decoration-style: wavy;   |



### Text Decoration Thickness

| Class                | Properties                            |
| -------------------- | ------------------------------------- |
| decoration-auto      | text-decoration-thickness: auto;      |
| decoration-from-font | text-decoration-thickness: from-font; |
| decoration-0         | text-decoration-thickness: 0px;       |
| decoration-1         | text-decoration-thickness: 1px;       |
| decoration-2         | text-decoration-thickness: 2px;       |
| decoration-4         | text-decoration-thickness: 4px;       |
| decoration-8         | text-decoration-thickness: 8px;       |



### Text Underline Offset

| Class                 | Properties                   |
| --------------------- | ---------------------------- |
| underline-offset-auto | text-underline-offset: auto; |
| underline-offset-0    | text-underline-offset: 0px;  |
| underline-offset-1    | text-underline-offset: 1px;  |
| underline-offset-2    | text-underline-offset: 2px;  |
| underline-offset-4    | text-underline-offset: 4px;  |
| underline-offset-8    | text-underline-offset: 8px;  |



### Text Transform

| Class       | Properties                  |
| ----------- | --------------------------- |
| uppercase   | text-transform: uppercase;  |
| lowercase   | text-transform: lowercase;  |
| capitalize  | text-transform: capitalize; |
| normal-case | text-transform: none;       |



### Text Indent

Utilities for controlling the amount of empty space shown before text in a block.

indent-{?}





### Vertical Align

仅对行内或者table-cell元素有效。

| Class             | Properties                   |
| ----------------- | ---------------------------- |
| align-baseline    | vertical-align: baseline;    |
| align-top         | vertical-align: top;         |
| align-middle      | vertical-align: middle;      |
| align-bottom      | vertical-align: bottom;      |
| align-text-top    | vertical-align: text-top;    |
| align-text-bottom | vertical-align: text-bottom; |
| align-sub         | vertical-align: sub;         |
| align-super       | vertical-align: super;       |



### Whitespace

Utilities for controlling an element's white-space property.

| Class               | Properties             |
| ------------------- | ---------------------- |
| whitespace-normal   | white-space: normal;   |
| whitespace-nowrap   | white-space: nowrap;   |
| whitespace-pre      | white-space: pre;      |
| whitespace-pre-line | white-space: pre-line; |
| whitespace-pre-wrap | white-space: pre-wrap; |



### Word Break

| Class        | Properties                                 |
| ------------ | ------------------------------------------ |
| break-normal | overflow-wrap: normal; word-break: normal; |
| break-words  | overflow-wrap: break-word;                 |
| break-all    | word-break: break-all;                     |
| break-keep   | word-break: keep-all;                      |



### Content

| Class        | Properties     |
| ------------ | -------------- |
| content-none | content: none; |

用于使用伪类来生成文本内容。

```html
Higher resolution means more than just a better-quality image. With a Retina
6K display, <a class="text-blue-600 after:content-['_↗'] ..." href="https://www.
apple.com/pro-display-xdr/" target="_blank">Pro Display XDR</a> gives you
nearly 40 percent more screen real estate than a 5K display.
```

```css
.after\:content-\[\'_\2197\'\]:after {
    --tw-content: " ↗";
    content: var(--tw-content);
}
```



## background

注意bg-color以及bg-gradient。



## Border

border以及divider（分割线）。



## Effects

### box-shadow

| Class        | Properties                                                   |
| ------------ | ------------------------------------------------------------ |
| shadow-sm    | box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);                   |
| shadow       | box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1); |
| shadow-md    | box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1); |
| shadow-lg    | box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1); |
| shadow-xl    | box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1); |
| shadow-2xl   | box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);             |
| shadow-inner | box-shadow: inset 0 2px 4px 0 rgb(0 0 0 / 0.05);             |
| shadow-none  | box-shadow: 0 0 #0000;                                       |

这里依旧是语义化定义了一些box shadow预设。实际上不太实用，因为super parameter太多了，笛卡儿乘积的结果数过大，很难穷举。

### box-shadow color

略。



### opacity

opacity-{0-100},不会产生歧义。



### Mix Blend Mode

| Class                  | Properties                    |
| ---------------------- | ----------------------------- |
| mix-blend-normal       | mix-blend-mode: normal;       |
| mix-blend-multiply     | mix-blend-mode: multiply;     |
| mix-blend-screen       | mix-blend-mode: screen;       |
| mix-blend-overlay      | mix-blend-mode: overlay;      |
| mix-blend-darken       | mix-blend-mode: darken;       |
| mix-blend-lighten      | mix-blend-mode: lighten;      |
| mix-blend-color-dodge  | mix-blend-mode: color-dodge;  |
| mix-blend-color-burn   | mix-blend-mode: color-burn;   |
| mix-blend-hard-light   | mix-blend-mode: hard-light;   |
| mix-blend-soft-light   | mix-blend-mode: soft-light;   |
| mix-blend-difference   | mix-blend-mode: difference;   |
| mix-blend-exclusion    | mix-blend-mode: exclusion;    |
| mix-blend-hue          | mix-blend-mode: hue;          |
| mix-blend-saturation   | mix-blend-mode: saturation;   |
| mix-blend-color        | mix-blend-mode: color;        |
| mix-blend-luminosity   | mix-blend-mode: luminosity;   |
| mix-blend-plus-lighter | mix-blend-mode: plus-lighter; |

类似于AE的图层模式。可以迁移知识体系来学习。对于图层的叠加效果，可以使得web页面更加生动。

可惜目前还是没能引入插件系统。



### Background Blend Mode

| Class                | Properties                          |
| -------------------- | ----------------------------------- |
| bg-blend-normal      | background-blend-mode: normal;      |
| bg-blend-multiply    | background-blend-mode: multiply;    |
| bg-blend-screen      | background-blend-mode: screen;      |
| bg-blend-overlay     | background-blend-mode: overlay;     |
| bg-blend-darken      | background-blend-mode: darken;      |
| bg-blend-lighten     | background-blend-mode: lighten;     |
| bg-blend-color-dodge | background-blend-mode: color-dodge; |
| bg-blend-color-burn  | background-blend-mode: color-burn;  |
| bg-blend-hard-light  | background-blend-mode: hard-light;  |
| bg-blend-soft-light  | background-blend-mode: soft-light;  |
| bg-blend-difference  | background-blend-mode: difference;  |
| bg-blend-exclusion   | background-blend-mode: exclusion;   |
| bg-blend-hue         | background-blend-mode: hue;         |
| bg-blend-saturation  | background-blend-mode: saturation;  |
| bg-blend-color       | background-blend-mode: color;       |
| bg-blend-luminosity  | background-blend-mode: luminosity;  |



## Filters

blur,drop-shadow,grayscale.



## Transitions & Animation

### Animation

> https://tailwindcss.com/docs/animation 这里可以找到几个很好的动画预设。



## Transform

### Scale

| 左侧                  | 右侧   |
| --------------------- | ------ |
| scale,scale-x,scale-y | 正数值 |

>https://tailwindcss.com/docs/scale　

这里tailwind实现的不好，因为没有考虑到scale后与周围的元素在视觉上留下的空隙，即没有修补。



### Rotate

rotate-{0-360}要合理区分间隔值。



### Translate

translate-x以及translate-y



### Skew

Utilities for skewing elements with transform.

- skew-x-*
- skew-y-*



### Transform Origin

Utilities for specifying the origin for an element's transformations.
