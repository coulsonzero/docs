# C

## Overview
### Hello World

```c
#include <stdio.h>

int main() {
    printf("Hello, World!\n");
    return 0;
}
// Output: Hello, World!
```
### Variable - Constant

```c
// variable
int num = 20;
// constant
const double PI = 3.14;


// multi-var
int x = 3, y = 5;
// assign value
y = x += 2;
```

### Data Type

```c
// integer  【修饰：short, long, unsigned(正数), signed(正负数均可)】
int num = 20;

// 浮点数：float、double、long double
double PI = 3.14;
float price = 123.672;

// char
char c = 'z';
// string
char name[] = "Tom Smith";
char text[100];
```

强制转换
```c
double price = 123.67;
printf("%d \n", (int)price);    // 123
```

内存占用大小
```c
// sizeof()
printf("size (short): %d \n", sizeof(short));       // 2
printf("size   (int): %d \n", sizeof(int));         // 4
printf("size  (long): %d \n", sizeof(long));        // 8
printf("size (float): %d \n", sizeof(float));       // 4
printf("size(double): %d \n", sizeof(double));      // 8
printf("size  (char): %d \n", sizeof(char));        // 1
printf("size(string): %d \n", sizeof(char[10]));    // 10
```

### Output - Input

**input**
```c
getchar()   // char
gets()      // string
fgets()
scanf()     // important
```

example
```c
char s[100];
fget(s, 100, stdin);

int num;
float price;
char name[100];
scanf("%d %f %c %[^\n]s", num, price, c, name);
```

**output**
```c
printf()
putchar()   // append a char
puts()      // append a string
fput()
```

example
```c
printf("int: %d, float: %f, double: %.2f, character: %c, string: %s", num, price, salary, letter, name);

char s[] = "hello";
putchar('-');
puts("world");
// output: hello-world

fput(s, stdout);
```

### Comments

```c
// This is a single line comments.

/*
    * This is a multi-line comments.
    * 1. ***
    * 2. ***
    */

/**
 * This is a documents comments.
 * @author: shville
 * @date: 2023-06-11
 */
```

### Operator

```c
/**
 * arithmetic operators : + - *  / %
 * assignment operators : += -= *= /= %=
 * increment & Decrement: i++ i-- ++i --i
 * comparison operators : == != < > <= >=
 * && || !
 * a ? b : c
 */

```

## Core

### String

```c
#include <string.h>
```

```c
// init
char s1[6];
char s2[6] = "hello";    // size: 6
char s3[6] = {'h', 'e', 'l', 'l', 'o', '\0'};
char s4[ ] = {'h', 'e', 'l', 'l', 'o', '\0'};

char *ss1;
char *ss2[6];
char *s = "hello";
```

```c
strlen(s)
strcat(s1, s2)
strcpy(dst, src)
sizeof s

// assign (error: s = "Tmo")
sprintf(s, "Batman Joker")
strcpy(s, "Batman Joker")
```

**string input-output**

```c
char s[100];

printf("Enter a text line: ");
fgets(s, 100, stdin);   // scanf("%[^\n]s", s);
fputs(s, stdout);       // printf("%s\n", s);
```

**string-int**
```c
#include <stdlib.h>
```
```c
char s[100] = "120";
int num = atoi(s)   // 120
```

**char**
```c
#include <ctype.h>
```

```c
toupper()   // c-'a'+'A'
tolower()   // c-'A'+'a'
```

### Arrays

```c
// array init
int nums[5];
int nums[5] = {1, 3, 5, 7, 9};


// change element
nums[1] = 9;
// print the value of element
printf("nums[1]: %d\n", nums[1]);   // 9

// iter
for (int i = 0; i < 5; i++) {
    printf("[%d]: %d\n", i, nums[i]);
}

```


```c
// two-dimensional arrays
int nums[2][3];
int nums[2][3] = {{1,2,3}, {4,5,6}};


for(int i = 0; i < 2; i++) {
    for (int j = 0; j < 3; j++) {
        printf("%d ", nums[i][j]);
    }
    printf("\n");
}
```

### Pointer

**pointer-variable**
```c
void *ptr;
int x = 12;
float y = 3.14;
char c = 'z';

ptr = &x;
printf("%d\n", *(int*)ptr);       // 12
ptr = &y;
printf("%.2f\n", *(float*)ptr);   // 3.14
ptr = &c;
printf("%c\n", *(char*)ptr);      // z
```

**pointer-function**
```c
#include <stdio.h>

void*  square(const void* num);

int main() {
    int x = 6;
    printf("output: %d\n", square(&x));     // 36

    return 0;
}


void*  square(const void* num) {
    return (*(int*)num) * (*(int*)num);
}
```

**pointer-function-template**
```c

```