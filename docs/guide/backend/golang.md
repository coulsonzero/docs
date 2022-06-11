# Golang

## Overview

### Hello World

```go
package main

import "fmt"

func main() {
    fmt.Println("hello world!")
}
```

### Output

```go
fmt.Print()
fmt.Println()
fmt.Printf()
```

### Input

```go
var name string
fmt.Scanln(&name)
```

### variable

:::: code-group
::: code-group-item 单个变量
```go
/*==== 1.变量声明 ===== */
var str string  // 默认值: ""

/*==== 2. 变量声明并初始化 ====*/

// a.全局变量(函数外定义的变量)
var str string = "hello world!"
var str = "hello world!"

// b.局部变量(函数内定义的变量)
str := "hello world!"
```
:::
::: code-group-item 多个变量

```go
// 全局变量
var (
    name     string
    age      int
    gender   bool
    score    float64
    skills   []string
    scoreMap map[string]int
)

var (
    name string = "John"
    age  int    = 20
)

var (
    name = "John"
    age  = 20
)

var name, age = "John", 20

// 局部变量
name, age := "John", 20
```
:::
::::
### DataTypes


:::: code-group
::: code-group-item 数据类型
```go
int
float32, float64
byte, rune // 字符,汉字是采用unicode编码，占三个字节, rune是int32的别名（-231~231-1），byte（-128～127）
string
bool


// Array
[]int
[]byte
// map
map[string] int

// 万能类型
interface{}
[]interface{}
[]interface{}{}
map[string] interface{}

// go1.18泛型
any = interface{}
```
:::
::: code-group-item 类型格式化输出

```go
var (
    name     string
    age      int
    gender   bool
    score    float64
    skills   []string
    scoreMap map[string]int
)

fmt.Printf("name =  %s, age = %d, gender = %t, score = %f \n", name, age, gender, score)
// name = "", age = 0, gender = false, score = 0.000000

fmt.Printf("%T, %T, %T, %T \n", name, age, gender, score)
// string, int, bool, float64

fmt.Printf("%v %T \n", skills, skills)
// [] []string

fmt.Printf("%v, %T \n", scoreMap, scoreMap)
// map[], map[string]int
```
:::
::: code-group-item 类型强制转换
```go
import (
	"fmt"
	"strconv"
)

func main() {
	// int -> string
	num := 14141
	str := fmt.Sprintf("%d", num)
	str := strconv.Itoa(num)

	// string -> int
	str := "134"
	num, _ := strconv.Atoi(str)
	num, _ := strconv.ParseInt(str, 0, 0)

	// string -> []byte
	charArr := []byte(str)

	// byte -> string
	str := string(k)
}
```
:::
::::

## Core

### Array
::: tip
相同类型元素的集合

长度固定数组，无法扩容和修改元素(append(), make(), copy(), sort.Ints()等方法)
:::

:::: code-group
::: code-group-item 创建固定数组
```go
// 数组声明 -> 有默认值
arr := [3]int          // [0, 0, 0]
// 数据声明初始化
arr := []int{1, 2, 3}  // [1, 2, 3]
```
:::
::: code-group-item Api
```go
// 长度
len(arr)

// 查
arr[:]
arr[1:]
arr[:3]
arr[1:3]

// 改
arr[0] = 3
// 不支持 arr[:3] = nums[:], 支持copy(arr, nums)


// 解构
arr...  // [1, 2, 3] => 1, 2, 3
func sum(nums ...int) int {}

// 重构
...arr  // 1, 2, 3 => [1, 2, 3]
sum(nums...)
```
:::
::: code-group-item 遍历
```go
// 遍历
for i := 0; i < len(arr); i++ {
	// statement(s)
}

for i := range arr {
    fmt.Println(arr[i])
}

for i, v := range arr {
    fmt.Println(i, v)
}

for _, v := range nums {
    fmt.Println(v)
}
```
:::
::::

### Slice




::: tip
动态数组，可使用Array所有**Api**方法，且长度不固定，可扩容
:::
:::: code-group
::: code-group-item 创建动态数组
```go
var slice []int                 // len: 0, cap: 0, slice: []
slice := []int                  // len: 0, cap: 0, slice: []
slice := []int{1, 2, 3}         // len: 3, cap: 3, slice: [1, 2, 3]
slice := make([]int, len, cap)  // make: 使用len分配slice长度；cap: 可选参数，为数组容量，长度小于容量时其他数值均为默认值
```
:::
::: code-group-item 查
```go
// 查询
fmt.Printf("len: %d, cap: %d, slice: %v \n", len(slice), cap(slice), slice)

```
:::
::: code-group-item 增
```go
// 增加(末尾)
slice := []int{1, 2, 3, 0, 0}
slice = append(slice, 4)         // len: 6, cap: 10, slice: [1 2 3 0 0 4]
slice = append(slice, 4, 5, 6)   // len: 8, cap: 10, slice: [1 2 3 0 0 4 5 6]
nums := []int{4, 5}
slice = append(slice, nums...)   // len: 7, cap: 10, slice: [1 2 3 0 0 4 5]
```
:::
::: code-group-item 删
```go
// 删除(指定索引元素)
slice = append(slice[:i], slice[i + 1:]...)
```

::: code-group-item 改
```go
// 排序
import "sort"
sort.Ints(slice)
sort.Sort(sort.Reverse(sort.IntSlice(slice)))

// 反转
func sliceReverse(s []int) []int {
	j := len(s) - 1
	for i := 0; i < j; i++ {
		s[i], s[j] = s[j], s[i]
		j--
	}
	return s
}

/**
 * append(): 末尾新增一个或多个元素
 * copy()  : 修改切片前n个元素的值 -> slice[0:k]
 * 合并切片 :  将另一个切片数组放在该切片数组的特定位置 -> s[start:n]
 */


// 切片合并(替代部分元素 -> slice[start:end])
// nums1 := []int{1, 2, 3, 0, 0, 0}
// nums2 := []int{4, 5, 6}
// start := 3      // 如果 start := len(nums1) - len(nums2) ->  nums1[:k] = nums2[:]与copy()正好相反
func sliceMerge(nums1, nums2 []int, start int) []int {
    for i, _ := range nums2 {
        // 超出部分将自动截断
        if startIndex+i > len(nums1)-1 {
			break
		}
        nums1[start + i] = nums2[i]
    }
    return nums1
}
// Output: nums1 = [1, 2, 3, 4, 5, 0, 0]



// 切片拷贝(元素，长度，容量)
// slice1 := []int{1, 3, 5}
// slice2 := []int{}   // len=0 cap=0 slice=[]
slice2 = slice[:]   // len=3 cap=3 slice=[1 3 5]

// 元素拷贝(元素) -> slice[:len(slice2)] = slice2[:]
// slice := []int{1, 2, 3, 4, 5, 6}
// slice2 := []int{7, 8, 9}
copy(slice, slice2)     // 将slice2的元素拷贝到slice中，slice长度和容量不会改变
/*
slice: [7 8 9 4 5 6], len: 6, cap: 6
slice2: [7 8 9], len: 3, cap: 3
*/

copy(slice2, slice)
/*
slice: [1 2 3 4 5 6], len: 6, cap: 6
slice2: [7 8 9], len: 3, cap: 3
*/
```
:::
::: code-group-item 扩容
```go
/********************************************************/
// 自动扩容
// (go1.17以1024作为大小分界不同, 新增元素时，slice长度不足时会自动扩容为原来的两倍或以上！当len > 1024之后，扩容cap不再为原来的两倍或以上了，如len=1025 -> cap=1280)
// Go 1.18使用256作为threshold
slice := []int{1, 2, 3}       // len: 3, cap: 3, slice: [1 2 3]
slice = append(slice, 4, 5)   // len: 5, cap: 6, slice: [1 2 3 4 5]

/********************************************************/
// 手动扩容
slice := []int{1, 2, 3}
// step1. 分配新数组容量
newSlice := make([]int, len(slice), 10) // len: 3, cap: 10, slice: [0 0 0]
// step2. 拷贝元素到新数组
copy(newSlice, slice)                   // len: 3, cap: 10, newSlice: [1 2 3]
/********************************************************/
```
:::
::: code-group-item 判断
```go
// 判断两个切片相等
func equal(s1 []int, s2 []int) bool {
	if len(s1) != len(s2) {
		return false
	}

	for i, _ := range s1 {
		if s1[i] != s2[i] {
			return false
		}
	}
	return true
}
```
:::
::::


### Map

```go
```

## Statements

### If Statement

```go{1}
if x := 23; x > 18 {
    //statement(s)
} else if x == 18 {
    //statement(s)
} else {
    //statement(s)
}

// fmt.Println(x) // error: undefined: x
```

### Switch statement

```go
x := 8
switch y := x % 2; y {
    case ...:
        //statement(s)        //不需要break
	case ...:
		//statement(s)
    default:
        //statement(s)
}

// fallthrough: 执行多个case；默认只会执行一个，不需要break，支持多条件匹配
```

**Stitch条件判断**
```go
x := 2
switch {
    case x > 0 && x < 10:
        //statement(s)
    case x > 10:
        //statement(s)
}
```

## Loops

### For Loop

```go
for i := 0; i < len(nums); i++ {}

// 读取 key 和 value
for i, v := range nums {}

// 仅读取 key
for i := range nums {}

// 仅读取 value
for _, v := range nums {}
```

### while Loop

```go
i := 0
for i < len(nums) {
    // statement(s)
    i++
}
```





## FAQ

### 如何查看 Go 版本 ？
```sh
$ go version
go version go1.17.7 darwin/amd64
```

### 如何 安装不同的 Go 版本 ？

> gvm

1. install gvm
```sh
$ curl -sSL https://github.com/soulteary/gvm/raw/master/binscripts/gvm-installer | bash
Cloning from https://github.com/soulteary/gvm.git to /Users/coulsonzero/.gvm
Created profile for existing install of Go at "/usr/local/go"
Installed GVM v1.0.24

Please restart your terminal session or to get started right away run
 `source /Users/coulsonzero/.gvm/scripts/gvm`
```

2. source terminal
```sh
$ source /Users/coulsonzero/.gvm/scripts/gvm
# or 重新打开终端
```

3. install go version
```sh
$ gvm install go1.18.3 -B     # 本地编译(不想下载预编译好的内容)去掉 `-B`参数,
Installing go1.18.3 from binary source
```

4. change go version

```sh
# 切换 go 版本
$ gvm use go1.18.3
Now using version go1.18.3

# 设置 go 默认版本
# $ gvm use go1.18.3  --default
```

5. 查看当前 go 版本
```sh
$ go version
go version go1.18.3 darwin/arm64
```

* 如何卸载 gvm 或进行重置

```sh
$ rm -rf ~/.gvm

# 然后清理 ~/.zshrc 或 ~/.bashrc 添加的内容
```

* 如何解决某个版本下载不顺利的问题
```sh
$ rm -rf ~/.gvm/archive/
```