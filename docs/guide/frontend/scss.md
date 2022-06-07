# SCSS

## OverView
### 简介
> Scss 是成熟、稳定、强大的`CSS预处理器`
> SCSS是Sass3版本当中引入的新语法特性，完全兼容CSS3的同时继承了Sass强大的动态功能
### SCSS实时转换Css
1. Vs Code中安装 `Live Scss Compiler` 扩展
2. 状态栏点击 `Watch Scss` 将 `Scss` 文件格式实时编译成 `Css格式`
3. `Stop Watching Sass` 停止实时编译

***

## 特性
### 1.嵌套CSS
> 减少重复编写常用的选择器，同时让样式表的结构一眼望去更加清晰


> 父选择器标识符&
```scss
.btn {
    display: inline-block;
    margin-top: 1rem;
    padding: 1rem 3rem;
    background: #0097e6;
    color: #fff;
    cursor: pointer;
    font-size: 1.8rem;

    &:hover {
        background: #fff;
        color: #000;
    }
    &::before,
    &::after {
        /*...*/
    }
}
```

```CSS
.btn {...}
.btn:hover {}
.btn::before,
.btn::after {}
```

> 实例2
`CSS`群组嵌套
```CSS
.container h1,
.container h2,
.container h3 {
    margin-bottom: .8em
}
```
`SCSS`群组嵌套
```SCSS
.container {
  h1, h2, h3 {margin-bottom: .8em}
}
```

### 变量
> 下划线与中划线兼容
```SCSS
$link-color: blue;
a {
  color: $link_color;
}
```
> 编译后
```CSS
a {
  color: blue;
}
```

> SCSS变量实例
```SCSS
$body-font: Poppins sans-serif;
$color-black: #323232;
.btn {
    font-size: $body-font;
    border: 2px solid $color-black;
 }
```

```CSS
:root {
    --body-font: Poppins sans-serif;
    --color-black: #323232;
}
.btn {
    font-size: var(--body-font);
    border: 2px solid var(--color-black);
 }
```

### 3.传参
`@minin`声明fuction，然后用`@include`引用fuction(parms)传参，针对不同参数使用

> 继承仅仅是重复选择器，而不会重复属性
>
> 跟混合器相比，继承生成的css代码相对更少
> 继承存在样式层叠的问题
> 不要用后代选择器去继承
```SCSS
@mixin border-radius($radius) {
          border-radius: $radius;
      -ms-border-radius: $radius;
     -moz-border-radius: $radius;
  -webkit-border-radius: $radius;
}

.box {
  @include border-radius(10px);
}
```

### 4.代码引用(无需重写)
`%...` 声明函数，`@extend`引用函数，针对相同参数使用
```SCSS
%message-common {
  border: 1px solid #ccc;
  padding: 10px;
  color: #333;
}

.message {
  @extend %message-common;
}
.success {
  @extend %message-common;
  border-color: green;
}
```
> Css则需在html文件中书写相同的className
```html
<div class="header flex">...<div>
<div class="footer flex">...<div>
```
```
```CSS
.flex {
    display: flex;
    justify-content: center;
    align-items: center;
}
```

### 5. 选择器

```
> 子组合选择器
+ 同层相邻组合选择器
~ 同层全体组合选择器
```

#### SCSS选择器
> SCSS选择器书写方式
```SCSS
article {
  ~ article { border-top: 1px dashed #ccc }
  > section { background: #eee }
  dl > {
    dt { color: #333 }
    dd { color: #555 }
  }
  nav + & { margin-top: 0 }
}
```
> CSS选择器书写方式
```CSS
article ~ article {
    border-top: 1px dashed #ccc
}
article > footer {
    background: #eee
}
article dl > dt {
    color: #333
}
article dl > dd {
    color: #555
}
nav + article {
    margin-top: 0
}
```
#### CSS
##### > 子组合选择器
> 选择article下的`所有`名中section选择器的元素
```CSS
article section { margin: 5px }
```
> 只会选择article下`紧跟`着的子元素中名中section选择器的元素
```CSS
article > section { border: 1px solid #ccc }
```

##### + 同层相邻组合选择器
> 选择header元素后紧跟的p元素
```CSS
header + p { font-size: 1.1em }
```

##### ~ 同层全体组合选择器
> 选择所有跟在article后的同层article元素
```CSS
article ~ article { border-top: 1px dashed #ccc }
```

### 6.导入文件
> SCSS文件导入
```
components
  |__    `_header.scss`
  |__    `_footer.scss`
```

```SCSS
@import "components/header";
```
> CSS文件导入
```
components
  |__    `_header.css`
  |__    `_footer.css`
```

```CSS
@import "./components/_header.css";
```

### 7.注释
```SCSS
// SCSS comment
```
```CSS
/* This is a CSS comment */
```

***

## 常见问题
### CSS预处理器
定义了一种新的专门的编程语言，编译后成正常的CSS文件。为CSS增加一些编程的特性，无需考虑浏览器的兼容问题，让CSS更加简洁，适应性更强，可读性更佳，更易于代码的维护等诸多好处。
CSS预处理器语言：scss（sass）、LESS等；

### Scss与Sass的区别

> 文件扩展名不同：“.sass”和“.scss”；
> Sass是以严格缩进式语法规则来书写的，不带大括号和分号；
> 而SCSS的语法和CSS书写语法类似

### Less
> CSS 是一门非程序式语言，没有变量、函数、scope（作用域）等概念。
> Less在 CSS 的语法基础之上，引入了变量，Mixin（混入），运算以及函数等功能，大大简化了 CSS 的编写，并且降低了 CSS 的维护成本，
> Less并没有裁剪 CSS 原有的特性，更不是用来取代 CSS 的，而是在现有 CSS 语法的基础上，为 CSS 加入程序式语言的特性
### 变量
```Less
@myColor: red;
a {
  color: @myColor;
}
```
### 混入
```Less
@charset "UTF-8";
@mainColor: red;

.b() {
  width: 50%;
}
.f(@direction){
  float: @direction;
}
.guo {
  .b();
  .f(left);
  a {
    display: block;
    &:hover {
      color: @mainColor;
    }
  }
  > div {
    .b();
  }
}
```

### SCSS项目流程

> 1. 在公司项目中，前端css文件我们都是写SCSS文件,
> 2. 然后通过@import导入到style.scss文件中，
>3.  最后通过gulp来生成style.css文件。

> 现在几乎所有Sass的工具、插件、demo等都是使用SCSS语法来开发。已经很难再找到一个Sass缩进语法的插件等，所以，强烈推荐使用SCSS来写css文件
> 另外，注意一点，就是Sass从来没有写成SASS, 无论指语法还是这个语言，都是使用Sass
> 而SCSS一直都是大写