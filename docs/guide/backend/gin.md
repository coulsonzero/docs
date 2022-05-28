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

::: details grom-mysql示例
```go
package main

import (
	"fmt"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

type Product struct {
	gorm.Model
	Code  string
	Price uint
}

func main() {
	dbUser := "root"
	dbPass := "coulsonzero"
	dbHost := "localhost"
	dbName := "golang_api"
	dsn := fmt.Sprintf("%s:%s@tcp(%s:3306)/%s?charset=utf8mb4&parseTime=True&loc=Local",
		dbUser,
		dbPass,
		dbHost,
		dbName,
	)
	db, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})
	if err != nil {
		panic("failed to connect database")
	}

	db.AutoMigrate(&Product{})

	// Create
	db.Create(&Product{Code: "D42", Price: 100})

	// Read
	var product Product
	db.First(&product, 1)                 // 根据整型主键查找
	db.First(&product, "code = ?", "D42") // 查找 code 字段值为 D42 的记录

	// Update - 将 product 的 price 更新为 200
	db.Model(&product).Update("Price", 200)
	// Update - 更新多个字段
	db.Model(&product).Updates(Product{Price: 200, Code: "F42"}) // 仅更新非零值字段
	db.Model(&product).Updates(map[string]interface{}{"Price": 200, "Code": "F42"})

	// Delete - 删除 product
	db.Delete(&product, 1)
}
```
:::

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