# HTML 4





------

## Overview

### html基本文档

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
    <script src="script.js"></script>
</head>
<body> 
    
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


### h 标题

```html
<h1>title</h1>
...
<h6>title</h6>
```
### p 段落

```html
<p>Paragraph</p>
```
#### 格式化
```html
<b>bold</b>
<i>italic</i>
<u>underline</u>
<s>删除线</s>

<sup>上标</sup>
<sub>下标</sub>

<!----------------->
<strong>: 加粗
<em>: 斜体
<ins>: 下划线
<del>...</del>: 划掉
```
### other
#### 注释
```html
<!--注释-->
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

### button  按钮
```html
<button>Click Me !</button>
```
### Link    <链接>

```html
<a href="#">Twitter</a>
```

- **`target="_blank"`**: 新窗口打开
- **`rel="nofollow"`**  : 链接域，搜索引擎忽略该链接
```html
<a href="https://github.com/">github</a>
<a href="https://www.runoob.com/" target="_blank"></a>
<a href="https://www.runoob.com/" target="_blank" rel="nofollow"></a>
```
### img  <图片>

```html
<img src="https://mimo.app/i/cat.png">
```

```html
<img src="demo.png" alt="discription">
<img src="demo.png" alt="discription" loading="lazy" width="300" height="200">
```
------

### List  <列表>

```html
<!-- 有序列表Ordered List -->
<ul>
	<li>Home</li>
	<li>About</li>
	<li>Contact</li>
</ul>

<!-- 无序列表Unordered List -->
<ol>
  ...
</ol>
```

### Table  <表格>

```
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

#### 文本框 (默认)
```html
<input type="text" placeholder="Email"><br>
```
```html
<input type="email" placeholder="Email">
```
#### 密码框
```html
<input type="password" placeholder="Password"><br>
```

#### 复选框
```html
<input type="checkbox"><em>Remember Me</em></input><br>
```
#### other
```html
<!--单行输入框-->
<input type="tel">					 <br/>
<input type="url">				   <br/>
<input type="datetime">			 <br/>
<input type="number">				 <br/>
<input type="search">				 <br/>
<!--多行输入框-->
<textarea></textarea>
<!--选取框-->
<input type="range">				 <br/>
<input type="color">				 <br/>
<input type="date">					 <br/>
<input type="month">				 <br/>
<input type="week">					 <br/>
<input type="time">					 <br/>
<!--按钮-->
<input type="radio">Dog				         <br/>
<input type="checkbox">Cat			       <br/>
<input type="button" value="click me"> <br/>
<button type="button2">click me</button><br/>
<input type="file">					            <br/>
<input type="submit" id="submit">	      <br/>
<input type="reset">				            <br/>

```

#### 单行文本框
```html
<input type="text" name="username"><br>
<input type="text" name="username"  size="50">
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
### Form <表单>
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





### iForm <内联网页>

```html
<iframe src="https://www.csdn.net/"></iframe>

<iframe src="https://cn.bing.com/" width=100% height=600px></iframe>

frameborder="0": 移除边框
```

### RGB

<img src="../img/RGB.png" style="zoom:100%" />

# HTML 5

### Video

```HTML
<video controls width="320" height="240">
	<source src="demo1.mp4" type="video/mp4">
</video>
```
### Audio
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



