# Linux

## 1. 安装VMware虚拟机

## 2. 常见问题

### 2.1 安装VMware后打开虚拟机蓝屏

```
安装正确的VMware虚拟机版本和驱动
```

### 2.2 linux虚拟机鼠标有时隐藏?

```
window中设置“打开鼠标指针轨迹“，并设置为”最短"
```


### 2.3 如何打开linux终端 ？

```
右键菜单"open Terminal"
```

### 2.4 如何复制内容至虚拟机

```
拖动window文件至虚拟机文件夹内即可,默认当前用户可执行
```

## 3. 使用linux终端

## 3. linux常用命令

- ls (列出所有目录和文件)----ls -a
- shutdown(-h关机，-r重启)--shutdown -h now
- su ( 切换用户) -- su - root (为安全起见输入密码时不回显)
- exit
- clear (清屏)
- mkdir (创建目录)
- rm (删除文件/目录)
- pwd (当前目录)
- cd ~  (切换目录)
- mv (移动)
- cp (复制目录/文件)
- touch (创建空文件) --- touch dirName/fileName
- vim/vi (修改文件,yy复制,dd剪切,p粘贴,u撤销)--Esc退出编辑后":wq"保存内容
- gedit (文件编译器)
- cat/more/less/tail (查看文件)
- find (查找文件)
- ll (查看目录/文件权限信息)
- chomd (修改权限: u用户，g同组成员, o其他成员，r可读w可写 x可执行) -- chmod u=rwx, g=r, o=r test.txt
- tree
- tar -zxvf
- date (日期) --- date '+%Y/%m/%d'
- cal (日历)-----cal -y 2021
- free (内存)
- vmstat (虚拟内存统计)
- iostat
- du (磁盘)
- df (文件磁盘)
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


## Bash Shell 命令
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

::: tip
`-i`: 确认是否删除

`-f`: 强制删除

`-rf`: 递归强制删除, 不易恢复
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

### 目录

#### mkdir

> 新建目录

```shell
mkdir vue-project
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
- `q键`：退出 less 分页查看模式
- `=键`：显示 less 页面详情
- `h键`：显示 less 帮助文档
- `/键`：显示 less 搜索模式，`n键`跳转

#### head

> 显示文件的开头几行

```sh
# 显示开头3行
head -n 3 file.txt
```

**以下会报错**

~~`head -n -3 file.txt`~~

#### tail

> 显示文件的结尾几行(默认后 10 行)

```sh
# 显示末尾2行
tail [-n  2] file.txt
tail [-n -2] file.txt
# 显示开头2行
tail [-n +2] file.txt
# 显示第10行
tail -n +10 file.txt | head -1
```

#### 查看当前目录下各文件内存占用

```bash
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