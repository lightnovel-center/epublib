# 09 epub 阅读器渲染引擎渲染效果比较

比较的选手：
- Ever Green Browser as baseline
- Sigil
- SumatraPDF
- koodo reader
- neatreader
- thorium

比较的方面：
- 是否开源
- UI界面交互设计与体验
- 是否免费
- 技术架构
- 渲染结果与epub规范的匹配度
- 性能
- 软件迭代、更新维护情况

## baseline: browser

以此为基准。浏览器版本为常绿，以chromium为准。

## Sigil

对html渲染效果，超越baseline，CSS样式完美遵循美化的目标。 还修复了chrome一些bug：

- 突破最小字体12px的下限；
- 去掉默认的`text-shadow` user agent style 污染。

缺点是，它是编辑器，阅读体验和UI很差。

## SumatraPDF
- 对自定义字体的支持很差，要求必须嵌入自定义字体，并且没有fallback。无法识别的字体一律豆腐块。
- CSS排版支持与浏览器不一致。

## koodo reader

- 界面优秀
- 内存占用极高，卡顿频繁。估计有内存泄漏现象。

## neatreader
- CSS排版支持与浏览器不一致。

## thorium

- CSS排版支持与浏览器不一致。
