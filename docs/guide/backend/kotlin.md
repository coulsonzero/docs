# Kitlin

## Basic Concepts

### intro

used to develop Android App

### Hello World

```kotlin
fun main(args: Array<String>) {
    println("Hello World!")
}
```

### Data Types

- Int
- Double
- Boolean
- Char

### Variables

* 变量

:::tip
变量: var
:::

```kotlin
var num: int = 12
var course: String = "Kotlin"
```

* 常量

:::tip
常量: val
:::

```kotlin
val num = 12
```


:::tip
Kotlin支持类型自动推断
:::

```kotlin
val num = 12
val course = "Kotlin"
```

### Operators

* Arithmetic Operators

```md
+ - * / %
```

```kotlin
println("Hello " + "Kotlin")  // "Hello Kotlin"
```

* Assignment Operators

```md
+= -= *= /= %=
```

* Comparison Operators

```
> < >= <= == !=
```

* Logocal Operators

```
&& || !
```

* Increment & Decrement Operators

```kotlin
i++
i--
++i
--i
```

### Comments

```kotlin
// this is a single comment

/*
this is a multi-line comment
*/
```

### Input

* API

```kotlin
readLine()              // String
readLine()!!.toInt()    // Int
readLine()!!.toDouble() // Double
```

* not null assertion operator

:::warning
!! 表示非空
:::


```kotlin
var age = readLine()
parintln("You entered " + age)
```


## Control

### if Statement

:::tip
三元运算写法与python相同
多一个when，与switch有类似之处
:::

```kotlin
if (condition) {
    // statement
} else if (condition) {
    // statement
} else if (condition) {
    // statement
} else {
    // statement
}
```

* 三元运算

```kotlin
var res = if (condition) ... else ...
```

Example

```kotlin
var x = 2
var y = if (x > 1) x + 2 else x -2
```

* when

```
var res = when {
    condition1 -> ...
    condition2 -> ...
    else -> ...
}
```

Example

```kotlin
val age = 19
val group = when {
    age >= 18 -> "Adult"
    else -> "Child"
}
```

### For loops

**for(x in nums) {...}**

:::tip
for (x in nums) {...}
:::

```kotlin
var nums = arrayOf(2, 4, 7, 9)
for (num in nums) {
    println(num)
}
```

**arr.forEach**

:::tip
arr.forEach
kotlin porvides an `it` keyword for name elements in forEach.
:::

```kotlin
fun main(args: Array<String>) {
    var arr = arrayOf(1, 2, 3)
    arr.forEach {
        // v -> println(v * 4)
        println(it * 4)
    }
}
```

:::tip
2..5  => [2, 3, 4]
'a'..'e' => ['a', 'b', 'c', 'd', 'e']
:::

```kotlin
var nums = arrayOf(2, 4, 7, 9)
for (num in 2..5) {
    println(num)
}
```

### while Loops

```kotlin
var i = 0
while (condition) {
    // statement
    i++
}
```

### break & continue

```kotlin
break
continue
```


## Arrays

```kotlin
var array = arrayOf("Tom", "Bob", "Amy")
var nums = 2..6
```

:::tip
2..5  => [2, 3, 4, 5]
'a'..'e' => ['a', 'b', 'c', 'd', 'e']
:::

```kotlin
var nums = arrayOf(1, 2, 3, 8)
println(nums[0])   // 1

var s = "Kotlin"
println(s[2])     // 't'
```

```kotlin
var nums = arrayOf(1, 2, 3, 8, 10)
val res = nums.filter({it > 5})
println(res)   // [8, 10]
```

## Function

### Define Function

```kotlin
fun isEven(num: Int): Boolean {
    return num%2 == 0
}
fun main(args: Array<String>) {
    println(isEven(6)) // true
}
```

### Function Arguments

```kotlin
fun welcome(name: String) {
    println("hello, " + name)
}

fun plus(x: Int, y: Int) {
    println(x + y)
}

fun main(args: Array<String>) {
    welcome("Amy")    // "hello, Amy"
    plus(3, 4)         // 7
}
```

### Return

```kotlin
fun sum(x: Int, y: Int): Int {
    return (x + y)
}

fun main(args: Array<String>) {
    println(sum(3, 4)) // 7
}
```

### Anonymous Function 匿名函数

:::tip
kotlin automatically understands the return type from the Arguments
:::

```kotlin
// val f: (Int, Int) -> Int = (a, b -> a + b)
val f = { a: Int, b: Int -> a + b }

println(f(2, 8)) // 10
```

```kotlin
{String, String} -> Boolean
```

```kotlin
fun main(args: Array<String>) {
    var arr = arrayOf(1, 2, 3)
    arr.forEach(
        // v -> println( v * 4)
        println(it * 4)
    )
}
```

### Higher-order Function 自定义方法

```kotlin
fun apply(x: Int, action: (Int) -> Int): Int {
    return action(x)
}
fun main(args: Array<String>) {
    println(apply(4, {x -> x*2})) // 8
}
```

## Classes

:::tip
OOP: Object-Oriented Programming
:::

### Defined Class

```kotlin
class User {
    var name = ""
    var age = 0
}
```

### Create object of the class

```kotlin
var u1 = User()
u1.name = "James"
ui.age = 12
```

### Constructors

```kotlin
class User(var name: String, var age: Int) {
}

fun main(args: Array<String>) {
    val u1 = User("James", 12)
    println(u1.name) // "James"
}
```

**multple constructors**

```kotlin
class User {
    var name = ""
    var age = 0
    constructor(name: String) {
        name = name
    }
    constructor(name: String, age: Int) {
        name = name
        age = age
    }
}
```

### Getter & Setter

```kotlin
class User {
    var name = ""
    var age = 0

    get() = filed
    set(value) {
        if(value < 0) {
            filed = 18
        } else {
            filed = value
        }

        // filed = if (value < 0) 18 else value
    }
}
```

### Inheritance

:::tip
`open` 定义父类
:::

```kotlin
open class User (var name: String, var age: Int) {
}

class Admin (name: String, age: Int, var country: String): User(name, age) {}

fun main(args: Array<String>) {
    val a = Admin("Amy", 23, "USA")
    println(a.country)    // "USA"
}
```

```kotlin
class Cat: Animal{}
```

### Visiblity Modifiers

- public
- protected
- private

**privete**

```kotlin
class User(var name: String, private age: Int) {}

fun main(args: Array<String>) {
    val u1 = User("Amy", 23)
    println(u1.age)     // error
}
```

**protected**

```kotlin
open class Account() {
    protected var balance = 0
}

class Saving(): Account() {
    // some code
}
```

### Abstract Classes

:::tip
Abstract classes are always `open`, so don't need to yse the `open` keyword
:::

```kotlin
abstract class User(var name: String, var age: Int) {}

class Admin(name: String, age: Int): User(name, age){}

class Moderator(name: String, age: Int, var country: String): User(name, age) {}
```

:::tip
抽象类可以包含抽象方法--方法没有定义具体实现，需要implement
`abstract`
`override`
:::
```kotlin
abstract class User(var name: String, var age: Int) {
    abstract fun display()
}

class Admin(name: String, age: Int): User(name, age){
    override fun display() {
        println(name + " is " + age + " years old")
    }
}

class Moderator(name: String, age: Int, var country: String): User(name, age) {
    override fun display(
        println(name + " is from " + country)
    )
}
```


## Code Projects

**1. Water Consumption**

```kotlin
fun main(args: Array<String>) {
    var years = readLine()!!.toInt()
    val res = years * 365 * 15
    println(res)
}
```

**2. Parking Fee**

```kotlin
fun main(args: Array<String>) {
    var hours = readLine()!!.toInt()
    var total: Double = 0.0

    total = when {
        hours >= 24 -> (hours / 24) * 15.0 + (hours % 24) * 0.5
        hours <= 5 -> hours * 1.0
        else 5.0 + ((hours - 5) * 0.5)
    }

    /*
    if (hours >= 24) {
        total = ((hours / 24) * 15.0) + ((hours % 24) * 0.5)
    } else if (hours <= 5) {
        total = hours * 1.0
    } else {
        total = 5.0 + ((hours - 5) * 0.5)
    }
    */
    println(total)
}
```

**3. Shipping Calculator**

```kotlin
fun shippingCost(amount: Double, international: Boolean): Double {
    return (
        if(international) (if(amount * 0.15 < 50) amount * 0.15 else 50.0)
        else (if(amount > 75) 0.0 else amount * 0.1)
    )
}
fun main(args: Array<String>) {
    val total = readLine()!!.toDouble()
    val international = readLine()!!.toBoolean()
    println(shippingCost(total, international))
}
```

**3. Music Player**

```kotlin
class MusicPlayer {
    private var songs: Array<String> = arrayOf()
    //your code goes here
    fun add(song: String) {
        songs += song
    }

    fun show() {
        songs.forEach {
            println(it)
        }
    }

    fun play() {
        println("Playing " + songs[0])
    }
}
fun main(args: Array<String>) {
    val m = MusicPlayer()

    while(true) {
        var input = readLine()!!
        if(input == "stop") {
            break
        }
        m.add(input)
    }
    m.show()
    m.play()
}
```