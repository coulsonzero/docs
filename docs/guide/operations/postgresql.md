# postgreSQL

insatll
```shell
brew install postgresql@18
```



## FAQ

### 安装失败
error question:
`A `brew install postgresql@18` process has already locked /Users/coulsonzero/Library/Caches/Homebrew/downloads/364d9a46f3c0b7c0d51a395cfd6a058b44ed80080a979372e1ef7c0a1188c71f--krb5.rb.incomplete`

solution:
```sh
rm -f /Users/coulsonzero/Library/Caches/Homebrew/downloads/364d9a46f3c0b7c0d51a395cfd6a058b44ed80080a979372e1ef7c0a1188c71f--krb5.rb.incomplete

brew install postgresql@18
```
