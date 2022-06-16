Redis

## 环境安装
> 安装redis
```sh
$ brew install redis
```

> 1. 启动redis服务
```sh
# 方式一: 后台运行redis服务
$ brew services restart redis
# 方式二
$ redis-server
```

> 2. 启动redis客户端
```sh
# 启动客户端, 默认port为6379
$ redis-cli
$ redis-cli -h 127.0.0.1 -p 6379
```
> 3. 关闭redis客户端连接
```sh
# 关闭客户端
redis> shutdown
not connected> quit

```
> 4.关闭服务
```sh
$ brew services stop redis

# 强行终止
# $ sudo pkill redis-server
```

> 查看redis运行状况
```sh
$ brew services info redis
```
> 查看redis进程
```sh
$ ps axu | grep redis
```

## RedisInsight
> redis可视化工具

## 简介

> REmote DIctionary Server(Redis)
>
> Redis 是一个开源（BSD许可）的，内存中的数据结构存储系统，它可以用作数据库、缓存和消息中间件
>
> 非关系型数据库



## 数据结构类型

- String: 字符串
- Hash: 散列
- List: 列表
- Set: 集合
- Sorted Set: 有序集合



## String 字符串

### 增
#### APPEND

```sql
# 如果变量存在，则末尾追加， 如果变量不存在，则相当于SET
append name " Zero"
```

#### SET

```sql
# 变量赋值，如果已存在则覆盖
SET name "Coulson"
```

---

### 查
#### GET

```sql
# 获取字符串的内容
GET name
```
#### GETRANGE

```sql
# 返回字符串索引子串
getrange name 1 3
```
#### STRLEN
```sql
# 返回字符串长度
strlen name
```
#### EXISTS
```sql
# 存在为1，否则为0
exists name
```

---
### 示例

:::details 点击查看示例
```sql
redis>>> SET name "Coulson"
redis>>> APPEND name " Zero"
redis>>> GET name
"Coulson Zero"
redis>>> GETRANGE name 1 3
"oul"
redis>>> STRLEN name
(integer) 7
redis>>> exists name
(integer) 1
```
:::

## List 列表

### 增
> 如果list不存在，则新建

#### LPUSH & RPUSH
```sql
# 头部添加
lpush mylist "redis"
# 尾部添加
rpush mylist "mysql"
```

---

### 删
#### DEL
```sql
# 清空数组全部值
del mylist
```
#### RPOP & LPOP
```sql
# 删除并返回末尾最后一个元素
rpop mylist
# 删除并返回头部第一个元素
lpop mylist
```

---

### 查
#### LRANGE
```sql
# 查看数组所有内容
lrange mylist 0 -1
```

#### LINDEX
```sql
# 返回数组索引对应的值,空为nil
lindex mylist 0
lindex mylist -1
```

#### LLEN
```sql
# 数组长度
llen mylist
```

## Hash 哈希字典
### 增
#### HMSET
```sql
hmset [key] [field] value [field value ...]
```
```sql
hmset myhash name "Coulson" age 25 country "China"
```

### 删
#### HDEL
```sql
# 删除字段并返回索引
hdel [key] [field]
```

```sql
hdel myhash age
```

### 查
#### HGETALL
```sql
# 返回hash所有的字段和值
hgetall [key]
```
```sql
hgetall myhash
```

#### HGET & HMGET
```sql
# 返回单个字段值
hget [key] [field]
# 返回多个指定字段的值
hmget [key] [field ...]
```
```sql
hget myhash name
hmget myhash name age country

```

#### HKEYS
```sql
hget [key]
```
```sql
hkeys myhash
```

#### HVALS
```sql
hvals [key]
```
```sql
hvals myhash
```

### 示例
:::details 点击查看示例
```sql
127.0.0.1:6379> hmset myhash name "Coulson" age 25 country "China"
OK
127.0.0.1:6379> hgetall myhash
1) "name"
2) "Coulson"
3) "country"
4) "China"

127.0.0.1:6379> hget myhash name
"Coulson"
127.0.0.1:6379> hget myhash age
"25"
127.0.0.1:6379> hget myhash country
"China"
127.0.0.1:6379> hdel myhash age
(integer) 1

127.0.0.1:6379> HMGET myhash name age country
1) "Coulson"
2) (nil)
3) "China"

127.0.0.1:6379> hkeys myhash
1) "name"
2) "country"
127.0.0.1:6379> hvals myhash
1) "Coulson"
2) "China"
```
:::



## Set 集合

### 增
#### SADD
```sql
# 末尾增加元素, 如果元素存在则返回0并将此元素置于末尾，不存在返回1
sadd [key] [value ...]
```
```sql
# 末尾增加元素，并返回数量
sadd myset "mysql"
sadd myset "redis" "mongodb"
```
### 删
#### SPOP
```sql
# 删除指定索引元素，索引越界则返回整个集合的所有元素！
spop [key] [index]
```
```sql
spop myset 1
```
#### SREM
```sql
# 删除指定名称的元素
srem [key] [value]
```
```sql
srem myset "mysql"
```

### 查
#### SMEMBERS
```sql
# 查看Set集合中的所有元素
smembers [key]
```
```sql
smembers myset
```

#### SCARD
```sql
# 返回集合中元素的数量
scard [key]
```
```sql
scard myset
```

### 示例
::: details 点击查看Set示例
```sql
127.0.0.1:6379> sadd myset "mysql"
(integer) 1
127.0.0.1:6379> sadd myset "redis"
(integer) 1
127.0.0.1:6379> sadd myset "mongodb"
(integer) 1
127.0.0.1:6379> smembers myset
1) "redis"
2) "mongodb"
3) "mysql"

127.0.0.1:6379> sadd myset "mysql"
(integer) 0
127.0.0.1:6379> smembers myset
1) "redis"
2) "mongodb"
3) "mysql"

127.0.0.1:6379> SPOP myset 1
1) "mongodb"
127.0.0.1:6379> smembers myset
1) "redis"
2) "mysql"

127.0.0.1:6379> srem myset "mysql"
(integer) 1
127.0.0.1:6379> smembers myset
1) "redis"
```
:::

## Sorted Set 有序集合



### 增

#### ZADD

```sql
# 增加一个元素, 如果存在则舍弃之前的元素和索引，保留最新的
zadd myzset 1 "python"
# 增加多个元素
zadd myzset 2 "java" 3 "javascript"
```

### 删
#### ZPOPMAX & ZPOPMIN
```sql
# 删除最后一个元素
zpopmax [key]
# 删除第一个元素
zpopmin
```



### 查

#### ZRANGEBYLEX
```sql
# 按照插入时的顺序排列
ZRANGEBYLEX [key] - +
```

#### ZREVRANGE

```sql
-- 降序
ZREVRANGE "score" 0 -1 WITHSCORES
```

#### ZRANGE

```sql
-- 升序
ZRANGE [key] 0 -1 WITHSCORES
```

```
ZRANGE myzset 0 -1 WITHSCORES
```

#### ZSCORE
```sql
# 返回元素索引
zscore myzset "javascript"
```
#### ZCARD
```sql
# 返回长度(元素个数)
zcard [key]
```





### 示例

```sql
127.0.0.1:6379> zadd myzset 1 "python"
(integer) 1
127.0.0.1:6379> zadd myzset 2 "java" 3 "javascript"
(integer) 2
127.0.0.1:6379> ZRANGE myzset 0 -1 WITHSCORES
1) "python"
2) "1"
3) "java"
4) "2"
5) "javascript"
6) "3"

127.0.0.1:6379> zscore myzset "javascript"
"3"

redis> ZRANGEBYLEX myzset - +
1) "python"
2) "java"
3) "javascript"
4) "rust"
```


## 测试命令

### ECHO
> 输出
```sql
redis> ECHO HelloWorld!
HelloWorld!
```

### PING
> 测试连接及其延时, 其后有参数时返回参数，无参数返回"pong"
> 客户端处于频道订阅模式下，它将是一个multi-bulk返回，第一次时返回”pong”，之后返回空（empty bulk），除非命令后面更随了参数
```
redis> PING
PONG
redis> PING "hello world"
"hello world"
```
### SHUTDOWN
> 关闭连接
```sql
redis> shutdown
```

### QUIT
> 关闭redis连接，退出redis-cli
```sql
redis> quit
```
### SELECT
> 切换当前数据库索引
```sql
redis> select [index]
```

### SAVE
> 创建当前数据库的备份
```sql
redis> save
```

### Client
> 客户端连接
```sql
# 返回客户端列表
CLIENT LIST
# 返回当前客户端连接的名称
CLIENT SETNAME
# 挂起客户端连接
CLIENT PAUSE
# 关闭客户端连接
CLIENT KILL
```

## FAQ

- Redis数据类型

```
String: 字符串
List: 列表
Hash: 哈希
Set: 集合
Zset: 有序集合
```

- Redis持久化机制

```
RDB: 将数据库快照以二进制的方式保存到磁盘中
AOF: 以协议文本的方式，将所有对数据库进行写入的命令和参数记录到AOF文件，从而记录数据库状态
```

