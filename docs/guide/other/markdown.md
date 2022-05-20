# MarkDown

| 网站                                                                     | 网址                                                    |
| ------------------------------------------------------------------------ | ------------------------------------------------------- |
| [vuepress-theme-hope](https://vuepress-theme-hope.github.io/v2/zh/)      | https://vuepress-theme-hope.github.io/v2/zh/            |
| [Markdown 增强](https://vuepress-theme-hope.github.io/v2/md-enhance/zh/) | https://vuepress-theme-hope.github.io/v2/md-enhance/zh/ |

## 目录

```md
[[TOC]]
```

[[TOC]]

### 代码块

```java
class Main {
	public static void main(String[] args) {
		System.out.println("hello world !");
	}
}
```

### 无序列表

```md
- list 1

* list 2

- list 3
```

- list 1

* list 2

- list 3

### 有序列表

1. list1
2. list2

### 链接

```md
[Github](https://www.github.com/)
[Github][3]
[![DocSearch][1]][2]

[1]: ./static/img/docsearch-logo.svg
[2]: https://docsearch.algolia.com/
[3]: https://www.github.com/
```

[Github](https://www.github.com/)

<!-- [![Vue][1]][2] -->

[<img src="https://v3.cn.vuejs.org/logo.png" style="width: 40px; height: 40px" alt="" />][2]

[1]: https://v3.cn.vuejs.org/logo.png
[2]: https://v3.cn.vuejs.org

### 图片

```md
![bar1](../../.vuepress/public/assets/echarts/bar/bar1.png)

![bar1][5]
[5]: ../../.vuepress/public/assets/echarts/bar/bar1.png
```

![bar1](../../.vuepress/public/assets/echarts/bar/bar1.png)

### 表格

```md
|     |     |     |
| :-- | :-: | --: |
|     |     |     |
|     |     |     |
|     |     |     |
```

| 左对齐 | 居中对齐 | 右对齐 |
| :----- | :------: | -----: |
| 单元格 |  单元格  | 单元格 |
| 单元格 |  单元格  | 单元格 |

$\color{red}{✗}$
$\color{green}{✓}$

## Markdown 扩展

### 提示

```md
::: tip
这是一个提示
:::
```

::: tip
这是一个提示
:::

### 警告

```md
::: warning
这是一个警告
:::

::: warning 注意
:::
```

::: warning 注意
这是一个警告
:::

### 危险

```md
::: danger
这是一个危险警告
:::
```

::: danger
这是一个危险警告
:::

### 点击查看代码

```md
::: details 点击查看代码

:::
```

::: details 点击查看代码

```js
console.log("Hello javascript!")
```

:::

```md
:::: code-group

::: code-group-item Python

:::

::: code-group-item JavaScript

:::

::::
```

:::: code-group
::: code-group-item Python

```python
print("hello")
```

:::

::: code-group-item JavaScript

```javascript
console.log("hello!")
```

:::
::::

```md
::::: details 点击查看代码
:::: code-group

::: code-group-item Python

:::

::: code-group-item JavaScript

:::

::::
:::::
```

::::: details 示例
:::: code-group

::: code-group-item Python

```python
print("Hello World!")
```

:::

::: code-group-item JavaScript

```js
console.log("Hello world!")
```

:::
::::
:::::

## vurpress-theme-hope

### code-demo

::: react-demo React Demo

```js
export default class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			count: 0,
		}
	}
	handleClick() {
		this.setState((state) => ({
			count: state.count + 1,
		}))
	}
	render() {
		return (
			<div>
				<div>Count: {this.state.count}</div>
				<button onClick={this.handleClick.bind(this)}>Click Me</button>
			</div>
		)
	}
}
```

```css
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

button {
	padding: 10px 20px;
	margin-top: 20px;
	border-radius: 16px;
	outline: none;
	background: transparent;
	border: 1px solid #323232;
	transiton: background 0.15s ease 0.1s;
}

button:hover {
	background: skyblue;
}
```
:::

:::::: details 点击查看代码
::::: code-group
:::: code-group-item Normal
````md
::: normal-demo Demo 演示
```html
<div>Hello World !</div>
```
```css
* {
	margin: 0;
	paddinh: 0;
	box-sizing: border-box;
}
```
:::
````
::::
:::: code-group-item Vue
````md
::: vue-demo 一个 Vue Option 演示

```vue
<template>
	<div>{{ message }}</div>
</template>

<script>
	export default {
		data: () => ({ message: "Hello World!" }),
	}
</script>

<style>
	* {
		margin: 0;
		paddinh: 0;
		box-sizing: border-box;
	}
</style>
```
:::
````
::::
:::: code-group-item React
````md
::: react-demo React示例
```js
// import React from 'react'

class Comp extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			name: "coulson",
		}
	}

	render() {
		return <div>Hello, {this.state.name}</div>
	}
}

export default Comp
```
```css
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
```
:::
````
::::
:::::
::::::

### ECharts

::: echarts 一个柱状图案例

```json
{
	"title": {
		"text": "ECharts 入门示例"
	},
	"tooltip": {},
	"xAxis": {
		"data": ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
	},
	"yAxis": {},
	"series": [
		{
			"name": "销量",
			"type": "bar",
			"data": [5, 20, 36, 10, 10, 20]
		}
	]
}
```

:::

::: echarts 雷达图案例

```json
{
	"legend": [
		{
			"top": "70%",
			"right": 30,
			"itemGap": 12,
			"textStyle": {
				"fontSize": 12,
				"color": "#EFF4FF"
			},
			"icon": "circle",
			"orient": "vertical",
			"align": "left"
		}
	],
	"tooltip": {},
	"radar": {
		"center": ["40%", "50%"],
		"indicator": [
			{
				"name": "产品A",
				"max": 50
			},
			{
				"name": "产品B",
				"max": 50
			},
			{
				"name": "产品C",
				"max": 50
			},
			{
				"name": "产品D",
				"max": 50
			},
			{
				"name": "产品E",
				"max": 50
			},
			{
				"name": "产品F",
				"max": 50
			}
		],
		"splitNumber": 5,
		"startAngle": 0,
		"name": {
			"textStyle": {
				"color": "#EFF4FF"
			}
		},
		"splitLine": {
			"lineStyle": {
				"color": "#1A466B"
			}
		},
		"splitArea": {
			"show": false
		},
		"axisLine": {
			"lineStyle": {
				"color": "#1A466B"
			}
		}
	},
	"series": [
		{
			"type": "radar",
			"data": [
				{
					"name": "每日新增",
					"lineStyle": {
						"normal": {
							"color": "#8C25FF",
							"width": 1
						}
					},
					"value": [33, 33, 46, 46, 47, 37, 44],
					"itemStyle": {
						"normal": {
							"color": "#8C25FF"
						}
					},
					"areaStyle": {
						"normal": {
							"color": "#8C25FF",
							"opacity": 0.2
						}
					}
				},
				{
					"name": "累计新增",
					"lineStyle": {
						"normal": {
							"color": "#0078FF",
							"width": 1
						}
					},
					"value": [39, 45, 46, 41, 38, 43, 39],
					"itemStyle": {
						"normal": {
							"color": "#0078FF"
						}
					},
					"areaStyle": {
						"normal": {
							"color": "#0078FF",
							"opacity": 0.2
						}
					}
				}
			]
		}
	]
}
```

:::





