[DataTypes]: ./assets/python/py-DataTypes.png

# python

## Overview

### First Program

```python
print("Hello World!")
```

### Variables & Data Types

```python
num = 7               # 数字
user_name = "James"   # 字符串
isActive = True       # 布尔
nums = [1, 2, 3]      # 列表

```

### Operators

```pyhton
+ - * / % // **
== != >= <= > <
+= -= *= /= %=
and or not
```

::: warning

```python
print( 10 / 2 )      # 5.0
print( 3 ** 2 )      # 9
print( "Hello" * 2 ) # HelloHello, 同样适用于数组
```

:::


### Input

```python
a = input()
a = input("请输入: ")
a,b = input().split()                  # 输入两个字符串
a,b = map(int, input().split())        # 输入两个整数（用空格隔开）
a,b = map(int, input().split(','))     # 输入两个整数（用逗号隔开）
```

### print

```python
print()
print(Str%...)
print(Str.format(...))
print(f-String)
```

```python
# 保留两位小数
print('%.2f'%var)
print('{0:.2f}'.format{var})
print(f'{var}')
```

### Comments

```python
# this is a single line comment

'''
this is a multi-line comment
'''
```

### import导包

```python
import ... [as ...]
from ... import ...
```

### Main

```python
if __name__ = "__main__":
    print("此py文件没有被导入")
```

### Package exe

```cmd
cmd> pyinstaller -F -w *.pyw
```

## 常用数据类型

![DataTypes]

### Number

- int
- float
- complex


### Boolean

```python
True
False
```

### String

```python

String:

s = '...'/"..."

find()      # 索引字符
index()     # 索引字符
s[i]        # 字符索引
count()     # 计数
eval(s)     # 表达式求值
replace()
translate(''.maketrans())   # 加密
strip()     # 删除字符

split()          # 字符串 -> 列表
''.join(List)    # 列表 -> 字符串

# 大小写：
upper()
lower()
capitalize()    #字符串首字母大写
title()         #字符串每个单词首字母大写
swapcase()      #大小写转换

# 判断：
startswith()
endswith()
isalpha()
isdigit()
isalnum()
isupper()
islower()
isspace()

# 填充：
center()
ljust()
rjust()
```

```py
# 反转字符串
s[::-1]
```

### List

```python
append(element)
extend(interable)
insert(i, e)

remove(e)  # 删除首次出现的元素
pop([i])   # 末尾删除
clear()

index(e, [start=0, [stop=len(List)]])    #0:...:len(List)-1
count(e)
copy()

sort(key=None, reverse=False)
reverse()
random.shuffle(List)
sorted()
reversed()


#切片[start:stop:step]
List[::]--------------顺序返回所有列表元素
List[::-1]------------倒序返回所有列表元素
List[::-2]------------每隔1个元素提取到列表
List[:3]--------------前三个元素
List[3:]

#访问元素
List[index]


# 删除重复项(末尾删除)
for i in List[::-1]:
    if List[i] == x:
        List.remove(List[i])
        # del List[i]

# 列表推导式
效果：[0,1,...,99]:
代码：[x for x in range(100)] 或 list(range(100))

效果：100以内的所有素数
代码：[p for p in range(2,100) if 0 not in [p%d for d in range(2,int(sqrt(p))+1)]]

效果：['Test1.py', 'Test2.py', 'Test3.pyw']
代码：[filename for filename in os.listdir() if filename.endswith('.py','.pyw')]

效果：去列表元素两端空白
print([v.strip() for v in alist])

for i, v in enumerate(alist):
    alist[i] = v.strip()
print(alist)

print(list(map(str.strip, alist)))
```

### 元组Tuple

### 字典dict

```python
get(key, new_v)
items()
keys()
values()

Dict[key]

先按名称排序，同名则按年龄降序：
sorted(Dict, key = lambda x:(x['name'], -x[age]))

效果：{'a': 87, 'b': 78, 'c': 98, 'd': 67}
代码：
x = ['a','b','c','d']
y = [87, 78, 98, 67]
print({i:j for i,j in zip(x,y)})
```

### 集合Set

```python
add(x)
pop()
remove(x)

A∪B、A∩B、差集、对称差集：| & - ^
子集：< >

```

## Control Structures

### If statement

```python
if condition:
    # statement(s)
elif condition:
    # statement(s)
elif condition:
    # statement(s)
else:
    # statement(s)
```

### For Loop

```python
nums = [1, 3, 6, 2, 4]

for i in range(len(nums)):
    # statement(s)

for v in nums:
    # statement(s)

for i, v in enumerate(nums):
    # statement(s)
```

### While Loop

```python
while condition:
    # statement(s)
```

### break & continue

## Function

```python
def func()
```



```python
str(12)     # '12'
id()        # 返回变量值的内存地址
```

### Range

```python
range(5)        # [0, 1, 2, 3, 4]
range(1, 5)     # [1, 2, 3, 4]
range(1, 5, 2)  # [1, 3]
```


## pythonic编程技巧

> 创建时间：2021年4月22日，更新时间：2021年8月27日

```py
import this    # python之禅
```

### 1. 变量的交换(Swapping Variables)

```py
# other
tmp = a
a = b
b = tmp

# python
a, b = b, a
```

### 2. 字符串格式化(String Formatting)

```py
#组合/拼接字符串
name = "Ross"
country = "China"
age = 28

print("Hi, I'm " + name + ". I'm from " + country + ". And I'm " + str(age) + ".")
# str%()
print("Hi, I'm %s. I'm from %s. And I'm %d." % (name, country, age))
# str.format()
print("Hi, I'm {}. I'm from {}. And I'm {}.".format(name, country, age))
print("Hi, I'm {0}. I'm from {1}. And I'm {2}.".format(name, country, age))
print("该商品价格为：{0:.2f}".format(price))
print(f"Hi, I'm {name}. I'm from {country}. And I'm {age}.")
# f-string
print(f"该商品价格为：{price+1:.2f}")
```

### 3. Yield 语法(Yield Statement)

```py
# 列举斐波那契数列前n的和
def fibonacci(n):
    a, b = 0, 1
    # nums = []
    for _ in range(n):
        # nums.append(a) -->> yield a
        yield a    # 立即输出，无需等待加载完毕再输出(极大减少程序耗时)
        a, b = b, a+b
    # return nums

for i in fibonacci(10):
    print(i)
```

### 4. 列表解析式(List Comprehension)

```py
# 常规
files = ['a.py', 'b.docx', 'c.txt', 'm.py', 'uio.py', 'date.txt']
new_files = []
for f in files:
    if f.endswith('py'):
        new_files.append(f)

#------------------------------------------------------------------
files = ['a.py', 'b.docx', 'c.txt', 'm.py', 'uio.py', 'date.txt']
# python
new_files = [x for x in files if x.endswith('py')]
```

### 5. Enumerate 函数(Enumerate Function)

```py
files = ['a.py', 'b.docx', 'c.txt', 'm.py', 'uio.py', 'date.txt']
# for i in files:
#    print(i)
for i, x in enumerate(files):    # (i)索引,(x)内容
    print(i, x)

'''
0 a.py
1 b.docx
2 c.txt
3 m.py
4 uio.py
5 date.txt
'''

# 5.1 反向遍历(Looping Backwards)
files = ['a.py', 'b.docx', 'c.txt', 'm.py', 'uio.py', 'date.txt']
for i, x in enumerate(reversed(files)):
    print(i, x)

# 5.2 按顺序排序(Looping in Sorted Order)

files = ['a.py', 'b.docx', 'c.txt', 'm.py', 'uio.py', 'date.txt']
for i, x in enumerate(sorted(files)):
    print(i, x)
```

### 6. 字典的合并操作(Dictionary Merging)

```py
a = {"coulson": "123456", "shville": "abc123"}
b = {"tom": "123", "john": "12345"}

c = {}
for k in a:
    c[k] = a[k]
for k in b:
    c[k] = b[k]
#-----------------------------------------------
c = {**a, **b}    # 解包
```

### 7. 三元运算符(Ternary Operator)

```py
if score > 60:
    s = "pass"
else:
    s = "fail"
#-----------------
s = "pass" if score > 60 else "fail"
```

### 8. 序列解包(Sequence Unpacking)

```py
name = 'San Zhang'

str_list = name.split()
first_name = str_list[0]
last_name = str_list[1]

first_name, last_name = name.split()
```

### 9. With 语句(With Statement)

```py
f = open("somefile.txt", "r")
s = f.read()
f.close()
# 如果忘记关闭这个文件，python会一直占用这个文件的系统资源，直到程序完全退出
#对于小脚本来说不是什么事，但对于一个需要长时间在服务器里运行的程序，系统资源可能很快就被吃光，然后程序崩溃
with open('somefile.txt','r') as f:
    s=f.read()    #with之后的语句执行完毕后文件会自动关闭，不用手动调用close（）了
```
