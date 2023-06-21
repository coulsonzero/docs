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
int num = 12;   // int num(12)
// constant
const double PI = 3.14;
```

```cpp
// multi-var
int x = 3, y = 5;
temp = s[i], s[i] = s[j], s[j] = temp;
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
// 换行: endl, 连接符: <<
std::cout << "Hello world!";
std::cout << "Hello" << " world!" << std::endl;
std::cout << "Hello world!\n";
std::printf("%s\n", "hello world!")
```

::: warning
尽量不要使用`using namespace std`, 特别是在header file
:::



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

**输入一个**
```cpp
int num;
// cout << "Please enter a number \n";
cin >> num;              // 当读取到空白字符' '停止
```

**输入多个**
```cpp
int a, b;
cin >> a >> b;          // 空格分开，多个空格只会视为一个空格
```

**输入字符串**
```cpp
char ch;
while (cin >> noskipws >> ch) {
    cout << ch;
}

// input  >> hello world
// output >> hello world
// ...
```

**输入一行数字**
```cpp
int n;
while(cin >> n) {
    cout << n * 2 << " ";
}
// 2 5  3
// 4 25 9
// ...
```

2. getline
```cpp
string s;
getline(cin, s);        // 当读取到'\n'停止
getline(cin, s, '$');   // 当读取到字符'$'停止
```


::: details getline(cin, s)
```cpp
#include <iostream>
#include <string>

using namespace std;

int main() {
    string s;

    cout << "Enter a line: ";
    getline(cin, s);
    cout << "s: " << s << endl;

    return 0;
}

/*
Enter a line: hello world !
s: hello world !
*/
```
:::

::: details getline(cin, s, '$')

```cpp
#include <iostream>
#include <string>

using namespace std;

int main() {
    string s;

    cout << "Enter a mult-line: " << endl;
    getline(cin, s, '$');   // 当读取到字符'$'停止
    cout << "s: " << s << endl;

    return 0;
}

/*
1 hello world !
2 welcome to here.
3 pratice more ...
*/
```
:::



### Data Types

- 整数类型：`int` (`short`, `long`, `unsigned`, `signed` 修饰)
- 浮点类型：`float`, `double`(默认), long double
- 布尔类型：`bool`
- 字符类型：`char`
- 字符串类: `string`
- 自动类型：`auto`
- void(空)类型：显示函数不返回任何值

:::: code-group
::: code-group-item boolalpha
```cpp
// true(任何非零值) false(0)
bool x = true;      // 1 (true)
bool y = 12;        // 1 (true)
bool z = false;     // 0 (false)
bool e = 0;         // 0 (false)

// true输出未1， false输出为0
std::cout << x << std::endl;  // 1
std::cout << e << std::endl;  // 0

// boolalpha: 将布尔值作为字面量(true/false)输出
std::cout << boolalpha;
std::cout << x << std::endl;  // ture
std::cout << e << std::endl;  // false
```
:::
::: code-group-item example

```cpp
/**
 * Long : L
 * float: F
 * unsigned: U
 */

#include <iostream>

using namespace std;

int main() {
    // 整数(默认用int)
    short num_short = 10;   // -32768 ~ 32767
    int num = 12;
    long num_long = 123L;   // 使用L或l结尾

    // unsigned: 负数, signed: 正负数均可(默认)
    unsigned int num_unsigned_2 = 1000u;    // 使用u/U结尾
    signed int num_signed_1 = -13;
    signed int num_signed_2 = 13;

    // 浮点数(默认用double)
    double weight = 130;
    float height = 181.3f;  // 使用f或F结尾

    // 布尔
    bool online = true;     // Output: true(1), false(0), 可以使用boolalpha显示字面量为true或false

    // 字符
    char c = 'z';

    // 字符串类
    string name = "john";

    // auto: 必须同时初始化
    auto x = 10;
    x = 20.0;

    auto *ptr = new Solution();
    auto res = ptr->distinctAverages(nums);

    // 数组
    int nums[5] = {1, 2, 3, 4, 5};
    vector<int> nums = {9,5,7,8,7,9,8,2,0,7};

    // map
    unordered_map<char, int> map;

    // set
    unordered_set<int> set;



    return 0;
}
```
:::

::: code-group-item sizeof...
```cpp
/**
 * `sizeof(12)`: 字节大小
 * `typeid(12).name()`: 具体类型
 * `typeid(3.14+1.2).name()`: 隐式类型转换
 * `static_cast<int>(12)`: 显式类型转换
 */
#include <iostream>

int main()
{
    // 类型
    std::cout << typeid(12).name() << std::endl;        // i: int
    std::cout << typeid(11.2).name() << std::endl;      // d: double
    float pi = 3.14F;
    std::cout << typeid(pi).name() << std::endl;        // f: float
    // 隐式类型转换
    std::cout << typeid(pi + 1.2).name() << std::endl;  // d: double
    // 显式类型转换
    double x = 23.6;
    int y = 30;
    std::cout << "Without casting: " << x + y << std::endl;                       // Without casting: 43.6
    std::cout << "Without casting: " << static_cast<int>(x + y) << std::endl;     // Without casting: 43

    // sizeof: 数据类型所占字节大小
    int num = 4;
    std::cout << sizeof(num) << std::endl; // sizeof(int): 4
}
```
:::
::: code-group-item range
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
for (init; condition; increment) {
    // statement(s)
}

for (auto &v : nums) {
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

> "Hello" = 'H', 'e', 'l', 'l', 'o', '\0', 最后一个字符是字符串结束符'\0'(终止符)
>
> 逐步使用C++字符串类代替C字符串


```cpp
#include <iostream>
// #include <string>

int main() {
    std::string name = "hello";

    std::cout << name << std::endl;

    return 0;
}
```

> `iostream中隐式包含string，如果有#include <iostream>可以无需引用string`

```cpp
#include <string>

// 1. init 初始化
string s;
string s = "Hello World";
string s("Hello World");

// 2. 长度
s.size()
s.length()
s.empty() // s.size() == 0
// 容量
s.capacity()

// 增
s.append(str)
s.insert(index, str)
s.replace(start, end, str)  // 替换

// 删
s.erase(i)      // 删除s[i]后面的所有字符
s.erase(i, n)   // 删除s[i]后面的n个字符
s.clear()

// 查询
s.substr(pos, n)
s.find(c, pos)      // if (s.find(c, pos) == -1)
s.rfind(c, pos)
s.find_first_of(c)
s.find_last_of(c)



// string <-> int
stoi("12")      // "12" -> 12
to_string(10)   //  10  -> "10"


// 输入一行字符串
string s;
geiline(cin, s);

// 反转
reverse(s.begin(), s.end());
```

字符判断
```cpp
#include <cctype>

isalpha(c): 字母(a-zA-Z)
isdigit(c): 数字(0-9)
ispunct(c): 特殊字符("$", "*", ...)
isspace(c): 空白字符(" ", "\n", "\t", ...)
islower(c): 小写字母
isupper(c): 大写字母
isalnum(c): 字母或数字

tolower(c)
toupper(c)
```

字符串遍历
```cpp
// 1. 可以修改字符串的值
for (int i = 0; i < s.size(); i++) {
    s[i] = toupper(s[i]);
}

// 2.1 强循环(只能查询，无法修改)
for (char c : s) {
    cout << c << endl;
}

// 2.2 修改string的值，需要使用引用，才能对原始数据操作
for (auto &c : s) {
    c = toupper(c);
}
```

字符串函数参数引用
```cpp
bool is_ogram(string s);

int main() {
    cout << is_ogram("hello") << endl;
}
```

```cpp
bool is_ogram(string& s);

int main() {
    string s = "hello";
    cout << is_ogram(s) << endl;
}
```

### Array

```cpp
int nums[5] = {1, 2, 3, 4, 5};
int nums[ ] = {1, 2, 3, 4, 5};
```

### Pointer

```cpp
int score = 90;
int *scorePtr;
scorePtr = &score;
```

```cpp
int score = 90;
int *pScore = &score;
count << "score: " << *pScore << endl;
```

**example**

```cpp
int *ptr = new int;
*ptr = 5;

cout << *ptr << endl;

delete ptr;
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

## STL
### vector

**include vector library**

```cpp
#include <vector>
```

```cpp
// init
vector<int> vec;              // size: 0     cap: 0     value: [ ]
vector<int> vec = {1, 2, 3};  // size: 3     cap: 3     value: [ 1, 2, 3 ]

// vector<int>    vec(n, v)
// vector<int>    vec{v...}
// vector<string> vec{n, v}
vector<int> v1(3);            // size: 3     cap: 3     value: [ 0, 0, 0 ]
vector<int> v2(3, 42);        // size: 3     cap: 3     value: [ 42, 42, 42 ]

vector<int> v4{3, 42};        // size: 2     cap: 2     value: [ 3, 42 ]
vector<string> v6{3};         // size: 3     cap: 3     value: [ "", "", "" ]
vector<string> v7{3, "hi"};   // size: 3     cap: 3     value: [ hi, hi, hi ]



// 长度
size()
resize(n)
empty()         // size() == 0

// 容量
capacity()
reserve(n)

// 查
front()                 // vec[0]
nums[i], nums.at(i)     // vec[i]
back()                  // vec[size-1]

// 增
push_back(e)           // vec.push_back(v)
insert(p, e)           // vec[p] = e

// 删
pop_back()
erase(first, last)
clear()


// 改
v1.swap(v2)                         // 两者所有元素值交换
v2.assign(v1.begin(), v1.end())     // 复制v1的元素值到v2中

// sort 排序
std::sort(nums.begin(), nums.end())                     // 升序
std::sort(nums.begin(), nums.end(), greater<int>())     // 降序
auto cmp = [&](T x, T y) -> bool {return x > y;};
std::sort(vec.begin(), vec.end(), cmp);

// count 统计元素次数：
*count(nums.begin(), nums.end(), e);

// contains 判断包含
if(find(nums.begin(), nums.end(), e) != nums.end())

// upper_bound 二分查找:
auto it = upper_bound(nums.begin(), nums.end(), e)     // 二分查找第一个小于等于e的值的地址
it - nums.begin()  // index
*it;               // value

```

**遍历**

```cpp
for (int i = 0; i < nums.size(); i++) {
    cout << nums[i] << endl;
}
```

```cpp
for (auto it = nums.begin(); it != nums.end(); ++it) {
    cout << *it << endl;
}
```

### map

```cpp
#include <unordered_map>

// 初始化
unordered_map<char, int> map;
unordered_map<char, int> map = {{'a', 3}, {'b', 2}};

// 增
map.insert({'c', 1});
map[nums[i]] = i;

// 查
map['a']
map.at('a')

// 遍历
for (auto iter = map.begin(); iter != map.end(); iter++) {
    cout << " [" << iter->first << ", " << iter->second << "]";
}
cout << endl;

for (auto& iter : map) {
    cout << " [" << iter.first << ", " << iter.second << "]";
}
cout << endl;



```

### set
```cpp
#include <unordered_set>
std::unordered_set<int> set;
std::unordered_set<char> set = { 'a', 'c' };

set.size()
set.begin()、set.end()
set.insert(e)
set.contain(e)

```

```cpp
#include <iostream>
#include <unordered_set>

using namespace std;

void print_set(const unordered_set<char>& set);

int main() {
    std::unordered_set<int> theUnorderedSet = { 1, 2 };

    std::cout << std::boolalpha; // so booleans show as 'true' or 'false'
    std::cout << theUnorderedSet.contains(2) << '\n';   // true
    std::cout << theUnorderedSet.contains(3) << '\n';   // false

    return 0;
}

void print_set(const unordered_set<char>& set) {
    for (auto& iter : set) {
        cout << "[" << iter << "] ";
    }
    cout << endl;
}

```

### stack

```cpp
#include <stack>    // 先进后出

size()
empty()
push()
pop()
top()
```

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


