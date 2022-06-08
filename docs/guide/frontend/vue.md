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
  border: 1px solid rgba(32,32,32, .3);
  letter-spacing: 1px;
  width: 300px;
  transition: all .3s ease;
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
