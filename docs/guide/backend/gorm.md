# [GORM](https://gorm.io/zh_CN/docs/index.html)


## Overview
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
	"github.com/joho/godotenv"
	"os"
	"fmt"
)

var DB *gorm.DB

func LoadEnvConfig() string {
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
	return dsn
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

### 数据库模型
```go
import "gorm.io/gorm"

type User struct {
	gorm.Model
	Name  string `json:"name" binding:"required"`
	Email string `json:"email" binding:"required"`
}
```

```go
type User struct {
  ID           uint
  Name         string
  Email        *string
  Age          uint8
  Birthday     *time.Time
  MemberNumber sql.NullString
  ActivatedAt  sql.NullTime
  CreatedAt    time.Time
  UpdatedAt    time.Time
}
```

```go
// gorm.Model 的定义
type Model struct {
  ID        uint           `gorm:"primaryKey"`
  CreatedAt time.Time
  UpdatedAt time.Time
  DeletedAt gorm.DeletedAt `gorm:"index"`
}
```

## 连接MySQL数据库

:::: code-group
::: code-group-item db.go
```go
import (
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

var DB *gorm.DB

func SetupDB() *gorm.DB {
	// 连接数据库
	// dsn := conf.LoadIntConfig()
	db, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})
	if err != nil {
		panic("Failed to create a connection to database")
	}

	// 加载数据库模型
	DB = db
	DB.AutoMigrate(&User{})
	return db
}

// 关闭数据库连接
func CloseDB(db *gorm.DB) {
	dbSQL, err := db.DB()
	if err != nil {
		panic("Failed to close connection from database")
	}
	dbSQL.Close()
}
```
:::
::: code-group-item main.go
```go
package main

import (
	"go-gin-todolist/model"
	"go-gin-todolist/router"
)

func main() {
	db := model.SetupDB()
	defer model.CloseDB(db)

	r := router.SetupRouter()
	r.Run(":7080")
}
```
:::
::::

### 1. 固定方式
```go
import (
  "gorm.io/driver/mysql"
  "gorm.io/gorm"
)

func main() {
  // 需更改dbname
  dsn := "root:root@tcp(127.0.0.1:3306)/dbname?charset=utf8mb4&parseTime=True&loc=Local"
  db, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})
}
```
### 2. 字符串拼接

```go
dsn := strings.Join([]string{DbUser, ":", DbPassWord, "@tcp(", DbHost, ":", DbPort, ")/", DbName, "?charset=utf8mb4&parseTime=true&loc=Local"}, "")
```

### 3. 格式化字符串

```go
dsn := fmt.Sprintf("%s:%s@tcp(%s:3306)/%s?charset=utf8mb4&parseTime=True&loc=Local",
	dbUser,
	dbPass,
	dbHost,
	dbName,
)
```

### 4. 加载 `env` 配置文件
:::: code-group
::: code-group-item config.go
```go{2-3,8,13}
import (
	"github.com/joho/godotenv"
	"os"
)

func SetupDB() *gorm.DB {
	// 1.加载.env文件配置
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

	// 2.连接mysql数据库
	db, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})
	if err != nil {
		panic("Failed to create a connection to database")
	}
	// 3.绑定Struct数据库模型
	DB = db
	DB.AutoMigrate(&User{})
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
::: code-group-item .env
```env
DB_USER=root
DB_PASSWORD=root
DB_HOST=localhost
DB_NAME=golang_api
```
:::
::::
### 5. 加载 `ini` 配置文件

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
	file, err := ini.Load("conf/config.ini")
	if err != nil {
		panic("Failed to load ini file")
	}

	LoadServer(file)
	LoadMysqlData(file)

	// dsn := "root:root@tcp(127.0.0.1:3306)/dbname?charset=utf8mb4&parseTime=True&loc=Local"
	dsn := fmt.Sprintf("%s:%s@tcp(%s:3306)/%s?charset=utf8mb4&parseTime=True&loc=Local",
		DbUser,
		DbPass,
		DbHost,
		DbName,
	)

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


## CRUD接口


### 查询


#### Find

```go{5,8,16}
/*************************
 *          All          *
 * SELECT * FROM users;  *
 *************************/
db.Find(&users)


db.Find(&users, "name != ? AND age > ?", "jinzhu", 20)
// SELECT * FROM users WHERE name <> "jinzhu" AND age > 20;

// Struct
db.Find(&users, User{Age: 20})
// SELECT * FROM users WHERE age = 20;

// Map
db.Find(&users, map[string]interface{}{"name": "jinzhu", "age": 20})
// SELECT * FROM users WHERE name = "jinzhu" AND age = 20;

result := db.Find(&user)
fmp.Println(result.RowsAffected) // 返回找到的记录数
fmp.Println(users)
```

#### First
```go
var user []User
// 获取第一条记录（主键升序）
db.First(&user)
// SELECT * FROM users ORDER BY id LIMIT 1;

// 获取最后一条记录（主键降序
db.Last(&user)
// SELECT * FROM users ORDER BY id DESC LIMIT 1;

db.First(&user, 10)
// SELECT * FROM users WHERE id = 10;

db.First(&user, "id = ?", "1b74413f-f3b8-409f-ac47-e8c062e3472a")
// SELECT * FROM users WHERE id = "1b74413f-f3b8-409f-ac47-e8c062e3472a";


type User struct {
    Name string
    Age int
}
```



#### Where

```go
// Map
db.Find(&users, map[string]interface{}{"age": 20})
// SELECT * FROM users WHERE age = 20;

db.Where("name = ? AND age >= ?", "jinzhu", "22").Find(&users)
// SELECT * FROM users WHERE name = 'jinzhu' AND age >= 22;

// Struct
db.Where(&User{Name: "jinzhu", Age: 20}).First(&user)
// SELECT * FROM users WHERE name = "jinzhu" AND age = 20 ORDER BY id LIMIT 1;

// Map
db.Where(map[string]interface{}{"name": "jinzhu", "age": 20}).Find(&users)
// SELECT * FROM users WHERE name = "jinzhu" AND age = 20;
```


### 创建

```go
user := User{Name: "Jinzhu", Age: 18, Birthday: time.Now()}

result := db.Create(&user) // 通过数据的指针来创建

user.ID             // 返回插入数据的主键
result.Error        // 返回 error
result.RowsAffected // 返回插入记录的条数
```

#### 插入数据
```go{11}
// 插入单条数据
db.Create(&User{
    Name: "Jinzhu", Age: 18, Birthday: time.Now()
})

db.Model(&User{}).Create(map[string]interface{}{
  "Name": "jinzhu", "Age": 18,
})

// 批量插入
db.Model(&User{}).Create([]map[string]interface{}{
  {"Name": "jinzhu_1", "Age": 18},
  {"Name": "jinzhu_2", "Age": 20},
})
```

#### 指定字段插入
```go
db.Select("Name", "Age", "CreatedAt").Create(&user)
// INSERT INTO `users` (`name`,`age`,`created_at`) VALUES ("jinzhu", 18, "2020-07-04 11:05:21.775")

db.Omit("Name", "Age", "CreatedAt").Create(&user)
// INSERT INTO `users` (`birthday`,`updated_at`) VALUES ("2020-01-01 00:00:00.000", "2020-07-04 11:05:21.775"
```

### 更新

```go
db.Save(&user)
db.Updates()
```

```go{10,16}
// 条件更新
db.Model(&User{}).Where("active = ?", true).Updates("name", "hello")
// UPDATE users SET name='hello', updated_at='2013-11-17 21:34:10' WHERE active=true;

// 根据 struct 更新
db.Model(User{}).Where("role = ?", "admin").Updates(User{Name: "hello", Age: 18})
// UPDATE users SET name='hello', age=18 WHERE role = 'admin';

// 根据 `struct` 更新属性，只会更新非零值的字段
db.Model(&user).Updates(User{
    Name: "hello", Age: 18, Active: false
})
// UPDATE users SET name='hello', age=18, updated_at = '2013-11-17 21:34:10' WHERE id = 111;

// 根据 `map` 更新属性
db.Model(&user).Updates(map[string]interface{}{
    "name": "hello", "age": 18, "active": false
})
// UPDATE users SET name='hello', age=18, active=false, updated_at='2013-11-17 21:34:10' WHERE id=111;

```

#### Select
```go
// 使用 Struct 进行 Select（会 select 零值的字段）
db.Model(&user).Select("Name", "Age").Updates(User{Name: "new_name", Age: 0})
// UPDATE users SET name='new_name', age=0 WHERE id=111;
```

### 删除

####
```go
db.Delete(&email)
// DELETE from emails where id = 10;

db.Delete(&User{}, 10)
// DELETE FROM users WHERE id = 10;

db.Delete(&users, []int{1,2,3})
// DELETE FROM users WHERE id IN (1,2,3);

db.Delete(&Email{}, "email LIKE ?", "%jinzhu%")
// DELETE from emails where email LIKE "%jinzhu%";

db.Where("name = ?", "jinzhu").Delete(&email)
// DELETE from emails where id = 10 AND name = "jinzhu";

```

#### 批量删除

> gorm 默认会阻止无条件批量删除
>
> 必须加一些条件，或者使用原生 SQL，或者启用 AllowGlobalUpdate 模式

```go
db.Where("1 = 1").Delete(&User{})
// DELETE FROM `users` WHERE 1=1

db.Exec("DELETE FROM users")
// DELETE FROM users

db.Session(&gorm.Session{AllowGlobalUpdate: true}).Delete(&User{})
// DELETE FROM users
```

#### 返回删除行的数据
```go
// 返回所有列
var users []User
DB.Clauses(clause.Returning{}).Where("role = ?", "admin").Delete(&users)
// DELETE FROM `users` WHERE role = "admin" RETURNING *

// 返回指定的列
DB.Clauses(clause.Returning{Columns: []clause.Column{{Name: "name"}, {Name: "salary"}}}).Where("role = ?", "admin").Delete(&users)
// DELETE FROM `users` WHERE role = "admin" RETURNING `name`, `salary`
```

### 原生SQL

#### Scan
```go{7,10}
type Student struct {
  Name string
  Age  int
}
var s []Student
// Raw SQL
db.Raw("SELECT name, age FROM users WHERE name = ? order by age desc", "Antonio").Scan(&s)

var users []User
db.Raw("UPDATE users SET name = ? WHERE age = ? RETURNING id, name", "jinzhu", 20).Scan(&users)


// 使用原生 SQL
row := db.Raw("select name, age, email from users where name = ?", "jinzhu").Row()
row.Scan(&name, &age, &email)

// 原生 SQL
rows, err := db.Raw("select name, age, email from users where name = ?", "jinzhu").Rows()
defer rows.Close()
for rows.Next() {
  rows.Scan(&name, &age, &email)

  // 业务逻辑...
}
```

#### Exec
```go
db.Exec("Select * FROM users")
db.Exec("DROP TABLE users")
db.Exec("UPDATE orders SET shipped_at = ? WHERE id IN ?", time.Now(), []int64{1, 2, 3})
```

### 事务

```go
// 开始事务
tx := db.Begin()

if err := tx.Create(&User); err != nil {
	// 回滚事务
	tx.Rollback()
	log.Fatal(err)
}

// 提交事务
tx.Commit()
```

### 错误处理

```go
err := db.Model(User{}).Where("role = ?", "admin").Updates(User{Name: "hello", Age: 18}).Error
if err != nil {
	//...
}
```

### 日志处理

```go
db.LogMode(true)
db.SetLogger(log.New(os.Stdout, "\r\n", 0))
```


## 教程

### 通用数据库接口

```go
// 获取通用数据库对象 sql.DB，然后使用其提供的功能
sqlDB, err := db.DB()

// Ping
sqlDB.Ping()

// Close
sqlDB.Close()

// 返回数据库统计信息
sqlDB.Stats()
```

### 连接池

```go
// 获取通用数据库对象 sql.DB ，然后使用其提供的功能
sqlDB, err := db.DB()

// SetMaxIdleConns 用于设置连接池中空闲连接的最大数量。
sqlDB.SetMaxIdleConns(10)

// SetMaxOpenConns 设置打开数据库连接的最大数量。
sqlDB.SetMaxOpenConns(100)

// SetConnMaxLifetime 设置了连接可复用的最大时间。
sqlDB.SetConnMaxLifetime(time.Hour)
```

### 事务

```go
// 开始事务
tx := db.Begin()

// 事务回滚
tx.Rollback()

// 提交事务
tx.Commit()
```

