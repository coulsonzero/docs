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

// String?
var myCode: String?
print(myCode)   // nil

var myCode2: String? = "hi"
print(myCode2)   // "hi"

// 1...5   -> 1,2,3,4,5
// 1..<5   -> 1,2,3,4

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
// 不需要break

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




