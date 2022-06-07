# window安装mysql


## 安装网址
```
1. 输入URL:  https://dev.mysql.com/downloads/mysql/
2. 点击 <Download>
3. 点击 <No thanks, just start my download>
```
## PATH环境变量设置：

```
1. 右键点击<我的电脑> "属性"
2. 高级系统设置-- 环境变量--系统变量--双击path
3. 新建MySQL安装路径： D:\MySQL\mysql-8.0.25-winx64\bin
4. 确定
```

新建data文件夹
MySQL安装路径下配置"my.ini"文件
(注意修改路径)
```
[mysqld]
#skip-grant-tables
basedir=D:\MySQL\mysql-8.0.25-winx64
datadir=D:\MySQL\mysql-8.0.25-winx64\data\
port=root
max_connections=200
character-set-server=utf8
default-storage-engine=INNODB
```

## cmd安装流程
```
1. 以管理员身份运行cmd (常规cmd权限报错: "Install/Remove of the Service Denied!")
2. 切换到MySQL安装路径：cd /d D:\MySQL\mysql-8.0.25-winx64
3. 安装mysql, 初始化
mysqld --install  (已安装mysql报错: "The service already exists!")
mysqld --initialize  (生成data文件夹)
4. 连接服务, 登录mysql输入系统随机生成的密码并修改密码 (无法连接mysql服务："The MySQL service could not be started.")
net start mysql
5. mysql -u root -p
> Enterpassword: **** (密码在data文件夹下的**.err文件下，复制修改成txt文本查看密码)
6. 修改mysql账户登录密码
mysql> ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '0627';
7. 关闭mysql: mysql> exit
8. 停止mysql服务: net stop mysql
```

## cmd正常运行mysql流程

```sh
管理员权限启动cmd
1. net start mysql
2. mysql -u root -p
Enter password: ****
3. mysql> exit
4. net stop mysql
#mysql [-h 主机名 -P 端口号] -u 用户名 -p 回车后输入密码
(mysql -h localhost -P root -u root -p)
```

## FAQ

```
1. 常规cmd权限运行："Install/Remove of the Service Denied!"
=> 使用管理员权限运行cmd
3. MySQL已安装："The service already exists!"
=>
mysqld --remove
mysqld --install
mysqld --initialize
4. 输入net start mysql => "The MySQL service could not be started."
=> 管理员权限打开cmd，删除data文件，停止MySQL, 再输入"mysqld --remove"重装即可
5. 密码输入不正确："ERROR 1045 (28000): Access denied for user 'root'@'localhost' (using password: YES)"
=> 密码在data文件夹下的**.err文件下，复制修改乘txt文本查看密码，输入系统随机生成密码进入mysql后，
再修改密码 mysql> ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'root';
```
