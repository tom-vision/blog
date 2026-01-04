## 设置宽高比例

通过 `aspect-ratio` 属性，可以根据指定的宽度自动调整高度（反之亦然）。
```css
.box {
  width: 90%;
  aspect-ratio: 16/9;
}
```

## 逻辑属性

使用 `margin-block` 和 `margin-inline` 替代传统的 `margin-top`、`margin-right` 等，更加简洁直观。
```css
.box {
  margin-block: 5px 10px;    /* 上边距 5px，下边距 10px */
  margin-inline: 20px 30px;  /* 左边距 20px，右边距 30px */
}
.box {
  padding-block: 10px 20px;  /* 上下内边距 */
  padding-inline: 15px 25px; /* 左右内边距 */
}
```
这些属性会自动适配文本方向（如从左到右或从右到左）。

## 平滑滚动

使用 `scroll-behavior: smooth;` 可以为页面滚动添加平滑过渡效果。
```css
html {
  scroll-behavior: smooth;
}
```

## 垂直书写

使用 `writing-mode: vertical-rl;` 可以将文本垂直书写（从右到左）。
```css
.vertical-text {
  writing-mode: vertical-rl;
}
```

## 限制文本宽度

通过限制每行文本的最大字符数，提升可读性，“ch” 单位表示一个字符的宽度，非常适合用于段落样式。
```css
p {
  max-width: 100ch;
}
```

## 背景滤镜

使用 `backdrop-filter` 可以为元素的背景添加滤镜效果，如模糊、颜色调整等。
```css
.element {
  backdrop-filter: blur(10px);
}
```

## 剪切路径

使用 `clip-path` 可以创建复杂的形状来裁剪元素，实现独特的视觉效果。
```css
.element {
  clip-path: polygon(0 0, 100% 0, 100% 50%, 0 50%);
}
```

## 图层混合

使用 `mix-blend-mode` 可以将元素的内容与背景进行混合，实现各种有趣的效果。
```css
.element {
  mix-blend-mode: multiply;
}
```

## 文本环绕

使用 `shape-outside` 可以将文本环绕在元素周围，实现复杂的布局效果。
```css
.element {
  shape-outside: circle(50% at 50% 50%);
}
```

## 图片填充

使用 `object-fit: cover;` 可以保持图片填充容器的方式。
```css 
img {
  object-fit: cover;
}
```