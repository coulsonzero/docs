# [React][1]

[NextJs][2]

[1]: https://react.docschina.org/
[2]: ./nextjs.md

## 一. 快速开始

### 1.1 运行 clone 项目

```sh
git clone https://github.com/username/repository.git
yarn
yarn start
```

### 1.2 创建 React 项目

:::: code-group
::: code-group-item yarn

```sh
yarn create react-app react-app
```

:::
::: code-group-item npm

```sh
npx create-react-app react-app
```

:::
::::

## 二. 快速入门

### 2.1 项目结构

::: details 查看 React 项目结构

```md
$ tree
.
├── node_modules
├── src
│ ├── `components`
│ │   └── Navbar.jsx
│ ├── App.css
│ ├── `App.js`
│ └── `index.js`
├── public
│   ├── favicon.ico
│   └── index.html
├── package-lock.json
├── `package.json`
└── README.md
```

:::

### 2.2 组件导入

- 方式一

```jsx
import React from "react"
import NavBar from "./components/Navbar"

const App = () => {
	return <NavBar />
}

export default App
```

- 方式二

> 适用于导入多个模块

:::: code-group
::: code-group-item App.jsx

```jsx{3}
import React from 'react';
import './App.css';
import { Navbar, Header, About, Contact, Footer } from "./components";


const App = () => {
  return (
    <div className="App">
      <Navbar />
      <main className="main">
        {/* <Header /> */}
        {/* <About /> */}
        {/* <Contact /> */}
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
```

:::
::: code-group-item components/index.js

```js{1-4}
export { default as Navbar } from './Navbar';
export { default as About } from './About';
export { default as Contact } from './Contact';
export { default as Footer } from './Footer';
```

:::
::::

```js
import img01 from "../../assets/img01.png"
import img02 from "../../assets/img02.png"
import img03 from "../../assets/img03.png"
import img04 from "../../assets/img04.png"
import img05 from "../../assets/img05.png"

export {img01, img02, img03, img04, img05}
```

```jsx
import {img01, img02, img03, img04, img05} from "./imports"
```

### 2.3 语法规则

:::: code-group
::: code-group-item style

```jsx
<div style={{fontSize: '20px', fontWeight: 'bold'}}>
```

:::

::: code-group-item class

```jsx
<div className="container">
<div className={this.state.fund_concerned.length === 0 ? "select-options" : 'none'}>
<div className={this.state.fund_concerned.length === 0 && "select-options"}>
```

:::
::: code-group-item img

```jsx
<img src="" alt /> // 注意需要加斜杠 '/' !!
```

:::
::: code-group-item event

```jsx
<button onclick={handleClick}>Activate Lasers</button>

<form onSubmit={handleSubmit}>
	<input type="text" placeholder="username" onChange={handleChange} />
</form>

function handleSubmit(e) {
    e.preventDefault();
    console.log('You clicked submit.');
}
```

:::
::::

### 2.4 Style

:::: code-group
::: code-group-item style

```jsx
<div style={{color: "#f8f8f8", fontWeight: "bold"}}></div>
```

:::
::: code-group-item className

```jsx
import "./Com.css"
;<div className="container"></div>
```

```css
/* Com.css */
.container {
	color: #f8f8f8;
	font-weight: bold;
}
```

:::
::: code-group-item scss

```jsx
import "@/styles/home.scss"
;<div className="container"></div>
```

```scss
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
```

:::
::: code-group-item styled-components

```jsx
// yarn add --save styled-components
import styled from "styled-components"

export default function Header() {
	return <Div></Div>
}

const HeaderStyles = styled.header`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: var(--header-height);
	background-color: ${({theme: {theme}}) => (theme === themeList.light ? "var(--lightBlue_1)" : "var(--darkBlue_3)")};
	@media only screen and (max-width: 768px) {
	}
`

// div, section, nav, a, header
```

```js
// themeList.js
export default {
	light: "light",
	dark: "dark",
}
```

:::
::: code-group-item styled-components 自定义

```js
// components/button/PrimaryButton.js
import React from "react"
import styled from "styled-components"

const ButtonsStyles = styled.a`
	display: inline-block;
	background: var(--mediumSlateBlue);
	padding: 1.5rem 2rem;
	color: var(--white);
	font-size: 1.6rem;
	text-transform: capitalize;
	border-radius: 8px;
	font-weight: 500;
	border: none;
	@media only screen and (max-width: 768px) {
		font-size: 1.4rem;
		padding: 1.2rem 1.5rem;
	}
`

function PrimaryButton({children, buttonType, ...rest}) {
	return (
		<>
			<ButtonsStyles as={buttonType} {...rest}>
				{children}
			</ButtonsStyles>
		</>
	)
}

export default PrimaryButton
```

```js
<PrimaryButton type="submit" buttonType="button" className="contact__submit">
	Submit
</PrimaryButton>
```

```js
// styles/GlobalStyles.js
import { createGlobalStyle } from 'styled-components';
import themeList from '../data/themeList';
// Typography
import '@fontsource/poppins';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import '@fontsource/poppins/800.css';

const GlobalStyles = createGlobalStyle`
:root{
  /* colors */
  --darkBlue_1: #3B447A;
  --darkBlue_2: #222B5F;
  --darkBlue_3: #0A0F19;
  --darkBlue_4: #101826;
  --mediumSlateBlue: #6C62E2;
  --lightBlue_1: #F3F1FE;
  --lightBlue_2: #ADBDE3;
  --white: #FFFFFF;
  --black: #000000;

  /* others */
    --header-height: 50px;
}
```

:::
::: code-group-item Tailwind

```jsx
// yarn add tailwindcss
<div class="ml-3 w-0 flex-1 pt-0.5">
	<p class="text-sm font-medium text-gray-900">Successfully saved!</p>
	<p class="mt-1 text-sm text-gray-500">Anyone with a link can now view this file.</p>
</div>
```

```css
/* index.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

```js{4}
// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);
```

:::
::::

#### react

## 三. 核心概念

### 3.1 JSX 渲染

::: react-demo 元素渲染

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

:::

::: react-demo 列表渲染

```js
// import React from 'react'

class Comp extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			links: ["Home", "About", "Docs"],
		}
	}

	render() {
		const list = this.state.links.map((item, index) => <li key={index}>{item}</li>)
		return <ul>{list}</ul>
	}
}

export default Comp
```

:::

::: react-demo 对象渲染

```js
// import React from 'react'

class Comp extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			links: [
				{id: 1, name: "Home"},
				{id: 2, name: "Blog"},
				{id: 3, name: "Docs"},
			],
		}
	}

	render() {
		const list = this.state.links.map((item, index) => {
			return (
				<div key={index} style={{display: "flex", gap: "20px"}}>
					<div>id: {item.id}</div>
					<div>name: {item.name}</div>
				</div>
			)
		})
		return <div>{list}</div>
	}
}

export default Comp
```

:::

::: react-demo 对象渲染示例

```js
// import React from "react"

class PropsObject extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			data: [
				{name: "Amazon", price: "-$5K"},
				{name: "Spotify", price: "-$50"},
				{name: "Netflix", price: "-$200"},
			],
		}
	}

	render() {
		const dict = this.state.data.map((expense, index) => {
			return (
				<div className="expense" key={index} style={{display: "flex", gap: "20px"}}>
					<div className="expense__title">name: {expense.name}</div>
					<div className="expense__price">price: ${expense.price}</div>
				</div>
			)
		})

		return <div>{dict}</div>
	}
}

export default PropsObject
```

:::

#### React Class

:::: code-group
::: code-group-item String

```js{7,13}
import React from 'react'

class Comp extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			name: 'coulson'
		}
	}

	render() {
		return (
			<div>Hello, {this.state.name}</div>
		)
	}
}

export default Comp
```

:::
::: code-group-item List

```jsx{7,12,14}
import React from 'react'

class Comp extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			links: ['Home', 'About', 'Docs']
		}
	}

	render() {
		const list = this.state.links.map((item, index) => <li key={index}>{item}</li>)
		return (
			<ul>{list}</ul>
		)
	}
}

export default Comp
```

:::
::: code-group-item Object

```jsx{7-11,16,18}
import React from 'react'

class Comp extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			links: [
				{id: 1, name: 'Home'},
				{id: 2, name: 'Blog'},
				{id: 3, name: 'Docs'}
			]
		}
	}

	render() {
		const list = this.state.links.map((item, index) => <li key={index}>{item.name}</li>)
		return (
			<ul>{list}</ul>
		)
	}
}

export default Comp
```

:::
::::

#### React Hooks

:::: code-group
::: code-group-item String

```jsx{5}
const App = () => {
    const name = 'React'

    return (
        <h1>Hello, {name}</h1>
    );
}
```

:::

::: code-group-item List

```jsx{3,6}
const App = () => {
    const links = ['Home', 'About', 'Docs']
    const list = links.map((item, index) => <li key={index}>{item}</li>)

    return (
        <ul>{list}</ul>
    )
}
```

:::
::: code-group-item Object

```jsx{7,10}
const App = () => {
    const links = [
        {id: 1, name: 'Home'},
        {id: 2, name: 'Blog'},
        {id: 3, name: 'Docs'}
    ]
    const list = links.map((item, index) => <li key={index}>{item.name}</li>)

    return (
        <ul>{list}</ul>
    )
}
```

:::

::::

::: details Object 渲染示例

```jsx
export default function Expenses() {
  const data = [
    {
      logo: expenseLogo1,
      name: "Amazon",
      price: "-$5K",
    },
    {
      logo: expenseLogo2,
      name: "Spotify",
      price: "-$50",
    },
    {
      logo: expenseLogo3,
      name: "Netflix",
      price: "-$200",
    },
  ];
  return (
    <div className="container">
        {data.map((expense) => {
            return (
            <div className="expense">
                <img src={expense.logo} alt="" />
                <h4 className="expense__title">{expense.name}</h4>
                <h6 className="expense__price">{expense.price}</h6>
            </div>
            );
        })}
    </div>
  );
```

:::

### 3.2 Props 传参

::: react-demo props 传参

```js
class ChildClass extends React.Component {
	render() {
		return <div>Hello, {this.props.message}</div>
	}
}

class Demo extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			message: "React",
		}
	}

	render() {
		return (
			<>
				<ChildClass message={this.state.message} />
			</>
		)
	}
}

export default Demo
```

:::

::: tip

> Fun: `props.name`
>
> Class: `this.props.name`

:::
:::: code-group
::: code-group-item Class

```jsx{6,22}
import React from 'react'

class ChildClass extends React.Component {
    render() {
        return (
            <div>Count: {this.props.count}</div>
        )
    }
}

class Demo extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			count: 0
		}
	}

	render() {
		return (
			<>
				<ChildClass count={this.state.count}/>
			</>
		)
	}
}
export default Demo
```

:::

::: code-group-item Hooks

```jsx{5,12}
import React from 'react'

const ChildFun = (props) => {
    return (
        <div>{props.message}</div>
    )
}

function Demo(props) {
	const message = "react"

	return <ChildFun message={message} />
}

export default Demo
```

:::
::: code-group-item Hooks➁

```jsx{3,5}
import React from 'react'

const ChildFun = ({ message }) => {
    return (
        <div>{message}</div>
    )
}

function Demo(props) {
	const message = "react"

	return <ChildFun message={message} />
}

export default Demo
```

:::
::::

### 3.3 State 状态管理

::: tip 温馨提示

> 初始化: `state = {...}` || `constructor(props) {super(props)this.state = {}}`
>
> 更改值: `this.setState({...})`
>
> 使用值: `this.state.val`

:::

::: react-demo class State

```js
class Demo extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			count: 0,
		}
	}

	render() {
		return (
			<>
				<div>count: {this.state.count}</div>
				<button
					onClick={() => {
						this.setState({count: this.state.count + 1})
					}}>
					+
				</button>
			</>
		)
	}
}

export default Demo
```

:::

:::: code-group
::: code-group-item class 方式一

```jsx{6-8,12-14,20}
import React from "react"

class Demo extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			count: 0
		}
	}

	handleClick = () => {
		this.setState({
			count: count + 1
		})
	}

	render() {
		return (
			<>
				<div>count: {this.state.count}</div>
				<button onClick={this.handleClick}>+</button>
			</>
		)
	}
}

export default Demo
```

:::
::: code-group-item class 方式二

```jsx{4}
import React from "react"

class Demo extends React.Component {
	state = {
		count: 0
	}

	handleClick = () => {
		this.setState({
			count: count + 1
		})
	}

	render() {
		return (
			<>
				<div>count: {this.state.count}</div>
				<button onClick={this.handleClick}>+</button>
			</>
		)
	}
}

export default Demo
```

:::
::: code-group-item Hooks 方式

```jsx{4,7-8}
import React, {useState} from "react"

function Demo() {
	const [count, setCount] = useState(0)   // 初始化数据

	const handleClick = () => {
		// setCount(count + 1)				// 更新初始数据
		setCount(count => count + 1)		// 更新最新数据
	}

	return (
		<>
			<div>count: {count}</div>
			<button onClick={handleClick}>+</button>
		</>
	)
}

export default Demo
```

:::
::::

### 3.4 setState( ) 更新状态

::: danger

> 因为 this.props 和 this.state 可能会异步更新, 出于性能考虑，React 可能会把多个 setState() 调用合并成一个调用, 不要依赖他们的值来更新下一个状态。

:::

:::: code-group
::: code-group-item class 方式

```jsx
// 更新state中的初始值
this.setState({
	count: count + 1,
})

// 使用最新的state更新数据
this.setState((state) => ({
	count: state.count + 1,
}))

// 更新
this.setState((state, props) => ({
	counter: state.count + props.increment,
}))
```

:::
::: code-group-item hooks 方式

```jsx
const [count, setCount] = useState(0)

// 更新初始值
setCount(count + 1)

// 更新最新的count
setCount((count) => count + 1)
```

:::
::::

```jsx
// 删除指定数据
const handleDelete = (key) => {
	const newData = dataSource.filter((item) => item.key !== key)
	setDataSource(newData)
}

// 添加数据
const handleAdd = () => {
	const newData = {
		key: count,
		name: `Edward King ${count}`,
		age: "32",
		address: `London, Park Lane no. ${count}`,
	}
	setDataSource([...dataSource, newData])
	setCount(count + 1)
}

// 筛选数据
onFilter: (value, record) => record.address.indexOf(value) === 0
// or
this.state.links.filter((link) => link.name.includes(query))
```

<iframe src="https://stackblitz.com/edit/react-sgk7mp?ctl=1&devToolsHeight=33&embed=1&file=src/App.js&hideExplorer=1&hideNavigation=1&theme=dark" frameborder="0" class="iframe-container" height="600px"></iframe>

:::: code-group
::: code-group-item SetStateDemo.jsx

```jsx
import React from "react"
import {flushSync} from "react-dom"

class SetStateDemo extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			count: 0,
			version: React.version,
		}
	}

	componentDidMount() {
		console.log("react version: " + React.version)
		document.getElementById("btn").addEventListener("click", this.changeCount, false)
	}

	componentDidUpdate() {
		console.log("update count: " + this.state.count)
	}

	changeCount = () => {
		this.setState({
			count: this.state.count + 1,
		})

		console.log("state: " + this.state.count)
	}

	changeCountWithSetTimeout = () => {
		setTimeout(() => {
			this.changeCount()
		}, 0)
	}

	changeCountWithPromise = () => {
		Promise.resolve().then(() => {
			this.changeCount()
		})
	}

	changeCountWithFlushSync = () => {
		flushSync(() => {
			this.setState({
				count: this.state.count + 1,
			})
		})

		console.log("flushSync count: " + this.state.count)
	}

	render() {
		console.log("render count: " + this.state.count)
		return (
			<div>
				<h3>React version: {this.state.version}</h3>
				<div>count: {this.state.count}</div>

				<button onClick={this.changeCount}>setState事件</button>
				<button id="btn">原生合成事件</button>
				<button onClick={this.changeCountWithSetTimeout}>setTimeout合成事件</button>
				<button onClick={this.changeCountWithPromise}>setPromise合成事件</button>
				<button onClick={this.changeCountWithFlushSync}>flushSync合成事件</button>
			</div>
		)
	}
}

export default SetStateDemo
```

:::
::::

### 3.5 点击事件

**1.无参**
:::: code-group
::: code-group-item class 方式

```jsx
import React from "react"

class MyButton extends React.Component {
	handleClick = () => {
		this.setState({})
	}
	render() {
		return <button onClick={this.handleClick}>Button</button>
	}
}
```

:::
::: code-group-item class 方式 2

```jsx
import React from "react"

class MyButton extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}
		this.handleClick = this.handleClick.bind(this)
	}
	handleClick() {
		this.setState({})
	}
	render() {
		return <button onClick={this.handleClick}>Button</button>
	}
}
```

:::
::: code-group-item class 方式 3
```jsx
import React from "react"

class MyButton extends React.Component {
	handleClick() {
		this.setState({})
	}
	render() {
		return <button onClick={() => this.handleClick()}>Button</button>
	}
}
```
:::
::: code-group-item hooks 方式

```jsx
const MyButton = () => {
	function handleClick() {}
	return (
		<button onClick={handleClick}>Button</button>
	)
}
```

:::

::::

**2.传参**

```jsx
<button onClick={() => this.handleClick(record)}>Button</button>
<button onClick={(e) => this.deleteRow(e, id)}>Delete Row</button>
```

**阻止默认行为**

```jsx
function handleClick(e) {
	e.preventDefault()
}
```

### 3.5 表单处理

```jsx
class MyForm extends React.Component {
	constructor(props) {
		super(props)
		this.state = {value: ''}
	}
	handleChange = (e) => {
		this.setState({value: e.target.value})
	}

	handleSubmit = (e) => {
		e.preventDefault()
		alert('提交的名字: ' + this.state.value)
	}
	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label>Name:<input type="text" value={this.state.value} onChange={this.handleChange} /></label>
				<input type="submit" value="提交" />
			</form>
		)
	}
}

```

### 3.6 多选框处理
```jsx
handleChange = (e) => {
    this.setState({value: e.target.value})
}
<select value={this.state.value} onChange={this.handleChange}>
	<option value="grapefruit">葡萄柚</option>
	<option value="lime">酸橙</option>
	<option value="coconut">椰子</option>
	<option value="mango">芒果</option>
</select>
```

## 四. Class

:::: code-group

::: code-group-item this.setState

```jsx{4-7,9,14}
import React from 'react'

class App extends React.Component {
    state = {
        counter: 0,
		products: ['Apple', 'Orange', 'Banana']
    }
    increment = () => {
        this.setState({counter: this.state.counter + 1});
    }
    render() {
        return (
            <>
                <p>{this.state.counter}</p>
                <button onClick={this.increment}>+</button>
            </>
        )
    }
}

export default App
```

:::

::: code-group-item 生命周期函数

```jsx{22,25,28}
import React from 'react';

class State extends React.Component {
	/*
	constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }
	*/

    state = {
        counter: 0
    }

    increment = () => {
        this.setState({counter: this.state.counter + 1})
    }

    // 会在组件挂载后（插入 DOM 树中）立即调用, (加载后修改初始化默认值, 网络请求）
    componentDidMount = () => this.state.counter = 3

    // 加载时不触发, 每次更新触发
    componentDidUpdate = () => alert("Counter: " + this.state.counter)

	// 在组件卸载及销毁之前直接调用（取消请求或清理数据）
	componentWillUnmount = () => this.state.count = 0

    render() {
        return (
            <div>
                <p>{this.state.counter}</p>
                <button onClick={this.increment}>+</button>
            </div>
        )
    }
}

export default State
```

:::

::: code-group-item createRef

```jsx{4,7}
class App extends React.Component {
	constructor(props) {
		super(props);
		this.myRef = React.createRef();
	}
	render() {
		return <div ref={this.myRef} />;
	}
}
```

:::

::::

- Lifecycle Methods
  - Mounting()
  - Unmounting()
  - componentDidMount()
  - componentDidUpdate()
  - componentWillUnmount()

### Lifecycle Methods

::::: details dispatch 请求
:::: code-group
::: code-group-item Demo.jsx

```jsx{12-18}
import React from 'react'
import { connect } from 'dva'


@connect(({ namespace, loading }) => ({
  namespace,
  loading: loading.models.namespace
}))
export default class Demo extends React.Component {
	state = {}

	getList = () => {
		const { dispatch } = this.props;
		dispatch({
			type: 'namespace/getlist',
			payload: {}
		})
	}

	componentDidMount() {
		this.getList();
	}

	componentDidUpdate() {}

	componentWillUnmount()

	render() {
		console.log(this.props.namespace.list)
		return (
			<>
				<TableDemo />
			<>
		)
	}
}
```

:::
::: code-group-item namespace.js

```js{7,10,23}
import { APIGetList } from '@/services/API'


export default {
	namespace: 'namespace',
	state: {
		list: []
	},
	effects: {
		*getlist({ payload }, { call, put }) {
			const response = yield call(APIGetList, payload);
			// console.log(response)
			// 数据处理方式
			if (response) {
				yield put({
				type: 'getlist',
				payload: response,
				});
			}
		},
	},
	reducers: {
		getlist(state, action) {
			return {
				...state,
				list: action.payload.list,	// action.payload = response
			};
		},
	}
}
```

:::
::: code-group-item API.js

```js{11-12}
import request from '@/utils/request'
import { getToken } from '../utils/authority'


export async function APIGetList(params) {
  let tokenobj = getToken();
  if (tokenobj.outtime) {
    return;
  }

  return request('/api_server/api/v1/user', {
    method: 'GET',
    headers: {
      Authorization: tokenobj.token,
    },
  });
}
```

:::
::::
:::::

::: details axios 请求

```jsx
import React from "react"
import axios from "axios"

export default class AxiosEffect extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	async fetchData = () => {
		const res = await axios.get("http://geek.itheima.net/v1_0/channels")
		res
			.then(function (response) {
				let data = response.data
				console.log(JSON.stringify(data, null, 2))
			})
			.catch(function (error) {
				console.log(error)
			})
	}

	componentDidMount() {
		this.fetchData()
	}

	componentDidUpdate() {}

	componentWillUnmount() {}

	render() {
		return (
			<>
				<TableDemo />
			</>
		)
	}
}
```

:::

::: details fetch 请求

```jsx
import React from "react"


export default class FetchEffect extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	async fetchData = () => {
		fetch("http://geek.itheima.net/v1_0/channels")
			.then((response) => response.json())
			.then((data) => {
				console.log(data)
			})
			.catch((error) => {
				console.error(`Could not get data: ${error}`)
			})
	}

	componentDidMount() {
		this.fetchData()
	}

	componentDidUpdate() {}

	componentWillUnmount() {}

	render() {
		return (
			<>
				<TableDemo />
			</>
		)
	}
}
```

:::

## 五. Hooks

::: tip
Hook 是 React 16.8 的新增特性。
Hook 可以让你在不编写 class 的情况下使用 state 以及其他的 React 特性
React Native 从 0.59 版本开始支持 Hook
Hook 和现有代码可以同时工作，你可以渐进式地使用他们
没有计划从 React 中移除 class,将继续为 class 组件提供支持

基础 Hook
useState
useEffect
useContext
额外的 Hook
useReducer
useCallback
useMemo
useRef
useImperativeHandle
useLayoutEffect
useDebugValue
:::

:::: code-group
::: code-group-item useState

```jsx{1,5,8-9,13}
import React, {useState} from "react";

const App = () => {
	// 1. 创建一个变量为counter, 并初始化为0
	const [counter, setCounter] = useState(0);

	// 2. 修改变量值
	const increment = () => setCounter(counter + 1);             // 新值替代初始值
 // const increment = () => setCounter(counter => counter + 1);  // 新值替代旧值, 用useEffect时使用

	return (
		<div>
			<p>{counter}</p>
			<button onClick={increment}>+</button>
		</div>
	);
};

export default App;
```

:::

::: code-group-item useEffect

```jsx{5,12}
/**
 * useEffect() = componentDidMount() + componentDidUpdate() + componentWillUnmount()
 */

import React, {useState, useEffect} from 'react'

const Header = () => {
  const [counter, setCounter] = useState(0)
  const increment = () => setCounter(counter + 1)

  // 加载时触发，每次更新都会触发， 注意不是ES6方法！！注意写法
  useEffect(() => alert("Counter: " + counter))

  return (
  <div>
   <p>{counter}</p>
   <button onClick={increment}>+</button>
  </div>
 );
}

export default Header
```

:::
::: code-group-item useRef

```jsx{16,21,29}
/**
 * 用于获取元素或组件
 *
 * 1. Hooks
 * <button className="add-btn" onClick={increment} ref={e}>+</button>
 * const e = useRef(null)
 *
 * 2. class
 * <input type="text" ref={this.textInput} />
 * 创建Ref: this.textInput = React.createRef()
 * 使用ref: this.textInput.current.focus()
 */


// 1. 引入useRef, 用于获取元素或组件
import React, {useState, useRef} from "react";

const App = () => {
	const [counter, setCounter] = useState(0);
	// 2. 初始化null
	const e = useRef(null)

	const increment = () => console.log(e)

	return (
		<div>
			<p>{counter}</p>
			{/* 定义ref属性 */}
			<button className="add-btn" onClick={increment} ref={e}>+</button>
		</div>
	);
};

export default App;
```

:::

::: code-group-item createContext

```jsx{2,4,9-11,25-27}
// 通过createContext跨组件传值
import React, {useState, createContext} from "react";

const numContext = createContext()

function Sub() {
	const res = (num) => <div>{num}</div>
	return (
		<numContext.Consumer>
			{res}
		</numContext.Consumer>
	);
}

function Father() {
	return (
		<Sub />
	)
}


export default function App() {
	const [num, setNum] = useState(1);
	return (
		<numContext.Provider value={num}>
			<Father />
		</numContext.Provider>
	);
}

```

:::
::: code-group-item useContext

```jsx{2,4,7,29-31}
// 解构createContext跨组件传值和方法
import React, {useState, createContext, useContext} from "react";

const numContext = createContext()

function Sub() {
	const {num, childFun} = useContext(numContext)
	return (
		<>
			<div>{num}</div>
			<button onClick={() => childFun(2)}>+</button>
		</>
	);
}

function Father() {
	return (
		<Sub />
	)
}


export default function App() {
	const [num, setNum] = useState(1);
	function childFun(n) {
		setNum(num + n);
	}
	return (
		<numContext.Provider value={{num, childFun}}>
			<Father />
		</numContext.Provider>
	);
}
```

:::
::::

### 5.1 useState

### 5.2 UseEffect

::: tip 提示

> 副作用: 1.ajax 请求 2.localstorage 操作 3.手动修改 dom

```js
依赖项控制执行时机: `useEffect` 是在 render(浏览器完成页面渲染) 之后执行
a. 默认状态: 首次执行，每次组件更新执行
b. []: 首次执行
c. `[count]`：首次执行，依赖项变化时执行
可接受`第二个参数`来控制跳过执行，下次render后如果指定的值没有变化就不会执行
```

:::

::: danger 注意事项

> `不可在其使用setCount()`, 否则会陷入死循环直至页面卡死

:::

```jsx{1,21-26}
import React, {useState, useEffect} from "react"

function App() {
	const [count, setCount] = useState(0)

	// 初始化时执行一次, 每次重新渲染时执行
	useEffect(() => {
		// componentDidMount + componentDidUpdate
	})

	// 只在初始化时执行一次
	useEffect(() => {
		// componentDidMount
	}, [])

	// 初始化时执行一次，每次依赖项改变时执行
	useEffect(() => {
		// componentDidMount + componentDidUpdate
	}, [count])

	useEffect(() => {
		// componentDidMount + componentDidUpdate/
		return () => {
			// componentWillUnmount
		}
	}, [])

	return (
		<>
			<div>Count: {count}</div>>
		</>
	)
}

export default App
```

::: details fetch 请求

```jsx
import React, {useEffect} from "react"

export default function FetchEffect() {
	function fetchData() {
		fetch("http://geek.itheima.net/v1_0/channels")
			.then((response) => response.json())
			.then((data) => {
				console.log(data)
			})
			.catch((error) => {
				console.error(`Could not get data: ${error}`)
			})
	}

	useEffect(() => {
		fetchData()
	}, [])

	return <div>FetchEffect</div>
}
```

:::

::: details axios 请求示例

```jsx
import React, {useEffect} from "react"
import axios from "axios"

export default function AxiosEffect() {
	async function fetchData() {
		const res = await axios.get("http://geek.itheima.net/v1_0/channels")
		res
			.then(function (response) {
				let data = response.data
				console.log(JSON.stringify(data, null, 2))
			})
			.catch(function (error) {
				console.log(error)
			})
	}

	useEffect(() => {
		fetchData()
	}, [])

	return <div>axiosDemo</div>
}
```

:::

## Event Handles

:::: code-group
::: code-group-item funcHandle

```jsx
const Toggle = () => {
	const [value, setValue] = useState("ON")
	const toggle = () => setValue(value == "ON" ? "OFF" : "ON")
	return <button onClick={toggle}>{value}</button>
}
```

:::

::: code-group-item classHandle

```jsx
class Toggle extends React.Component {
	state = {
		flag = "ON"
	}

	toggle = () => this.setState({ flag: (flag == "ON") ? "OFF" : "ON" })

	render () {
		return <button onClick={this.toggle}>{flag}</button>
	}
}

```

:::
::::

`e.preventDefault()`

```jsx
const Contact = (props) => {
	const [value, setValue] = useState(props.data)
	const handleClick = (v) => setValue([...value, v])
	return <button onClick={handleClick}>{value}</button>
}
```

## 六. 组件通信

::: tip 组件通信方式

> `父传子`: 调用父组件变量`props.parms`
>
> `子传父`: 调用父组件回调函数`props.func()`
>
> `兄弟组件通信`: 通过子传父，再父传子
>
> `跨组件通信`: `createContext()` && `useContext()`

:::

### 6.1 父传子

> 通过 props 传值

:::: code-group
::: code-group-item Class 方式

```jsx{6}
// App.jsx
import React from 'react'

class ComChild extends React.Component {
	render() {
		return <div>{this.props.num}</div>
	}

export default class App extends React.Component {
	state = {
		num: 12
	}

	render() {
		return <ComChild num={this.state.num}>
	}
}
```

:::
::: code-group-item Hooks 方式

```jsx{5}
// App.jsx
import React, {useState} from 'react'

function ComChild(props) {
	return <div>{props.num}</div>
}

export default function App() {
	const [num, setNum] = useState(12)

	return <ComChild num={num}/>
}
```

:::
::::

### 6.2 子传父

> 通过调用父组件方法，将参数返回
>
> 子组件写父组件方法的具体实现

:::: code-group
::: code-group-item Class 方式

```jsx{8,21}
import React from "react"

class Sub extends React.Component {
	render() {
		return (
			<>
				<div>{this.props.num}</div>
				<button onClick={() => this.props.setNum(props.num + 1)}>+</button>
			</>
		)
	}

}

export default class App extends React.Component {
	state = {
		num: 2
	}
	render() {
		const {num, setNum} = this.state
		return <Sub num={num} setNum={setNum} />
	}
}
```

:::
::: code-group-item Hooks 方式

```jsx{7,14}
import React, {useState} from "react";

function Sub(props) {
	return (
		<>
			<div>{props.num}</div>
			<button onClick={() => props.setNum(props.num + 1)}>+</button>
		</>
	);
}

export default function App() {
	const [num, setNum] = useState(2);
	return <Sub num={num} setNum={setNum} />
}
```

:::
::: code-group-item Hooks 示例 2

```jsx{7,19}
import React, {useState} from "react";

function Sub(props) {
	return (
		<>
			<div>{props.num}</div>
			<button onClick={() => props.childFun(2)}>+</button>
		</>
	);
}

export default function App() {
	const [num, setNum] = useState(2);
	function childFun(n) {
		setNum(num + n);
	}
	return (
		<>
			<Sub num={num} childFun={childFun} />
		</>
	);
}
```

:::
::::

### 6.3 兄弟组件通信

```jsx
/**
 * 兄弟组件通信：通过子传父，再父传子的方法实现
 */

import React, {useState, Component} from "react"

const SonA = (props) => {
	return <div>{props.message}</div>
}

const SonB = (props) => {
	const [username, setUsername] = useState("")
	function handleInput(e) {
		setUsername((username) => e.target.value)
	}
	function handleClick() {
		props.getMsg(username)
	}
	return (
		<>
			<input type="text" placeholder="username" value={username} onChange={handleInput} />
			<button onClick={handleClick}>Click</button>
		</>
	)
}

export class PropsBrother extends Component {
	constructor(props) {
		super(props)
		this.state = {
			message: "",
		}
	}

	getMsg = (msg) => {
		// console.log(msg)
		this.setState({
			message: msg,
		})
	}

	render() {
		return (
			<>
				<SonB getMsg={this.getMsg} />
				<SonA message={this.state.message} />
			</>
		)
	}
}

export default PropsBrother
```

### 6.4 跨组件通信

> 通过多个 props 传值和方法

::: details 点击查看代码

```jsx
import React, {useState} from "react"

function Sub(props) {
	return (
		<>
			<div>{props.num}</div>
			<button onClick={() => props.childFun(3)}>+</button>
		</>
	)
}

function Father(props) {
	return (
		<>
			<Sub num={props.num} childFun={props.childFun} />
		</>
	)
}

export default function App() {
	const [num, setNum] = useState(2)
	function childFun(n) {
		setNum(num + n)
	}
	return (
		<>
			<Father num={num} childFun={childFun} />
		</>
	)
}
```

:::

> 通过 createContext 跨组件传值

:::: code-group
::: code-group-item msgContext.js

```js
import React from "react"

export const msgContext = React.createContext("hello world")
```

:::
::: code-group-item ContextPro.jsx

```jsx{2,7}
import React from "react"
import { msgContext } from "./msgContent"

class ContextPro extends React.Component {
	render() {
		return (
			<ThemeContext.Provider>
				<div>CreateContentDemo</div>
			</ThemeContext.Provider>
		)
	}
}

export default ContextPro
```

:::
::: code-group-item ContextCon.jsx

```jsx{2,9}
import React from "react"
import { msgContext } from './msgContent'

class ContextCon extends React.Component {
	render() {
		return (
			<div>
				<span>useContentDemo: </span>
				<ThemeContext.Consumer>{(value) => <div>{value}</div>}</ThemeContext.Consumer>
			</div>
		)
	}
}

export default ContextCon
```

:::
::::

::: details 点击查看代码

```jsx
import React, {useState, createContext} from "react"

const numContext = createContext()

function Sub() {
	const res = (num) => <div>{num}</div>
	return <numContext.Consumer>{res}</numContext.Consumer>
}

function Father() {
	return <Sub />
}

export default function App() {
	const [num, setNum] = useState(1)
	return (
		<numContext.Provider value={num}>
			<Father />
		</numContext.Provider>
	)
}
```

:::

> createContext, 使用对象传方法
> 对象没有顺序问题，数组有索引，需要特定顺序！

::: details 点击查看代码

```jsx
import React, {useState, createContext} from "react"

const numContext = createContext()

function Sub() {
	const res = ({num, setNum}) => {
		return (
			<>
				<div>{num}</div>
				<button onClick={() => setNum(num + 1)}>+</button>
			</>
		)
	}
	return <numContext.Consumer>{res}</numContext.Consumer>
}

function Father() {
	return <Sub />
}

export default function App() {
	const [num, setNum] = useState(1)
	return (
		<numContext.Provider value={{num, setNum}}>
			<Father />
		</numContext.Provider>
	)
}
```

:::

::: details 点击查看代码

```jsx
import React, {useState, createContext} from "react"

const numContext = createContext()

function Sub() {
	const res = ({num, childFun}) => {
		return (
			<>
				<div>{num}</div>
				<button onClick={() => childFun(2)}>+</button>
			</>
		)
	}
	return <numContext.Consumer>{res}</numContext.Consumer>
}

function Father() {
	return <Sub />
}

export default function App() {
	const [num, setNum] = useState(1)
	function childFun(n) {
		setNum(num + n)
	}
	return (
		<numContext.Provider value={{num, childFun}}>
			<Father />
		</numContext.Provider>
	)
}
```

:::

```jsx
/**
 * 跨组件通信：使用createContext， 解构成Provider传值, Consumer接受值
 */

import React, {createContext, Component} from "react"

const {Provider, Consumer} = createContext()

function ComA() {
	return (
		<>
			<div>ComA</div>
			<ComB />
		</>
	)
}

function ComB() {
	return (
		<div style={{color: "red", display: "flex", flexDirection: "row"}}>
			<span>ComB: </span>
			<Consumer>{(value) => <div>{value}</div>}</Consumer>
		</div>
	)
}

class CrossComponent extends Component {
	constructor(props) {
		super(props)
		this.state = {
			message: "test",
		}
	}

	render() {
		return (
			<Provider value={this.state.message}>
				<ComA />
			</Provider>
		)
	}
}

export default CrossComponent
```

**useContext**

> 解构 createContext

::: tip

```jsx
import React, {createContext, useContext, Component} from "react"
```

**跨组件传值**

1. Step 1

```jsx
const context = createContext()
```

2. Step 2

```jsx
<context.Provider value={this.state.message}></context.Provider>
```

3. Step 3

```jsx
const msg = useContext(context)
```

:::

::: details 点击查看代码

```jsx
/**
 * 跨组件通信：使用createContext， 解构成Provider传值, Consumer接受值
 */

import React, {createContext, useContext, Component} from "react"

const context = createContext()

function ComA() {
	return (
		<>
			<div>ComA</div>
			<ComB />
		</>
	)
}

function ComB() {
	const msg = useContext(context)
	return (
		<div>
			<span>ComB: {msg}</span>
		</div>
	)
}

class CrosscomUsecontext extends Component {
	constructor(props) {
		super(props)
		this.state = {
			message: "hello",
		}
	}

	render() {
		return (
			<context.Provider value={this.state.message}>
				<ComA />
			</context.Provider>
		)
	}
}

export default CrosscomUsecontext
```

:::

::: tip
**跨组件传递值和方法**

```jsx
import React, {createContext, useContext, Component} from "react"
```

1. Step 1

```jsx
const context = createContext()
```

2. Step 2

```jsx
<context.Provider value={{this.state.message, this.setMessage}}>
</context.Provider>
```

3. Step 3

```jsx
const [msg, setMsg] = useContext(context)
```

:::

::: details 点击查看代码

```jsx
import React, {useState, createContext, useContext} from "react"

const numContext = createContext()

function Sub() {
	const {num, childFun} = useContext(numContext)
	return (
		<>
			<div>{num}</div>
			<button onClick={() => childFun(2)}>+</button>
		</>
	)
}

function Father() {
	return <Sub />
}

export default function App() {
	const [num, setNum] = useState(1)
	function childFun(n) {
		setNum(num + n)
	}
	return (
		<numContext.Provider value={{num, childFun}}>
			<Father />
		</numContext.Provider>
	)
}
```

:::

## 七. package.json 依赖

> "dependencies": 生产环境所需要的依赖，
>
> "devDependencies": 开发环境所需要的依赖；

```sh
生产环境	npm i --save xxx，npm i -S xxx   (dependencies)
开发环境	npm i --save-dev，npm i -D xxx   (devDependencies)
全局安装	npm i -g xxx   (安装到磁盘)
```

### 7.1 Scss

> CSS 预处理器, 功能更强大，比 less 好用

1. 安装

```sh
yarn add sass -D 	// -D表示开发环境想要依赖，生产环境不依赖
```

2. 使用方法

```jsx
import "./index.scss"
```

### 7.2 Redux

> 状态管理

安装 redux 包

```sh
$ yarn add --save redux react-redux
```

- 使用 state 显示 reducer 数据

:::: code-group
::: code-group-item reducer.js

```js
// src/store/reducer.js
const data = {
	msg: "hello, redux",
}

// eslint-disable-next-line
export default (state = data, action) => {
	return state
}
```

:::

::: code-group-item index.js

```js
// src/store/index.js
import {createStore} from "redux"
import reducer from "./reducer"

const store = createStore(reducer)

export default store
```

:::

::: code-group-item index.js

```js
// index.js
import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
// 1. import
import {Provider} from "react-redux"
import store from "./store"

ReactDOM.render(
	<React.StrictMode>
		{/* 2. use <Provider></Provider> */}
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
)
```

:::

::: code-group-item App.js

```js
import React from "react"

// 1.import connect
import {connect} from "react-redux"

const App = (props) => {
	return (
		// 4. return
		<div>{props.msg}</div>
	)
}

// 3. mapStateToProps(state)
const mapStateToProps = (state) => {
	return {
		msg: state.msg,
	}
}

// 2. connect(mapStateToProps)(Provider)
export default connect(mapStateToProps)(App)
```

:::
::::

- 使用 action 修改 state 数据

:::: code-group
::: code-group-item reducer.js

```js
// src/store/reducer.js
const data = {
	msg: "hello, redux",
}

// eslint-disable-next-line
export default (state = data, action) => {
	let newState = JSON.parse(JSON.stringify(state))
	if (action.type == "UPDATE") {
		newState.msg = action.value
	}
	/*
    switch (action.type) {
        case "UPDATE":
           newState.msg = action.value;
           break;
        default:
            break;
    }
    */
	return newState
}
```

:::

::: code-group-item index.js

```js
// src/store/index.js
import {createStore} from "redux"
import reducer from "./reducer"

const store = createStore(reducer)

export default store
```

:::

::: code-group-item index.js

```js
//index.js
import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
// 1. import
import {Provider} from "react-redux"
import store from "./store"

ReactDOM.render(
	<React.StrictMode>
		{/* 2. use <Provider></Provider> */}
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
)
```

:::

::: code-group-item App.js

```js
// App.js
import React from "react"

import {connect} from "react-redux"

const App = (props) => {
	return (
		<>
			<div>{props.msg}</div>
			<button onClick={props.setMsg}>update</button>
		</>
	)
}

const mapStateToProps = (state) => {
	return {
		msg: state.msg,
	}
}

// 2. mapDispatchToProps(dispatch)
const mapDispatchToProps = (dispatch) => {
	return {
		setMsg() {
			const action = {type: "UPDATE", value: "ok,  updated state..."}
			dispatch(action)
		},
	}
}

// 1. mapDispatchToProps
export default connect(mapStateToProps, mapDispatchToProps)(App)
```

:::
::::

- redux 实现哈希字典数据

```md
totalPrice: $10
name: Lemon, cost: 3
name: Banana, cost: 4
name: Mango, cost: 5
```

:::: code-group
::: code-group-item reducer.js

```js
// src/store/reducer.js
const initialState = {
	fruits: [
		{key: 1, name: "Lemon", cost: 3},
		{key: 2, name: "Banana", cost: 4},
		{key: 3, name: "Mango", cost: 5},
	],
	totalPrice: 10,
}

// eslint-disable-next-line
export default (state = initialState, action) => {
	return state
}
```

:::

::: code-group-item index.js

```js
// src/store/index.js
import {createStore} from "redux"
import reducer from "./reducer"

const store = createStore(reducer)

export default store
```

:::

::: code-group-item index.js

```js
// index.js
import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
// 1. import
import {Provider} from "react-redux"
import store from "./store"

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
)
```

:::

::: code-group-item App.js

```js
import React from "react"
import {connect} from "react-redux"

const App = (props) => {
	const list = props.fruits.map((item, index) => (
		<li key={index}>
			name: {item.name}, cost: {item.cost}
		</li>
	))
	return (
		<>
			<div>totalPrice: ${props.totalPrice}</div>
			<ul>{list}</ul>
		</>
	)
}

const mapStateToProps = (state) => {
	return {
		fruits: state.fruits,
		totalPrice: state.totalPrice,
	}
}

export default connect(mapStateToProps)(App)
```

:::
::::

- redux 实现 todo-list
  ![redux-todolist](@/assets/react/redux-todolist.png)

```sh
$ tree
src
│
├── components
│   ├── AddPeosonForm.jsx
│   └── PeopleList.jsx
├── store
│   ├── actions.js
│   ├── index.js
│   └── reducer.js
├── App.js
└── index.js
```

:::: code-group
::: code-group-item index.js

```js
// src/store/index.js
import {createStore} from "redux"
import reducer from "./reducer"

const store = createStore(reducer)

export default store
```

:::

::: code-group-item index.js

```js
// index.js

import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
// 1. import redux
import {Provider} from "react-redux"
import store from "./store"

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
)
```

:::

::: code-group-item App.js

```jsx
import React from "react"
import PropleList from "./components/PeopleList"
import AddPeosonForm from "./components/AddPeosonForm"

function App() {
	return (
		<>
			<PropleList />
			<AddPeosonForm />
		</>
	)
}

export default App
```

:::

::: code-group-item reducer.js

```js
// src/store/reducer.js

const initialState = {
	contacts: ["James Smith", "Thomas Anderson", "Bruce Wayne"],
}

// eslint-disable-next-line
export default (state = initialState, action) => {
	switch (action.type) {
		case "ADD_PERSON":
			return {...state, contacts: [...state.contacts, action.data]}
		default:
			return state
	}

	/*
    if(action.type === "ADD_PERSON") {
        return {...state, contacts: [...state.contacts, action.data]}
    }
    return state
    */
}
```

:::

::: code-group-item actions.js

```js
export function addPerson(person) {
	return {
		type: "ADD_PERSON",
		data: person,
	}
}
```

:::

::: code-group-item PeopleList.jsx

```jsx
import React from "react"
import {connect} from "react-redux"

function PeopleList(props) {
	const list = props.contacts.map((item, index) => <li key={index}>{item}</li>)
	return (
		<>
			<ul>{list}</ul>
		</>
	)
}

function mapStateToProps(state) {
	return {
		contacts: state.contacts,
	}
}

export default connect(mapStateToProps)(PeopleList)
```

:::

::: code-group-item AddPeosonForm.jsx

```jsx
import React, {useState} from "react"
import {connect} from "react-redux"
import {addPerson} from "../store/actions"

function AddPeosonForm(props) {
	const [person, setPerson] = useState("")

	function handleChange(e) {
		setPerson(e.target.value)
	}

	function handleSubmit(e) {
		e.preventDefault()
		if (person !== "") {
			props.addPerson(person)
			setPerson("")
		}
	}

	return (
		<form onSubmit={handleSubmit}>
			<input type="text" value={person} placeholder="Add" onChange={handleChange} />
			<button type="submit">Add</button>
		</form>
	)
}

const mapDipatchToProps = {
	addPerson,
}

/*
function mapDipatchToProps(dispatch) {
	return {
		addPerson(person) {
			dispatch({type: "ADD_PERSON", data: person})
		},
	}
}
*/

export default connect(null, mapDipatchToProps)(AddPeosonForm)
```

:::
::::

### 7.3 react-router-dom

> 路由

```sh
yarn add react-router-dom
```

::: tip
[login](http://localhost:3000/login)
http://localhost:3000/login

[App](http://localhost:3000/)
http://localhost:3000/

[Navbar](http://localhost:3000/navbar)
http://localhost:3000/navbar
:::

```sh
$ pwd
react-route-page

$ tree
├── package.json
└── src
    ├── index.js
    ├── App.jsx
    ├── components
    │   └── Navbar.jsx
    ├── pages
    │   └── login.jsx
    └── router
        └── index.jsx
```

**Code**
:::: code-group
::: code-group-item index.js

```js
import React from "react"
import ReactDOM from "react-dom"
import Router from "./router"

ReactDOM.render(
	<React.StrictMode>
		<Router />
	</React.StrictMode>,
	document.getElementById("root")
)
```

:::

::: code-group-item index.jsx

```jsx
// src/router/index.jsx

import App from "../App"
import Login from "../pages/Login"
import Navbar from "../components/Navbar"
// HashRouter & BrowserRouter
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

const BaseRoute = () => {
	return (
		<Router>
			<Routes>
				<Route path="/login" element={<Login />}></Route>
				<Route path="/" element={<App />}>
					<Route path="/navbar" element={<Navbar />}></Route>
				</Route>
			</Routes>
		</Router>
	)
}

export default BaseRoute
```

:::

::: code-group-item Login.jsx

```jsx
// src/pages/Login.jsx

import React from "react"

export default function Login() {
	return <div>login</div>
}
```

:::

::: code-group-item App.jsx

```jsx
import React from "react"
import {Outlet} from "react-router-dom"

const App = () => {
	return (
		<>
			<div>App</div>
			<Outlet />
		</>
	)
}

export default App
```

:::

::: code-group-item Navbar.jsx

```jsx
// src/components/Navbar.jsx
import React from "react"

const Navbar = () => {
	return <div>Navbar</div>
}

export default Navbar
```

:::

::::

### 7.4 antd

> 阿里开发的 React 组件库

```
yarn add antd
```

修改 src/App.css，在文件顶部引入 antd/dist/antd.css

```css
@import "~antd/dist/antd.css";
```

### 7.5 craco

> 使用 "@/components/Header" 代替 "./components/Header"
>
> 配合 jsconfig.json 配置@/别名提示

1. 安装 craco

```sh
yarn add @craco/craco
```

2. 创建 craco.config.js 配置路径别名

```js
const path = require("path")

module.exports = {
	webpack: {
		alias: {
			"@": path.resolve(__dirname, "src"),
		},
	},
}
```

3. 修改 package.json

```json
"scripts": {
	"start": "react-scripts start",
	"build": "react-scripts build",
},
```

改为

```json
"scripts": {
	"start": "craco start",
	"build": "craco build",
},
```

4. 通过@表示 src 目录路径

```jsx
import {Header} from "@/components/header"
```

5. 重启项目生效

```sh
yarn start
```

### 7.6 jsconfig.json

> 别名@路径提示

```js
{
  "compilerOptions": {
    "baseUrl": "./",
    "paths": {
      "@/*": ["src/*"]
    }
  }
}
```

```jsx
import {Header} from "@/components/header"
```

### 7.7 axios

> 前端接口请求，有拦截器，比原生 fetch 更强大

```sh
yarn add axios
```

```jsx
import axios from "axios"
```


```jsx
axiosFetch = async () => {
	await axios.get('http://localhost:8080/api/v1/rank')
}
```

```jsx
async function axiosFetch() {
	let url = "http://geek.itheima.net/v1_0/channels"
	await axios
		.get(url)
		.then(function (response) {
			let data = response.data
			console.log(JSON.stringify(data, null, 2))
		})
		.catch(function (error) {
			console.log(error)
		})
}
```

```jsx
import axios from 'axios'


axios.defaults.baseURL = 'http://localhost:8080/api/v1'
axios.defaults.timeout = 3000

// ...
axiosFetchRank = async () => {
	await axios
		.get('/rank')
		.then((res) => {
			this.setState({
				rank_data: res.data.data
			})
		})
		.catch((err) => {
			console.log(err)
		})
}
```

**Get**
```jsx
axios.get(url, {
	params: {
		name: "lilei",
		age: 30
	}
}).then()
```

**Post**
```jsx
axios.post(url, params).then().catch()
```

```jsx
axios({
	url: "https://httpbin.org/post",
	data: {
		name: "kobe",
		age: 40
	},
	method: "post"
}).then(res => {
	console.log(res)
}).catch(err => {
	console.error(err)
})
```

**同时调用**

```jsx
const request1 = axios({
	url: "/get",
	params: { name: "why", age: 18 }
})

const request2 = axios({
	url: "/post",
	data: { name: "kobe", age: 40 },
	method: "post"
})

axios.all([request1, request2]).then(([res1, res2]) => {
	console.log(res1, res2)
})
```


**请求拦截**

```jsx
//请求拦截
axios.interceptors.request.use(config => {
   // 1、发送网络请求时，在界面中间位置显示loading的组件

    // 2、某一些请求要求用户必须携带token，如果没有读取到，那么直接跳转到登录页面

    // 3、params/data序列化的操作
    return config;
}, err => {

})
//响应拦截
axios.interceptors.response.use(res => {
  return res.data;
}, err => {
  if (err && err.response) {
    switch (err.response.status) {
      case 400:
        console.log("请求错误");
        break;
      case 401:
        console.log("未授权访问");
        break;
      default:
        console.log("其他错误信息");
    }
  }
  return err;
});

```


### 7.8 ECharts

1. 安装 echarts

```sh
yarn add echarts
```

2. 挂载 echarts

:::: code-group
::: code-group-item React class

```jsx{8}
import React, {Component} from "react"
import * as echarts from "echarts"

export default class BarChart extends Component {
	constructor(props) {
		super(props)
		this.state = {}
		this.barRef = React.createRef()
		this.chartInit = this.chartInit.bind(this)
	}

	render() {
		return <div ref={this.barRef} className="chart"></div>
	}

	chartInit() {
		const myChart = echarts.init(this.barRef.current)

		myChart.setOption({
			title: {
				text: "ECharts 入门示例",
			},
			tooltip: {},
			xAxis: {
				data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
			},
			yAxis: {},
			series: [
				{
					name: "销量",
					type: "bar",
					data: [5, 20, 36, 10, 10, 20],
				},
			],
		})
	}

	componentDidMount() {
		this.chartInit()
	}

	componentWillUnmount() {
		// [React] There is a chart instance already initialized on the dom
		echarts.dispose(this.barRef.current)
	}
}
```

:::
::: code-group-item React Hooks

```jsx{7}
import React from 'react'
import * as echarts from 'echarts'
import { useEffect, useRef  } from 'react'

const BarChart = () => {
    // 使用ref获取dom元素
    const domRef = useRef()

    function chartInit() {
        const myChart = echarts.init(domRef.current)

        myChart.setOption({
            title: {
                text: "ECharts 入门示例"
            },
            tooltip: {},
            xAxis: {
                data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
            },
            yAxis: {},
            series: [
                {
                    name: "销量",
                    type: "bar",
                    data: [5, 20, 36, 10, 10, 20]
                }
            ]
        })
    }

    // 控制挂载时机
    useEffect(() => {
        chartInit()
		return () => {
			echarts.dispose(this.barRef.current)
		}
    }, [])

    return (
        <div>
            <div ref={domRef} style={{width: '600px', height: '400px'}}></div>
        </div>
    )
}

export default BarChart
```

:::
::::

### 7.9 Styled-Components

> 安装扩展 `vscode-styled-components` 语法提示

:::: code-group
::: code-group-item install

```sh
$ yarn add styled-components
```

:::
::: code-group-item usage

```jsx
import React, {Component} from "react"
import styled from "styled-components"

export default class App extends Component {
	render() {
		return <Div>App Dashboard</Div>
	}
}

const Div = styled.div`
	background: red;
`
```

:::
::::

### 7.10 react-icons

[react-icons 官网](https://react-icons.github.io/react-icons)

step 1. install

```bash
$ yarn add react-icons
```

step 2. usage

```jsx
import React from "react"
import {MdSpaceDashboard} from "react-icons/md"
import {AiOutlineDotChart} from "react-icons/ai"
import {IoSettingsOutline} from "react-icons/io5"
import {FaAirbnb} from "react-icons/fa"

export default class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			icons: [
				{icon: <MdSpaceDashboard />, title: "Dashboard"},
				{icon: <AiOutlineDotChart />, title: "Charts"},
				{icon: <FaAirbnb />, title: "Analytics"},
				{icon: <IoSettingsOutline />, title: "Settings"},
			],
		}
	}

	render() {
		return <div>App</div>
	}
}
```

### 7.11 ScrollReveal

[ScrollReveal 官网](https://scrollrevealjs.org)

step1. install

```bash
$ yarn add scrollreveal
```

step2. usage
:::: code-group
::: code-group-item React class 式

```jsx
import React from "react"
import scrollreveal from "scrollreveal"

export default App extends React.Component {
	componentDidMount() {
		const sr = scrollreveal({
			origin: "left",
			distance: "80px",
			duration: 1000,
			smooth: true,
			reset: false,
		})

		sr.reveal(
			`
            	.side-logo,
				.side-title,
				.side-wrapper .side-menu li
      		`,
			{
				opacity: 0,
				interval: 300,
			}
		)
	}
}
```

:::
::: code-group-item React hooks 式

```jsx
import React, {useEffect} from "react"
import scrollreveal from "scrollreveal"

const App = () => {
	useEffect(() => {
		const sr = scrollreveal({
			origin: "left",
			distance: "80px",
			duration: 1000,
			smooth: true,
			reset: false,
		})

		sr.reveal(
			`
            	.side-logo,
				.side-title,
				.side-wrapper .side-menu li
      		`,
			{
				opacity: 0,
				interval: 300,
			}
		)
	}, [])
}

export default App
```

:::
::::

## Other

NPM: Node Package Manager

JSX: JavaScript XML

Virtual DOM: Virtual Document Object Model

## FAQ

1. Error: Node Sass does not yet support your current environment

问题来源：执行下述代码在 react 项目中安装 node-sass 报错

```sh
$ yarn add node-sass@4
```

问题解决方案：首先由于 M1 的架构，Node Sass 不能很好的支持，也许可以用 Rosetta 实现；或者，放弃 Node Sass 改用 Sass（dart-sass）

```sh
$ yarn remove node-sass
$ yarn add sass
```

2. yarn add [package] --save 与 yarn add [package]的区别 ？

--save 会将该包加入到 package.json 依赖文件中，下次 yarn add 时将自动添加！

```sh
$ yarn add react-icons
$ yarn add -D sass
$ yarn add --dev typescript @types/react @types/node
```

3. React 常见生命周期的过程大致如下：

（挂载阶段）
挂载阶段，首先执行 constructor 构造方法，来创建组件
创建完成之后，就会执行 render 方法，该方法会返回需要渲染的内容
随后，React 会将需要渲染的内容挂载到 DOM 树上
挂载完成之后就会执行 componentDidMount 生命周期函数

(更新阶段)
如果我们给组件创建一个 props（用于组件通信）、调用 setState（更改 state 中的数据）、调用 forceUpdate（强制更新组件）时，都会重新调用 render 函数
render 函数重新执行之后，就会重新进行 DOM 树的挂载
挂载完成之后就会执行 componentDidUpdate 生命周期函数

(卸载阶段)
当移除组件时，就会执行 componentWillUnmount 生命周期函数

4. Effect

::: details
useEffect = componentDidMount, componentDidUpdate, componentWillUnmount 这三个函数的组合
effect 的清除阶段在每次重新渲染时都会执行，而不是只在卸载组件的时候执行一次
:::

5. 多个 react 项目如何使用共同的 npm 包 ？
   ::: tip
   多个 react 项目时可使用共同的父级 node_modules 目录
   package.json

```json
	"scripts": {
		"start": "node ../node_modules/.bin/react-scripts start ./src/index.js",
		"build": "ode ../node_modules/.bin/react-scripts build ./src/index.js"
	},
```

:::

6. Context
   Context 提供了一个无需为每层组件手动添加 props, 就能在组件树间进行数据传递的方法

7. 如何简写 this.state.counter 为 counter ？
   > 解构

```jsx{2}
render() {
	const { counter } = this.state;
	return <div>counter</div>
}
```

8. 如何添加条件样式 ?

**方法一**

```jsx
<div className={this.state.list.length === 0 ? 'container' : 'none'}>
```

**方法二(更优)**

```jsx
<div className={this.state.list.length === 0 && 'container'}>
```

9. 如何降低 React 版本 ？
   > React 18 发布后，同步方法也变成了异步，如何降低版本成为了个常见的问题

先创建 react 项目，然后进入项目中修改指定版本

```sh
$ npx create-react-app react-demo
$ cd react-demo
$ npm install —save react@17.0.2 react-dom@17.0.2
```

- index.js

```js
import React from "react"
import ReactDOM from "react-dom"
import App from "./App"

ReactDOM.render(<App />, document.getElementById("root"))
```

10. Props 与 State 的区别 ?

```
Props只读不能被修改
State能使用setState()修改，将重新渲染组件

比喻: props -> const, state -> let
```

11. 为何不能在 render 中调用 setState() ？

> 它会一直更新下去，直至程序错误

12. 直接修改 state 与 setState()有何区别 ？

> 网页显示数值会不同，setState()会重新渲染组件，而直接修改不会重新渲染

```jsx
state = {count: 0}
// 不会重新渲染组件
this.state.count = 5 // count: 5

// 重新渲染组件
this.setState({count: this.state.count + 1}) // 6
```

13. [React Echarts]报错：There is a chart instance already initialized on the dom

> 新增 echarts 卸载`componentWillUnmount() {echarts.dispose(this.barRef.current)}`

```jsx
import React, {Component} from "react"
import * as echarts from "echarts"

export default class BarChart extends Component {
	constructor(props) {
		super(props)
		this.state = {}
		this.barRef = React.createRef(null)
		this.chartInit = this.chartInit.bind(this)
	}

	render() {
		return <div ref={this.barRef} className="chart"></div>
	}

	chartInit() {
		const myChart = echarts.init(this.barRef.current)

		myChart.setOption({
			title: {
				text: "ECharts 入门示例",
			},
			tooltip: {},
			xAxis: {
				data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
			},
			yAxis: {},
			series: [
				{
					name: "销量",
					type: "bar",
					data: [5, 20, 36, 10, 10, 20],
				},
			],
		})
	}

	componentDidMount() {
		this.chartInit()
	}

	componentWillUnmount() {
		// Solution
		echarts.dispose(this.barRef.current)
	}
}
```

### 13. [ECharts] DEPRECATED: 'normal' hierarchy in itemStyle has been removed since 4.0. All style properties are configured in itemStyle directly now.

原先

```jsx
itemStyle: {
	normal: {
		color: "#0078FF",
	},
},
```

现在

```js
itemStyle: {
	color: "#0078FF",
},
```

### 14. [ECharts] DEPRECATED: textStyle hierarchy in name has been removed since 4.0. All textStyle properti

原先

```js
radar: {
	name: {
		textStyle: {
			color: "#242425",
		},
	},
}
```

现在

```js
radar: {
	axisName: {
		color: "#242425",
	},
}
```

### 15. 如何在 React 项目中引用 html 文件

```md
将 html、css、js 文件放在`public`目录下即可, 之后使用`./test.html`即可引用
```

```bash
$ tree
└── public
    ├── index.html
    └── test.html
```

```jsx
import React, {Component} from "react"

export default class Works extends Component {
	render() {
		return (
			<div>
				<a href="./test.html" target="_blank">
					Link
				</a>
			</div>
		)
	}
}
```

### 16. React 项目 yarn build 之后页面显示空白

> package.json 中添加 `"homepage": "./"`即可

**package.json**

```json
{
	"version": "0.1.0",
	"private": true,
	"homepage": "./",
	...
}
```

## React 进阶

### Children

```jsx
import React from "react"

function ComA(props) {
	return <div>Children: {props.children}</div>
}

export default class Children extends React.Component {
	getName = () => {
		console.log("hello, react-child")
	}
	render() {
		return (
			<ComA>
				<div>hello, react!</div>
				<a href="https://react.docschina.org"></a>
				<button onClick={this.getName}>Click</button>
			</ComA>
		)
	}
}
```

### 数据校验：PropTypes

> 通过数据校验检查数据类型是否正确
> ::: tip
> 导包

```sh
yarn add prop-types
```

> 说明

```jsx
常见类型: number、string、bool、array、func、object
必填项: isRequired
PropTypes.string
PropTypes.number
```

:::

::::: details 示例
:::: code-group
::: code-group-item PropsTypeList.jsx

```jsx {3,11-13}
import React from "react"
// 数据类型校验
import PropTypes from "prop-types"

const List = (props) => {
	const list = props.links.map((item, index) => <li key={index}>{item}</li>)
	return <ul>{list}</ul>
}

// 校验方法
List.propTypes = {
	links: PropTypes.array,
}

const PropsTypeList = () => {
	const links = ["Home", "About", "Docs"]
	return <List links={links} />
}

export default PropsTypeList
```

:::
::: code-group-item App.jsx

```jsx
import React from "react"

import PropsTypeList from "./components/PropsTypeList"

export default function App() {
	return (
		<>
			<PropsTypeList />
		</>
	)
}
```

:::
::::
:::::

### props 参数默认值： defaultProps

> 父组件未传参时可使用默认值
> ::::: tip
>
> 1. class 组件: 使用 static 变量初始化
>
> 2. func 组件: 在函数组件参数中设置默认值 ｜ 使用 defaultProps 设置默认值

:::: code-group
::: code-group-item defaultProps

```jsx
List.defaultProps = {
	text: "Default Value !",
}
```

:::
::: code-group-item 函数参数默认值

```jsx
const List = ({text = "Hello, React !"}) => {
	return <div>{text}</div>
}
```

:::
::: code-group-item class 静态变量初始化

```jsx
class List extends React.Component {
	// 设置静态变量初始化默认值
	static defaultProps = {
		text: "Hello, React !",
	}
	render() {
		return <div>{this.props.text}</div>
	}
}
```

:::
::::
:::::

::::: details 查看示例
:::: code-group

::: code-group-item DefaultProps.jsx

```jsx{5,20}
import React from "react"
import PropTypes from "prop-types"

// 3. 父组件没有写参数,在此设置参数默认值
const List = ({text="Hello, React !"}) => {
	// 2. 子组件使用了参数
	return <div>{text}</div>
}

// 数据类型校验
List.propTypes = {
	text: PropTypes.string,
}

const DefaultProps = () => {
	return (
		<>
			<List text="Hello React !" />
			{/* 1.没有设置参数 */}
			<List />
		</>
	)
}

export default DefaultProps

```

:::

::: code-group-item DefaultProps2.jsx

```jsx{14-15,23}
import React from "react"
import PropTypes from "prop-types"

const List = (props) => {
	// 2. 子组件使用了参数
	return <ul>{props.text}</ul>
}

List.propTypes = {
    text: PropTypes.string
}

// 3.设置参数默认值
List.defaultProps = {
    text: "Default Value !"
}

const DefaultProps2 = () => {
	return (
		<>
			<List text="Hello React !" />
			{/* 1.父组件没有传递参数 */}
			<List />
		</>
	)
}

export default DefaultProps2
```

:::

::: code-group-item DefaultPropsStatic

```jsx
import React from "react"
import PropTypes from "prop-types"

class List extends React.Component {
	// 设置静态变量初始化默认值
	static defaultProps = {
		text: "Hello, React !",
	}
	render() {
		return <div>{this.props.text}</div>
	}
}

const DefaultPropsStatic = () => {
	return (
		<>
			<List text="Hello, React !" />
			{/* 1.没有设置参数 */}
			<List />
		</>
	)
}

export default DefaultPropsStatic
```

:::

::: code-group-item App.jsx

```jsx
import React from "react"

import DefaultProps from "./components/DefaultProps"

export default function App() {
	return (
		<>
			<DefaultProps />
		</>
	)
}
```

:::
::::
:::::

### React 生命周期

[React 生命周期示意图](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)

![React-lifeCycle](@/assets/react/react-lifecycle.png)

::::: details 点击查看示例
:::: code-group
::: code-group-item ReactLifecycle.jsx

```jsx
import React from "react"

/**
 * 执行顺序: 自上而下
 *
 * 一、组件挂载阶段
 * constructor： 创建组件时最先执行,初始化只执行一次   1.初始化state 2.创建Ref 3.使用bind解决this指向问题
 * render： 每次组件渲染组会触发(渲染UI，不能在里面调用setState())
 * componentDidMount: 组件挂载后执行，初始化执行一次,子组件先执行  1.发送网络请求 2.DOM操作
 *
 * 二、组件更新阶段
 * render: 每次组件渲染都会执行
 * componentDidUpdate: 每次更新都会触发
 *
 * 三、组件卸载阶段
 * componentWillUnmount: 组件更新后卸载，执行清理工作，之后挂载componentDidMount
 */

class ChildCom extends React.Component {
	constructor(props) {
		super(props)
		this.timer = null
	}
	componentDidMount() {
		console.log("ChildCom componentDidMount")
		this.timer = setInterval(() => {
			console.log("ChildCom Timer !")
		}, 1000)
	}
	componentDidUpdate() {
		console.log("ChildCom componentDidUpdate")
	}
	componentWillUnmount() {
		console.log("ChildCom componentWillUnmount")
		clearInterval(this.timer)
	}
	render() {
		return <div>ChildCom</div>
	}
}

class ReactLifecycle extends React.Component {
	constructor(props) {
		super(props)
		console.log("constructor")
		this.state = {
			count: 0,
			flag: true,
		}
		this.handleClick = this.handleClick.bind(this)
	}
	componentDidMount() {
		console.log("componentDidMount")
	}
	componentDidUpdate() {
		console.log("componentDidUpdate")
	}
	componentWillUnmount() {
		console.log("componentWillUnmount")
	}
	handleClick() {
		this.setState({
			count: this.state.count + 1,
			flag: !this.state.flag,
		})
	}
	render() {
		console.log("render")
		return (
			<div>
				<h1>ReactLifecycle</h1>
				<button onClick={this.handleClick}>+</button>
				<p>{this.state.count}</p>
				{this.state.flag ? <ChildCom /> : null}
			</div>
		)
	}
}

export default ReactLifecycle
```

:::

::: code-group-item App.jsx

```jsx
import React from "react"

import ReactLifecycle from "./components/ReactLifecycle"

export default function App() {
	return (
		<>
			<ReactLifecycle />
		</>
	)
}
```

:::

::::
:::::
