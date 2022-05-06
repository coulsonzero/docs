# [ESLint](https://eslint.bootcss.com)

| 规则                              | 说明                       |
| -------------------------------- | -------------------------- |
| no-use-before-define             | 禁止在变量定义之前使用它们      |
| comma-dangle                     | 禁止对象使用拖尾逗号           |

- 要求或禁止使用拖尾逗号 (comma-dangle)

> ES5 对象字面量中的拖尾逗号是合法的

:::: code-group
::: code-group-item 抛出错误

```js{3}
var foo = {
    bar: "baz",
    qux: "quux",
};
```

:::
::: code-group-item 正确示例

```js
/*eslint comma-dangle: ["error", "never"]*/

var foo = {
	bar: "baz",
	qux: "quux"
}
```

:::
::::
