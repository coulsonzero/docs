# React

[React官网][1]

[NextJs][2]

[1]: https://react.docschina.org/
[2]: ./nextjs.md

## 运行clone的React项目

```sh
$ git clone https://github.com/coulsonzero/react-app
$ yarn
$ yarn start  # or npm start
```

## React快速入门

### 创建React项目

```sh
$ npx create-react-app react-app
$ cd react-app
$ yarn start  # or npm start
```

### React项目结构

::: details 查看React项目结构

```md
$ tree
.
├── node_modules
├── src
│    ├── `components`
│    │   └── Navbar.jsx
│    ├── App.css
│    ├── `App.js`
│    └── `index.js`
├── public
│   ├── favicon.ico
│   └── index.html
├── package-lock.json
├── `package.json`
└── README.md
```

:::

### Imported modules

```jsx
import React from 'react'
import NavBar from './components/Navbar'

const App = () => {
  return (
    <NavBar />
  )
}

export default App
```


## React语法规则
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
<img src="" alt />	// 注意需要加斜杠 '/' !!
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

## React中的JSX渲染

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

```jsx{5,8}
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

::: details Object渲染示例

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

## 参数Props

::: tip
> Fun: `props.name`
>
> Class: `this.props.name`
:::
:::: code-group
::: code-group-item App.jsx

```jsx
<App name='React'/>
```

:::

::: code-group-item ChildFun.jsx

```jsx
const ChildFun = (props) => {
    return (
        <div>{props.name}</div>
    )
}
```

:::

::: code-group-item ChildClass.jsx

```jsx
class ChildClass extends React.Component {
    render() {
        return (
            <div>{this.props.name}</div>
        )
    }
}
```

:::

::::




## State (Only in React class)

:::: code-group
::: code-group-item this.state.var

```jsx{7}
class App extends React.Component {
    state = {
        name: 'React'
    }
    render() {
        return (
            <h1>Hello, {this.state.name}!</h1>
        )
    }
}
```
:::
::: code-group-item this.setState( )

```jsx{6,11}
class App extends React.Component {
    state = {
        counter: 0
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

* Lifecycle Methods
    - Mounting()
    - Unmounting()
    - componentDidMount()
    - componentDidUpdate()
    - componentWillUnmount()

::: details React生命周期函数(Class)
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
## Hooks (Only in React function)


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



## Event Handles

:::: code-group
::: code-group-item funcHandle
```jsx
const Toggle = () => {
    const [value, setValue] = useState("ON")
    const toggle = () => setValue((value == "ON") ? "OFF" : "ON")
    return (
        <button onClick={toggle}>{value}</button>
    )
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
    return (
        <button onClick={handleClick}>{value}</button>
    )
}
```

## 组件通信

### 父传子

> 通过props传值

::: details 固定值
```jsx
import React, {useState} from "react";

function Sub(props) {
	return(
        <>
		    <div>{props.num}</div>
        </>
	);
}

export default function App() {
	return (
		<>
			<Sub num={9}/>
		</>
	);
}
```
:::


> 使用useState初始化传值
```jsx
import React, {useState} from "react";

function Sub(props) {
	return(
        <>
		    <div>{props.num}</div>
        </>
	);
}

export default function App() {
	const [num, setNum] = useState(2);
	return (
		<>
			<Sub num={num}/>
		</>
	);
}
```


### 子传父

> 通过调用父组件方法，将参数返回
> 子组件写父组件方法的具体实现
```jsx
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
	return (
		<>
			<Sub num={num} setNum={setNum} />
		</>
	);
}

```


> 父组件写具体方法实现，子组件传参给父组件
```jsx
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
			<input
				type="text"
				placeholder="username"
				value={username}
				onChange={handleInput}
			/>
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

> 通过多个props传值和方法
::: details 点击查看代码
```jsx
import React, {useState} from "react";

function Sub(props) {
	return (
		<>
			<div>{props.num}</div>
			<button onClick={() => props.childFun(3)}>+</button>
		</>
	);
}

function Father(props) {
	return (
		<>
			<Sub num={props.num} childFun={props.childFun}/>
		</>
	)
}


export default function App() {
	const [num, setNum] = useState(2);
	function childFun(n) {
		setNum(num + n);
	}
	return (
		<>
			<Father num={num} childFun={childFun}/>
		</>
	);
}

```
:::

> 通过createContext跨组件传值
::: details 点击查看代码
```jsx
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

> createContext, 使用对象传方法
> 对象没有顺序问题，数组有索引，需要特定顺序！
::: details 点击查看代码
```jsx
import React, {useState, createContext} from "react";

const numContext = createContext()

function Sub() {
	const res = ({num, setNum}) => {
		return (
			<>
				<div>{num}</div>
				<button onClick={() => setNum(num + 1)}>+</button>
			</>
		);
	}
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
		<numContext.Provider value={{num, setNum}}>
			<Father />
		</numContext.Provider>
	);
}
```
:::

::: details 点击查看代码
```jsx
import React, {useState, createContext} from "react";

const numContext = createContext()

function Sub() {
	const res = ({num, childFun}) => {
		return (
			<>
				<div>{num}</div>
				<button onClick={() => childFun(2)}>+</button>
			</>
		);
	}
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
		<div style={{color: 'red', display: 'flex', flexDirection: 'row'}}>
			<span>ComB: </span>
			<Consumer>{(value) => <div>{value}</div>}</Consumer>
		</div>
	)
}

class CrossComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            message: "test"
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
> 解构createContext

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
<context.Provider value={this.state.message}>
</context.Provider>
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


## React with Redux

> 安装redux包

```sh
$ yarn add --save redux react-redux
```

* 使用state显示reducer数据
:::: code-group
::: code-group-item reducer.js
```js
// src/store/reducer.js
const data = {
    msg: "hello, redux"
}

// eslint-disable-next-line
export default (state=data, action) => {
    return state
}
```
:::

::: code-group-item index.js
```js
// src/store/index.js
import {createStore} from 'redux'
import reducer from './reducer'

const store = createStore(reducer)

export default store
```
:::

::: code-group-item index.js
```js
// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// 1. import
import {Provider} from 'react-redux'
import store from './store'

ReactDOM.render(
	<React.StrictMode>
    {/* 2. use <Provider></Provider> */}
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);
```
:::

::: code-group-item App.js
```js
import React from 'react'

// 1.import connect
import {connect} from "react-redux";

const App = (props) => {
  return (
	// 4. return
	<div>{props.msg}</div>
  )
}

// 3. mapStateToProps(state)
const mapStateToProps = (state) => {
	return {
		msg: state.msg
	}
}


// 2. connect(mapStateToProps)(Provider)
export default connect(mapStateToProps)(App)
```
:::
::::

* 使用action修改state数据

:::: code-group
::: code-group-item reducer.js
```js
// src/store/reducer.js
const data = {
    msg: "hello, redux"
}

// eslint-disable-next-line
export default (state=data, action) => {
    let newState = JSON.parse(JSON.stringify(state))
    if (action.type ==  "UPDATE") {
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
import {createStore} from 'redux'
import reducer from './reducer'

const store = createStore(reducer)

export default store
```
:::

::: code-group-item index.js
```js
//index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// 1. import
import {Provider} from 'react-redux'
import store from './store'

ReactDOM.render(
	<React.StrictMode>
    {/* 2. use <Provider></Provider> */}
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);
```
:::

::: code-group-item App.js
```js
// App.js
import React from 'react'


import {connect} from "react-redux";

const App = (props) => {
  return (
		<>
			<div>{props.msg}</div>
			<button onClick={props.setMsg}>update</button>
		</>
	);
}

const mapStateToProps = (state) => {
	return {
		msg: state.msg
	}
}

// 2. mapDispatchToProps(dispatch)
const mapDispatchToProps = (dispatch) => {
	return {
		setMsg() {
			const action = {type: "UPDATE", value: "ok,  updated state..."};
			dispatch(action)
		}
	}
}

// 1. mapDispatchToProps
export default connect(mapStateToProps, mapDispatchToProps)(App)
```
:::
::::

* redux 实现哈希字典数据

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
        {key: 1, name: 'Lemon', cost: 3},
        {key: 2, name: 'Banana', cost: 4},
        {key: 3, name: 'Mango', cost: 5}
    ],
    totalPrice: 10
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
import {createStore} from 'redux'
import reducer from './reducer'

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



* redux实现todo-list
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
import {createStore} from 'redux'
import reducer from './reducer'

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
    contacts: ["James Smith", "Thomas Anderson", "Bruce Wayne"]
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
        data: person
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
			<input
				type="text"
				value={person}
				placeholder="Add"
				onChange={handleChange}
			/>
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
import Navbar from '../components/Navbar'
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

import React from 'react'

export default function Login() {
  return (
    <div>login</div>
  )
}

```
:::

::: code-group-item App.jsx
```jsx
import React from 'react'
import {Outlet} from 'react-router-dom'

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
import React from 'react'

const Navbar = () => {
  return (
    <div>Navbar</div>
  )
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

问题来源：执行下述代码在react项目中安装node-sass报错

```sh
$ yarn add node-sass@4
```

问题解决方案：首先由于M1的架构，Node Sass不能很好的支持，也许可以用Rosetta实现；或者，放弃Node Sass改用Sass（dart-sass）

```sh
$ yarn remove node-sass
$ yarn add sass
```

2. yarn add [package] --save 与 yarn add [package]的区别 ？

--save会将该包加入到package.json依赖文件中，下次yarn add时将自动添加！

```sh
$ yarn add react-icons
$ yarn add -D sass
$ yarn add --dev typescript @types/react @types/node
```

3. React常见生命周期的过程大致如下：

（挂载阶段）
挂载阶段，首先执行constructor构造方法，来创建组件
创建完成之后，就会执行render方法，该方法会返回需要渲染的内容
随后，React会将需要渲染的内容挂载到DOM树上
挂载完成之后就会执行componentDidMount生命周期函数

(更新阶段)
如果我们给组件创建一个props（用于组件通信）、调用setState（更改state中的数据）、调用forceUpdate（强制更新组件）时，都会重新调用render函数
render函数重新执行之后，就会重新进行DOM树的挂载
挂载完成之后就会执行componentDidUpdate生命周期函数

(卸载阶段)
当移除组件时，就会执行componentWillUnmount生命周期函数


4. Effect

::: details
useEffect = componentDidMount, componentDidUpdate, componentWillUnmount 这三个函数的组合
effect 的清除阶段在每次重新渲染时都会执行，而不是只在卸载组件的时候执行一次
:::

5. 多个react项目如何使用共同的npm包 ？
::: tip
多个react项目时可使用共同的父级node_modules目录
package.json
```json
	"scripts": {
		"start": "node ../node_modules/.bin/react-scripts start ./src/index.js",
		"build": "ode ../node_modules/.bin/react-scripts build ./src/index.js"
	},
```
:::

6. Context
Context提供了一个无需为每层组件手动添加props, 就能在组件树间进行数据传递的方法

7. 如何简写this.state.counter为counter ？
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

## React进阶

### Children
```jsx
import React from "react"

function ComA(props) {
	return (
        <div>Children: {props.children}</div>
    )
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
::: tip
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
    links: PropTypes.array
}



const PropsTypeList = () => {
    const links = ["Home", "About", "Docs"]
    return (
        <List links={links}/>
    )
}


export default PropsTypeList

```
:::
::: code-group-item App.jsx
```jsx
import React from 'react'

import PropsTypeList from './components/PropsTypeList'

export default function App() {
  return (
    <>
      <PropsTypeList/>
    </>
  )
}

```
:::
::::
:::::


### props参数默认值： defaultProps
> 父组件未传参时可使用默认值
::::: tip
> 1. class组件: 使用static变量初始化
>
> 2. func组件: 在函数组件参数中设置默认值 ｜ 使用defaultProps设置默认值


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
const List = ({text="Hello, React !"}) => {
	return <div>{text}</div>
}
```
:::
::: code-group-item class静态变量初始化
```jsx
class List extends React.Component {
    // 设置静态变量初始化默认值
    static defaultProps = {
        text: "Hello, React !"
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
        text: "Hello, React !"
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



### React生命周期

[React生命周期示意图](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)

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
        this.timer = setInterval(() =>{
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
            flag: !this.state.flag
        })
    }
	render() {
        console.log("render")
		return (
			<div>
				<h1>ReactLifecycle</h1>
				<button onClick={this.handleClick}>+</button>
				<p>{this.state.count}</p>
                {this.state.flag ? <ChildCom /> : null }
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


## Ant Designer
[Ant Designer](https://ant.design/index-cn)

[Ant Designer Pro 展示面板](https://preview.pro.ant.design/dashboard/analysis)

![Ant Designer Pro](@/assets/react/AntDesingerPro.png)

::::: tip
> 1. 新建React项目，导入antd包 `$ yarn add antd`
> 2. 引入Antd静态资源`import { Button } from "antd"`
> 3. 引入Antd全局样式`@import '~antd/dist/antd.css';`
:::: code-group
::: code-group-item 终端
```sh{3}
$ npx create-react-app react-antd
$ cd react-antd
$ yarn add antd
$ yarn start
```
:::

::: code-group-item App.css
```css
@import '~antd/dist/antd.css';
```
:::

::: code-group-item AntdButton.jsx
```jsx{2,7}
import React from "react"
import { Button } from "antd"

function AntdButton() {
	return (
		<>
			<Button type="primary">Primary Button</Button>
		</>
	)
}

export default AntdButton

```
:::

::: code-group-item App.jsx
```jsx
import React from "react"
import './App.css'
import AntdButton from "./components/AntdButton"

class App extends React.Component {
	render() {
		return (
			<>
				<AntdButton />
			</>
		)
	}
}

export default App

```
:::

::::
:::::

::::: warning
> 在上级目录下共享node_modules包，需修改以下配置:

:::: code-group
::: code-group-item package.json

```json
{
	"scripts": {
		"start": "node ../node_modules/.bin/react-scripts start ./src/index.js",
		"build": "ode ../node_modules/.bin/react-scripts build ./src/index.js"
	},
}
```
:::

::: code-group-item 终端
```sh
$ cd ..
$ yarn add antd
$ cd react-antd
$ yarn start
```
:::
::::
:::::


### Button
:::: code-group
::: code-group-item 普通按钮
```jsx
import React from "react"
import {Button} from "antd"

class AntdButton extends React.Component {
	render() {
		return (
			<>
				<Button type="primary">Primary Button</Button>
			</>
		)
	}
}

export default AntdButton
```
:::
::: code-group-item 下载按钮
```jsx
import React from "react"
import {Button} from "antd"
import {DownloadOutlined} from "@ant-design/icons"

class AntdButton extends React.Component {
	state = {
		size: "large"
	}

	render() {
		const {size} = this.state
		return (
			<>
				<Button
					type="primary"
					shape="circle"
					icon={<DownloadOutlined />}
					size={size}
				/>
				<Button
					type="primary"
					shape="round"
					icon={<DownloadOutlined />}
					size={size}>
					Download
				</Button>
			</>
		)
	}
}

export default AntdButton
```
:::

::: code-group-item 按钮加载动画
```jsx
import React from "react"
import {Button} from "antd"
import {PoweroffOutlined} from "@ant-design/icons"

class AntdButton extends React.Component {
	state = {
		loadings: []
	}

	enterLoading = (index) => {
		this.setState(({loadings}) => {
			const newLoadings = [...loadings]
			newLoadings[index] = true

			return {
				loadings: newLoadings,
			}
		})
		setTimeout(() => {
			this.setState(({loadings}) => {
				const newLoadings = [...loadings]
				newLoadings[index] = false

				return {
					loadings: newLoadings,
				}
			})
		}, 6000)
	}

	render() {
		const {loadings} = this.state
		return (
			<>
				<Button
					type="primary"
					loading={loadings[0]}
					onClick={() => this.enterLoading(0)}>
					Click me!
				</Button>
				<Button
					type="primary"
					icon={<PoweroffOutlined />}
					loading={loadings[1]}
					onClick={() => this.enterLoading(1)}>
					Click me!
				</Button>
			</>
		)
	}
}

export default AntdButton
```
:::

::: code-group-item 搜索按钮
```jsx
import React from "react"
import {Button, Tooltip} from "antd"
import {SearchOutlined} from "@ant-design/icons"

class AntdButton extends React.Component {
	render() {
		return (
			<>
				<Tooltip title="search">
					<Button type="primary" shape="circle" icon={<SearchOutlined />} />
				</Tooltip>
			</>
		)
	}
}

export default AntdButton
```

:::

::: code-group-item 单选框组
```jsx
import React from "react"
import {Button, Radio} from "antd"

class AntdButton extends React.Component {
	state = {
		size: "large"
	}

	handleSizeChange = (e) => {
		this.setState({size: e.target.value})
	}

	render() {
		return (
			<>
				<Radio.Group value={size} onChange={this.handleSizeChange}>
					<Radio.Button value="large">Large</Radio.Button>
					<Radio.Button value="default">Default</Radio.Button>
					<Radio.Button value="small">Small</Radio.Button>
				</Radio.Group>
			</>
		)
	}
}

export default AntdButton
```
:::

::::

::: details 完整示例
**AntdButton.jsx**

```jsx
import React from "react"
import {Button, Radio, DatePicker, version, Tooltip} from "antd"
import {
	DownloadOutlined,
	SearchOutlined,
	PoweroffOutlined,
} from "@ant-design/icons"

import 'antd/dist/antd.css';

class AntdButton extends React.Component {
	state = {
		size: "large",
		loadings: [],
	}

	handleSizeChange = (e) => {
		this.setState({size: e.target.value})
	}
	enterLoading = (index) => {
		this.setState(({loadings}) => {
			const newLoadings = [...loadings]
			newLoadings[index] = true

			return {
				loadings: newLoadings,
			}
		})
		setTimeout(() => {
			this.setState(({loadings}) => {
				const newLoadings = [...loadings]
				newLoadings[index] = false

				return {
					loadings: newLoadings,
				}
			})
		}, 6000)
	}

	render() {
		const {size, loadings} = this.state
		return (
			<div className="container">
				<h1>antd version: {version}</h1>

				{/* 单选框组 */}
				<Radio.Group value={size} onChange={this.handleSizeChange}>
					<Radio.Button value="large">Large</Radio.Button>
					<Radio.Button value="default">Default</Radio.Button>
					<Radio.Button value="small">Small</Radio.Button>
				</Radio.Group>

				{/* 日期选择框 */}
				<DatePicker />

				{/* 按钮 */}
				<Button type="primary">Primary Button</Button>
				<Button
					type="primary"
					shape="circle"
					icon={<DownloadOutlined />}
					size={size}
				/>
				<Button
					type="primary"
					shape="round"
					icon={<DownloadOutlined />}
					size={size}>
					Download
				</Button>

				<Button
					type="primary"
					loading={loadings[0]}
					onClick={() => this.enterLoading(0)}>
					Click me!
				</Button>
				<Button
					type="primary"
					icon={<PoweroffOutlined />}
					loading={loadings[1]}
					onClick={() => this.enterLoading(1)}>
					Click me!
				</Button>

				{/* 搜索按钮 */}
				<Tooltip title="search">
					<Button type="primary" shape="circle" icon={<SearchOutlined />} />
				</Tooltip>
			</div>
		)
	}
}

export default AntdButton

```
:::


### Table

:::: code-group
::: code-group-item 普通表格
```jsx
import { Table } from "antd"
<Table
	columns={columns}
	dataSource={data}
/>
```
:::

::: code-group-item 滚动表格
```jsx{5}
<Table
	columns={columns}
	rowSelection={{ ...rowSelection }}
	dataSource={data}
	scroll={{ x: 1500, y: 300 }}
/>
```
:::

::: code-group-item 表格边框
```jsx{6}
 <Table
	columns={columns}
	rowSelection={{ ...rowSelection }}
	dataSource={data}
	scroll={{ x: 1500, y: 300 }}
	bordered={true}
/>
```
:::

::: code-group-item 表格边框圆角
```jsx{1-4,12}
<Card
	style={{ borderRadius: 15, marginTop: 15, overflow: 'hidden' }}
	bodyStyle={{ padding: 0 }}
>
	<Table
		columns={columns}
		rowSelection={{ ...rowSelection }}
		dataSource={data}
		scroll={{ x: 1500, y: 300 }}
		bordered={false}
	/>
</Card>
```
:::

::: code-group-item 表格底部统计行
```jsx
import { Card, Table, Typography } from 'antd';
import { toMstr } from '@/utils/utils';
const { Text } = Typography;
```
```jsx{11-51}
<Card
	style={{ borderRadius: 15, marginTop: 15, overflow: 'hidden' }}
	bodyStyle={{ padding: 0 }}
	>
	<Table
		columns={columns}
		rowSelection={{ ...rowSelection }}
		dataSource={data}
		scroll={{ x: 1500, y: 300 }}
		bordered={true}
		summary={pageData => {
			let sum_curFinancialFairValue = 0;
			let sum_projectIRR = 0;
			pageData.forEach(record => {
				if (record.curFinancialFairValue != undefined) {
				sum_curFinancialFairValue += Math.round((record.curFinancialFairValue) * 100) / 100;
				}
				if (record.projectIRR != undefined) {
				sum_projectIRR += Math.round(Number(record.projectIRR) * 100) / 100;
				}
			});
			return (
				<Table.Summary fixed>
					<Table.Summary.Row>
						<Table.Summary.Cell>合计</Table.Summary.Cell>
						<Table.Summary.Cell>-</Table.Summary.Cell>
						<Table.Summary.Cell>-</Table.Summary.Cell>
						<Table.Summary.Cell>-</Table.Summary.Cell>
						<Table.Summary.Cell>-</Table.Summary.Cell>
						<Table.Summary.Cell>
						<Text style={{ fontWeight: 'bolder' }}>
							${toMstr(sum_curFinancialFairValue)}
						</Text>
						</Table.Summary.Cell>
						<Table.Summary.Cell>
						<Text style={{ fontWeight: 'bolder' }}>
							<span>{parseFloat(sum_projectIRR).toFixed(2) + '%'}</span>
						</Text>
						</Table.Summary.Cell>
						<Table.Summary.Cell>-</Table.Summary.Cell>
						<Table.Summary.Cell>-</Table.Summary.Cell>
						<Table.Summary.Cell>-</Table.Summary.Cell>
						<Table.Summary.Cell>-</Table.Summary.Cell>
						<Table.Summary.Cell>-</Table.Summary.Cell>
						<Table.Summary.Cell>-</Table.Summary.Cell>
						<Table.Summary.Cell>-</Table.Summary.Cell>
						<Table.Summary.Cell>-</Table.Summary.Cell>
					</Table.Summary.Row>
				</Table.Summary>
			);
		}}
	/>
</Card>
```
:::
::: code-group-item utils.js
```js
export function toMstr(val) {
  if (val != undefined && val != null && val != '-' && val != '暂无数据') {

    let num = Math.round(val * 100)/100
    let intstr = num
      .toString()
      .split('.')[0]
      .replace(/\d{1,3}(?=(\d{3})+$)/g, '$&,');
    let flostr =
      num.toString().split('.')[1] != undefined
        ? '.' +
        num
          .toString()
          .split('.')[1]
        : '.00';

    let numstr = intstr + flostr;

    return numstr;
  } else if(val == null || val == '-'){
    return '-'
  } else{
    return 0;
  }
}
```
:::
::::



::::: details Table示例
:::: code-group
::: code-group-item SampleTable.jsx
```jsx
import React from "react"
import { Table } from "antd"

export class SampleTable extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			columns: [
				{
					title: "姓名",
					dataIndex: "name",
					key: "name",
				},
				{
					title: "年龄",
					dataIndex: "age",
					key: "age",
				},
				{
					title: "住址",
					dataIndex: "address",
					key: "address",
				},
			],
			dataSource: [
				{
					key: "1",
					name: "胡彦斌",
					age: 32,
					address: "西湖区湖底公园1号",
				},
				{
					key: "2",
					name: "胡彦祖",
					age: 42,
					address: "西湖区湖底公园1号",
				},
			],
		}
	}
	render() {
		const {dataSource, columns} = this.state
		return <Table dataSource={dataSource} columns={columns} />
	}
}

export default SampleTable
```
:::
::: code-group-item ScrollTable.jsx
```jsx
import React from "react"
import { Card, Table, Tag } from "antd"

class ScrollTable extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			columns: [
				{
					title: "项目名称",
					dataIndex: "projectName",
					fixed: "left",
					width: 100,
				},
				{
					title: "主管合伙人",
					dataIndex: "partner",
					fixed: "left",
					width: 120,
				},
				{
					title: "负责人",
					dataIndex: "leader",
					fixed: "left",
					width: 100,
				},
				{
					title: "投资基金",
					dataIndex: "investmentFund",
					render: (text, record) => {
						return text == null ? "-" : <Tag color="default">{text}</Tag>
					},
					fixed: "left",
					width: 120,
				},
				{
					title: "当前财务公允价值",
					dataIndex: "curFinancialFairValue",
					align: "right",
					width: 160,
					render: (text, record) => {
						return text == null ? "-" : <span>${parseFloat(text).toFixed(2)}</span>
					},
				},
				{
					title: "Project IRR",
					dataIndex: "projectIRR",
					align: "right",
					render: (text, record) => {
						return text == null ? "-" : <span>{parseFloat(text).toFixed(2) + "%"}</span>
					},
					width: 150,
				},
				{
					title: "预测财务公允价值1",
					dataIndex: "forecastFinancialFairValue1",
					// ellipsis: true,
					align: "right",
					width: 160,
				},
				{
					title: "预测Project IRR1",
					dataIndex: "forecastProjectIRR1",
					align: "right",
					width: 150,
				},
				{
					title: "预测财务公允价值2",
					dataIndex: "forecastFinancialFairValue2",
					align: "right",
					width: 160,
				},
				{
					title: "预测Project IRR2",
					dataIndex: "forecastProjectIRR2",
					align: "right",
					width: 150,
				},
				{
					title: "预测财务公允价值3",
					dataIndex: "forecastFinancialFairValue3",
					align: "right",
					width: 160,
				},
				{
					title: "预测Project IRR3",
					dataIndex: "forecastProjectIRR3",
					align: "right",
					width: 150,
				},
				{
					title: "预测财务公允价值4",
					dataIndex: "forecastFinancialFairValue4",
					align: "right",
					width: 160,
				},
				{
					title: "预测Project IRR4",
					dataIndex: "forecastProjectIRR4",
					align: "right",
					width: 150,
				},

				{
					title: "累计投资金额",
					dataIndex: "total_investment_amount",
					width: 150,
				},
				{
					title: "工场当前成本",
					dataIndex: "current_cost",
					width: 150,
				},
				{
					title: "累积退出收入",
					dataIndex: "total_exit_income",
					width: 150,
				},
				{
					title: "累积退出收益/亏损",
					dataIndex: "total_exit_income_loss",
					width: 150,
				},
				{
					title: "公司当前投后估值",
					dataIndex: "company_current_valuation",
					width: 150,
				},
				{
					title: "唯一编码",
					dataIndex: "unique_code",
					width: 150,
				},

				{
					title: "计算值",
					dataIndex: "CalculatValue",
					align: "right",
					fixed: "right",
					width: 150,
				},
			],
			dataSource: [
				{
					key: 1,
					projectName: "项目名称1",
					partner: "合伙人1",
					leader: "负责人1",
					investmentFund: "RMB Fundl",
					projectIRR: "-34.32",
					curFinancialFairValue: "870479.00",
				},
				{
					key: 2,
					projectName: "项目名称2",
					partner: "合伙人2",
					leader: "负责人2",
					investmentFund: "Fundl",
					projectIRR: "83.67",
					curFinancialFairValue: "1870479.00",
				},
				{
					key: 3,
					projectName: "项目名称3",
					partner: "合伙人3",
					leader: "负责人3",
					investmentFund: "Marvel Fundl",
					projectIRR: "62.46",
					curFinancialFairValue: "70479.00",
				},
			],
		}
	}
	render() {
		const {dataSource, columns} = this.state
		return (
			<div style={{width: "80vw"}}>
				<Card style={{width: "100%", borderRadius: 15, marginTop: 15, overflow: "hidden"}} bodyStyle={{padding: 0}}>
					<Table columns={columns} dataSource={dataSource} scroll={{x: 1500, y: 300}} bordered={false} pagination={false} />
				</Card>
			</div>
		)
	}
}

export default ScrollTable
```
:::
::::
:::::