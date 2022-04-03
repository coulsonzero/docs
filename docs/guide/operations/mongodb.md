# MongoDB



## 数据库

### 查

- 查看当前数据库
```
db
```

```sql
>>> db
test
```


- 查看所有数据库
> 无法查看到创建的数据库！？
```
show dbs
```

```sql
>>> show dbs
admin   0.000GB
config  0.000GB
local   0.000GB
```



### 增(切换)
> 未创建数据库时，将使用默认数据库test
```
use [dbName]
```

```sql
>>> use mongo
switched todb mongo
```

### 删
> 删除当前数据库，默认为test
> 没有删除！？
```
db.dropDatabase()
```





## 表


### 查

```
show tables 
show collections  # 推荐
```
```sql
>>> show collections
student
>>> show tables
student
```

### 增

```
db.createCollection("student")
```

```sql
>>> db.createCollection("student")
{ "ok": 1 }
```

### 删

```
db.[collection].drop()
```
```sql
>>> db.student.drop()
true
```



## 数据
### 查

> Find(<query>)： query为筛选条件

```
db.[collection].find()
db.[collection].find().pretty() 		  # 格式化显示所有文档
db.[collection].find().sort({KEY:-1})  # 排序: 1 为升序，-1降序
```
```sql
>>> db.student.find()
{ "_id": ObjectId("62495b858fba384a40ee73c8"), "title": "MongoDB" ...}

# WHERE by='菜鸟教程' AND title='MongoDB 教程'
>>> db.student.find({"by":"菜鸟教程", "title":"MongoDB 教程"}).pretty()

# WHERE by='菜鸟教程' OR title='MongoDB 教程'
>>> db.student.find({$or:[{"by":"菜鸟教程"},{"title": "MongoDB 教程"}]}).pretty()

# where likes > 50 AND (by = '菜鸟教程' OR title = 'MongoDB 教程')
>>> db.student.find({"likes": {$gt:50}, $or: [{"by": "菜鸟教程"},{"title": "MongoDB 教程"}]}).pretty()

# order by likes desc
>>> db.student.find({},{"title":1,_id:0}).sort({"likes": -1}) 
```


### 增

> document 文档的数据结构和 JSON 基本一样。所有存储在集合中的数据都是 BSON 格式。
> BSON 是一种类似 JSON 的二进制形式的存储格式，是 Binary JSON 的简称
>
>  - save()：如果 _id 主键存在则更新数据，如果不存在就插入数据。该方法新版本中已废弃，可以使用 **db.collection.insertOne()** 或 **db.collection.replaceOne()** 来代替。
> - insert(): 若插入的数据主键已经存在，则会抛 **org.springframework.dao.DuplicateKeyException** 异常，提示主键重复，不保存当前数据

```
db.[collection].insert(document)
db.[collection].insertOne()
db.[collection].insertMany()
```

- 直接插入数据

```sql
>>> db.student.insert({title: 'MongoDB 教程',
	      description: 'MongoDB 是一个 Nosql 数据库',
				by: 'MongoDB中文网', 
				url: 'http://www.mongodb.org.cn', 
				tags: ['mongodb', 'database', 'NoSQL'],
				likes: 100  
})
WirteResult( {"nInserted": 1} )
```

- 使用变量插入数据
```sql
>>> option = ({title: 'MongoDB 教程',
	      description: 'MongoDB 是一个 Nosql 数据库',
				by: 'MongoDB中文网', 
				url: 'http://www.mongodb.org.cn', 
				tags: ['mongodb', 'database', 'NoSQL'],
				likes: 100  
})
>>> db.student.insert(option)
```
- 插入单条数据
```sql
db.collection.insertOne([{"a": 2}])
```

- 插入多条数据
```sql
db.collection.insertMany([{"b": 3}, {'c': 4}])
```

### 删

```
db.[collection].remove()  	# 已过时
db.[collection].deleteOne()
db.[collection].deleteMany({})
```
```sql
# 清空数据（类似常规 SQL 的 truncate 命令）
db.student.remove({})
db.inventory.deleteMany({})

# 删除 status 等于 A 的全部文档：
db.inventory.deleteMany({ status : "A" })

# 删除 status 等于 D 的一个文档：
db.inventory.deleteOne( { status: "D" } )
# 移除 title 为 'MongoDB 教程' 的第一条找到的记录文档：
db.col.remove({'title':'MongoDB 教程'}, 1)
```

### 改

```
db.[collection].update(document1, {$set: docuemnt2})
db.[collection].update(document1, {$set: docuemnt2}, {multi:true})   # 修改多条相同的文档
```



```sql
db.student.update({'title':'MongoDB 教程'},{$set:{'title':'MongoDB'}})
db.student.update({'title':'MongoDB 教程'},{$set:{'title':'MongoDB'}},{multi:true})
```



```
db.collection.update(
   <query>,
   <update>,
   {
     upsert: <boolean>,
     multi: <boolean>,
     writeConcern: <document>
   }
)
```



```
query : update的查询条件，类似sql update查询内where后面的。
update : update的对象和一些更新的操作符（如$,$inc...）等，也可以理解为sql update查询内set后面的
upsert : 可选，这个参数的意思是，如果不存在update的记录，是否插入objNew,true为插入，默认是false，不插入。
multi : 可选，mongodb 默认是false,只更新找到的第一条记录，如果这个参数为true,就把按条件查出来多条记录全部更新。
writeConcern :可选，抛出异常的级别。
```


## 操作符
- 条件操作符
```
(>) 大于 - $gt
(<) 小于 - $lt
(>=) 大于等于 - $gte
(<= ) 小于等于 - $lte
```
```sql
# 想获取"studentl"集合中 "score" 小于 120 的数据
db.student.find({score : {$lt : 120}})
```



## 索引
### 查
```
db.[collection].getIndexes()
db.[collection].totalIndexSize()  # 索引大小
```

### 增
```
db.[collection].createIndex(keys, options)
```

```sql
# 单个索引字段
>>> db.student.createIndex({"title":1})

# 多个字段创建索引（关系型数据库中称作复合索引）
>>> db.student.createIndex({"title":1,"description":-1})
```

### 删

```
db.[collection].dropIndex("索引名称")	# 删除指定索引
db.[collection].dropIndexes()			   # 删除所有索引
```

