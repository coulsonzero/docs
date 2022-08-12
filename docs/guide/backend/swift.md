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
// 字符
var char: Character = "A"

// 引用类型
// Array
var nums: Array = [1, 3, 5, 1]
// Set
var set: Set<Int> = [1, 2, 3]
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


## *Collections

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

> 存储相同类型元素的集合

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
var arr: [String] = ["hi", "swift", "world"]
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

for v in arr[0..<arr.count] {
    print(v)
}

for (i, v) in arr.enumerated() {
    print("\(i): \(v)")
}
```



### Set

> 存储相同类型元素不同值的集合

::: warning
set按`随机`顺序输出
:::

```swift
// 长度大小
.count
// 排序
.sorted()
// 增
.insert(e)
// 删
.removeAll()
// 包含
.contains(e)
```

```swift
// 1. init
var set = Set<Character>()  // []
var set: Set<String> = ["David", "Susan", "Robert"]
var set: Set = ["David", "Susan", "Robert"]   // 简写

// 2. api
print(set.count)      // 3
print(set.contains("Paul"))
set.insert("Paul")    // ["Robert", "David", "Paul", "Susan"]
set.removeAll()


// 3. 遍历
for v in set {
    print(v)
}

for v in set.sorted() {
    print(v)
}

// 4. 集合运算
let set_a: Set = ["A", "B", "C"]
let set_b: Set = ["B", "D", "E", "A"]
// 交集 A ∩ B
print(set_a.intersection(set_b))        // ["A", "B"]
// 并集 A ∪ B
print(set_a.union(set_b))               // ["A", "B", "C", "D", "E"]
// A ⊕ B (不属于他们的交集的集合)
print(set_a.symmetricDifference(set_b)) // ["C", "D", "E"]
// A - B (在 A 而不在 B)
print(set_a.subtracting(set_b))         // ["C"]

// 5. 子集、超集

// 判断集合相等
set_a == set_b
// 子集
.isSubset(set)
// 超集
.isSuperset(set)
// 不相交
.isDisjoint(set)
```


### Dict

> 存储键值对的集合

```swift
// 1. init
var dict = [Int: String]()      // [:]
var dict = [1 : "A", 2: "B", 3: "C"]
var dict: [Int: String] = [1 : "A", 2: "B", 3: "C"]


// 2. api
var airports: [String: String] = ["TOR": "Toronto", "NY": "New York"]
// 新增(随机顺序)
airports["LHR"] = "London"          // ["LHR": "London", "TOR": "Toronto", "NY": "New York"]
// 修改
airports["LHR"] = "London Heathrow" // ["LHR": "London Heathrow", "TOR": "London", "NY": "New York"]
airports.updateValue("London Update", forKey: "LHR")
// 查询 (不存在时为nil)
print(airports["LHR"])
// 删
airports.removeValue(forKey: "LHR")

// 遍历
for (key, value) in airports {
    print("key: \(key), value: \(value)")
}
for key in airports.keys {
    print(key)
for value in airports.values {
    print(value)
}

// 排序输出key或value
for key in airports.keys.sorted() {
    print(key)
}
for value in airports.values.sorted() {
    print(value)
}
```



## OOP

### Function

- parameters
- return type

```swift
func hello(name: String) -> String {
    return "Hello, \(name)!"
}

print(hello("Coulson"))

// 比较两数最大值
func max(a: Int, b: Int) -> Int {
    return a > b ? a : b
}

print(max(3, 5))    // 5

// 求数组最值
func minMax(arr: [Int]) -> (min: Int, max: Int) {
    var curMin: Int = arr[0]
    var curMax: Int = arr[0]
    for v in arr[1..<arr.count] {
        if v < curMin {
            curMin = v
        } else if v > curMax {
            curMax = v
        }
    }
    return (curMin, curMax)
}

print(minMax(arr: [1, 3, 6, 2, -2]))    // (min: -2, max: 6)
```


**参数**
:::: code-group
::: code-group-item 额外参数
```swift
// 额外显式参数
func min(num1 a: Int, num2 b: Int) -> Int {
    return a < b ? a : b
}
print(min(num1: 3, num2: 5))
```
:::
::: code-group-item 参数默认值
```swift
// 默认参数
func hi(name: String = "Coulson") -> String {
    return "hi, \(name)"
}

print(hi())                // "hi, Coulson"
print(hi(name: "John"))    // "hi, John"
```
:::
::: code-group-item 不定参
```swift
// 不定参
func sum(nums: Double...) -> Double {
    var total: Double = 0
    for n in nums {
        total += n
    }
    return total
}

print(sum(nums: 3.3, 1.2, 5.1))     // 9.6
```
:::
::: code-group-item 指针参数
```swift
// 函数指针 (原地修改)
func swap(a: inout Int, b: inout Int) {
    let temp = a
    a = b
    b = temp
}

var a: Int = 3
var b: Int = 5
swap(a: &a, b: &b)
print(a, b)     // 5, 3
```
:::
::::







