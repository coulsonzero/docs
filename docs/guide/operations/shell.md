# Shell



## Overview

### Hello World

```shell
echo "Hello World!"
```

### Variable

```shell
$name = "shville";
echo "Hello ${name}";
```

### Comment

```shell
# This is a comment.
```


### 执行Bash shell脚本

```ssh
source shellFile.sh
```

## Bash Shell命令
### 常规命令
#### ls
> 列出所有目录和文件


### 目录/文件
#### mv
> 移动(重命名)文件/目录

```sh
# 重命名文件(夹)
mv test.css style.css
# 移动文件(夹)
mv style.css ~/Downloads
```

#### rm
> 删除文件(夹)
> linux没有回收期，一旦删除非常难恢复，请谨慎操作

```sh
# 向用户确认是否删除
rm -i file.txt
# 强制删除
rm -f file.txt
# 递归删除文件夹(著名操作)
rm -rf ...

# 删除目录
rm -r vuepress-satrter
```

### 目录
#### mkdir
> 新建目录
```shell
mkdir Shell-Learning
```
### 文件命令
#### touch
> 新建空文件

```sh
touch file.sh
```
#### cat
> 查看文件内容，适合于小文件
```sh
cat file.txt
```
#### less
> 分页查看文件内容，适合于大文件

```shell
less file.txt
```

**快捷键**

- `space键`：下一页
- `b键`：上一页
- `return键`：下一行
- `y键`：上一行
- `q键`：退出less分页查看模式
- `=键`：显示less页面详情
- `h键`：显示less帮助文档
- `/键`：显示less搜索模式，`n键`跳转

#### head
> 显示文件的开头几行

```sh
# 显示开头3行
head -n 3 file.txt
```

**以下会报错**

~~`head -n -3 file.txt`~~
#### tail
> 显示文件的结尾几行(默认后10行)

```sh
# 显示末尾2行
tail [-n  2] file.txt
tail [-n -2] file.txt
# 显示开头2行
tail [-n +2] file.txt
# 显示第10行
tail -n +10 file.txt | head -1
```
