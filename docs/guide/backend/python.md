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


### Input & Output

```python
a = input()
a = input("请输入: ")
a,b = input().split()                  # 输入两个字符串
a,b = map(int, input().split())        # 输入两个整数（用空格隔开）
a,b = map(int, input().split(','))     # 输入两个整数（用逗号隔开）
```

String%var
String.format(var)
f-String

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

## 常用数据类型

### List

```

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
```

### Range

```python
range(5)        # [0, 1, 2, 3, 4]
range(1, 5)     # [1, 2, 3, 4]
range(1, 5, 2)  # [1, 3]
```
