---
lang: zh-CN
title: Vue3
---

# [<img src="https://v3.cn.vuejs.org/logo.png" style="width: 40px; height: 40px" alt="vue" />][1] [vue.js][1]

[1]: https://v3.cn.vuejs.org

## 一、快速开始
### 1.1 环境安装

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

### 1.2 创建 vue 项目

:::: code-group
::: code-group-item 方式一
```sh
$ npm create vue@latest

Vue.js - The Progressive JavaScript Framework

✔ 请输入项目名称： … vue-book
✔ 是否使用 TypeScript 语法？ … 否 / 是
✔ 是否启用 JSX 支持？ … 否 / 是
✔ 是否引入 Vue Router 进行单页面应用开发？ … 否 / 是
✔ 是否引入 Pinia 用于状态管理？ … 否 / 是
✔ 是否引入 Vitest 用于单元测试？ … 否 / 是
✔ 是否要引入一款端到端（End to End）测试工具？ › 不需要
✔ 是否引入 ESLint 用于代码质量检测？ … 否 / 是
✔ 是否引入 Prettier 用于代码格式化？ … 否 / 是
✔ 是否引入 Vue DevTools 7 扩展用于调试? (试验阶段) … 否 / 是
```
:::
::: code-group-item 方式二

```sh
$ npm init vue@latest

Vue.js - The Progressive JavaScript Framework

✔ Project name: … `vue-admin`
✔ Add TypeScript? … No / `Yes`
✔ Add JSX Support? … `No` / Yes
✔ Add Vue Router for Single Page Application development? … No / `Yes`
✔ Add Pinia for state management? … `No` / Yes
✔ Add Vitest for Unit Testing? … `No` / Yes
✔ Add an End-to-End Testing Solution? › `No` / Yes
✔ Add ESLint for code quality? … No / `Yes`
✔ Add Prettier for code formatting? … No / `Yes`
```
:::
::: code-group-item 方式三

```sh
# 1.使用 vue-cli 命令行创建
vue create <vue-project>

# 2.使用网页图形化界面创建
vue ui

# 3.使用 vite 创建
yarn create vite <project-name> --template vue
```

:::
::::

### 1.3 项目结构

```sh
├── public
│   ├── favicon.ico
│   └── index.html
└── src
```

### 1.4 vue 组件
```vue
<script>
export default {
  data() {
    return {
      count: 0
    }
  },
  methods: {
    increment() {
      this.count++
    }
  },
  mounted() {
    this.increment()
  }
}
</script>
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


### vue-bind


```vue
<div :class="['progress-color', color]"></div>
<div :style="{width: item.amount, background: item.color}"></div>
<!-- 连接 -->
<img :src="['/src/assets/icons/' + icon]" alt="" />

```

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
````

:::

### vue-for

::: vue-demo vue-for-list.vue

```vue
<template>
	<ul>
		<li v-for="(item, index) in list" :key="index">{{ item }}</li>
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
			<li v-for="(item, index) in todos" :key="index">
				{{ item.text }}
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



### v-on

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



::: vue-demo
```vue
<script>
export default {
  data() {
	  return {
    	counter: 0
  	}
	}
}
</script>

<template>
	<button @click="counter++">Add 1</button>
	<p>The button above has been clicked {{ counter }} times.</p>
</template>
```
:::

```vue
<template>
	<div
		v-for="(item, index) in items"
		:key="index"
		@click="handleClick(item, $event)">
	{{ item }}
	</div>
</template>
<script>
export default {
	data() {
		return {
			items: ["Item 1", "Item 2", "Item 3"],
		}
	},
	methods: {
		handleClick(item, e) {
			console.log(item, e)
		}
	}
}
</script>
```

```vue
// 阻止跳转
@click.prevent
// 阻止冒泡
@click.stop
```



### vue-ref
```vue
<template>
	<div>
		<input ref="inputRef" type="text" />
		<button @click="handleClick">Click me</button>
	</div>
</template>
<script>
export default {
	methods: {
		handleClick() {
			this.$refs.inputRef.focus()
		}
	}
}
</script>
```


## 组建通信

### 传参

> 父组件向子组件传递参数

```vue
// 父组件
<template>
	<div :title="title"></div>
</template>
<script>
export default {
	data() {
		return {
			title: 'hello world'
		}
	}
}
</script>
```

```vue
// 子组件
<template>
	<div>{{ title }}</div>
</template>
<script>
export default {
	props: ['title']
}
</script>
```

example:
```vue
<template>
	<!-- 传参 -->
	<chart-circle :percent="80" :color="{circle_color: '#00cfde', circle_bg: '#557b88'}"></chart-circle>
</template>
```

```vue
<script>
export default {
	props: {
		percent: Number, // 数字
		message: String, // 字符串
		flag: Boolean, // 布尔值
		arr: Array, // 数组
		color: Object, // 对象
	},
}
</script>
```

### 参数默认值

> 未传参时使用参数默认值

```vue
<template>
	<!--  没有传参时使用默认值 -->
	<chart-circle :percent="80"></chart-circle>
</template>
```

```vue
<script>
export default {
	props: {
		percent: {
			type: Number,
			required: true,
			// 设置默认值
			default: () => 20,
		}
		message: String,
		flag: Boolean,
		arr: Array,
		color: {
			type: Object,
			required: false,
			// 设置默认值
			default: () => {
				return {
					circle_color: "#ff9f00",
					circle_bg: "#776547",
				};
			},
    	},
	}
}
</script>
```



### 组件别名导入

**父组件**

```vue
<template>
	<!-- 组件别名 -->

	<!-- <ChartCirCle /> -->
	<!-- <ChartCirCle></ChartCircle> -->
	<chart-circle></chart-circle>
</template>
<script setup>
import ChartCircle from "@/components/Chart/Circle.vue"
</script>
```

**子组件**

```vue
<!-- components/Circle.vue -->
<script>
export default {
	// 使用"chartCircle" 替代 "Circle"
	name: "ChartCircle",
}
</script>
```

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
			message: "",
		}
	},
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

## package
### Vue-Router


```js
import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/main'
    },
    {
      // 匹配/* => 重定向
      path: "/:pathMatch(.*)*",
      redirect: "/main",
    },
    {
      path: '/about',
      name: 'about',
      // lazy-loaded
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/main',
      name: 'main',
      // lazy-loaded
      component: () => import('../components/Dashboard.vue'),
      children: [
        {
          path: 'task',
          name: 'task',
          component: () => import('../components/Main/Task.vue')
        },
        {
          path: 'message',
          name: 'message',
          component: () => import('../components/Main/Message.vue')
        }
      ]
    }
  ]
})

export default router


```

```vue
<script>
import {RouterLink, RouterView} from "vue-router"
</script>

<template>
	<nav>
		<RouterLink to="/">Home</RouterLink>
		<RouterLink to="/about">About</RouterLink>
	</nav>
	<RouterView />
</template>
```

```js
// vite.config.js
base: "./"
```

### path
```js
import path from 'path'


resolve: {
	alias: {
		"@": path.resolve(__dirname, "./src"),
	},
},
```


### router跳转方式

方式一
```vue
<template>
	<RouterLink to="/about">go to about</RouterLink>
</template>
```


方式二
```vue
<template>
<button @click="goToAbout">go to about</button>
</template>

<script>
export default {
	methods: {
		goToAbout() {
			this.$router.push('/about')
		}
	}
}
</script>
```

方式三
```vue
<template>
<button @click="goToAbout">go to about</button>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const goToAbout = () => {
	router.push('/about')
}
</script>
```

### props

```vue
<template>
	<ChildComponent :title="title" />
</template>
```
方式一
```vue
<script>
export default {
	// props: [title], // 简写
	props: {
		title: {
			type: String,
			default: 'hello'
		}
	}
}
</script>
```
方式二
```vue
<script setup>
import { defineProps } from 'vue'
const props = defineProps({
	title: {
		type: String,
		default: 'hello'
	}
})
</script>
```



### axios
```sh
npm install axios
```

```js
const instance = axios.create({
  baseURL: 'https://some-domain.com/api/',
  timeout: 1000,
})
```

```js
// main.js
import axios from './api/request.js'
app.config.globalProperties.$axios = axios
```

```js
<script>
export default {
	methods: {
		getUser() {
			this.$axios.get('/api/user').then(res => {
				console.log(res)
			})
		}
	}
}
</script>
```

