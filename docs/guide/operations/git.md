# Git

![](@/assets/git/git.png)


### 发布新版本: Releases-tag


```sh
# 发布前请先推送
$ git add .
$ git status
$ git commit -m "update"
$ git push origin master
```


### git clone
```sh
# 克隆远程仓库
$ git clone https://github.com/coulsonzero/Python.git

```
### git remote
```sh
# 查看远程仓库信息
$ git remote -v
$ git remote remove origin
$ git remote add origin https://github.com/coulsonzero/Python.git
```

### git commit
```sh
# 注释
$ git commit -m "注释"     # 提交注释到本地仓库
$ git commit --amend      # 修改注释
```

### git branch
```sh
# 查看分支
$ git branch       # 查看本地分支
$ git branch -r    # 查看远程分支
$ git branch -a    # 查看本地和远程分支

$ git branch [branch_name]                  # 增
$ git branch -d [branch_name]               # 删除本地分支
$ git push origin —delete [branch_name]     # 删除远程分支
$ git branch -m master main                 # 改: master -> main
```

### git checkout
```sh
$ git checkout dev                # 切换
$ git checkout -b dev             # 创建并切换到该分支
$ git checkout –b dev origin/dev  # 创建远程dev分支到本地dev分支
$ git checkout -b main            # 覆盖：将dev分支复制并创建为main
$ git checkout -- readme.txt      # 撤销工作区的修改(暂存区不变)
$ git merge dev                   # 合并分支到当前分支
```


### git push
```sh
$ git push origin dev     # 推送到远程分支
$ git push origin dev:dev # 创建远程分支
$ git push origin :dev    # 删除远程分支
$ git push origin --delete dev # 删除远程分支
```

### git diff | git log | git reset
```sh
# 查看代码变动
git diff HEAD
git diff --staged

# 提交日志
git log
git log --pretty=format:"%h - %an, %ar : %s"

git reflow
# 版本回退
git reset HEAD
git reset commitId
git reset --hard 35db6f0
```

**合并版本后回退**
```sh
git checkout v1.0
git reflog
git reset --hard 35db6f0
```

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


# 删除tag标签(本地和远程)
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

### git push

**Q: error: failed to push some refs to**

```sh
$ git push origin master
To github.com:coulsonzero/Go-project.git
 ! [rejected]        master -> master (non-fast-forward)
error: failed to push some refs to 'github.com:coulsonzero/Go-project.git'
hint: Updates were rejected because the tip of your current branch is behind
hint: its remote counterpart. Integrate the remote changes (e.g.
hint: 'git pull ...') before pushing again.
```

**Solution: git pull**

```sh
$ git pull origin master --rebase
$ git push origin master
```

### SSL

> "fatal: unable to access 'http://github.com/.../*.git/': OpenSSL  SSL_read: Connection was reset

**Solution:**

```sh
$ git config --global --unset http.proxy   # 取消代理
$ git push                                 # 重新推送
```