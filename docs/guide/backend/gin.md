# [Gin](https://gin-gonic.com/zh-cn/)

## Overview

### 1. 快速开始

1. 创建gin项目
```bash{3-4}
$ mkdir [project_name]
$ cd [project_name]
$ go mod init [project_name]
$ go mod tidy
```

2. 安装依赖包

```sh
$ go get -u "github.com/gin-gonic/gin"
```

3. 创建main.go文件

```bash
$ vim main.go   # or `touch main.go`
```

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



4. 运行项目并查看返回数据

```sh
$ go run main.go
$ curl "http://localhost:8080/"
```

### 2. 结构化

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



### 3. Example

```go
package main

import (
	"github.com/gin-gonic/gin"
	"net/http"
)

func main() {
	r := gin.Default()

	// GET无参数: curl http://localhost:8080/hello
	r.GET("/hello", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "Hello Gin !",
		})
	})

	// GET解析路径参数: /user/coulson
	r.GET("/user/:name", func(c *gin.Context) {
		name := c.Param("name")
		c.String(http.StatusOK, "Hello %s", name)
	})

	// GETQuery参数: users?name=coulson&role=developer，role可选
	r.GET("/users", func(c *gin.Context) {
		name := c.Query("name")
		role := c.DefaultQuery("role", "teacher")
		c.String(http.StatusOK, "%s is a %s", name, role)
	})

	r.GET("/api/v1/bar", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{
			"success": true,
			"list":    []string{"home", "about", "docs", "footer"},
			"data":    "asas",
			"bar": []interface{}{
				&Bar{
					Title:   "条形图示例",
					Content: "直方图",
				},
			},
			"dateinfo": []interface{}{
				&DateInfo{
					dvp_1: "2022-04-09",
					dvp_2: "2022-04-09",
					dvp_3: "20220409",
				},
			},
			"msg":  "请求成功",
			"code": 1,
		})
	})

	r.POST("/post", func(c *gin.Context) {
		c.String(200, "这是post请求返回的数据")
	})

	// curl http://localhost:8080/form  -X POST -d 'username=geektutu&password=1234'
	r.POST("/form", func(c *gin.Context) {
		username := c.PostForm("username")
		password := c.DefaultPostForm("password", "000000") // 可设置默认值

		c.JSON(http.StatusOK, gin.H{
			"username": username,
			"password": password,
		})
	})

	// GET 和 POST 混合
	// curl "http://localhost:8080/posts?id=9876&page=7"  -X POST -d 'username=geektutu&password=1234'
	r.POST("/posts", func(c *gin.Context) {
		id := c.Query("id")
		page := c.DefaultQuery("page", "0")
		username := c.PostForm("username")
		password := c.DefaultPostForm("password", "000000") // 可设置默认值

		c.JSON(http.StatusOK, gin.H{
			"id":       id,
			"page":     page,
			"username": username,
			"password": password,
		})
	})

	// curl -g "http://localhost:8080/post?ids[Jack]=001&ids[Tom]=002" -X POST -d 'names[a]=Sam&names[b]=David'
	r.POST("/postmap", func(c *gin.Context) {
		ids := c.QueryMap("ids")
		names := c.PostFormMap("names")

		c.JSON(http.StatusOK, gin.H{
			"ids":   ids,
			"names": names,
		})
	})

	// group routes 分组路由
	defaultHandler := func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{
			"path":    c.FullPath(),
			"success": "ture",
		})
	}

	// group: v1
	// http://localhost:8080/api/v1/task
	v1 := r.Group("/api/v1")
	{
		v1.GET("/task", defaultHandler)
		v1.GET("/series", defaultHandler)
	}
	// group: v2
	v2 := r.Group("/v2")
	{
		v2.GET("/task", defaultHandler)
		v2.GET("/series", defaultHandler)
	}

	r.Run() // listen and serve on 0.0.0.0:8080
	// r.Run(":8000")
}

type Bar struct {
	Title   string
	Content string
}

type DateInfo struct {
	dvp_1 string
	dvp_2 string
	dvp_3 string
}
```


## FAQ

### 查看go环境配置

```sh
$ go env
```

### 安装 go get -u github.com/gin-gonic/gin 超时

```sh
$ go env -w GO111MODULE=on
$ go env -w GOPROXY=https://goproxy.cn,direct
$ go mod init [project-name]

$ go get -u github.com/gin-gonic/gin
```

### 热加载

> 修改接口文档后默认需重启项目，页面内容才能刷新；使用fresh后可实时刷新

```sh
# 安装fresh
$ go get github.com/pilu/fresh
# 运行fresh 代替 go run main.go
$ fresh
```