# Mac终端查看端口占用？


## 1. Question

```sh
$ yarn ...
Error: listen EACCES: permission denied 127.0.0.1:80
```

## 2. Solution

### 2.1 Step1 管理员身份查看目标端口占用情况

```sh
$ sudo lsof -i tcp:80

COMMAND PID        USER   FD   TYPE             DEVICE SIZE/OFF NODE NAME
WeChat  703 coulsonzero   27u  IPv4 0x3065f669919075c5      0t0  TCP 192.168.0.1
```

### 2.2 Step2 杀掉占用端口进程

```sh
$ sudo kill -9 703
```

### 2.3 重新执行启动命令

```sh
$ yarn
```


