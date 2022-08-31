# Rust

### 开发环境安装

```shell
# 安装
$ curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
# 刷新开发环境 或 重启终端
$ source "$HOME/.cargo/env"
```


## Overview

### Hello World

```rs
// hello.rs
fn main() {
    println!("Hello, world!");
}
```

### Output

```rs
// 字符串格式化
println!("{num}");
println!("f: {:?}", f);
```

```rs
fn main() {
    let x = 12;
    println!("The value of x is: {x}");
}
```

### Variables & Constant

```rs
fn main() {
    // 变量
    let mut num = 3;
    // 常量
    let pi = 3.14;
    // 局部作用域
    {
        let num = x * 2;
        println!("{x}");  // 6
    }
    println!("{num}");    // 3
}
```


### String

```rs
.len()
```

```rs
fn main() {
    let s = "hello world";
    println!("{}", s.len());
}
```


