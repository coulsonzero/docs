# HTML


------

## Overview

> HTML (Hyper Text Markup Language)
>
> 超文本标记语言

### html基本文档

> 快捷方式：! + Tab

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <script src="script.js"></script>
</body>
</html>
```

网站描述

```html
<meta property="og:description" content="...">
```

网站Logo

```html
<meta property="og:image" content="logo.png">
```

网站标题

```html
<meta property="og:site_name" content="Apple">
<meta property="og:title" content="..">
```

import jQuery

```html
<script src="https://code.jquery.com/jquery-3.1.1.js"></script>
```

import Vue

```html
<script src="https://unpkg.com/vue"></script>
```





## Basic Tags

```html
<div class="demo">
    <h1>title</h1>
    <p>Paragraph</p>
    <!--注释-->
    <br/>
    <hr>
    <a href="https://www.github.com/" target="_blank" rel="nofollow"></a>
    <img src="demo.png" alt="discription" loading="lazy">
</div>

<!--列表-->
<ol>
    <li>item 1</li>
    <li>item 2</li>
</ol>

<!--表格-->
<table>
    <caption>Table Title</caption>
    <tr>
        <th>Header 1</th>
        <th>Header 2</th>
    </tr>
    <tr>
        <td>row 1, cell 1</td>
        <td>row 1, cell 2</td>
    </tr>
    <tr>
        <td>row 2, cell 1</td>
        <td>row 2, cell 2</td>
    </tr>
</table>

<!--表单-->
<form action="demo-form.py" method="get">
	<!--Frame-->
    <fieldset><legend>Personal information:</legend>
    <input type="text"><br/>
    <input type="password"><br/>
    </fieldset>
</form>

<!--内嵌网页-->
<iframe src="https://www.csdn.net/"></iframe>
```


### h (标题)

```html
<h1>title</h1>
...
<h6>title</h6>
```
### p (段落)

```html
<p>Paragraph</p>
```
#### 格式化
```html
<!-- 加粗 -->
<b>bold</b>
<!-- 斜体 -->
<i>italic</i>
<!-- 下划线 -->
<u>underline</u>
<!-- 删除线 -->
<s>删除线</s>

<sup>上标</sup>
<sub>下标</sub>

<!----------------->
<strong></strong>: 加粗
<em></em>: 斜体
<ins></ins>: 下划线
<del>...</del>: 划掉
```
### other
#### 注释
```html
<!-- 注释 -->

<!--
  	 注释多行
-->
```
#### br 换行符

```html
<br>
```
#### hr  分割线

```html
<hr>
```
#### div

```html
<div>
</div>
```
#### span
```html
<span></span>
<h1>This is <span style="color:red">Heading 1</span></h1>
```


------

### button (按钮)

```html
<button>Click Me !</button>
```
### a (链接)

```html
<a href="#"></a>
<!-- 链接到id="About" -->
<a href="#About">github</a>
<!-- 网页链接 -->
<a href="https://github.com/">github</a>
<!-- 新窗口打开链接 -->
<a href="https://www.runoob.com/" target="_blank"></a>
<a href="https://www.runoob.com/" target="_blank" rel="nofollow"></a>
<!-- 点击链接按钮下载文件 -->
<a href="**.pdf" download=""></a>
```

参数说明
:::tip
`href="#"` : 链接地址

`target="_blank"`:  新窗口链接

`rel="nofollow"`:  链接域，搜索引擎忽略该链接

`download=""`: 下载链接
:::

### img (图像)

```html
<img src="assets/images/cat.png" alt="" />
```

:::tip

> `src`: 图片链接地址
>
> `alt`: 图片不能正常显示时, 使用alt文本代替

:::
```html
<img src="cat.png" alt="Cat" />
<img src="demo.png" alt="discription" loading="lazy" width="300" height="200" />
```
------

### li (列表)

- 无序列表

```html
<!-- 无序列表Unordered List -->
<ol>
    <li>item 1</li>
    <li>item 2</li>
    <li>ietm 3</li>
</ol>
```

- 有序列表

```html
<!-- 有序列表Ordered List -->
<ul>
    <li>item 1</li>
    <li>item 2</li>
    <li>ietm 3</li>
</ul>
```



### Table (表格)

```html
<table>
    <caption>Table Title</caption>
    <tr>
        <th>Header 1</th>
        <th>Header 2</th>
    </tr>
    <tr>
        <td>row 1, cell 1</td>
        <td>row 1, cell 2</td>
    </tr>
    <tr>
        <td>row 2, cell 1</td>
        <td>row 2, cell 2</td>
    </tr>
</table>
```

**For Example**

```html
<table width="500" height="300" border="1" cellpadding="0" cellspacing="0" align="center">
  <caption>Table Title</caption>
  <tr>  <th>Name</th>  <th>Sex   </th>  <th>Age</th>  </tr>
  <tr>  <td>Davd</td>  <td>male  </td>  <td>23</td>   </tr>
  <tr>  <td>Andy</td>  <td>female</td>  <td>22</td>   </tr>
  <tr>  <td>Pole</td>  <td>male  </td>  <td>28</td>   </tr>
  <tr>  <td>John</td>  <td>male  </td>  <td>18</td>   </tr>
  <tr>  <td>Sady</td>  <td>female</td>  <td>30</td>   </tr>
</table>

<style>
	tr {text-align: center;}
</style>
```

#### 表格---线&宽高

```html
<table border="1" width=600px height=300px cellpadding="2" cellspacing="1">
<!-- 默认值：cellpadding="2" cellspacing="1" -->
```
#### 单元格---背景色
```html
<td bgcolor="red"></td>
```
#### 单元格---合并

```html
<td colspan="2"><br /></td>
<td rowspan="3"><br /></td>
```
#### 单元格---class

```html
<td class="selected"></td>
```


### input

:::tip
```html
placeholder="Email"
size="50"
name="username"
value="Click me"
```
:::

```html
<!-- 文本框 (默认) -->
<input type="text">

<!-- 密码框 -->
<input type="password">

<!-- 复选框 -->
<input type="checkbox">
```

#### other

```html
<!--===== 单行输入框 =====-->
<input type="text">
<input type="email">                    <br/>
<input type="tel">					    <br/>
<input type="url">				        <br/>
<input type="datetime">			        <br/>
<!-- 密码，隐藏输入显示 -->
<input type="password">
<!-- 数字，有增减按钮 -->
<input type="number">				    <br/>
<!-- 搜索，有删除按钮 -->
<input type="search">				    <br/>


<!--多行输入框-->
<textarea></textarea>


<!--===== 选取框 =====-->
<!-- 范围 -->
<input type="range">				    <br/>
<!-- 颜色 -->
<input type="color">				    <br/>
<!-- 年-月-日 -->
<input type="date">					    <br/>
<!-- 年-月 -->
<input type="month">				    <br/>
<!-- 年-周 -->
<input type="week">					    <br/>
<!-- 时-分 -->
<input type="time">					    <br/>


<!--====== 按钮 ======-->

<!-- 单选框 -->
<input type="radio">				    <br/>
<!-- 复选框 -->
<input type="checkbox">			        <br/>
<!-- 按钮 -->
<input type="button" value="Click me">  <br/>
<button type="button">click me</button> <br/>
<!-- 下载按钮 -->
<a download="" href="html.md">下载</a>   <br/>
<!-- 文件选择 -->
<input type="file">					    <br/>
<!-- 表单处理 -->
<input type="submit">            	    <br/>
<input type="reset">				    <br/>
```

#### 单行文本框

```html
<input type="text" name="username"><br>
<input type="text" name="username" size="50">
```
#### 多行文本框
```html
<textarea></textarea>
<textarea rows="10" cols="30" name="message" placeholder="多行文本框"></textarea>
```

#### 按钮

```html
<button>click me</button>
```

```html
<input type="button" value="Cilck Me">
```
#### 单选框

`checked="checked"`: 默认选中
```html
<input type="radio" checked="checked" name="sex" value="male">Male<br>
```
#### 复选框

```html
<input type="checkbox">Remember me
```

```html
<input type="checkbox" name="vehicle" value="Car">I have a car
```
#### submit
```html
<input type="submit" value="Submit">
```

```html
//点击"提交"按钮，表单数据将被发送到服务器上的"demo-form.py"
<form action="demo-form.py">
	<fieldset>
		<legend>Personal information:</legend>
		Username: <input type="text" name="username"><br/>
		Password : <input type="password" name="password"><br/>
		<input type="submit" value="提交">
	</fieldset>
</form>
```

#### 下拉选择框

**`selected`** : 默认选项

```html
<form action="">
	<select name="options">
        <option selected="selected" disabled="disabled"  style='display: none' value=''></option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
	</select>
</form>
```
### Form (表单)
```html
<form>
  ...
</form>
```
#### demo
```html
<form action="demo-form.py" method="get">
  <!--Frame-->
  <fieldset>
   <legend>Personal information:</legend>

   </fieldset>
</form>
```

```html
<form name="myForm" action="/demo/html/action_page.php" onsubmit="return validateForm()" method="post">
  Name: <input type="text" name="name">
  <input type="submit" value="submit">
</form>
```





### iframe (内联网页)

```html
<iframe src="https://www.csdn.net/"></iframe>

<iframe src="https://cn.bing.com/" width=100% height=600px></iframe>

<iframe src="https://stackblitz.com/edit/vue-nkewzs?embed=1&file=src/App.vue&hideNavigation=1" width="100%" height="400px" frameborder="0" style="border-radius:26px; box-shadow: 4px 4px 56px rgba(32,32,32,.5);"></iframe>

<iframe src="https://codepen.io/dilums/pen/ZEBowxX" width="100%" height="400px" frameborder="0" style="border-radius: 20px; box-shadow: 4px 4px 56px rgba(32,32,32,.5);"></iframe>

frameborder="0": 移除边框
```

<iframe src="https://stackblitz.com/edit/vue-nkewzs?embed=1&file=src/App.vue&hideNavigation=1" width="100%" height="400px" frameborder="0" style="border-radius:26px; box-shadow: 4px 4px 56px rgba(32,32,32,.5);"></iframe>

<iframe src="https://codepen.io/dilums/pen/ZEBowxX" width="100%" height="400px" frameborder="0" style="border-radius: 20px; box-shadow: 4px 4px 56px rgba(32,32,32,.5);"></iframe>


# HTML 5

### Video (视频)

```html
<video src="" muted playsinline autoplay loop></video>
```

- muted: 静音
- playinline: 手机页面直接播放
- autoplay
- loop
- controls

::: normal-demo Video演示
```html
<video controls width="250">
    <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm" type="video/webm">
    <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" type="video/mp4">
    Sorry, your browser doesn't support embedded videos.
</video>
```
:::




```html
<video width="320" height="240" controls autoplay loop>
	<source src="/demo1.mp4" type="video/mp4">
    <source src="/movie.ogg" type="video/ogg">
</video>
```

```js
var myVideo=document.getElementById("video1");
function playPause(){
 if (myVideo.paused)
   myVideo.play();
 else
   myVideo.pause();
}
```


### Audio (音频)

```html
<!-- 音频Audio -->
<audio controls>
	<source src="Snigellin - Sakura Tears.mp3" type="audio/mpeg">
</audio>

<a href="Snigellin - Sakura Tears.mp3">Snigellin</a>
```

### Emoji <表情>
```html
<p style="font-size:48px">&#128512; &#128516; &#128525; &#128151;</p>
```



