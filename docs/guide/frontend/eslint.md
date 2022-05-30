# [ESLint](https://eslint.bootcss.com)

## 快速开始


```bash
$ yarn add eslint --dev
$ yarn create @eslint/config 	# or `npm init @eslint/config`
```

```js
module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: ["eslint:recommended", "plugin:react/recommended"],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: "latest",
		sourceType: "module",
	},
	plugins: ["react"],
	rules: {
    // 禁止末尾分号
    "comma-dangle": ["error", "never"]
		// 强制空格： { Components }
		'array-bracket-spacing': ['error', 'always'],
		'object-curly-spacing': ['error', 'always'],
    // 防止在react组件定义中缺少props验证
    'react/prop-types': "off",
    },
}
```
## 扩展

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


## 示例

**.eslintrc.js**
```js
module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  parser: 'babel-eslint',
  plugins: [
    'react',
  ],
  rules: {
    'import/extensions': 0,
    'react/prop-types': 0,
    'linebreak-style': 0,
    'react/state-in-constructor': 0,
    'import/prefer-default-export': 0,
    'max-len': [
      2,
      550,
    ],
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1,
        maxEOF: 1,
      },
    ],
    'no-underscore-dangle': [
      'error',
      {
        allow: [
          '_d',
          '_dh',
          '_h',
          '_id',
          '_m',
          '_n',
          '_t',
          '_text',
        ],
      },
    ],
    'object-curly-newline': 0,
    'react/jsx-filename-extension': 0,
    'react/jsx-one-expression-per-line': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/alt-text': 0,
    'jsx-a11y/no-autofocus': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'react/no-array-index-key': 0,
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: [
          'Link',
        ],
        specialLink: [
          'to',
          'hrefLeft',
          'hrefRight',
        ],
        aspects: [
          'noHref',
          'invalidHref',
          'preferButton',
        ],
      },
    ],
  },
};

```