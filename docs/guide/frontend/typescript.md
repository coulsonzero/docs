# TypeScript


## 开始使用
### 全局安装typescript

```sh
$ yarn global add typescript
```

### 检查是否已安装TypeScript
```sh
tsc -v
```

## OverView

### Hello World

```ts
const hello: string = "Hello World!"

console.log(hello)
```
### 数据类型

基本数据类型
- number
- string
- boolean
- any

```ts
const name: string = "Smith"
const num: number = 12
const flag: boolean = true
let x: any = 20     //x = "Hello"
let y: number | null | undefined
```

特殊符号
- ? (可选)
- | (或)

数组类型
- number[]
- string[]
- boolean[]
- any[]


```ts
let arr1: number[] = [1, 3, 6, 2]
let arr3: string[] = ["John", "Smith", "porl"]
let arr3: any[] = [1,false,'nice']
let arr2: Array<number> = [1, 3, 6, 2]
```

函数

```ts
function hello(): void {
    console.log("hello world!")
}

function add(x: number, y: number): number {
	return x + y
}

function buildName(firstName: string, lastName?: string) {
	return firstName + " " + lastName
}

function addNumbers(...nums: number[]) {
}

```

类
```ts
class Car {
	// 字段
	engine: string

	// 构造函数
	constructor(engine: string) {
		this.engine = engine
	}

	// 方法
	disp(): void {
		console.log("发动机为 :   " + this.engine)
	}
}
```


接口

```ts
interface IPerson {
	firstName: string
	lastName: string
	sayHi: () => string
}

var customer: IPerson = {
	firstName: "Tom",
	lastName: "Hanks",
	sayHi: (): string => {
		return "Hi there"
	}
}
```

```ts
interface ILoan {
	interest: number
}

class AgriLoan implements ILoan {
	interest: number
	rebate: number

	constructor(interest: number, rebate: number) {
		this.interest = interest
		this.rebate = rebate
	}
}
```


## FAQ

- TypeScript vscode /bin/sh: ts-node: command not found

```sh
$ yarn global add ts-node
```