# MarkDown

[Markdown增强](https://vuepress-theme-hope.github.io/v2/md-enhance/zh/)
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
+ list 3
```

- list 1
* list 2
+ list 3

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
|     |       |     |
| :-- | :---: | --: |
|     |       |     |
|     |       |     |
|     |       |     |
```

| 左对齐 | 居中对齐 | 右对齐 |
|  :--  | :---: |  --:  |
| 单元格 | 单元格 | 单元格 |
| 单元格 | 单元格 | 单元格 |

$\color{red}{✗}$
$\color{green}{✓}$


## Markdown扩展
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

::: warning
这是一个警告
:::


::: warning 注意
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
console.log('hello!')
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

