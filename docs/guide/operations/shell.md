# Shell

## Overview

### Hello World

:::tip
shell 文件以 `.sh` 为后缀

使用 `bash main.sh` 命令执行 shell 脚本

可定义输入参数进行终端`交互`： `bash main.sh start -l`

#!声明bash解释器的位置 `#!/bin/bash`, 因为可能会有多个bash版本, 如果升级了bash版本后可设置为 `#!/usr/bin/env bash`
:::

**hello.sh**
```sh
#!/bin/bash

echo "Hello World!"
```

### Variable
::: warning

1. 区分大小写
2. 赋值`=`前后不能有空格

:::

**变量定义**
```sh
# 方式一: 直接初始化变量值
name="john"

# 方式二: 通过命令获取并设置变量值
export CURPATH="$(cd .. && pwd)"
count=$(ps -ef | grep -c "ssh")

# 方式三: 读取终端输入参数
read -t 20 -p "enter version >>> " version
```

**变量使用**
```sh
# 方式一："$p"
# 使用变量
"$name" "$CURPATH"
# 控制台输入参数
"$#"   "$1"   "$2"

# 方式二: $p
$CURPATH

# 方式三: ${p}
${p}  ${#}
```

**变量的操作**
```sh
# 只读(不可更改)
readonly name
# 删除
unset name
```

变量类型
- 环境变量
- 局部变量
- shell变量


**示例**

```sh
basePath=$(cd public && pwd)
echo ${basePath}    # /Users/coulsonzero/Documents/web/public
```

### 控制台输入参数

:::tip
从终端传递参数作用:
1. 进行`终端交互`
2. 设置`可执行权限`
:::

```sh
$0          # sh文件名(路径)
$#          # 所有从终端传递到shell脚本的参数的数
$1  $2  $3  # 输出参数
```

**输入参数示例**

```sh
# bash | sh
$ bash push.sh dev      # $#: 2, #0: "push.sh", $1: "dev"
$ bash push.sh tag -d   # $#: 3, $0: "push.sh", $1: "tag", $2="-d"
```

**输入参数数量**

```sh
# 判断输入参数数量 > 1 ？
if [ $# -ge 1 ]; then
    # statement
else
    # statement
fi
```

**输入参数值**

```sh
# 判断第二个输入参数是否为'-l'
if [[ "$2" == "-l" ]]; then
    # statement
# 判断第二个输入参数是否为空 -z 相当于 ! -n
elif [[ -z $2 ]]; then
    # statement
else
    echo "undefined the second argument"
fi
```


### string

```sh
"hello shell !"     # 初始化
"hello $name"       # 字符串格式化
${#name}            # 长度
${#name:1:4}        # 子串切片
`expr index "$name" io` # 查找字符i或o在字符串中的索引
```

### array

```sh
arr=("apple", "pie", "pear")
arr[0]="orange"     # arr[i]设置值
${arr[i]}           # 读取数组值
${arr[@]}           # 读取数组所有元素
${#arr[@]}          # 数组长度
${#arr[*]}          # 数组长度
```

### Comment

```sh
# This is a single-line comment.

:<<EOF
This is a milt-line comment
EOF

:<<'
This is a milt-line comment also
'

:<<!
This is a milt-line comment also
!
```

### Input & Output

**input**
```sh
# -t 等待时间(秒), -p 提示输入
read -p "Enter name: " name
read -t 30 -p "Enter name: " name
```

**output**

```sh
echo "Hello World!"

# 字符串格式化输出
echo "hello $name"

# 换行输出
echo -n "please enter your name: "


printf "Input a character: " # 定义输出前缀
printf "\nletter\n"
```

### Symbols


```sh
# && 命令顺序执行
cd test && pwd
# |  管道 （连结上个指令的标准输出，做为下个指令的标准输入）
who | wc -l
```

### operators

```sh
&& || !
# ==
-eq
# !=
-ne
# >
-gt
# <
-lt
# >=
-ge
# <=
-le
```

### If Statement



```sh
# 写法一
if [ ]; then
    # statement(s)
elif [ ]; then
    # statement(s)
elif [ ]; then
    # statement(s)
else
    # statement(s)
fi

# 写法二
if [ ]
then
    # statement(s)
elif [ ]
then
    # statement(s)
elif [ ]
then
    # statement(s)
else
    # statement(s)
fi


# 写法二
if   [ ]; then echo "a"
elif [ ]; then echo "b"
elif [ ]; then echo "c"
else echo "other"
fi
```

**Tips**
```sh
# [ ]中间需要空格隔开!
# ==
if [ "$p" = "--l" ]
# !=
if [ "$p" != "--l" ]

# 长度不为0 (not null)
if [ -n "$p" ]
# 长度为0 (null)
if [ -z "$p" ]     # ! -n "$p"

if [ ! -f run.bash ]
```

**其他写法**
```sh
# ==
if [[ $p == "--l" ]]
# -z
if [[ ! -n "$p" ]]

# [[ ]] 里面可以直接使用 &&
if [[ && ]]
if [  ] && [ ]
```

**示例**
```sh
if [ $(ps -ef | grep -c "ssh") -gt 1 ]; then echo "true"; fi
```

### Case Statement

> case可以使用通配符，写起来更简洁明了，但是不能使用-z之类的判断！

```sh
case "$1" in
    "dev"   ) bash dev-push.sh                        ;;
    "master") bash master-push.sh                     ;;
    "both"  ) bash dev-push.sh && bash master-push.sh ;;
    "tag"   ) main                                    ;;
    *       ) echo   "not input argument"             ;;
esac


# 写法二
case $1 in
    "dev"   ) bash dev-push.sh
    ;;
    "master") bash master-push.sh
    ;;
    "both"  ) bash dev-push.sh && bash master-push.sh
    ;;
    "tag"   ) main
    ;;
    *       ) echo   "not input argument"
    ;;
esac
```

**示例**

```sh
case $str in
    [a-zA-Z] ) echo "字母" ;;
    [0-99999]) echo "数字" ;;
    [,.?!]   ) echo "符号" ;;
    *        ) echo "其他" ;;
esac
```

### For Loop

```sh
for i in "$*"; do
    echo $i
done
```

### While Loop

```sh
i=1
while(( $i<=5 )); do
    echo $i
    let "int++"
done
```

### break and continue

```sh
while :
do
    echo -n "输入 1 到 5 之间的数字:"
    read num
    case $num in
        1|2|3|4|5) echo "你输入的数字为 $num!"
        ;;
        *) echo "你输入的数字不是 1 到 5 之间的! 游戏结束"
            continue echo "游戏结束"    # break
        ;;
    esac
done
```



### Function

```sh
function main() {
    echo "Hello"
}

# 启动函数必须置于顶部
main
```



### 执行 Bash shell 脚本

```sh
# 执行shell文件
sh deploy.sh
bash deploy.sh

# 刷新
source shellFile.sh
```

### 自定义 shell 交互命令


:::: code-group
::: code-group-item Bash

```sh
$ sh ./start.sh stop
> "close"

$ sh start.sh start
> "running"

$ sh start.sh deploy
> "deploy无任何操作"
```

:::

::: code-group-item start.sh

```sh
#!/bin/bash

if [ ${#} -ge 1 ]
then
    case $1 in
        "start") echo "running"      ;;
        "stop" ) echo "close"        ;;
        *      ) echo "$1无任何操作"   ;;
    esac
else
    echo "
    [基础命令]
    1) start: 启动
    2) stop : 停止进程

    示例：bash main.sh start
    "
fi
```

:::
::::




### exit

```sh
# 直接退出shell脚本, 后续命令不再执行
exit 0  # success
exit 1  # failure: 非0
```

## 示例

### golang项目push

::: details golang项目发布
```sh
#! /bin/bash

export CUR="shell"

# shellcheck disable=SC2120
function main() {
   if [ "$2" = "-d" ]; then         # 判断第二个输入参数为'-d' ?
       bash tag-delete.sh
   elif [ -z "$2" ]; then           # 判断第二个输入参数为空 ?
       bash tag-release.sh
   else                             # 只有一个输入参数
       echo 'undefined the second argument '
   fi
   exit 0
}

# shellcheck disable=SC2164
cd $CUR
# 判断输入参数数量 > 1 ？
if [ ${#} -ge 1 ]; then
  case "$1" in
    "dev"   ) bash dev-push.sh                        ;;
    "master") bash master-push.sh                     ;;
    "both"  ) bash dev-push.sh && bash master-push.sh ;;
    "tag"   ) main                                    ;;
    *) echo   "not input argument"                    ;;
  esac
else
    echo "
    [Bash基础命令]:
    1) dev    : 推送dev
    2) master : 推送master
    3) both   : 同时推送dev与master
    4) tag    : 推送tag
    5) tag -d : 删除tag

    命令示例: sh push.sh dev
    "
fi

```
:::

### SprintBoot部署

::: details SpringBoot 部署示例

```sh
#!/usr/bin/env bash
#可变参数变量
languageType="javac" #支持 java,javac,netcore 发布
#参数值由pom文件传递
baseZipName="${package-name}-${activeProfile}" #压缩包名称 publish-test.zip的publish
packageName="${package-name}" #命令启动包名 xx.jar的xx
mainclass="${boot-main}" #java -cp启动时，指定main入口类;命令：java -cp conf;lib\*.jar;${packageName}.jar ${mainclass}

#例子
# baseZipName="publish-test" #压缩包名称 publish-test.zip的publish
# packageName="publish" #命令启动包名 publish.jar的xx

#固定变量
basePath=$(cd `dirname $0`/; pwd)
baseZipPath="${basePath}/${baseZipName}.zip"  #压缩包路径
baseDirPath="${basePath}" #解压部署磁盘路径
pid= #进程pid

#解压
function shenniu_unzip()
{
    echo "解压---------------------------------------------"
    echo "压缩包路径：${baseZipPath}"
    if [ ! `find ${baseZipPath}` ]
    then
        echo "不存在压缩包：${baseZipPath}"
    else
        echo "解压磁盘路径：${baseDirPath}/${baseZipName}"
        echo "开始解压..."

        #解压命令
        unzip -od ${baseDirPath}/${baseZipName} ${baseZipPath}

        #设置执行权限
        chmod +x ${baseDirPath}/${baseZipName}/${packageName}

        echo "解压完成。"
        fi
}

#检测pid
function getPid()
{
    echo "检测状态---------------------------------------------"
    pid=`ps -ef | grep -n ${packageName} | grep -v grep | awk '{print $2}'`
    if [ ${pid} ]
    then
        echo "运行pid：${pid}"
    else
        echo "未运行"
    fi
}


#启动程序
function start()
{
    #启动前，先停止之前的
    stop
    if [ ${pid} ]
    then
        echo "停止程序失败，无法启动"
    else
        echo "启动程序---------------------------------------------"

        #选择语言类型
        read -p "输入程序类型(java,javac,netcore)，下一步按回车键(默认：${languageType})：" read_languageType
        if [ ${read_languageType} ]
        then
            languageType=${read_languageType}
        fi
        echo "选择程序类型：${languageType}"

        #进入运行包目录
        cd ${baseDirPath}/${baseZipName}

        #分类启动
        if [ "${languageType}" == "javac" ]
        then
            if [ ${mainclass} ]
            then
                nohup java -cp conf:lib\*.jar:${packageName}.jar ${mainclass} >${baseDirPath}/${packageName}.out 2>&1 &
               #nohup java -cp conf:lib\*.jar:${packageName}.jar ${mainclass} >/dev/null 2>&1 &
            fi
        elif [ "${languageType}" == "java" ]
        then
            nohup java -jar ${baseDirPath}/${baseZipName}/${packageName}.jar >/dev/null 2>&1 &
            # java -jar ${baseDirPath}/${baseZipName}/${packageName}.jar
        elif [ "${languageType}" == "netcore" ]
        then
            #nohup dotnet run ${baseDirPath}/${baseZipName}/${packageName} >/dev/null 2>&1 &
            nohup ${baseDirPath}/${baseZipName}/${packageName} >/dev/null 2>&1 &
        fi

        #查询是否有启动进程
        getPid
        if [ ${pid} ]
        then
            echo "已启动"
            #nohup日志
            tail -n 50 -f ${baseDirPath}/${packageName}.out
        else
            echo "启动失败"
        fi
    fi
}


#停止程序
function stop()
{
    getPid
    if [ ${pid} ]
    then
        echo "停止程序---------------------------------------------"
        kill -9 ${pid}

        getPid
        if [ ${pid} ]
        then
            #stop
            echo "停止失败"
        else
            echo "停止成功"
        fi
    fi
}


#启动时带参数，根据参数执行
if [ ${#} -ge 1 ]
then
    case ${1} in
        "start")
            start
        ;;
        "restart")
            start
        ;;
        "stop")
            stop
        ;;
        "unzip")
            #执行解压
            shenniu_unzip
            #执行启动
            start
        ;;
        *)
            echo "${1}无任何操作"
        ;;
    esac
else
    echo "
    command如下命令：
    unzip：解压并启动
    start：启动
    stop：停止进程
    restart：重启

    示例命令如：./shenniu_publish start
    "
fi

```

:::


## FAQ

- name: command not found

```sh
# 变量赋值"="前后不能有空格
name="coulsonzero"
```

- [] & if[ ]: command not found

```sh
# if [ ]: 中间需要空格
if [ ${pid} ]
then
    echo "great"
else
    echo "pope"
fi
```

- linux 空格和 window 空格不一致

```sh
$ vim start.sh
# 添加此命令保存
set ff=unix
```

