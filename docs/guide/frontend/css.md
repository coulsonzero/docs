# CSS



## html中引用css
```html
<link rel="stylesheet" href="style.css">
```

## Seletor
```html
<div id="demo1"></div>
<div class="demo2"></div>
```
```css
#demo1 {}
.demo2 {}

```


## 通用样式

```css
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap');
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap");

* {
    margin: 0;
    padding: 0;
	box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}
body {
    /* flex 居中显示 */
    display: flex;
    justify-content: center;
    align-items: center;
    /*
     * grid 居中显示
     * display: grid;
     * place-items: center;
     */

    /* 设置高度后才会垂直居中 */
    min-height: 100vh;

    /* 子元素竖排 */
    flex-direction: column;
    background-color: bisque;
}

li {
  	list-style: none;
}
```





## Text

![](@/assets/css/text-yinxiang.png)
![](@/assets/css/text-win.png)


```css
/* font: italic bord 15px Arial; */


/* 字体类型 */
font-family: 'Poppins', sans-serif;
/* 字体大小*/
font-size: 16px/1rem;

/* 字体颜色 */
color: red;
/* 字体背景色 */
background-color: skyblue;
/* 文本阴影 */
text-shadow: 5px 2px 4px gray;

/* 粗体(100-900) */
font-weight: bold;
/* 斜体 */
font-style: italic;
/* 下划线/删除线 */
text-decoration: underline/line-through;
/* 大小写转换 */
text-transform: capitalize/uppercase/lowercase;
/* 小型大写 */
/* font-variant: small-caps; */
/* 上下标 */
vertical-align: super/sub;


/* 水平对齐方式 */
text-align: left/center/right;
/* 垂直对齐方式 */
vertical-align: top/middle/bottom;




/* 缩进 */
text-indent: 30px;
/* 行间距 */
line-height: 36px;
/* 字符间距 */
letter-spacing: 3px;
/* 单词间距 */
word-spacing: 5px;


/* 换行 */
white-space: nowrap/pre-warp;
/* 溢出：隐藏/滚动 */
overflow: hidden;
overflow-x: hidden;
overflow-y: scroll;

/* 禁止选中 */
user-select: none;
-webkit-user-select: none;
```


::: tip
```css
/**
 * 字体颜色：
 * red/green/blue/yellow/orange/gray/black/white
 * #323232
 * rgb()、rgba()
 * hsl()、hsla()
 */
```
:::

![](@/assets/css/text-mac.png)


## Properties

### Box Model

```css
width: 200px;
height: 50px;

/* 圆角 */
border-radius: 50%;   /* top right bottom left */
border-radius: 51% 49% 48% 52% / 62% 44% 56% 38%;
border-radius: 44% 56% 46% 54% / 36% 50% 50% 64%;
/* 边框 */
border: 5px solid green;     /* dashed虚线 hidden隐藏边框线 */
/* 内间距 */
padding: 10px;
/* 外间距 */
margin: top right bottom left;


/* 溢出 */
overflow: hidden;
overflow-y: scroll;
/* 盒子阴影 */
box-shadow: 6px 6px 20px 0 rgba(0,0,0,0.5);
box-shadow: -20px 30px 16px #1B6CFB,
            -40px 60px 32px #1b6cfb,
            inset -6px 6px 10px #1B6CFB,
            inset 2px 6px 10px #1a74e5,
            inset 20px -20px 22px white,
            inset 40px -40px 44px #a8ceff;
```



### Background

```css
/* 渐变色、合色 */
background: linear-gradient(rgb(65, 155, 77), skyBlue, deepSkyBlue);
background: linear-gradient(215deg, #12c2e9, #c471ed, #f64f59);
/* 颜色 */
background-color: skyblue/lightgreen/lightyellow;
/* 大小 */
background-size: cover/100% 100%;
/* 图片 */
background-image: url("css_logo.png");
background-position: inherit;
/* 重复 */
background-repeat: no-repeat/repeat-y/repeat-x/inherit;
/* 配合背景图片滑动 */
background-attachment: fixed/scroll;
/* 配合border使边框透明 */
background-clip: padding-box;
```





### List <列表>
```html
<ul>
	  <li><a href='#'>...</a></li>
	  <li><a href='#'>...</a></li>
	  <li><a href='#'>...</a></li>
</ul>
```

```css
ul {
    /* 有序列表 */
    /* list-style: inside inside; */
    list-style: inside outside;

    /* 无序列表 */
    /* list-style: inside; */
}

ul {
    /* 项目列表 */
  	list-style: type position image;
    list-style: square outside none;
    list-style: none inside url("logo.png");

    list-style-type: circle/square/lower-alpha;
    list-style-position: inside;
    list-style-image: url("logo.png");
}
```



### Table <表格>

```html
<table border="1">
<caption>Table Name</caption>
<tr>
  <th>...</th>
  <th>...</th>
</tr>
<tr>
  <td>...</td>
  <td>...</td>
</tr>
</table>
```

```css
table {
    border-collapse: separate;
    border-spacing: 0px 0px;
    empty-cells: hide;
    table-layout: auto/fixed;
}
caption {
    caption-side: top;
}
```

### a <超链接>
```css
a:hover
a:link
a:visited
a:active
```

### img <图片>

```html
<img src="assets/cat.png" alt="" />
```
```css
/* 禁止图片拖动 */
-webkit-user-drag: none;
```

## button <按钮>

```css
/* 禁止点击事件 */
pointer-events: none;
```

### 鼠标指针样式

```css
cursor: pointer;
cursor: url(https://...) auto auto;
/**
 * default
 * auto/text 文本输入
 * move 移动
 */
```

## Positioning and Layout

```css
/* flex弹性布局 */
display: flex;
/* 方向 */
flex-direction: row/column/row-reverse/column-reverse;
/* 对齐 */
justify-content: center;     /* 水平居中对齐 */
align-items: center;         /* 垂直居中对齐 */
align-content: stretch/flex-start/center/flex-end/space-around/space-between;
/* 换行 */
flex-wrap: nowrap/wrap/wrap-reverse;

/* flex拓展 */
flex: 0 1 auto
flex-grow: 0/1...
flex-shrink: 1
flex-basis: auto/100px/50%/Mix
row-gap
column-gap

/* grid布局 */
display: grid;
/* 元素占比 */
grid-template: 1fr 1fr  1fr/ 60% auto;  /* 3行2列,行等比 */
grid-template-columns: 50px auto 120px;  /* 2fr */repeat(3, 1fr)/repeat(4, max-content)/repeat(autofill, minmax(200px, 1fr));
grid-template-rows: 50px 50px 50px;
grid-template-areas: ". item1 . item2" "item3 item4";
/* 居中 */
place-items: center;
/* 元素间距 */
gap: 5px;
row-gap: 5px;
column-gap: 10px;
/* 行列数比值 *
grid-column: span 3;
grid-row: span 1;



/* 隐藏 */
display: none;          /* 不会占位 */
visibility: hidden;     /* 会占位 */

/* 位置 */
position: relative/absolute/fixed;
/* 图层层级(position: relative) */
z-index: 3;

/* 对齐 */
float: left/right/none;
clear: left/right/both;
```

**示例**
```css
/* flex弹性布局 */
body {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}

/* grid网格布局 */
div {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
    grid-gap: 4rem 1rem;
    place-items: center;
}
```



## CSS3
### 圆角
```css
border-radius: 10px;
border-radius: 0 0 20px 20px;
```
### 盒子阴影
```css
box-shadow: 10px 10px #888888;
box-shadow: 10px 10px 5px 5px #888888;
/* blur spread */
box-shadow: -10px -10px 5px -5px #888888;
box-shadow: inset 10px 10px 5px #888888,
			inset -10px -10px 5px #888888;
```
```css
rgba(..., alpha)
```
```css
box-reflect: below 1px linear-gradient(transparent, #0005);
```

## 动画效果

```css
<div></div>
div {
    width: 50px;
    height: 50px;
    background: #32CD32;
    /* hover平滑特效 */
    transition: width 2s ease-in;
    will-change: width;
    transition: opacity 100ms 800ms cubic-bezier(0.39, 0.575, 0.565, 1);
    will-change: opacity;
    /* 旋转 */
    transform: rotate(10deg);
    transform: rotateX(50deg) rotateY(80deg) rotateZ(20deg);
  	/* 自由变换*/
	transform: rotate(-45deg) translate(50px,10px)
    /* 平移 */
    transform: translate(100px, 50px);
    transform: translate(-50%, -50%);
    transform: translateX(30px) translateY(5em) translateZ(-13px);
    /* 倾斜 */
    transform: skew(30deg);
    /* 缩放 */
    transform: scale(1.7, 0.7);
    /* 动画帧: name duration time-fuction delay iteration-count direction  */
    animation: example 3s ease 1s infinite reverse;
  /* 3D转换 */
  	transform: rotateX(90deg)/rotateY()/rotateX()/none/rotate3d();
  	translateX(9px)/translateY(5em)/translateZ(-13px)/translate3d(9px, 5em, -13px);scale3d();
    transform-origin: top left;
}
div:hover {
    width: 250px;
}

@keyframes example {
    0% {width: 50px;}
    50% {width: 200px;}
    100% {width: 50px;}
}
```

### Animation

```css
/* 关键帧动画 */
div{
    animation-name: colorchange;
    animation-duration: 3s;
}
@keyframes colorchange {
    0% {}       /* from */
    50% {}
    100% {}     /* to */
}
```

```css
animation: colorchange 3s ease-in 1s infinite reverse;
```

```css
animation-time-function: ease/linear/ease-in/ease-out/ease-in-out/cubic-bezier(n,n,n,n);
/* 动画延迟数秒后开始播放 */
animation-delay: 2s;
/* 循环播放次数 */
animation-iteration-count: infinite/5;
animation-direction: normal/reverse/alternate/alternate-reverse;
```





## Filter

```css
/* 滤镜 */
filter
/* 不清晰度/模糊度 */
filter: blur(2px);
/* 不透明度 */
filter: opacity(50%);
/* 灰度 */
filter: grayscale(70%);
/* 色彩饱和度 */
filter: saturate(30%/2.5);
/* 亮度 */
filter: brightness(70%),
/* 棕色 */
filter: sepia(200%);
/* 对比度 */
filter: contrast(85%);
/* 色相 */
filter: hue-rotate(180deg);
/* 明暗度反色 */
filter: invert(70%);
/* 投影 */
filter: drop-shadow(5px 5px 2px gray);
```

## CSS拓展
### 滚动条

```css
html::-webkit-scrollbar {
    width: .8rem;
}
/* 滚动条背景色 */
html::-webkit-scrollbar-track {
    background: #000;
}
/* 滚动条色 */
html::-webkit-scrollbar-thumb {
    background: #0097e6;
}

```

### 拖动选中

```css
::selection {
    background-color: rgb(34, 34, 34);
    color: rgb(236, 231, 231);
}
```




文字不可选中复制
```css
user-select: none;
-moz-user-select: none;
-ms-user-select: none;
-webkit-user-select: none;
```

图片不可拖动
```css
img {
    user-drag: none;
    -webkit-user-drag: none;
}
```

按钮禁用事件
```css
pointer-events: none;
```









## FAQ

### 禁止文本选中

```css
user-select: none;
-webkit-user-select: none;
```

### 禁止图片拖动

```css
-webkit-user-drag: none;
```
### 去掉label点击时的背景色

```css
label {
    -webkit-tap-highlight-color: transparent;
}
```

## 高级CSS特效

### 渐变字体色

```css
/* 字体色渐变 */
background: linear-gradient(120deg, rgb(132,111,244), rgb(241,118,116));
background-clip: text;
-webkit-text-fill-color: transparent;
-webkit-background-clip: text;
```

### 毛玻璃效果

```css
background: hsla(0, 0%, 100%, .72);
backdrop-filter: blur(16px) saturate(180%);
-webkit-backdrop-filter: blur(16px) saturate(180%);
```

