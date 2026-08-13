# postgreSQL

install
```shell
brew install postgresql@18
```
install successful
```sh
echo 'export PATH="/Users/coulsonzero/homebrew/opt/postgresql@18/bin:$PATH"' >> ~/.zshrc
source ~/.zshrc
brew services start postgresql@18   # 开机自启动
psql --version
# psql (PostgreSQL) 18.4 (Homebrew)
```

```sh
psql coulsonzero    # 创建数据库coulsonzero, 默认为postgres
psql
```


usage
```shell
psql postgres # 进入默认数据库
psql -h localhost -p 5432 -U coulsonzero -d postgres # 连接数据库
# psql (18.4 (Homebrew))
# postgres=#
# 连接数据库, 退出在psql 界面中输入 \q 并按回车即可退出
```
常用 psql 元命令：在 psql 客户端内，有许多以反斜杠 \ 开头的元命令，非常实用。
\l: 列出所有数据库
\c <dbname>: 切换到指定数据库
\dt: 列出当前数据库的所有表
\d <tablename>: 查看表结构
\du: 列出所有用户和角色
\?: 查看所有元命令的帮助
\q: 退出 psql

## FAQ

### 安装失败
* error question:
`A `brew install postgresql@18` process has already locked /Users/coulsonzero/Library/Caches/Homebrew/downloads/364d9a46f3c0b7c0d51a395cfd6a058b44ed80080a979372e1ef7c0a1188c71f--krb5.rb.incomplete`

solution:
```sh
rm -f /Users/coulsonzero/Library/Caches/Homebrew/downloads/364d9a46f3c0b7c0d51a395cfd6a058b44ed80080a979372e1ef7c0a1188c71f--krb5.rb.incomplete

brew install postgresql@18
```
* error question:
configure: error: The `pkg-config` script could not be found or is too old. Make sure it is in your PATH or set the PKG_CONFIG environment variable to the full path to pkg-config.

solution:
```sh
brew install pkg-config
brew link pkgconf
brew update
```
