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