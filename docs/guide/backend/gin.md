# Gin

[Gin中文官网](https://gin-gonic.com/zh-cn/)

## Overview

### 快速开始

```sh
$ go get -u github.com/gin-gonic/gin
```

项目中创建main.go文件
```go
package main

import "github.com/gin-gonic/gin"

func main() {
	r := gin.Default()
	r.GET("/", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "Hello Gin !",
		})
	})
	r.Run()
}
```

运行并查看
```sh
$ go run main.go
$ curl "http://localhost:8080/"
```

### 结构化

```md
$ tree
.
├── `controller`	<!-- 配置响应数据response -->
│   └── hello.go
├── `router`		<!-- 配置路由url -->
│   └── router.go
├── go.mod
├── go.sum
└── `main.go`		<!-- 配置post -->
```

:::: code-group
::: code-group-item main.go
```go
package main

import (
	"fmt"
	"go-gin/router"
)

func main() {
	r := router.SetupRouter()
	r.Run(":8080")
}

```
:::
::: code-group-item router.go
```go
package router

import (
	"github.com/gin-gonic/gin"
	"go-gin/controller"
)

func SetupRouter() *gin.Engine {
	r := gin.Default()
	r.GET("/hello", controller.HelloController)

	return r
}
```
:::
::: code-group-item hello.go
```go
package controller

import "github.com/gin-gonic/gin"

func HelloController(c *gin.Context) {
	c.JSON(200, gin.H{
		"message": "Welcome to Gin !",
	})
}
```
:::
::: code-group-item http://localhost:8080/
```json
{"message":"Welcome to Gin !"}
```
:::
::::

### GROM & MySQL

[GRPM官方文档](https://gorm.io/zh_CN/docs/index.html)

```sh
$ go get -u gorm.io/gorm
$ go get -u gorm.io/driver/mysql
```

## FAQ

- 查看go环境配置

```sh
$ go env
```

- 安装 go get -u github.com/gin-gonic/gin 超时

```sh
$ go env -w GO111MODULE=on
$ go env -w GOPROXY=https://goproxy.cn,direct
$ go mod init [project-name]

$ go get -u github.com/gin-gonic/gin
```

- 热加载

> 修改接口文档后默认需重启项目，页面内容才能刷新；使用fresh后可实时刷新

```sh
# 安装fresh
$ go get github.com/pilu/fresh
# 运行fresh 代替 go run main.go
$ fresh
```