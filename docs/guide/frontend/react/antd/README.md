---
prev:
    text: React
    link: /guide/frontend/react/
---

# Ant Designer


[Ant Designer](https://ant.design/index-cn)

[Ant Designer Pro 展示面板](https://preview.pro.ant.design/dashboard/analysis)

![Ant Designer Pro](@/assets/react/AntDesingerPro.png)

::::: tip

> 1. 新建 React 项目，导入 antd 包 `$ yarn add antd`
> 2. 引入 Antd 静态资源`import { Button } from "antd"`
> 3. 引入 Antd 全局样式`@import '~antd/dist/antd.css';`
>    :::: code-group
>    ::: code-group-item 终端

```sh{3}
$ npx create-react-app react-antd
$ cd react-antd
$ yarn add antd
$ yarn start
```

:::

::: code-group-item App.css

```css
@import "~antd/dist/antd.css";
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
import "./App.css"
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

> 在上级目录下共享 node_modules 包，需修改以下配置:

:::: code-group
::: code-group-item package.json

```json
{
	"scripts": {
		"start": "node ../node_modules/.bin/react-scripts start ./src/index.js",
		"build": "ode ../node_modules/.bin/react-scripts build ./src/index.js"
	}
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
		size: "large",
	}

	render() {
		const {size} = this.state
		return (
			<>
				<Button type="primary" shape="circle" icon={<DownloadOutlined />} size={size} />
				<Button type="primary" shape="round" icon={<DownloadOutlined />} size={size}>
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
		loadings: [],
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
				<Button type="primary" loading={loadings[0]} onClick={() => this.enterLoading(0)}>
					Click me!
				</Button>
				<Button type="primary" icon={<PoweroffOutlined />} loading={loadings[1]} onClick={() => this.enterLoading(1)}>
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
		size: "large",
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
import {DownloadOutlined, SearchOutlined, PoweroffOutlined} from "@ant-design/icons"

import "antd/dist/antd.css"

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
				<Button type="primary" shape="circle" icon={<DownloadOutlined />} size={size} />
				<Button type="primary" shape="round" icon={<DownloadOutlined />} size={size}>
					Download
				</Button>

				<Button type="primary" loading={loadings[0]} onClick={() => this.enterLoading(0)}>
					Click me!
				</Button>
				<Button type="primary" icon={<PoweroffOutlined />} loading={loadings[1]} onClick={() => this.enterLoading(1)}>
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
import {Table} from "antd"
;<Table columns={columns} dataSource={data} />
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
import {Card, Table, Typography} from "antd"
import {toMstr} from "@/utils/utils"
const {Text} = Typography
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
	if (val != undefined && val != null && val != "-" && val != "暂无数据") {
		let num = Math.round(val * 100) / 100
		let intstr = num
			.toString()
			.split(".")[0]
			.replace(/\d{1,3}(?=(\d{3})+$)/g, "$&,")
		let flostr = num.toString().split(".")[1] != undefined ? "." + num.toString().split(".")[1] : ".00"

		let numstr = intstr + flostr

		return numstr
	} else if (val == null || val == "-") {
		return "-"
	} else {
		return 0
	}
}
```

:::
::::

::::: details Table 示例
:::: code-group
::: code-group-item SampleTable.jsx

```jsx
import React from "react"
import {Table} from "antd"

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
import {Card, Table, Tag} from "antd"

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

