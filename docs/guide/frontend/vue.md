---
lang: zh-CN
title: Vue3
---

# [<img src="https://v3.cn.vuejs.org/logo.png" style="width: 40px; height: 40px" alt="vue" />][1] [vue.js][1]

[1]: https://v3.cn.vuejs.org

## 环境安装

```sh
# 安装nodejs
npm -v

# 安装yarn
# npm install -g yarn

# 安装vue
npm install vue -g

# 安装vue-cli
npm install -g @vue/cli
```

## 创建 vue3 项目的方式

```sh
# 1.使用 vue-cli 命令行创建
vue create <vue-project>

# 2.使用网页图形化界面创建
vue ui

# 3.使用 vite 创建
yarn create vite <project-name> --template vue
```

## Overview

### 元素渲染

::: vue-demo 元素渲染

```vue
<template>
	<div>Counter: {{ count }}</div>
</template>

<script>
export default {
	data: () => ({
		count: 0,
	}),
}
</script>

<style></style>
```

:::

### 列表渲染

::: vue-demo 列表渲染

```vue
<template>
	<div id="list-rendering">
		<ul>
			<li v-for="item in list">{{ item }}</li>
		</ul>
	</div>
</template>

<script>
export default {
	data() {
		return {
			list: ["JavaScript", "Vue", "React"],
		}
	},
}
</script>

<style></style>
```

:::

### 对象渲染

::: vue-demo 对象渲染

```vue
<template>
	<div id="object-rendering">
		<ol>
			<li v-for="todo in todos" :key="todo.id">
				{{ todo.text }}
			</li>
		</ol>
	</div>
</template>

<script>
export default {
	data: () => ({
		todos: [
			{id: 0, text: "Learn JavaScript"},
			{id: 1, text: "Learn Vue"},
			{id: 2, text: "Build something awesome"},
		],
	}),
}
</script>

<style></style>
```

:::

### vue-data

::: vue-demo vue-data.vue

```vue
<template>
	<div>{{ message }}</div>
</template>

<script>
export default {
	data() {
		return {
			message: "You loaded this page on " + new Date().toLocaleString(),
		}
	},
	/*
  data: () => ({
    count: 0,
  })
  */
}
</script>

<style></style>
```

:::

### vue-methods

::: vue-demo vue-methods.vue

```vue
<template>
	<div id="event-handling">
		<p>{{ message }}</p>
		<button @click="reverseMessage">反转 Message</button>
	</div>
</template>

<script>
export default {
	data() {
		return {
			message: "Hello Vue.js!",
		}
	},
	methods: {
		reverseMessage() {
			this.message = this.message.split("").reverse().join("")
		},
	},
}
</script>

<style>
button {
	padding: 10px;
	font-size: 1rem;
	border: 1px solid #323232;
	background: transparent;
	cursor: pointer;
	transition: all 0.3s ease;
}
button:hover {
	background: #323232;
	color: #f8f8f8;
}
</style>
```

:::

### vue-bind

::: vue-demo vue-bind.vue

```vue
<template>
	<div id="vue-bind">
		<span :title="message">鼠标悬停几秒钟查看此处动态绑定的提示信息！</span>
	</div>
</template>

<script>
export default {
	data() {
		return {
			message: "You loaded this page on " + new Date().toLocaleString(),
		}
	},
}
</script>

<style></style>
```

:::

### vue-for

::: vue-demo vue-for-list.vue

```vue
<template>
	<ul>
		<li v-for="item in list">{{ item }}</li>
	</ul>
</template>

<script>
export default {
	data() {
		return {
			list: ["JavaScript", "Vue", "React"],
		}
	},
}
</script>

<style></style>
```

:::

::: vue-demo vue-for-object.vue

```vue
<template>
	<div id="list-rendering">
		<ol>
			<li v-for="todo in todos" :key="todo.id">
				{{ todo.text }}
			</li>
		</ol>
	</div>
</template>

<script>
export default {
	data() {
		return {
			todos: [
				{id: 0, text: "Learn JavaScript"},
				{id: 1, text: "Learn Vue"},
				{id: 2, text: "Build something awesome"},
			],
		}
	},
}
</script>

<style></style>
```

:::

### vue-template

::: vue-demo vue-temp

```vue
<script>
export default {
	data: () => ({
		branches: ["main", "v2-compat"],
		currentBranch: "main",
	}),
}
</script>

<template>
	<template v-for="branch in branches">
		<input type="radio" :id="branch" :value="branch" name="branch" v-model="currentBranch" />
		<label :for="branch">{{ branch }}</label>
	</template>
	<p>vuejs/vue@{{ currentBranch }}</p>
</template>
```

:::

::: vue-demo vue-temp-2

```vue
<template>
	<ol>
		<TodoItem v-for="item in groceryList" :todo="item" :key="item.id"></TodoItem>
	</ol>
</template>

<script>
import TodoItem from "./TodoItem.vue"

export default {
	components: {
		TodoItem,
	},
	data() {
		return {
			groceryList: [
				{id: 0, text: "Vegetables"},
				{id: 1, text: "Cheese"},
				{id: 2, text: "Whatever else humans are supposed to eat"},
			],
		}
	},
}
</script>
```

```vue
<!-- TodoItem.vue -->
<script>
export default {
	props: {
		todo: Object,
	},
}
</script>

<template>
	<li>{{ todo.text }}</li>
</template>
```

:::

### vue-model

::: vue-demo vue-model.vue

```vue
<template>
	<div id="two-way-binding">
		<p>{{ message }}</p>
		<input v-model="message" />
	</div>
	<!-- onChange -->
</template>

<script>
export default {
	data() {
		return {
			message: "Hello Vue.js!",
		}
	},
}
</script>

<style>
input {
	outline: none;
	padding: 10px 5px;
	/* border-radius: 30px; */
	border: 1px solid rgba(32, 32, 32, 0.3);
	letter-spacing: 1px;
	width: 300px;
	transition: all 0.3s ease;
}
input:focus {
	border-color: #323232;
}
</style>
```

:::

### vue-if

::: vue-demo vue-if.vue

```vue
<template>
	<div id="conditional-rendering">
		<span v-if="seen">现在你看到我了</span>
	</div>
</template>

<script>
export default {
	data() {
		return {
			seen: true,
		}
	},
}
</script>

<style></style>
```

:::

### vue-fetch

::: vue-demo vue-fetch

```vue
<script>
const API_URL = `https://api.github.com/repos/vuejs/core/commits?per_page=3&sha=`

export default {
	data: () => ({
		branches: ["main", "v2-compat"],
		currentBranch: "main",
		commits: null,
	}),

	created() {
		// 在初始化的时候进行获取
		this.fetchData()
	},

	watch: {
		// 当 currentBranch 改变时重新获取
		currentBranch: "fetchData",
	},

	methods: {
		async fetchData() {
			const url = `${API_URL}${this.currentBranch}`
			this.commits = await (await fetch(url)).json()
		},
		truncate(v) {
			const newline = v.indexOf("\n")
			return newline > 0 ? v.slice(0, newline) : v
		},
		formatDate(v) {
			return v.replace(/T|Z/g, " ")
		},
	},
}
</script>

<template>
	<h1>Latest Vue Core Commits</h1>
	<template v-for="branch in branches">
		<input type="radio" :id="branch" :value="branch" name="branch" v-model="currentBranch" />
		<label :for="branch">{{ branch }}</label>
	</template>
	<p>vuejs/vue@{{ currentBranch }}</p>
	<ul>
		<li v-for="{html_url, sha, author, commit} in commits">
			<a :href="html_url" target="_blank" class="commit">{{ sha.slice(0, 7) }}</a>
			-
			<span class="message">{{ truncate(commit.message) }}</span>
			<br />
			by
			<span class="author">
				<a :href="author.html_url" target="_blank">{{ commit.author.name }}</a>
			</span>
			at
			<span class="date">{{ formatDate(commit.author.date) }}</span>
		</li>
	</ul>
</template>

<style>
a {
	text-decoration: none;
	color: #42b883;
}
li {
	line-height: 1.5em;
	margin-bottom: 20px;
}
.author,
.date {
	font-weight: bold;
}
</style>
```

:::

## 应用案例

### 单行输入框

::: vue-demo 单行输入框

```vue
<template>
	<p>Message is: {{ message }}</p>
	<input v-model="message" placeholder="edit me" />
</template>

<script>
export default {
	data() {
		return {
			message: "",
		}
	},
}
</script>
```

:::

### 多行文本框

::: vue-demo 多行文本框

```vue
<template>
	<p>Multiline message is: {{ message }}</p>
	<textarea v-model="message"></textarea>
</template>
<script>
	export default {
		data() {
			return {
				message: '',
			}
		}
	}
</script>
```

:::
### 多选框

::: vue-demo 多选框

```vue
<template>
	<select v-model="selected">
		<option v-for="option in options" :value="option.value">
			{{ option.text }}
		</option>
	</select>
	<div>Selected: {{ selected }}</div>
</template>

<script>
export default {
	data() {
		return {
			selected: "A",
			options: [
				{text: "One", value: "A"},
				{text: "Two", value: "B"},
				{text: "Three", value: "C"},
			],
		}
	},
}
</script>
```

:::
