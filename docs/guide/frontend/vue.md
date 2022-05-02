# [<img src="https://v3.cn.vuejs.org/logo.png" style="width: 40px; height: 40px" alt="vue" />][1] [vue.js][1]

[1]: https://v3.cn.vuejs.org

## Overview

### 元素渲染

```html{1,8}
<div id="app">{{ message }}</div>

<script src="https://unpkg.com/vue@next"></script>
<script>
	const app = {
		data() {
			return {
				message: "Hello Vue!",
			}
		},
	}
	Vue.createApp(app).mount("#app")
</script>
```

### 列表渲染

```html
<div id="app">
	<ol>
		<li v-for="todo in todos">{{ todo.text }}</li>
	</ol>
</div>

<script src="https://unpkg.com/vue@next"></script>

<script>
	const ListRendering = {
		data() {
			return {
				// 通常为空数组，通过json调用
				todos: [
					{
						text: "Learn JavaScript",
					},
					{
						text: "Learn Vue",
					},
					{
						text: "Build something awesome",
					},
				],
			}
		},
	}

	Vue.createApp(ListRendering).mount("#app")
</script>
```
