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

### Output & Input

**output**

```cpp
// 换行: endl
// 连接符: <<
cout << "Hello world!";
cout << "Hello" << " World!" << endl;
cout << "Hello world!\n";
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
int num;
// cout << "Please enter a number \n";
cin >> num;              // 当读取到空白字符' '停止
```

```cpp
int a, b;
cin >> a >> b;          // 空格分开，多个空格只会视为一个空格
```

2. getline
```cpp
string s;
getline(cin, s);        // 当读取到'\n'停止
getline(cin, s, '$');   // 当读取到字符'$'停止
```


::: details 输入一行
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

::: details 输入一行

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


### Variable & Constants

**变量**

> 较长变量命名规则：使用`_`连接, 如 `num_short`

```cpp
int num;
num = 20;

int a, b;
a = 10;
b = 20;

int x = 3, y = 5;

temp = s[i], s[i] = s[j], s[j] = temp;
```

**常量**

> 变量可以更改值，常量不可更改

```cpp
const double PI = 3.14;
```

- 全局变量：初始化为默认值
- 静态局部变量：初始化为默认值
- 自动局部变量：没有被显式初始化时，将保留以前遗留的垃圾值，可能值比较大

```cpp
#include "iostream"

using namespace std;


int global;     // 全局变量：初始化为默认值

int main() {
    static int static_local;    // 静态局部变量：初始化为默认值
    auto int auto_local;        // 自动局部变量：没有被显式初始化时，将保留以前遗留的垃圾值，可能值比较大

    cout << global << endl;
    cout << static_local << endl;
    cout << auto_local << endl;

    return 0;
}
```

全局变量与局部变量的显式输出
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

静态局部变量
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

自动局部变量

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



### Data Types

- 整数类型：`int` (`short`, `long`, `unsigned`, `signed` 修饰)
- 浮点类型：`float`, `double`, long double
- 布尔类型：`bool`
- 字符类型：`char`
- 字符串类: `string`
- 自动类型：`auto`
- void(空)类型：显示函数不返回任何值

> 一些基本类型可以使用一个或多个类型修饰符进行修饰, 默认情况下，int、short、long 都是带符号的，即 signed

`short`, `long`, `unsigned`, `signed`

```cpp
#include <iostream>
#include <string>

using namespace std;

int main() {
    // 整数(默认用int)
    short num_short = 10;   // -32768 ~ 32767
    int num = 12;
    long num_long = 123L;   // 使用L或l结尾

    // unsigned: 负数, signed: 正负数均可
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

> `全局变量`或者`静态变量`，未初始化的话就是`0`.如果是`局部变量`，那就是以前残留在`堆栈里的随机值`

```cpp
#include <iostream>

int main() {
    int num(0); // 局部变量初始化为0
    std::cout << num << std::endl;

    return 0;
}
```

```cpp
bool x = true;
cout << x << endl;  // 1
// boolalpha: 将布尔值作为字面量(true/false)输出
cout << boolalpha << x << endl; // ture
```

- `sizeof(12)`: 数据类型所占字节大小
- `typeid(12).name()`: 隐式类型转换
- `static_cast<int>(12)`: 显式类型转换


```cpp
#include <iostream>

int main()
{
    // 隐式类型转换
    std::cout << typeid(12).name() << std::endl;      // i: int
    std::cout << typeid(11.2).name() << std::endl;    // d: double
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

- `numeric_limits<int>::max()`: 数据类型取值范围

```cpp
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
// ?:
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

> "Hello" = 'H', 'e', 'l', 'l', 'o', '\0', 最后一个字符是字符串结束符'\0'(终止符)
>
> 逐步使用C++字符串类代替C字符串


```cpp
#include <iostream>
// #include <string>

// iostream中隐式包含string，如果有#include <iostream></iostream>可以无需引用string

using namespace std;

int main()
{
    string name = "hello";          // std::string
    cout << name.size() << endl;    // 5

    return 0;
}
```

```cpp
#includ <string>
// 1. 初始化
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

// 统计元素e出现的次数
count(vec.begin(),vec.begin()+3, e) // [0, 3)范围内

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
#include <unordered_map>

// 初始化
unordered_map<char, int> map;
unordered_map<char, int> map = {{'a', 3}, {'b', 2}};

// 增
map.insert({'c', 1});

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