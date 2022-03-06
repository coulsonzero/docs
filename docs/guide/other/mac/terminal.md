# Mac终端美化

## Step1 修改bachrc环境变量

```sh
$ sudo vim /etc/bashrc
```

```sh
# PS1='\h\W \u\$ '
PS1='\W '
```
:wq! 只读强制保存

## Step2 zshrc中修改终端显示

```sh
$ sudo vim /etc/zshrc

# PS1="%m %1~ %#"
PS1="$ %~" 或 PS1="$ "
```

## Step3 重启终端即可生效
