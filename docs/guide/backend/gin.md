# [Gin](https://gin-gonic.com/zh-cn/)

## Overview

### 1. 快速入门

1. 初始化 golang 项目

```sh
$ cd <project-name>
$ go mod init <project-name>
$ go mod tidy
```

2. 安装 gin 依赖包

```sh
$ go get -u "github.com/gin-gonic/gin"
```

3. 创建 main.go 文件

```sh
$ vim main.go
```

```go
package main

import "github.com/gin-gonic/gin"

func main() {
	r := gin.Default()
	r.GET("/ping", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "pong",
		})
	})
	r.Run()	// curl http://localhost:8080/ping
}
```

4. 运行项目并查看返回数据

```sh
$ go run main.go
$ curl "http://localhost:8080/ping"
```

### 2. 结构化项目

```md
$ tree
.
├── `controller` <!-- 配置响应数据response -->
│   └── hello.go
├── `router` <!-- 配置路由url -->
│   └── router.go
├── go.mod
├── go.sum
└── `main.go` <!-- 配置post -->
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
::: code-group-item http://localhost:8080/hello

```json
{"message": "Welcome to Gin !"}
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

## 总结

### HTTP 方法

```go
// 获取资源
r.GET()
// 新增
r.POST()
// 修改(覆盖)
r.PUT()
r.PATCH()	// 修改(局部)
// 删除
r.DELETE()
```

### Body Response

```go
/* ===== String ==== */
c.String(200, "hello world!")

/* ===== JSON ===== */
c.JSON(200, gin.H{
	"success": true,
	"code":    200,
	"message": "请求成功",
})
// c.PureJSON(200, gin.H{
// 	"html": "<b>Hello, world!</b>",
// })
// c.JSONP()
// c.AsciiJSON()
// c.SecureJSON()

/* ===== XML ===== */
c.XML()

/* ===== YML ===== */
c.YAML()



/* ===== HTML ==== */
c.HTML(200, gin.H {
	"html": "<b>Hello World !</b>"
})
c.HTML(200, "/html/index.tmpl", nil)

/* ===== File ==== */
file, err := c.FormFile("file")
c.SaveUploadedFile(file, file.Filename)
```

### Body Request

```go
// 自动绑定
// 如果是 `GET` 请求，只使用 `Form` 绑定引擎（`query`）。
// 如果是 `POST` 请求，首先检查 `content-type` 是否为 `JSON` 或 `XML`，然后再使用 `Form`（`form-data`）
c.ShouldBind()
// 绑定json
c.ShouldBindJSON()
c.ShouldBindXML()
c.ShouldBindYML()
// 显式绑定声明
c.ShouldBindWith(&obj, binding.Form)
c.ShouldBindWith(&obj, binding.Query)
c.ShouldBindBodyWith(&obj, binding.JSON)
c.ShouldBindBodyWith(&obj, binding.XML)
c.ShouldBindBodyWith(&obj, binding.YML)
```


### Body Parmas

```go
// curl http://localhost:8080/user/:name/*action
c.Param("name")
c.Param("action")

// query
// r.GET("/users")
// curl http://localhost:8080/users?id=12&page=2，page可选
c.Query("id")
c.DefaultQuery("page", "0")

// post form
// r.POST("/form")
// curl http://localhost:8080/form  -X POST -d 'username=geektutu&password=1234'
c.PostForm("name")
c.DefaultPostForm("password", "123456")

// map
// r.POST("/posts")
// curl -g "http://localhost:8080/post?ids[Jack]=001&ids[Tom]=002" -X POST -d 'names[a]=Sam&names[b]=David'
c.QueryMap("ids")
c.PostFormMap("names")
```

### Cookie & Session

```go
cookie, err := c.Cookie("gin_cookie")
if err != nil {
	cookie = "NotSet"
	c.SetCookie("gin_cookie", "test", 3600, "/", "localhost", false, true)
}
```

```go
session := sessions.Default(c)
session.Get("hello")
session.Set("hello", "world")
session.Delete("tizi365")
session.Save()
// 删除整个session
// session.Clear()
```

## Sample

### HTTP 方法

```go
r.GET("/someGet", getting)
r.POST("/somePost", posting)
r.PUT("/somePut", putting)
r.DELETE("/someDelete", deleting)
r.PATCH("/somePatch", patching)
r.HEAD("/someHead", head)
r.OPTIONS("/someOptions", options)
```

### GET 无参方法

```go
// curl http://localhost:8080/hello
r.GET("/hello", func(c *gin.Context) {
	c.JSON(200, gin.H{"message": "Hello Gin !"})
})
```

### GET 路径解析参数

```go
// curl http://localhost:8080/user/john
r.GET("/user/:name", func(c *gin.Context) {
	name := c.Param("name")
	c.String(http.StatusOK, "Hello %s", name)
})
```

### GET Query 参数

```go
// curl http://localhost:8080/users?name=coulson&role=developer
r.GET("/users", func(c *gin.Context) {
	name := c.Query("name")
	role := c.DefaultQuery("role", "teacher")
	c.String(http.StatusOK, "%s is a %s", name, role)
})
```

### POST 无参方法

```go
r.POST("/post", func(c *gin.Context) {
	c.String(200, "post方法")
})
```

### POST Body-form 表单

```go
// curl http://localhost:8080/form  -X POST -d 'username=geektutu&password=1234'
r.POST("/form", func(c *gin.Context) {
	username := c.PostForm("username")
	password := c.DefaultPostForm("password", "000000") // 可设置默认值

	c.JSON(http.StatusOK, gin.H{
		"username": username,
		"password": password,
	})
})
```

### POST Query 参数与 From 表单

```go
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
```

### POST map

```go
// curl -g "http://localhost:8080/post?ids[Jack]=001&ids[Tom]=002" -X POST -d 'names[a]=Sam&names[b]=David'
r.POST("/postmap", func(c *gin.Context) {
	ids := c.QueryMap("ids")
	names := c.PostFormMap("names")

	c.JSON(http.StatusOK, gin.H{"ids": ids,"names": names})
})
```

### POST json 参数

```go
r.POST("/json", ShowUser)

func ShowUser(c *gin.Context) {
	var user models.User
	if err := c.ShouldBindJSON(&user); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, user)
}
```

### 路由组

```go
// group: v1
// http://localhost:8080/api/v1/task
v1 := r.Group("/api/v1")
{
	v1.GET("/task", defaultHandler)
	v1.GET("/series", defaultHandler)
}
// group: v2
v2 := r.Group("/api/v2")
{
	v2.GET("/task", defaultHandler)
	v2.GET("/series", defaultHandler)
}
```

### 路由参数

```go
// 解析路径参数: "/user/:name" -> /user/john
c.Param("name")
// Query参数: users?name=coulson&role=developer，role可选
c.Query("name")
c.DefaultQuery("role", "teacher")

// post-form表单
c.PostForm("username")
c.DefaultPostForm("password", "000000")

// map: curl -g "http://localhost:8080/post?ids[Jack]=001&ids[Tom]=002" -X POST -d 'names[a]=Sam&names[b]=David'
c.QueryMap("ids")
c.PostFormMap("names")

// json
c.ShouldBindJSON(&user)
```

### 路由参数-路径参数 :name

```go{2-3}
// /user/john
r.GET("/user/:name", func(c *gin.Context) {
	name := c.Param("name")
	c.String(http.StatusOK, "Hello %s", name)
})
```

### 路由参数-Params ?name

```go{3-4}
// curl http://localhost:8080/user?name=tom&role=developer, role可选
router.GET("/user", func(c *gin.Context) {
	name := c.Query("name")
	role := c.DefaultQuery("role", "teacher")
	c.String(http.StatusOK, "%s is a %s", name, role)
})
```

### 路由参数-Body 参数

```go
// curl http://localhost:8080/form  -X POST -d 'username=geektutu&password=1234'
r.POST("/form", func(c *gin.Context) {
	username := c.PostForm("username")
	password := c.DefaultPostForm("password", "000000") // 可设置默认值

	c.JSON(http.StatusOK, gin.H{
		"username": username,
		"password": password,
	})
})
```

### 路由绑定 uri

```go{6-7,12,14}
package main

import "github.com/gin-gonic/gin"

type Person struct {
	ID   string `uri:"id" binding:"required,uuid"`
	Name string `uri:"name" binding:"required"`
}

func main() {
	route := gin.Default()
	route.GET("/:name/:id", func(c *gin.Context) {
		var person Person
		if err := c.ShouldBindUri(&person); err != nil {
			c.JSON(400, gin.H{"msg": err.Error()})
			return
		}
		c.JSON(200, gin.H{"name": person.Name, "uuid": person.ID})
	})
	route.Run(":8080")
}
```

### 模型绑定与验证

```go{3-4,13,34,51}
// 绑定 JSON
type Login struct {
	User     string `form:"user" json:"user" xml:"user"  binding:"required"`
	Password string `form:"password" json:"password" xml:"password" binding:"required"`
}

func main() {
	router := gin.Default()

	// 绑定 JSON ({"user": "manu", "password": "123"})
	router.POST("/loginJSON", func(c *gin.Context) {
		var json Login
		if err := c.ShouldBindJSON(&json); err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
			return
		}

		if json.User != "manu" || json.Password != "123" {
			c.JSON(http.StatusUnauthorized, gin.H{"status": "unauthorized"})
			return
		}

		c.JSON(http.StatusOK, gin.H{"status": "you are logged in"})
	})

	// 绑定 XML (
	//	<?xml version="1.0" encoding="UTF-8"?>
	//	<root>
	//		<user>manu</user>
	//		<password>123</password>
	//	</root>)
	router.POST("/loginXML", func(c *gin.Context) {
		var xml Login
		if err := c.ShouldBindXML(&xml); err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
			return
		}

		if xml.User != "manu" || xml.Password != "123" {
			c.JSON(http.StatusUnauthorized, gin.H{"status": "unauthorized"})
			return
		}

		c.JSON(http.StatusOK, gin.H{"status": "you are logged in"})
	})

	// 绑定 HTML form表单 (user=manu&password=123)
	router.POST("/loginForm", func(c *gin.Context) {
		var form Login
		// 根据 Content-Type Header 推断使用哪个绑定器。
		if err := c.ShouldBind(&form); err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
			return
		}

		if form.User != "manu" || form.Password != "123" {
			c.JSON(http.StatusUnauthorized, gin.H{"status": "unauthorized"})
			return
		}

		c.JSON(http.StatusOK, gin.H{"status": "you are logged in"})
	})

	// 监听并在 0.0.0.0:8080 上启动服务
	router.Run(":8080")
}
```

### 渲染 String

```go
c.String(200, "Hello world !")
```

### 渲染 JSON

```go
r.GET("/json", func(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{
		"success": true,
		"code":    200,
		"message": "请求成功",
	})
})
```

### 渲染 XML

```go
r.GET("/xml", func(c *gin.Context) {
	c.XML(http.StatusOK, gin.H{
		"message": "hey",
		"status": 200
	})
})
```

### 渲染 YAML

```go
r.GET("/yaml", func(c *gin.Context) {
	c.YAML(http.StatusOK, gin.H{
		"message": "hey",
		"status": http.StatusOK
	})
})
```

### 记录日志

```go
// 默认禁用控制台颜色(仅记录到文件时)
// gin.DisableConsoleColor()

// 记录到文件。
f, _ := os.Create("gin.log")
gin.DefaultWriter = io.MultiWriter(f)
```

```go
// 强制日志颜色化(需要记录到控制台时)
gin.ForceConsoleColor()

// 记录到文件和控制台
f, _ := os.Create("gin.log")
gin.DefaultWriter = io.MultiWriter(f, os.Stdout)
```

### curl

```sh
$ curl -v -X POST \
  http://localhost:8080/loginJSON \
  -H 'content-type: application/json' \
  -d '{ "user": "manu" }'
```

### 使用默认的中间件

```go
// Default 使用 Logger 和 Recovery 中间件
r := gin.Default()
```

### 不使用默认的中间件

```go
// 新建一个没有任何默认中间件的路由
r := gin.New()

// 全局中间件
// Logger 中间件将日志写入 gin.DefaultWriter，即使你将 GIN_MODE 设置为 release。
// By default gin.DefaultWriter = os.Stdout
r.Use(gin.Logger())

// Recovery 中间件会 recover 任何 panic。如果有 panic 的话，会写入 500。
r.Use(gin.Recovery())
```

## FAQ

### 查看 go 环境配置

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

> 修改接口文档后默认需重启项目，页面内容才能刷新；使用 fresh 后可实时刷新

```sh
# 安装fresh
$ go get -u github.com/pilu/fresh

$ cd <project-name>
$ fresh		# 运行fresh 代替 go run main.go
```

### swag

```sh
# 安装swag (go-v1.17版本使用install)
$ go install github.com/swaggo/swag/cmd/swag
# 查看swag是否安装成功
$ swag -v
# 生成docs文档
$ swag init
# 启动项目, 并查看接口文档: http://localhost:8080/swagger/index.html
$ go run main.go
```

```go
// main.go
package main

import (
	"github.com/gin-gonic/gin"
	swaggerFiles "github.com/swaggo/files"
	ginSwagger "github.com/swaggo/gin-swagger"
	_ "go-gin-swagger/docs"
)

func main() {
	r := gin.Default()

	// http://localhost:8080/swagger/index.html
	r.GET("/swagger/*any", ginSwagger.WrapHandler(swaggerFiles.Handler))
	r.GET("/hello", handleSwagger)

	r.Run()
}

// 测试接口 godoc
// @tags admin
// @router /hello [get]
// @summary 测试接口
// @description 测试swagger-hello接口
// @accept json
// @produce json
// @param name body string true "用户名，建议使用姓名拼音"
// @success 200 {json} {"success":true,"data":{},"msg":"ok"}
// @failure 500 {json} {"status":500,"data":{},"Msg":{},"Error":"error"}
func handleSwagger(c *gin.Context) {
	c.JSON(200, gin.H{
		"message": "Welcome to Gin !",
	})
}
```
