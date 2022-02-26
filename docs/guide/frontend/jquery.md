# JQuery



## Overview

### inport javaScript library "jQuery"

```html
<script src="https://code.jquery.com/jquery-3.1.1.js"></script>
```

### first jQuery program

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>jQuery</title>
    <script src="https://code.jquery.com/jquery-3.1.1.js"></script>
    <script src="JQdemo.js"></script>
</head>
<body>
    <p id="start">hello</p>
</body>
</html>
```

```javascript
/*
原生js写法
window.onload = function(){
	document.getElementById("start").innerHTML= "Go!";
}
*/

//jQuery写法
$(function() {
    $("#start").html("Go");
});

/*
$(document).ready(function () {
    $("#start").html("Go");
});
*/
```

### Syntax

```javascript
$(function() {
//$(document).ready(function () {
	$("selector").action()
});

/*
$("div")
$("#id")
$(".class")
$(div p)
$(div, p)
$(div > *)

//html
.attr("href", "https://....com")    //修改属性
.removeAttr("class") 
.text()  //内容：     "This"
.html()  //内容+标记："<p>This</p>"
.val()

//css
.addClass()
   
.style.color
.hide()
.show()
*/
```

------

## Attributes and Content  => HTML 

### Attr methods

```
.attr("href", "https://....com")    //修改属性
.removeAttr("class")  
```
#### 1. output Attr
```javascript
<a href="www.sololearn.com">Click here</a>

$(function() {
	var val = $("a").attr("href");
	alert(val);
	//$("a").attr("href", "https://www.baidu.com");
});
```
#### 2. change Attr
```javascript
$("img").attr("src", "cat.png");
```
#### 3. remove Attr
```javascript
$("#test").removeAttr("border");
```

### Content

```js
$("selector").text()
$("selector").html()
```
#### 1. text ( )

```html
<div class="test">
	<p>hello</p>
<div>

<script>
$(function() {
	alert($(".test").text());         //output
	//$(".test").text("hey");  //change 
});
</script>

<!-- hello -->
```

#### 2. html ( )

```html
$(".test").html());   	 //output
//$("#demo").html("<p>hey</p>")  //change
<!-- <p>hello</p> -->
```

#### 3. val ( )

```html
<input type="text" id="name" value="Your Name">

$("#name").val();
```

### Add Content

#### 1. Add text() Content

##### a.  append

```html
<p id="demo">Hi </p>

$(function()) {
	$("#demo").append("David");
});

<!-- Hi David -->
```

##### b.  prepend
```js
$("#demo").prepend("Woo, ");

// Woo, Hi David
```

#### 2. Add html() Content

##### c.  after
```html
<p id="demo">Hi </p>

$("#demo").after("<b>Welcome</b>");

/*
 Hi 
 Welcome
 */
```
##### d.  before
```js
var txt = $("<p></p>").text("Hello")
$("#demo").before("<i>Some Title</i>");
//$("#demo").after(txt);

/*
 Some Title
 Hi 
 //Hello
 */
```

## Manipulating CSS => css



### selfClass

#### 1. Class

##### a. addClass ( )

```html
<div>Some text</div>
<button>Toggle Class</button>

<style>
.header {
	color: red;
	font-size: x-large;
	font-weight: bold;
}
</style>

<script>
$(function() {
	$("button").click(function() {
	//$("div").addClass("header");
	//$("div").removeClass("header");
});
</script>
```

##### b. removeClass ( )
```
<div class="a b"></div>
$("div").addClass("c");
$("div").removeClass("a c");

//class="b"
```
##### c. toggleClass ( )
```html
<div>Some text</div>
<button>Toggle Class</button>

<style>
.header {
	color: red;
	font-weight: bold;
}
</style>

<script>
$(function() {
	$("button").click(function() {
		$("div").toggleClass("header");
	});
});
</script>
```

#### 2. css ( )

```js
$("div").css("border", "2px solid red");
$("div").css({"color": "red", "font-size": "200%});
```
#### 3. width()、innerWidth()、outerWidth()、height()、...
```
innerWidth() = padding*2 + width
outerWidth() = padding*2 + width + border-width*2
```
```js
$("div").width(100);
```

### OtherClass
#### 1. Methods
```
$("selector").parent()
$("selector").parents()
$("selector").children()
$("selector").siblings()
$("selector").next()/nextAll()
$("selector").prev()/prevAll()
$("selector").eq(index)				
```
#### 2. apply
```
$("div").parents().css("border", "2px solid red")
$("p").eq(2).remove()
$("selector").empty()	
```

------

## Events

### Methods
```
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