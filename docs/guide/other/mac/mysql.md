# M1 MySQL配置


Mysql8.0.25环境变量配置

```
username: root
password: coulsonzero
```


环境变量配置：
Step1
```
vim ～/.bash_profile
```
2. 按i编辑
3. 输入
```sh
PATH=$PATH:/usr/local/mysql/bin
```
或者
```sh
export PATH=$PATH:/usr/local/mysql/bin
export PATH=$PATH:/usr/local/mysql/support-files
```
4. 按Esc退出编辑，按 :wq保存后退出, readonly则加感叹号   :wq!
```

刷新环境变量
```sh
source ~/.bash_profile
```

运行mysql
```sh
mysql -u root -p
```

但是关闭终端后再运行mysql没有成效：每次刷新环境变量 =>
```sh
vim ~/.zshrc
source ~/.bash_profile
```