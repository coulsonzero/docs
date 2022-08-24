# C++


## Overview


### Hello World

```cpp
#include <iostream>
using namespace std;

int main ()
{
    cout << "Hello world!" << endl;
    return 0;
}
```

### Output & Input

```cpp
// cout << "Hello world!\n";
// cout << "Hello" << " World!" << endl;
```

```cpp
int num;
cin >> num;
```

### Variable & Constants

```cpp
int num = 12;

int a, b;
```


### Data Types

```cpp
int num = 12;        // signed: 正负数均可，unsigned: 负数
double pi = 3.14;
bool isEven = true;  // true(1), false(0)
char c = 'z';
// #include <string>
string s = "Hello, world!";

auto num = 12;
```

### Comments

```cpp
// this is a single comment

/*
 this is a multi-line comment
 */


/**
 * this is a multi-line comment
 */
```


### Opeartor

```cpp
// + - * / %
// && || !
```


```cpp
int x = 10 / 3;    // 3
```

## Control

### If Statement

```cpp
// 注意: 只要condition != 0 或 false 即通过

if (condition) {
    // statement(s)
} else if (condition) {
    // statement(s)
} else if (condition) {
    // statement(s)
} else {
    // statement(s)
}
```

### Switch Statement

```cpp
switch (expression) {
    case value_1:
        // statement(s)
        break;
    case value_2:
        // statement(s)
        break;
    default:
        // statement(s)
}
```

### For Loop

```cpp
for (init; condition; increment) {
    // statement(s)
}
```

### While Loop

```cpp
while (condition) {
    // statement(s)
}
```

### Do While Loop

```cpp
do {
    // statement(s)
} while (condition);
```


## Collections

### Strings

```cpp
// 1. 初始化
string s = "Hello World";
string s("Hello World");

// 2. 长度
s.size()
// 增
s.append(str)
s.insert(index, str)
s.replace(start, end, str)  // 替换

// 删
s.clear()
```

### Array
