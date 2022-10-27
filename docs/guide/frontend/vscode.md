# Vscode 配置规范

:::: code-group
::: code-group-item settings.json

```json
"vim.startInInsertMode": true,
// 行末尾分号
"prettier.semi": false,
// 对象尾随逗号: 关闭
"prettier.trailingComma": "none",
// 控制每行代码量, 超出则换行
"prettier.printWidth": 200,
//  #使用带引号替代双引号
// "prettier.singleQuote": true,
// 在对象，数组括号与文字之间加空格 import React { Components } from "react"
"prettier.bracketSpacing": true,
// 关闭eslint校验
"eslint.enable": false,

"editor.tabSize": 4,
// 每次保存的时候自动格式化
"editor.formatOnSave": true,
//开启自动格式化
"editor.formatOnType": true,
"editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
},

// 解决 vue3 + ts import 报红色波浪线
"vetur.validation.script": false
```

:::

::::
