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
::: code-group-item 事件

```jsx
<button onclick={handleClick}>Activate Lasers</button>
<input type="text" placeholder="username" onChange={handleChange} />
<form onSubmit={handleSubmit}></form>

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

## 三. 核心概念

### 3.1 JSX 渲染

::: demo [react] 元素渲染

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

::: demo [react] 列表渲染

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

::: demo [react] 对象渲染

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

::: demo [react] 对象渲染示例

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
::::

### 3.2 Props 传参

::: demo [react] props 传参

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

::: demo [react] class State

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

::::: details dispatch请求
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

::: details axios请求
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

::: details fetch请求
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

### UseEffect

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

## 组件通信

::: tip 组件通信方式

> `父传子`: 调用父组件变量`props.parms`
>
> `子传父`: 调用父组件回调函数`props.func()`
>
> `兄弟组件通信`: 通过子传父，再父传子
>
> `跨组件通信`: `createContext()` && `useContext()`

:::

### 父传子

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

### 子传父

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

### 兄弟组件通信

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

### 跨组件通信

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

## React with Redux

> 安装 redux 包

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

## react-route-dom

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
