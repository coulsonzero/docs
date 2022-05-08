# [Golang](https://golang.google.cn)

Designer: `Google` in `2007`
simple, reliable and efficient software.



### Hello World

:::: code-group
::: code-group-item main/hello.go

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

### Operators

```go
//Arithmetic Operators: + - * / %
//Assignment Operators: += -= *= /= %=
//Logical Operators: && || !
//Relational Operators: == != < > <= >=
```

### Input, Output

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
	// 格式化
	fmt.Printf("name: %s, age: %d.\n", "coulson", 20)
}
```

:::
::: code-group-item input

```go
var str string

fmt.Scanln(&str)
```

:::
::::

### If statement

```go
if x := 42; x > 18 {
    //statement(s)
} else if x == 18 {
    //statement(s)
} else {
    //statement(s)
}
```

### Switch

```go {2}
x := 8
switch y:=x%2; y {
    case ...:
        //statement(s)        //不需要break
    case ...:
        //statement(s)
    default:
        //statement(s)
}
```

```go
/* switch版的 if statement */
x := 2
switch {
    case x>0 && x<10:
        //statement(s)
    case x>10:
        //statement(s)
}
```

### For Loop

```go
for i := 0; i < 5; i++ {
    //statement(s)
}

for i, v := range nums {
    // statement(s)
}
```

```go
/* for版的while */
sum := 1
res := 0
for sum <= 1000 {
    res += sum
    sum++
}
fmt.Println(res)    //500500
```

### Function

```go
func welcome(name string) {
    fmt.Println("hello, "+name)
}

func main() {
    welcome("coulson")    //"hello, coulson"
}
```

```go {4, 9}
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

### defer 析构器 (关闭文件、垃圾清理， Stack 堆结构：后进先出)

```go
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

```go
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

### Pointer 指针(浅拷贝)

```go
var p *int

x := 42
p := &x         //&内存地址
fmt.Println(p)  //0xc0000b8020  16进制内存地址
fmt.Println(x)  //0xc0000b8020
fmt.Println(p)  //42
fmt.Println(x)  //42

type T struct {
    var int
}
func (p T) a() {
    p.var += 2
}
func (p *T) b() {
    p.var += 1
}
func main() {
    x := T(5)
    x.a()
    x.b()
    fmt.Println(x.var)    //6
}
```

### Structs

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
    c := Contact("white", "Ferrari", "2"}  //创建类对象
    // c := Contact(color:"white", brand:"Ferrari", year:"2"}
    // c := &Contact("white", "Ferrari", "2"}
    fmt.Println(x.color)
    c.change("blue")
}
```

### Arrays

```go
var arr [5]int

arr := [5]int{0, 2, 4, 6, 8}
arr := make([]int, 3)    //初始默认值为0


arr = append(arr, 8)        //增

var s[] int = arr[1:3]      // 切片查询：s := arr[1:3]
fmt.Println(arr)            // 输出：[0, 0, 0, 8]
```

```go
arr := make([]int, 3)
for i, v := range arr {
    fmt.Println(i, v)     //0 0, 1 0, 2 0
}

//字符串需要指定输出的数据类型, 否则会将字符转换为ASSIC整数
s := "hello"
for _, c := range s {
    fmt.Println("%c \n",c)     //h, e, l, l, o
}
```

```go
/数组求和
pachage main
import "fmt"

func sum(nums ...int) {
    res := 0
    for _, v := range nums {
        res += v
    }
    fmt.Println(total)
}

func main() {
    //sum(42, 33, 22, 11) //108
    s:= []int{42, 33, 22, 11}
    sum(s...)         //108
}
```

```go
s := []int {1,2,3,6,8}
s[2] = s[1]                //2
s[3] = s[2]+s[0]           //3
fmt.Println(s[4] % s[3])   //8 % 3 = 2
```

### Map

```go
m ：= make(map[string] int)
m := map[string]int{
    "James": 42,    //key可以是int类型
    "Amy": 24}

m["Bob"] = 8                //增
delete(m, "James")        //删
fmt.Println(m["Amy"]) //查：24
```

### Goroutines 并发线程

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

```go
package main
import ("fmt"; "time")

func out(from, to int) {
    for i:=from; i<=to; i++ {
        fmt.Println(i)
    }
    ch <- true
}

func main() {
    go out(0, 5)
    go out(6, 10)
    time.Sleep(50 * time.Millisecond)
    //go 后面必须得有time.Sleep语句，否则不会执行go并发语句 NO output!
}
//并发，不连续
```

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

## Error

### GO vscode 的package main红色波浪性问题

```
1.终端上执行 go mod init [项目名]/[目录名]
2.将项目文件夹移动至 GOPATH/src下 会自动配置Mod依赖
```