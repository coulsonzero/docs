# javascript

## QuickStart


<CodeGroup>
  <CodeGroupItem title="yarn">

```bash:no-line-numbers
yarn add
```

  </CodeGroupItem>

  <CodeGroupItem title="npm" active>

```bash:no-line-numbers
npm install
```

  </CodeGroupItem>
</CodeGroup>


### Ⅰ. html中导入javascript文件的方式

```html
<head>
	<script src="hello.js"></script>
</head>

<body>
	<script>
    </script>
</body>
```

------

### Ⅱ.  Class

```javascript
class Person {
    /* 构造器 */
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    /* 成员方法 */
    say() {
        console.log(`hi, my name is ${this.name}.`);
    }
    /* ES6 */
    // say = () => console.log(`hi, my name is ${this.name}.`);
    
    /* 静态成员方法 */
    static staticSay = (name) => console.log(`hi, my name is ${name}.`)
}

/* 类的继承 */
class Student extends Person {
    constructor(name, number) {
        super(name);
        this.number = number;
    }
    /* 方法重写 */
    say() {
        console.log(`hey, I'm ${this.name}.`)
    }
    hello() {
        super.say();
        console.log(`my school number is ${this.number}.`);
    }
}


/* 
 * 创建类对象
 * const p = new Person("tom")
 * p.say()
 * 
 * 调用类的静态方法
 * Person.staticSay("coke")
 * 
 * 继承
 * const s = new Student("jacker", "1002")
 * s.hello()
 */
```

------

#### variable

```javascript
var
let
const
```

#### Input

```javascript
readLine();

parseInt(readLine, 10)  //string => int
```

#### Output

```javascript
documents.write()   // webpage, <br />换行, 其他'\n'
console.log()       // 标准输出 OK
/* 弹窗 */
alert()             // 提示框   OK      
prompt()            // 输入框   OK/Cannle -> value/null
confirm()           // 确认框   OK/Cannel -> true/false
```

#### Operators

```javascript
===比较数据类型, ==比较值
console.log(5 ==  '5');  //true， 转换成同类型后比较值
console.log(5 === '5');  //false，先比较类型
```

#### For Loops

```javascript
let arr = [2, 3, 7, 8];

for (let i=0; i < arr.length; i++) {}
for (let v of str)  {}
for (let v of list) {}
for (let v in dict) {}
arr.forEach (function(v) {});
arr.forEach (v => {});

//索引越界 -> "undefined"
```

------

###  Ⅲ. 数组类型

#### 1. String

```javascript
let str = "hello";

const str = `my name is ${name}`    // 格式化
```

```
.toFixed(2);  // 保留小数点位数
```



#### 2. Array

```javascript
let arr = ["HTML", "CSS", "JS", "C++"];

//数组合并
let newArr = ['Three', 'Four'];
let arr = ['One', 'Two', ...newArr, 'Five'];
```

```js
arr.length
arr.push()       // 末尾添加
arr.pop()        // 末尾删除
arr.shift()     // 首部删除
arr.unshift(v)  // 首部添加
arr.sort()      
arr.sort((a,b) => a-b)
arr.sort((a,b) => b-a)
arr.reverse()
arr.join(' ')    // 数组->字符串
arr.slice(-1)   // 切片
arr.concat()    // 合并为一维数组
arr.indexOf(v, [i])
arr.lastIndexOf(v, [i])
arr.forEach((item, index) => {...})

nums.filter(n => n%2==0).map(el => sum += el); //统计偶数和
```



#### 3. 字典

```javascript
let a = {x: 1, x: 2, x: 3, x: 4};
console.log(a.x); // 4
```

```javascript
//ES6: 对象实例化
const person = {
    name: 'Jack',
    age: 24,
    sex: 'male',
    getBirthyear() {
        return (2021 - this.age)
    }
};
// 字典(类的实例)
for (let v in person) {console.log(v)}
console.log(person.getBirthyear());
-------------------------------
//解构
let prop = 'name';
let id = '1234';
let mobile = '08923';
let user = {
  [prop]: 'Jack',
  [`user_${id}`]: `${mobile}`
};
-------------------------------
//实例类继承  (后者覆盖前者值，合并独立值)
let student = {name: 'Bob', age: 20, xp: '2'};
let newStudent = Object.assign({}, person, student);
console.log(newStudent.name, newStudent.age, newStudent.sex, newStudent.xp);   //Bob 20 male 2
```

#### 3. Set

```javascript
let set = new Set([1, 2, 4, 2, 59, 9, 4, 9, 1]);

let set = new Set();
set.add(5).add(9).add(59).add(9);
console.log(set.has(9));
for (let v of set.values())
    console.log(v);

//API
size()
add()
delete()
clear()
has()
values()
```

#### 4. Map

```javascript
let map = new Map([['k1', 'v1'], ['k2', 'v2']]);

let map = new Map();
map.set('k1', 'v1').set('k2', 'v2');
console.log(map.get('k1')); // v1
console.log(map.has('k2')); // true
for (let kv of map.entries())
    console.log(kv[0] + " : " + kv[1]);


//API
size()
set(key, value)
delete(key)
clear()
get(key)
has(key)
keys()
values()
entries()
```

### Ⅳ. Function

#### ES5
```javascript
function containsAll(arr) {
    for (var k = 1; k < arguments.length; k++) {
        var num = arguments[k];
        if (arr.indexOf(num) === -1) {
            return false;
        }
    }
    return true;
}
var x = [2, 4, 6, 7];
console.log(containsAll(x, 2, 4, 7));
```
#### ES6
```javascript
//统计偶数和
const magic = (...nums) => {
    let sum = 0;
    nums.filter(n => n%2==0).map(el => sum += el);
    return sum;
}
console.log(magic(...nums)); 
```

```javascript
// 数组遍历 
const printOdds = (arr) => {
  arr.forEach(num => {
    if (num/2 != 0) console.log(num);
  });
}
```

#### 1. 无参

```javascript
const func = () => ...;  
```
#### 2. 单参
```javascript
const func = x => ...;   
```
#### 3. 多参
```javascript
const func = (x, y) => {}
```
#### 4. 固定数组参数
```javascript
const func = (nums) => {}
```
#### 5. 可变数组参数
```javascript
const func = (...nums) => {}
```
#### 6.参数默认值
```javascript
function test(a, b = 3, c = 42) {return a + b + c;}
const test = (a, b = 3, c = 42) => a + b + c;
```
#### 7. 单例模式
```javascript
//单例模式
let printArray = (function() {
    arr.forEach (v => console.log(v)) 
})();
```
------

#### Math
```javascript
Math.PI/E/LN2/LN10/LOG2E/LOG10E
Math.abs(x)/sqrt(x)/ceil(x)/round(x)/floor(x)/exp(x)/pow(x,y)/random()
```

#### Date
```javascript
function printTime() {
    var d = new Date();
    var hours = d.getHours();
    var mins = d.getMinutes();
    var secs = d.getSeconds();
    document.body.innerHTML = hours+":"+mins+":"+secs;
}
setInterval(printTime, 1000);
```

------

### Ⅴ. html与javascript交互

```javascript
parent
   |______ child
   |______ child



window.onload = function() {};

// SelectElement
document.getElementById()
document.getElementsByClassName()
document.getElementsByTagName()

document.querySelector()
document.querySelectorAll()

// Create & Remove Element
document.createElement()
el.removeElement()


// HTML
el.innerHTML
el.innerText
document.createTextNode()   //创建文本

el.value
el.src
el.href
...
el.setAttribute("src", "https://mimo.app/r/kittles.png")
el.getAttribute("href")

el.classList.add("active")
el.classList.remove("active")
el.classList.toggle("active")

// CSS
el.style.color = "red"
el.style.backgroundColor = "skyblue"



// 子节点
//查
el.childNodes
el.firstChild
el.lastChild
el.firstElementChild
el.lastElementChild
el.perviousSibling
el.nextSibling
el.parentNode
el.hasChildNodes()
//增删改
.appendChild()
.removeChild()
.replaceChild(new, old)



// Button Event
btn.addEventListener("click", func, true);
btn.removeEventListener("click", func);
click
dbclick
scroll
input
change
mouseover
mousemove
mouseenter
mouseleave
mousedown
mouseup
pointermove


setInterval(func, 100);
setTimeout (func, 500);
clearInterval(setInterval(func, 100))
```

#### 1.子节点

```html
<nav class="main-nav">
    <ul class="main-menu">
    <li>Office</li>
    <li>Windows</li>
    <li>Surface</li>
    <li>Xbox</li>
    <li>Deals</li>
    <li>Support</li>
    </ul>
</nav>
<script>
    window.onload = function() {
        var arr = []
        var el = document.querySelector(".main-menu")
        var childs = el.childNodes
        for (var i = 0; i < childs.length; i++) {
            if(i % 2 !== 0) arr.push(childs[i].innerHTML)
        }
        console.log(arr)
    }
</script>
```



#### 2. js动画

```css
#container {
    width: 200px;
    height: 200px;
    background: green;
    position: relative;
}
#box {
    width: 50px;
    height: 50px;
    background: red;
    position: absolute;
}
```


```javascript
window.onload = function() {
     var pos = 0;
    //our box element
    var box = document.getElementById('box');
    var t = setInterval(move, 10);
  
    function move() {
        if(pos >= 150) {
            clearInterval(t);
        }
        else {
            pos += 1;
            box.style.left = pos+'px';
        }
    }
};
```
#### 3. 表单验证

```html
<form onsubmit="return validate()" method="post">
    Number: <input type="text" name="num1" id="num1" /><br />
    Repeat: <input type="text" name="num2" id="num2" /><br />
    <input type="submit" value="Submit" />
</form>

<script>
function validate() {
    var n1 = document.getElementById('num1');
    var n2 = document.getElementById('num2');
    if(n1.value != '' && n2.value != '') {
        if(n1.value == n2.value) {
            return true;
        }
    }
    alert("The values should be equal and not blank");
    return false;
}
</script>
```

#### 4. active按钮切换

```html
<div class="side-menu">
	<a class="sidebar-link discover is-active"><svg></svg>Discover</a>
    <a class="sidebar-link trending"><svg></svg>Trending</a>
    <a class="sidebar-link streaming"><svg></svg>Streaming</a>
</div>
```



```javascript
$(".sidebar-link").click(function () {
    $(".sidebar-link").removeClass("is-active");
    $(this).addClass("is-active");
});
```

#### 5. 滚动页面header阴影切换

```html
<div class="header"></div>
<div class="wrapper"></div>

<style>
.header-shadow {
    box-shadow: 0 4px 20px rgb(88 99 148 / 17%);
    z-index: 1;
}
</style>

<script>
	const wrapper = document.querySelector(".wrapper");
    const header = document.querySelector(".header");
    wrapper.addEventListener("scroll", (e) => {
        e.target.scrollTop > 30 ?
            header.classList.add("header-shadow") :
            header.classList.remove("header-shadow");
    });
</script>
```

```javascript
function scrollHeader() {
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
    // this.scrollY >= 50 ? header.classList.add('scroll-header') : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)
```
```css
.scroll-header {
  box-shadow: 0 1px 4px hsla(0, 4%, 15%, .1);
}
```
```html
<header class="header" id="header">
</header>
```

### Ⅵ架构

#### 1.html结构

```
app
 |____header
 |       |____logo
 |       |      |___svg
 |       |      |___Title
 |       |____header-menu
 |       |         |______<a href="#" class="menu-link is-active"></a>
 |       |         |______a
 |       |         |______a
 |       |____user-settings
 |
 |____wrapper
         |____main-container
                       |____content-wrapper
                                    |_______content-section
 
                                 
```

```html
<div class="app">
    <div class="header">
        <div class="logo">
            <svg></svg>
            Title
        </div>
        <div class="header-menu">
            <a href="#" class="menu-link is-active">Home</a>
            <a href="#" class="menu-link">About</a>
            <a href="#" class="menu-link">Concact</a>
        </div>
        <div class="user-settings">
        	<div class="dark-light"></div>
        </div>
    </div>
    <div class="wrapper">
        <div class="main-container">
            <div class="content-wrapper">
                <div class="content-section"></div>
            </div>
        </div>
    </div>
</div>
```

```html
<!-- 主题切换按钮svg -->
<svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
	<path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
</svg>
```



#### 2.css样式

```css
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap");
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
    font-family: 'Poppins', sans-serif;
    outline: none;
    list-style: none;
    background-repeat: no-repeat;
}
/*
body {
	display: flex;
	justify-content: center;
    align-items: center;
	min-height: 100vh;
}
*/

/* 顶部导航栏 */
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-shrink: 0;
    
    padding: 0 40px;
    white-space: nowrap;
    
    height: 60px;
    width: 100%;
    background-color: var(--header-bg-color);
    
    font-size: 14px;
    transition: box-shadow 0.3s;
}
.header-shadow {
    box-shadow: 0 4px 20px rgb(88 99 148 / 17%);
    z-index: 1;
}

/* 主题背景切换按钮svg */
.dark-light svg {
  margin-right: 8px;
  width: 22px;
  cursor: pointer;
  fill: transparent;
  transition: 0.5s;
}

.dark-mode .dark-light svg {
  fill: #ffce45;
  stroke: #ffce45;
}
```

#### 3.js事件

```javascript
window.onload = function() {
	// header阴影滚动显示
    const wrapper = document.querySelector(".wrapper");
    const header = document.querySelector(".header");
    wrapper.addEventListener("scroll", (e) => {
        e.target.scrollTop > 30 ?
            header.classList.add("header-shadow") :
            header.classList.remove("header-shadow");
    });
    
	// 按钮切换active
    $(function () {
        $(".menu-link").click(function () {
            $(".menu-link").removeClass("is-active");
            $(this).addClass("is-active");
        });
    });
    
	// dark-light点击按钮切换主题背景色
    const toggleButton = document.querySelector(".dark-light");
    toggleButton.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });
}
```

## DOM

### GetElements

```
document.getElementById(id)
document.getElementsByTagName(name)
document.getElementsByClassName(classname)
document.querySelector()
document.querySelectorAll()
```

### SetElements

```
element.innerHTML = new html content
element.attribute = new value
element.setAttribute(attribute, value)
element.style.property = new style
```

### AddElement & RemoveElement

```
document.createElement(element)
document.removeChild(element)
document.appendChild(element)
document.replaceChild(element)
```

### SubElements

```
childNodes[0]
```



### Event

```
document.querySelector(id).onclick = function(){code}
document.querySelector(id).click(function() {...})
document.querySelector(id).on("click", function() {...})

document.querySelector(id).addEventListener("click", function(){...}
document.querySelector(id).removeEventListener()

mouseover
mouseout
mousedown
mouseup
click
change
focus
onload
resize
```

### 浏览器宽高

>   （浏览器窗口（浏览器视口）不包括工具栏和滚动条）

```html
<p id="demo"></p>

<script>
var w = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;

var h = window.innerHeight
|| document.documentElement.clientHeight
|| document.body.clientHeight;

var x = document.getElementById("demo");
x.innerHTML = "浏览器内窗宽度：" + w + "，高度：" + h + "。";
</script>
```

```
window.innerWidth
window.innerHeight
window.open() - 打开新窗口
window.close() - 关闭当前窗口
window.moveTo() -移动当前窗口
window.resizeTo() -重新调整当前窗口
```

```
screen.width
screen.height
screen.availWidth
screen.availHeight
screen.colorDepth
screen.pixelDepth
```

```
document.cookie
```

