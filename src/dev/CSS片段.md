---
author: xlc520
title: CSS片段
excerpt: 
description: 
date: 2024-04-12
category: Java
tag: Java
article: true
timeline: true
icon: java
---

# CSS 片段

**一键换主题色**

```css
 body {
   filter: hue-rotate(45deg);
 }
```

给 body 标签设置这个属性样式，改变角度看看效果吧。

**弧形盒子（背景）**

```css
<div class="topBox"></div>

<style>

/* 弧形背景 */
  .topBox {
    width: 100%;
    position: relative;
    z-index: 1;
    overflow: hidden;
    padding: 60rpx 20rpx 20rpx;
    box-sizing: border-box;
  }

  .topBox::after {
    content: "";
    width: 140%;
    height: 200px;
    position: absolute;
    left: -20%;
    top: 0;
    z-index: -1;
    border-radius: 0 0 50% 50%;
    background: #00aaff;
  }

  /* 弧形背景 */

</style>
```

这个效果一般用于轮播背景或者个人中心背景。

**网页一键变灰**

```css
body{
  filter: grayscale(1);
}
```

一般用于特殊时期，网页变灰，只需要给 body 标签添加这行样式代码。

**网页 css 波浪**

```css
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
      width="100%" height="100%" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMax slice">
      <defs>
        <linearGradient id="bg">
          <stop offset="0%" style="stop-color:rgba(130, 158, 249, 0.06)"></stop>
          <stop offset="50%" style="stop-color:rgba(76, 190, 255, 0.6)"></stop>
          <stop offset="100%" style="stop-color:rgba(115, 209, 72, 0.2)"></stop>
        </linearGradient>
        <path id="wave" fill="url(#bg)"
          d="M-363.852,502.589c0,0,236.988-41.997,505.475,0
          s371.981,38.998,575.971,0s293.985-39.278,505.474,5.859s493.475,48.368,716.963-4.995v560.106H-363.852V502.589z" />
      </defs>
      <g>
        <use xlink:href='#wave' opacity=".3">
          <animateTransform attributeName="transform" attributeType="XML" type="translate" dur="10s"
            calcMode="spline" values="270 230; -334 180; 270 230" keyTimes="0; .5; 1"
            keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0" repeatCount="indefinite" />
        </use>
        <use xlink:href='#wave' opacity=".6">
          <animateTransform attributeName="transform" attributeType="XML" type="translate" dur="8s"
            calcMode="spline" values="-270 230;243 220;-270 230" keyTimes="0; .6; 1"
            keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0" repeatCount="indefinite" />
        </use>
        <use xlink:href='#wave' opacty=".9">
          <animateTransform attributeName="transform" attributeType="XML" type="translate" dur="6s"
            calcMode="spline" values="0 230;-140 200;0 230" keyTimes="0; .4; 1"
            keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0" repeatCount="indefinite" />
        </use>
      </g>
</svg>
```

```css
svg {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height:40%;
    box-sizing: border-box;
    display: block;
    background-color: #ffffff;
  }
```

一般用于登录/注册页面的顶部或底部，实现一个波浪滚动效果。

**文字超出显示省略号**

```css
p{
 overflow: hidden;
 display: -webkit-box;
 -webkit-box-orient: vertical;
 -webkit-line-clamp: 2;
 text-overflow: ellipsis;
}
```

一般用于文本的超出隐藏显示省略号效果，应用很广泛。

-webkit-line-clamp 属性为需要显示的行数，例子中为 2 行。

**设置字母大小写**

```css
p {text-transform: uppercase} /* 所有字母变成大写字母*/
p {text-transform: lowercase} /* 所有字母变成小写字母*/
p {text-transform: capitalize} /* 首字母大写*/
p {font-variant: small-caps} /* 字体变成小型的大写字母*/
```

**设置 placeholder 样式**

```css
input::-webkit-input-placeholder {
  color: red;
}
```

### 隐藏滚动条

```css
div::-webkit-scrollbar {
  display: none
}
```

### 禁止选中

```css
.texts{
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
```

**移动端软键盘右下角搜索文字**

```css
<form action="#">
    <input type="search" placeholder="请输入..." name="search" />
</form>
```
