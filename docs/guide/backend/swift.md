# Swift

> IOS App


## Overview

### Hello World

```swift
print("Hello, World!")
```

### Comments

```swift
// This is a single comment

/*
This is a multi-line comment
*/
```

### Variables & Constants

```swift
// 变量
var num = 42
// 常量
let PI = 3.14
```

### DataTypes

```swift
/* basic types */

// 数字
var num: Int = 20
var PI: Float = 3.14
var PI2: Double = 3.14159
// 布尔
var flag: Bool = true
// 字符串
var msg: String = "Hello"
```

> 定义同一类型时，可放在同一行

```swift
var a, b Int
a = 3
b = 4
```

### Opeartor

```Swift
// + - * / %

// Comparison Operators:
// == != > < >= <=

// Logical Operators:
// ! && ||

// a ? b : c
// a...b     a..<b
```

```swift
// +
print("Hello, " + "Swift")

// a ? b : c
var gender = 1
gender == 0 ? print("male") : print("female")

```

**1.空指针**
```swift
// String?
var myCode: String?
print(myCode)   // nil

var myCode2: String? = "hi"
print(myCode2)   // "hi"
```

**2.Range**
```swift
// 1...5   -> 1,2,3,4,5
// 1..<5   -> 1,2,3,4


for i in 1...5 {
    print(i)
}

/*
1
2
3
4
5
*/
```


### Output

```swift
// 格式化输出变量
print("num: \(num)")
// 多个变量不换行，空格分割
print(a, b)     // 3 4
```





### Type Annotations

```swift
Int
Double & Float
Bool
String
```

```swift
let num = 42        // Integer
let pi = 3.14159    // Double
let text = "Hello"  // String
```


```swift
var message = String
message = "Hello"

var red, green, blue: Double
```

## Control

### If Statement

```swift
if age == 18 {
    // statement
} else if age > 23 {
    // statement
} else if age < 30 {
    // statement
} else {
    // statement
}
```

### Switch Statement

```swift
// 不需要 break, fallthrough 继续下一个

switch day {
case 1:
// statement(s)
case 2,3,4,5:
// statement(s)
default:
// statement(s)
}
```

```swift
switch curPoint {
case let (x, y) where x > y:
// statement(s)
case let (x, y) where x == y:
// statement(s)
case let (x, y):
// statement(s)
}
```


:::: code-group
::: code-group-item switch-1
```swift
var distance: Int = 12
switch distance {
case 0:
    print("not a valid distance")
case 1...10:
    print("near")
case 10...100:
    print("far")
default:
    print("too far")
}
```
:::
::: code-group-item switch-2-1
```swift
let myPoint = (1, -1)
switch myPoint {
case let (x, y) where x == y:
    print("\(myPoint): x == y")
case let (x, y) where x == -y:
    print("\(myPoint): x == -y")
case let (x, y):
    print("\(myPoint)")
}
```
:::
::: code-group-item switch-2-2
```swift
let curPoint = (1, 2)
switch curPoint {
case let (x, y) where x > y:
print("A")
case let (x, y) where x == y:
print("B")
case let (x, y):
print("C")
}
```
:::
::::


### While Loop

```swift
while condition {
    // statement(s)
}
```

```swift
repeat {
    // statement(s)
} while condition
```

### For Loop

```swift
for i in 1...5 {
    // statement(s)
}
```

### fallthrough & continue & break

> fallthrough 用于switch statement陈述语句中以不跳出


## Core

### String

```swift
// 字符计数
.count
// 字符串格式化
\(str)
// 判断空串
.isEmpty
```


```swift
// 1. 空串(字符串初始化)
var str1 = ""        // var str: String = ""
var str2 = String()  // var str: String = String()
// 判断 `空串`
print(str1.isEmpty)  // true


// 2. 拼接
// +
print("Hello " + "World")
// +=
var msg = "Hi"
msg += " World"
print(msg) // "Hi World"


// 3. 格式化
let n: Int = 3
let message: String = "num: \(n) times 2 is \(Double(n) * 2)"
print(message)  // num: 3 times 2 is 6.0

// 4. 字符计数
let str: String = "Hello, Swift"
print(str.count)   // 12

// 5. 判断相等
print(str1 == str2)


// 6. 前后缀 startswith/endswith
print("main.swift".hasPrefix("main"))   // true
print("main.swift".hasSuffix("swift"))  // true


// 7. 字符串遍历
for c in "Hi, Swift" {
    print(c)
}
```



### Array

```swift
.count
.isEmpty
// 增
.append(e|arr) | +=
.insert(e, i)
// 删
.remove(i)
.removeAll()
// 查(改)
arr[i]
arr[l...r]
```

```swift
var arr: Array = ["hi", "swift", "world"]

print(arr)          // ["hi", "swift", "world"]
// 数组大小
print(arr.count)    // 3
// 空数组
print(arr.isEmpty)  // false
// 新增元素(末尾)
arr.append("hello")  // ["hi", "swift", "world", "hello"]
// arr.append(contentsOf: ["h1", "h2", "h3"])
arr += ["golang"]    // ["hi", "swift", "world", "hello", "golang"]
// 查询元素
print(arr[0])        // "hi"
// 修改元素
arr[0] = "good"      // ["good", "swift", "world", "hello", "golang"]
arr[1...3] = ["banana", "orange"]   // ["good", "banana", "orange", "golang"]
// 插入元素
arr.insert("ie", at: 0)
print(arr)
// 删除元素
arr.remove(at: 0)   // ["good", "banana", "orange", "golang"]
arr.removeLast()    // ["good", "banana", "orange"]
arr.removeFirst()   // ["banana", "orange"]
arr.removeAll()     // []


// 数组遍历
var arr: Array = ["hi", "swift", "world"]

for v in arr {
    print(v)
}

for (i, v) in arr.enumerated() {
    print("\(i): \(v)")
}
```

