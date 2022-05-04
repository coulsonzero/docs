<!-- <span style="color: rgb(0,180,0)">✓</span> -->

# Error 日志记录

## vuepress

### <span style="color: rgb(0,180,0)">✓</span> <span style="color: rgb(200,0,0)">ReferenceError: path is not defined</span>

> 2022-05-04 已解决

::::: warning ReferenceError: path is not defined

:::: code-group
::: code-group-item config.js

```js
const path = require("path")
```

:::
::::
:::::

### <span style="color: rgb(0,180,0)">✓</span> <span style="color: rgb(200,0,0)">failed to resolve import</span>

> 2022-05-04 已解决

::::: warning failed to resolve import
:::: code-group
::: code-group-item Terminal

```
Error: [vite]: Rollup failed to resolve import
"/docs/.vuepress/public/assets/react/AntDesingerPro.png"
from "docs/.vuepress/.temp/pages/guide/frontend/react/index.html.vue".
```

:::
::: code-group-item config.js

```js
// 静态资源路径错误 需要更改资源路径，设置别名更方便
const path = require("path")

module.exports = {
	//...
	alias: {
		"@": path.resolve(__dirname, "./public"),
	},
	//...
}
```

:::
::: code-group-item README.md

```md
<!-- ![Ant Designer Pro](/docs/.vuepress/public/assets/react/AntDesingerPro.png) -->

![Ant Designer Pro](@/assets/react/AntDesingerPro.png)
```

:::
:::::

## git

### <span style="color: rgb(0,180,0)">✓</span> <span style="color: rgb(200,0,0)">vscode 同步更改报错</span>

> 2022-05-04 已解决

::::: warning

:::: code-group Terminal

```bash
> git pull --tags origin master
From github.com:coulsonzero/docs
 * branch            master      -> FETCH_HEAD
 ! [rejected]        v2022-05-03 -> v2022-05-03  (would clobber existing tag)
```

:::
::: code-group-item Solution

```
vscode上切换到对应分支，然后删除
```

:::
::::
:::::

### SSL_connect error
> 2022-05-04 已解决

::::: warning

:::: code-group
::: code-group-item Terminal
```
$ git push
fatal: unable to access 'https://github.com/coulsonzero/webProjects.git/': LibreSSL SSL_connect: SSL_ERROR_SYSCALL in connection to github.com:443
```
:::
::: code-group-item Bash
```bash
$ git push --force
fatal: unable to access 'https://github.com/coulsonzero/webProjects.git/': LibreSSL SSL_connect: SSL_ERROR_SYSCALL in connection to github.com:443

$ git remote -v
origin  https://github.com/coulsonzero/webProjects.git (fetch)
origin  https://github.com/coulsonzero/webProjects.git (push)
$ git remote remove origin
$ git remote add origin git@github.com:coulsonzero/webProjects.git
$ git remote -v
origin  git@github.com:coulsonzero/webProjects.git (fetch)
origin  git@github.com:coulsonzero/webProjects.git (push)

$ git push
fatal: The current branch master has no upstream branch.
To push the current branch and set the remote as upstream, use

    git push --set-upstream origin master

$ git push origin
fatal: The current branch master has no upstream branch.
To push the current branch and set the remote as upstream, use

    git push --set-upstream origin master

$ git push --set-upstream origin master
Enumerating objects: 60, done.
Counting objects: 100% (60/60), done.
Delta compression using up to 8 threads
Compressing objects: 100% (41/41), done.
Writing objects: 100% (44/44), 11.59 KiB | 3.86 MiB/s, done.
Total 44 (delta 20), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (20/20), completed with 12 local objects.
To github.com:coulsonzero/webProjects.git
   4902cdf..a73d7dc  master -> master
Branch 'master' set up to track remote branch 'master' from 'origin'.
```
:::
::::
:::::
