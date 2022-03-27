# React

## 快速开始 ？

```sh
yarn
```

```sh
yarn add react-icons sass 
```

## React快速入门

* 创建一个新的React项目

```shell
npx create-react-app react-app
```

* React项目结构

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

* Imported modules

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

* className

```jsx
const App = () => {
    const name = 'React'

    return (
    <div className={name}>Hello, {name}!</div>
    );
}
```

* img

> 注意需要加斜杠 '/' !!

```jsx
<img src="" alt />
```

## React中的JSX

* String in React

```jsx
const App = () => {
    const name = 'React'

    return (
        <h1>Hello, {name}</h1>
    );
}
```

* List in React

```jsx
const App = () => {
    const links = ['Home', 'About', 'Docs']
    const list = links.map((item, index) => <li key={index}>{item}</li>)

    return (
        <ul>{list}</ul>
    )
}
```

* Object in React

```jsx
const App = () => {
    const links = [
        {id: 1, name: 'Home'},
        {id: 2, name: 'Blog'},
        {id: 3, name: 'Docs'}
    ]
    const list = links.map((item) => <li key={item.id}>{item.name}</li>)

    return (
        <ul>{list}</ul>
    )
}
```

## 参数Props

```jsx
<App name='React'/>
```

* function

```jsx
const App = (props) => {
  return (
    <div>{props.name}</div>
  )
}
```

* class

```jsx
class App extends React.Component {
    render() {
        return (
            <div>{this.props.name}</div>
        )
    }

}
```

```jsx
import React from 'react'

class Header extends React.Component {
    /*
    constructor(props) {
        super(props)
    }
    */
    render() {
        return (
            <img src={this.props.src} alt={this.props.alt} />
        )
    }
}

export default Header
```

## State (Only in React class)

* Object

```jsx
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

* function

```jsx
class App extends React.Component {
    state = {
        counter: 0
    }
    increment = () => {
        this.setState({counter: this.state.counter + 1});
    }
    render() {
        return (
            <div>
                <p>{this.state.counter}</p>
                <button onClick={this.increment}>+</button>
            </div>
        )
    }
}
```

* Lifecycle Methods
    - Mounting()
    - Unmounting()
    - componentDidMount()
    - componentDidUpdate()
    - componentWillUnmount()


```jsx
import React from 'react';

class Navbar extends React.Component {
    state = {
        counter: 0
    }
    increment = () => {
        this.setState({counter: this.state.counter + 1})
    }

    // 加载后修改初始化默认值
    componentDidMount = () => this.state.counter = 3

    // 加载时不触发，每次更新触发
    componentDidUpdate = () => alert("Counter: " + this.state.counter)

    render() {
        return (
            <div>
                <p>{this.state.counter}</p>
                <button onClick={this.increment}>+</button>
            </div>
        )
    }
}

export default Navbar;
```

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

* useState

```jsx
import React, {useState} from 'react'

const App = () => {
  // 创建一个变量为counter, 并初始化为0
  const [counter, setCounter] = useState(0)
  // 方法
  const increment = () => setCounter(counter + 1)

  return (
  <div>
   <p>{counter}</p>
   <button onClick={increment}>+</button>
  </div>
 );
}

export default App
```

* useEffect

```md
useEffect() = componentDidMount() + componentDidUpdate() + componentWillUnmount()
```

```jsx
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

## Event Handles

```jsx
const Toggle = () => {
    const [value, setValue] = useState("ON")
    const toggle = () => setValue((value == "ON") ? "OFF" : "ON")
    return (
        <button onClick={toggle}>{value}</button>
    )
}
```

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