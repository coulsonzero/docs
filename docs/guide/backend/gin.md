# Gin

[Gin中文官网](https://gin-gonic.com/zh-cn/)

[GORM官网](https://gorm.io/)

## Overview

### 1. 快速开始

1. Step1. 安装依赖包

```sh
$ go get -u github.com/gin-gonic/gin
```

2. Step2. 创建gin项目
```bash
$ mkdir [project_name]
$ cd [project_name]
$ go mod init [project_name]
$ go mod tidy
```

3. Step3. 创建main.go文件

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



4. Step4. 运行项目并查看返回数据

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

## GROM

[GRPM官方文档](https://gorm.io/zh_CN/docs/index.html)

### 1. 安装依赖包
```sh
$ go get -u gorm.io/gorm
$ go get -u gorm.io/driver/mysql
```

### 2. Sqlite: Example
```go
package main

import (
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

type Product struct {
	gorm.Model
	Code  string
	Price uint
}

func main() {
	db, err := gorm.Open(sqlite.Open("test.db"), &gorm.Config{})
	if err != nil {
		panic("failed to connect database")
	}

	// 迁移 schema
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

### 3. MySQL: Example

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

### 4. Gorm-Mysql 模块化

:::: code-group
::: code-group-item main.go
```go
package main

import (
	"gin-grom-mysql/models"
	"gin-grom-mysql/router"
)

func main() {
	db := models.SetupDB()
	defer models.CloseDB(db)
	r := router.SetupRouter()
	r.Run(":8090")
}
```
:::
::: code-group-item router/router.go
```go
package router

import (
	"gin-grom-mysql/controller"
	"github.com/gin-gonic/gin"
)

func SetupRouter() *gin.Engine {
	r := gin.Default()

	r.GET("/ping", func(c *gin.Context) {
		c.String(200, "pong")
	})

	r.GET("/users", controllers.ShowUsers)
	r.GET("/users/:id", controllers.ShowUser)
	r.POST("/users", controllers.CreateUser)
	r.PATCH("/users/:id", controllers.UpdateUser)
	r.DELETE("/users/:id", controllers.DeleteUser)
	return r
}
```
:::
::: code-group-item models/db.go
```go
package models

import (
	"fmt"
	"github.com/joho/godotenv"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
	"os"
)

var DB *gorm.DB

func SetupDB() *gorm.DB {
	errEnv := godotenv.Load()
	if errEnv != nil {
		panic("Failed to load env file")
	}

	dbUser := os.Getenv("DB_USER")
	dbPass := os.Getenv("DB_PASSWORD")
	dbHost := os.Getenv("DB_HOST")
	dbName := os.Getenv("DB_NAME")

	// dsn := fmt.Sprintf("user:pass@tcp(127.0.0.1:3306)/dbname?charset=utf8mb4&parseTime=True&loc=Local")
	dsn := fmt.Sprintf("%s:%s@tcp(%s:3306)/%s?charset=utf8mb4&parseTime=True&loc=Local",
		dbUser,
		dbPass,
		dbHost,
		dbName,
	)
	db, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})
	if err != nil {
		panic("Failed to create a connection to database")
	}
	fmt.Println("连接mysql数据库成功")
	DB = db
	DB.AutoMigrate(&User{})
	fmt.Println(db)
	return db
}

func CloseDB(db *gorm.DB) {
	dbSQL, err := db.DB()
	if err != nil {
		panic("Failed to close connection from database")
	}
	dbSQL.Close()
}
```
:::
::: code-group-item models/user.go
```go
package models

import (
	"errors"
	"gorm.io/gorm"
)

// User model, use NewUser to create a new instance
type User struct {
	gorm.Model
	ID    uint   `json:"id" gorm:"primary_key"`
	Name  string `json:"name" binding:"required"`
	Email string `json:"email" binding:"required"`
	// CreatedAt time.Time `json:"createdtime"`
	// UpdatedAt time.Time `json:"updatedtime"`
}

// NewUser creates a new User{} instance
func NewUser(name string, email string) (*User, error) {
	var err error
	if name == "" {
		err = errors.New("name can not be blank")
		return nil, err
	}

	if email == "" {
		err = errors.New("email can not be blank")
		return nil, err
	}

	return &User{Name: name, Email: email}, err
}

// FindUserByID finds User by id and return
func FindUserByID(id int) *User {
	var user User
	DB.First(&user, id)
	return &user
}

// GetAllUsers returns all User records
func GetAllUsers() *[]User {
	var users []User
	DB.Find(&users)
	return &users
}

// Create creates a new User record in the database
func (u *User) Create() {
	DB.Create(&u)
}

// Update updates User record attributes in the database
func (u *User) Update() {
	DB.Model(&u).Updates(User{Name: u.Name, Email: u.Email})
}

// Delete deletes User record in the database
func (u *User) Delete() {
	DB.Delete(&u)
}
```
:::
::: code-group-item controller/user.go
```go
package controllers

import (
	"gin-grom-mysql/models"
	"github.com/gin-gonic/gin"
	"net/http"
	"strconv"
)

// CreateUser handles HTTP POST request to create a new User
func CreateUser(c *gin.Context) {
	var user models.User
	if err := c.ShouldBindJSON(&user); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	user.Create()
	c.JSON(http.StatusCreated, user)
}

// ShowUser handles HTTP GET request to find a User by id param
func ShowUser(c *gin.Context) {
	idParam := c.Param("id")
	id, err := strconv.Atoi(idParam)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	user := models.FindUserByID(id)
	if user.ID == 0 {
		c.JSON(http.StatusNotFound, gin.H{})
		return
	}
	c.JSON(http.StatusOK, user)
}

// UpdateUser handles HTTP PATCH request to find and update User details
func UpdateUser(c *gin.Context) {
	idParam := c.Param("id")
	id, err := strconv.Atoi(idParam)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	user := models.FindUserByID(id)
	if user.ID == 0 {
		c.JSON(http.StatusNotFound, gin.H{})
		return
	}

	if err := c.ShouldBindJSON(&user); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	user.Update()
	c.JSON(http.StatusOK, user)
}

// DeleteUser handles HTTP DELETE request to find and delete User record
func DeleteUser(c *gin.Context) {
	idParam := c.Param("id")
	id, err := strconv.Atoi(idParam)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	user := models.FindUserByID(id)
	if user.ID == 0 {
		c.JSON(http.StatusNotFound, gin.H{})
		return
	}

	user.Delete()
	c.JSON(http.StatusOK, gin.H{})
}

// ShowUsers handles HTTP GET request to return all User records
func ShowUsers(c *gin.Context) {
	users := models.GetAllUsers()
	c.JSON(http.StatusOK, users)
}
```
:::
::::

### 5. 加载 `env` 配置文件
:::: code-group
::: code-group-item config.go
```go
import (
	"github.com/joho/godotenv"
	"os"
)

func SetupDB() *gorm.DB {
	errEnv := godotenv.Load()
	if errEnv != nil {
		panic("Failed to load env file")
	}

	dbUser := os.Getenv("DB_USER")
	dbPass := os.Getenv("DB_PASSWORD")
	dbHost := os.Getenv("DB_HOST")
	dbName := os.Getenv("DB_NAME")

	// dsn := fmt.Sprintf("user:pass@tcp(127.0.0.1:3306)/dbname?charset=utf8mb4&parseTime=True&loc=Local")
	dsn := fmt.Sprintf("%s:%s@tcp(%s:3306)/%s?charset=utf8mb4&parseTime=True&loc=Local",
		dbUser,
		dbPass,
		dbHost,
		dbName,
	)
}
```
:::
::: code-group-item .env
```env
DB_USER=root
DB_PASSWORD=root
DB_HOST=localhost
DB_NAME=golang_api
```
:::
::::
### 6. 加载 `ini` 配置文件

:::: code-group
::: code-group-item config.go
```go
import (
	"gopkg.in/ini.v1"
	"strings"
)

var (
	AppMode    string
	HttpPort   string
	Db         string
	DbHost     string
	DbPort     string
	DbUser     string
	DbPassWord string
	DbName     string
)


func LoadIntConfig() string {
	/* ====== Step-1: 加载mysql数据库配置 ====== */

	// 第一种： 固定方式
	// dsn := fmt.Sprintf("root:root@tcp(127.0.0.1:3306)/todolist_db?charset=utf8mb4&parseTime=True&loc=Local")

	// 第二种： 字符串变量拼接
	// dsn := strings.Join([]string{DbUser, ":", DbPassWord, "@tcp(", DbHost, ":", DbPort, ")/", DbName, "?charset=utf8mb4&parseTime=true&loc=Local"}, "")

	// 第三种：加载文件中的mysql配置
	file, err := ini.Load("conf/config.ini")
	if err != nil {
		panic("Failed to load ini file")
	}

	LoadServer(file)
	LoadMysqlData(file)
	dsn := strings.Join([]string{DbUser, ":", DbPassWord, "@tcp(", DbHost, ":", DbPort, ")/", DbName, "?charset=utf8mb4&parseTime=true&loc=Local"}, "")

	return dsn
}

func LoadServer(file *ini.File) {
	AppMode = file.Section("service").Key("AppMode").String()
	HttpPort = file.Section("service").Key("HttpPort").String()
}

func LoadMysqlData(file *ini.File) {
	Db = file.Section("mysql").Key("Db").String()
	DbHost = file.Section("mysql").Key("DbHost").String()
	DbPort = file.Section("mysql").Key("DbPort").String()
	DbUser = file.Section("mysql").Key("DbUser").String()
	DbPassWord = file.Section("mysql").Key("DbPassWord").String()
	DbName = file.Section("mysql").Key("DbName").String()
}

```
:::
::: code-group-item config.ini
```ini
[service]
AppMode = debug
HttpPort = 7000

[mysql]
Db = mysql
DbHost = 127.0.0.1
DbPort = 3306
DbUser = root
DbPassWord = root
DbName = todolist_db
```
:::
::::

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