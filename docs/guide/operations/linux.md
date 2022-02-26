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
- su (切换用户)
- echo (输出命令)/printf
- history (查看命令历史记录)
- dig (域名解析)
- chmod (更改文件/目录权限)
- bc (计算器)
- uname -a (系统信息)

### Commands 命令大全

### `ls`







