# Javascript

[Devdocs/JavaScript](https://devdocs.io/javascript/)

## QuickStart

> JavaScript 是一个动态的弱类型语言

### Ⅰ. 在 html 中引入 javascript

**body 末尾导入(推荐)**

```html
<body>
	<script src="main.js"></script>
</body>
```

**head 中导入**

> 常用于导入外部包

:::: code-group
::: code-group-item index.html

```html
<head>
	<script src="script.js"></script>
</head>
```

:::

::: code-group-item script.js

```js
window.onload = function () {
	//...
}
```

:::
::::

---

## Overview

### Your First Program

:::: code-group
::: code-group-item script.js

```js
console.log("Hello World!")
```

:::
::: code-group-item index.html

```html
<script>
	document.write("Hello World!")
</script>
```

:::
::::

### Variables

```javascript
var num = 2 // 全局变量
let x = "Pol" // 局部变量
const PI = 3.14 // 常量
```

### Comments

```js
// single line comment

/*
 this is a multi line comment
 */

/**
 * this is a document comment
 * @return string
 */
```

### DataType

::: tip
boolean:

```js
false(0 / null / undefined / "")
```

:::

```js
var num = 12 // number
var price = 42.3 // number
var name = "Coulson" // string
var isActive = false // boolean
// 数组
var nums = [1, 2, 3, 4, 5]
// 实例对象(字典)
var person = {name: "Jack", age: 24}
// 集合
let set = new Set([1, 2, 4, 2, 59, 9, 4, 9, 1])
// Map
let map = new Map([
	["k1", "v1"],
	["k2", "v2"],
])
```

### Input

```javascript
// 暂不支持
var name = readLine()
var age = parseInt(readLine, 10) //string => int
var height = parseFloat(readLine(), 10)
```

### Output

```javascript
documents.write() // webpage, <br />换行, 其他'\n'
console.log() // 标准输出 OK
/* 弹窗 */
alert() // 提示框   OK
prompt() // 输入框   OK/Cannle -> value/null
confirm() // 确认框   OK/Cannel -> true/false
```

::::: details prompt & confirm
:::: code-group
::: code-group-item prompt

```js
<script>var name = prompt("Please enter your name") alert(name)</script>
```

:::
::: code-group-item confirm

```js
<script>
	var res = confirm("Are you sure ?") if (res) {alert("Closed")} else {alert("Stay...")}
</script>
```

:::
::::
:::::

## Basic Concepts

### Operators

```javascript
===比较数据类型, ==比较值
console.log(5 ==  '5');  //true， 转换成同类型后比较值
console.log(5 === '5');  //false，先比较类型是否相同，严格模式
```

## Conditional and Loops

### If Statement

```js
if (condition) {
	// statement(s)
} else if (condition) {
	// statement(s)
} else if (condition) {
	// statement(s)
} else {
	// statement(s)
}
```

### Switch Statement

```js
switch (expression) {
	case n1:
		// statement(s)
		break
	case n2:
		// statement(s)
		break
	default:
	// statement(s)
}
```

::: details 点击查看示例

```js
var day = 2
switch (day) {
	case 1:
		console.log("Monday")
		break
	case 2:
		console.log("Tuesday")
		break
	case 3:
		console.log("Wednesday")
		break
	case 4:
		console.log("Thursday")
		break
	case 5:
		console.log("Friday")
		break
	case 6:
		console.log("Saturday")
		break
	case 7:
		console.log("Sunday")
		break
	default:
		console.log("Invalid day")
}
```

:::

### For Loops

```javascript
let arr = [2, 3, 7, 8]

for (let i = 0; i < arr.length; i++) {}
for (let v of str) {
}
for (let v of list) {
}
for (let v in dict) {
}
arr.forEach(function (v) {})
arr.forEach((v) => {})
arr.forEach((v, i) => {})
//索引越界 -> "undefined"
```

### While Loop

```js
while (condition) {
	// code block
}
```

### Do While Loop

```js
do {
	// code block
} while (condition)
```

### Break & Continue

```js
for (var i = 0; i < arr.length; i++) {
	if (arr[i] > 10) break
	console.log(arr[i])
}
```

```js
for (var i = 0; i < arr.length; i++) {
	if (i == 5) continue
	console.log(arr[i])
}
```

---

## Function

### Define

:::: code-group
::: code-group-item ES5

```js
function main() {
	// code
}

main()
```

:::
::: code-group-item ES6

```js
const main = () => {
	// code
}

main()
```

:::
::::

**单例模式**

> ES5 单例模式

```javascript
var printArray = (function () {
	arr.forEach((v) => console.log(v))
})()
```

> ES6 单例模式

```js
const getDate = (() => {
	const d = new Date()
	const year = d.getFullYear()
	const month = d.getMonth() + 1
	const day = d.getDate()
	const date = `${year}-${month}-${day}`
	console.log(date)
})()
```

### Params

```js
function showInfo(name, age) {
	// code
}

showInfo("coulson", 20)
```

**ES6 不同参数写法**
:::: code-group
::: code-group-item 1. 无参

```javascript
const func = () => ...;
```

:::

::: code-group-item 2. 单参

```javascript
const func = x => ...;
```

:::
::: code-group-item 3. 多参

```javascript
const func = (x, y) => {}
```

:::

::: code-group-item 4. 固定数组参数

```javascript
const func = (nums) => {}
```

:::
::: code-group-item 5. 可变参数!!

```javascript
const func = (...nums) => {}
```

:::
::: code-group-item 6.参数默认值!!

```javascript
function test(a, b = 3, c = 42) {
	return a + b + c
}
const test = (a, b = 3, c = 42) => a + b + c
```

:::
::::

**不定参**
::::: details ES5 & ES6 不定参示例
:::: code-group
::: code-group-item ES5 不定参

```javascript{2}
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

:::

::: code-group-item ES6 不定参

```javascript{2}
//统计偶数和
const magic = (...nums) => {
    let sum = 0;
    nums.filter(n => n%2==0).map(el => sum += el);
    return sum;
}
console.log(magic(...nums));
```

:::
::::
:::::

### Return

```js
function showInfo(name, age) {
	// code
	return `name: ${name}\nage: ${age}`
}

console.log(showInfo("coulson", 20))
/*
name: coulson
age: 20
*/
```

::: tip
`undefined`: 函数没有返回值

```js
function check(name) {
	var res = "My name is " + name
}

console.log(check("coulson"))
// Output: undefined
```

:::

### 闭包

> 闭包是指有权访问另外一个函数作用域中的变量的函数
> 在 Javascript 中，如果一个对象不再被引用，那么这个对象就会被 GC 回收，否则这个对象一直会保存在内存中
> 当我们需要在模块中定义一些变量，并希望这些变量一直保存在内存中但又不会 “污染” 全局的变量时，就可以用闭包来定义这个模块

```html
<p>局部变量计数。</p>
<button type="button" onclick="myFunction()">计数!</button>
<p id="demo">0</p>

<script>
	const add = (function () {
		let counter = 0
		return function () {
			return (counter += 1)
		}
	})()

	function myFunction() {
		document.getElementById("demo").innerHTML = add()
	}
</script>
```

---

## Object

### Define

```js
// 定义实例对象(初始化对象)
var person = {
	name: "John",
	age: 20,
}

// 访问对象数据
console.log(person[age]) // 20
console.log(person.age) // 20
console.log(person.name) // "John"
console.log(person.name.length) // 4
```

### Create Object

```js
function person(name, age) {
	this.name = name // this指代当前对象
	this.age = age
}

var p = new person("John", 20)
console.log(`name: ${p.name}, age: ${p.age}`)
```

### Object Methods

:::: code-group
::: code-group-item 内部声明方法

```js{4-6,10}
function person(name, age) {
	this.name = name // this指代当前对象
	this.age = age
    this.setName = function(name) {
        this.name = name
    }
}

var p = new person("John", 20)
p.setName("Tom")        // name: Tom

```

:::

::: code-group-item 引用外部方法

```js{4,7-9,12}
function person(name, age) {
	this.name = name // this指代当前对象
	this.age = age
	this.setName = changeName
}

function changeName(name) {
    return this.name = name
}

var p = new person("John", 20)
p.setName("Tom")
console.log(p.name)     // name: Tom
```

:::
::::

## Core Objects

### 1. String

```javascript
let str = "coulsonzero"

console.log(`hello ${str}`) // hello coulsonzero
console.log(typeof str) // string
console.log(typeof str === "string") // true

length
charAt()
indexOf()
slice()
substring()
substr()
concat()
split()

search()
match()
replace() // 仅替换第一个
replaceAll()

toFixed() // 保留小数点位数
trim()

includes()
startsWith()
endsWith()
toUpperCase()
toLowerCase()

padStart()
padEnd() // 自动补全位数

Number(str) // str -> number
!isNaN(Number(str)) // 是否为数字
```

:::: code-group
::: code-group-item 新建

```js
let str1 = "Hello, React !"
let str2 = new String("Hello, React !")
```

:::
::: code-group-item 相等

```js
/**
 * ==: 比较值相等
 * ===: 比较值和类型同时相等
 */

let str = "Hello, React !"
let str1 = new String("Hello, React !")
let str2 = new String("Hello, React !")

console.log(str1 == str) // true:  值相等
console.log(str1 === str) // false: 类型不同，对象与字符串
console.log(str1 == str2) // false: 对象无法比较值
console.log(str1 === str2) // false: 对象无法比较值
```

:::
::: code-group-item 检索

```js
/**
 * 索引
 * indexOf(): 可以使用第二个参数指定开始索引
 * lastIndexOf()
 * search(): 可以使用正则
 * match()
 * replace(): 可以使用正则, 替换字符
 */

let str = "Hello, React !"

console.log(str.indexOf("e")) // Output: 1
console.log(str.lastIndexOf("e")) // Output: 8
console.log(str.indexOf("e", 2)) // Output: 8
console.log(str.search("e")) // Output: 1

let newStr = "Hello, 3306 world! "
console.log(newStr.search(/\d+/g)) // Output: 7

var str = "hello3306world8080pop"
console.log(str.match(/\d+/g)) // [ '3306', '8080' ]

console.log(newStr.replace(/\d/g, "")) // Hello, world!
console.log(str.replace(/(\w+)\s(\w+)/, "$2, $1")) // Hello, React
```

:::
::: code-group-item 切片

```js
/**
 * slice(start, end): 可以使用负数
 * substring(start, end)
 * substr(start, length): 已移除不推荐使用
 */

let str = "Hello, React !"

console.log(str.slice(-5, -1)) // act
console.log(str.slice(3)) // lo, React !
console.log(str.slice(3, 5)) // lo
console.log(str.substring(3, 5)) // lo
console.log(str.substr(3, 5)) // lo, R
```

:::
::: code-group-item 拼接

```js
console.log("Hello" + ", " + "World!") // "Hello, World!"
let word1 = "Hello",
	word2 = "World!"
console.log(`${word1}, ${word2}`) // "Hello, World!"
console.log("Hello".concat("World")) // "HelloWorld"
console.log("Hello".concat(", ", "World")) // "Hello, World"
```

:::
::: code-group-item 分割

```js
var str = "127.0.0.1"
console.log(str.split(".")) // [ '127', '0', '0', '1' ]
console.log(str.split()) // [ '127.0.0.1' ]

var str = "Hello World"
console.log(str.split()) // [ 'Hello World' ]
console.log(str.split("")) // ['H', 'e', 'l', 'l', 'o', ' ', 'W', 'o', 'r', 'l', 'd']
console.log(str.split(" ")) // [ 'Hello', 'World' ]
```

:::

::: code-group-item 判断

```js
let str = "script.js"
console.log(str.includes("hello")) // false
console.log(str.startsWith("main")) // false
console.log(str.endsWith("js")) // true

// 判断字符串中的字符是否为非数字
!isNaN(Number("3")) // true
```

:::

::::

::: details 示例

```js
var str = "Hello, React !"

/**
 * ==: 比较值相等
 * ===: 比较值和类型同时相等
 */

var str1 = new String("Hello, React !")
var str2 = new String("Hello, React !")
console.log(str1 == str) // true:  值相等
console.log(str1 === str) // false: 类型不同，字符串与对象
console.log(str1 == str2) // false: 对象无法比较值
console.log(str1 === str2) // false: 不同对象

console.log(str.length)
// Output: 14

/**
 * 索引
 * indexOf(): 可以使用第二个参数指定开始索引
 * lastIndexOf()
 * search(): 可以使用正则
 *
 * replace(): 可以使用正则, 替换字符
 */

console.log(str.indexOf("e"))
// Output: 1

console.log(str.lastIndexOf("e"))
// Output: 8

console.log(str.indexOf("e", 2))
// Output: 8

console.log(str.search("e"))
// Output: 1

var newStr = "Hello, 3306 world! "
console.log(newStr.search(/\d+/g))
// Output: 7

console.log(newStr.replace(/\d/g, ""))
// Hello,  world!

/**
 * slice(start, end): 可以使用负数
 * substring(start, end)
 * substr(start, length)
 */

console.log(str.slice(-5, -1))
// "act"

console.log(str.slice(3))
// lo, React !

console.log(str.slice(3, 5))
// lo

console.log(str.substring(3, 5))
// lo

console.log(str.substr(3, 5))
// lo, R

console.log(str.toUpperCase()) // "HELLO, REACT !"
console.log(str.toLowerCase()) // "hello, react !"
console.log(str.toLocaleLowerCase()) // "hello, react !"

console.log("Hello" + ", " + "World!") // "Hello, World!"
let word1 = "Hello",
	word2 = "World!"
console.log(`${word1}, ${word2}`) // "Hello, World!"
console.log("Hello".concat("World")) // "HelloWorld"
console.log("Hello".concat(", ", "World")) // "Hello, World"

console.log(" Hello,  World".trim())
// Hello,  World

console.log(str.charAt(3))
// Output: 'l'

var str = "127.0.0.1"
console.log(str.split("."))
// [ '127', '0', '0', '1' ]

console.log(str.split())
// [ '127.0.0.1' ]

var str = "Hello World"
console.log(str.split())
// [ 'Hello World' ]
console.log(str.split(""))
/*
[
  'H', 'e', 'l', 'l',
  'o', ' ', 'W', 'o',
  'r', 'l', 'd'
]
*/
console.log(str.split(" "))
// [ 'Hello', 'World' ]

var str = "script.js"
console.log(str.startsWith("main")) // false
console.log(str.endsWith("js")) // true

var str = "hello3306world8080pop"
console.log(str.match(/\d+/g))
// [ '3306', '8080' ]

console.log(str.includes("hello")) // true
console.log(str.indexOf("hello")) // 0
console.log(str.indexOf("hello", 3)) // -1

console.log(str.includes("react")) // false
console.log(str.indexOf("react")) // -1

var str = "Hello world"
console.log(typeof str) // string
console.log(typeof str === "string") // true

var arr = str.split(" ")
console.log(typeof arr) // object
console.log(Array.isArray(arr)) // true
console.log(arr instanceof Array) // true
```

:::

### 2. Array

**定义数组**
:::: code-group
::: code-group-item 简化

```js
let arr = ["HTML", "CSS", "JS", "C++"]
```

:::

::: code-group-item 原始

```js
var arr = new Array("HTML", "CSS", "JS", "C++")
```

:::

::: code-group-item 原始 2

```js
// var arr = new Array(4)
// 数组长度可以不声明
var arr = new Array()

arr[0] = "HTML"
arr[1] = "CSS"
arr[2] = "JS"
arr[3] = "C++"
```

:::

::: code-group-item 多次声明变量

```js
var str1 = "HTML"
var str2 = "CSS"
var str3 = "JS"
var str4 = "C++"
```

:::
::::

**访问数组**

```js
const nums = [1, 3, 6, 9, 15]

nums[0] // 1
nums[1] // 3
nums[5] // undefined
```

**数组属性与方法**

```js
const nums = [1, 3, 6, 9, 15]

nums.length // 长度: 5
nums.concat([2, 7]) // 数组合并
```

```javascript
//数组合并
let newArr = ["Three", "Four"]
let arr = ["One", "Two", ...newArr, "Five"]
```

**数组对象**

```js
var person = []
person["name"] = "John"
person["age"] = 20

console.log(person["age"]) // 20
```

```js
// 查
arr.length
arr.slice(-1)                 // 返回索引元素，切片
arr.indexOf(e, [startIndex])  // 返回元素索引, 不存在则返回-1
arr.includes(e)               // true/fasle

// 增删
arr.push(e)      // 末尾添加
arr.pop()        // 末尾删除
arr.unshift(e)   // 首部添加
arr.shift()      // 首部删除

// 排序
arr.sort()              // 按字符名称排序
arr.sort((a,b) => a-b)  // 从小到大
arr.sort((a,b) => b-a)  // 从大到小
arr.sort((a, b) => b.date.localeCompare(a.date))	// 日期就近排序
arr.reverse()

// 数组---字符串
arr.join('')     // 数组->字符串，默认','
str.split('')    // 字符串->数组
Array.form(str, [func])  // 字符串->数组
console.log(Array.from({length: 5}, (v, i) => i))	// [0,1,2,3,4,5]

// 数组---数组
arr.concat()            // 数组合并，返回一个新数组
arr.map(v => v + 2)     // 返回新数组
[...arr, arr2]

// 遍历
arr.forEach((item, index) => {...})
arr.filter(n => n%2==0).map(el => sum += el); //统计偶数和

// 删除指定元素
arr.filter(item => item != e)

// 去重
Array.from(new Set(arr))

arr.filter((v, i, self) => self.indexOf(v) === i)

function uniqueArr() {
	let res = []
	for(let i = 0; i < arr.length; i++) {
		if !res.includes(arr[i]) res.push(arr[i])
	}
	return res
}


// 数组判断
let arr = [1, 2, 3]
console.log(Array.isArray(arr))		// true, 推荐此方法

console.log(typeof arr)  // object
console.log(typeof {})	 // object
console.log(typeof null) // object

console.log(arr instanceof Array)	// true

```

::: details 数组原地排序的区别

```js
let arr = [1, 5, 3, 9, 2, 10, 12]
arr.sort((a, b) => a - b)
console.log(arr) // [1, 2, 3, 5, 9, 10, 12]

arr.sort((a, b) => b - a)
console.log(arr) // [12, 10, 9, 5, 3, 2, 1]

arr.sort()
console.log(arr) // [1, 10, 12, 2, 3, 5, 9]

arr.reverse()
console.log(arr) // [9, 5, 3, 2, 12, 10, 1]
```

:::

::: details arr.map()、for loop、forEach()的区别
`arr.map()`: 返回新数组

```js
var nums = [2, 3, 5, 1]
console.log(nums.map((v) => v + 2)) // [4, 5, 7, 3]
console.log(nums.map((v) => (v = v + 2)))
console.log(nums) // [2, 3, 5, 1]
console.log(nums.map((v, i) => v + i)) // [2, 4, 7, 4]
```

`for Loop`: 改变原数组

```js
var nums = [2, 3, 5, 1]
for (var i = 0; i < nums.length; i++) {
	nums[i] += 2
}
console.log(nums) // [4, 5, 7, 3]
```

`forEach()`: 不直接改变原数组，需要通过`arr[i]`才能改变原数组

```js
// forEach(v => {}): 不改变原数组
nums.forEach((v) => (v += 2))
console.log(nums) //[ 2, 3, 5, 1 ]

// forEach((v, i) => {}): 不直接改变原数组，需要通过arr[i]才能改变原数组
nums.forEach((v, i) => (nums[i] += 2))
console.log(nums) //[ 4, 5, 7, 3]
```

:::

::: details join(), split(), Array.from()

```javascript
console.log("foo".split()) // ["foo"]
console.log("foo".split("")) // ["f", "o", "o"]

console.log(Array.from("foo")) // ["f", "o", "o"]
console.log(Array.from([1, 2, 3], (x) => x + x)) // 2, 4, 6]

console.log(["f", "o", "o"].join()) // "f,o,o"
console.log(["f", "o", "o"].join("")) // "foo"
```

:::

### 3. 字典

```javascript
let a = {x: 1, x: 2, x: 3, x: 4}
console.log(a.x) // 4
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

```js
const obj = {
	{ id: 1, name: 'john', country: 'cn' },
	{ id: 2, name: 'mary', country: 'us' },
	{ id: 3, name: 'yart', country: 'cn' },
	{ id: 4, name: 'lkwq', country: 'us' },
	{ id: 5, name: 'qwqw', country: 'cn' },
}

function filterData(query) {
	// const res = obj.filter((item) => item.name.includes(query)).map(item => item.name)
	const k = 'name'
	const res = obj.filter((item) => item[k].includes(query)).map(item => item[k])
}
```

### 3. Set

**创建集合**

```javascript
let set = new Set([1, 2, 4, 2, 59, 9, 4, 9, 1])
let set = new Set()
```

**API**
::: tip
支持`链式编程`

```js
//API
长度：size
增：add(v)
删：delete(v)
删：clear()
查：has(v)
查：values()
遍历: forEach() or for(let v of set)
```

:::

::: details 查看 Set 示例

```js
let set = new Set([1, 2, 2, 4, 3, 1])
// 增
set.add(5).add(7)
// 删
set.delete(2)
set.clear()
// 查
console.log(set.has(9))

// 集合遍历1
set.forEach((v) => console.log(v))
// 集合遍历2
for (let v of set.values()) {
	console.log(v)
}
```

:::

### Object

```js
Object.keys(obj)
Object.values(obj)
```

```js
const obj = {
	title: "项目名称",
	dataIndex: "projectName",
	fixed: "left",
	width: 100,
}

console.log(Object.keys(obj))
// Output: [ 'title', 'dataIndex', 'fixed', 'width' ]

// 通过对象值返回对应的键
function getkeyByvalue(object, value) {
	return Object.keys(object).find((key) => object[key] === value)
}

console.log(obj, "left")
```

```js
const data = [
	{id: "1", name: "A", rank: 0},
	{id: "2", name: "B", rank: 1},
	{id: "3", name: "C", rank: 1},
	{id: "4", name: "D", rank: 2},
]

let res = data.map((item) => (item = {id: item.id, name: item.name}))
console.log(res)
```

### 4. Map

**创建 Map**

```javascript
let map = new Map([
	["k1", "v1"],
	["k2", "v2"],
])

let map = new Map()
```

::: tip

```js
//API
长度: size

增: set(key, value)

删: delete key
删: clear()

查: get(key)
查: has(key)
keys()
values()
entries()

遍历: console.log(map) // Map(2) { 'k1' => 'v1', 'k2' => 'v2' }
map.forEach((k, v) => console.log(k, v))
/*
v1 k1
v2 k2
*/
for (let item of map.entries()) {
	console.log(item)
}
/*
[ 'k1', 'v1' ]
[ 'k2', 'v2' ]
*/

for (let item of map.entries()) {
	console.log(item[0], item[1])
}
/*
k1 v1
k2 v2
*/
```

:::

::: details 查看 Map 示例

```js
let map = new Map([
	["k1", "v1"],
	["k2", "v2"],
])

console.log(map) // Map(2) { 'k1' => 'v1', 'k2' => 'v2' }
map.forEach((k, v) => console.log(k, v))
for (let item of map.entries()) {
	console.log(item)
}
/*
[ 'k1', 'v1' ]
[ 'k2', 'v2' ]
*/

for (let item of map.entries()) {
	console.log(item[0], item[1])
}
/*
k1 v1
k2 v2
*/

map.set("k3", "v3").set("k4", "v4")
map.delete("k3")
map.clear()
console.log(map.get("k2")) // undefined
console.log(map.has("k3")) // false
```

:::

## 库函数

### Math

```javascript
Math.PI / E / LN2 / LN10 / LOG2E / LOG10E
Math.abs(x) / sqrt(x) / ceil(x) / round(x) / floor(x) / exp(x) / pow(x, y) / random()
```

```js
Math.random() // [0-1) 之间的随机小数
```

### Date

```js
setInterval()
clearInterval()
setTimeOut()
```

```javascript
function printTime() {
	var d = new Date()
	var year = d.getFullYear()
	var month = d.getMonth() + 1
	var day = d.getDate()
	var hours = d.getHours()
	var mins = d.getMinutes()
	var secs = d.getSeconds()
	var weekDay = ["日", "一", "二", "三", "四", "五", "六"]
	var week = "周" + weekDay[d.getDay()]
	document.body.innerHTML = hours + ":" + mins + ":" + secs
}
setInterval(printTime, 1000)
```

### JSON

```js
// 将json字符串转换成json对象
JSON.parse(str)
eval("(" + str + ")")

// 将json对象转换为json字符串
JSON.stringify(obj)
// 美化输出
JSON.stringify(obj, null, 2)
```

---

## ES6

> 区别与 ES5(2015 年以前的 javascript 语法)

### var & let & const

```js
// ES5
var num = 12
// ES6
let age = 20
const PI = 3.14
```

### Format Output

```js
let name = "John"
// ES5
var msg = "Hello" + name + "!"
// ES6
let msg = `Hello ${this.name}!`
```

### Object

```js
let person = {
	name: "John",
	age: 20,
	sex: "male",
}

let student = {
	name: "Bob",
	age: 18,
	xp: "2",
}

let s = Object.assign({}, person, student)
console.log(s.name) // "Bob"
console.log(s.age) // 18
console.log(s.sex) // "male"
console.log(s.xp) // "2"
```

### 解构

:::: code-group
::: code-group-item Array

```js
let arr = [1, 2, 3]
let [a, b, c] = arr
// a: 1, b: 2, c: 3
```

:::
::: code-group-item Object

```js
let person = {
	name: "John",
	age: 20,
}

let {name, s} = person
console.log(name) // "John"
console.log(age) // 20
```

:::
::::

### Rest Params

:::: code-group
::: code-group-item ES6 ...arr

```js
const magic = (...nums) => {
	let sum = 0
	nums.filter((n) => n % 2 == 0).map((el) => (sum += el))
	return sum
}
console.log(magic(...nums))
```

:::
::: code-group-item ES5 arguments

```js
function containsAll(arr) {
	for (var k = 1; k < arguments.length; k++) {
		var num = arguments[k]
		if (arr.indexOf(num) === -1) {
			return false
		}
	}
	return true
}
var x = [2, 4, 6, 7]
console.log(containsAll(x, 2, 4, 7))
```

:::
::::

### Spread Operator

```js
function func(a, b, c) {
	console.log(a + b + c)
}

let nums = [1, 2]
func(nums.concat(4)) // 1,2,4undefinedundefined
func(1, 2, 4) // 7
func.apply(null, nums) // NaN
func.apply(null, [1, 2, 4]) // 7
func.apply(null, nums.concat(4)) // 7
func(...nums, 4) // 7
let arr = [4, 6, ...nums, 9] // [4, 6, 1, 2, 9]
```

```js
const sum = (...nums) => {
	let sum = 0
	arr.forEach((v) => (sun += v))
	return sum
}

console.log(sum(1, 2, 3)) // 6
console.log(sum(3, 6, 7, 9)) // 25
```

### ES6 Class

```javascript
class Person {
	constructor(name, age) {
		this.name = name
		this.age = age
	}

	say() {
		console.log(`hi, my name is ${this.name}.`)
	}

	// say = () => console.log(`hi, my name is ${this.name}.`);

	/* 静态成员方法 */
	static staticSay = (name) => console.log(`hi, my name is ${name}.`)
}

/* 类的继承 */
class Student extends Person {
	constructor(name, number) {
		super(name)
		this.number = number
	}

	/* 方法重写 */
	say() {
		console.log(`hey, I'm ${this.name}.`)
	}

	hello() {
		// 调用父类方法
		super.say()
		console.log(`my school number is ${this.number}.`)
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

#### constructor

```js
class Rectangle {
	constructor(height, width) {
		this.height = height
		this.width = width
	}
}
```

**不定参**

```js
class Polygon {
	constructor(...sides) {
		this.sides = sides
	}
	// Method
	*getSides() {
		for (const side of this.sides) {
			yield side
		}
	}
}

const pentagon = new Polygon(1, 2, 3, 4, 5)

console.log([...pentagon.getSides()]) // [1,2,3,4,5]
```

**示例**

```js
class Polygon {
	constructor({name = "pole", age}) {
		this.name = name
		this.age = age
	}
	sayHello = () => {
		console.log(`Hello, ${this.name} I'm ${this.age} years old.`)
	}
}

const option = {
	age: 23,
}
const poly = new Polygon(option)
poly.sayHello()
```

#### static

```js
class Person {
	constructor(name) {
		this.name = name
	}

	say() {
		return `Hello, ${this.name}`
	}
}

const person = new Person("John")
console.log(person.say())
// Output: "Hello, John"
```

**静态变量和方法**

```js
class Person {
	static name = "John"
	static staticSay = () => {
		return `Hello, ${this.name}`
	}
}

console.log(Person.name)
// Output: "John"
console.log(Person.staticSay())
// Output: "Hello, John"
```

#### private

```js
class PrivateStaticField {
	static #PRIVATE_STATIC_FIELD

	static #privateMethod() {
		return "hello world"
	}

	static basePublicStaticMethod() {
		this.#PRIVATE_STATIC_FIELD = 42
		return this.#PRIVATE_STATIC_FIELD
	}
}

console.log(PrivateStaticField.publicStaticMethod())
// Output: 42
```

::: details private

```js
class Base {
	static #privateStaticMethod() {
		return 42
	}
	static publicStaticMethod1() {
		return Base.#privateStaticMethod()
	}
	static publicStaticMethod2() {
		return this.#privateStaticMethod()
	}
}

class Derived extends Base {}

console.log(Base.publicStaticMethod1())
// 42
console.log(Base.publicStaticMethod2())
// 42

console.log(Derived.publicStaticMethod1())
// 42
console.log(Derived.publicStaticMethod2())
// Error: Receiver must be class Base
```

:::

#### getter & setter

::: tip

```js
get func() {}
set func() {}
```

:::

```js
class ClassWithPrivateAccessor {
	#message

	get #decoratedMessage() {
		return `🎬${this.#message}🛑`
	}
	set #decoratedMessage(msg) {
		this.#message = msg
	}

	constructor() {
		this.#decoratedMessage = "hello world"
		console.log(this.#decoratedMessage)
	}
}

new ClassWithPrivateAccessor()
// 🎬hello world🛑
```

---

### Map & Set

### Ⅴ. html 与 javascript 交互

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
</>
```

#### 2. js 动画

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
window.onload = function () {
	var pos = 0
	//our box element
	var box = document.getElementById("box")
	var t = setInterval(move, 10)

	function move() {
		if (pos >= 150) {
			clearInterval(t)
		} else {
			pos += 1
			box.style.left = pos + "px"
		}
	}
}
```

#### 3. 表单验证

```html
<form onsubmit="return validate()" method="post">
	Number:
	<input type="text" name="num1" id="num1" />
	<br />
	Repeat:
	<input type="text" name="num2" id="num2" />
	<br />
	<input type="submit" value="Submit" />
</form>

<script>
	function validate() {
		var n1 = document.getElementById("num1")
		var n2 = document.getElementById("num2")
		if (n1.value != "" && n2.value != "") {
			if (n1.value == n2.value) {
				return true
			}
		}
		alert("The values should be equal and not blank")
		return false
	}
</script>
```

#### 4. active 按钮切换

```html
<div class="side-menu">
	<a class="sidebar-link discover is-active">
		<svg></svg>
		Discover
	</a>
	<a class="sidebar-link trending">
		<svg></svg>
		Trending
	</a>
	<a class="sidebar-link streaming">
		<svg></svg>
		Streaming
	</a>
</div>
```

```javascript
$(".sidebar-link").click(function () {
	$(".sidebar-link").removeClass("is-active")
	$(this).addClass("is-active")
})
```

#### 5. 滚动页面 header 阴影切换

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
	const wrapper = document.querySelector(".wrapper")
	const header = document.querySelector(".header")
	wrapper.addEventListener("scroll", (e) => {
		e.target.scrollTop > 30 ? header.classList.add("header-shadow") : header.classList.remove("header-shadow")
	})
</script>
```

```javascript
function scrollHeader() {
	const header = document.getElementById("header")
	// When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
	if (this.scrollY >= 50) header.classList.add("scroll-header")
	else header.classList.remove("scroll-header")
	// this.scrollY >= 50 ? header.classList.add('scroll-header') : header.classList.remove('scroll-header')
}
window.addEventListener("scroll", scrollHeader)
```

```css
.scroll-header {
	box-shadow: 0 1px 4px hsla(0, 4%, 15%, 0.1);
}
```

```html
<header class="header" id="header"></header>
```

### Ⅵ 架构

#### 1.html 结构

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

#### 2.css 样式

```css
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap");
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;

	font-family: "Poppins", sans-serif;
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

#### 3.js 事件

```javascript
window.onload = function () {
	// header阴影滚动显示
	const wrapper = document.querySelector(".wrapper")
	const header = document.querySelector(".header")
	wrapper.addEventListener("scroll", (e) => {
		e.target.scrollTop > 30 ? header.classList.add("header-shadow") : header.classList.remove("header-shadow")
	})

	// 按钮切换active
	$(function () {
		$(".menu-link").click(function () {
			$(".menu-link").removeClass("is-active")
			$(this).addClass("is-active")
		})
	})

	// dark-light点击按钮切换主题背景色
	const toggleButton = document.querySelector(".dark-light")
	toggleButton.addEventListener("click", () => {
		document.body.classList.toggle("dark-mode")
	})
}
```

## DOM

### GetElements

```js
document.querySelector()
document.querySelectorAll()
document.getElementById(id)
document.getElementsByTagName(name)
document.getElementsByClassName(classname)
```

### SetElements

```js
element.innerHTML = new html content
element.attribute = new value
element.setAttribute(attribute, value)
element.style.property = new style
```

### AddElement & RemoveElement

```js
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

```js{13}
document.querySelector(id).onclick = function(){
	...
}

document.querySelector(id).click(function() {
	...
})

document.querySelector(id).on("click", function() {
	...
})

document.querySelector(id).addEventListener("click", function(){
	...
})
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
scroll
```

### 浏览器宽高

> （浏览器窗口（浏览器视口）不包括工具栏和滚动条）

```html
<p id="demo"></p>

<script>
	var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth

	var h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight

	var x = document.getElementById("demo")
	x.innerHTML = "浏览器内窗宽度：" + w + "，高度：" + h + "。"
</script>
```

```js
window.addEventListener("scroll", function () {})

window.innerWidth
window.innerHeight
// 滚动距离
window.scrollY
window.pageYOffset
window.open() - 打开新窗口
window.close() - 关闭当前窗口
window.moveTo() - 移动当前窗口
window.resizeTo() - 重新调整当前窗口
window.scroll({top: 0})
```

```js
window.addEventListener("scroll", function () {
  if (window.scrollY >= 80) {
	  ...
  }
})
```

置顶按钮

```js
const scrollToTop = document.querySelector(".scrollToTop")

window.addEventListener("scroll", () => {
	window.pageYOffset > 400 ? (scrollToTop.style.display = "block") : (scrollToTop.style.display = "none")
})
scrollToTop.addEventListener("click", () => {
	window.scroll({top: 0})
})
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

### html 与 javascript 交互

```javascript
window.onload = function () {}

/*
document.createElement()
document.createTextNode()   //创建文本

document.getElementById()
document.getElementsByClassName()
document.getElementsByTagName()
*/

/*
innerHTML	 //html内容
childNodes   //html元素

appendChild()
removeChild()
replaceChild(new, old)
*/

btn.onclick = function () {}
;<button onclick="show();">Click Me</button>

btn.addEventListener("click", myFunction, true)
btn.removeEventListener("click", myFunction)

setInterval(func, 100)
setTimeout(func, 500)
```

#### 1. 更改子元素内容

```html
/** * document.getElementById() * .childNodes * .innerHTML * setTimeout(func, 500); */

<div id="demo">
	<p>some text</p>
	<p>some other text</p>
</div>

<script>
	function setText() {
		var a = document.getElementById("demo")
		var arr = a.childNodes
		for (var x = 0; x < arr.length; x++) {
			arr[x].innerHTML = "new text"
		}
	}
	setTimeout(setText, 500)
</script>

/* new text new text */
```

#### 2. 更改元素 src 属性值 (更换图片)

```html
<img id="mying" src="orange.png" alt="" />

<script>
	var e = document.getElementById("mying")
	e.src = "apple.png"
</script>
```

#### 3. 更改样式颜色

```html
/* * window.onload = function() {}; * arr[i].style.color = "#33EA73"; */

<div>
	<span>...</span>
	<span>...</span>
</div>

<script>
	window.onload = function() {
	    var el = document.getElementsByTagName('span');
	    for(int i = 0; i < el.length; i++){
	        el[i].style.color = "#33EA73";
	    }
	};
</script>
```

```html
<div id="demo" style="width:200px">some text</div>

<script>
	window.onload = function () {
		var x = document.getElementById("demo")
		x.style.color = "#6600FF"
		x.style.width = "100px"
	}
</script>
```

#### 4. 新建 html 段落

```html
<div id="demo">some content</div>

<script>
	window.onload = function () {
		//creating a new paragraph
		var p = document.createElement("p")
		var node = document.createTextNode("Some new text")
		//adding the text to the paragraph
		p.appendChild(node)
		var div = document.getElementById("demo")
		//adding the paragraph to the div
		div.appendChild(p)
	}
</script>

/* some content Some new text */
```

#### 5. js 动画

```html
<div id="container">
	<div id="box"></div>
</div>
```

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
window.onload = function () {
	var pos = 0
	//our box element
	var box = document.getElementById("box")
	var t = setInterval(move, 10)

	function move() {
		if (pos >= 150) {
			clearInterval(t)
		} else {
			pos += 1
			box.style.left = pos + "px"
		}
	}
}
```

#### 6. 鼠标点击事件

```html
<button onclick="show();">Click Me</button>

<script>
	function show() {
		alert("Hi there")
	}
</script>
```

```html
<button id="demo">Click Me</button>

<script>
	window.onload = function () {
		var x = document.getElementById("demo")
		x.onclick = function () {
			document.body.innerHTML = Date()
		}
	}
</script>
```

```javascript
window.onload = function () {
	var btn = document.getElementById("demo")
	btn.addEventListener("click", myFunction, true)
	function myFunction() {
		alert(Math.random())
		btn.removeEventListener("click", myFunction)
	}
}
```

#### 7. 验证登录

```html
<form onsubmit="return validate()" method="post">
	Number:
	<input type="text" name="num1" id="num1" />
	<br />
	Repeat:
	<input type="text" name="num2" id="num2" />
	<br />
	<input type="submit" value="Submit" />
</form>

<script>
	function validate() {
		var n1 = document.getElementById("num1")
		var n2 = document.getElementById("num2")
		if (n1.value != "" && n2.value != "") {
			if (n1.value == n2.value) {
				return true
			}
		}
		alert("The values should be equal and not blank")
		return false
	}
</script>
```

## BOM

### window

```javascript
window.addEventListener("scroll", () => {})
// 置顶
window.scroll({top: 0})
window.pageYOffset
```

### screen

:::: code-group
::: code-group-item 全屏

```js
// 全屏
document.documentElement.requestFullscreen()
// 退出全屏
document.exitFullscreen()
```

:::

::: code-group-item DOM 示例

```html{11,15}
<button class="btn" id="fullscr">Go Fullscreen</button>

<script>
	let fullscreen
	let fsEnter = document.getElementById("fullscr")

	fsEnter.addEventListener("click", function (e) {
		e.preventDefault()
		if (!fullscreen) {
			fullscreen = true
			document.documentElement.requestFullscreen()
			fsEnter.innerHTML = "Exit Fullscreen"
		} else {
			fullscreen = false
			document.exitFullscreen()
			fsEnter.innerHTML = "Go Fullscreen"
		}
	})
</script>
```

### document.documentElement

```js
document.documentElement.scrollTop
document.documentElement.scrollHeight
document.documentElement.clientHeight
document.documentElement.clientWidth

// [0, 1]
let scrolled = document.documentElement.scrollTop / (document.documentElement.scrollHeight - document.documentElement.clientHeight)
```

:::
::::

### cookie & localStorage & sessionStorage

> 三者都是临时存储客户端会话信息或者数据的方法

1. 存储的时间有效期不同:
- cookie的有效期是可以设置的，默认的情况下是关闭浏览器后失效
- sessionStorage: 仅保持在当前页面，关闭当前会话页或者浏览器后就会失效, 键值对会被清空
- localStorage: 永久性存储, 直到手动删除

2. 存储的大小不同
- cookie的存储是4kb左右，存储量较小，一般页面最多存储20条左右信息
- localStorage和sessionStorage的存储容量是5Mb

3. 与服务端的通信
- cookie会参与到与服务端的通信中，一般会携带在http请求的头部中，例如一些关键密匙验证等。
- localStorage和sessionStorage是单纯的前端存储，不参与与服务端的通信

4. 读写操作的便捷程度
- cookie的相关操作，cookie操作起来较为繁琐，并且部分数据不可以读取操作

5. 对于浏览器的支持
- cookie出现的时间较早，目前见到的浏览器都支持
- localStorage和sessionStorage出现的时间较晚，对于版本较低的浏览器不支持(比如IE8版本以下的都不支持)

```js
// cookie
document.cookie="username=John Doe; expires=Thu, 18 Dec 2043 12:00:00 GMT";
console.log(document.cookie)
document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 GMT";

// storage
localStorage.setItem("key", JSON.stringify(obj))
localStorage.getItem("key")
localStorage.removeItem('key')
localStorage.clear()
```

## Module

### Date

::: details 获取日期格式

```js
function printTime() {
	var d = new Date()
	var year = d.getFullYear()
	var month = d.getMonth() + 1
	var day = d.getDate()
	var hours = d.getHours()
	var mins = d.getMinutes()
	var secs = d.getSeconds()
	// var mins = mins < 10 ? `0${mins}` : mins;
	// var secs = secs < 10 ? `0${secs}` : secs;
	var date = `${year}-${month}-${day}`
	var time = `${hours}:${mins}:${secs}`
	console.log(date + " " + time)

	// var dateTime = hours < 12 ? `${date} ${time} AM` : `${date} ${time} PM`;
	// var weekDay = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
	// var dateTime = hours < 12 ? `${date} ${time} AM` : `${date} ${time} PM ${weekDay[d.getDay()]}`;
	// console.log(dateTime);      //2022-1-25 9:49:04 AM

	// $("#cmp4c744dlabel").html(dateTime);
}
setInterval(printTime, 1000)

const dateTime = new Date()
console.log(dateTime.toLocaleString()) // 2022/1/12 下午1:45:36
// console.log(dateTime.toDateString()) // Tue Jan 25 2022
```

:::

::::: details 示例
:::: code-group
::: code-group-item DateTime.js

```js{4}
/**
 * 日期格式化
 */
function getTime({format=false, displayTime=false, displayWeek=false} = {}) {
	const d = new Date()
	let [month, day, year] = [d.getMonth() + 1, d.getDate(), d.getFullYear()]
	let [hours, mins, secs] = [d.getHours(), d.getMinutes(), d.getSeconds()]
	let weekDay = ["日", "一", "二", "三", "四", "五", "六"]
	let week = ''
    // 格式化日期时间
	if (format) {
		month = month < 10 ? `0${month}` : month
		day = day     < 10 ? `0${day}`   : day
		hours = hours < 10 ? `0${hours}` : hours
		mins = mins   < 10 ? `0${mins}`  : mins
		secs = secs   < 10 ? `0${secs}`  : secs
		week = hours < 12 ? `AM` : `PM`
	}

	let date = `${year}-${month}-${day}`
	let time = `${hours}:${mins}:${secs}`

	// 1. 默认日期： 年-月-日
	res = date

	// 2. 显示具体时间：时-分-秒
	if (displayTime) res = `${date} ${time}`

	// 3. 显示上午还是下午，星期几
	if (displayWeek) {
		res = `${date} ${time} ${week} 星期${weekDay[d.getDay()]}`
	}

	return res
}

module.exports = {getTime}
// exports.getTime() {}

```

:::

::: code-group-item DateTimeDemo.js

```js
/*
const date = require("./DateTime")
console.log(date.getTime())
*/

const option = {
	format: true,
	displayTime: false,
	displayWeek: true,
}

const {getTime} = require("./DateTime")
console.log(getTime())
console.log(getTime(option))
```

:::

::: code-group-item DateTimeClass.js

```js
/**
 * 日期格式化
 */

class DateTime {
	constructor({format = false, displayTime = false, displayWeek = false} = {}) {
		;(this.format = format), (this.displayTime = displayTime), (this.displayWeek = displayWeek)
	}
	getTime() {
		const d = new Date()
		let [month, day, year] = [d.getMonth() + 1, d.getDate(), d.getFullYear()]
		let [hours, mins, secs] = [d.getHours(), d.getMinutes(), d.getSeconds()]
		let weekDay = ["日", "一", "二", "三", "四", "五", "六"]
		let week = ""
		// 格式化日期时间
		if (this.format) {
			month = month < 10 ? `0${month}` : month
			day = day < 10 ? `0${day}` : day
			hours = hours < 10 ? `0${hours}` : hours
			mins = mins < 10 ? `0${mins}` : mins
			secs = secs < 10 ? `0${secs}` : secs
			week = hours < 12 ? `AM` : `PM`
		}

		let date = `${year}-${month}-${day}`
		let time = `${hours}:${mins}:${secs}`

		// 1. 默认日期： 年-月-日
		let res = date

		// 2. 显示具体时间：时-分-秒
		if (this.displayTime) res = `${date} ${time}`

		// 3. 显示上午还是下午，星期几
		if (this.displayWeek) {
			res = `${date} ${time} ${week} 星期${weekDay[d.getDay()]}`
		}

		return res
	}
}
module.exports = {DateTime}
// exports.getTime() {}
```

:::

::: code-group-item DateTimeClassTest.js

```js
const {DateTime} = require("./test")

// const date = new DateTime()
const date = new DateTime({
	format: true,
	displayTime: true,
	displayWeek: true,
})

console.log(date.getTime())
```

:::

::: code-group-item MyDateTime.js

```js
/**
 * 日期格式化
 */

class DateTime {
	constructor(root, {format = false, displayTime = false, displayWeek = false} = {}) {
		;(this.root = root), (this.format = format), (this.displayTime = displayTime), (this.displayWeek = displayWeek)
		this.setTime()
	}
	getTime() {
		const d = new Date()
		let [month, day, year] = [d.getMonth() + 1, d.getDate(), d.getFullYear()]
		let [hours, mins, secs] = [d.getHours(), d.getMinutes(), d.getSeconds()]
		let weekDay = ["日", "一", "二", "三", "四", "五", "六"]
		let week = ""
		// 格式化日期时间
		if (this.format) {
			month = month < 10 ? `0${month}` : month
			day = day < 10 ? `0${day}` : day
			hours = hours < 10 ? `0${hours}` : hours
			mins = mins < 10 ? `0${mins}` : mins
			secs = secs < 10 ? `0${secs}` : secs
			week = hours < 12 ? `AM` : `PM`
		}

		let date = `${year}-${month}-${day}`
		let time = `${hours}:${mins}:${secs}`

		// 1. 默认日期： 年-月-日
		let res = date

		// 2. 显示具体时间：时-分-秒
		if (this.displayTime) res = `${date} ${time}`

		// 3. 显示上午还是下午，星期几
		if (this.displayWeek) {
			res = `${date} ${time} ${week} 星期${weekDay[d.getDay()]}`
		}

		return res
		// document.querySelector(root).innerHTML = res
	}
	setTime() {
		const dateTimeLabel = document.createElement("div")
		document.body.appendChild(dateTimeLabel)
		dateTimeLabel.id = this.root

		setInterval(() => {
			dateTimeLabel.innerHTML = this.getTime()
		}, 1000)
	}
}
// module.exports = {DateTime}
export default DateTime
```

:::

:::code-group-item index.html

```ts
<script type="module" src="./MyDateTime.js"></script>
<script type="module">
    import DateTime from "./MyDateTime.js"

    const date = new DateTime("DateTime", {
        format: true,
        displayTime: true,
        displayWeek: true,
    })
</script>
```

:::

::::
:::::

### 数字金额格式化

::: details 示例

```js
/**
 * author: coulsonzero
 * date: 2022-04-29
 * 功能: 数值千分位转换
 * @param {String, Number} num
 * @returns {String}
 */
function moneyFormat(num) {
	if (num == null || num == undefined || (typeof num != "number" && num != parseFloat(num))) {
		return "-"
	}
	/*
	let intStr = String(num)
		.split(".")[0]
		.replace(/(\d)(?=(?:\d{3})+$)/g, "$1,")
	let decimalStr = String((Math.round(num * 100) / 100).toFixed(2)).split(".")[1]
	return intStr + "." + decimalStr
	*/
	return parseFloat(num).toLocaleString("zh-CN", {style: "currency", currency: "CNY", minimumFractionDigits: "2"}).slice(1)
}

console.log(moneyFormat(12319018.975123))
console.log(moneyFormat("870479.8956"))
console.log(moneyFormat("870479.8751"))
console.log(moneyFormat("870479"))
console.log(moneyFormat("870479a.a123"))
console.log(moneyFormat("暂无数据"))
```

:::

### 数组去重

```js
export function removeDup(arr) {
	// if (arr == undefined || arr == null || arr.length == 0 || Array.isArray(arr)) return
	return arr.filter((v, i, self) => self.indexOf(v) === i)
}
```

### 币种单位换算

```js
export function setCurrency(record) {
	const currency = {USD: "$", CNY: "¥"}
	const type = record.current_valuation_currency
	return type != undefined ? currency[type] : ""
	// return record.current_valuation_currency === 'CNY' ? '¥' : '$';
}
```

### 日期就近排序

```js
// 如何对数组进行排序，从最早到最新?

const arr = [
	{id: 1, value: "value1", date: "2018-08-08", time: "15:27:17"},
	{id: 2, value: "value2", date: "2018-08-09", time: "12:27:17"},
	{id: 3, value: "value3", date: "2018-08-10", time: "17:27:17"},
	{id: 4, value: "value4", date: "2018-08-10", time: "01:27:17"},
]

arr.sort((a, b) => b.date.localeCompare(a.date))
console.log(arr)
```

### Session

```js
// 存储
window.sessionStorage[“user_name”] = "shville"
// 取
var username = window.sessionStorage.getItem(“user_name”)
// 删除
window.sessionStorage.removeItem(“user_name”)
```

### 鼠标导航栏上现下隐

```js
document.addEventListener("mousewheel", mouseNav, false)

function mouseNav(e) {
	const header = document.getElementById("header")
	if (e.wheelDelta) {
		// if (e.wheelDelta > 0) {
		// 	console.log("鼠标向上滚动了")
		// } else {
		// 	console.log("鼠标向下滚动了")
		// }

		header.classList[e.wheelDelta > 0 ? "remove" : "add"]("header-hidden")
	}
}
```

```css
.header-hidden {
	/* position: relative; */
	/* top: -100px !important; */
	opacity: 0 !important;
}
```

### 置顶按钮

```javascript
const scrollToTop = document.querySelector(".scrollToTop")

window.addEventListener("scroll", () => {
	window.pageYOffset > 400 ? (scrollToTop.style.display = "block") : (scrollToTop.style.display = "none")
})
scrollToTop.addEventListener("click", () => {
	window.scroll({top: 0})
})
```

```html
<section class="scrollToTop">
	<img src="./assets/logo.png" alt="" />
</section>
```

```css
.scrollToTop {
	display: none;
	position: fixed;
	bottom: 5vh;
	right: 3vw;
	z-index: 1;
	background-color: black;
	padding: 1rem;
	border-radius: 3rem 3rem;
	cursor: pointer;
}

.scrollToTop img {
	height: 6vh;
}
```

### 数字递增效果

```html
<div class="section milestones semiDark" id="milestones">
	<div class="milestones__container">
		<div class="milestone" id="ms1">
			<div class="milestone__icon">
				<img src="./assets/heart.svg" alt="" />
			</div>
			<h2 class="milestone__number">199</h2>
			<p class="milestone__info">Satisfied Customers</p>
		</div>
		<div class="milestone" id="ms2">
			<div class="milestone__icon">
				<img src="./assets/clock.svg" alt="" />
			</div>
			<h2 class="milestone__number">575</h2>
			<p class="milestone__info">Days of operations</p>
		</div>
		<div class="milestone" id="ms3">
			<div class="milestone__icon">
				<img src="./assets/check-circle.svg" alt="" />
			</div>
			<h2 class="milestone__number">49</h2>
			<p class="milestone__info">Completed Projects</p>
		</div>
		<div class="milestone" id="ms4">
			<div class="milestone__icon">
				<img src="./assets/award.svg" alt="" />
			</div>
			<h2 class="milestone__number">55</h2>
			<p class="milestone__info">Awards Won</p>
		</div>
	</div>
</div>

<script src="https://code.jquery.com/jquery-3.1.1.js"></script>

<script>
	// 数字滚动
	let isMilestonesLoaded = false
	const observer = new IntersectionObserver(
		function (entries) {
			if (entries[0].isIntersecting === true) startMilestonesCount()
		},
		{threshold: [0.5]}
	)

	observer.observe(document.querySelector(".milestones__container"))

	const startMilestonesCount = () => {
		if (!isMilestonesLoaded) {
			isMilestonesLoaded = true
			$(".milestone__number").each(function () {
				$(this)
					.prop("Counter", 0)
					.animate(
						{
							Counter: $(this).text(),
						},
						{
							duration: 4000,
							easing: "swing",
							step: function (now) {
								$(this).text(Math.ceil(now))
							},
						}
					)
			})
		}
	}
</script>

<style>
	body {
		background-color: #101010;
		font-family: "Rubik", sans-serif;
		/* overflow-x: hidden !important; */
	}

	.milestones {
		display: -ms-grid;
		display: grid;
		gap: 4vw;
	}

	.milestones .milestones__container {
		display: -ms-grid;
		display: grid;
		-ms-grid-columns: (minmax(250px, 1fr)) [auto-fit];
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 5vh;
	}

	.milestones .milestones__container .milestone {
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-align: center;
		-ms-flex-align: center;
		align-items: center;
		-webkit-box-orient: vertical;
		-webkit-box-direction: normal;
		-ms-flex-direction: column;
		flex-direction: column;
		gap: 2vh;
		background-color: black;
		padding: 2.5vw;
		border-radius: 1rem;
		-webkit-transition: 0.3s ease-in-out;
		transition: 0.3s ease-in-out;
	}

	.milestones .milestones__container .milestone:hover {
		-webkit-box-shadow: rgba(161, 12, 117, 0.534) 0px 2px 4px 0px, rgba(18, 79, 105, 0.829) 0px 2px 16px 0px;
		box-shadow: rgba(161, 12, 117, 0.534) 0px 2px 4px 0px, rgba(18, 79, 105, 0.829) 0px 2px 16px 0px;
		-webkit-transform: translateY(-10px);
		transform: translateY(-10px);
	}

	.milestones .milestones__container .milestone .milestone__icon img {
		height: 8vh;
	}

	.milestones .milestones__container .milestone .milestone__number {
		color: white;
	}

	.milestones .milestones__container .milestone .milestone__info {
		color: #3d3c3c;
	}
</style>
```
