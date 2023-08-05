# C++

## Overview

### Hello World

```cpp
#include <iostream>

int main() {
    std::cout << "Hello world!" << std::endl;

    return 0;
}
```

### Variable & Constants



```cpp
// variable
int num = 12;       // also: `int num(12)`
// constant
const double PI = 3.14;
```

```cpp{2}
// multi-var
int x = 3, y = 5;
```
::: danger Notice

> 局部变量必须初始化: `int num = 0;`
>
> 较长变量命名规则：使用`_`连接, 如 `num_short`

- 全局变量：初始化为默认值
- 静态局部变量：初始化为默认值
- 自动局部变量：没有被显式初始化时，将保留以前遗留的垃圾值，可能值比较大
:::

:::: code-group
::: code-group-item all
```cpp
#include "iostream"

using namespace std;


int global;     // 全局变量：初始化为默认值

int main() {
    static int static_local;    // 静态局部变量：初始化为默认值
    auto int auto_local;        // 自动局部变量：没有被显式初始化时，将保留以前遗留的垃圾值，可能值比较大

    cout << ::global << endl;
    cout << static_local << endl;
    cout << auto_local << endl;

    return 0;
}
```
:::
::: code-group-item global
```cpp
#include <iostream>

int num = 10;

int main() {
    int num = 12;
    std::cout << ::num << std::endl;    // 全局变量：10
    std::cout << num << std::endl;      // 局部变量：12

    return 0;
}
```
:::
::: code-group-item static
```cpp
#include "iostream"

void foo();

int main() {
    foo();
    foo();
    foo();

    return 0;
}


void foo() {
    static int count = 0;   // 静态局部变量
    count++;
    std::cout << "count: " << count << std::endl;
}

/**
 * count: 1
 * count: 2
 * count: 3
 */

```
:::
::: code-group-item auto

```cpp
#include "iostream"

void foo();

int main() {
    foo();
    foo();
    foo();

    return 0;
}


void foo() {
    int num = 3;
    num++;
    auto int count = 0; // 显式自动局部变量
    count++;
    std::cout << "num: " << num << ", ";
    std::cout << "count: " << count << std::endl;
}

/**
 * num: 4, count: 1
 * num: 4, count: 1
 * num: 4, count: 1
 */
```
:::
::::




### Output & Input

**output**

```cpp
using namespace std;

// c++
cout << "Hello World!" << endl;

// c
printf("Hello World!\n");

// not to use `using namespace std` in `header file`
```



::: details 输出格式化

```cpp
/*****************************************
 * setprecision(3): 保留小数点后的位数      *
 * showpos：显示+-                        *
 * setfill('*')：填充字符                  *
 * setw(15): 设置值所占字段大小             *
 *****************************************/

#include <iostream>
#include <iomanip>
using namespace std;

int main()
{
    const double PI = 3.14159;

    cout << fixed << setprecision(3) << showpos << setfill('*');
    cout << setw(15) << left << PI << endl;     // +3.142*********
    cout << setw(15) << internal<< PI << endl;  // +*********3.142
    cout << setw(15) << right << PI << endl;    // +*********3.142

    return 0;
}
```
:::


**input**


1. cin

```cpp
using namespace std;

// single var
int x;
cin >> x;           // end: space

// multi vars
int a, b;
cin >> a >> b;      // connect: use space or line to to separate
```


2. getline
```cpp
using namespace std;

string s;
getline(cin, s);        // end: line
getline(cin, s, '$');   // end: '$'
```



### Data Types

- 整数类型：`int` (`short`, `long`, `unsigned`, `signed` 修饰)
- 浮点类型：`float`, `double`(默认), long double
- 布尔类型：`bool`
- 字符类型：`char`
- 字符串类: `string`
- 自动类型：`auto`
- void(空)类型：显示函数不返回任何值

:::: code-group
::: code-group-item type
```cpp
/* ==== basic type ==== */
int num = 12;       // long (L)
double pi = 3.14;   // float(F)
bool flag = true;   // 1 or 0, boolalpha
char c = 'z';
// string
std::string name;
std::string name = "John Smith";
std::string name("John Smith");
 // array
int nums[5] = {1, 2, 3, 4, 5};
int nums[ ] = {1, 2, 3, 4, 5};

//===== STL =====//
// vector
std::vector<int> vec;
std::vector<int> vec = {1, 2, 3};
// map
std::unordered_map<char, int> map;
std::unordered_map<char, int> map = {{'a', 3}, {'b', 2}};
// set
std::unordered_set<int> set;
std::unordered_set<int> set = { 1, 2 };

// auto
auto *ptr = new Solution();
```
:::
::: code-group-item boolalpha
```cpp
// true(任何非零值) false(0)
// ----output -------- boolalpha ----
bool x = true;      // 1 (true)
bool y = 12;        // 1 (true)
bool z = false;     // 0 (false)
bool e = 0;         // 0 (false)

// true输出未1， false输出为0
std::cout << x << std::endl;  // 1
std::cout << y << std::endl;  // 1
std::cout << z << std::endl;  // 0
std::cout << e << std::endl;  // 0

// boolalpha: 将布尔值作为字面量(true/false)输出
std::cout << boolalpha;
std::cout << x << std::endl;  // ture
std::cout << y << std::endl;  // ture
std::cout << z << std::endl;  // false
std::cout << e << std::endl;  // false
```
:::
::: code-group-item static_cast...
```cpp
/**
 * `sizeof(12)`: 字节大小
 * `typeid(12).name()`: 具体类型
 * `typeid(3.14+1.2).name()`: 隐式类型转换
 * `static_cast<int>(12)`: 显式类型转换
 */

// sizeof
int num = 4
sizeof(num) // sizeof(int): 4

// typeid(expr).name
typeid(12).name()     // i
typeid(1.6).name()    // d
typeid(3.14f).name()  // f

// 隐式类型转换
float pi = 3.14
typeid(pi + 1.2).name()  // d: double

// 显式类型转换
double x = 23.6
int y = 30
x + y                     // 43.6
static_cast<int>(x + y)   // 43
```
:::
::: code-group-item numeric_limits
```cpp
// `numeric_limits<int>::max()`: 数据类型最大值
// `numeric_limits<int>::min()`: 数据类型最小值
#include <iostream>
#include <limits>
using namespace std;

int main()
{
    cout << "max(int): " << numeric_limits<int>::max() << endl;                      // max(int): 2147483647
    cout << "max(unsigned int): " << numeric_limits<unsigned int>::max() << endl;    // max(unsigned int): 4294967295

    return 0;
}
```
:::
::::



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
/**
 * arithmetic operators : + - *  / %
 * assignment operators : += -= *= /= %=
 * increment & Decrement: i++ i-- ++i --i
 * comparison operators : == != < > <= >=
 * && || !
 * a ? b : c
 */
```

```cpp
// 判断奇偶
i % 2 == 0
i & 1 == 0

// 中间数
int mid = (l + r) / 2;
int mid = l + (r - l) / 2;      // 防溢出
```

**example**

```cpp
int x = 10 / 3;    // 3
double t = (2 + 3) / 2;                      // 2
// `/`除法不会默认保留小数点，除非使用以下两种方式之一
double t = 1.0 * (2 + 3) / 2;                // 2.5
double t = static_cast<double>(2 + 3) / 2;   // 2.5

x = 5
y = ++x
// x is 6, y is 6
x = 5
y = x++
// x is 6, y is 5

const char *sign = i == nums.size() - 1 ? "" : ", ";
auto sign = i == nums.size() - 1 ? "" : ", ";
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

### *Switch Statement

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

```cpp
int day = 6;
switch (day) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        std::cout << "work day" << std::endl;
        break;
    case 6:
        std::cout << "sta" << std::endl;
        break;
    default:
        std::cout << "sun" << std::endl;
}
```

### For Loop

```cpp
// default-for
for (init; condition; increment) {
    // statement(s)
}

// strong-for
for (auto &v : nums) {
    // statement(s)
}


// Notice: pointer loop
// vector
for (auto it = nums.begin(); it != nums.end(); ++it) {
    cout << *it << endl;
}

// map
for (auto iter = map.begin(); iter != map.end(); iter++) {
    cout << " [" << iter->first << ", " << iter->second << "]";
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

## Core

### Strings

> `"Hello" = 'H', 'e', 'l', 'l', 'o', '\0'`, C语言中最后一个字符是字符串结束符'\0'(终止符)

:::: code-group
::: code-group-item string
```cpp
#include <iostream>
#include <string>


int main() {
    std::string name = "John Smith";
    std::cout << name << std::endl;
    std::cout << name.size() << std::endl;

    return 0;
}
```
:::
::: code-group-item method
```cpp
// if you has included `<iostream>` header file
// #include <string>

// init
std::string s;
std::string s = "Hello World";      // std::string s("Hello World");

// size
.size()        // STL
.length()      // C
.empty()
// cap
.capacity()

// 增
.push_back(c)      // char
.append(s)       // substr
.insert(i, s)


// 删
.pop_back()
.clear()
.erase(i)      // 删除s[i]后面的所有字符
.erase(i, n)   // 删除s[i]后面的n个字符


/* == 查 == */
// index：
.front()
.back()
.at(i) | s[i] | .substr(i, n)

// value
.find(c, pos=0)
.rfind(c, pos=-1)

// 判断
if(s.find(c) != -1)     // contains
.ends_with(c | s)       // c++20
.starts_with(c | s)     // c++20
/* == end == */

// 改
s[i] = c
.replace(start, end, str)   // 替换
s1.swap (s2)

.assign(s2)
.assign(s2, n)
.assign(s2.begin(), s2.end())
.assign(n, c)   // 前n个字符fill都赋值为c字符

// #include <format>
std::format("The answer is {}.", 42);   // c++20
```

```cpp
// input
std::getline(std::cin, s);

// sort
std::sort(s.begin(), s.end());       // "hello world!" -> " !dehllloorw"
std::sort(s.begin(), s.end(), std::greater<char>());
// reverse!!
std::reverse(s.begin(), s.end());    // "hello world!" -> "!dlrow olleh"



// string -> int:
stoi(s), stol(s), stoll(s)      // 10bit: |x| <= 2147483647, 19bit
// int -> string:
to_string(num)

// string -> byte[]:
.data()
.c_str()



/*
// 比较
s.compare(str)
// 迭代器
s.begin()
s.end()

// 连接
s1 + s2
s1 += s2
*/
```
:::
::: code-group-item iter
```cpp
// set
for (int i = 0; i < s.size(); ++i) {
    s[i] = toupper(s[i]);
}

// set
for (auto &c : s) {
    c = toupper(c);
}

// only get
for (char c : s) {
    cout << c << endl;
}
```
:::
::: code-group-item char
```cpp
#include <cctype>

isalnum(c): 字母或数字
isalpha(c): 字母(a-zA-Z)
isdigit(c): 数字(0-9)
ispunct(c): 特殊字符("$", "*", ...)
isspace(c): 空白字符(" ", "\n", "\t", ...)

islower(c)
isupper(c)
tolower(c)
toupper(c)
```
:::
::: code-group-item string&
```cpp
// example-1
bool is_ogram(string s);

int main() {
    cout << is_ogram("hello") << endl;
}

// example-2
bool is_ogram(string& s);

int main() {
    string s = "hello";
    cout << is_ogram(s) << endl;
}
```
:::
::::

### stringstream

for example
```cpp
#include <iostream>
#include <sstream>

using namespace std;

int main() {
    stringstream ans;
    ans << "hello";
    ans << ' ';
    ans << "world";
    ans << '!';

    cout << ans.str() << endl;
    // output: "hello world"
}
```



### Array

```cpp
// init
int nums[5] = {1, 2, 3, 4, 5};
int nums[ ] = {1, 2, 3, 4, 5};

// iter
for (auto &v : nums) {
    std::cout << v << " ";
}
```

### Pointer
```cpp
#include <iostream>

using namespace std;

int main() {
    // declare an int pointer
    int *ptr = nullptr;     // 0x0

    // new: dynamically allocate memory
    ptr = new int(12);      // 0x132e06880, 12

    cout << "object  address: " << ptr  << endl;    // 0x142f04080
    cout << "pointer address: " << &ptr << endl;    // 0x16ae23680
    cout << "pointer value  : " << *ptr << endl;    // 12

    // deallocate the memory
    delete ptr;
    cout << "object  address: " << ptr  << endl;    // 0x142f04080
    cout << "pointer address: " << &ptr << endl;    // 0x16ae23680
    cout << "pointer value  : " << *ptr << endl;    // 12

    ptr = nullptr;
    cout << "object  address: " << ptr  << endl;    // 0x0
    cout << "pointer address: " << &ptr << endl;    // 0x16ae23680
    cout << "pointer value  : " << *ptr << endl;    // No output!

    return 0;
}
```

```cpp
// C++ Program to store GPA of n number of students and display it
// where n is the number of students entered by the user

#include <iostream>
using namespace std;

int main() {

    int n;
    cout << "Enter total number of students: ";
    cin >> n;
    float* ptr;

    // memory allocation
    ptr = new float[n];

    cout << "Enter GPA of students." << endl;
    for (int i = 0; i < n; ++i) {
        cout << "Student" << i + 1 << ": ";
        cin >> *(ptr + i);
    }

    cout << "\nDisplaying GPA of students." << endl;
    for (int i = 0; i < n; ++i) {
        cout << "Student" << i + 1 << ": " << *(ptr + i) << endl;
    }

    // ptr memory is released
    delete[] ptr;
    ptr = nullptr;

    return 0;
}

/*
Enter total number of students: 4
Enter GPA of students.
Student1: 3.6
Student2: 3.1
Student3: 3.9
Student4: 2.9

Displaying GPA of students.
Student1: 3.6
Student2: 3.1
Student3: 3.9
Student4: 2.9
 */
```



:::: code-group
::: code-group-item null pointer

```cpp
// 空指针
int *p = NULL;  // int *p = 0;
p = new int[10];
delete [] p;    // delete array pointed
```

for example

```cpp
int x = 7;
int *p = &x;
if (p) {};  // true(p非null)
p = 0;
if (p) {};  // false(p为null)
```

:::
::: code-group-item void pointer

```cpp
// 通用指针
void *p;
int x = 10;
p = &x;
double y = 12.3;
p = &y;
```
:::

:::code-group-item function pointer
```cpp
void swap(int *first, int *second);

int main() {
    int x = 10;
    int y = 20;
    swap(&x, &y);
    cout << "x: " << x << " " << "y: " << y << endl;
    return 0;
}

void swap(int *pX, int pY)
{
    int temp = *pX;
    *pX = *pY;
    *pY = temp;
}
```
:::

::: code-group-item array pointer

```cpp
#include <iostream>
using namespace std;

void printArray(int*, int);
int getSum(const int*, int);
void reverseArray(int*, int);
void printArrays(int (*)[4], int);

int main() {
    // 一维数组
    // int nums[5] = {2, 4, 1, 3, 7};
    // cout << getSum(nums, 5) << endl;
    // reverseArray(nums, 5);
    // printArray(nums, 5);

    // 二维数组
    // int matrix[3][4] = {{10, 11, 12, 13},{ 20, 21, 22, 23 },{31, 32, 33, 34}};
    // printArrays(matrix, 3);

    // 数组指针
    int *ptr = new int[5];

    int nums[5] = {2, 4, 1, 3, 7};
    printArray(nums, 5);

    delete[] ptr;

    return 0;
}


void printArray(int *p, int size)
{
    for (int i = 0; i < size; i++)
    {
        cout << *(p++) << " ";
    }
    cout << endl;
}

int getSum(const int *p, int size)
{
    int sum = 0;
    for (int i = 0; i < size; i++)
    {
        sum += *(p++);
    }
    return sum;
}

void reverseArray(int *p, int size)
{
    for (int i = 0; i < size / 2; i++)
    {
        int temp = *(p + size - 1 - i);
        *(p + size - 1 - i) = *(p + i);
        *(p + i) = temp;
    }
}

void printArrays(int(*arr)[4], int rows)
{
    for (int i = 0; i < rows; i++)
    {
        for (int j = 0; j < 4; j++)
        {
            cout << arr[i][j] << " ";
        }
    }
    cout << endl;
}
```
:::
::::

### Function

:::: code-group
::: code-group-item declare
```cpp
void hello(int num);

void hello(int num) {
    cout << num;
};
```
:::
::: code-group-item params

```cpp
int sum(int x, int y) {
    return x + y
};
```
:::
::: code-group-item param-default-value

```cpp
int area(int x, int y = 1, int z = 2) {
    return x + y + 2;
}
```
:::
::: code-group-item overload
```cpp
#include <iostream>

int add(int a, int b);
double add(double a, double b);

int main() {
    add(1, 2);
    add(1.6, 2.3);
}

int add(int a, int b) {
    return a + b;
}

double add(double a, double b) {
    return a + b;
}
```
:::
::::

**function pointer**
:::: code-group
::: code-group-item param-pointer
```cpp
#include <iostream>

// pass-by-value
void add(int x);
// pass-by-reference
void add_pointer(int& x);

int main() {
    int x = 10;
    add(x);
    std::cout << x << std::endl; // 10

    add_pointer(x);
    std::cout << x << std::endl; // 11
}

void add(int x) {
    x++;
}

void add_pointer(int& x) {
    x++;
}
```
:::
::: code-group-item return-pointer
```cpp
#include <iostream>

// return-by-value
int larger(int x, int y);
// return-by-reference
int& larger(int& x, int& y);


int larger(int x, int y) {
    return x > y ? x : y;
}

int& larger(int& x, int& y) {
    return x > y ? x : y;
}
```
:::
::::

## STL
### vector

```cpp
#include <vector>
using namespace std;

// method-1
vector<int> vec;              // size: 0  value: [ ]

// method-2
vector<int> vec = {1, 2, 3};  // size: 3  value: [ 1, 2, 3 ]
vector<string> vec = {"hello", "world"};

// method-3
// template<class T>
vector<T> vec(n)        // size: n  value: [ ]
vector<T> vec(n, v)     // size: n  value: [ v, v, ... ]
// template<>
vector<string> vec{n}       // size: n  value: ["", "", ... ]
vector<string> vec{n, v}    // size: n  value: [ v,  v, ... ]
```

```cpp
// for example
vector<int> v1(3);            // size: 3  value: [ 0, 0, 0 ]
vector<int> v2(3, 42);        // size: 3  value: [ 42, 42, 42 ]
//vector<int> v3{3, 42};      // size: 2  value: [ 3, 42 ]

// Notice! `template<>`
vector<string> vec{3};        // size: 3  value: [ "", "", "" ]
vector<string> vec{3, "hi"};  // size: 3  value: [ hi, hi, hi ]
```


**methods**
```cpp
// 长度
.size()
.empty()    // size() == 0
.resize(n)

// 容量
.capacity()
.reserve(n)

// 查
.front()                 // vec[0]
nums[i], nums.at(i)     // vec[i]
.back()                  // vec[vec.size()-1]

// 增
.push_back(e)                 // vec.push_back(v)
.insert(nums.bengin()+2, e)   // vec[2] = e

// 删
.pop_back()
nums.erase(nums.begin(), nums.begin()+2);
.clear()

// 改
v1.swap(v2)                         // 两者所有元素值交换
v2.assign(v1.begin(), v1.end())     // 复制v1的元素值到v2中

// sort
std::sort(nums.begin(), nums.end())
std::sort(nums.begin(), nums.end(), std::greater<T>())
std::sort(nums.begin(), nums.end(), [&](T x, T y) -> bool {return x > y;})
std::reverse(nums.begin(), nums.end())
```

```cpp
count(nums.begin(), nums.end(), e)      // count: [0, ...]

// max
std::max_element(nums.begin(), nums.end())
// min
std::min_element(nums.begin(), nums.end())

// contains
template<typename T>
bool contains(vector<T> nums, T target) {
    return std::find(nums.begin(), nums.end(), target) != nums.end();
}

// upper_bound 二分查找第一个小于等于e的值的地址
// auto it = upper_bound(nums.begin(), nums.end(), e)
int index =  upper_bound(nums.begin(), nums.end(), e) - nums.begin()
int value = *upper_bound(nums.begin(), nums.end(), e)
```

**遍历**

```cpp
for (int i = 0; i < nums.size(); i++) {
    cout << nums[i] << endl;
}

for (auto& v: nums) {
    cout << v << " ";
}

for (auto it = nums.begin(); it != nums.end(); ++it) {
    cout << *it << endl;
}
```


### [map](https://learn.microsoft.com/zh-cn/cpp/standard-library/unordered-map-class?view=msvc-170)

```cpp
#include <unordered_map>

// init
std::unordered_map<char, int> map
std::unordered_map<char, int> map = {{'a', 3}, {'b', 2}}

// size, cap
.size()
.empty()


// 增
map[k] = v    // better!!
// map.insert({k, v})

// 删
.erase(k)
.clear()

// 查
map[k]       // notice: 查询map[k] 会新增key! at(k)则不会
map.at(k)


// .count(k)   // [0, 1]
// .find(k)
.contains(k)   // c++20
// `if (map.find(k) != map.end())`
// `if (map.count(k))`
// `if (map[k])`  也会新增key, value为初始值



// 遍历
for (auto& it : map) {
    std::cout << " [" << it.first << ", " << it.second << "]";
}
std::cout << std::endl;

for (auto it = map.begin(); it != map.end(); it++) {
    std::cout << "[" << it->first << ", " << it->second << "] ";
}
std::cout << std::endl;
```

:::details example
```cpp
#include <iostream>
#include <unordered_map>



template<typename T, typename U>
void display_map(const std::unordered_map<T, U>& map);

int main() {
    using namespace std;

    // init
    unordered_map<char, int> map;
    // unordered_map<char, int> map = {{'a', 3}, {'b', 2}};


    // 增
    map.insert({'a', 1});
    map['b'] = 2;

    display_map(map);   // [b, 2] [a, 1]
    cout << map.size() << endl;    // 2

    // 查: map[k] 会新增key，at(k)则不会
    cout << map['a'] << endl;      // 1
    cout << map['b'] << endl;      // 2
    cout << map['c'] << endl;      // 0
    cout << map.at('a') << endl;   // 1
    cout << map.at('c') << endl;   // 0
    display_map(map);              // [c, 0] [b, 2] [a, 1]

    // size
    cout << map.size() << endl;    // 3
    cout << boolalpha;
    cout << map.empty() << endl;   // false

    // count
    map = {{'a', 1}, {'b', 2}, {'c', 3}};
    display_map(map);
    cout << map.count('a') << endl;     // 1
    cout << map.count('b') << endl;     // 1
    cout << map.count('c') << endl;     // 1
    cout << map.count('d') << endl;     // 0
    display_map(map);

    // find
    cout << (map.find('a') != map.end()) << '\n';       // true
    cout << (map.find('k') != map.end()) << '\n';       // false

    // contains (c++20)
    cout << map.contains('a') << '\n';  // true
    cout << map.contains('k') << '\n';  // false


    return 0;
}

template<typename T, typename U>
void display_map(const std::unordered_map<T, U> &map) {
//    for (auto& it : map) {
//        cout << " [" << it.first << ", " << it.second << "]";
//    }
//    cout << endl;


    for (auto it = map.begin(); it != map.end(); it++) {
        std::cout << "[" << it->first << ", " << it->second << "] ";
    }
    std::cout << std::endl;
}
```
:::

### set
```cpp
#include <unordered_set>

std::unordered_set<int> set;
std::unordered_set<char> set = { 'a', 'c' };

// size
.size()
.empty()

// 增
.insert(e)

// 删
.erase(e)
.clear()

// 查
*(set.find(e))  // value
.count(e)       // [0. 1]
.contain(e)     // c++20    equal to `if(set.find(e) != set.end())` or `if (count(e))`


// 改
.swap(set2)

// iter
template<typename T>
void display_set(const std::unordered_set<T>& set) {
    for (auto& it : set) {
        if (isalpha(it)) std::cout << "[" << char(it) << "] ";
        else std::cout << "[" << it << "] ";
    }
    std::cout << std::endl;
}
```

:::details example
```cpp
#include <iostream>
#include <unordered_set>
#include <cctype>

template<typename T>
void display_set(const std::unordered_set<T>& set);

int main() {
    std::unordered_set<int> set;

    // add
    set.insert('a');
    set.insert('b');
    set.insert('c');

    // size
    std::cout << set.size() << '\n';    // 3
    std::cout << set.empty() << '\n';   // 0
    display_set(set);                   // [c] [b] [a]

    // remove
    set.erase('d');     // no error if element not exists
    set.erase('c');     // [b] [a]
    set.clear();

    // contains
    set = {'a', 'b', 'c', 'd'};
    std::cout << std::boolalpha;
    std::cout << set.contains('k') << '\n';   // false
    std::cout << set.contains('c') << '\n';   // true
    std::cout << (set.find('c') != set.end()) << '\n';   // true
    std::cout << (set.find('k') != set.end()) << '\n';   // false
    std::cout << (set.count('c') != 0) << '\n';          // true

    display_set(set);     // [d] [c] [b] [a]

    // count
    std::cout << set.count('c') << '\n';    // 1
    std::cout << set.count('k') << '\n';    // 0


    // find
    auto it = set.find('b');
    std::cout << char(*it) << std::endl;    // 'b'


    // swap
    std::unordered_set<int> set1 = {1, 3, 6};
    std::unordered_set<int> set2 = {2, 4, 7};

    set1.swap(set2);

    display_set(set1);     // set1: [4] [7] [2]
    display_set(set2);     // set2: [3] [6] [1]

    std::cout << __cplusplus << std::endl;    // 202002
    return 0;
}

template<typename T>
void display_set(const std::unordered_set<T>& set) {
    for (auto& it : set) {
        if(isalpha(it)) std::cout << "[" << char(it) << "] ";
        else std::cout << "[" << it << "] ";
    }
    std::cout << std::endl;
}
```
:::




### stack

```cpp
#include <stack>    // 先进后出

size()
empty()
增：push()
查：top()
删：pop()
```

:::details example
```cpp
#include <iostream>
#include <stack>
using namespace std;

void print_stack(stack<int> stack1);

int main() {
    stack <int> stack1;
    stack1.push(1);
    stack1.push(3);
    stack1.push(5);
    stack1.push(9);

    cout << "size: " << stack1.size() << endl;      // 4
    cout << boolalpha;
    cout << "empty: " << stack1.empty() << endl;     // false

    int& i = stack1.top();
    cout << "top: " << i << endl;

    stack1.pop();
    cout << "top(after pop): " << stack1.top() << endl;


    print_stack(stack1);

    return 0;
}

void print_stack(stack<int> stack) {
    cout << "stack: [ ";
    while(!stack.empty()) {
        auto sign = stack.size() > 1 ? ", " : " ";
        cout << stack.top() << sign;
        stack.pop();
    }
    cout << "]" << endl;
}

```
:::



### deque

```cpp
#include <deque>

std::deque<int> d;
std::deque<int> d = {1, 3, 5, 7};

// 长度
size()
empty()

// 查
front()
d[i], d.at(i)
back()

// 增
push_front(e)
insert(pos, e)
push_back(e)

// 删
pop_front()
pop_back()
erase(pos1, pos2)
clear()

// 改
d[i] = e

// iterator
cout << "[ "
for (int i = 0; i < d.size(); ++i) {
    cout << d[i] << " ";
}
cout << "]" << endl;


// pointer_iter
begin()
rbegin()

cout << *(d.begin()+1);  // d[1], 超出索引取默认值
```

:::details example
```cpp
#include <iostream>
#include <deque>

int main() {
    using namespace std;
    deque<int> d = {1, 3, 5, 7};

    // size
    cout << d.size() << endl;       // 4
    cout << d.max_size() << endl;   // 4611686018427387903
    cout << d.empty() << endl;      // 0 (false)

    // element access
    cout << d.at(0) << endl;    // d[0]: 1
    cout << d[0] << endl;           // d[0]: 1
    cout << d.front() << endl;      // first element:  1
    cout << d.back() << endl;       // last element: 7

    // 超过索引范围则输出为默认值
    cout << "begin: " << *(d.begin()) << endl;                // d[0]: 1
    cout << "begin: " << *(d.begin()+1) << endl;              // d[1]: 3
    cout << "rbegin: " << *(d.rbegin()) << endl;              // d[-1]: 7
    cout << "rbegin: " << *(d.rbegin()+1) << endl;            // d[-2]: 5


    // add element
    d.push_front(0);
    d.insert(d.begin()+2, 2);
    d.push_back(9);
    // 0 1 2 3 5 7 9

    // remove element
    d.erase(d.begin()+2, d.begin()+4);  // del d[2:4)
    // 0 1 5 7 9
    // d.clear();


    // iterator
    cout << "[ ";
    for (int i = 0; i < d.size(); ++i) {
        cout << d[i] << " ";
    }
    cout << "]" << endl;

    return 0;
}
```
:::


### list

```cpp
#include <iostream>
#include <list>

int main() {
    using namespace std;
    std::list<int> l = { 7, 5, 16, 8 };

    l.size();
    l.empty();

    l.push_front(25);
    l.push_back(13);
    // { 25, 7, 5, 16, 8, 13 }

    l.sort();                       // { 5 7 8 13 16 25 }
    l.splice(l.begin(), {12,3});    // { 12 3 5 7 8 13 16 25 }
    l.merge({12,2});                // { 12 3 5 7 8 12 2 13 16 25 }


    // iterator
    cout << "{ ";
    for (int &it : l) {
        cout << it << " ";
    }
    cout << "}" << endl;



    return 0;
}
```


## OOP

**class example**
```cpp
#include <iostream>

class BankAccout {
public:
    void sayHi() {
        std::cout << "Hi" << std::endl;
    }
};

int main() {
    // instantiation
    BankAccout back;
    // function call
    back.sayHi();

    // pointer call 1
    BankAccout back2;
    BankAccout *ptr = &back2;
    ptr->sayHi();

    // pointer call 2
    auto *ptr2 = new BankAccout();
    ptr2->sayHi();

    return 0;
}
```

### Encapsulation (封装)

- public
- private
- protected
- friend

```cpp
#include <iostream>

class student {
private:
    std::string name;
public:
    void setName(std::string x) {
        name = x;
        // this->name = x;
        // (*this).name = x;
    }
    std::string getName() {
        return name;
    }
protected:  // ...
// friend function
};


int main() {
    student *ptr = new student;
    ptr->setName("John Smith");
    std::cout << ptr->getName() << std::endl;
    delete ptr;

    return 0;
}
```

### 内联函数

```cpp
class Circle {
    private:
        double radius;
    public:
        // 隐式内联函数
        double getRadius() {
            return radius;
        }
};
```

```cpp
class Circle {
    private:
        double radius;
    public:
        double getRadius();
};

// 显式内联函数
inline double Circle::getRadius {
    return radius;
}
```

### struct & class

```c
// struct 结构所有成员默认都是公共的
struct student {
    int age;
    char *name[20];
}
```

```cpp
// class 类所有成员默认都是私有的
class student {
    private:
        int age;
        string name;
}
```

### Constructor & Destructor

:::: code-group
::: code-group-item init
```cpp
#include <iostream>


class Circle {
    public:
        Circle();                   // 默认构造函数（无参）
        Circle(double r);           // 参数构造函数
        Circle(const Circle& c);    // 拷贝构造函数
        ~Circle();                  // 析构函数
    private:
        double radius;
};


// 默认无参构造函数
Circle::Circle():radius(0.0)        // 如果省略，则设置为垃圾值
{

}


// 参数构造函数
Circle::Circle(double r):radius(r)
{

}

// 拷贝构造函数
Circle::Circle(const Circle& c):radius(c.radius)
{

}

// 析构函数
Circle::~Circle()
{

}

int main() {
    Circle circle1;
    Circle circle2(3.0);
    Circle circle3(circle1);

    return 0;
}

/*
default constructor
params constructor
copy constructor
destructor
destructor
destructor
*/

```
:::
::: code-group-item pointer-init
```cpp
int main() {
    Circle *ptr = new Circle();     // Constructor
    delete ptr;                     // Destructor

    return 0;
}
```
:::
::: code-group-item params-init
```cpp
int main() {
    Circle obj(10.0);     // Destructor

    return 0;
}
```
:::
::::

```cpp
// 默认会提供合成无参构造函数、析构函数、copy constructor
// 如果自行设置了默认无参构造函数或参数构造函数，则不会再提供合成默认无参构造函数.


// 阻止使用拷贝构造函数
Circle(const Circle& c) = delete;
```


### this


```cpp
double getRadius() const {
    return radius;
}

// 隐式this指针
double getRadius(Circle* this) const {
    return this->radius;    // 与(*this).radius相同
}
```

```cpp
void Circie::setRadius(double r) {
    radius = r;
}

// 显式this指针 (无需缩写参数名称)
void Circle::setRadius(double radius) {
    this->radius = radius;
}
```
### const

```cpp
class Circle {
    private:
        double radius;
    public:
        double getRadius() const;   // getter 访问器 设置const限定符确保宿主对象(this指向的对象)为只读
        void setRadius(double r);   // setter 更改器 不能设置常量限定符const
};
```

### static

```cpp{5,7,17}
#include <iostream>

class Rectangle {
    private:
        static int count;       // static 静态数据成员
    public:
        static int getCount();  // static 静态成员方法
};

int Rectangle::count = 0;
int Rectangle::getCount() {
    return count;
}

int main() {
    // static call
    Rectangle::getCount();

    Rectangle rect;
    rect.getCount();

    return 0;
}
```

### 独立文件编译
```shell
c++ -c circle.cpp
c++ -c app.cpp
c++ -o app circle.o app.o
./app
rm -f circle.o app.o app
```

:::: code-group
::: code-group-item header-file
```cpp
// circle.h
#ifndef CIRCLE_H
#define CIRCLE_H

#include <iostream>
#include <cassert>

class Circle {
    private:
        double radius;
    public:
        Circle();                   // 默认构造函数（无参）
        Circle(double r);           // 参数构造函数
        Circle(const Circle& c);    // 拷贝构造函数, Circle(const Circle& c) = delete;  // 阻止使用拷贝构造函数
        ~Circle();                  // 析构函数
        void setRadius(double r);   // setter 更改器
        double getRadius() const;   // getter 访问器
        double getArea() const;
        double getPerimeter() const;
};

#endif //CIRCLE_H
```
:::
::: code-group-item source-file
```cpp
// circle.cpp
#include "circle.h"


// 默认无参构造函数
Circle::Circle():radius(0.0)         // 如果省略，则设置为垃圾值
{
    std::cout << "default constructor" << std::endl;
}


// 参数构造函数
Circle::Circle(double r):radius(r)
{
    std::cout << "params constructor" << std::endl;
    if (radius < 0.0) assert(false);
}

// 拷贝构造函数
Circle::Circle(const Circle& c):radius(c.radius)
{
    std::cout << "copy constructor" << std::endl;
}

// 析构函数
Circle::~Circle()
{
    std::cout << "destructor" << std::endl;
}


void Circle::setRadius(double r)
{
    radius = r;
    if (radius < 0.0) assert(false);
}


double Circle::getRadius() const
{
    return radius;
}

double Circle::getArea() const
{
    const double PI = 3.14;
    return radius * radius * PI;
}

double Circle::getPerimeter() const
{
    const double PI = 3.14;
    return radius * PI * 2;
}
```
:::
::: code-group-item app-file
```cpp
// app.cpp
#include "circle.h"
#include <iomanip>


using namespace std;


int main() {
    Circle c(5.2);
    cout << "     radius       area        perimeter   " << endl;
    cout << "   ---------   -----------  ------------" << endl;
    cout << setw(9) << right << c.getRadius();
    cout << setw(15) << c.getArea();
    cout << setw(13)  << c.getPerimeter();
    cout << endl;

    return 0;
}

/*
     radius       area        perimeter
   ---------   -----------  ------------
      5.2        84.9056       32.656
*/
```
:::
::::


### Inheritance (继承)

```cpp
class Cat : public Animal {};   // 继承


class Person {};
class Student : virtual public Person {};           // 虚继承
class Professor : virtual public Person {};
class TA : public Professor, public Student {};     // 多重继承
```

example
:::: code-group
::: code-group-item inherits
```cpp
#include <iostream>

class Product
{
    protected:
        double price;
        int weight;
    public:
        void getInfo() const {
            std::cout << price << ", " << weight;
        }
};

class Fruit : public Product
{
    public:
        std::string type;
        void setInfo(double price, int weight) {
            // Base class data call
            this->price = price;
            this->weight = weight;
        }
        /*
        void setInfo(double p, int w) {
             price = p;
             weight = w;
        }
        */
};


int main() {
    Fruit obj;
    obj.type = "Apple";
    // Base class method call
    obj.setInfo(4.99, 10);
    obj.getInfo();

    return 0;
}
```
:::
::: code-group-item inherits multi
```cpp
#include <iostream>


class Person {
    protected:
        std::string name;
    public:
        Person(std::string name);
        ~Person();
};

// 虚继承
class Student : virtual public Person {
    protected:
        double gpa;
    public:
        Student(std::string name, double gpa): Person(name), gpa(gpa){};
        ~Student();
};

class Professor : virtual public Person {
    protected:
        double salary;
    public:
        Professor(std::string name, double salary): Person(name), salary(salary){};
        ~Professor();
};

// 多重继承
class TA : public Professor, public Student {
    public:
        TA(std::string name, double gp, double sal): Person(name), Student(name, gp), Professor(name, sal){};
        ~TA();
};

```

:::
::::

### Polymorphism (多态)

```cpp
class Animal {};
class Cat : public Animal {};
class Dog : public Animal {};


class Person {};
class Student : virtual public Person {};           // 虚继承
class Professor : virtual public Person {};
class TA : public Professor, public Student {};     // 多重继承
```





```cpp{8,10,15,22}
#include <iostream>

class Animal {
protected:
    int age;
public:
    // 显式虚析构函数
    ~Animal(){};
    // virtual (虚函数)
    virtual void speak() {
        std::cout << "In Animal" << std::endl;
    }
};

class Cat : public Animal {
public:
    void speak() {
        std::cout << "In Cat"<< std::endl;
    }
};

class Dog : public Animal {
public:
    void speak() {
        std::cout << "In Dog"<< std::endl;
    }
};


int main() {
    Animal *ptr;

    ptr = new Animal();
    ptr->speak();   // In Animal
    delete ptr;

    ptr = new Cat();
    ptr->speak();   // In Cat
    delete ptr;

    ptr = new Dog();
    ptr->speak();   // In Dog
    delete ptr;

    return 0;
}
```



:::details error(no virtual)

```cpp
#include <iostream>

class Animal {
    protected:
        int age;
    public:
        // 显式虚析构函数
        ~Animal(){};
        void speak() const {
            std::cout << "In Animal" << std::endl;
        }
};

class Cat : public Animal {
    public:
        void speak() {
            std::cout << "In Cat"<< std::endl;
        }
};

class Dog : public Animal {
    public:
        void speak() {
            std::cout << "In Dog"<< std::endl;
        }
};


int main() {
    Animal *ptr;

    ptr = new Cat();
    ptr->speak();   // In Animal
    delete ptr;

    ptr = new Dog();
    ptr->speak();   // In Animal
    delete ptr;

    return 0;
}
```
:::

### Abstract (抽象)
Pure virtual function cannot be overridden.
```cpp
virtual void speak() = 0;
```

```cpp{14,35,39}
#include <iostream>

// pure-virtual function:
// 1. cannot create object of the base class
// 2. if delete the base class pointer, cannot print the next derived class function.


class Animal {
protected:
    int age;
public:
    ~Animal(){};
    // pure virtual method
    virtual void speak() = 0;
};

class Cat : public Animal {
public:
    void speak() {
        std::cout << "In Cat"<< std::endl;
    }
};

class Dog : public Animal {
public:
    void speak() {
        std::cout << "In Dog"<< std::endl;
    }
};


int main() {
    Animal *ptr;

    // ptr = new Animal();  // error

    ptr = new Cat();
    ptr->speak();           // In Cat
    // delete ptr;          // if has it, only print "In Cat"

    ptr = new Dog();
    ptr->speak();           // In Dog
    delete ptr;

    return 0;
}
```


## File
```cpp
#include <iostream>
#include <fstream>
using namespace std;

int main() {
    int sum(0);
    int num;
    ifstream infile;
    infile.open("numbers.dat");
    while(infile >> num) {
        sum += num;
    }
    cout << "The sum of the numbers in the file is " << sum << endl;    // 1500
    infile.close();

    return 0;
}
```


```dat
100
200
300
400
500
```


## FAQ

### cpp version
cpp version
```cpp
cout << __cplusplus << endl;    // 2020-02
```

change cpp version
```txt
# CMakeLists.txt
set(CMAKE_CXX_STANDARD 20)
```

clang version
```shell
$ clang --version
```

### i++ & ++i

> 尽量使用++i来代替i++的自增序列

```cpp
#include<iostream>
using namespace std;

class increment {
    int x_;
    int y_;
public:
    increment(int x = 0, int y = 0);
    increment(const increment&);
    ~increment();
    increment& operator++();//前置
    const increment operator++(int);//后置
    increment operator+(const increment&);
    increment& operator+=(const increment&);
    void Displayincrement();
};

increment& increment::operator+=(const increment& _right)
{
    this->x_ += _right.x_;
    this->y_ += _right.y_;
    return *this;
}

increment increment::operator+(const increment& _right)
{
    increment temp;
    temp.x_ = this->x_ + _right.x_;
    temp.y_ = this->y_ + _right.y_;
    return temp;
}


increment& increment::operator++()
{
    ++x_;
    ++y_;
    return *this;
}

const increment increment::operator++(int)
{
    increment temp(*this);
    this->x_++;
    this->y_++;
    return temp;
}

increment::increment(int x, int y)
{
    x_ = x;
    y_ = y;
    cout << "this is constructor" << endl;
}

increment::increment(const increment& b)
{
    this->x_ = b.x_;
    this->y_ = b.y_;
    cout << "this is copy constructor" << endl;
}

increment::~increment()
{
    cout << "this is destructor" << endl;
}

void increment::Displayincrement()
{
    cout << "x: " << this->x_ << endl;
    cout << "y: " << this->y_ << endl;
}

int main()
{
    increment i(1, 1);
    cout << endl << "this is i++: " << endl;
    i++;
    cout << endl << "this is ++i: " << endl;
    ++i;

    cout << "end" << endl;
    return 0;
}

/*
this is constructor

this is i++:
this is copy constructor
this is destructor

this is ++i:

end
this is destructor
 */

```

### using namespace std & std::cout

> 尽量不要在头文件中使用`using namespace std;`语句, 可以直接使用`std::cout`这样不容易发生命名冲突.
>
> namespace 命名空间避免不同头文件中的冲突, 并提供其他区分方法.例如std::string, cstring::string

method-1
```cpp
#include <iostream>
using namespace std;

int main() {
    cout << "Hello world!" << endl;
    return 0;
}
```

method-2
```cpp
#include <iostream>

int main() {
    std::cout << "Hello world!" << std::endl;
    return 0;
}
```

### NULL, nullptr, 0 ?

```cpp
本来C可以允许int *a = (void *)0;
但是到了C++就不允许了，因为C不允许void * 给别的指针类型作右值，所以C++只能把NULL定义成0。即NULL是0，
所以NULL既是整型又是空指针常量，这就会导致出现二义性，这是个坑，
所以C++又新出了一个关键字nullptr，以后只用nullptr，从此NULL就可以慢慢被C++抛弃了
```

```cpp
// c
#define NULL ((void*)0)

// cpp
#define NULL 0

/* source code */
#ifndef NULL
    #ifdef __cplusplus
        #define NULL 0
    #else
        #define NULL ((void *)0)
    #endif
#endif
```

**usage**
```cpp
int *p = 0;
int *p = NULL;
int *ptr = nullptr; //推荐使用

if (ptr == nullptr) {}
if (ptr == NULL) {}
if (ptr == 0) {}

// nullptr 还可以抛出异常
```


## Tips

1. output: 格式化使用C的`printf()`方法
2. datatype: 长数据类型使用auto省略
3. switch: 多个case, condition必须是boolean(int, char, bool...)不能是字符串(string, char*)
4. for loop: auto `&`v修改
5. pointer: 推荐使用`nullptr` (C++11)


