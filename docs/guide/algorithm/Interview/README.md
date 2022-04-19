# 面试题

## 睿企 2022-04-13

::::: details 点击查看代码
:::: code-group
::: code-group-item 题目
```js
const pathList = ["/a/b", "/a/2/c", "/d"]

/**
 * 如上，输入是一个一维String数组pathList，里面记录了由"/"分隔的字符串，表示了用户在系统中存储的目录结构
 * 现在需要将这个目录结构进行结构化，方便使用Echarts等可视化组件进行绘制
 * 结构化的要求：将目录结构以嵌套对象的形式表现出来，如最后23~31行的注释
 *
 * 实现要求：请实现下面的pathFormat方法，完成这个结构化的过程
 */

function pathFormat(pathList) {
	const answer = {}
	// todo: 将pathList转化成目标结构，更新到answer中

	return answer
}

console.log(JSON.stringify(pathFormat(pathList), null, 2))

/*
{
  "a": {
    "2": {
      "c": {}
    },
    "b": {}
  },
  "d": {}
}
*/

```
:::

::: code-group-item 解答
```js
const pathList = ["/a/b", "/a/2/c", "/d"]

function pathFormat(pathList) {
	const answer = {}
	var array = []
	for (let i = 0; i < pathList.length; i++) {
		// step1. '/a/2/c' => ['a', '2', 'c]
		let arr = pathList[i].split("/").filter((n) => n !== "")
		// setp2. ['a', '2', 'c] => {"a": {"2": {"c": {}}}}
		let res = "{"
		for (let j = 0; j < arr.length; j++) {
			res += '"' + arr[j] + '": {'
			var sep = "}".repeat(j + 1)
		}
		res += sep + "}"
		// step3. [{"a": {"2": {"c": {}}}}, {"a": {"b"{}}}, ...]
		array.push(JSON.parse(res))
	}

	for (let i = 0; i < array.length; i++) {
		for (let v in array[i]) {
			// 4. 解构
			answer[v] = {...array[i][v], ...answer[v]}
		}
	}

	return answer
}

console.log(JSON.stringify(pathFormat(pathList), null, 2))

```
:::
::::
:::::

## 阿里 2022-04-13
::::: details 点击查看代码
:::: code-group
::: code-group-item 题一
```javascript
const array = [
	{value: 6},
	{value: 2},
	{value: 3},
	{value: 5},
	{value: 2},
	{value: 5},
]

function multiple(array) {
    /*
	let res = 1
    let arr = []
	for(let v of array) {
		// if(arr.indexOf(v.value) === -1) arr.push(v.value)
		if(!arr.includes(v.value)) arr.push(v.value)
	}
	arr.map(v => res *= v)
	return res
    */
}

console.log(multiple(array)) // 应该输出180

```
:::

:::code-group-item 题二
```html
<div id="vue-app">
    <form>
        <label>省份:</label>
      	<select v-model="form.province">
            <option value="" disabled>请选择</option>
            <option></option>
        </select>
      	<label>城市:</label>
        <select v-model="form.city">
            <option value="" disabled>请选择</option>
            <option></option>
        </select>
        <button @click.prevent="submitForm">提交</button>
      <form>
</div>
```

```js
import Vue from "vue@2.6.14/dist/vue.js"

const ProvinceList = [
	{
		id: 100,
		name: "河北",
		children: [
			{id: 10001, name: "石家庄"},
			{id: 10002, name: "廊坊"},
			{id: 10003, name: "秦皇岛"},
		],
	},
	{
		id: 174,
		name: "浙江",
		children: [
			{id: 17401, name: "杭州"},
			{id: 17402, name: "宁波"},
			{id: 17403, name: "温州"},
		],
	},
]

new Vue({
	el: "#vue-app",
	data() {
		return {
			ProvinceList,
			form: {
				province: "",
				city: "",
			},
		}
	},
	methods: {
		submitForm() {
			const {province, city} = this.form
			if (!province || !city) {
				alert("请选择完整地址！")
				return
			}
			alert(`提交成功！地址编码是：${province}-${city}`)
		},
	},
})

```
:::
::::
:::::
## 华为机考 2022-04-17

::::: details 点击查看代码
:::: code-group
::: code-group-item 第一题

```python
"""
华为机考题1

x$y = 3*x + 2*y + 2
x#y = 2*x + 3*y + 4

输入：7#6$5#12
输出：226
解释：先计算$, 在计算#
"""

def func1(v):
    arr = [int(x) for x in v.split('$')]
    a, b = arr[0], arr[1]
    for _ in arr[2:]:
        a, b = 3 * a + b + 2, _
    return 3 * a + b + 2

def func2(l):
    l = [int(x) for x in l]
    x, y = l[0], l[1]
    for _ in l[2:]:
        x, y = 2 * x + 3 * y + 4, _
    return 2 * x + 3 * y + 4

if __name__ == '__main__':
    import sys
    for line in sys.stdin:
        a = line.split()[0]
        for i in range(len(a), 2):
            if (a[i].isdigit() and (a[i+1] == '#' or a[i+1] == '$')):
                print("not")
        arr = a.split('#')
        for i in range(len(arr)):
            if '$' in arr[i]:
                arr[i] = func1(arr[i])
        print(func2(arr))
```

:::

::: code-group-item 第二题

```java
/**
 * 华为机考2022/4/17  题2
 *
 * 0 定义 1 与 2 为一个团队
 * 1 查询 1 与 2 是否为一个团队，是则输出"we are a team"，否则输出"we are not a team"
 * 2 输出"da pian zi"
 *
 * 输入：
 * 5 6
 * 1 2 0
 * 1 2 1    => "we are a team"
 * 1 5 1    => "we are not a team"
 * 2 4 0
 * 2 4 1    => "we are a team"
 * 3 1 2    => "da pian zi"
 *
 * 输出：
 * we are a team
 * we are not a team
 * we are a team"
 * "da pian zi"
 */

import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();  // 5
        int m = sc.nextInt();  // 6
        HashMap<Integer, Integer> map = new HashMap<>();
        Stack<Integer> list = new Stack<>();
        for(int i = 0; i < m; i++){
            String s = sc.nextLine();
            String[] arr = s.split(" ");

            /*
            if(list.pop() == 0) map.put(list.pop(), list.pop());
            else if(list.pop() == 1) {
                System.out.println(map.containsKey(list.pop()));
            }
            else System.out.println("da pian zi");
            */
        }
        /*
        System.out.println("we are a team");
        System.out.println("we are not a team");
        System.out.println("we are a team");
        System.out.println("da pian zi");
        */
    }
}
```

:::

::: code-group-item 第三题
```java
/**
 * 3. 贪吃蛇
 *
 * U D L R G 分别代表 上、下、左、右、保持方向前进一步
 * F 为食物, T为空格，蛇吃到食物长度加1，碰到边界则返回失败返回长度
 * 默认方向为左，初始长度为1
 *
 * 输入：
 * D G G
 *
 * F F T
 * F F H
 * F F T
 *
 * 解释：
 * 向下前行2步
 * 1
 *
 * 输入：
 * G G G
 *
 * F F T
 * F F H
 * F F T
 *
 * 输出：
 * 默认方向为左，保持前进两步，吃到两个食物(F)，默认长度为1，故返回长度3
 * 3
 */

public class Solution3 {
}

```
:::

::::
:::::