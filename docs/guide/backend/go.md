# [Golang](https://golang.google.cn)

Designer: `Google` in `2007`
simple, reliable and efficient software.

## Getting Started

### 1. Hello World
::: tip
Go通过`main`方法启动, main()方法的`package`必须为`main`
:::

:::: code-group
::: code-group-item hello.go

```go
package main

import "fmt"

func main() {
    fmt.Println("hello world!")
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
 */

```
**Input**
```go
var name string
fmt.Print("请输入名称(name): ")
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

	// 格式化输入(赋值)
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
### 3. Variable

:::: code-group
::: code-group-item 单个变量
```go
var str string  // 有默认值: ""
var str string = "Tom"
var str = "Tom"
str := "Tom"	// 仅可作为局部变量(函数体内声明)
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

// 常量可以定义后暂不调用
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
> 2.局部变量: `x := 12`(var x = 12亦可, 推荐前者)
>
> **B.变量修改**:
>
> a.全局变量: `func change() {x += 1}` (仅无参修改, 使用参数set(x int)无法修改)
>
> b.局部变量: `func change_ptr(ptr *int) {*ptr += 1}` (仅指针修改, 使用set(x int)无法修改)
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
```go
package main
import "fmt"

var x = 3

func change() {
	x += 1
}

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
```go
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

[**类型强制转换**](./go.md/#5-string-字符串)

:::: code-group
::: code-group-item 数据类型
```go
// 基础数据类型
byte, rune<int32>  // 字符, rune是int32的别名，其他语言为char; byte是uint8
int       		   // 整数
float32, float64   // 浮点数
string             // 字符串
bool               // 布尔


// Array
[]byte
[]rune
[]int
[]string
// map
map[string] int

// 万能类型
interface{}
[]interface{}
map[string] interface{}

// go1.18泛型
type any = interface{}

func toString[T int|float64|string](s T) T {}
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





## Core

### 5. String 字符串

:::: code-group
::: code-group-item Api
```go
// 字符串格式化
s := fmt.Sprintf()

// 中文长度(1个中文占3个字节)
len([]rune(s))	// []byte：不能用于中文字符数组


// 遍历
func forEach() {
	s := "Github官网"
	for _, v := range s {
		fmt.Printf("%c ", v)
	}
	fmt.Println()
	// G i t h u b 官 网
}

func forEach2() {
	s := "Github官网"
	for _, v := range []rune(s) {
		fmt.Printf("%v ", string(v))
	}
	fmt.Println()
	// G i t h u b 官 网
}
```
:::
::: code-group-item 类型转换
```go{3,12-13}
// string -> int
str := "134"
num, _ := strconv.Atoi(str)
num, _ := strconv.ParseInt(str, 0, 0)

// string -> []byte
charArr := []byte(str)


// int -> string
num := 14141
str := fmt.Sprintf("%d", num)
str := strconv.Itoa(num)

// byte -> string
str := string(k)

// array -> string
strings.Join(s, "")
func join(s []string) string {
	res := ""
	for _, v := range s {
		res += v
	}
	return res
}
```
:::
::::
### 6. Array 数组

::: warning
> 一旦声明，长度固定无法修改，需要动态扩展数据参考切片`make([]int 5)`
>
> 只能查询，无法增删改
:::

::: tip Tip
固定数组：值拷贝, 长度固定数组，无法扩容和修改元素(append(), make(), copy(), sort.Ints()等方法)

动态数组(切片slice): 引用拷贝
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

### 7. Slice 切片
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

### 8. Map 哈希表

:::: code-group
::: code-group-item 创建Map
```go
// 方式一：初始化map
cityMap := map[string] string{
	"us": "USA",
	"fr": "France",
	"cn": "China",	// 末尾加逗号，或者将大括号放在此行！
}

// 方式二：声明map, 使用make分配空间
m := make(map[string] int)

m["Jame"] = 97
m["Amye"] = 86

// // 解构: cityMap...
```
:::
::: code-group-item Api
```go
scoreMap := make(map[string] int)
// 增 改
scoreMap["Jame"] = 97

// 删
delete(scoreMap, "Jame")

// 查
fmt.Println(scoreMap)

// 遍历

for _, v := range scoreMap {
	// statement
}

// 遍历+判断包含
for _, ok := scoreMap, ok {

}
```
:::
::: code-group-item Example
```go
package main
import "fmt"

func main() {
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
```
:::
::: code-group-item TwoSum
```go
func twoSum(nums []int, target int) []int {
    /*
    for i := range nums {
        for j := i+1; j < len(nums); j++ {
            if(nums[i] + nums[j] == target) {
                return []int {i, j}
            }
        }
    }
    return nil
    */

    dict := map[int]int {}
    for i, x := range nums {
        if j, ok := dict[target - x]; ok {
            return []int {j, i}
        }
        dict[x] = i
    }
    return nil
}
```
:::
::::


## OOP
### 9. Function


> 值传递(默认): 指在调用函数时将实际参数复制一份传递到函数中，这样在函数中如果对参数进行修改，将不会影响到实际参数
>
> 引用传递(指针): 指在调用函数时将实际参数的地址传递到函数中，那么在函数中对参数所进行的修改，将影响到实际参数


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
```go{4-5}
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
```go
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

    fmt.Println(sum(nums...)) // 15
}
```
:::
::: code-group-item 返回值
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
::: code-group-item defer 析构器
```go{10}
// 关闭文件、垃圾清理， Stack 堆结构：后进先出
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
:::
::: code-group-item 闭包
```go
package main

import "fmt"

func intSeq() func() int {
	i := 0
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
::: code-group-item 类
```go
package main

import "fmt"

type Student struct {
	name string
	age  int
}

func main() {
	s := Student{"Tom", 21}
	s.age = 8
	fmt.Println(s.name) // "Tom"
	fmt.Println(s.age)  // 8
	fmt.Println(s)      // {"Tom", 8}
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

::: code-group-item 类指针
```go{19,35,46}
package main

import "fmt"

type Student struct {
	name string
	age  int
}

func (s Student) welcome() {
	fmt.Println(s.name)
	fmt.Println(s.age)
}

func (p Student) set(val int) {
	p.age += val
}

func (ptr *Student) set_ptr(val int) {
	ptr.age += val
}

func main() {
	// 方式一
	s := Student{"Jame", 20}
	s.welcome() // "Jame", 20

	s.set(3)
	fmt.Println(s.age) // 20
	s.set_ptr(4)
	fmt.Println(s.age) // 24

	// 方式二：指针
	s2 := Student{"Tom", 16}
	ptr2 := &s2

	fmt.Println(*ptr2) // {"Tom", 16}
	ptr2.name = "Coulson"
	fmt.Println(s2) // {"Coulson", 16}
	ptr2.set(4)
	fmt.Println(s2) // {"Coulson", 16}
	ptr2.set_ptr(4)
	fmt.Println(s2) // {"Coulson", 20}

	// 方式三：内存地址
	s3 := &Student{"Yalo", 16}
	fmt.Println(*s3)
	s3.set(4)
	fmt.Println(*s3) //{Yalo 16}
	s3.set_ptr(4)
	fmt.Println(*s3) // {Yalo 20}
}
```
:::
::: code-group-item 简化版
```go
package main
import "fmt"

type Car struct {
    color string
    brand string
    year int
}

func (ptr *Car) change(c string) {
    ptr.color = c
}

func main() {
    c := Contact("white", "Ferrari", "2")  //创建类对象
    // c := Contact(color:"white", brand:"Ferrari", year:"2"}
    // c := &Contact("white", "Ferrari", "2"}
    fmt.Println(x.color)
    c.change("blue")
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
::: code-group-item pointer in Func
```go
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

### Modules

```go
go mod init [your-project-name]

go mod tidy
```

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
### Statement

::: danger
> 注意变量作用域, 在condition中声明外部无法访问！
:::

:::: code-group
::: code-group-item if

```go{1, 9}
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
::: code-group-item switch条件判断
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




### Goroutines 并发线程
:::: code-group
::: code-group-item 普通模式
```go
package main
import (
    "fmt"
    //"time"
)

func out(from, to int) {
    for i:=from; i<=to; i++ {
        fmt.Println(i)
    }
}

func main() {
    out(0, 5)
    out(6, 10)
}

//连续输出0-10
```
:::
::: code-group-item go1
```go
package main

import (
	"fmt"
)

func out(from, to int) {
	for i := from; i <= to; i++ {
		fmt.Println(i)
	}
}

func main() {
	go out(0, 5)
	go out(6, 10)
}

// No Output， 因为main()于go并发前退出了
```
:::
::: code-group-item go2
```go
package main

import (
	"fmt"
	"time"
)

func out2(start, end int) {
	for i := start; i <= end; i++ {
		time.Sleep(50 * time.Millisecond)
		fmt.Println(i)
	}
}

func main() {
	// go实现并发
	go out2(0, 5)
	go out2(6, 10)
	// 等待退出
	time.Sleep(500 * time.Millisecond)
}

/*
6
0
1
7
8
2
3
9
10
4
5
*/
```
:::
::: code-group-item Channels1
```go
package main

import (
	"fmt"
	"time"
)

func out(start, end int, ch chan bool) {
	for i := start; i <= end; i++ {
		time.Sleep(50 * time.Millisecond) // 必须, 没有停顿会导致主线程结束后子线程也全部停止
		fmt.Println(i)
	}
	ch <- true
}

func main() {
	// 使用管道便不需要sleep，无需计算等待main()何时退出
	ch := make(chan bool)
	// 多线程异步方法，同时执行多个任务
	go out(0, 5, ch)
	go out(6, 10, ch)

	<-ch
}

/*
0
6
7
1
2
8
9
3
4
10
*/
```
:::
::: code-group-item Channels2
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

### Cannels 管道传输( return )

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
                time.Sleep(50 * time.Millisecond)
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

### Error异常处理

```go
func Sqrt(f float64) (float64, error) {
    if f < 0 {
        return 0, errors.New("math: square root of negative number")
    }
    // 实现
}
```

```go
func main() {
    db, err := gorm.Open(sqlite.Open("test.db"), &gorm.Config{})
    if err != nil {
        fmt.Println(err)
    }
}
```

## FAQ
### GO简介
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
### GO vscode 的package main红色波浪性问题

```
1.终端上执行 go mod init [项目名]/[目录名]
2.将项目文件夹移动至 GOPATH/src下 会自动配置Mod依赖
```


### main redeclared in this block

```go{1}
// +build ignore

package main
```

## Libs 标准库

[golang标准库](https://pkg.go.dev/std)

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
::: pdq排序
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
::: code-group-item struct排序1
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
::: code-group-item struct排序2
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

### os


**文件操作**
```go
import "os"

// 创建文件
os.Create(name string)

// 删除文件
os.Remove(name string)

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

### strings

- strings.Join()
```go
package main

import (
	"fmt"
	"strings"
)

func main() {
	s := []string{"foo", "bar", "baz"}
	fmt.Println(strings.Join(s, ", "))
}
```

- strings.Split()
```go
fmt.Printf("%q\n", strings.Split("a,b,c", ","))
// Output: ["a" "b" "c"]
```

- strings.Replace(s, old, new, n)
- strings.ReplaceAll(s, old, new)

> n: 次数，不可省，如果小于0则表示没有替换次数限制(全部), 此时与ReplaceAll()作用相同

```go
fmt.Println(strings.Replace("oink oink oink", "k", "ky", 2))
// Output: oinky oinky oink
fmt.Println(strings.Replace("oink oink oink", "oink", "moo", -1))
// Output: moo moo moo
fmt.Println(strings.ReplaceAll("oink oink oink", "oink", "moo"))
// Output: moo moo moo
```

- strings.ToLower()
- strings.ToUpper()

```go
fmt.Println(strings.ToLower("Gopher"))
fmt.Println(strings.ToUpper("Gopher"))
```

- strings.TrimSpace()
- strings.TrimFunc()

```go
fmt.Println(strings.TrimSpace(" \t\n Hello, Gophers \n\t\r\n")) // Hello, Gophers
fmt.Println(strings.TrimFunc("¡¡¡$6521.123Hello, Gophers!!!", func(r rune) bool {
	return !unicode.IsLetter(r) && !unicode.IsNumber(r)
})) // 6521.123Hello, Gophers
```

- strings.Contains()

```go
if find := strings.Contains("test-v1", "v1"); find {
	fmt.Println("find the character.")
}
```




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

- time.Now()
- time.Sleep()

::: warning
end.`Sub(`start`)`
:::

```go
start := time.Now()
time.Sleep(600 * time.Millisecond)
end := time.Now()
fmt.Println(end.Sub(start)) // 606.114625ms
```

```go
start := time.Now()
//...
secs := time.Since(start).Seconds()
fmt.Printf("%.2fs", secs)
```

### json

```go
import "encoding/json"

// struct => json
json.Marshal()
json.Unmarshal()

// read json file to struct
decoder := json.NewDecoder(f)
decoder.Decode(&bar)
```

```go
// struct -> json
func structToJson(obj interface{}) string {
	res, _ := json.Marshal(obj)
	return string(res)
}

// json -> struct
func jsonToStruct(data string, ptr interface{}) interface{} {
	json.Unmarshal([]byte(data), &ptr)
	return ptr
}

// 读取json文件 -> json
func readJsonFileToJson() {
	f, _ := os.ReadFile("bar.json")
	res := gjson.Get(string(f), "data")
	fmt.Println(res)
}


func ReadJsonFile() {
	// 打开json文件
	f, _ := os.Open("bar.json")
	defer f.Close()

	// json文件 -> struct
	var bar map[string]interface{}
	decoder := json.NewDecoder(f)
	decoder.Decode(&bar)
	// fmt.Println(bar)

	// struct -> json
	data, _ := json.Marshal(bar)
	fmt.Println(string(data))
```

::: details Example
```go
package main

import (
	"encoding/json"
	"fmt"
)

type BarData struct {
	Type     string      `json:"type"`
	Data     []int       `json:"data"`
	AxisLine interface{} `json:"axisLine"`
}

func main() {
	obj := []byte(`{
		"type": "bar",
		"data": [120, 200, 150, 80, 70, 110, 130],
		"axisLine": {"lineStyle": {"type": "solid", "color": "blue"}}
	}`)

	res := BarData{}
	err := json.Unmarshal(obj, &res)
	if err != nil {
		return
	}

	fmt.Println("res: ", res)
	fmt.Println("type", res.Type)
	fmt.Println("data: ", res.Data)
	fmt.Println("axisLine:", res.AxisLine)
}
```
:::

::: details Example2
```go
package main

import (
	"encoding/json"
	"fmt"
)

type Student struct {
	Name  string
	Email string
	Age   int
}

func main() {
	SetJson2()
}

func GetJson() {
	s := Student{
		Name:  "John",
		Email: "john@gmail.com",
		Age:   20,
	}

	// struct => json
	res, _ := json.Marshal(s)
	fmt.Println(string(res))
	// Output: {"Name":"John","Email":"john@gmail.com","Age":20}
}

func SetJson() {
	obj := []byte(`{"Name":"John","Email":"john@gmail.com","Age":20}`)

	s := Student{}
	json.Unmarshal(obj, &s)
	fmt.Println(s)
	// Output: {John john@gmail.com 20}
}

func SetJson2() {
	obj := []byte(`{
	"type": "bar",
	"data": [120, 200, 150, 80, 70, 110, 130],
	"axisLine": {"lineStyle": {"type": "solid", "color": "blue"}}
}`)
	var s interface{}
	json.Unmarshal(obj, &s)
	fmt.Println(s)

}
```
:::

```go
import "encoding/json"

decoder := json.NewDecoder(f)
decoder.Decode(&bar)
```

::: details Example3
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
	decoder := json.NewDecoder(f)
	var bar map[string]interface{}
	decoder.Decode(&bar)
	fmt.Println(bar)
}
```
:::

**Gjson & Sjson**

```go
gjson.Get(obj, "axisLine.lineStyle")
sjson.Set(obj, "axisLine.lineStyle.color", "skyblue")
```

::: details Example
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

::: details Example2

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

* 连接数据库
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

* 查询一条数据
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

* 查询全部数据
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

* 插入一条数据
```go{3-4}
func Insert() {
	sqlStr := "insert into users(name, email) values(?, ?)"
	res, _ := DB.Exec(sqlStr, "aqwq", "aqwq@gmail.com")
	id, _ := res.LastInsertId()
	fmt.Printf("id: %d insert success!", id)
}
```

* 插入多条数据
```go{3-4}
func Insert2() {
	sqlStr := "insert into users(name, email) values (?, ?), (?, ?)"
	res, _ := DB.Exec(sqlStr, "tom", "tom@gmail.com", "john", "john@gmail.com")
	id, _ := res.LastInsertId()
	fmt.Printf("id: %d insert success!", id)
}
```

* 插入多条数据2
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

* 插入任意数量字段
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

* 更新数据
```go{3-4}
func Update() {
	sqlStr := "update users set name = ?, email = ? where id = ?"
	res, _ := DB.Exec(sqlStr, "yop", "yop@gmail.com", 10)
	affected, _ := res.RowsAffected()
	fmt.Println(affected) // return 1: success
}
```

* 删除数据
```go{3-4}
func Delete() {
	sqlStr := "delete from users where id = ?"
	res, _ := DB.Exec(sqlStr, 12)
	rows, _ := res.RowsAffected()
	fmt.Println(rows) // return 1: success
}
```