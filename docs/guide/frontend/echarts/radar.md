# 雷达图



## For Example
```javascript
option = {
    //backgroundColor: '323232',
    title: {
        text: '基础雷达图'
    },
    tooltip: {},
    legend: {
        data: ['预算分配（Allocated Budget）', '实际开销（Actual Spending）']
    },
    radar: {
        name: {
            textStyle: {
                color: '#fff',
                backgroundColor: '#999',
                borderRadius: 3,
                padding: [3, 5]
            }
        },
        indicator: [{
            name: '销售（sales）',
            max: 6500
        }, {
            name: '管理（Administration）',
            max: 16000
        }, {
            name: '信息技术（Information Techology）',
            max: 30000
        }, {
            name: '客服（Customer Support）',
            max: 38000
        }, {
            name: '研发（Development）',
            max: 52000
        }, {
            name: '市场（Marketing）',
            max: 25000
        }]
    },
    series: [{
        name: '预算 vs 开销（Budget vs spending）',
        type: 'radar',
        data: [{
            value: [4300, 10000, 28000, 35000, 50000, 19000],
            name: '预算分配（Allocated Budget）'
        }, {
            value: [5000, 14000, 28000, 31000, 42000, 21000],
            name: '实际开销（Actual Spending）'
        }]
    }]
};
```



## Legend
```javascript
legend: {
    data: [...],
    //垂直或水平排布
    orient: 'vertical',
    //位置
    left: '400px',
    bottom: '450',
    //列表样式
    icon: 'circle',    
},
```



## radar

```javascript
radar: {
    //字体样式
    name: {
        textStyle: {..., fontSize: 14, fontWeight: 700}
    },
    nameGap: 16,
    //雷达图位置
    center: ['70%', '50%'],
    //雷达图缩放, 越大就放大
    radius: 100,
	indicator:[...],
	//雷达线统一颜色
    splitArea: {
      	areaStyle: {color: ['none','none', 'none','none', 'none']}
    },
    //轴线颜色
    axisLine: {
    		lineStyle: {color: '#cde6f5'},
		},
    //网格的颜色
    splitLine: {
    		lineStyle: {color: '#cde6f5'},
    }
},
```
### 雷达面统一颜色
```
splitArea: {
	show: false
},
```
### 雷达线数量
```
splitNumber: 5,
```
## Series

### type (图表类型)

```
//类型: 雷达图
type: 'radar',
```
### data (数据)
```
data: [{
	  value: [4300, 10000, 28000, 35000, 50000, 19000],
	  name: '预算分配（Allocated Budget）'
}, {
	  value: [5000, 14000, 28000, 31000, 42000, 21000],
	  name: '实际开销（Actual Spending）'
}],
```
### itemStyle (点)

```
itemStyle: {},
```

### lineStyle (线)

```
lineStyle: {},
```

### areaStyle (面)

```
areaStyle: {},
```



### Demo

```javascript
series: [
    {
        ...
    	//图层次序
        z: 1,
  	},
	{
		type: 'radar',
        data: [{
            //拐点大小
            //symbolSize: 10,
            //拐点值
            value: [4300, '', '', '', '', ''],
         }],
        //图层次序
        z: 2,
        //拐点颜色
        itemStyle: {normal: {color: '#A66CFE'}},
        //隐藏轴线颜色
        lineStyle: {width: 0,labelLine: {show: false }}
        },
	{
		type: 'radar',
		data: [{
			//symbolSize: 10,
			value: ['', 10000, '', '', '', ''],
		}],
        //层次
		z: 3,
		itemStyle: {color: 'red'},
		lineStyle: {width: 0,labelLine: {show: false}},
	},
	{
		type: 'radar',
		data: [{
			symbolSize: 10,
            //轴心
			value: ['', '', '', '', '', ''],
		}],
		z: 999,
        //轴心颜色
		itemStyle: {color: 'blcak'},
		lineStyle: {width: 0,labelLine: {show: false}}
	}
]
```