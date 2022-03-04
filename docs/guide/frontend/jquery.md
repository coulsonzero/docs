# JQuery

## OverView

### 导包

```html
<script src="https://code.jquery.com/jquery-3.1.1.js"></script>
```

### jquery加载DOM元素

```js
$(function() {...}
$(document).ready(function () {...}
```

### 快速开始

```javascript
// 原生js写法
window.onload = function(){
  document.getElementById("start").innerHTML= "Go!";
}

// jQuery写法
$(function() {
    $("#start").html("Go");
});

// jQuery写法2
$(document).ready(function () {
    $("#start").html("Go");
});
```

## 语法Syntax

### 选择器

```js
$("div")
$("#id")
$(".class")
$(div p)
$(div, p)
$(div > p)
$(div ~ p)
$(this)
```

### jquery操作HTML

* innerHTML
  
```js
// 获取
$(this).html()
$(this).text()

// 修改
$(this).html('test')
```

* class
  
```js
$(this).addClass('active')
$(this).removeClass('active')
$(this).toggleClass('active')
```

* attr等属性

```js
// 获取
$(this).attr("href")
// 修改
$(this).attr("href", "https://www.baidu.com") 
$("img").attr("src", "cat.png");

// 删除
$("#test").removeAttr("border");
```

* input的value
  
```js
$(this).val()
```

### jquery操作CSS

```js
$(this).css('color', 'red')
$("div").css({
  "color": "red", 
  "font-size": "200%"
})
```

* width()、innerWidth()、outerWidth()、height()、...
  
```
innerWidth() = padding*2 + width
outerWidth() = padding*2 + width + border-width*2
```

```js
$("div").width(100);
```

### jquery操作js

* 遍历

```js
$('.link').each(function() {...})
```

* 显示隐藏

```js
$(this).show()
$(this).hide()
```

### DOM

```js
// Add text() Content
$(this).append(`...`)
$(this).prepend("Woo, ")  // Woo, ...

// Add html() Content
$(this).after("bye")  // ... bye
$(this).before("hello") //hello ...
```


```js
$("selector").parent()
$("selector").parents()
$("selector").children()
$("selector").siblings()
$("selector").next()/nextAll()
$("selector").prev()/prevAll()
$("selector").eq(index)
```

```js
$("div").parents().css("border", "2px solid red")
$("p").eq(2).remove()
$("selector").empty()
```


## Events

### Methods

```js
//Mouse Events
$("selector").click(function() {})		  //单击
dbclick		  //双击
trigger      
mouseenter    //鼠标进入
mouseleave    //鼠标离开
mouseover     //鼠标悬浮

//KeyBoard Events
keydown
keyup

//Form Events
submit
change
focus
blur

//Document Events
ready
resize
scroll
```

### Event

```
event.pageX
event.pageY
event.type
event.which
event.data
event.target
event.preventDefault()
event.syopPropagation()
```

#### click

```js
document.getElementById("demo").onclick = function() {...}
//方式一
$("#demo").click(function() {...});
//方式二
$("#demo").on("click", function() {
	...;
	$("#demo").off("click");
});
//点击切换
$("demo").trigger("click");
```
#### keydown
```
<input type="text" id="name" />
<div id="msg"></div>

$("#name").keydown(function() {
	$("#msg").html($("#name").val());
});
```

#### event
```js
$("#demo").click(function(event) {
	alert(event.pageX);
	event.preventDefault();
});
```

### For Example
HTML
```html
<!DOCTYPE html>
<html>
    <head>
        <title>My To-Do List</title>
        <script src="https://code.jquery.com/jquery-3.1.1.js"></script>
    </head>
    <body>
        <h1>My To-Do List</h1>
        <input type="text" placeholder="New item" />
        <button id="add">Add</button>
        <ol id="mylist"></ol>
    </body>
</html>
```
CSS
```css
h1 {
    color: #1abc9c;
}
.rem {
    margin-left: 5px;
    background-color: white;
    color: red;
    border: none;
    cursor: pointer;
}
```
JS
```js
$(function() {
    $("#add").on("click", function() {
        var val = $("input").val();
        if(val !== '') {
            var elem = $("<li></li>").text(val);
            $(elem).append("<button class='rem'>X</button>");
            $("#mylist").append(elem);
            $("input").val("");
            $(".rem").on("click", function() {
                $(this).parent().remove();
            });
        }
    });
});
```

### Effects

```
toggle()			= hide() + show()
toggle(500)
fadeToggle(500)     = fadeIn() + fadeOut()  //fadeto(0)
sildeToggle(500)    = slideUp() + slideDown()
sildeDown(500)

animate({key: value}, 1000)
```

#### toggle
```js
$(function() {
	$("p").click(function() {
		$("div).sildeToggle(500);
	});
});
```
#### animate
```js
$("div").animate({
	width: "250px", //-=250px
	height: "250px"	//+=250px
}, 1000)
```

### For Example
```html
<div class="menu">
	<div id="item">Dropdown</div>
	<div id="submenu">
		<a href="#">Link 1</a>
		<a href="#">Link 2</a>
		<a href="#">Link 3</a>
	</div>
</div>
```

```js
$(function() {
	$("#item").click(function() {
		$("#submenu").slideToggle(500);
	});
});
```