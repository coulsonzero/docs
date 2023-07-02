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
char s[6];
char s[6] = "hello";    // size: 6
char s[6] = {'h', 'e', 'l', 'l', 'o', '\0'};
char s[ ] = {'h', 'e', 'l', 'l', 'o', '\0'};

char *s;
char *s[6];
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
int nums[ ] = {1, 3, 5, 7, 9};


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


## preprocessor

```c
/**
 * preprocessor
 * #include
 * #define, #undef
 * #ifdef, #ifndef, #if, #elif, #else, #endif
 * #pragma
 * #error, #warning
 */
```

### #define
```c
// define a var
#define PI 3.14
// define a function
#define AREA(r) PI*r*r
// define a template
#define __Tmp__ template <class T>
```

```c
/* == grammar == */

// a) line break `\`
#define VERY_LONG_CONSTANT \
23.678901

// b) ignore space
#   define SQUARE(x) \
    x*x

// c) bracket `()`
#define MAX(A, B) ((A) > (B) ? (A) : (B))
```

::: details example

```c
#include <stdio.h>

#define PI 3.14
#define AREA(r) PI*r*r
#define MAX(A, B) ((A) > (B) ? (A) : (B))


#define VERY_LONG_CONSTANT \
23.678901
#    define SQUARE(x) \
     x*x

int main() {
    float r = 2;
    printf("PI: %3.2f\n", PI);          // 3.14
    printf("Area: %5.2f\n", AREA(r));   // 12.56
    printf("%d\n", MAX(3, 5));   // 5

    return 0;
}
```
:::


### #define pre
```c
printf("%s %s\n", __TIME__, __DATE__);
printf("This is a line %d\n", __LINE__);
printf("File Name: %s\n", __FILE_NAME__);

// int std_c;
// std_c = __STDC__;
// printf("STDC is %d\n", std_c);
printf("STDC is %d\n", __STDC__);
```

### #ifndef

```c
#ifdef / #ifndef
#else
#endif

#define / #undef
```



```c
// 1. #ifndef
#ifndef TERM
    #define TERM 24
#endif

// 2. #ifdef
// #ifdef RATE
//     #undef RATE
//     #define RATE 0.068
// #else
//     #define RATE 0.068
// #endif

// 2. #ifdef-#undef-#endif
#ifdef RATE
    #undef RATE
#endif
#define RATE 0.068


#ifdef TRIPLE
    #define SQR(X) (x)*(x)
#else
    #define TRIPLE(x) (x)*3
#endif
```

### #if-statement

```c
// 1. #if-statement: only print once result.
// 2. #if defined(LEVEL)  =  #ifdef LEVEL
//    #if !defined(LEVEL) =  #ifndef LEVEL
```

```c
#if
#elif
#else
#endif
```

:::details example
```c
#include <stdio.h>

#define LEVEL 7

// 1. #if-statement: only print once result.
// 2. #if defined(LEVEL)  =  #ifdef LEVEL
//    #if !defined(LEVEL) =  #ifndef LEVEL

int main() {
    int num = 0;

    // only exec once
    #if LEVEL > 6
        // statement
        num = 1;
    #elif LEVEL > 5
        // statement
        num = 2;
    #elif LEVEL > 4
        // statement
        num = 3;
    #else
        // statement
        num = 4;
    #endif
    printf("num: %d\n", num);
    // output: 1


    // defined()
    #if defined(_CLASS) || defined(LEVEL)
        printf("%s\n", "defined lever");
    #else
        printf("%s\n", "not defined");
    #endif
    // output: defined lever



    #ifndef LEVEL
        printf("%s\n", "not defined lever");
    #else
        printf("%s\n", "defined lever");
    #endif
    // output: defined lever

    return 0;
}
```
:::

### macro-operator

```c
// #x -> "x"
#define TO_STR(x)       #x
// x##y -> xy   is a variable
#define VAR(name, num)  name##num   // VAR(x, 3)    -> x3
#define CONCAT(x, y)    x##y        // CONCAT(x, y) -> xy
```

:::details example
```c
#include <stdio.h>
#include <string.h>

// #x: stringification operator(convert a parameter to a string constant).
// #x -> "x"
#define TO_STR(x)       #x
#define STRLEN(x)       strlen(x)
// x##y -> xy   is a variable
#define VAR(name, num)  name##num   // VAR(x, 3)    -> x3
#define CONCAT(x, y)    x##y        // CONCAT(x, y) -> xy

int main() {
    printf("%s\n", TO_STR(123\12));         // 123
    printf("%s\n", TO_STR(123\\12));        // 123\12
    printf("%s\n", TO_STR(123\\\12));       // `123\`
    printf("%s\n", TO_STR(123\\\\12));      // 123\\12


    printf("%d\n", STRLEN(TO_STR(12345)));  // strlen("12345"): 5

    int x1 = 125, x2 = 250, x3 = 500;
    printf("%d\n", VAR(x, 1));            // x1: 125
    printf("%d\n", VAR(x, 2));            // x2: 250
    printf("%d\n", VAR(x, 3));            // x3: 500

    int x = 4, y = 5;
    int CONCAT(x, y) = x + y;       // CONCAT(x, y) -> xy = x + y
    printf("%d\n", xy);             // 9


    return 0;
}
```
:::

### #error

```c
#if defined(LEVEL)
    #error "_DARWIN_UNLIMITED_STREAMS specified, but -miphoneos-version-min version does not support it."
#elif
    #error "_DARWIN_UNLIMITED_STREAMS specified, but -mmacosx-version-min version does not support it."
#endif
```



