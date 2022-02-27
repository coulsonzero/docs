# Java

### Introduce
Java 可运行于多个平台，如Windows, Mac OS，及其他多种UNIX版本的系统。
Java 是平台独立的语言，用Java编写的应用程序不用修改就可以在不同的平台上运行。
Java 具有简单性、面向对象、分布式、健壮性、安全性、平台独立与可移植性、多线程、动态性等特点，能够适应几乎任何类型的应用程序的需求。

### HelloWorld

```java
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello World!");
    }
}
```

## Basic Concepts

### Comments

```java
// 单行注释
/* 多行注释 */

/**
 * 文档注释
 * @author coulsonzero
 * @version ${YEAR}-${MONTH}-${DAY} ${TIME}
 */
 ```

### Output

```java
System.out.print()                   // 不换行
System.out.println()                 // 换行
System.out.printf(str, var1, var2);  // 格式化字符串
```

### Input

```java
import java.util.Scanner;

Scanner sc = new Scanner(System.in);
String str = sc.nextLine();

//String str = new Scanner(System.in).nextLine();


nextByte()
nextShort()
nextInt()
nextLong()
nextFloat()
nextDouble()
nextBoolean()
next()         //word（不包括空格）
nextLine()    //complete line(可能包含空格)

hasNext()
hasNextInt()
hasNextDouble()
```

### Valiables Types

```java
public class Main {
    public static void main(String[] args) {
        // 整数
        byte a = 127;                  // -128 ~ 127
        short b = 32767;              // -32768 ~ 32767
        int age = 20;
        long num = 10_000_000_000L;  // plus "L"

        // 浮点型
        float PI = 3.14F;            // plus "F/f", 精度6-7位有效数字，很多情况下不能满足需求
        double price = 12.5;        // 可以plus "D/d": 12.5D

        char c = '\"';               // 单引号
        boolean online = true;
        String name = "shville";

        final int c = 3;                  // 常量(不能再修改)
        enum Color {red, blue, green};   // 枚举
    }
}
```

```java
byte  short int long (1,2,4,8)
float double         (4,8)
char                 (2)
boolean(true/false)  (1)    (0/1不可替代true/false)

//Ⅱ强制类型转换(Type Casting)--> 会损失精度
int a = (int) 3.14;    //3
double b = 42.571;
System.out.println((int)b); //42

//自动类型转换：不会丢失精度。根据内存大小。
```

* 变量是对对象的引用

* 局部变量(方法内)：声明数据类型+初始化
- 全局变量(类内)：声明数据类型，有默认值，可静态初始化
- 变量名不可重复，大小写敏感, 不能以数字开头，不能是关键字
- 标志符：字母、数字、美元符$、下划线_
- 源文件名：源文件名必须和类名相同,文件名的后缀为.java。

### 运算符

#### Math算术 (+ - * / %)


```java
1 + 2 + "hello" = "3hello"
15/3 = 5
15.0/3 = 5.0
```

#### 赋值运算(+= -= *= /= %=)

```java
// 如果右侧类型与左侧数据类型不通，则强制转换
long x += 5;
int x = (int) (x+5)

//java中后者数据类型如果与左侧不一致则报错
+= 与 = ...+...
```

#### 自增自减 (x++  x--  ++x  --x)

```java
x++    (先赋值再递增)
++x    (先递增再赋值)


int x = 34;
int y = ++x; //y is 35
---------------------------
int i = 34;
int j = i++; //j is 34
```

#### 逻辑(&& || !)

```java
短路原理
&& 当左侧为Fasle，则不再执行右侧
|| 当左侧为True， 则不再执行右侧
```

#### 关系运算(== != >  >=  <  <=   ?)

```java
condition ? expression1 : expression2;
int max = a > b? a : b;
```

#### Math

```java
Math.sqrt(x)    //平方根
Math.pow(x,a)   //平方
Math.random()：0-1之间的随机浮点数
Math.abs()
Math.round()
Math.ceil(7.3)  //8.0
Math.floor(7.7) //7.0
Math.max()
Math.min()
Math.PI
```

### 字符串String

```java
String name = "Coulson";
 //String不可变：内容不可变，引用可变==>节省内存占用
```

```java
//查
length():    长度 <-- len()
charAt():    字符 <-- a[i]
indexOf():   索引 <-- .index()
substring(): 子串

//改
concat(str)
String.join(sep, str1, str2, ...)
replace()
repeat()
strip()
trim()：删除两端空格
split("/")
toUpperCase()
toLowCase()

@判断
equals(): 覆盖则比较内容/默认引用    equals[IgnoreCase]
==:       基本数据类型：比较值；引用数据类型：比较内存地址
isEmpty(): 空串(长度为0，内容为空）
Blank()：空格串
contains()：包含 //in
startswith()
endswith()

if(str.length()==0)
if(str.equals(""))
if(str==null)   //null串（表示目前没有任何对象与该变量关联）


@转换
String => chars: str.toCharArray()
String => Bytes: str.getBytes()
String -> Array: str.split()/str.substring()

Array => String: Arrays.toString()
chars => String: new String(chars)

* int => String: Integer.toString(num)、String.valueOf(num)、"" + num
* String => int: Integer.parseInt(str)

* 判断数据类型
str instanceof String
```

### StringBuilder/StringBuffer

```java
// 字符串构造器（减少耗时，节约空间）
* String:        少量字符串操作,每次新建对象
* StringBuilder：单线程, 非线程安全
* StringBuffer： 多线程，synchronized线程安全
运行速度：StringBuilder > StringBuffer > String


//1.构造空字符串构造器
StringBulider s = new StringBulider();

//2.增删查改
s.length()

s.append()
s.insert(i, e)s
s.delete(start, end)
s.toString()
s.replace(start, end, e)
s.reverse()


* 链式编程
s.append(str1).append(str2).append(str3);
//转换
String => StringBuilder:
StringBuilder s = new StringBuilder(str)
StringBuilder => String: s.toString();
//字符串反转
return new StringBuilder(str).reverse().toString();
```

### 数组Array(collection of variables of same type: list)

```java
int[]   arr = new int[length];
int[]   arr = {1, 3, 5, 7, 9};
int[][] arr = {{1,2,3}, {4,5,6}};

// API
长度: arr.length
值:   arr[i]

// 自动导包
import java.util.Arrays;

// 排序（从低到高）
Arrays.sort(array)

// 输出数组
System.out.println(Arrays.toString(arr))

// Array -> List
Arrays.asList()

// 打印二维数组元素
Arrays.deepToString(arr)
Arrays.copeOf(arr, arr.length)
//arr数组对象的内存地址：[I@7a81197d
System.out.println(arr);
System.out.println(arr[0]);  //数据的默认值：0

// 二分查找：在有序数组a中查找v值，如果有则返回下标，否则返回负数值; ***为数据类型
binarySeach(arr, start, end, *** v)
```

```
索引越界：  ArrayIndexOutOfBoundsException
空指针异常：NullPointerException
```

### ArrayList<T>: 数组列表 （存储和访问数据更快）

LikedList<String>：链表 （操作数据更快：插入/删除/修改）


```java
import java.until.ArrayList;
import java.until.LikedList;

ArrayList<Integer> list = new ArrayList<Integer>();
LikedList<String>  list = new LikedList<String>();

增：add()
删：remove(), clear()
查：size(), get(), contains()
改：set()



//LikedList存储内存地址(或链接到)跟随它的元素，因为每个元素都包含一个链接到邻近的元素。
```

### HashMap<Key, value>: 哈希表 （存储键 : 值）

```java
import java.util.HashMap;

HashMap<Integer, Integer> dict = new HashMap<Integer, Integer>();

//不能包含重复keys

增：put()
删：remove()
查：get(key),size()
containsKey(),containsValue()
```

### HashSet<String>: 集合 （无重复元素的无序集合）

```java
import java.util.HashSet;
HashSet<String> set = new HashSet<String>();

add()
size()
//哈希表通过散列机制存储信息，哈希代码是用于确定唯一值的关键信息内容。基本上，HashSet中的每个元素都以其独特的哈希代码关联。
```

### LikedHashSet: 集合（可以记住元素插入次序的集合）

### List/Map/Set的使用方法

#### Collections

```java
import java.util.Collections;

Collections.sort(list);            //升序
Collections.reverse(List list);    //降序
Collections.shuffle(List list);    //随机排序
Collections.max(Collection c);
Collections.min(Collection c);
```

#### Iterator

```java
import java.util.Iterator;

Iterator<T> it = list.iterator();
while (it.hasNext) {
    T value = it.next()
    System.out.println(value);
}

hasNext()
next()
remove()
```

## Ⅱ  Conditions and Loops

流程控制

### if statement

```java
if (condition) {
    //statement;
} else if (condition) {
    ...
} else if (condition) {
    ...
} else {
    ...
}

/**
 * if:      至少一个
 * else if: 可以有多个
 * else:    可以没有
 * condition: 为了使变量能够在循环外重复使用，变量类型一般在循环外定义！
 */
```

### switch statement

```java
switch (expression) {
    case value1:
        //statements;
        break;      //optional
    case value2:
        ...;
        break;
    case value3:
        ...;
        break;
    default:      //optional
        ...;
        break;
}


String dayType = switch(day) {
    case 1, 2, 3, 4, 5 -> "Working day";
    case 6, 7 -> "Weekend";
    default -> "Invalid";
};

/**
* 开始->case 1->case 2->case n->结束🔚
* 存在case ... 符合条件则跳出，否则继续往下判断
* 没有break则继续穿透
* default可选,总是位于最后一段.如果所有case都为   False，则执行default
*/
```

### For Loops

```java
for (init; condition; increment) {
    ...
}
```

```java
for(int i=0; i < s.length; i++) {//statement}
for (int l=0,r=s.length-1; l < r; l++,r--) {//statement;}    // 双指针

// 如果希望在循环体外使用计数器的最终值,则在循环体外申明变量类型
```

### for each

```java
//遍历查询元素
for (variable : collection) {
    //statement
}
```

### while loops

```java
int i = 0;
while (condition) {
    // statement;
    i++;
}
```

### do...while loops

```java
do {
    statement;
    i++;
}
while condition;
// 至少执行一次
```

### for, while, do...while的区别

```
1) for & while loops 先判断再输出
     do...while 先输出再判断，所以至少会输出一次！
2) for loops 变量在循环语句内，变量不可再次使用；
3) 而while loops 变量在循环语句外，变量还可再次使用。
```

### Loop Control Statements

```
break    //跳出循环体
continue  //跳至此次循环进入下一循环
```

```java
// 仅跳出最内层循环(for)
...
while (...) {
    ...
    for (...) {
        ...
        if (condition) break/continue;
    }
}
```

```java
// goto跳出指定循环体(while)
...
***；
while (...) {
    ...
    for (...) {
        ...
        if (condition) break/continue ***;
    }
}
```

## Java类与对象

OOP :

* encapsulation（封装：隐藏数据）
* inheritance（继承：继承另一个类的全部"non-private"属性[变量和方法]用extends）
* polymorphism（多态性）
* abstraction.（抽象性）

### 封装

```java
//1、封装
public class Person {
    private int age;
    public void setAge(int age) {
        if(age>0) {
            this.age = age;
        }
    }
}
```

```java
// 标准类的封装
package Test;

public class Student {
    // 成员变量(用private来保护数据)
    private int id;
    private String name;
    private int age;
    private String address;
    // private final String name = "Coulson";  (常量, 没有setName方法）
    // private static String name = "Coulson"; (静态成员变量, 可以被所有成员共享.）
    // privete static final age = 20;

    // Constructors: 无参构造方法
    public Student() {...}

    // 带参构造方法
    public Student(String id, String name, String age, String address) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.address = address;
    }

    // 成员方法
    //Getters & Setters: 封装的基本构建块（private属性）
    public String getId() {
        return id;
    }
    public void setId(String id) {
        this.id = id;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getAge() {
        return age;
    }
    public void setAge(String age) {
        this.age = age;
    }
    public String getAddress() {
        return address;
    }
    public void setAddress(String address) {
        this.address = address;
    }

    //Behaviour: what student does
    //static修饰methods时：内置函数(只能调用有static修饰的属性)
    public static void show() {
        System.out.println(name)
    }
}
```

```java
// 封装类对象的调用
public static void main(String[] args) {
    Student s1 = new Student();    //*创建对象: 类名 对象名 = new 类名();
    s1.setId("001");
    s1.setName("coulson");
    s1.setAge("24");
    s1.setAddress("China");
    System.out.println(s1.getId()+"\t\t"+s1.getName()+"\t\t"+s1.getAge()+"\t\t"+s1.getAddress());

    Student s2 = new Student(id:"001", name:"coulson", age:"24", address:"China");
    System.out.println(s1.getId()+"\t\t"+s1.getName()+"\t\t"+s1.getAge()+"\t\t"+s1.getAddress());

}
```

### 修饰符

```
访问权限修饰符
* public: 对所有类可见
* protected: 同一包内的类和所有子类可见
* default: 同一包内可见
* private: 当前类可见

static静态修饰符
1. static修饰变量：
被类的所有对象共享（static静态修饰实例变量时，调用新建对象成员属性时，其他新建对象成员属性值也会改变；
也可通过类名来调用 (既可以通过新建对象名访问)
2. static修饰方法：只能访问static成员变量


final(最终态):
a.final变量:   常量，不可再次赋值, 没有setter方法.
b.final方法:   不可被重写.
c.final修饰类: 不可被继承.
d.final修饰新建引用对象类型，是指引用对象内存地址值不可变，但地址内的内容仍是可变的。）

* 返回值类型void : 表示该方法不会返回任何值(若return后面有值， 则需修改)
* 方法名 main:  main是主方法的默认方法名
```

## 继承

```java
class Dog extends Animal {
    //some code
}

/**
 * private属性和方法不可继承
 * super.var可访问超类私有属性
 */
```

```
* 适用场景：当需要使用有相同的成员属性和相同的成员方法时使用类的继承
* 示例：苹果和水果，猫(子类)和动物(父类), 学生和人，不支持同等类如猫狗之间用继承
* 继承特点：只支持单继承，不支持多继承(Son extends Father,Mother)，但可支持多层继承(class son entends Father{}; class Father extends Granddad{})
class 子类名 extends/implement 父类名 {}

* 继承类成员变量和成员方法的使用
super.***：超类引用(父类)
this.***:  代表所在类的对象引用（本类）

super() //调用父类成员数据和方法，会额外开辟内存空间

* 不同调用变量方法
var
this.variable
uper.variable

* 父类方法重写：
@Override    //注解：检查重写方法有无写错
public ...(...){}    //private私有方法不可重写；子类访问方法权限不能更低(public > default >private)

父类
void func(){}        //父类有public子类也得有
子类
public void func() {}    //去掉public也可以
```



### 包package(文件夹)

```java
一、用包对类分类管理
* 包的定义：package 包名;
* 建包：
手动：新建文件夹com，再建立文件夹MyTest，再把class类文件放在包最内层
自动：javac -d.className.java (CMD命令行执行)



二、导包：
假设需要用其他包中的文件
1. 方法1
package 本类所在包;
...
包路径.类名 对象名 = new 包路径.类名();
2. 方法2
package 本类所在包;
import 包路径.类名;
...
对象名 = new 类名();

```

### 多态

```java
//3、多态性（多个子类继承同一个超类，子类重写/重载超类方法）
class Animal {
    public void makeSound(){
        System.out.printIn("grr...");
    }
}


class Cat extends Animal {
    public void makeSound(){        //Method overriding方法重写--运行时的多态性
        System.out. println("Meow");
    }
}


class Dog extends Animal {
    @Override //判断方法重写是否有误
    public void makeSound(){
        System.out. printIn("woof");
    }
}


public static void main(String[]args){
    Animal dog = new Dog();
    Animal cat = new Cat();
}
/**子类重写超类的方法规则：
* 相同的返回值类型和参数
* 访问级别无法比重写的方法更为严格的访问级别（例如：如果超类方法声明为public，子类的重写方法既不能是private，也不能是protected）
* final or static 声明的方法无法重写
* 无法继承的方法无法重写
* 构造方法不能被重写
*/


/**
* 方法重写: 相同的方法名、返回值类型和参数
* 方法重载：相同的方法名，但返回值和参数类型不同 --编译时的多态性
*
*/
```

使用前提：

* 继承关系
* 方法重写
* 父类引用指向多个子类对象


```java
原始：Cat c = new Cat();
多态：Animal a = new Cat();
        Animal a;
        a = new Animal();
        a = new Cat();
多态成员访问特点：
        * 成员变量：编译看左边，执行看左边
        * 成员方法：编译看左边(父类有这个方法则通过)，执行看右边 (成员方法有重写，而成员变量没有)
优点：定义方法时，使用父类型作为参数，将来具体使用时用子类参与操作，减少代码。
弊端：不能访问子类的特有功能方法。

转型(父->子)：使用子类的特有功能
    Animal a = new Cat();
    a.eat();
    //a.playGame(); //子类特有，而父类没有，则报错
    解决方法：
    Animal a = new Cat();
    Cat c = (Cat)a;    //强制转换成子类
    c.eat();
    c.playGame();
转型(向上：子->父)：父类强转为子类后，其他子类需要使用父类
    Animal a = new Cat();
    Cat c = (Cat)a;
    a = new Dog();  //Animal d = new Dog();  新建对象d，占用内存；而a是原地更改对象
    //ClassCastException 类转换异常
    //Cat cc = (Cat) a;  //a指向Dog内存地址，而cc指向猫。java中赋值是引用内存地址。

```

### 抽象

```java
//4、抽象abstraction
abstract class Animal {
    int legs = 0;
    public int age;
    abstract void makeSound();
    public abstract int showAge();    // method() {...}
}


class Cat extends Animal {
    public void makeSound(){
        System.out.println("Meow");
    }
}


class Dog extends Animal {
    public int showAge() {
        return age;
    }
}




/**抽象规则：
*  抽象类
*  抽象方法
* 不能使用实例化（无法创建该类型的对象）
* 使用一个抽象类，必须从另一个类继承
*/
```

### 接口

```java
//Ⅰ接口Interfaces（完全抽象的类）


interface Animal {
    public void eat();
    public void makeSound();
}


class Cat implements Animal {
    public void makeSound(){
        System.out. printIn("Meow");
    }
    public void eat(){
        System.out. printIn("omnomnom");
    }
}


//一个类可以继承一个超类，但可以实现多个接口
```

```java
//泛型接口
public class Student{
    public <T> void show(T t){
        ...
    }
}

//泛型通配符
List<? extend Number> list = new ArayList<Integer>();
List<? super Number> list = new ArrayList<Object>();

//多个可变参数构造方法
public static int sum(int... a) {
   ...
}
public static String join(String sep,String... s){...}
```

### 类的转换

```java
//向上转换upcasting
Animal cat = new Cat();


//向下转换Downcasting(超类对象强制转换为它的子类)
Animal cat = new Cat();
((Cat) cat).makeSound();
```

### 类中类的几种形式


#### 1.匿名类(Anonymous Classes)

```java
class Machine {
    public void start {
        System.out.println("Starting...");
    }
    public static void main(String[] args) {
        Machine m1 = new Machine() {
            @Override         //@Override注释：显示地提示在重写代码
            public void start() {
                System.out.println("Wooooo");
            }
        };
        m1.start();    //"Wooooo"
         Machine m2 = new Machine();
         m2.start();     //"Starting"
    }
}
```

#### 2.内部类/嵌套类：private class

```java
class Robot {
    int id;
    Robot(int i) {
        id = i;
        Brain b = new Brain();
        b.think();

    }

    private class Brain {    //可以访问所有外部类地成员变量和方法，但它不能被任何外部类访问-> 人工智能
        public void think() {
            System.out.println(id + " is thinking");
        }
    }
}
```

#### 3.组合类

```
public class ...{ }
class ...{}
```

### HashCode( ) & Equals( )

```java
import java.util.Objects;

class Animal {
    String name;
    Animal(String n) {
        name = n;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Animal)) return false;
        Animal animal = (Animal) o;
        return Objects.equals(name, animal.name);
    }

/*
 *  精简写法
    @Override
    public boolean equals(Object o) {
        return ((Animal) o).name == this.name;
    }
*/
    @Override
    public int hashCode() {
        return Objects.hash(name);
    }
}

class Myclass {
    public static void main(String[] args) {
        Animal a1 = new Animal("Robby");
        Animal a2 = new Animal("Robby");
        System.out.println(a1 == a2);       //false，判断引用对象内存地址是否相等
        System.out.println(a1.equals(a2));  //true，判断引用对象内容是否相等
    }
}
```

### 枚举Enum(定义常量的集合，使用switch检查)


```java
//枚举Enums (定义常量的集合，使用switch检查)
enum Color {
    RED, BLUE, GREEN;
}
class EnumsDemo {
    public static void main(String[] args) {
        Color color = Color.RED;
        String str = switch (color) {
            case BLUE -> "1";
            case GREEN -> "2";
            case RED -> "3";
        };
        System.out.println(str);    //"3"
    }
}
```


## Exceptions, Lists, Thread & Files

### 异常处理 (为防止线程终止，需要用处理器捕获异常)

try - catch - finally

```java
// 捕获异常try - catch - finally
try {
    //some code
} catch (Exception e) {
    //some code to handle errors
} catch (IOException e) {
    ...
} finally {    //可选
    ...
}
```

throws

```java
//throws主动抛出异常
int div(int a, int b) throws ArithmeticException {
    if(b == 0){
        throw new ArithmeticException("Division by Zero");    //多个异常用逗号隔开
    } else {
        return a/b;
    }
}
```

assert（测试）

```java
* 断言: assert(如果condition为false则执行exception)
assert condition : exception;
// 需要主动启动断言(默认是禁止)
java -ea: ...
java -enablessertions ...
```

## Swing图形界面设计

```
格式：*** ... = new ...();

JFrame
JPanel
JDialog（对话框）
JMenuBar-JMenu-JmenuItem（菜单栏）
JPopupMenu（右键菜单）
ButtonGroup-JRadioButtonMenuItem
JTextField（单行文本）
JPasswordField
JTextArea（多行文本）
JLabel（标签）
JList<String>（列表框）
JComboBox<String>（下拉选择框）
JCheckBox（复选框）
JButton（按钮）
JRaidoButton（单选按钮）
JTable
```

```
1.新建窗口
2.新建组件，设置组件方法和监听行为
3.新建面板，并添加组件至面板
4.添加面板至窗口，并显示窗口
```

```java
import javax.swing.*;


public class Main {
    public static void main(String[] args) {
        // 1.新建窗口，设置点击"关闭"退出程序
                    JFrame jf = new JFrame("窗口测试");
        jf.setDefaultCloseOperation(WindowConstants.EXIT_ON_CLOSE);

        // 2.新建面板并布局；新建组件，设置组件事件响应，并添加组件至面板
        JPanel panel = new JPanel(...);
        JButton button = new JButton();
        button01.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                ...  //showNewWindow(jf);
            }
        });
        panel.add(button);

        // 3.添加面板至窗口，并显示窗体
        jf.add(panel);
        jf.setVisible(true);
    }

    public static void showNewWindow(JFrame relativeWindow) {
    JFrame newJf = new JFrame(String title);
    ...
    newJf.setVisable(True);
    }
}
```

```java
* @JFrame
import javax.swing.*;

基本必备方法：
// 1.创建窗口
JFrame jf = new JFrame(String title);
// 2.“关闭”响应
jf.setDefaultCloseOperation(JFram.EXIT_ON_CLOSE);
/**
* (WindowConstants）=>（JFrame)
* 参考值：
* EXIT_ON_CLOSE  //结束进程
* HIDE_ON_CLOSE  //隐藏窗口(不会结束进程)，再次调用setVisible(true)将再次显示
* DISPOSE_ON_CLOSE //销毁，如果所有窗口都销毁则自动结束进程
* DO_NOTHING_ON_CLOSE  //不执行任何操作, 点击关闭无效
*/
// 3.显示窗口(放置末尾)
jf.setVisible(true);


others:
// 位置居中(实际并未真正实现居中--> 如何调整窗口位置？)
jf.setLocationRelativeTo(null);
jf.setBounds(x,y,width,height);
// 图标
jf.setIconImage(Image image);
// 大小
jf.setSize(int width, int height);
// 是否可缩放
jf.setResizeable(boolean);
// 布局
jf.pack();
// 置顶显示
jf.setAlwaysOnTop(boolean);
// 是否可见
jf.setVisible(boolean);
// 销毁
jf.dispose();
// 是否处于显示状态
jf.isShowing();
// 添加面板
jf.add(panel, BorderLayout.SOUTH);
jf.setContentPane(panel);
```

```java
* @JMenuBar
// 菜单栏
JMenuBar menubar = new JMenuBar();
// 一级菜单
JMenu fileMenu = new JMenu(String menuName);
menubar.add(fileMenu);
// 一级菜单的子菜单
JMenuItem copy = new JMenuItem(String subMenuName, new ImageIcon(String imagePath));
fileMenu.add(copy);
fileMenu.addSeparator(); //分割线
```


```java
* @Dialog（对话框）
showMessageDialog    //WARNING_MESSAGE, 无输出
showConfirmDialog    //YES_NO_CANCEL_OPTION
showInputDialog      //PLAIN_MESSAGE
showOptionDialog    //ERROR_MESSAGE

JButton button = new JButton(String title);
button.addActionListener(new ActionListener() {
    @override
    public void actionPerdormed(ActionEvent e) {
        Object[] options = new Object[] {..., ..., ...};
        JOptionPane.show***Dialog(
            if,
            String ...,
            String ...,
            JOptionPane.PLAIN_MESSAGE
        );
        System.out.println(...);
    }
});

```


```java
@Button
@RadioButton
@JRadioButton
button01.addActionListener(new ActionListener() {
    @Override
    public void actionPerformed(ActionEvent e) {
        JButton button01 = (JButton) e.getSource();
        System.out.println("正在播放");
    }
});

@CheckBox
checkBox.addChangeListener(new ChangeListener() {
    @Override
    public void stateChanged(ChangeEvent e) {
        JCheckBox checkBox = (JCheckBox) e.getSource();
        System.out.println(checkBox.getText()+" 是否选中: "+checkBox.isSelected());
    }
});
* setFocusPainted(false);

        JRadioButton radioButton01 = new JRadioButton("男", true);
        JRadioButton radioButton02 = new JRadioButton("女");
        radioButton01.setFocusPainted(false);
//        radioButton01.setContentAreaFilled(false);
        radioButton02.setFocusPainted(false);


        ButtonGroup buttonGroup = new ButtonGroup();
        buttonGroup.add(radioButton01);
        buttonGroup.add(radioButton02);


        JPanel panel = new JPanel();
        panel.add(radioButton01);
        panel.add(radioButton02);
        jf.add(panel);
```

```java
@TextArea
//自动换行
setLinewrap(boolean);
setWrapStayleWord(boolean);
```


## 文件操作

* read File
  * new Scanner(new File(pathname)) -- fp.colse()
  * new Scanner(new FileInputStream(filepath), StandardCharsets.UTF_8))
* creat File
  * new Formatter(filepath)
* write File
  * fp.format(str, arg1, ...) -- fp.close()

```java
File.exists()
move()
read()
write()
size()
delete()
cope()
crateFile()
creatDirectory()
fp.getName()
```


### 读取文件

```java
//方法一：colse()
import java.io.File;

try {
    File file = new File(filepath);
    Scanner sc = new Scanner(file);  //Scanner sc = new Scanner(new File(pathname));
    while (sc.hasNext()) {
        System.out.println(sc.next());
    }
    sc.close();
} catch (FileNotFoundException e) {
    System.out.println("error");
}
```

```java
//方法二：try-with-resources 资源自动关闭
try (Scanner sc = new Scanner(new FileInputStream(filepath), StandardCharsets.UTF_8)) {
    while (sc.hasNext())
        System.out.println(sc.nextLine());
} catch (FileNotFoundException e) {
    e.printStackTrace();
}
```

### 写入文件

```java
/* Writting to File */
import java.util.Formatter;
...
try {
    //创建文件
    Formatter fp = new Formatter(filepath);
    //写入文件
    fp.format("%s %s %s", "1","John","Smith \r\n");    //1 John Smith
    fp.format("%s %s %s", "2","Amy","Brown");          //2 Amy Brown
    fp.close();
} catch (Exception e) {
    System.out.println("Error");
}
//如果文件已经存在，则覆盖
```

## 多线程

* extends Thread
  * new ClassName()
* implement Runnable
  * new Thread(new ClassName)


### Runnable 接口（推荐）

```java
/* Runable */
class classname implements Runable {
    @Override
    public void run() {
       //code
    }
}

class Main {
    public static void main(String[] args) {
        Thread t = new Thread(new  classname());
        t.start();

        try {
             Thread.sleep(1000);
        } catch (InterruptedException e) {
            //some code
        }
    }
}
```

### Thread 继承(开销大，不推荐)

```java
//1、Thread 继承(开销大，不推荐)
public class ThreadDemo extends Thread {
    public void run(){
        System.out.println("Hello");
    }
    public static void main(String[] args) {
        ThreadDemo t = new ThreadDemo();
        t.start();
    }
}


//2、Runnable 接口（推荐）
public class ThreadDemo implement Runnable {
    public void run(){
        System.out.println("Hello");
    }
    public static void main(String[] args) {
        Thread t = new Thread(new ThreadDemo);
        t.start();
    }
}


/**
* @执行时间计算
long start = System.currentTimeMillis();
...
long end = System.currentTimeMillis();
System.out.printf("执行时间%d ms\n", end-start);
*/


/**
* @sleep
try {
    Thread.sleep(1000);     //1000ms = 1s
} catch (InterruptedException e) {
    e.printStackTrace();
}
*/


//wait()
```




### Thread.sleep()

```java
try {
    Thread.sleep(1000);
} catch (InterruptedException e) {
    //some code
}
```

### System.currentTimeMillis()

```java
/**
* @执行时间计算
long start = System.currentTimeMillis();
...
long end = System.currentTimeMillis();
System.out.printf("执行时间%d ms\n", end-start);
*/

//wait()
```




