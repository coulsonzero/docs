# [TypeScript](https://www.tslang.cn)

## Getting Start
### install

```sh
$ yarn global add typescript
```

### version
```sh
$ tsc -v
```

## OverView

### Hello World

```ts
const hello: string = "Hello World!"

console.log(hello)
```
### Data type
```ts
// Basic type
const num : number  = 12
const flag: boolean = true
const name: string  = 'John Smith'
```

```ts
// Array
let nums: number[] = [1, 3, 6, 2]
let nums: Array<number> = [1, 3, 6, 2]

// Tuple
let tup: [number, string] = [1, 'John Smith']

// Enum
enum Color { Red, Green, Blue }
let c: Color = Color.Green
```


```ts
// any
let x: any = 12
x = 'hello'	// ok
x = false   // ok

// any[]
let y: any[] = [1, true, 'free']

// `|` (or)
let z = number | string | boolean
z = 12
z = 'John Smith'
z = false

// ?   (option)
```


## Function

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


## Interface

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