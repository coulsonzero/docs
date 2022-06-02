# [Golang](https://golang.google.cn)

Designer: `Google` in `2007`
simple, reliable and efficient software.


### Hello World
::: tip
Go通过`main`方法启动
:::

:::: code-group
::: code-group-item hello.go

```go
//go:build ignore
// +build ignore

package main

import "fmt"    /* import ("fmt"; "math") 或不用分号而用换行*/

func main() {
    fmt.Println("hello world!")
}
```

:::
::::

### DataTypes
::: warning
> 变量声明: `var num int`
>
> 变量初始化:
>
> `var num = 12` (全局||局部)
>
> `num := 12` (局部)
>
> 常量: `const pi = 3.14`
:::

::: tip
> 数据类型:
>
> int
>
> float32、float64
>
> string
>
> bool
:::
> 变量

:::: code-group
::: code-group-item 推荐方式

```go
age := 20
price := 26.9
flag := true
name := "hello"

name, age, height, isMale := "coulson", 20, 180.3, true
```

:::
::: code-group-item 原始方式

```go
var i, j int = 0, 1     // var i, j = 0, 1
var y float32 = 3.14
var name string = "hello"
var flag bool = true
```

:::
::::

> 常量

```go
const pi = 3.14
```

### Variable

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

### Operators

```go
//Arithmetic Operators: + - * / %
//Assignment Operators: += -= *= /= %=
//Logical Operators: && || !
//Relational Operators: == != < > <= >=
```

### Input & Output


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
	fmt.Printf("name: %s, age: %d.\n", "coulson", 20)

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
### Function


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
::::

### Pointer 指针

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


### Structs 结构体

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
::::


### Interface 接口

```go
type Person interface {
	say()
}

type Student struct {

}

func (Student Person) say() {
	fmt.Println("Hello, I'm a student.")
}

func main() {
	var person Person

	person = new(Student)
	person.say()
}

```


### Array 数组

::: warning
> 一旦声明，长度固定无法修改，需要动态扩展数据参考`make([]int 5)`
>
> 查询，无法增删改
:::

:::: code-group
::: code-group-item 创建数组
```go{8}
// 声明一个数组再初始化
var arr [5]int 		// [5] or [] or [...]
arr[0] = 1
arr[1] = 3

// 声明并初始化数组
arr := [5]int{0, 2, 4, 6, 8}
arr := []int {0, 2, 4, 6, 8}
arr := []string{"water", "burger", "cake"}
```
:::
::: code-group-item Api
```go
len(arr)
arr
arr[0]
arr[1:3]
```
:::
::: code-group-item 遍历
```go{13}
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
::: code-group-item sum
```go{4,15}
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
::: code-group-item 多次输入
```go
package main
import "fmt"

func route(arr ...string) string {
    res = ""
    for _, v := range arr {
        res += v + "->"
    }
    return res
}

func main() {
    var n int
    fmt.Scanln(&n)

    var cities [string]
    // your code
    var input string
    for i := 0; i < n; i++ {
        fmt.Scanln(&input)
        cities = append(cities, input)
    }

    fmt.Println(route(cities))
}
```
:::
::::

::: details Example
```go
//go:build ignore
// +build ignore

package main

import "fmt"

/**
 * 长度固定
 * 无法增删改
 */

func main() {
	arr := []int{1, 3, 5, 4, 2}

	fmt.Println(arr)      // [1, 3, 5, 4, 2]
	fmt.Println(len(arr)) // 5
	fmt.Println(arr[0])   // 1
	fmt.Println(arr[1:3]) // [3, 5]
	for i := range arr {
		fmt.Println(arr[i])
	}

	for i, v := range arr {
		fmt.Println(i, v)
	}

	for _, v := range arr {
		fmt.Println(v)
	}

	fmt.Println(sum(arr...)) // 15

}

func sum(nums ...int) int {
	res := 0
	for _, v := range nums {
		res += v
	}
	return res
}
```
:::

### 切片

:::: code-group
::: code-group-item 创建动态数组
```go
arr := make([]type, len, cap)	// len：长度; cap: 容器大小, 可选参数
arr := make([]int, 3)    		// 初始默认值为0: [0, 0, 0]
arr := []int {2, 7, 3}			// 切片初始化

fmt.Printf("len=%d cap=%d slice=%v\n",len(x),cap(x),x)
```
:::
::: code-group-item Api
```go
// 增加(末尾)
arr = append(arr, 8)
arr = append(arr, 1, 2, 3)

// 扩容
newArr := make([]int, len(arr), (cap(arr)*2))
copy(newArr, arr)

// 截取
arr[1:3]
```
:::
::: code-group-item 遍历
```go
arr := make([]int, 3)
for _, v := range arr {
    fmt.Println(v)
}

//字符串需要指定输出的数据类型, 否则会将字符转换为ASSIC整数
s := "hello"
for _, c := range s {
    fmt.Println("%c \n",c)     //h, e, l, l, o
}
```
:::
::: code-group-item sum
```go
package main
import "fmt"

func sum(nums ...int) {
    res := 0
    for _, v := range nums {
        res += v
    }
    fmt.Println(res)
}

func main() {
    //sum(42, 33, 22, 11) //108
    s:= []int{42, 33, 22, 11}
    sum(s...)         //108
}
```
:::
::::

### Map 哈希表

:::: code-group
::: code-group-item 创建Map
```go{5,8,12}
package main
import "fmt"

func main() {
	countries := map[string] string{
		"us": "USA",
		"fr": "France",
		"cn": "China",	// 末尾加逗号，或者将大括号放在此行！
	}
	fmt.Println(countries)	// map[cn:China fr:France us:USA]

    m := make(map[string] int)
	m["Jame"] = 42
	m["Amye"] = 24
	fmt.Println(m) // map[Amye:24 Jame:42]
}
```
:::
::: code-group-item Api
```go
delete(countries, "us")
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
::: TwoSum
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

### sort

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
fmt.Print(strings.TrimFunc("¡¡¡$6521.123Hello, Gophers!!!", func(r rune) bool {
	return !unicode.IsLetter(r) && !unicode.IsNumber(r)
})) // 6521.123Hello, Gophers
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