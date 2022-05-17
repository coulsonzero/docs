# Table


## FAQ

### 自定义表头

:::: code-group
::: code-group-item columns
```js
columns: {
    // title: '当前财务公允价值',
    title: downSelect('当前财务公允价值'),
    dataIndex: 'fmv',
    key: 'fmv',
    align: 'right',
    width: 200,
    render: (text, record) => {
        return (
            text == null ? '-' : <span>{setCurrency(record)} {moneyFormat(text)}</span>,
        )
    },
}
```
:::
::: code-group-item downSelect
```js
const downSelect = (title) => {
	return (
		<div className="irr-table-header">
			<div>{title}</div>
			<Select defaultValue="2021-12-31" style={{width: "100%", border: "none"}}>
				<Option value="0">2021-12-31</Option>
				<Option value="1">2021-12-30</Option>
				<Option value="2">2021-12-29</Option>
				<Option value="3">2021-12-28</Option>
			</Select>
		</div>
	)
}
```
:::
::: code-group-item Table
```js
<Table
    columns={columns}
    ...
/>
```
:::
::::
