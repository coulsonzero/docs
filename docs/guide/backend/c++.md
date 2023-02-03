# C++

## Overview

### Hello World

```cpp
#include <iostream>
using namespace std;

int main ()
{
    cout << "Hello world!";
    return 0;
}
```

### Output & Input

**output**

```cpp
// 换行: endl
// 连接符: <<
cout << "Hello world!";
cout << "Hello" << " World!" << endl;

cout << "Hello world!\n";
```

**input**

```cpp
int num;
// cout << "Please enter a number \n";
cin >> num;
```

### Variable & Constants

**变量**

```cpp
int num = 12;
num = 20;

int a, b;
a = 10;
b = 20;
```

**常量**

```cpp
const double PI = 3.14;
```

### Data Types

- 整型：`int` (short int, long int, unsigned 修饰)
- 浮点型：`float`, `double`
- 布尔型：`bool`
- 字符型：`char`
- 自动类型：`auto`

> 一些基本类型可以使用一个或多个类型修饰符进行修饰, 默认情况下，int、short、long 都是带符号的，即 signed

`short`, `long`, `unsigned`, `signed`

```cpp
int num = 12;        // signed: 正负数均可，unsigned: 负数
double pi = 3.14;
bool isEven = true;  // true(1), false(0)
char c = 'z';

auto num = 12;
```

**sizeof**

```cpp
int num = 12;
cout << sizeof(num) << endl;
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
// += - = *= /= %=
// == !=
// i++ i-- ++i --i
// && || !
```

**example**

```cpp
int x = 10 / 3;    // 3

x = 5
y = ++x
// x is 6, y is 6
x = 5
y = x++
// x is 6, y is 5
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

```cpp
int nums[5] = {1, 2, 3, 4, 5};
int nums[ ] = {1, 2, 3, 4, 5};
```

### Pointer

```cpp
int *scorePtr;
int score = 90;
scorePtr = &score;
```

**example**

```cpp
int *ptr = new int;
*ptr = 5;

cout << *ptr << endl;

delete ptr;
```

**null pointer**

```cpp
int *p = NULL;
p = new int[10];
delete [] p;    // delete array pointed
```

### Function

> 函数声明需位于 main 函数上方

```cpp
void hello(int num) {
    cout << num;
};
```

**source file**

```cpp
// define a function in one source file and call function in another file.
void hello(int num);
void hello(int num) {
    cout << num;
};
```

**多个参数**

```cpp
int sum(int x, int y) {
    // code
    return x + y
};
```

**默认参数**

```cpp
int func( int x=1, int y=2, int z=3) {
    return x*y*z;
};
```

## OOP

```cpp
class Animal {
    private:
        int age;
    public:
        void getAge() {
            cout << age << endl;
            // cout << this -> age << endl;
            // cout << (*this).age << endl;
        }
};
```

**继承**

```cpp
class Cat : public Animal {
    // code
};
```

**抽象**

```cpp
class Animal {
    public:
        virtual void show() {
            cout << "Animal " <<  endl;
        }
};


class Cat : public Animal {
    public:
        void show() {
            cout << "Cat " << endl;
        }
};
```

**多态**

```cpp
class Animal {};
class Cat : public Animal {};
class Dog : public Animal {};
```

### vector

**include vector library**

```cpp
#include <vector>
```

```cpp
// 初始化
vector<int> nums;

// 长度
.size()
// 容量
.capacity()
// 扩容
.reserve(n)

// 增
.push_back(x)

// 插入
.insert(x)

// 删
.pop_back()
.clear()


// 查询
nums[i]
nums.back()
nums.front()

// 排序
sort(nums.begin(), nums.end());
```

**遍历**

```cpp
for (int i = 0; i < nums.size(); i++)
{
    cout << nums[i] << endl;
}
```

```cpp
vector<int>::iterator it;
for (it = nums.begin(); it != nums.end(); it++)
{
    cout << *it << endl;
}
```

### map

```cpp
unordered_map<int,int> map;

map[x]

```

### set

```cpp
unordered_set<int> s;
s.find(x)
s.end()
s.insert(x)
```
