# MySQL

## Overview

### 下载 mysql 程序

[mysql 官网下载地址](https://dev.mysql.com/downloads/mysql/)

### 查看 mysql 版本

**方式一：linux 命令查询**

```sh
$ mysql --version;
# mysql  Ver 8.0.27 for macos11 on arm64 (MySQL Community Server - GPL)

$ mysql -V;
# mysql  Ver 8.0.27 for macos11 on arm64 (MySQL Community Server - GPL)
```

**方式二：mysql 内查询**

```sh
mysql> select version();
# +-----------+
# | version() |
# +-----------+
# | 8.0.27    |
# +-----------+
# 1 row in set (0.00 sec)
```

### MacOS 启动 mysql

```sh
# 启动 mysql
$ mysql -u root -p
# Enter password: ****

# 退出 mysql
mysql> exit
# Bye
```

## 查询语句

```sql
select [distinct] 查询列表 [as 新名] from 表名
[[inner/left/right/full out] join ... on ...]
[where ...]
[group by ...]
[order by ... [desc|asc]]
limit a, b
;
```