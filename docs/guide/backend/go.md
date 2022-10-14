# [Golang](https://golang.google.cn)

`Google` in `2007`
simple, reliable and efficient software.

## 一. 快速开始

[Go 中文学习网](https://www.topgoer.com/)

### 1.1 环境安装

Step1. [下载 Go SDK](https://golang.google.cn/dl/)

Step2. 终端输入 `go version` 查看 golang SDK 是否安装成功

Step3. 更改 go 系统环境变量

```sh
$ vim ~/.bash_profile
export PATH=$PATH:/usr/local/go/bin

$ source ~/.bash_profile
```

### 1.3 配置 env 环境变量

> 方便从 github 下载依赖包

```sh
# 查看go环境变量
$ go env
# enable module
$ go env -w GO111MODULE=on
# 设置国内代理 https://goproxy.io
$ go env -w GOPROXY=https://goproxy.cn,direct
# http://mirrors.aliyun.com/goproxy/
```

### 1.3 初始化 Go 项目

```sh
$ mkdir go-hello
$ cd go-hello

# 初始化go项目
$ go mod init go-hello
# 下载依赖包
$ go mod tidy

# 运行go程序
$ go run main.go
```

## Basis Grammar

### 1. Hello World

::: tip
Go 通过`main`方法启动, main()方法的`package`必须为`main`
:::

:::: code-group
::: code-group-item hello.go

```go
package main

import "fmt"

func main() {
    fmt.Println("Hello, World!")
}
```

:::
::::

### 2. Input & Output

**Output**

```go
fmt.Print()		// 不换行
fmt.Println()   // 换行
fmt.Printf()    // 格式化输出
/**
 * %T: 数据类型
 * %v: 值
 * %d: int整数十进制
 * %f: float
 * %t: bool
 * %c: rune(int32), 其他语言为char
 * %s: string
 * %p: 指针
 * %b: int整数二进制
 * %%: %
 * %-3d: `-`指 左对齐, `3`指占3个字符
 * %02d: `02指`不足两位数字时在数字前面补齐0
 * %+v : 输出`key`, 如&{a:7 b:-2.35 c:abc}
 * %#v : 输出类型, map[string]int{"CST":-21600, "EST":-18000, "MST":-25200, "PST":-28800, "UTC":0}
 */

```

**Input**

```go{3}
var name string
// fmt.Print("请输入名称(name): ")
fmt.Scanln(&name)
```

**For Example**
:::: code-group
::: code-group-item output

```go
package main
import "fmt"

func main() {
	// 不换行
	fmt.Print("go>>> ")
	// 换行
	fmt.Println("Hello, World!")

	// 格式化输出
	fmt.Printf("name: %s, age: %d, pi: %f, isEven: %t \n", "coulson", 20, 3.14, true)
	// %-3d ——以10进制显示，3表示输出的数字占3个字符的位置，-表示左对齐；
	fmt.Printf("%d*%d=%-3d ", j, i, i*j)

	// 字符串格式化
	s := fmt.Sprintf("name: %s, age: %d.\n", "coulson", 20)
	fmt.Println(s)
}

/*
go>>> Hello, World!
name: coulson, age: 20.
*/
```

:::
::: code-group-item input

```go{8}
package main

import "fmt"

func main() {
	var name string
	fmt.Print("请输入名称(name): ")
	fmt.Scanln(&name)

	fmt.Println("Output: " + name)
}
```

:::
::: code-group-item multiple-inputs

```go
package main

import "fmt"

func main() {
	var n int
	fmt.Print("请输入数组长度: ")
	fmt.Scanln(&n)

	nums := make([]int, 0)
	var input int
	for i := 0; i < n; i++ {
		fmt.Print("请输入一个元素: ")
		fmt.Scanln(&input)
		nums = append(nums, input)
	}
	fmt.Println(nums)
}
/*
请输入数组长度: 4
请输入一个元素: 1
请输入一个元素: 3
请输入一个元素: 5
请输入一个元素: 6
[1, 3, 5, 6]
*/
```

:::
::::

### 3. Variable & Constants

:::: code-group
::: code-group-item 单个变量

```go{1,5}
var str string = "Tom"
var str string  // 有默认值: ""
var str = "Tom"	// 类型可省略

str := "Tom"	// 仅可作为局部变量(函数体内声明)
```

:::
::: code-group-item 多个变量

```go{24}
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
::: code-group-item 变量示例

```go
package main

import "fmt"

// 变量声明赋值后仍需调用，否则报错

// 全局变量(函数外声明的变量)
var (
	id       int
	username string
	password string
)

var (
	Host = "127.0.0.1"
	Port = 3306
)

func main() {
	// 局部变量(函数内声明的变量)
	name, age := "Tom", 20

	fmt.Println(name, age)
	fmt.Printf("result: %d, %s, %s", id, username, password)
	fmt.Println(Host, Port)

}

// single variable
func createSingleVar() {
	var num int
	fmt.Println(num)

	var str = "hello"
	fmt.Println(str)

	name := "coulson"
	fmt.Println(name)
}

// multiple variable
func createMultipleVar() {
	var name, age = "john", 20
	fmt.Println(name, age)

	num, str := 12, "hello"
	fmt.Println(num, str)

	var (
		host = "127.0.0.1"
		port = "3306"
	)
	fmt.Println(host, port)
}
```

:::
::: code-group-item 常量

```go
package main

import "fmt"

// 常量可以定义后可暂不调用
const str string = "constant"

const (
	pi   float64 = 3.14
	host string  = "127.0.0.1"
	port int     = 3306
)

const (
	a = iota * 2 // 0
	b            // 2
	c            // 4
)

func main() {
	fmt.Println(pi, host, port, str)
	fmt.Println(a, b, c)
}
```

:::
::::

> 全局变量: 函数外定义的变量，可以在整个包甚至外部包（被导出后）使用, 未初始化时有默认值
>
> 局部变量: 函数内定义的变量, 作用域只在函数体内，参数和返回值变量也是局部变量, 必须初始化否则报错

::: danger

> **A.变量作用域**:
>
> 1.全局变量: `var x = 12` (不能使用 `x := 12`)
>
> 2.局部变量: `x := 12`(var x = 12 亦可, 推荐前者)
>
> **B.变量修改**:
>
> a.全局变量: `func change() {x += 1}` (仅无参修改, 使用参数 set(x int)无法修改)
>
> b.局部变量: `func change_ptr(ptr *int) {*ptr += 1}` (仅指针修改, 使用 set(x int)无法修改)
>
> 注意其他方式无法修改

:::
:::: code-group
::: code-group-item 变量作用域

```go
package main
import "fmt"

func test() {
	x := 8
	fmt.Println(x)
}

var y = 12 // y := 12 会报错, 只能用于局部变量

func main() {
	//fmt.Println(x) //  undefined: x
	fmt.Println(y) // 12
}

```

:::
::: code-group-item 全局变量

```go{6}
package main
import "fmt"

var x = 3

func change() {
	x += 1
}

// 函数参数为局部作用域
func set(x int) {
	x += 1
}

func main() {
	fmt.Println(x) // 3
	change()
	fmt.Println(x) // 4
	set(x)
	fmt.Println(x) // 4
}
```

:::
::: code-group-item 局部变量

```go{8}
package main
import "fmt"

func set(val int) {
	val = 8
}

func set_ptr(ptr *int) {
	*ptr = 8
}

func main() {
	x := 12

	set(x)
	fmt.Println(x) // 12

	set_ptr(&x)
	fmt.Println(x) // 8
}
```

:::
::: code-group-item 类字段

```go{9,13}
package main
import "fmt"

type Student struct {
	name string
	age  int
}

func (p Student) change() {
	p.age += 1
}

func (p *Student) change_ptr() {
	p.age += 1
}

func main() {
	s := Student{"Coulson", 25}
	fmt.Println(s.age) // 25
	s.change()
	fmt.Println(s.age) // 25
	s.change_ptr()
	fmt.Println(s.age) // 26
}

```

:::
::::

### 4. DataTypes

:::: code-group
::: code-group-item 数据类型

```go
// 基础数据类型

// 1.数字 (整数、浮点数、复数)
int  <int8/int16/int32/int64>     	// 带符号整数, rune = int32
uint <uint8/uint16/uint32/uint64>	// 无符号整数(非负数), byte = uint8
// int大小: 与具体的平台有关, int在32位系统中是4字节，在64位系统中是8字节
float32/float64    		// 1.2 浮点数
complex64/complex128	// 1.3 复数
// 2.布尔
bool
// 3.字符串
string, []byte, []rune


// Array
[]int
[]string

// map
map[string] int

// 万能类型
interface{}
[]interface{}
map[string] interface{}
```

```go
// go1.18泛型
type any = interface{}

// 写法一
func toString[T int|float64](s T) []T {}


// 写法二(推荐)
type Number interface {
	int | float64
}

func toString[T Number](s T) []T {}
```

:::
::: code-group-item Api

```go
// 查询 字节占用大小
unsafe.Sizeof()

// 查询 数据类型
reflect.TypeOf()

// 取值范围
fmt.Printf("int: -%d ~ %d\n", math.MaxInt, math.MaxInt)
```

:::
::: code-group-item 示例

```go
// 整数
var num int = 12
var pi float32 = 3.141
var r = 3 + 2i

// 布尔
var bool = true

// 字符串
var name string = "john"

// 字符
var c rune = '你'	// fmt.Println(string(c)), 中文字符不能使用int8/uint8
var b byte = 'v'	// fmt.Println(string(b))

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
::: code-group-item 中文字符

```go
func main() {
	c := 'z'
	fmt.Printf("char: %c, value: %v, typeof: %T \n", c, c, c)                         // char: z, value: 122, typeof: int32
	fmt.Printf("char: %c, value: %v, typeof: %T \n", byte(c), byte(c), byte(c))       // char: z, value: 122, typeof: uint8
	fmt.Printf("char: %s, value: %v, typeof: %T \n", string(c), string(c), string(c)) // char: z, value: z,   typeof: string

	z := '美'
	fmt.Printf("char: %c, value: %v, typeof: %T \n", z, z, z)                         // char: 美, value: 32654, typeof: int32
	fmt.Printf("char: %c, value: %v, typeof: %T \n", byte(z), byte(z), byte(z))       // char: *, value: 142, typeof: uint8
	fmt.Printf("char: %s, value: %v, typeof: %T \n", string(z), string(z), string(z)) // char: 美, value: 美, typeof: string
}
```

:::
::::

### 5. String 字符串

[strings pkg](#strings)

:::: code-group
::: code-group-item 初始化

```go
// 初始化
var s string // 全局变量初始化
s := ""		 // 局部变量初始化

// 字符串格式化
s := fmt.Sprintf("name: %s", name)

// 中文长度(1个中文占3个字节)
len([]rune(s))	// []byte：不能用于中文字符数组
```

:::
::: code-group-item 遍历

```go{15-16}
package main

import "fmt"

func main() {
	s1 := "hello world"
	s2 := "Github官网"

	traversalString1(s1) // hello world
	traversalString2(s1) // hello world
	traversalString3(s1) // hello world
	traversalString4(s1) // hello world

	traversalString1(s2) // Githubå®®ç½
	traversalString2(s2) // Githubå®
	traversalString3(s2) // Github官网
	traversalString4(s2) // Github官网
}

func traversalString1(s string) {
	for i := 0; i < len(s); i++ {
		fmt.Print(string(s[i]))
	}
	fmt.Println()
}

func traversalString2(s string) {
	for i := 0; i < len([]rune(s)); i++ {
		fmt.Print(string(s[i]))
	}
	fmt.Println()
}

func traversalString3(s string) {
	for _, v := range s { // rune
		fmt.Printf(string(v))
	}
	fmt.Println()

}

func traversalString4(s string) {
	for _, v := range []rune(s) {
		fmt.Printf(string(v))
	}
	fmt.Println()
}
```

:::
::: code-group-item 类型转换

```go{2,6}
// string -> int
num, _ := strconv.Atoi(str)		// return int
num, _ := strconv.ParseInt(str, 10, 64)	// return int64

// int -> string
str := strconv.Itoa(num)
str := fmt.Sprintf("%d", num)

// array -> string
strings.Join(s, "")

// string -> []byte
[]byte("hello")

// byte -> string
string('z')
```

:::
::: code-group-item Api

```go

/** 字符串拼接方式
 * 1. +
 * 2. strings.Join(arr, "")
 * 3. sb.WriteString(v)
 * 4. buf.Write([]byte(v))
 */
func build(arr []string) string {
	var sb strings.Builder
	for _, v := range arr {
		sb.WriteString(v)
	}
	return sb.String()
}

func buffer(arr []string) string {
	buf := new(bytes.Buffer)
	for _, v := range arr {
		buf.Write([]byte(v))
	}
	return buf.String()
}
```

:::
::: code-group-item char

```go
// 判断字符类型
unicode.IsLetter(v): 字母
unicode.IsDigit(v) : 十进制数字
unicode.IsNumber(v): 数字
unicode.IsSpace(v) : 空白符号
unicode.IsPunct(v) : Unicode标点字符

c := 'a'
fmt.Printf("char: %c, value: %v, typeof: %T \n", c, c, c)
// char: a, value: 97, typeof: int32

arr := [...]int{'a': 1}
// len: 98, cap: 98, array: [..., 1]
```

:::
::::

### 6. Array 数组

::: warning

> 一旦声明，长度固定无法修改，需要动态扩展数据参考切片`make([]int 5)`
>
> 只能查询，无法增删改
> :::

::: tip Tip
固定数组：值拷贝, 长度固定数组，无法扩容和修改元素(append(), make(), copy(), sort.Ints()等方法)

动态数组(切片 slice): 引用拷贝
:::

:::: code-group
::: code-group-item 创建固定数组

```go
// 数组声明 -> 有默认值
arr := [3]int          // [0, 0, 0]
// 数据声明初始化
arr := []int{1, 2, 3}  // [1, 2, 3]


// For Example
var a [3]int                             // len: 3, cap: 3, array: [0 0 0], array: [3]int{0, 0, 0}
var b = [...]int{1, 2, 3}                // len: 3, cap: 3, array: [1 2 3]
var c = [...]int{1: 2, 2: 3}             // len: 3, cap: 3, array: [0 2 3]
var d = [...]int{1, 2, 4: 5, 6}          // len: 6, cap: 6, array: [1 2 0 0 5 6]
var e = [...]int{'a': 1}                 // len: 98, cap: 98, array: [..., 1]
var f = [...]int{'a': 1, 'b': 2, 'c': 3} // len: 100, cap: 100, array: [..., 1 2 3]

fmt.Printf("len: %d, cap: %d, array: %v, array: %#v \n", len(a), cap(a), a, a)
fmt.Printf("len: %d, cap: %d, array: %v \n", len(b), cap(b), b)
fmt.Printf("len: %d, cap: %d, array: %v \n", len(c), cap(c), c)
fmt.Printf("len: %d, cap: %d, array: %v \n", len(d), cap(d), d)
fmt.Printf("len: %d, cap: %d, array: %v \n", len(e), cap(e), e)
fmt.Printf("len: %d, cap: %d, array: %v \n", len(f), cap(f), f)

fmt.Printf("%v, %c, %T", 'a', 'a', 'a') // 97, a, int32
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

### 7. Slice 切片

::: tip
动态数组，可使用 Array 所有**Api**方法，且长度不固定，可扩容
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
::: code-group-item api
```go
len()		// 长度
cap()		// 容量
make()		// 主动分配扩容
append()    // 容量不足自动扩容
copy()      // 容量不变, 元素覆盖多余自动截断
reflect.DeepEqual() // 判断两个切片是否相等
slice[1:3]
// 不定参可使用解构
...slice
slice...
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
// slice := []int{1, 2, 3, 0, 0}
slice = append(slice, 4)         // len: 6, cap: 10, slice: [1 2 3 0 0 4]
slice = append(slice, 4, 5, 6)   // len: 8, cap: 10, slice: [1 2 3 0 0 4 5 6]
// nums := []int{4, 5}
slice = append(slice, nums...)   // len: 7, cap: 10, slice: [1 2 3 0 0 4 5]

// 中间插入元素
slice = append(slice[:i], append([]int{v}, slice[i:]...)...)	// 在index=i的位置插入value


// 插入单个元素
func SliceInsert(slice []int, index int, value int) []int {
	return append(slice[:index], append([]int{value}, slice[index:]...)...)
}

func sliceInsert(slice []int, index int, value int) []int {
	slice = append(slice, 0)
	copy(slice[index+1:], slice[index:])
	slice[index] = value
	return slice
}
```

:::
::: code-group-item 删

```go
// 删除(指定索引元素)
slice = append(slice[:i], slice[i + 1:]...)

// 删除切片部分元素
slice = slice[i:]
```

:::
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
// 判断两个对象(slice\map\struct)是否相等
func IsEqual(x any, y any) bool {
	return reflect.DeepEqual(x, y)
}

// 判断是否包含目标元素
func SliceContains[T sl](slice []T, target T) bool {
	for _, v := range slice {
		if v == target {
			return true
		}
	}
	return false
}
```

:::
::::


### 8. Map 哈希表

:::: code-group
::: code-group-item 创建 Map

```go
// 方式一：声明map, 使用make分配空间
m := make(map[string] int)

// 方式二：初始化map
cityMap := map[string] string{
	"us": "USA",
	"fr": "France",
	"cn": "China",	// 末尾加逗号，或者将大括号放在此行！
}


m["Jame"] = 97
m["Amye"] = 86

// 解构: cityMap...
```

:::
::: code-group-item api

```go
m := make(map[string]int)

// 查
fmt.Println(m)

// 增改
m["Jame"] = 97

// 删
delete(m, "Jame")

// 判断包含
if _, ok := m[key]; ok {...}

// 遍历
for k, v := range m {
	// statement
}

```

:::
::: code-group-item Example

```go
package main
import "fmt"

func sumScore() {
    team := map[string] float32 {
        "P1": 1.98,
        "P2": 2.05,
        "P3": 1.89,
        "P4": 2.0,
        "P5": 2.11}

    var sum float32 = 0.0
    for _, v := range team {
        sum += v
    }
    fmt.Println(sum / 5)
}

func twoSum(nums []int, target int) []int {
    m := make(map[int]int)
    for i, v := range nums {
        if j, ok := m[target - v]; ok {
            return []int {j, i}
        }
        m[v] = i
    }
    return nil
}
```

:::
::::

### 9. Function 函数

> 值传递(默认): 指在调用函数时将实际参数复制一份传递到函数中，这样在函数中如果对参数进行修改，将不会影响到实际参数
>
> 引用传递(指针): 指在调用函数时将实际参数的地址传递到函数中，那么在函数中对参数所进行的修改，将影响到实际参数

#### 1) 函数定义

::: details 详情

```go{8}
package main
import "fmt"

func main() {
	hello()
}

func hello() {
	fmt.Println("hello world!")
}
```

:::

#### 2) 参数

::::: details 详情
:::: code-group
::: code-group-item 无参

```go{4}
package main
import "fmt"

func welcome() {
	fmt.Println("hello, world")
}

func main() {
	welcome()
}
```

:::
::: code-group-item 有参

```go{4}
package main
import "fmt"

func sum(a int, b int) {
	fmt.Println(a + b)
}

func main() {
	sum(12, 8)
}

```

:::
::: code-group-item 不定参

```go{4}
package main
import "fmt"

func sum(nums ...int) int {
	total := 0
	for _, v := range nums {
		total += v
	}
	return total
}

func main() {
    nums := []int {0, 2, 4, 6, 8}

	res := sum(nums...)
    fmt.Println(res)	// 20
}
```

:::
::::
:::::

#### 3) 返回值

::: details 详情

```go {4-5}
package main
import "fmt"

func swap(x, y int) (int, int) {
    return y, x
}

func main() {
    a,b := swap(42, 8)
    fmt.Println(a)
    fmt.Println(b)
}
```

:::

#### 4) defer、匿名函数、闭包、递归、作用域

:::: code-group
::: code-group-item defer 析构器

```go{10}
// 关闭文件、垃圾清理， Stack 堆结构：后进先出
// 执行时机：defer栈先进后出，在return之后执行，但在函数退出之前
package main
import "fmt"

func welcome() {
    fmt.Println("Welcome")
}

func main() {
    defer welcome()   //直到main完成时执行，然后调用它
    fmt.Println("Hey")
}

/*
 * Hey
 * Welcome
 */
```

```go{7}
package main
import "fmt"
func main() {
   fmt.Println("start")

   for i := 0; i < 3; i++ {
       defer fmt.Println(i)  //后进先出
   }
   fmt.Println("end")
}

/*
* start
* 2
* 1
* end
*/
```

```go
func main() {
	fmt.Println("start")
	fmt.Println("return", deferDemo())
	fmt.Println("end")
}

func deferDemo() int {
	i := 0
	defer func() {
		fmt.Println("defer1")
	}()
	defer func() {
		i += 1
		fmt.Println("defer2")
	}()
	return i
}

/*
start
defer2
defer1
return 0
end
*/
```

:::
::: code-group-item 闭包

```go{7}
package main
import "fmt"

func intSeq() func() int {
	i := 0
	// 闭包：函数内的函数
	return func() int {
		i++
		return i
	}
}
func main() {
	nextInt := intSeq()
	fmt.Println(nextInt()) // 1
	fmt.Println(nextInt()) // 2
	fmt.Println(nextInt()) // 3

	newInts := intSeq()
	fmt.Println(newInts()) // 1
}
```

:::
::: code-group-item 匿名函数

```go{6}
package main
import "fmt"

func main() {
	// 匿名函数：像变量一样声明函数
	print := func(a ...interface{}) {
		fmt.Printf("Hello %s", a...)
	}
	print("coulson")
}
```

:::
::::

For Example

```go
// 阶乘 n!
func fact(n int) int {
    if n == 0 {
        return 1
    }
    return n * fact(n-1)
}

// 斐波那契额数列求和
var fib func(n int) int {
	if n < 2 {
		return n
	}
	return fib(n-1) + fib(n-2)
}
```

### 10. Structs 结构体

> 不同类型或相同类型的数据集

:::: code-group
::: code-group-item struct

```go
type person struct {
	name string
	age  int
}
```

:::
::: code-group-item init

```go
package main

import "fmt"

type person struct {
	name   string
	age    int
}

func main() {
	// 方式一
	var p1 person
	p1.name = "John"
	p1.age = 20

	// 方式二
	p2 := new(person)
	p2.name = "John"
	(*p2).age = 20

	// 方式三：必须要写全！
	p3 := person{"John", 20}

	// 方式四(推荐)
	p4 := person{name: "John", age: 20}

	// 方式五(推荐)
	p5 := &person{name: "John"}
	(*p5).age = 20

	// 方式六
	p := newPerson("John", 20)
}

// 需要使用指针
func newPerson(name string, age int) *person {
	return &person{name: name, age: age}
}

```

:::
::: code-group-item method

```go
type person struct {
	name string
	age  int
}

/*--------------------------------*/
// 需要使用指针: 作为接收者才能修改struct实例变量的值
func (p *person) setName(name string) {
	p.name = name
}

func (p person) getName(name string) {
	return p.name
}

/*--------------------------------*/
// 需要使用指针: struct作为method参数(即使不是修改操作)
func setName(p *person, name string) {
	p.name = name
}

// 需要使用指针
func newPerson(name string, age int) *person {
	return &person{name: name, age: age}
}

/*--------------------------------*/

// public struct
type Student struct {
	Score float64	// public  field
	class int       // private field
}

// public method: 首字母大写
func (p *person) GetAge() {
	return p.age
}

// private method
func (p *person) setAge(age int) {
	p.age = age
}
```

:::
::: code-group-item 继承

```go
package main

import "fmt"

type Animal struct {
	Name string
}

func (a Animal) getName(name string) {
	fmt.Printf("Good Morning! %s \n", name)
}

type Cat struct {
	Animal // 继承
}

// Method Rewriting
// 子类重写父类方法(方法名、参数都相同)
func (c Cat) getName(name string) {
	// 调用父类 字段/方法
	fmt.Println(c.Animal.Name)
	c.Animal.getName(name)

	fmt.Printf("Nice to meet you! %s \n", name)
}

func main() {
	cat := Cat{}
	cat.getName("Tim")

}
```

:::
::: code-group-item 组合

```go
package main

import "fmt"

type Person struct {
}

func (p *Person) GetName(name string) {
	fmt.Printf("Good Morning! %s \n", name)
}

type Student struct {
	*Person
}

func main() {
	p := Person{}
	p.GetName("John") // Good Morning! John

	s := Student{&Person{}}
	s.GetName("John") // Good Morning! John
}
```

:::
::: code-group-item 匿名结构体

```go
package main

import "fmt"

type Person struct {
	Name string
	Age  int
}

func main() {
	person := &Person{"John", 20}
	// 匿名结构体
	student := struct {
		score   float64
		class   int
		persons Person
	}{
		97.2,
		7,
		*person,
	}
	fmt.Printf("%+v", student)
	// Output: {score:97.2 class:7 persons:{Name:John Age:20}}
}
```

:::
::: code-group-item OOP

```go
package main

import "fmt"

// 字段/方法大写：public, 小写：private
type Person struct {
	name string
	age  int
}

// getter
func (this *Person) GetName() string {
	return this.name
}

// setter
func (this *Person) SetName(name string) {
	this.name = name
}

// toString
func (this *Person) Show() {
	fmt.Printf("name = %s, age = %d\n", this.name, this.age)
}

type Student struct {
	Person  // 继承
	level int
}

// 方法重写
func (this *Student) Show() {
	fmt.Printf("name = %s, age = %d, level = %d\n", this.name, this.age, this.level)
}

// 子类新方法
func (this *Student) GetLeavel() int {
	return this.level
}

func main() {
	p := Person{"Tom", 21}

	// 声明子类
	s := Person{ Student{"John", 23}, 3 }
}

```


:::
::: code-group-item 类输入遍历

```go
package main

import "fmt"

type Cart struct {
	prices []float32
}

func main() {
	c := Cart{}
	var n int
	fmt.Scanln(&n)

	var num float32
	for i := 0; i < n; i++ {
		fmt.Scanln(&num)
		c.prices = append(c.prices, num)
	}

	c.show()
}

func (x Cart) show() {
	var sum float32 = 0.0
	for _, v := range x.prices {
		sum += v
	}
	fmt.Println(sum)
}
```

:::
::: code-group-item 类标签

```go
type BarData struct {
	Type     string      `json:"type"`
	Data     []int       `json:"data"`
	AxisLine interface{} `json:"axisLine"`
}
```

:::
::::

### 11. Interface 接口

```go
package main

import (
	"fmt"
	"math"
)

type geometry interface {
	area() float64
	perim() float64
}

type rect struct {
	width, height float64
}
type circle struct {
	radius float64
}

func (r rect) area() float64 {
	return r.width * r.height
}
func (r rect) perim() float64 {
	return 2*r.width + 2*r.height
}

func (c circle) area() float64 {
	return math.Pi * c.radius * c.radius
}
func (c circle) perim() float64 {
	return 2 * math.Pi * c.radius
}

func measure(g geometry) {
	fmt.Println(g)
	fmt.Println(g.area())
	fmt.Println(g.perim())
}

func main() {
	r := rect{width: 3, height: 4}
	c := circle{radius: 5}

	measure(r)
	measure(c)
}

```

### 12. Pointer 指针

> 浅拷贝: 修改其中一个，另一个也会随之改变

::: tip

```
1. 变量
全局变量: 使用无参方法修改
局部变量: 使用指针修改
2. 函数内的参数
局部作用域, 栈内存
3. 结构体的数据
使用指针修改
```

:::

:::: code-group
::: code-group-item pointer

```go{6,10,12,16}
package main
import "fmt"

func main() {
	x := 12
	p := &x
	fmt.Println(&x) // 0xc000018080, 重新运行程序内存地址会不断变化
	fmt.Println(p)  // 0xc000018080
	fmt.Println(&p) // 0xc00000e028
	fmt.Println(*p) // 12

	x += 2
	fmt.Println(&x) // 0xc000018080
	fmt.Println(p)  // 0xc000018080
	fmt.Println(&p) // 0xc00000e028
	fmt.Println(*p) // 14
}
```

:::
::: code-group-item input

```go{2}
var input string
fmt.Scanln(&input)

fmt.Println(input)
```

:::
::: code-group-item func

```go{8}
package main
import "fmt"

func set(val int) {
	val = 8
}

func set_ptr(ptr *int) {
	*ptr = 8
}

func main() {
	x := 12

	set(x)
	fmt.Println(x) // 12

	set_ptr(&x)
	fmt.Println(x) // 8
}
```

:::
::: code-group-item struct

```go{17,23}
package main

import (
	"fmt"
)

type student struct {
	name string
	age  int
}

func (p Student) change() {
	p.age += 1
}

// 使用指针修改结构体中的数据
func (p *Student) change_ptr() {
	p.age += 1
}


func main() {
	s := &student{"john", 20}

	fmt.Println(*s)     	//  {john 20}
	fmt.Println(s)      	// &{john 20}
	fmt.Println((*s).name)  // john
	fmt.Println(s.name) 	// john

	s.change()
	fmt.Println(s.age) // 20
	s.change_ptr()
	fmt.Println(s.age) // 21
}
```

:::
::::

## Basic Concepts

### import

```go
// 1. import single package
import "fmt"

// 2. import multiple package
import (
	"fmt"
	"time"
	"encoding/json"
	"reflect"
	"database/sql"
	_ "github.com/go-sql-driver/mysql"
	"[your-project]/config"
)
```

::: details 详情

```go
// 1. import single package
import "fmt"

// 2.1 import multiple packages
import "fmt"
import "time"

// 2.2
import (
	"fmt";
	"time"
)

// 2.3
import (
	"fmt"
	"time"
	"[your-project]/config"
)
```

:::

### Comments

```go
// a single comment

/*
This is a multi-line comment
*/

/**
 * @author
 * @version
 */
```

### Modules

[golang 模块](https://pkg.go.dev/cmd)

```bash
# 查看go版本
go version

# 环境变量
go env

# 更改为国内代理(go get失败时)
go env -w GOPROXY=https://goproxy.cn,direct

# 新项目初始化
go mod init <project name>

# 依赖包自动管理
go mod tidy

# 运行main程序
go run main.go

# 编译
go build -o hello.go

# 代码格式化(git push前)
go fmt

# 测试
go test

# 检查Go源代码并报告可疑情况
go vet
```

### Operators

```go
//Arithmetic Operators: + - * / %
//Assignment Operators: += -= *= /= %=
//Logical Operators: && || !
//Relational Operators: == != < > <= >=
//位运算: & | ^
```

```go
func isEven( num int ) bool {
	// return num % 2 == 0
    return num & 1 == 0
}
```

## Control

::: tip

1. if/switch statement: 局部变量作用域
2. switch statement: 条件判断
3. for loop: 推荐 range 写法, 可忽略
4. while loop: 使用 for 代替
   :::

### Statement

::: danger

> 注意变量作用域, 在 condition 中声明外部无法访问！

:::

:::: code-group
::: code-group-item if

```go{1,9}
if x := 42; x > 18 {
    //statement(s)
} else if x == 18 {
    //statement(s)
} else {
    //statement(s)
}

// fmt.Println(x) // error: undefined: x
```

:::
::: code-group-item switch

```go {2}
x := 8
switch y := x%2; y {
    case ...:
        //statement(s)        //不需要break
	case ...:
		//statement(s)
    default:
        //statement(s)
}
```

:::
::: code-group-item switch 条件判断

```go
/* switch版的 if statement */
x := 2
switch {
    case x>0 && x<10:
        //statement(s)
    case x>10:
        //statement(s)
}
//  fallthrough: 执行多个case；默认只会执行一个，不需要break，支持多条件匹配
```

:::
::::

### Loops

::: warning

```go
// golang 不支持该写法
for i := 0, j := len(s); i < j; i++, j-- {...}
// 支持以下写法
for i, j := 0, len(s)-1; i < j; i, j = i+1, j-1 {...}
```

:::

:::: code-group
::: code-group-item for

```go{16}
for i := 0; i < len(nums); i++ {
    fmt.Println(i, nums[i])
}

// 读取 key 和 value
for i, v := range nums {
    fmt.Println(i, v)
}

// 仅读取 key
for i := range nums {
	fmt.Println(nums[i])
}

// 仅读取 value
for _, v := range nums {
    fmt.Println(v)
}
```

:::
::: code-group-item while

```go{4}
/* for版的while */
sum := 1
res := 0
for sum <= 1000 {
    res += sum
    sum++
}
fmt.Println(res)    //500500
```

:::
::::

## 高并发

### Goroutine 协程

```go
go hello()
```

:::: code-group
::: code-group-item goroutine

```go
func hello() {
	fmt.Println("hello world")
}

func main() {
	go hello()  // 子线程
}

// No Output， 因为主线程main()退出了，而子线程未完成便随主线程销毁了
```

:::
::: code-group-item goroutine + time.Sleep

```go

func main() {
	go hello()
	time.Sleep(500 * time.Millisecond)	// 手动控制 主线程 等待时间, 但不靠谱
}
```

:::
::: code-group-item goroutine + channel

```go
func main() {
	ch := make(chan bool)	// 无缓存通道

	go func() {
		fmt.Println("Hello World!")
		// 接收通道
		<-ch
	}()
	// 发送通道
	ch<-true
}

```

:::
::: code-group-item 带缓存通道

```go
func main() {
	ch := make(chan bool, 3)	// 带缓存通道, 需要调换发送与接收方的位置

	go func() {
		fmt.Println("Hello World!")
		// 发送通道
		ch<-true
	}()

	// 等待接收通道
	<-ch
}
```

:::
::: code-group-item select
```go
package main

import (
	"fmt"
	"time"
)

func sum(start, end int, ch chan int) {
	res := 0
	for i := start; i <= end; i++ {
		// time.Sleep(50 * time.Millisecond)
		res += i
	}
	ch <- res
}

func main() {
	ch1 := make(chan int)
	ch2 := make(chan int)
	// go实现并发,

	go sum(0, 5, ch1)
	go sum(6, 10, ch2)

	select {
		case x := <-ch1:
			fmt.Println("receive ch1")
			fmt.Println(x)
			return
		case y := <-ch2:
			fmt.Println("receive ch2")
			fmt.Println(y)
			return
	}
}

```
:::
::: code-group-item for-select
```go
package main

import (
	"fmt"
	"time"
)

func sum(start, end int, ch chan int) {
	res := 0
	for i := start; i <= end; i++ {
		// time.Sleep(50 * time.Millisecond)
		res += i
	}
	ch <- res
}

func main() {
	ch1 := make(chan int)
	ch2 := make(chan int)

	go sum(0, 5, ch1)
	go sum(6, 10, ch2)

    // 循环等待
	for {
		select {
		default:
			fmt.Println("receive default")
			// 避免死锁
			time.Sleep(50 * time.Millisecond)
		case x := <-ch1:
			fmt.Println("receive ch1")
			fmt.Println(x)
			return
		case y := <-ch2:
			fmt.Println("receive ch2")
			fmt.Println(y)
			return

		}
	}
}
```
:::
::::

**示例**
:::: code-group
::: code-group-item Channel

```go
package main

import "fmt"

func count(target int, nums []int, ch chan int) {
	cnt := 0
	for _, v := range nums {
		if target == v {
			cnt++
		}
	}
	ch <- cnt
}

func main() {
	nums := []int{12, 36, 12, 2, 5, 12, 36}
	//var input int
	//fmt.Scanln(&input)
	input := 12

	ch1 := make(chan int)
	ch2 := make(chan int)

	go count(input, nums[:len(nums)/2], ch1)
	go count(input, nums[len(nums)/2:], ch2)

	fmt.Println(<-ch1 + <-ch2)
}
```

:::
::: code-group-item Channels3

```go
package main

import "fmt"

func evenSum(from, to int, ch chan int) {
	result := 0
	for i := from; i <= to; i++ {
		if i%2 == 0 {
			result += i
		}
	}
	ch <- result
}
func squareSum(from, to int, ch chan int) {
	result := 0
	for i := from; i <= to; i++ {
		if i%2 == 0 {
			result += i * i
		}
	}
	ch <- result
}

func main() {
	evenCh := make(chan int)
	sqCh := make(chan int)

	go evenSum(0, 100, evenCh)
	go squareSum(0, 100, sqCh)

	fmt.Println(<-evenCh + <-sqCh)
}

// Output: 173250
```
:::
::::

**for-select**
::::
::: code-group-item Select1

```go
package main

import (
	"fmt"
)

func evenSum(from, to int, ch chan int) {
	result := 0
	for i := from; i <= to; i++ {
		if i%2 == 0 {
			result += i
		}
	}
	ch <- result
}
func squareSum(from, to int, ch chan int) {
	result := 0
	for i := from; i <= to; i++ {
		if i%2 == 0 {
			result += i * i
		}
	}
	ch <- result
}

func main() {
	evenCh := make(chan int)
	sqCh := make(chan int)

	go evenSum(0, 100, evenCh)
	go squareSum(0, 100, sqCh)

	//fmt.Println(<-evenCh + <-sqCh)

	// 只选择执行其中一个
	select {
	case x := <-evenCh:
		fmt.Println(x)
	case y := <-sqCh:
		fmt.Println(y)
	}
}

// Output: 173250

// New Output: 171700
```

:::
::: code-group-item Select2

```go
package main

import "fmt"

func count(target int, nums []int, ch chan int) {
	cnt := 0
	for _, v := range nums {
		if target == v {
			cnt++
		}
	}
	ch <- cnt
}

func main() {
	nums := []int{12, 36, 12, 2, 5, 12, 36}
	//var input int
	//fmt.Scanln(&input)
	input := 12

	ch1 := make(chan int)
	ch2 := make(chan int)

	go count(input, nums[:len(nums)/2], ch1)
	go count(input, nums[len(nums)/2:], ch2)

	//fmt.Println(<-ch1 + <-ch2)
	select {
	case x := <-ch1:
		fmt.Println(x)
	case y := <-ch2:
		fmt.Println(y)
	}
}
```

:::
::: code-group-item For

```go
package main

import (
	"fmt"
	"time"
)

func evenSum(from, to int, ch chan int) {
	result := 0
	for i := from; i <= to; i++ {
		if i%2 == 0 {
			result += i
		}
	}
	ch <- result
}
func squareSum(from, to int, ch chan int) {
	result := 0
	for i := from; i <= to; i++ {
		if i%2 == 0 {
			result += i * i
		}
	}
	ch <- result
}

func main() {
	evenCh := make(chan int)
	sqCh := make(chan int)

	go evenSum(0, 100, evenCh)
	go squareSum(0, 100, sqCh)

	//fmt.Println(<-evenCh + <-sqCh)

	// 只选择执行其中一个
	for {
		select {
		case x := <-evenCh:
			fmt.Println(x)
			return
		case y := <-sqCh:
			fmt.Println(y)
			return
		default:
			fmt.Println("Nothing available")
			time.Sleep(50 * time.Millisecond) // 阻止死锁
		}
	}
}

/*
Nothing available
2550
*/
```

:::
::::

### Channel 管道通信

**1.创建管道**

```go
// 无缓存通道 (默认为0)
ch := make(chan int)
// 带缓存通道
ch := make(chan int, 2)
```

**2.发送数据**

```go
ch <- 8
```

**3.接收数据**

```go
<-ch
```

```go
msg := <-ch
```

**4.关闭通道**

```go
defer close(ch)
```

**示例**

```go
package main
import ("fmt"; "time")


func out(from, to int, ch chan bool) {
    for i:=from; i<=to; i++ {
        fmt.Println(i)
    }
    ch <- true   //return true
}


func main() {
    ch := make(chan bool)
    go out(0, 5, ch)
    go out(6, 10, ch)
    <-ch
}

//并发，不连续输出
```

### Select 多管道并发等待

**select**

```go
// select: 等待多个通道, 只随机执行其中一个
select {
	case <- ch1:
		fmt.Println("received from ch1")
	case <- ch2:
		fmt.Println("received from ch2")
}
```

**for**

```go
// for: 循环等待其中一个通道接收数据, 没有通道准备时执行default, 需避免死锁
for {
	select {
		case x := <-ch1:
			fmt.Println("received from ch1")
			// 获取到数据后退出for循环
			return
		case y := <-ch2:
			fmt.Println("received from ch2")
			return
		// 没有通道准备时执行default, 避免死锁
		default:
			fmt.Println("Nothing available")
			// 避免死锁
			time.sleep(50 * time.Millisecond)
	}
}
```

::: details 点击查看代码

```go
package main
import (
    "fmt"
    "time"
)

func evenSum(from, to int, ch chan int) {
    result := 0
    for i:=from; i<=to; i++ {
        if i%2 == 0 {
            result += i
        }
    }
    ch <- result
}

func squareSum(from, to int, ch chan int) {
    result := 0
    for i:=from; i<=to; i++ {
        if i%2 == 0 {
            result += i*i
        }
    }
    ch <- result
}

func main() {
    evenCh := make(chan int)
    sqCh := make(chan int)

    go evenSum(0, 100, evenCh)
    go squareSum(0, 100, sqCh)

    //循环等待接收数据的管道传输之一
    for {
        select {
            case x := <- evenCh:
                fmt.Println(x)
                return
            case y := <- sqCh:
                fmt.Println(y)
                return
            //当管道没有准备好时，它将执行
            default:
                fmt.Println("Nothing available")
                time.Sleep(50 * time.Millisecond)	// 防止死锁
        }
    }
}

/*
Nothing available
171700
*/



/*
select {
    case x := <- evenCh:
        fmt.Println(x)
    case y := <- sqCh:
        fmt.Println(y)

171700
*/
```

:::

### Error 异常处理

**errors**
```go
// 错误被认为是一种可以预期的结果，而异常则是一种非预期的结果
// 发生异常可能表示程序中存在bug或发生了其它不可控的问题

// 错误处理：errors.New(), log.Fatal()/log.Fatalf(), panic
// 异常捕获: defer()函数中直接调用recover(), 使用panic/log将异常抛出为明确的错误信息进行处理

// errors.New(): 抛出错误
// errors.ToJson(err)：将错误编码为json字符串

// err := errors.NewWithCode(404, "not found")
// err.(errors.Error).Code(): HTTP错误状态码

return errors.New("math: square root of negative number")
```

**错误判断**
```go
// f, err := os.Open()
// if err != nil {}

// if v, ok := m["key"]; ok {}
```

**log**

```go
// log输出错误日志

// log.Fatal()
// log.Fatalf()
```

**recover & panic**
```go
// panic: 返回相应的错误信息, 终止程序运行

// recover()：捕获所有可能发生的异常，并将内部异常转换为错误处理, 必须在defer()函数中直接调用recover()
// recover()函数捕获的是父一级调用函数栈帧的异常
// panic(): 将异常抛出为相应的错误信息

defer func() {
	if r := recover(); r != nil {
		// r.(type): string, runtime.Error, error, ...
		// err = ...
		panic(r)
	}
}()
```

## FAQ

### GO 简介

```
Go 不允许导入未被使用的包，以避免将未使用的代码链接到程序里而造成的不必要的膨胀
Go 是一种用于编写系统的语言
该语言本身的主要不寻常属性——并发性——解决了 2010 年代多核 CPU 激增所出现的问题。但更重要的是为软件开发世界的打包、依赖关系、构建、测试、部署和其他日常任务建立基础的早期工作，这些方面通常在语言设计中并不重要
不是每个人都喜欢——例如，有些人反对这种语言省略了继承和泛型类型等常见的特性。但是 Go 以开发为中心的理念足够有趣和有效，以至于社区在保持最初推动 Go 存在的核心原则的同时蓬勃发展。在很大程度上要归功于该社区及其构建的技术，Go 现在已成为现代云计算环境的重要组成部分。
```

### 如何查看 Go 版本 ？

```sh
$ go version
go version go1.17.7 darwin/amd64
```

### 如何 安装不同的 Go 版本 ？

> 方式一：gvm
> 方式二: Goland 中卸载 gdk (推荐)

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

- 如何卸载 gvm 或进行重置

```sh
$ rm -rf ~/.gvm

# 然后清理 ~/.zshrc 或 ~/.bashrc 添加的内容
```

- 如何解决某个版本下载不顺利的问题

```sh
$ rm -rf ~/.gvm/archive/
```

### 开源 Golang 包给其他人使用 ?

step1. 新建 public 仓库
step2. 初始化模块

> 将以下 github 用户名和仓库名替换为自己的即可

```sh
$ git clone https://github.com/coulsonzero/gopkg.git
$ cd gopkg
# 将模块导入为github仓库地址名
$ go mod init github.com/coulsonzero/gopkg
$ go mod tidy
```

**推送仓库内容**

```sh
$ git add .
$ git commit -m "update"
```

**目录结构**

```go
➡︎  🍭  tree
.
├── config.yml
└── fileConfig
    ├── env.go
    ├── ini.go
    └── yml.go
```

step3. 使用 github 仓库包

```sh
$ go get -u "github.com/coulsonzero/gopkg"
```

**方式一. 使用仓库包需根据模块所在目录导入**

> 库文件包导出

```go
package fileconfig
```

> 使用方式

```go
import "github.com/coulsonzero/gopkg/fileconfig"

func main() {
	fileconfig.ConfigEnv()
}
```

**方式二. 使用 gopkg 统一导出**

> 库文件包导出

```go
package gopkg
```

> 使用方式

```go
import	(
	gopkg "github.com/coulsonzero/gopkg/fileconfig"
	gopkg2 "github.com/coulsonzero/gopkg/encrypt"
)

func main() {
	gopkg.ConfigEnv()
	gopkg2.HashPassword()
}
```

##### 方式三

#### What I've done ? (v0.4.0)

remove all subdirectories to update the import package

before

```sh
$ tree
.
├── encrypt
├   ├── md5.go          # package gopkg
├   └── bcrypt.go       # package gopkg
└── fileconfig
    ├── env.go          # package gopkg
    ├── ini.go          # package gopkg
    └── yml.go          # package gopkg
```

before usage (v0.2.0)

```go
import (
    gopkg1 "github.com/coulsonzero/gopkg/encrypt"
    gopkg2 "github.com/coulsonzero/gopkg/fileconfig"
)
```

```go
gopkg1.HashPassword("admin123")
gopkg2.ConfigEnv()
```

now

```sh
➡︎  🍭  tree
.
├── bcrypt.go
├── md5.go
├── env.go
├── ini.go
├── yml.go
├── go.mod
├── go.sum
├── LICENSE
└── README.md
```

### Usage (v0.4.0)

#### Install module

```go
$ go get github.com/coulsonzero/gopkg
```

#### How to import it ?

```go
import "github.com/coulsonzero/gopkg"
```

#### How to use it ?

```go
gopkg.HashPassword("admin123")
gopkg.ConfigEnv(testEnvArr)
```

**Full Changelog**: https://github.com/coulsonzero/gopkg/compare/v0.2.0...v0.4.0

如需在根目录下导入则不使用目录，但是查询和阅读比较麻烦, 看个人需求而定

### GO vscode 的 package main 红色波浪性问题

```
1.终端上执行 go mod init [项目名]/[目录名]
2.将项目文件夹移动至 GOPATH/src下 会自动配置Mod依赖
```

```sh
go env -w GO111MODULE=on
go env -w GOPROXY=https://goproxy.cn,direct
go mod init <project name>
go get -u github.com/gin-gonic/gin
```

### main redeclared in this block

```go{1}
// +build ignore

package main
```

### Redis: WRONGTYPE Operation against a key holding the wrong kind of value

> redis 中已经存在同名，但不同类型的 key 值， 删除此 key 再重新执行即可

### Golang 注解 ？

**方法弃用**

> 在函数头部添加注释: `// Deprecated` 可表示 `弃用` 该方法，使用该方法时会出现`删除线`.

```go
// Deprecated
func Title(s string) string {}
```

### uint64 与 int64 的区别 ？

> uint 为无符号整数，取值范围不同

```go
int8:   -128 ~ 127
int16:  -32768 ~ 32767
int32:  -2147483648 ~ 2147483647
int64:  -9223372036854775808 ~ 9223372036854775807

uint8:  0 ~ 255
uint16: 0 ~ 65535
uint32: 0 ~ 4294967295
uint64: 0 ~ 18446744073709551615
```

### golang 中 struct 的接收者使用指针与不使用指针的区别 ？

> 如果想要修改结构体中的数据，接收者应该为指针类型，否则，接收者类型就为非指针类型

```go
package main

import "fmt"

type Inter interface {
	Say(name string)
}

type Cat struct {
	Name string
}

func (c Cat) Say(name string) {
    // 修改结构体数据无效
	c.Name = name
	fmt.Printf("cat name is : %s\n", c.Name)
}

type Dog struct {
	Name string
}

func (d *Dog) Say(name string) {
    // 可以修改结构体数据
	d.Name = name
	fmt.Printf("dog name is : %s\n", d.Name)
}

func main() {
	c := Cat{}
	c.Name = "zhangsan"
	c.Say("lisi")
	fmt.Println("c.Name = ", c.Name)

	d := new(Dog)
	d.Name = "zhangsan"
	d.Say("lisi")
	fmt.Println("d.Name = ", d.Name)
}


// 执行结果
cat name is : lisi
c.Name =  zhangsan
dog name is : lisi
d.Name =  lisi
```



### //go:linkname

```go
//go:linkname localname linkname
// 这种方式将本地的私有函数/变量，提供给外部使用
```
### //go:nosplit

```go
//go:nosplit
// 其实就是告诉编译器，下面的函数不会产生堆栈溢出，不需要插入堆栈溢出检查。
```

## Packages

[golang 标准库](https://pkg.go.dev/std)

### sort

```go
import "sort"

sort.Ints(nums)
sort.Sort(sort.Reverse(sort.IntSlice(nums)))
sort.Strings(strs)
```

```go
import "github.com/zhangyunhao116/pdqsort"

pdqsort.Slice(nums)
pdqsort.Search(nums, ele)
pdqsort.SliceIsSorted(nums)
```

:::: code-group
::: code-group-item 数字排序

```go{16,26}
package main

import (
	"fmt"
	"sort"
)

func main() {
	nums := []int{5, 2, 6, 3, 1, 4}
	sortNums(nums)			// {1,2,3,4,5,6}
	// reverseNums(nums)	// {6,5,4,3,2,1}
	fmt.Println(nums)
}

func sortNums(nums []int) []int {
	sort.Ints(nums)
	return nums
}

func sortNums2(nums []int) []int {
	sort.Sort(sort.IntSlice(nums))
	return nums
}

func reverseNums(nums []int) []int {
	sort.Sort(sort.Reverse(sort.IntSlice(nums)))
	return nums
}
```

:::
::: code-group-item 字符串数组排序

```go{10}
package main

import (
	"fmt"
	"sort"
)

func main() {
	s := []string{"Go", "Bravo", "Gopher", "Alpha", "Grin", "Delta"}
	sort.Strings(s)		// [Alpha Bravo Delta Go Gopher Grin]
	fmt.Println(s)
}
```

:::
::: pdq 排序

```go
package main

import (
	"fmt"
	"github.com/zhangyunhao116/pdqsort"
	"runtime"
)

func main() {
	fmt.Println(runtime.Version())
	nums := []int{3, 1, 2, 4, 5, 9, 8, 7}

	pdqsort.Slice(nums)
	fmt.Printf("sort_reslut = %v\n", nums)

	searchResult := pdqsort.Search(nums, 5)
	fmt.Println(searchResult)

	isSort := pdqsort.SliceIsSorted(nums)
	fmt.Println(isSort)

}

```

:::
::: code-group-item struct 排序 1

```go{30,32}
package main

import (
	"fmt"
	"sort"
)

type Student struct {
	name string
	age  int
}

// ByAge implements sort.Interface for []Person based on
type ByAge []Student

func (a ByAge) Len() int           { return len(a) }
func (a ByAge) Swap(i, j int)      { a[i], a[j] = a[j], a[i] }
func (a ByAge) Less(i, j int) bool { return a[i].age < a[j].age }

func main() {
	student := []Student{
		{"Bob", 31},
		{"John", 42},
		{"Michael", 17},
		{"John", 22},
		{"Jenny", 26},
	}

	// 方式一
	// sort.Sort(ByAge(student))
	// 方式二
	sort.Slice(student, func(i, j int) bool { return student[i].age < student[j].age })
	// sort.Slice(student, func(i, j int) bool { return student[i].name < student[j].name })
	fmt.Println(student)
}

// Output: [{Michael 17} {John 22} {Jenny 26} {Bob 31} {John 42}]
```

:::
::: code-group-item struct 排序 2

```go
package main

import (
	"fmt"
	"sort"
)

func main() {
	people := []struct {
		Name string
		Age  int
	}{
		{"Gopher", 7},
		{"Alice", 55},
		{"Alice", 35},
		{"Vera", 24},
		{"Bob", 75},
	}
	sort.Slice(people, func(i, j int) bool { return people[i].Name < people[j].Name })
	fmt.Println("By name:", people) // By name: [{Alice 55} {Alice 35} {Bob 75} {Gopher 7} {Vera 24}]

	sort.Slice(people, func(i, j int) bool { return people[i].Age < people[j].Age })
	fmt.Println("By age:", people) // By age: [{Gopher 7} {Vera 24} {Alice 35} {Alice 55} {Bob 75}]
}
```

:::
::::

## 读取文件相关库

### os

**文件操作**

```go
import "os"

// 打开文件
os.Open()

// 创建文件
os.Create(name string)

// 删除文件
os.Remove(name string)
// 使用strings.HasSuffix(f.Name(), "txt")删除指定后缀类型文件 or 数组判断

// 重命名文件
os.Rename(oldpath, newpath string)

// 读取文件
os.ReadFile(name string)

// 重写文件
os.WriteFile(name string, data []byte, perm FileMode)	// FileMode: os.ModePerm
```

**目录操作**

```go
// 创建目录
os.Mkdir(name string, perm FileMode)
// 创建多级目录
os.MkdirAll(path string, perm FileMode)

// 删除目录
os.RemoveAll(path string)

// 获取当前工作目录
os.Getwd()

// 切换当前工作目录
os.Chdir(path string)

// 获取临时目录？
os.TempDir()

// 读取目录
os.ReadDir(name string)
```

**目录遍历**

::: details 目录及文件遍历

```go
package main

import (
	"fmt"
	"os"
	"path/filepath"
)

var cnt int
var specifiedType []string = []string{"txt", "py", "js"}
var retainType []string = []string{"go"}

func main() {
	WalkDemo()
	// WalkDir()
	// WalkFiles()
}

func WalkDemo() {
	fmt.Println("/********** Start *********/")
	cur_dir, _ := os.Getwd()
	Walk(cur_dir)
	fmt.Printf("Total count of files: %d.", cnt)
}

// 获取当前目录下的所有文件或目录信息(不包含当前工作目录)
func Walk(path string) {
	dir, _ := os.ReadDir(path)
	for _, file := range dir {
		file_path := filepath.Join(path, file.Name())
		cnt++
		fmt.Printf("%-4d: %s\n", cnt, file_path)
		if file.IsDir() {
			Walk(file_path)
		}
	}
}
```

```go
// 获取当前目录下的所有文件或目录信息（包含当前工作目录，数量较前者+1）
func WalkDir() {
	pwd, _ := os.Getwd()
	filepath.Walk(pwd, func(path string, info os.FileInfo, err error) error {
		cnt++
		fmt.Printf("%-4d: %s\n", cnt, path)
		// fmt.Println(path) // 打印path信息
		// fmt.Println(info.IsDir())
		// fmt.Println(info.Name()) // 打印文件或目录名
		return nil
	})
}

// 遍历目录下多有文件(仅文件，不包含目录)
func WalkFiles(path string) {
	dir, _ := os.ReadDir(path)
	for _, file := range dir {
		file_path := filepath.Join(path, file.Name())
		if file.IsDir() {
			Walk(file_path)
		} else {
			cnt++
			fmt.Printf("%-4d: %s\n", cnt, file_path)
		}
	}
}


func WalkRemoveFiles(path string) {
	dir, _ := os.ReadDir(path)
	for _, file := range dir {
		file_path := filepath.Join(path, file.Name())
		if file.IsDir() {
			WalkRemoveFiles(file_path)
		} else {
			if strings.HasSuffix(file_path, "txt") {
				cnt++
				fmt.Printf("%-4d: %s\n", cnt, file_path)
				// err := os.Remove(file_path)
				// if err != nil {
				// 	return
				// }
			}
		}
	}
}

func WalkRemoveFiles2(path string) {

	ContainsStr := func(arr []string, value string) bool {
		for _, v := range arr {
			if v == value {
				return true
			}
		}
		return false
	}

	print := func(file_path string) {
		cnt++
		fmt.Printf("%-4d: %s\n", cnt, file_path)
		// os.Remove(file_path)
	}
	dir, _ := os.ReadDir(path)
	for _, file := range dir {
		file_path := filepath.Join(path, file.Name())
		if file.IsDir() {
			WalkRemoveFiles2(file_path)
		} else {
			arr := strings.Split(file_path, ".")
			file_type := arr[len(arr)-1]
			switch {
			// 仅保留指定类型文件，删除类型为空
			case len(specifiedType) == 0 && len(retainType) != 0 && !ContainsStr(retainType, file_type):
				print(file_path)
			// 仅删除指定类型文件，保留类型为空
			case len(retainType) == 0 && len(specifiedType) != 0 && ContainsStr(specifiedType, file_type):
				print(file_path)
			// 保留指定类型文件的同时, 且删除指定类型文件
			case len(retainType) != 0 && len(specifiedType) != 0 && (!ContainsStr(retainType, file_type) && ContainsStr(specifiedType, file_type)):
				print(file_path)
			default:
				// print(file_path)
			}
		}
	}
}



```

:::

::: details For example

```go
package main

import (
	"fmt"
	"log"
	"os"
)

func main() {
}

// 创建文件
func CreateFile() {
	// 创建文件
	file, err := os.Create("file.txt")
	if err != nil {
		log.Fatal(err)
	} else {
		fmt.Println(file.Name())
	}
}

// 删除文件
func RemoveFile() {
	err := os.Remove("file.txt")
	if err != nil {
		fmt.Println(err)
	}
}

// 重命名文件
func RenameFile() {
	CreateFile()
	err := os.Rename("file.txt", "file.go")
	if err != nil {
		fmt.Println(err)
	}
}

// 读取文件
func ReadFile() {
	file, err := os.ReadFile("file.txt")
	if err != nil {
		log.Fatal(err)
	} else {
		fmt.Println(string(file))
	}
}

// 重写文件
func WriteFile() {
	s := `
func hello() {
	fmt.Println("hello")
}
`
	os.WriteFile("file.go", []byte(s), os.ModePerm)
}

// 读取目录
func ReadDir() {
	dir, err := os.ReadDir("./")
	if err != nil {
		fmt.Println(err)
	} else {
		for _, file := range dir {
			fmt.Println(file.Name())
		}
	}
}

// 创建目录
func CreateDir() {
	err := os.Mkdir("test", os.ModePerm)
	if err != nil {
		fmt.Println(err)
	}
}

// 创建多级目录
func CreateDirAll() {
	err := os.MkdirAll("test/demo", os.ModePerm)
	if err != nil {
		fmt.Println(err)
	}
}

// 删除目录
func RemoveDir() {
	err := os.RemoveAll("test")
	if err != nil {
		log.Fatal(err)
	}
}

// 获取当前工作目录
func Getwd() {
	dir, _ := os.Getwd()
	fmt.Println(dir)
}

// 切换当前工作目录
func Chdir(path string) {
	os.Chdir(path)
}

// 获取临时目录？
func TempDir() {
	dir := os.TempDir()
	fmt.Println("dir: ", dir)
}
```

:::

**标准输入**

```go
scanner := bufio.NewScanner(os.Stdin)
scanner.Text()
os.Exit(1)
```

For Example

```go
package main

import (
	"bufio"
	"fmt"
	"os"
	"strings"
)

func main() {

	scanner := bufio.NewScanner(os.Stdin)

	for scanner.Scan() {
		if scanner.Text() == "exit" {
			os.Exit(1)
		}
		ucl := strings.ToUpper(scanner.Text())
		fmt.Println(ucl)
	}

	if err := scanner.Err(); err != nil {
		fmt.Fprintln(os.Stderr, "error:", err)
		os.Exit(1)
	}
}

```

### env

```go
package main

import (
	"fmt"
	"github.com/joho/godotenv"
	"os"
)

func main() {
	if err := godotenv.Load(); err != nil {
		panic("Failed to load env file")
	}
	host := os.Getenv("HOST")
	port := os.Getenv("PORT")

	fmt.Printf("host: %s, post: %s \n", host, port)
}

```

```.env
HOST = 127.0.0.1
PORT = 8090
```

### ini

```go
package main

import (
	"fmt"
	"gopkg.in/ini.v1"
)

func main() {
	file, err := ini.Load("config.ini")
	if err != nil {
		panic("Failed to load ini file")
	}

	Db := file.Section("mysql").Key("Db").String()
	DbHost := file.Section("mysql").Key("DbHost").String()

	fmt.Printf("database: %s, host: %s \n", Db, DbHost)
}
```

```ini
# debug开发模式,release生产模式
[service]
AppMode = debug
HttpPort = :3000
# 运行端口号 3000端口

[redis]
RedisDb = redis
RedisAddr = 127.0.0.1:6379
# redis ip地址和端口号
RedisPw =
# redis 密码
RedisDbName = 2
# redis 名字

[mysql]
Db = mysql
DbHost = 127.0.0.1
# mysql ip地址
DbPort = 3306
# mysql 端口号
DbUser = root
# mysql 用户名
DbPassWord = root
# mysql 密码
DbName = todolist_db
# mysql 名字
```

### yml

```sh
$ go get -u "github.com/spf13/viper"
```

```go
package main

import (
	"fmt"
	"github.com/spf13/viper"
)

func main() {
	// 初始化yml配置
	InitConfigYml("config.yml")

	// 获取yml配置项
	host := viper.GetString("mysql.host")
	fmt.Println(host)
}

func InitConfigYml(fileName string) {
	viper.SetConfigType("yml")
	viper.SetConfigFile(fileName)
	if err := viper.ReadInConfig(); err != nil {
		panic(err)
	}
}
```

```yml
server:
  domain: task
  version: 1.0
  jwtSecret: 38324
  grpcAddress: "127.0.0.1:10002"

mysql:
  driverName: mysql
  host: 127.0.0.1
  port: 3306
  database: grpc_todo_list
  username: root
  password: root
  charset: utf8mb4

etcd:
  address: 127.0.0.1:2379

redis:
  address: 127.0.0.1:6379
  password:
```

### sql

```go
package main

import (
	"fmt"
	"io/ioutil"
	"path/filepath"
)

// ReadSqlFile 读取sql文件内容 -> 然后再使用gorm执行sql
func ReadSqlFile(path string) string {
	sqlFile, err := filepath.Abs(path)
	if err != nil {
		panic("Error: file path error !")
	}
	file, err := ioutil.ReadFile(sqlFile)
	if err != nil {
		panic("Error: read sql file error !")
	}
	return string(file)
}

func main() {
	fmt.Println(ReadSqlFile("./src/Libs/mysql/sqlFile/demo.sql"))
}
```

### csv

```go
// 读取csv文件
reader := csv.NewReader()
reader.ReadAll()
reader.Read()

// 写入csv文件
csv.NewWriter(file)
w.WriteAll([][]string{})
```

::: details 示例
**For Example**

```go
func ReadCsv(filename string) {
	file, _ := os.Open(filename)
	defer file.Close()

	reader := csv.NewReader(file)
	reader.Comma = ','

	// for {
	// 	record, _ := reader.Read()
	// }

	records, err := reader.ReadAll()
	if err != nil {
		log.Printf("Failed to read csv file, err: %s", err)
	}
	for _, record := range records {
		fmt.Printf("%#v\n", record)
	}
	log.Printf("Read csv file successfully, the data is updated")
}

func WriteCsv(filename string) {
	file, _ := os.Create(filename)
	defer file.Close()

	// file.WriteString("\xEF\xBB\xBF")	// 写入utf-8 BOM
	w := csv.NewWriter(file)
	_ = w.WriteAll([][]string{
		{"id", "name", "score"},
		{"1", "Barry", "97"},
		{"2", "Shirdon", "89"},
		{"3", "Jack", "92"},
		{"4", "Tom", "78"},
	})
	w.Flush()
}
```

:::

### cmd

**程序退出**

```go
// defers will not be run when using os.Exit, so this fmt.Println will never be called.
// defer fmt.Println("!")
os.Exit(1)
```

**Cmd 命令**

```go
res, _ := exec.Command("ls").Output()
res, _ := exec.Command("bash", "-c", "ls -a -l -h").Output()
// 使用string(res)输出
```

::: details cmd 示例

```go
package main

import (
	"fmt"
	"os/exec"
)

func main() {
	goCmd3()
}

/**
 * go程序执行cmd命令
 */

func goCmd() {
	cmd := exec.Command("ls")
	res, _ := cmd.Output()
	fmt.Println(string(res))
}

// 简写
func goCmd2() {
	res, _ := exec.Command("ls").Output()
	fmt.Println(string(res))
}

// 带参数
func goCmd3() {
	lsOut, _ := exec.Command("bash", "-c", "ls -a -l -h").Output()
	fmt.Printf("> ls -a -l -h: %s", string(lsOut))
}

// 与方法3相同，此方法会将目录着重显示
func goCmd4() {
	binary, lookErr := exec.LookPath("ls")
	if lookErr != nil {
		panic(lookErr)
	}

	args := []string{"ls", "-a", "-l", "-h"}

	env := os.Environ()

	execErr := syscall.Exec(binary, args, env)
	if execErr != nil {
		panic(execErr)
	}
}
```

:::

## 数据库相关库

### mysql

```bash
go get -u "github.com/go-sql-driver/mysql"
```

::: details Example

```go
package main

import (
	"database/sql"
	"fmt"
	_ "github.com/go-sql-driver/mysql"
	"log"
	"strings"
)

var DB *sql.DB

type User struct {
	id    int
	name  string
	email string
}

func main() {
	db := ConnectDB()
	defer db.Close()
	// Query(2)
	// QueryAll()

	// Insert()
	// Insert2()
	// Insert3()

	// parms := []string{"name", "email", "password"}
	// data := []map[string]string{
	// 	{"username": "test1", "email": "test1@gmail.com", "password": "123456"},
	// 	{"username": "test2", "email": "test2@gmail.com", "password": "admin123"},
	// }
	// InsertAny(parms, data)

	// Update()
	// Delete()
}

func ConnectDB() *sql.DB {
	dsn := "root:root@tcp(localhost:3306)/golang_api?charset=utf8mb4&parseTime=True"
	db, err := sql.Open("mysql", dsn)
	if err != nil {
		log.Fatal("数据库连接失败！")
	}

	DB = db
	return db
}

// id查询一条数据
func Query(id int) {
	sqlStr := "select id, name, email from users where id = ?"
	var u User
	err := DB.QueryRow(sqlStr, id).Scan(&u.id, &u.name, &u.email)
	if err != nil {
		log.Fatal(err)
	}
	fmt.Printf("id: %d, name: %s, email: %s\n", u.id, u.name, u.email)
}

// 查询全部数据
func QueryAll() {
	sqlStr := "select id, name, email from users where id > ?"
	rows, _ := DB.Query(sqlStr, 0)
	defer rows.Close()
	for rows.Next() {
		var u User
		err := rows.Scan(&u.id, &u.name, &u.email)
		if err != nil {
			log.Fatal(err)
		}
		fmt.Printf("id: %d, name: %s, email: %s\n", u.id, u.name, u.email)
	}
}

// 插入数据
func Insert() {
	sqlStr := "insert into users(name, email) values(?, ?)"
	res, _ := DB.Exec(sqlStr, "aqwq", "aqwq@gmail.com")
	id, _ := res.LastInsertId()
	fmt.Printf("id: %d insert success!", id)
}

// 插入多条数据
func Insert2() {
	sqlStr := "insert into users(name, email) values (?, ?), (?, ?)"

	res, _ := DB.Exec(sqlStr, "tom", "tom@gmail.com", "john", "john@gmail.com")
	id, _ := res.LastInsertId()
	fmt.Printf("id: %d insert success!", id)
}

// 插入多条数据
func Insert3() {
	data := []map[string]string{
		{"name": "test1", "email": "test1@gmail.com"},
		{"name": "test2", "email": "test2@gmail.com"},
		{"name": "test3", "email": "test3@gmail.com"},
	}
	sqlStr := "insert into users(name, email) values"
	vals := []interface{}{}
	for index, row := range data {
		if index == len(data)-1 {
			sqlStr += "(?, ?)"
		} else {
			sqlStr += "(?, ?), "
		}
		vals = append(vals, row["name"], row["email"])
	}

	res, _ := DB.Exec(sqlStr, vals...) // vals...: 解构
	id, _ := res.LastInsertId()
	fmt.Printf("lastId: %d insert success!", id)
}

func InsertAny(parms []string, data []map[string]string) {
	sqlStr := "insert into users("
	for i, v := range parms {
		if i == len(parms)-1 {
			sqlStr += v
		} else {
			sqlStr += v + ", "
		}
	}
	sqlStr += ") values "

	vals := []interface{}{}
	sqlQuery := fmt.Sprintf("(%s)", strings.Join(strings.Split(strings.Repeat("?", len(parms)), ""), ","))
	for index, row := range data {
		if index == len(data)-1 {
			sqlStr += sqlQuery
		} else {
			sqlStr += sqlQuery + ", "
		}

		for _, v := range parms {
			vals = append(vals, row[v])
		}
	}

	res, _ := DB.Exec(sqlStr, vals...) // vals...: 解构
	id, _ := res.LastInsertId()
	fmt.Printf("lastId: %d insert success!", id)
}

func Update() {
	sqlStr := "update users set name = ?, email = ? where id = ?"
	res, _ := DB.Exec(sqlStr, "yop", "yop@gmail.com", 10)
	affected, _ := res.RowsAffected()
	fmt.Println(affected) // return 1: success
}

func Delete() {
	sqlStr := "delete from users where id = ?"
	res, _ := DB.Exec(sqlStr, 12)
	rows, _ := res.RowsAffected()
	fmt.Println(rows) // return 1: success
}
```

:::

- 连接数据库

```go{4}
var DB *sql.DB
func ConnectDB() *sql.DB {
	dsn := "root:root@tcp(localhost:3306)/golang_api?charset=utf8mb4&parseTime=True"
	db, err := sql.Open("mysql", dsn)
	if err != nil {
		log.Fatal("数据库连接失败！")
	}

	DB = db
	return db
}
```

- 查询一条数据

```go{4}
func Query(id int) {
	sqlStr := "select id, name, email from users where id = ?"
	var u User
	err := DB.QueryRow(sqlStr, id).Scan(&u.id, &u.name, &u.email)
	if err != nil {
		log.Fatal(err)
	}
	fmt.Printf("id: %d, name: %s, email: %s\n", u.id, u.name, u.email)
}
```

- 查询全部数据

```go{3,5,7}
func QueryAll() {
	sqlStr := "select id, name, email from users where id > ?"
	rows, _ := DB.Query(sqlStr, 0)
	defer rows.Close()
	for rows.Next() {
		var u User
		err := rows.Scan(&u.id, &u.name, &u.email)
		if err != nil {
			log.Fatal(err)
		}
		fmt.Printf("id: %d, name: %s, email: %s\n", u.id, u.name, u.email)
	}
}
```

- 插入一条数据

```go{3-4}
func Insert() {
	sqlStr := "insert into users(name, email) values(?, ?)"
	res, _ := DB.Exec(sqlStr, "aqwq", "aqwq@gmail.com")
	id, _ := res.LastInsertId()
	fmt.Printf("id: %d insert success!", id)
}
```

- 插入多条数据

```go{3-4}
func Insert2() {
	sqlStr := "insert into users(name, email) values (?, ?), (?, ?)"
	res, _ := DB.Exec(sqlStr, "tom", "tom@gmail.com", "john", "john@gmail.com")
	id, _ := res.LastInsertId()
	fmt.Printf("id: %d insert success!", id)
}
```

- 插入多条数据 2

```go
func Insert3() {
	data := []map[string]string{
		{"name": "test1", "email": "test1@gmail.com"},
		{"name": "test2", "email": "test2@gmail.com"},
		{"name": "test3", "email": "test3@gmail.com"},
	}
	sqlStr := "insert into users(name, email) values"
	vals := []interface{}{}
	for index, row := range data {
		if index == len(data)-1 {
			sqlStr += "(?, ?)"
		} else {
			sqlStr += "(?, ?), "
		}
		vals = append(vals, row["name"], row["email"])
	}

	res, _ := DB.Exec(sqlStr, vals...) // vals...: 解构
	id, _ := res.LastInsertId()
	fmt.Printf("lastId: %d insert success!", id)
}
```

- 插入任意数量字段

```go
func InsertAny(parms []string, data []map[string]string) {
	sqlStr := "insert into users("
	for i, v := range parms {
		if i == len(parms)-1 {
			sqlStr += v
		} else {
			sqlStr += v + ", "
		}
	}
	sqlStr += ") values "

	vals := []interface{}{}
	sqlQuery := fmt.Sprintf("(%s)", strings.Join(strings.Split(strings.Repeat("?", len(parms)), ""), ","))
	for index, row := range data {
		if index == len(data)-1 {
			sqlStr += sqlQuery
		} else {
			sqlStr += sqlQuery + ", "
		}

		for _, v := range parms {
			vals = append(vals, row[v])
		}
	}

	res, _ := DB.Exec(sqlStr, vals...) // vals...: 解构
	id, _ := res.LastInsertId()
	fmt.Printf("lastId: %d insert success!", id)
}
```

- 更新数据

```go{3-4}
func Update() {
	sqlStr := "update users set name = ?, email = ? where id = ?"
	res, _ := DB.Exec(sqlStr, "yop", "yop@gmail.com", 10)
	affected, _ := res.RowsAffected()
	fmt.Println(affected) // return 1: success
}
```

- 删除数据

```go{3-4}
func Delete() {
	sqlStr := "delete from users where id = ?"
	res, _ := DB.Exec(sqlStr, 12)
	rows, _ := res.RowsAffected()
	fmt.Println(rows) // return 1: success
}
```

### redis

#### connect redis

**go-redis.go**

```go
package main

import (
	"fmt"
	"github.com/garyburd/redigo/redis"
)

/**
 * 使用go连接Redis
 * 需先在命令行启动redis服务
 */

func main() {
	conn, err := redis.Dial("tcp", "127.0.0.1:6379")
	if err != nil {
		fmt.Println("connect redis server:", err)
		return
	}
	fmt.Println("connect redis success!")
	defer conn.Close()
}
```

#### connect redis & operator

**go-redis-string.go**

```go
package main

import (
	"fmt"
	"github.com/garyburd/redigo/redis"
)

func main() {
	// connect redis
	conn, err := redis.Dial("tcp", "127.0.0.1:6379")
	if err != nil {
		fmt.Println("connect redis error:", err)
		return
	}
	fmt.Println("connect redis success!")
	defer conn.Close()

	// SET Age 20
	_, _ = conn.Do("SET", "name", "Coulson")

	// GET name
	name, _ := redis.String(conn.Do("GET", "name"))
	fmt.Printf("Get name: %s \n", name)
}
```

#### 使用函数封装 Redis

:::: code-group
::: code-group-item go-redis-string-encapsulate.go

```go
package main

import (
	"fmt"
	"github.com/garyburd/redigo/redis"
)

func main() {
	conn := redisConnect()
	defer conn.Close()

	setString(conn, "country", "China")
	getString(conn, "country")

}

// connect redis
func redisConnect() redis.Conn {
	conn, err := redis.Dial("tcp", "127.0.0.1:6379")
	if err != nil {
		fmt.Println("connect redis error:", err)
		return nil
	}
	fmt.Println("connect redis success!")

	return conn
}

// setString SET filed value
func setString(conn redis.Conn, field string, value interface{}) {
	_, _ = conn.Do("SET", field, value)
}

// getString GET field
func getString(conn redis.Conn, field string) {
	res, _ := redis.String(conn.Do("GET", field))
	fmt.Printf("Get %s: %s \n", field, res)
}
```

:::
::: code-group-item go-redis-struct

```go
package main

import (
	"fmt"
	"github.com/garyburd/redigo/redis"
)

func main() {
	conn := RedisConnect()
	defer conn.Close()

	db := Conn{conn}
	db.SetString("score", 97.2)
	db.GetString("score")
}

// RedisConnect connect redis
func RedisConnect() redis.Conn {
	conn, err := redis.Dial("tcp", "127.0.0.1:6379")
	if err != nil {
		fmt.Println("connect redis error:", err)
		return nil
	}
	fmt.Println("connect redis success!")

	return conn
}

type Conn struct {
	redis.Conn
}

// SetString SET filed value
func (conn *Conn) SetString(field string, value interface{}) {
	_, _ = conn.Do("SET", field, value)
}

// GetString GET field
func (conn *Conn) GetString(field string) {
	res, _ := redis.String(conn.Do("GET", field))
	fmt.Printf("Get %s: %s \n", field, res)
}
```

:::
::: code-group-item 排行榜示例

```go
package main

import (
	"fmt"
	"github.com/garyburd/redigo/redis"
)

func main() {
	conn := RedisConnect()
	defer conn.Close()

	db := Conn{conn}
	db.SetString("score", 97.2)
	db.GetString("score")
}

// RedisConnect connect redis
func RedisConnect() redis.Conn {
	conn, err := redis.Dial("tcp", "127.0.0.1:6379")
	if err != nil {
		fmt.Println("connect redis error:", err)
		return nil
	}
	fmt.Println("connect redis success!")

	return conn
}

type Conn struct {
	redis.Conn
}

// SetString SET filed value
func (conn *Conn) SetString(field string, value interface{}) {
	_, _ = conn.Do("SET", field, value)
}

// GetString GET field
func (conn *Conn) GetString(field string) {
	res, _ := redis.String(conn.Do("GET", field))
	fmt.Printf("Get %s: %s \n", field, res)
}
```

:::
::::

### strings

<div id="strings"></div>

```go
/*======== 查 =========*/

// 返回子串索引，不存在返回-1
strings.index(s string, substr string)

/*======== 判断 =========*/

// 包含
strings.Contains()
// endswith
strings.HasSuffix()
// startswith
strings.HasPrefix()

/*======== 改：转换 =========*/

// 数组 -> 字符串
strings.Join()
// 字符串 -> 数组
strings.Split()

// 替换
strings.Replace(str, old, new , -1)	// -1为全部，等价于ReplaceAll()
strings.ReplaceAll()


// 大小写转换
strings.ToLower()
strings.ToUpper()
// strings.Title()		// 此方法已弃用
cases.Title(language.Und).String("hello, world!") // Hello, World!

/*======== 删 =========*/

// 移除空格(首尾)
strings.Trim(str, " ")
// 移除\n\t等换行符
strings.TrimSpace(str)
// 移除无效字符
strings.TrimFunc("¡¡¡$6521.123Hello, Gophers!!!", func(r rune) bool {
	return !unicode.IsLetter(r) && !unicode.IsNumber(r)
}) // 6521.123Hello, Gophers
```

### unicode

```go
// 判断是否为字母(a-z|A-Z)
unicode.IsLetter(v)

// 判断是否为十进制数字(0-9)
unicode.IsDigit(v)
// 判断是否为数字(0-9)
unicode.IsNumber(v)

// 判断是否为空白符号(' ')
unicode.IsSpace(v)
// 判断是否为Unicode标点字符(';', ',', ...)
unicode.IsPunct(v)
```

### math

```go
// |x|: 绝对值
math.Abs(x float64)
```

::: details 示例

```go
x := -123
fmt.Println(math.Abs(float64(x)))	// 123
```

:::

### strconv

```go
package main

import (
	"fmt"
	"strconv"
)

func main() {
	v := "3.1415926535"
	if s, err := strconv.ParseFloat(v, 64); err == nil {
		fmt.Printf("%T, %v\n", s, s) // float64, 3.1415926535
	}

	v64 := "-3546343826"
	if s, err := strconv.ParseInt(v64, 10, 64); err == nil {
		fmt.Printf("%T, %v\n", s, s) // int64, -3546343826
	}
}
```

### time

```go
import "time"

// field
time.Millisecond	// 1ms
time.Second 		// 1s

// methods
time.sleep()
time.Tick()
t := time.now()
// 时间年月日等
t.Year()
t.Month()
t.Day()
t.Hour()
t.Minute()
t.Second()
t.Weekday() // Saturday
t.ISOWeek()	// *年第*周

// 格式化时间
t.Format()

// 时间加减:
Add()
Sub()
// 时间比较:
Equal()
Before()
After()
```

**统计运行时间**

> 自动转换`单位`: ms -> s

```go
start := time.Now()
// time.Sleep(600 * time.Millisecond)
end := time.Now()
fmt.Println(end.Sub(start))
// 606.114625ms
```

> 简写

```go
timeStart := time.Now()
//...
timeElapsed := time.Since(timeStart)
log.Printf("%v\n", timeElapsed)
```

**格式化时间**

```go
t := time.Now()
fmt.Printf("%d-%02d-%02d %02d:%02d:%02d\n",
	t.Year(), t.Month(), t.Day(),
	t.Hour(), t.Minute(), t.Second(),
)
// Output: 2022-06-11 13:02:10
```

```go
t := time.Now()
now := t.Format("2006/01/02 15:04:02 PM Mon Jan")
```

**定时器(间隔运行)**

```go
ticker := time.Tick(time.Second) // 定义一个1秒间隔的定时器
for i := range ticker {
	fmt.Println(i)
}
```

### json

**Api**

```go
import "encoding/json"

// object => json
json.Marshal()
// json => object(map、struct)
json.Unmarshal()

// read json file to struct
json.NewDecoder(file).Decode(&user)
```

:::: code-group
::: code-group-item json 与 object 转换

```go
// object -> json
func objectToJson(obj interface{}) string {
	res, _ := json.Marshal(obj)
	return string(res)
}

// json -> object(map/struct)
func jsonToObject(data string, ptr interface{}) interface{} {
	json.Unmarshal([]byte(data), &ptr)
	return ptr
}
```

:::
::: code-group-item 解析 json 文件

```go
// ReadJsonFile2 json file -> object -> json String
func ReadJsonFile(jsonfile string, obj map[string]interface{}) string {
	// 打开json文件
	f, _ := os.Open(jsonfile)
	defer f.Close()

	// json文件 -> struct
	// var bar map[string]interface{}
	json.NewDecoder(f).Decode(&obj)
	// fmt.Println(bar)

	// struct -> json
	data, _ := json.Marshal(obj)
	return string(data)
}
```

:::
::::

**Json-Object: For Example**
::: details json-map 转换

```go
package main

import (
	"encoding/json"
	"fmt"
	"log"
)

// map -> json
func mapToJson() {
	m := map[string]interface{}{
		"name":  "John",
		"email": "john@gmail.com",
		"age":   20,
	}

	jsonStr, _ := json.Marshal(&m)
	fmt.Println(string(jsonStr))
	// Output: {"age":20,"email":"john@gmail.com","name":"John"}
}

// json -> map
func jsonToMap() {
	jsonStr := `{
		"name":  "John",
		"email": "john@gmail.com",
		"age":   20,
		"data": [120, 200, 150, 80, 70, 110, 130]
	}`
	var m map[string]interface{}
	json.Unmarshal([]byte(jsonStr), &m)
	fmt.Println(m)
	// Output: map[age:20 data:[120 200 150 80 70 110 130] email:john@gmail.com name:John]
}
```

:::

::: details json-struct 转换

```go
package main

import (
	"encoding/json"
	"fmt"
)

type Student struct {
	Name  string `json:"name"`
	Email string `json:"email"`
	Age   int    `json:"age"`
}

func main() {

}

// GetJson struct -> json
func GetJson() {
	s := Student{
		Name:  "John",
		Email: "john@gmail.com",
		Age:   20,
	}

	res, _ := json.Marshal(s)
	fmt.Println(string(res))
	// Output: {"Name":"John","Email":"john@gmail.com","Age":20}
}

// SetJson json -> struct
func SetJson() {
	obj := []byte(`{"Name":"John","Email":"john@gmail.com","Age":20}`)

	s := Student{}
	json.Unmarshal(obj, &s)
	fmt.Println(s)
	// Output: {John john@gmail.com 20}
}
```

:::

**JsonFile-Object-Json**

```go
import "encoding/json"

var user map[string]interface{}
// json file -> object
json.NewDecoder(file).Decode(&user)
```

::: details json.NewDecoder(f).Decode(&obj)

```go
package main

import (
	"encoding/json"
	"fmt"
	"os"
)

type Bar struct {
	xAxis  map[string]interface{}
	yAxis  map[string]interface{}
	series map[string]interface{}
}

func main() {
	ReadJsonFile()
}

func ReadJsonFile() {
	f, _ := os.Open("bar.json")
	defer f.Close()
	var bar map[string]interface{}
	// json File -> object
	json.NewDecoder(f).Decode(&bar)
	// fmt.Println(bar)

	// object -> jsonStr
	data, _ := json.Marshal(bar)
	fmt.Println(string(data))
}
```

:::

**json-http**
::: details json-http 示例

```go
package main

import (
	"encoding/json"
	"fmt"
	"net/http"
)

type User struct {
	Firstname string `json:"firstname"`
	Lastname  string `json:"lastname"`
	Age       int    `json:"age"`
}

func main() {
	http.HandleFunc("/decode", func(w http.ResponseWriter, r *http.Request) {
		var user User
		json.NewDecoder(r.Body).Decode(&user)

		fmt.Fprintf(w, "%s %s is %d years old!\n", user.Firstname, user.Lastname, user.Age)
	})

	http.HandleFunc("/encode", func(w http.ResponseWriter, r *http.Request) {
		peter := User{
			Firstname: "John",
			Lastname:  "Doe",
			Age:       25,
		}

		json.NewEncoder(w).Encode(peter)
	})

	http.ListenAndServe(":8080", nil)
}

/*
$ curl -s -XPOST -d'{"firstname":"Elon","lastname":"Musk","age":48}' http://localhost:8080/decode
Elon Musk is 48 years old!

$ curl -s http://localhost:8080/encode
{"firstname":"John","lastname":"Doe","age":25}
*/

```

:::

### gjson & sjson

> 能够直接将 json 字符串作为 json 对象调用！

```go
import (
	"github.com/tidwall/gjson"
	"github.com/tidwall/sjson"
)

gjson.Get(obj, "axisLine.lineStyle")
sjson.Set(obj, "axisLine.lineStyle.color", "skyblue")
```

::: details gjson & sjson

```go
package main

import (
	"fmt"
	"github.com/tidwall/gjson"
	"github.com/tidwall/sjson"
)

func main() {
	setJson()
}

func getJson() {
	const obj = `{
	"type": "bar",
	"data": [120, 200, 150, 80, 70, 110, 130],
	"axisLine": {"lineStyle": {"type": "solid", "color": "blue"}}
}`
	res := gjson.Get(obj, "axisLine.lineStyle")
	fmt.Println(res)
}

func setJson() {
	const obj = `{
	"type": "bar",
	"data": [120, 200, 150, 80, 70, 110, 130],
	"axisLine": {"lineStyle": {"type": "solid", "color": "blue"}}
}`
	value, _ := sjson.Set(obj, "axisLine.lineStyle.color", "skyblue")
	fmt.Println(value)
}

```

:::

::: details gjson-readjson File

```go
package main

import (
	"fmt"
	"github.com/tidwall/gjson"
	"os"
)

type Bar struct {
	xAxis  map[string]interface{}
	yAxis  map[string]interface{}
	series map[string]interface{}
}

func main() {
	// 读取json文件
	f, _ := os.ReadFile("bar.json")
	// 获取json文件中的配置项
	res := gjson.Get(string(f), "xAxis")
	fmt.Println(res)
}

```

:::

### jwt

[jwt.io](https://jwt.io)

> JSON Web Tokens

**获取 jwt 仓库**

```sh
$ go get -u "github.com/golang-jwt/jwt"
```

**Example**

```go
package main

import (
	"fmt"
	"github.com/golang-jwt/jwt"
	"time"
)

type Claims struct {
	Id string `json:"id"`
	jwt.StandardClaims
}

func main() {
	// GenerateToken()
	fmt.Println(ParseToken())
	// GenerateToken2()
}

// GenerateToken 签发Token
func GenerateToken() {
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.MapClaims{
		"sub":  "1234567890",
		"name": "John Doe",
		"iat":  1516239022,
	})

	// Sign and get the complete encoded token as a string using the secret
	mySigningKey := "AllYourBest"

	tokenString, _ := token.SignedString([]byte(mySigningKey))

	fmt.Println(tokenString)
	// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1MTYyMzkwMjIsIm5hbWUiOiJKb2huIERvZSIsInN1YiI6IjEyMzQ1Njc4OTAifQ.Zifx_niuGRaw01fZLbvcjSfuCP48R7G19G3EJ3Rcr7g
}

func GenerateToken2() {
	claims := Claims{
		Id: "1",
		StandardClaims: jwt.StandardClaims{
			ExpiresAt: time.Now().Add(24 * time.Hour).Unix(),
			Issuer:    "jwt-demo",
		},
	}

	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
	mySigningKey := "AllYourBest"
	tokenString, _ := token.SignedString([]byte(mySigningKey))

	fmt.Println(tokenString)
	// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZXhwIjoxNjY0NjA2MTYxLCJpc3MiOiJqd3QtZGVtbyJ9.FZuv42p5b_bf6YFXjoeN-gfuhqEDOGvvfg26FgxOwzA
}

// ParseToken 验证token
func ParseToken() (*Claims, error) {
	tokenString := "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1MTYyMzkwMjIsIm5hbWUiOiJKb2huIERvZSIsInN1YiI6IjEyMzQ1Njc4OTAifQ.Zifx_niuGRaw01fZLbvcjSfuCP48R7G19G3EJ3Rcr7g"

	token, err := jwt.ParseWithClaims(tokenString, &Claims{}, func(token *jwt.Token) (interface{}, error) {
		return []byte("AllYourBast"), nil
	})

	if claims, ok := token.Claims.(*Claims); ok && token.Valid {
		return claims, nil
	}
	return nil, err
}
```

### net & net/url

```go
package main

import (
	"fmt"
	"net"
	"net/url"
)

func main() {
	s := "postgres://user:pass@host.com:5432/path?k=v#f"

	u, _ := url.Parse(s)

	fmt.Println(u.Scheme)          // postgres
	fmt.Println(u.User)            // user:pass
	fmt.Println(u.User.Username()) // user
	p, _ := u.User.Password()      // pass
	fmt.Println(p)
	host, port, _ := net.SplitHostPort(u.Host)
	fmt.Println(host, port) // host.com 5432

	fmt.Println(u.Path)     // /path
	fmt.Println(u.RawQuery) // k=v
	m, _ := url.ParseQuery(u.RawQuery)
	fmt.Println(m)          // map[k:[v]]
	fmt.Println(u.Fragment) // f

}
```

### fmt

```go
// 输出
fmp.Print()
fmt.Println()
fmt.Printf()
// 字符串格式化
fmt.Sprintf()
// http请求写入网页
fmt.Fprintf()
```

### log

```go
import "log"

log.Printf("%s", time.Now())
log.Println()
log.Fatal(err)
```

### reflect

```go
func ...(field interface{}) {switch ...}

reflect.TypeOf(field)
reflect.ValueOf(field)

// 类型比较
reflect.TypeOf(field).Name() == "int"
// 值比较
int(reflect.ValueOf(field).Int()) > 0
```

### sync

```go
import "sync"

var wg sync.WaitGroup
var mu sync.Mutex  // sync.RWMutex

// 线程等待
wg.Add(1)
wg.Done()
wg.Wait()

// 线程互斥锁(读多写少, 写锁权限高于读锁, 有写锁时优先进行写锁)
// 写锁
mu.Lock()
mu.Unlock()

// 读锁
mu.Rlock()
mu.RUnlock()
```

:::: code-group
::: code-group-item 互斥量实现并发

```go{5,17,20,22,26}
package main

import (
	"fmt"
	"sync"
)

/**
 * 互斥量实现并发
 */

func main() {
	syncWait()
}

func syncWait() {
	var wg sync.WaitGroup

	for i := 0; i < 10; i++ {
		wg.Add(1)
		go func(i int) {
			defer wg.Done()
			fmt.Println(i)
		}(i)
	}
	wg.Wait()
}
/*
1
8
3
4
6
5
2
7
9
10
*
```

:::
::: code-group-item 线程同步锁

```go{3,10,13}
func syncWaitLock() {
	var wg sync.WaitGroup
	var mu sync.Mutex
	var count int

	for i := 0; i < 10; i++ {
		wg.Add(1)
		go func() {
			defer wg.Done()
			mu.Lock()
			count++
			fmt.Println(count)
			mu.Unlock()
		}()
	}
	wg.Wait()

	// fmt.Println(count)
}

/*
1
2
3
4
5
6
7
8
9
10
*/
```

:::
::::

### md5

```go
package main

import (
	"crypto/md5"
	"encoding/hex"
	"fmt"
)

// MD5 加密方法
func MD5(str string) string {
	s := md5.New()
	s.Write([]byte(str))
	return hex.EncodeToString(s.Sum(nil))
}

func main() {
	str := "123456"
	fmt.Printf("MD5(%s): %s\n", str, MD5(str))
}

/*
MD5(123456): e10adc3949ba59abbe56e057f20f883e
*/
```

### bcrypt

```go
// passwords.go
package main

import (
	"fmt"
	"golang.org/x/crypto/bcrypt"
)

func HashPassword(password string) (string, error) {
	bytes, err := bcrypt.GenerateFromPassword([]byte(password), 14)
	return string(bytes), err
}

func CheckPasswordHash(password, hash string) bool {
	err := bcrypt.CompareHashAndPassword([]byte(hash), []byte(password))
	return err == nil
}

func main() {
	password := "secret"
	hash, _ := HashPassword(password) // ignore error for the sake of simplicity

	fmt.Println("Password:", password)
	fmt.Println("Hash:    ", hash)

	match := CheckPasswordHash(password, hash)
	fmt.Println("Match:   ", match)
}

/*
Password: secret
Hash:     $2a$14$Om4.1ottCO9NjNp6T3BaJ.FF7WgPYa6Pp/XPjHefXUnE6ZInI3VhS
Match:    true
*/
```

### runtime

```go
runtime.Version()
```

### regexp

> 正则表达式

| 符号   | 含义            |
| ------ | --------------- |
| \w     | [a-zA-Z0-9_]    |
| \d     | [0-9]           |
| \s     | 空白字符        |
| .      | 单个字符        |
| ^...   | 以...开头       |
| ...$   | 以...结尾       |
| +      | [1, +∞)         |
| \*     | [0, +∞)         |
| ?      | [0， 1]         |
| {m}    | n 次            |
| {m,n}  | [m, n]次        |
| a \| b | a 或 b 任意一个 |
| a(bc)d | 分组匹配        |
| .\*?   | 贪婪匹配        |

**Example**

```go
package main

import (
	"fmt"
	"regexp"
)

const str string = `{"confirmed":"4234","died":"9","crued":"4179"}`

func main() {
	// reg := regexp.MustCompile(`"confirmed":"(\d+)","died":"(\d+)","crued":"(\d+)"`)
	reg := regexp.MustCompile(`"[\w]+":"[\d]+"`)

	// res := reg.FindString(str)			  // "confirmed":"4234"
	// res := reg.FindStringSubmatch(str)     // ["confirmed":"4234"]
	res := reg.FindAllStringSubmatch(str, -1) // [["confirmed":"4234"] ["died":"9"] ["crued":"4179"]]

	fmt.Println(res)
}
```
