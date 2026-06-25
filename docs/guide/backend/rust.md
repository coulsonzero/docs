# Rust

## Getting Start
### install

```shell
# install rust
$ curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
$ source "$HOME/.cargo/env"

$ rustc --version   # -V
# rustc 1.96.0 (2026-05-25)

$ rustup update
```

### rustc
```shell
$ rustc hello.rs
$ ./hello
# Hello, world!
```

### cargo
`tip`: cargo是rust的包管理工具，类似于node的npm，python的pip
```shell {2,5}
$ cargo --version
$ cargo init                   # 初始化为rust项目
$ cargo new <rust-project>     # 创建新的rust项目
$ cargo new <rust-lib> --lib   # 创建一个库项目
$ cargo run                    # 编译并运行
$ cargo build                  # 编译，开发时使用
$ cargo build --release        # 编译并优化,可以让Rust代码运行的更快, 构建最终程序时使用
$ cargo check                  # 检查代码而无需生成二进制文件，确保可编译，当准备好使用可执行文件时才运行cargo build
$ cargo test                   # 运行测试代码
$ cargo doc --open             # 生成文档并打开
$ cargo login <api-key>        # 登录crates.io使用github账号
$ cargo publish                # 发布到crates.io，name不能重复，且需要在toml文件下配置package信息如description, license等
$ cargo yank --vers 1.0.1      # 撤回已发布的指定版本
$ cargo yank --vers 1.0.1 --undo # 取消撤回，撤回并没有删除任何代码！
```

**for example**
:::: code-group
::: code-group-item 当前项目
```shell
$ cargo init
$ cargo run
```
:::
::: code-group-item 新项目
```shell
$ cargo new rust-hello
$ cd rust-hello
$ cargo run
Hello, world!
```
:::
::::








### 编译器 Clion

![](@/assets/rust/plugins.png)
![](@/assets/rust/rust-project-creat.png)

## Overview

### Hello World

```rs
fn main() {
    println!("hello world!");
}
```

### Variables & Constant

- let: 声明变量；可重复申明同名变量，但类型必须一致
- mut: 声明变量可变
- const: 声明常量
- static: 声明静态变量


```rs
let x = 5;
let x: i32 = 5;         // 声明变量类型
let mut x: i32 = 5;     // 声明变量可变
```

let & mut
```rs
// let shadowing 特性(可重复申明同名变量，但类型必须一致)
let x: i32 = 12;
let x: f64 = 3.14;

// assign multiple vars
let (name, age) = ("John Smith", 21);
```
const & static
```rust
const PI: f64 = 3.14;   // const 常量
static mut z: i32 = 0;  // static 静态全局变量，操作修改需使用unsafe
unsafe {
    z += 1;
    println!("{}", z);
}
```

### Output

```rs
println!("hello, world!");
println!("hello {}", "John Smith"); // format

println!("{1} is located in {2}, and my name is {0}, ", "John Smith", "Shanghai", "China");
println!("{city} is located in {country}", city = "Shanghai", country = "China");
println!("Binary: {:b} Hex: {:x} Octal: {:o}", 10, 10, 10);
println!("{:?}", (12, true, "hello"));      // (12, true, "hello")
```

### Input

```rust
// input a line string:
let mut s = String::new();
io::stdin().read_line(&mut s).expect("error");
println!("{}", s)
```
```rust
// input a number:

// --snip--
println!("Please enter a Number: ");
let mut s = String::new();
io::stdin().read_line(&mut s).expect("error");
let num: u32 = s.trim().parse().expect("error");
println!("{}", num)
```

### Data Type
`Rust 是一种静态类型（statically typed）的语言，这意味着它必须在编译期知道所有变量的类型`

- Number:
    - Int(`默认：i32`)  :
        - `i8, i16, i32, i64, i128, isize`
        - `u8, u16, u32, u64, u128, usiz`
    - Float(`默认: f64`): `f32, f64`
- Bool: `bool`
- Char: `char`
- String: `&str`, `String`


```rust
// number
let x: i32 = 12;
let x: f64 = 10.6;
let x: bool = true;
let x: char = 'k';

// string
let x: &str = "John Smith";
let x: String = String::from("hello world");

let x: (i32, f64, u8) = (500, 6.4, 1);  // tuple
let x: [i32; 5] = [1, 2, 3, 4, 5];      // array
let x: Vec<i32> = vec![1, 2, 3, 4];     // vector
let mut map = HashMap::new();           // hashmap
```

```rust
// variable address
let x: [i32; 5] = [1, 2, 3, 4, 5];
// vector
let mut nums: Vec<i32> = vec![1, 2, 3, 4];
// hashmap
let mut map = HashMap::new();
```

```rust
// variable address
println("{:p}", &x);
```

```rust
type_of(&nums);                           // [i32; 6]
type_of(&[-5, 4, 1, 32, -3, 2]);          // [i32; 6]
type_of(&32.90);                          // prints "f64"
type_of(&vec![1, 2, 4]);                  // prints "std::vec::Vec<i32>"
type_of(&"foo");                          // prints "&str"

fn type_of<T>(_: &T) {
    println!("{}", std::any::type_name::<T>() );
}
```

### Comment

```rust
// single comment

/*
 * multi-line comment
 */
```
* 文档注释：会生成HTML文档，展示公有API文档注释的内容
* 使用///以支持 Markdown 标记来格式化文本
`cargo doc --open` 打开HTML文档
```rust
/// document comment (method header)
///
///  Use [`eprint!`] instead to print error and progress messages.
///
///  necessary to use [`io::stdout().flush()`][flush] to ensure the output is emitted
/// immediately.
///
/// using the `Debug` implementation
///
/// # Examples
///
/// ```rust
/// use std::io::{self, Write};
///
/// print!("this string has a newline, why not choose println! instead?\n");
///
/// io::stdout().flush().unwrap();
/// ```


//! document comment (file header)
//!
//! ```
//! (1) string:
//!         a) for c in s.chars() {...}
//!         b) for (_, c) in s.chars().enumerate() {...}
//! (2) array:
//!         for v in nums {...}
//! ```
```

**for example**
```rust
/* ================ main.rs ================ */
#![allow(dead_code)]            // warning: struct `Rectangle` is never constructed, warning: function `run` is never used
#![allow(unused_imports)]       // unused import: `crate::template::template_impl as ti`
#![allow(unused_variables)]     // unused variable: `integer`

//! simplify the usage of module
// use add::add_one::plus;
// use crate::basic::output;
// use crate::basic::datatype;
// use crate::basic::vars;
// use crate::control::while_loop;
// use crate::core::string;
// use crate::core::tuple;
// use crate::core::vector;
// use crate::core::hashmap;
// use crate::template::template_func as tf;
// use crate::template::template_struct as ts;
use crate::template::template_impl as ti;
use crate::template::template_impl_2 as ti2;
// use crate::structs::struct_impl_for as sif;



/// manage modules
// mod add;
// mod basic;
// pub mod control;
// mod core;
mod template;
// mod functions;
mod structs;
mod macros;
// mod depends;





/// note: `#[warn(dead_code)]` on by default
fn main() {

    /* module usage example */
    // println!("{}", plus(1));

    /* basic */
    // output::run();
    // datatype::run();
    // vars::run();
    // basic::vars_more::run();
    // basic::vars_more::let_example();

    /* control */
    // control::for_loop::run();
    // while_loop::run();


    /* core */
    // string::hi("John Smith".to_string());
    // string::run();
    // tuple::run();
    // vector::run();
    // hashmap::run();
    // core::str::run();


    /* functions */
    // functions::fun::run();
    // functions::rand::run();

    // structs
    // structs::struct_func::run();
    // structs::struct_impl::run();
    // sif::run();

    /* template */
    // tf::run();
    // ts::run();
    // ti::run();
    // ti2::run();


    /* macros */
    // macros::macro_r::run();
    // macros::type_of::example();
    // macros::color::example();
    macros::color::example();


    /* depends */
    // depends::depend::run();

}

// output:

```

### package 使用外部包

1. std标准库
```rust
use std::collections::HashMap;
```
2. 第三方库
Cargo.toml
```
[dependencies]
rand = "0.8.3"
```

```rust
use rand::Rng;

fn main() {
    let secret_number = rand::thread_rng().gen_range(1..101);
}
```

* 同名包
```rust
// old
use std::cmp::Ordering;
use std::io;

// new
use std::{cmp::Ordering, io};
```

* 包别名
```rust
// old
use std::io;
use std::io::Write;

// new
use std::io::{self, Write};
```
* 所有包glob
```rust
use std::collections::*; // HashMap, HashSet, BTreeMap, BTreeSet, LinkedList, VecDeque
```

### 错误处理
失败时 panic 的简写：unwrap 和 expect
:::: code-group
::: code-group-item unwrap()
```rust
// unwrap(): 自动处理错误
use std::fs::File;

fn main() {
    let f = File::open("hello.txt").unwrap();
}
```
:::
::: code-group-item expect()
```rust
// expect(): 自定义错误信息
use std::fs::File;

fn main() {
    let f = File::open("hello.txt").expect("Failed to open hello.txt");
}
```
:::
::: code-group-item match
```rust
// match: 手动处理错误(old method)
use std::fs::File;

fn main() {
    let f = File::open("hello.txt");

    let f = match f {
        Ok(file) => file,
        Err(error) => {
            panic!("Problem opening the file: {:?}", error)
        },
    };
}
```
:::
::::

**？**：错误传递
```rust
use std::io;
use std::io::Read;
use std::fs::File;

fn read_username_from_file() -> Result<String, io::Error> {
    let mut s = String::new();
    File::open("hello.txt")?.read_to_string(&mut s)?;
    // 都成功没有失败时返回包含用户名s的Ok值
    Ok(s)
}
```


更简短的写法：函数包装
```rust
use std::io;
use std::fs;

fn read_username_from_file() -> Result<String, io::Error> {
    fs::read_to_string("hello.txt")
}
```
main函数调用？
```rust
use std::error::Error;
use std::fs::File;

fn main() -> Result<(), Box<dyn Error>> {
    let f = File::open("hello.txt")?;

    Ok(())
}
```

### IO
* 读取命令行参数
```rust
use std::env;

fn main() {
    let args: Vec<String> = env::args().collect();

    let query = &args[1];
    let filename = &args[2];

    println!("1: {}", query);
    println!("2: {}", filename);
}
```

```shell
$ cargo run test sample.txt
```
* 读取文件
```rust
use std::env;
use std::fs;

fn main() {
    let args: Vec<String> = env::args().collect();
    let filename = &args[1];
    // --snip--
    let contents = fs::read_to_string(filename).expect("No such file or directory");
    println!("With text:\n{}", contents);
}
```

poem.txt
```txt
I'm nobody! Who are you?
Are you nobody, too?
Then there's a pair of us - don't tell!
They'd banish us, you know.

How dreary to be somebody!
How public, like a frog
To tell your name the livelong day
To an admiring bog!

```

```shell
$ cargo run the poem.txt
```


### 闭包
```rust
use std::thread;
use std::time::Duration;

fn simulated_expensive_calculation(intensity: u32) -> u32 {
    println!("calculating slowly...");
    thread::sleep(Duration::from_secs(2));
    intensity
}


fn generate_workout(intensity: u32, random_number: u32) {
    let expensive_result = simulated_expensive_calculation(intensity);

    if intensity < 25 {
        println!(
            "Today, do {} pushups!",
            expensive_result
        );
        println!(
            "Next, do {} situps!",
            expensive_result
        );
    } else {
        if random_number == 3 {
            println!("Take a break today! Remember to stay hydrated!");
        } else {
            println!(
                "Today, run for {} minutes!",
                expensive_result
            );
        }
    }
}
```

```rust
use std::thread;
use std::time::Duration;

fn generate_workout(intensity: u32, random_number: u32) {
    // 匿名函数定义
    let expensive_closure = |num| {
        println!("calculating slowly...");
        thread::sleep(Duration::from_secs(2));
        num
    };

    if intensity < 25 {
        println!(
            "Today, do {} pushups!",
            expensive_closure(intensity)
        );
        println!(
            "Next, do {} situps!",
            expensive_closure(intensity)
        );
    } else {
        if random_number == 3 {
            println!("Take a break today! Remember to stay hydrated!");
        } else {
            println!(
                "Today, run for {} minutes!",
                expensive_closure(intensity)
            );
        }
    }
}
}
```

## Control & Loop

### If statement
```rust
if condition {
    // statement(s)
} else if condition {
    // statement(s)
} else if condition {
    // statement(s)
} else {
    // statement(s)
}
```

```rust
/// a > b ? a : b
let res = if a > b {a} else {b};

return if a > b {a} else {b};
```

### Match statement
* 使用`=>`返回值
* 使用`|`表示多个条件，使用`_`表示默认条件其它值
* 使用大括号{}表示代码块，代码块中的最后一个表达式会被作为返回值

:::: code-group
::: code-group-item variable
```rust
let day: i32 = 3;
let res = match day {
    1 | 2 | 3 | 4 | 5 => "Workday",
    6 => "Saturday",
    7 => "Sunday",
    _ => "default",
};
println!("{:?}", res);    // Workday
```

```rust
let day: i32 = 3;
println!("{:?}", match day {
    1..=5 => "Workday",
    6 => "Saturday",
    7 => "Sunday",
    _ => "default",
});


#[test]
fn test_char() {
    let c = '2';
    let res: &str = match c {
        '1'..='9' => "integer",
        'a'..='z' => "lower letter",
        'A'..='Z' => "upper letter",
        _ => "default",
    };
    println!("{:?}", res);
}
```
:::
::: code-group-item enum
```rust
enum Coin {
    Penny,
    Nickel,
    Dime,
    Quarter,
}

fn value_in_cents(coin: Coin) -> u8 {
    match coin {
        Coin::Penny => Coin::Penny => {
            println!("Lucky penny!");
            1
        },
        Coin::Nickel => 5,
        Coin::Dime => 10,
        Coin::Quarter => 25,
    }
}
```
:::
::: code-group-item return function
```rust
let dice_roll = 9;
match dice_roll {
    3 => add_fancy_hat(),
    7 => remove_fancy_hat(),
    _ => (),
}

fn add_fancy_hat() {}
fn remove_fancy_hat() {}
```
:::
::::

### for loop
```rust
// (1) str || string:
        a) for c in s.chars() {...}
        b) for (_, c) in s.chars().enumerate() {...}
// (2) array || vector:
        for i in 0..nums.len() {}   // set or get
        for v in nums {}            // get
        for v in nums.iter() {}     // get
        for v in &mut nums {}       // set or get
        for v in nums.iter_mut() {} // set or get
// (3) hashmap:
        for (k, v) in &map {}
```


example
```rust
// &str || String
pub fn for_str(s: &str) {
    print!("|\x1b[96m{:?}\x1b[0m| => {{ ", s);
    for (_, c) in s.chars().enumerate() {
        print!("{:?} ", c);
    }
    println!("}}");
}


// array || vector
pub fn for_array(nums: &mut [i32]) {
    print!("|\x1b[96m{:?}\x1b[0m| => ", nums);
    print!("[ ");
    for i in 0..nums.len() {
        print!("{}", nums[i]);
        if i != nums.len()-1 {
            print!(", ");
        }
    }
    println!(" ]");
}


#[test]
pub fn test_for() {
    for_str("hello world");
    for_str(&String::from("hello world"));
    // output: { 'h' 'e' 'l' 'l' 'o' ' ' 'w' 'o' 'r' 'l' 'd' }

    let mut arr: [i32; 5] = [1, 2, 3, 4, 5];
    let mut vector: Vec<i32> = vec![1, 2, 3, 4, 5];
    for_array(arr.as_mut());
    for_array(vector.as_mut_slice());
    // output: [1, 2, 3, 4, 5]
}
```

### While loop

```rust
// Infinite loop
fn loop_example() {
    let mut count: i32 = 0;
    loop {
        print!("{} ", count);
        count += 1;
        if count == 6 {break};
    }
    println!();
}
// 0 1 2 3 4 5

// While loop
fn while_loop_example() {
    let mut count: i32 = 0;
    while count < 6 {
        print!("{} ", count);
        count += 1;
    }
    println!();
}
// 0 1 2 3 4 5

fn for_range_example() {
    // For Range
    for x in 0..6 {
        print!("{} ", x);
    }
    println!();
}
// 0 1 2 3 4 5
```



## Core

### str（字符串切片）

> 字符串切片, 由长度和指针构成

```rust
// &str 是String 的切片类型。
let s = "hello";
let s: &str = "hello";

println!("{}", s.len());              // len  : 5
println!("{:?}", s.as_bytes());       // bytes: [104, 101, 108, 108, 111]
println!("{:p}", s.as_ptr());         // ptr  : 0x1026b6760
println!("{:p}", &s);                 // &s   : 0x16dce2f08
println!("{}", s.is_empty());         // false
println!("{}", s.clone());            // hello
println!("{}", s.repeat(2));          // hellohello
println!("{}", s.to_lowercase());     // hellohello
println!("{:?}", s.to_uppercase());   // "HELLO"
s.split_whitespace()                   // 将字符串切片按空格分割成单词
```

**for example**
```rust
fn main() {
    println!("{}", hi("John Smith"));
}

// &str 传值
fn hi(name: &str) -> String {
    return "hi ".to_string() + name;
}
```

**&str - String**
```rust
fn main() {
    let first_name: &str = "Pascal";
    let last_name: String = "John Smith".to_string();
    greet(first_name);
    greet(&last_name); // `last_name` is passed by reference
}

fn greet(name: &str) {
    println!("Hello, {}!", name);
}
```

### String

> 长度、容量和指针构成


```rust
// init
let s = String::from("hello");
let mut s = String::from("Hello");
let mut s = String::new();

// &str -> String
let s = "Hello, world!".to_string();
let s = "Hello, world!".into();
// String -> &str
s.as_str()

// methods
s.len() -> usize
s.capacity() -> usize

s.push(e: char)
s.push_str(ss: String)
s.insert(i: i32, e: char)

s.pop()
s.clear()

s1 + &s2
let s = s1 + "-" + &s2 + "-" + &s3;
let s = format!("{}-{}-{}", s1, s2, s3);

// iter
for c in s.chars() {
    print!("{}", c);
}
```

notic:
* Rust 的字符串不支持索引，如s[0]会报错！

### Array

```rust
/// init array
let nums = [-5, 4, 1, 32, -3, 2];
let mut nums = [-5, 4, 1, 32, -3, 2];
let mut nums: [i32; 5] = [-5, 4, 1, 32, -3, 2];

// init vector
let nums = vec![-5, 4, 1, 32, -3, 2];
let mut nums = vec![-5, 4, 1, 32, -3, 2];
let mut nums: Vec<i32> = vec![-5, 4, 1, 32, -3, 2];


println!("{:?}", nums);
println!("{:?}", nums.to_vec());        // array -> vector



// for loop
for i in 0..nums.len() {
    // get: print!("{} ", nums[i]);
    // set: nums[i] += 1;
}



/// sort
nums.sort();                           // [-5, -3, 1, 2, 4, 32]
nums.sort_by(|a, b| a.cmp(b));         // [-5, -3, 1, 2, 4, 32]
/// reverse sort
nums.sort_by(|a, b| b.cmp(a));         // [32, 4, 2, 1, -3, -5]
/// sort by string
nums.sort_by_cached_key(|k| k.to_string());     // [-3, -5, 1, 2, 32, 4]
/// shuffle
use rand::prelude::*;
nums.shuffle(&mut rand::thread_rng());          // [4, -3, 2, -5, 32, 1]
```


**array as params of funciton**
```rust
pub fn for_array(nums: &mut [i32]) {
    // --snip--
}

fn main() {
    let mut arr: [i32; 5] = [1, 2, 3, 4, 5];
    let mut vector: Vec<i32> = vec![1, 2, 3, 4, 5];
    for_array(arr.as_mut());
    for_array(vector.as_mut_slice());
}

```

### Vector
vector 只能储存`相同类型的值`

```rust{2,5}
// --init--
let mut nums: Vec<i32> = Vec::new();

let nums = vec![1, 2, 3, 4];
let mut nums = vec![1, 2, 3, 4];
let mut nums: Vec<i32> = vec![1,2,3,4];
let mut nums: Vec<i32> = (1..10).collect();

// --methods--
增：push(e)
删：pop()
查：get(i) | nums[i], &nums[i], &nums[0..2]
改：nums[i] = v
长度：len()
求和：nums.iter().sum()
打印：println!("nums: {:?}", nums)
```
`tip`:
* 使用`[]`返回一个引用, 当引用一个不存在的元素时Rust会造成panic
* 当`get`方法被传递了一个数组外的索引时，它不会 panic 而是返回 `None`
* 遍历：迭代器iter方法要比for循环更快一些
```rust
// let nums = vec![1, 2, 3, 4];
for v in nums {}
for v in &nums {}
for v in nums.iter() {}


// let mut nums = vec![1, 2, 3, 4];
for v in &mut nums {
    *v += 50;   // 引用运算符*
}
for num in nums.iter_mut() {
    *num *= 2;
}
```


### Hashmap
`哈希 map 储存键值对`
```rust
use std::collections::HashMap;
// init
let mut map = HashMap::new();
let mut map: HashMap<&str, i32> = HashMap::new();

let map = HashMap::from([("a", 1),("b", 2),("c", 3)]);

// methods
map.insert(k, v)    // 插入or更新（可覆盖）
map.get(k)
map.entry(String::from("Yellow")).or_insert(50) // 在键没有对应值时插入值
println!("{:?}", map)

// for-loop
for (k, v) in &map {
    println!("{}: {}", k, v);
}
```

for example
`统计文本中单词出现的次数`
```rust
use std::collections::HashMap;


fn main() {
    let text = "hello world wonderful world";
    let mut map = HashMap::new();
    for word in text.split_whitespace() {
        let count = map.entry(word).or_insert(0);
        *count += 1;
    }
    println!("{:?}", map);
}
// {"hello": 1, "world": 2, "wonderful": 1}
```

### Tuple

```rust
let tup = (500, 6.4, 1);
let (x, y, z) = tup;    // 解构
```

### Emum
```rust
enum IpAddr {
    V4(String),
    V6(String),
}

let home = IpAddr::V4(String::from("127.0.0.1"));
```

## OOP
### Funciton


:::: code-group
::: code-group-item default
```rust
fn hello() {
    println!("hello world!");
}
```
:::
::: code-group-item params
```rust
// hello("John Smith")

fn hello(name: &str) {
    println!("hi ".to_string() + name);
}
```
:::
::: code-group-item return

```rust
// hey("John Smith".to_string())

fn hey(name: String) -> String {
    return "hey ".to_string() + &name;
}

fn max(a: i32, b: i32) -> i32 {
    return if a > b {a} else {b};
}
```
:::
::: code-group-item multi-return-value
```rust
// let (a, b) = info("John Smith", 21)

fn info(name: &str, age: i32) -> (String, i32) {
    return ("my name is ".to_string() + name, age);
}
```
:::
::::

### Struct

:::: code-group
::: code-group-item field
```rust
// 1 struct： fields
struct Animal {
    name: String,
    age: i32
}
```
:::
::: code-group-item inherit
```rust
// 2 supper： to inherit the basic structure.
struct Animal {
    name: String,
    age: i32
}

struct Cat {
    supper: Animal,     /// inherit
    type_name: i32
}

```
:::
::: code-group-item method
```rust
// 3 impl： methods
#[derive(Debug)]
struct Rectangle {
    width: u32,
    height: u32,
}


impl Rectangle {
    fn new(w: u32, h: u32) -> Rectangle {
        return  Rectangle {  width: w,  height: h };
    }

    fn area(&self) -> u32 {
        return self.width * self.height
    }

    fn can_hold(&self, other: &Rectangle) -> bool {
        self.width > other.width && self.height > other.height
    }

    fn square(size: u32) -> Self {
        Self { width: size, height: size }
    }
}

#[test]
fn test_impl() {
    let rect1 = Rectangle {
        width: 30,
        height: 50,
    }

    /// impl methods
    println!("area: {} ", rect1.area());

    let rect2 = Rectangle::new(20, 12);
    println!("{} {}", rect.height, rect.width);

    // 增加属性来派生 Debug trait `#[derive(Debug)]`，并使用调试格式打印 Rectangle 实例
    println!("rect1 is {:?}", rect1);
}
```
:::
::: code-group-item trait
```rust
// trait: different structs use the same methods.
// a) trait_name::struct_name::impl_for_method();
// b) struct_ini.impl_for_method()

struct Tweet {
    // code
}
struct NewsArticle {
    // code
}

trait Summary {
    fn summarize(&self) -> String;
}

impl Summary for Tweet {
    fn summarize(&self) -> String {
        // code
    }
}

impl Summary for NewsArticle {
    fn summarize(&self) -> String {
        // code
    }
}


#[test]
fn test_trait_summary() {
    let tweet = Tweet {
        // code
    }
    let article = NewsArtic
        // code
    }

    println!("{}", article.summarize());
    println!("{}", tweet.summarize());

    /// use trait method;
    println!("{}", Summary::summarize(&article));
    println!("{}", Summary::summarize(&tweet));
}
```
:::
::::

for example
```rust
struct User {
    active: bool,
    username: &str,
    email: &str,
    sign_in_count: u64,
}

fn main() {
    let user1 = User {
        email: "someone@example.com",
        username: "someusername123",
        active: true,
        sign_in_count: 1,
    };
}
```
```rust
struct User {
    active: bool,
    username: String,
    email: String,
    sign_in_count: u64,
}

fn main() {
    let user1 = User {
        email: String::from("someone@example.com"),
        username: String::from("someusername123"),
        active: true,
        sign_in_count: 1,
    };
}
```

### Template(泛型)
:::: code-group
::: code-group-item fn
```rust
use std::cmp;

fn largest<T: PartialOrd>(list: &[T]) -> &T {
    let mut largest = &list[0];
    for item in list {
        if item > largest {
            largestT = item;
        }
    }
    largest
}

fn main() {
    let number_list = vec![34, 50, 25, 100, 65];
    println!("The largest number is {}", largest(&number_list));

    let char_list = vec!['y', 'm', 'a', 'q'];
    println!("The largest char is {}", largest(&char_list));
}
```
:::
::: code-group-item struct
```rust
struct Point<T, U> {
    x: T,
    y: U,
}

fn main() {
    let both_integer = Point { x: 5, y: 10 };
    let both_float = Point { x: 1.0, y: 4.0 };
    let integer_and_float = Point { x: 5, y: 4.0 };
}
```
:::
::: code-group-item impl
```rust
struct Point<X1, Y1> {
    x: X1,
    y: Y1,
}

impl<X1, Y1> Point<X1, Y1> {
    fn new(x: X1, y: Y1) -> Point<X1, Y1> {
        return Point { x,  y}
    }

    fn mix<X2, Y2>(self, other: Point<X2, Y2>) -> Point<X1, Y2> {
        return Point { x: self.x, y: other.y }
    }
}


fn main() {
    let p1 = Point { x: 5, y: 10.4 };
    let p2 = Point { x: "Hello", y: 'c'};

    let p3 = p1.mix(p2);

    println!("p3.x = {}, p3.y = {}", p3.x, p3.y);
}
```
:::
::: code-group-item emum
```rust
enum Option<T> {
    Some(T),
    None,
}
enum Result<T, E> {
    Ok(T),
    Err(E),
}
```
:::
::::

### Trait（接口）
拥有可能与其他类型共享的功能
```rust
// src/lib.rs
pub trait Summary {
    fn summarize(&self) -> String;
}

pub struct NewsArticle {
    pub headline: String,
    pub location: String,
    pub author: String,
    pub content: String,
}

impl Summary for NewsArticle {
    fn summarize(&self) -> String {
        format!("{}, by {} ({})", self.headline, self.author, self.location)
    }
}

pub struct Tweet {
    pub username: String,
    pub content: String,
    pub reply: bool,
    pub retweet: bool,
}

impl Summary for Tweet {
    fn summarize(&self) -> String {
        format!("{}: {}", self.username, self.content)
    }
}


fn main() {
    let tweet = Tweet {
        username: String::from("horse_ebooks"),
        content: String::from("of course, as you probably already know, people"),
        reply: false,
        retweet: false,
    };

    println!("1 new tweet: {}", tweet.summarize());
}
```

### Macros（宏）

```rust
#[macro_export]
macro_rules! vector {
    ( $( $x:expr ),* ) => {
        {
            let mut temp_vec = Vec::new();
            $(
                temp_vec.push($x);
            )*
            temp_vec
        }
    };
}

#[macro_export]
macro_rules! hashmap {
    ($($key: expr => $val: expr), *) => {
        {
            let mut temp_map = std::collections::HashMap::new();
            $(
                temp_map.insert($key, $val);
            )*
             temp_map
        }
    };
}

pub fn type_name<T>(_: T) -> &'static str {
    std::any::type_name::<T>()
}

#[macro_export]
macro_rules! type_of {
    () => {
        eprintln!("[{}, {}]", file!(), line!());
    };
    ($val:expr) => (
        eprintln!("[\x1b[92m{}\x1b[0m, {}], \x1b[93m${:14}\x1b[0m: {}",
            file!(), line!(), stringify!($val), type_name($val)
        );
    );
}

#[test]
fn test_vector() {
    let v = vector![1, 2, 3];
    assert_eq!(v, [1, 2, 3]);
}


#[test]
fn test_hashmap() {
    let map = hashmap!(1 => "one", 2 => "two", 3 => "three" );
    println!("map {:?} ",map);
}
// map {2: "two", 3: "three", 1: "one"}

#[test]

fn test_typeof() {
    println!("{}", type_name(32));            // i32
    println!("{}", type_name(3.14));          // f64
    println!("{}", type_name(false));         // bool
    println!("{}", type_name('k'));           // char
    println!("{}", type_name("hello"));       // &str
    println!("{}", type_name([1,3, 5]));      // [i32; 3]
    println!("{}", type_name(vec![1,3, 5]));  // alloc::vec::Vec<i32>

    type_of!();               // [src/main.rs, 27]
    type_of!(12);             // [src/main.rs, 28] $12            : i32
    type_of!(vec![1, 3, 5]);  // [src/main.rs, 29] $vec![1, 3, 5] : alloc::vec::Vec<i32>
}
```


## Cargo

```shell
$ cargo new rust-hello
$ cargo build
$ cargo run
$ cargo update
```

### cargo build
```shell
# debug(调试)模式(默认)
# 编译时间较短，因为编译器不进行优化，但代码运行速度较慢
$ cargo build

# 将结果二进制文件放入target/release，而不再是target/debug目录
# 发布(release)模式编译需要更长时间，但代码运行速度更快
$ cargo build --release
```

### cargo test

#### 使用本项目测试

:::: code-group
::: code-group-item tree

```shell
$ tree .
.
├── Cargo.lock
├── Cargo.toml
├── src
│   ├── plus.rs
│   ├── int_rle.rs
|   |── macros
|   |   └── vector.rs
│   └── lib.rs
└── tests
    └── test_plus.rs
```

:::
::: code-group-item Cargo.toml

```toml
# Cargo.toml
[package]
name = "rust_lib"
version = "0.1.0"
edition = "2021"

# See more keys and their definitions at https://doc.rust-lang.org/cargo/reference/manifest.html

[dependencies]
```

:::
::: code-group-item src/...

```rust
// src/lib.rs
pub mod plus;
pub mod int_rle;
pub mod macros;

// plus.rs
pub fn add(left: usize, right: usize) -> usize {
    left + right
}

// int_rle.rs
#[derive(Debug, PartialEq)]
pub struct IntRle {
    pub values: Vec<i32>,
}


// src/macros/vector.rs
#[macro_export]
macro_rules! vector {
    ($($x:expr), *) => {
        {
            let mut temp_vec = Vec::new();
            $(
                temp_vec.push($x);
            )*
            temp_vec
        }
    };
}
pub fn example() {
    let v = vector![1, 2, 3];
    println!("vec {:?}", v);
}
```
:::
::: code-group-item tests/...
```rust
/* tests/test_plus.rs */

extern crate rust_lib;
pub use rust_lib::*;

#[cfg(test)]
mod tests {
    #[test]
    fn it_works() {
        let res = super::plus::add(2, 2);
        assert_eq!(res, 4);
    }

    #[test]
    fn test_int_rle() {
        super::int_rle::IntRle { values: vec![1, 2, 3] };
    }

    #[test]
    fn test_macros_vector() {
        super::macros::vector::example();
    }
}
```
:::
::: code-group-item terminal
```shell
$ cargo test
# cargo test -doc

# running 3 tests
# test tests::it_works ... ok
# test tests::test_int_rle ... ok
# test tests::test_macros_vector... ok

# test result: ok. 3 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s
```
:::
::::

### cargo update

```shell
$ cargo update           # updates all dependencies
$ cargo update -p rand   # updates just “rand”
```


### Cargo.toml

1. step-1
```
[dependencies]
time = "0.1.12"
regex = "0.1.41"
```

2. step-2
```shell
$ cargo build
# cargo run
```
重新运行cargo build，Cargo 将获取新的依赖项及其所有依赖项，将它们全部编译，然后更新Cargo.lock


3. step-3: 调用第三方库
```rust
extern crate regex;
use regex::Regex;

fn example() {
    let re = Regex::new(r"^\d{4}-\d{2}-\d{2}$").unwrap();
    println!("Did our date match? {}", re.is_match("2014-01-01"));
}
```

### Cargo.lock

可删除，cargo run / cargo build会重新编译该文件

### target

可删除，编译文件存放于此, cargo run / cargo build会重新编译该文件


## FAQ

### 取消rust代码折叠

```md
step-1: clion-preference
step-2: Editor-General-Code Folding-`Rust`--`One line method`
step-3: 取消勾选-apply即可
```

![](@/assets/rust/code-fold.png)


### color

```rust
pub fn example() {
    println!("\x1b[90m{}\x1b[0m", "[Error]: not found the function.");  // 90: grey
    println!("\x1b[91m{}\x1b[0m", "[Error]: not found the function.");  // 91: red
    println!("\x1b[92m{}\x1b[0m", "[Error]: not found the function.");  // 92: green
    println!("\x1b[93m{}\x1b[0m", "[Error]: not found the function.");  // 93: yellow
    println!("\x1b[94m{}\x1b[0m", "[Error]: not found the function.");  // 94: blue
    println!("\x1b[95m{}\x1b[0m", "[Error]: not found the function.");  // 95: purple
    println!("\x1b[96m{}\x1b[0m", "[Error]: not found the function.");  // 96: cyan
    println!("\x1b[97m{}\x1b[0m", "[Error]: not found the function.");  // 97: white
    println!("\x1b[98m{}\x1b[0m", "[Error]: not found the function.");  // 98: light white (normal)
}
```

### 所有权(owership)
所有运行的程序都必须管理其使用计算机内存的方式。
* 一些语言中具有垃圾回收机制，在程序运行时不断地寻找不再使用的内存；
* 在另一些语言中，开发者必须亲自分配和释放内存。
* Rust 则选择了第三种方式：通过所有权系统管理内存，编译器在编译时会根据一系列的规则进行检查。在运行时，所有权系统的任何功能都不会减慢程序

**所有权规则**
* Rust 中的每一个值都有一个被称为其 所有者（owner）的变量。
* 值在任一时刻有且只有一个所有者。
* 当所有者（变量）离开作用域，这个值将被丢弃

### 借用（borrowing）
这些 & 符号就是 引用，它们允许你使用值但不获取其所有权
我们将创建一个引用的行为称为 借用（borrowing）

### mod & pub & use & crate & as
* use：引入模块
* pub：公开模块
* mod：模块
* as: 重命名

`cargo new --lib restaurant`，来创建一个新的名为 restaurant 的库

```rust
// src/lib.rs
mod front_of_house {
   pub mod hosting {
        pub fn add_to_waitlist() {}

        fn seat_at_table() {}
    }

    mod serving {
        fn take_order() {}

        fn serve_order() {}

        fn take_payment() {}
    }
}

pub fn eat_at_restaurant() {
    // 绝对路径
    crate::front_of_house::hosting::add_to_waitlist();

    // 相对路径
    front_of_house::hosting::add_to_waitlist();
}
```
* 如果我们想要调用一个函数，我们需要知道它的路径,路径用于引用模块树中的项
* `crate`: src/main.rs 和 src/lib.rs 被称为 crate 根
* 绝对路径（absolute path）从 crate 根部开始，以 crate 名或者字面量 crate 开头。
* 相对路径（relative path）从当前模块开始，以 `self、super` 或当前模块的标识符开头
* `::`: 绝对路径和相对路径都后跟一个或多个由双冒号（::）分割的标识符
* `pub`: eat_at_restaurant 函数是我们 crate 库的一个公共 API，所以我们使用 pub 关键字来标记它


`super`
```rust
fn serve_order() {}

mod back_of_house {
    fn fix_incorrect_order() {
        cook_order();
        super::serve_order();
    }

    fn cook_order() {}
}
```

`pub`
:::: code-group
::: code-group-item struct
```rust
mod back_of_house {
    pub struct Breakfast {
        pub toast: String,
        seasonal_fruit: String,
    }

    impl Breakfast {
        pub fn summer(toast: &str) -> Breakfast {
            Breakfast {
                toast: String::from(toast),
                seasonal_fruit: String::from("peaches"),
            }
        }
    }
}

pub fn eat_at_restaurant() {
    // 在夏天点一份黑麦面包作为早餐
    let mut meal = back_of_house::Breakfast::summer("Rye");
    // 更改我们想要的面包
    meal.toast = String::from("Wheat");
    println!("I'd like {} toast please", meal.toast);

    // 如果取消下一行的注释，将会导致编译失败；我们不被允许
    // 看到或更改随餐搭配的季节水果
    // meal.seasonal_fruit = String::from("blueberries");
}
```
:::
::: code-group-item enum
```rust
mod back_of_house {
    pub enum Appetizer {
        Soup,
        Salad,
    }
}

pub fn eat_at_restaurant() {
    let order1 = back_of_house::Appetizer::Soup;
    let order2 = back_of_house::Appetizer::Salad;
}
```
:::
::::

`use`
```rust
mod front_of_house {
    pub mod hosting {
        pub fn add_to_waitlist() {}
    }
}

use crate::front_of_house::hosting::add_to_waitlist;

pub fn eat_at_restaurant() {
    add_to_waitlist();
}
fn main() {}
```

`as`
```rust
use std::io::Result as IoResult;
```
`pub + use`重导出
```rust
mod front_of_house {
    pub mod hosting {
        pub fn add_to_waitlist() {}
    }
}

pub use crate::front_of_house::hosting;

pub fn eat_at_restaurant() {
    hosting::add_to_waitlist();
}
fn main() {}
```

### 生命周期

longest 函数定义指定了签名中所有的引用必须有相同的生命周期 'a
```rust
fn longest<'a>(x: &'a str, y: &'a str) -> &'a str {
    if x.len() > y.len() {
        x
    } else {
        y
    }
}

fn main() {
    let string1 = String::from("long string is long");

    {
        let string2 = String::from("xyz");
        let result = longest(string1.as_str(), string2.as_str());
        println!("The longest string is {}", result);
    }
}
```

```rust
impl<'a> ImportantExcerpt<'a> {
    fn level(&self) -> i32 {
        3
    }
}
```
'static，其生命周期能够存活于整个程序期间
```rust
let s: &'static str = "I have a static lifetime.";
```
### 工作空间workspace
```
├── Cargo.lock
├── Cargo.toml
├── add-lib
│   ├── Cargo.toml
│   └── src
│       └── lib.rs
├── adder
│   ├── Cargo.toml
│   └── src
│       └── main.rs
└── target
```
step1. 创建工作空间
```shell
$ mkdir work
$ cd work
```
step2. 更改Cargo.toml
```toml
[workspace]
members = [
    "adder",
]
```
step3. 创建cargo项目
```rust
$ cargo new adder
```
step4. 更新Cargo.toml
```toml
[workspace]
members = [
    "adder",
    "add-lib",
]
```
step5. 创建add-lib库
```shell
$ cargo new add-one --lib
```
```rust
// add-lib/src/lib.rs
pub fn add_one(x: i32) -> i32 {
    x + 1
}
```
step6. 更新adder/Cargo.toml
```toml
[dependencies]
add-one = { path = "../add-one" }
```
```rust
// adder/src/main.rs
use add_one;

fn main() {
    let num = 10;
    println!("Hello, world! {} plus one is {}!", num, add_one::add_one(num));
}
```
step7. 运行work工作空间
```shell
$ cargo build
$ cargo run -p adder
```

other: 使用外部依赖
add-lib/Cargo.toml
```toml
[dependencies]
rand = "0.5.5"
```