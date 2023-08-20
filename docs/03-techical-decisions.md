# 技术决策

抛弃使用 tailwindcss 作为生成 CSS 方案的策略，原因在于：
- 无法开箱即用地使用循坏来生成一系列预定义的 CSS 样式。
- 官方不推荐配合 CSS 预处理器来使用，必须独立使用 CSS 预处理器。
  > The most important thing to understand about using Tailwind with a preprocessor is that preprocessors like Sass,
  Less, and Stylus run separately, before Tailwind.

虽然不使用 tailwindcss，但是 tailwindcss 作为一个 utility-first 设计理念的框架，这点和该仓库的目标非常类似。

本质上就是在写一个专门为特定领域的epub排版的CSS库。

因此，我们可以参考 tailwindcss 的 CSS 类的命名方式，尽可能保持 CSS 类名规范，即使 CSS 类名将很多英文单词缩写了。

另外，对于某些想要特定指定的一次性 CSS 样式，例如 width: 45.5px ，此时或许可以考虑使用 tailwindcss 的 Arbitrary values 特性。

那么，结论是：将使用 CSS 预处理器来生成 CSS 库，这里使用 Sass 中的 scss 语法。不使用 sass，因为 sass 语法基于空格缩进，IDE 格式化支持不够友好。
