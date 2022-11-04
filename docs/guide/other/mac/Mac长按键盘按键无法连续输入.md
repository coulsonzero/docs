# 键盘无法连续输入

1.终端输入

```sh
$ defaults write NSGlobalDomain ApplePressAndHoldEnabled -boolean false
# $ defaults write -g ApplePressAndHoldEnabled -bool false
```

2.重启电脑

如果想要关闭只需要将上述命令行中的 false 改为 true，重启电脑即可。
