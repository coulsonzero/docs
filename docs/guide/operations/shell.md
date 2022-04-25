# Shell

## Overview

### Hello World

```shell
echo "Hello World!"
```

### Variable

```shell
name="coulsonzero";
echo "Hello ${name}";
```

::: warning

1. 区分大小写
2. 赋值`=`前后不能有空格

:::

::: tip
**实用命令**

```sh
basePath=$(cd `dirname $0`/; pwd)
echo ${basePath}    # /Users/coulsonzero/Documents/web/docs
```

:::
### Comment

```shell
# This is a single-line comment.
```

### 执行 Bash shell 脚本

:::: code-group
::: code-group-item bash

```sh
sh deploy.sh
```

:::

::: code-group-item zsh

```zsh
source shellFile.sh
```

:::
::::

### If Statement

```sh
if [ ] then
    # statement(s)
elif [ ] then
    # statement(s)
else
    # statement(s)
fi
```

::: details 查看示例

```sh
name="coulson"

if [ ${name} == "coulsonAlpha" ]
then
    echo "hello ${name}"
elif [ "${name}zero" == "coulsonzero" ]
then
    echo "hi ${name}"
else
    echo "pass"
fi
```

### Case Statement

```sh
case ${name} in
    v1)
        # statement(s)
    ;;
    v2)
        # statement(s)
    ;;
    *)  # other
        # statement(s)
    ;;
esac
```

::: details 点击查看代码

```sh
name="coulsonAlpha"

function hello() {
    case ${name} in
        "coulsonZero")
            echo "Zero"
        ;;
        "coulsonAlpha")
            echo "Alpha"
        ;;
        *)
            echo "${name} is not a valid name"
        ;;
    esac
}

function main() {
    hello
}

main
```

:::

### Function

```sh
function main() {
    echo "Hello"
}

# 启动函数必须置于底部
main
```

### Input

```sh
read -p "请输入name: " read_name
# echo "Output: ${read_name}"
```

::: details 示例

```sh
name="coulsonAlpha"

function readUsername() {}
    read -p "输入用户名(默认：${name})：" read_username
    if [ ${read_username} ]
    then
        name=${read_username}
    fi
    echo "您输入的用户名为：${name}"
}

read_username
```

:::

### Output

```sh
echo "Hello World!"
```

### 自定义shell执行命令

::: warning
不可用function main() {}包裹！
:::

:::: code-group
::: code-group-item Bash

```sh
$ sh ./start.sh stop
> "Close"

$ sh start.sh start
> "running"

$ sh start.sh deploy
> "deploy无任何操作"
```

:::

::: code-group-item start.sh

```sh

if [ ${#} -ge 1 ]
then
    case ${1} in
        "start")
            echo "Running"
        ;;
        "stop")
            echo "Close"
        ;;
        *)
            echo "${1}无任何操作"
        ;;
    esac
else
    echo "
    command如下命令:
    start: 启动
    stop: 停止进程
    示例命令如：sh ./start.sh stop
    "
fi
```

:::
::::

::: details SpringBoot部署示例
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

- linux空格和window空格不一致

```sh
$ vim start.sh
# 添加此命令保存
set ff=unix
```