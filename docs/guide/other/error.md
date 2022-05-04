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
