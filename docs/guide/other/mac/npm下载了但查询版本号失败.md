# npm下载了但查询版本号失败


## 问题描述
```
$ npm -v
npm: 无法加载文件, 因为在此系统上禁止运行脚本
```

## 解决方案
```
$ get-ExecutionPolicy
Restricted

$ set-ExecutionPolicy -Scope CurrentUser
请为以下参数提供值:
ExecutionPolicy: RemoteSigned

$ npm -v
11.6.0
```

