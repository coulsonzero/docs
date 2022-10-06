# Git



### 发布新版本: Releases-tag

:::warning
```sh
# 发布前请先推送
$ git add .
$ git commit -m "update"
$ git push
```
:::

**发布新版本**
```sh
# 查看所有已发布的版本号(本地)
$ git tag
v0.1.0
# 发布新的版本号(保存在本地)
$ git tag -a v0.2.0 -m "update import package: gopkg"
# 查看指定tag版本信息
$ git show v0.2.0
# 将本地tag推送到远程仓库中(release tag)
$ git push origin v0.2.0
# 再次查看是否发布成功
$ git tag
v0.1.0
v0.2.0


# 删除tag标签并推送至远程仓库
$ git tag -d v0.1.0
$ git push origin :refs/tags/v0.1.0

# 同步本地与远程仓库tag
$ git fetch
# 移除远程仓库不存在的本地tag
$ git fetch -p
```

### dev分支工作，发布新版本时切换到master主分支

```sh
# 创建并切换到dev分支(本地)
$ git checkout -b dev

# 推送到远程仓库dev分支
$ git add .
$ git commit -m "update: dev"
$ git push origin dev

# 切换到主分支
$ git checkout master

# 合并dev分支 -> master
$ git merge dev

# 删除分支
# $ git checkout -d dev
```


## FAQ

### git pull

**Question**

> 例如: 拉取4，更新1

```sh
$ git pull
fatal: Not possible to fast-forward, aborting.
```

**Solution**

```sh
$ git pull origin master --rebase
```