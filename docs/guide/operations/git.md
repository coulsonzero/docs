# Git



### 发布新版本: Releases-tag

```sh
# 查看所有已发布的版本号
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
```