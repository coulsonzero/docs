# SQL


## Database
### 查询数据库

```
show databases;
```
### 使用数据库

```
use database 数据库名;
```
### 新建数据库
```
create dabatase 数据库名;
```
### 删除数据库
```
drop database 数据库名;
```
## Table
### 查询数据表
#### 所有表
```
show tables;
```
#### 表结构
```
desc ...;
```
#### 表内容
```
select * from ...;
```
### 新建数据表

```
create table [if not exists] table_name
(
    column_name1 data_type(size),    
    column_name2 data_type(size),
    ...
    column_name3 data_type(size),    
    PRIMARY KEY(ID)
) ENGINE=InnoDB CHARAULT=utf8;    
```
### 复制表

#### 同时复制表内容和结构

```
CREATE TABLE new_table SELECT * FROM new_table;
```
#### 复制表内容
```
INSERT INTO new_table SELECT * FROM new_table; 
```
#### 复制表结构
```
CREATE TABLE new_table LIKE new_table;
```
### 删除表

#### 删除表数据，保留结构(不可回滚)

```
truncate table 表名;
```
#### 不保留表结构，完全删除表(可回滚)

```
drop table [if exists] ...;
```
### 修改表名

```
alter table ... rename as ...;
rename table 旧的表名 to 新的表名;
```
## Column

### 增

```
alter table 表名 add 字段名 字段类型;
```
### 删
```
alter table 表名 drop 字段名;
```
### 查
```
desc 表名;
```
### 改
#### 修改字段名
```
alter table 表名 change 旧的字段名 新的字段名 字段类型;
```
#### 修改字段类型
```
alter table 表名 modify 字段名 新的字段类型;
```
## Data
### 增(末尾插入)
```
insert [ignore] into 表名(字段1,字段2) values(value1, value2);
```
### 删
```
Delete from 表名 where ...;
truncate table 表名;
```
### 查
```
select 字段名 from 表名 where ...;
```
### 改
```
update 表名 set 字段 = 修改后的内容 where ...;
```
## Index

```
create [unique] index ... on table_name(column_name);
Alter table ... add [unique] index ...(column_name);
```

