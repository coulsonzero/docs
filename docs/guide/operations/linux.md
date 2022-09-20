# Linux

## 1. 安装 VMware 虚拟机

## 2. 常见问题

### 2.1 安装 VMware 后打开虚拟机蓝屏

```
安装正确的VMware虚拟机版本和驱动
```

### 2.2 linux 虚拟机鼠标有时隐藏?

```
window中设置“打开鼠标指针轨迹“，并设置为”最短"
```

### 2.3 如何打开 linux 终端 ？

```
右键菜单"open Terminal"
```

### 2.4 如何复制内容至虚拟机

```
拖动window文件至虚拟机文件夹内即可,默认当前用户可执行
```

## 3. 使用 linux 终端

## 3. linux 常用命令

- ls (列出所有目录和文件)----ls -a
- shutdown(-h 关机，-r 重启)--shutdown -h now
- su ( 切换用户) -- su - root (为安全起见输入密码时不回显)
- exit
- clear (清屏)
- mkdir (创建目录)
- rm (删除文件/目录)
- pwd (当前目录)
- cd ~ (切换目录)
- mv (移动)
- cp (复制目录/文件)
- touch (创建空文件) --- touch dirName/fileName
- vim/vi (修改文件,yy 复制,dd 剪切,p 粘贴,u 撤销)--Esc 退出编辑后":wq"保存内容
- gedit (文件编译器)
- cat/more/less/tail (查看文件)
- find (查找文件)
- ll (查看目录/文件权限信息)
- chomd (修改权限: u 用户，g 同组成员, o 其他成员，r 可读 w 可写 x 可执行) -- chmod u=rwx, g=r, o=r test.txt
- tree
- tar -zxvf
- date (日期) --- date '+%Y/%m/%d'
- cal (日历)-----cal -y 2021
- free (内存)
- vmstat (虚拟内存统计)
- iostat
- du (磁盘)
- df (文件磁盘)
- top： cpu 占用
- chkconfig iptables off (关闭防火墙)
- ifconfig
- ping (网络)
- netstat (端口)--netstat -an
- ps (查看进程) -- ps -ef
- kill
- id (查询用户信息)
- who/whoami (查看当前用户名)/users
- passwd (修改密码)
- echo (输出命令)/printf
- history (查看命令历史记录)
- dig (域名解析)
- chmod (更改文件/目录权限)
- bc (计算器)
- uname -a (系统信息)

### Commands 命令大全

### 目录

```
列举：ls
切换：cd
查看：pwd
树列：tree

增：mkdir
删：rm
查：find
改：mv、cp
```

文件

```
增：touch
删：rm
查：cat、tail、more、less
改：vim、vi
```

解压

```
压缩：tar
解压：unzip
```

## 命令详情

### 目录/文件

#### ls

> 列出目录和文件

```shell
$ ls
# -a: 显示所有文件（包含隐藏文件）
# -l: 显示文件属性及权限等
$ ls -al    # 当前目录下
$ ls -al ~  # home根目录下
```

#### mkdir

> 新建目录

```shell
$ mkdir test
# -p: 创建多级目录
$ mkdir -p d1/d2/d3
```

#### rmdir

> 删除目录

```shell
$ rmdir test
# 删除多级目录(每层目录都需写出不可少！不推荐使用)
$ rmdir -p d1/d2/d3
# 删除多级目录(推荐使用)
$ rm -rf d1
```

#### rm

> 删除文件及目录

::: tip
`-i`: 询问确认是否删除

`-f`: 强制删除, 忽略不存在的文件, 不会出现警告信息

`-r`: 递归删除
:::

:::danger
linux 没有回收期，一旦删除非常难恢复，请谨慎操作
:::

```sh
# 删除文件
rm <filename>
rm -i file.txt  # 确认是否删除
rm -f file.txt  # 强制删除

# 删除目录
rm -r <foldername>
rm -rf ...      # 递归删除文件夹(著名操作)
```

#### mv

> 移动(重命名)文件/目录

```sh
# 移动
mv style.css ~/Downloads
# 重命名(当目录/文件不存在时)
mv test.css style.css
```

### 文件命令

| 文件内容显示命令 | 详情                                     |
| ---------------- | ---------------------------------------- |
| cat              | 显示文件内容, 从第一行开始               |
| nl               | 显示文件内容, 从第一行开始, 额外输出行号 |
| head             | 显示文件前 n 行内容, 默认前 10 行        |
| tail             | 显示文件后 n 行内容, 默认后 10 行        |
| more             | 分页显示文件内容                         |
| less             | 分页显示文件内容, 功能更多, 适合于大文件 |

#### touch

> 新建空文件

```sh
touch file.sh
```

#### cat

> 查看文件内容，适合于小文件, 由第一行开始显示文件内容

```sh
cat file.txt
```

#### nl

> 显示行号

```shell
$ nl style.css
# 如果有空行, 也列出行号
$ nl -ba style.css
```

#### head

> 显示文件的开头几行, 默认显示前 10 行

```sh
# 默认显示前10行
head file.txt
# 显示开头20行
head -n 20 file.txt
```

#### tail

> 显示文件的结尾几行(默认后 10 行)

```sh
# 默认显示最后10行
tail file.txt
# 显示最后的20行
tail -n 20 file.txt

# 显示末尾2行
tail [-n  2] file.txt
tail [-n -2] file.txt
# 显示开头2行
tail [-n +2] file.txt
# 显示第10行
tail -n +10 file.txt | head -1

# 从第18行开始显示
tail -n +18 file.txt
```

#### more

> 分页显示文件内容

```shell
$ more style.css
```

- `space键`：下一页
- `b键`：上一页
- `enter键`：下一行
- `/关键词`：搜索该关键词
- `q键`：退出

#### less

> 分页查看文件内容，适合于大文件

```shell
less file.txt
```

**快捷键**

- `space键`：下一页
- `b键`：上一页
- `enter键`：下一行
- `y键`：上一行
- `q键`：退出 less 分页查看模式
- `=键`：显示 less 页面详情
- `h键`：显示 less 帮助文档
- `/键`：显示 less 搜索模式，`n键`跳转

### vim

```shell
$ vim file.txt
```

- `i键`：编辑模式
- `esc键`：退出编辑模式, 再按`:wq` | `wq!` 保存退出 vim
- `dd`：剪切当前行
- `yy`：复制当前行
- `p`: 粘贴
- `:q`：退出 vim
- `:wq`：保存退出 vim
- `:wq!`：强制保存退出, 适合于只读权限文件
- `:set nu`：显示行号
- `:set nonu`：取消显示行号

### 磁盘管理

| linux 命令 | 详情      |
| ---------- | --------- |
| df         | disk free |
| du         | disk used |

#### df

> 磁盘容量

```shell
# 显示整体磁盘使用量
$ df
# 易读显示容量格式
$ df -h
# 显示指定目录下的容量
$ df -h /etc
```

#### du

> 查看当前目录下各文件内存占用

```shell
$ du -sh ./*

4.0K    ./README.md
4.0K    ./craco.config.js
4.0K    ./deploy.sh
4.0K    ./jsconfig.json
1.3G    ./node_modules
4.0K    ./package.json
 94M    ./public
608K    ./src
420K    ./yarn.lock
```
