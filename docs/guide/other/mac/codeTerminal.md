# macOS 终端执行Vs code

## 问题描述

```sh
$ code .
zsh: command not found: code
```


## 解决方法


step 1. 确保 Visual Studio Code 已在 Applications 中
step 2. 打开 Visual Studio Code , 通过（`⇧⌘P`）打开命令面板，然后键入以找到Shell命令：shell command
```
>shell command
Shell Commadn: Install 'code' command in PATH
```
step 3. 打开终端重新执行code即可
```sh
$ code .
```
