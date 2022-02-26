# 仪表盘



## OverView

### @基础仪表盘

```
option = {
  tooltip: {
    formatter: '{a} <br/>{b} : {c}%'
  },
  series: [
    {
      name: 'Pressure',
      type: 'gauge',
      progress: {
        show: true
      },
      detail: {
        valueAnimation: true,
        formatter: '{value}'
      },
      data: [
        {
          value: 50,
          name: 'SCORE'
        }
      ],
    }
  ]
};
```

## Series

### <u>OverView</u>

```javascript
series: {
    // 仪表盘
	type: 'gauge',
	// 指针
	pointer: {},
	// 进度条
	progress: {},
    // 数据标签
    data: [{}],
    detail: {formatter: '{value}%'},
    // 背景轴线
    axisLine
}
```
### 线

#### axisLine [轴线(底色)]

```
axisLine: {
	lineStyle: {width: 10},
}
```

#####  lineStyle

```
// 默认长度为10
lineStyle: {
	width: 10,
	color: [
        [0.3, '#67e0e3'],
        [0.7, '#37a2da'],
        [1, '#fd666d']
    ]
},

detail: {
	valueAnimation: true,
	formatter: '{value} km/h',
	formatter: function (value) {
		if (value > 100) {
			return '100';
		}
		return value;
	},
	color: 'auto'
},
```

#### progress  [进度条 (轴线表色)]

> 默认不显示
```javascript
progress: {
	// 进度条显示
	show
    // 进度条样式
	itemStyle
    // 进度条圆角
	roundCap
}
```

##### 1. 显示进度条

```
show: true,
```
##### 2. 进度条样式

```
itemStyle: {
	color: '#58D9F9',
    shadowColor: 'rgba(0,138,255,0.45)',
    shadowBlur: 10,
    shadowOffsetX: 2,
    shadowOffsetY: 2,
},
```
##### 3. 进度条两端圆角

```
roundCap: 'round',
```

#### axisTick [刻度线]

>   刻度线默认显示

-   不显示刻度线

    axisTick: {
    	show: false
    },

#### splitLine [分隔线]

```
splitLine: {
	length
	lineStyle: {
		width: 2,
        color: '#999'
    },
    distance
},
```

##### 分隔线长度

```
// 默认为10
length: 10,
```

##### 分隔线与轴线距离

```
// 默认为10
distance: 10,
```

### 标签文本

#### data

```
data: [{
    value: 50,
    name: 'SCORE'
}]
```

<!-- <img src="imgs/echarts/gaugeData.png" style="zoom:50%;" /> -->

#### detail [数据详情]

```
detail: {
	formatter
	valueAnimation
	offsetCenter
}
```



##### 1. 文本格式化

```
formatter: '{value}%'
```
```
formatter: function (value) {
          return '{value|' + value.toFixed(0) + '}{unit|km/h}';
        },
rich: {
	value: {
		fontSize: 50,
		fontWeight: 'bolder',
		color: '#777'
	},
    unit: {
    	fontSize: 20,
    	color: '#999',
    	padding: [0, 0, -20, 10]
    }
}
```





##### 2. 开启标签的数字动画

```
valueAnimation: true,
```

##### 3.偏移量

```
offsetCenter: ['0%', '70%'],
```

#### axisLabel [轴线标签]

```
axisLabel: {
	show: false,
	distance: 25,
	color: '#999',
	fontSize: 20
},
```
##### 不显示刻度标签

```
show: false,
```

#### title [标题]

```
title: {
	show: true,
	offsetCenter
	color
	fontSize
	rich
}
```



### pointer [指针]

```
pointer: {
	show: false,
},
```

```
length: '75%',
width: 16,
offsetCenter: [0, '5%'],
```

### anchor [锚点]

```
anchor: {
	show: true,
	showAbove: true,
	size: 15,
	itemStyle: {
          borderWidth: 30
	}
},
```





## For Example

```
option = {
    tooltip: {
        formatter: "{a} <br/>{b} : {c}%"
    },
    series: [{
        // name: '业务指标',
        type: 'gauge',
        detail: {
            formatter: '{value}%',
            color: '#fff',
        },
        title: {
            color: '#fff',
            fontSize: 30,
            rich: {
                a: {
                    fontWeight: 'normal',
                    fontSize: 30,
                    color: 'rgba(255,255,255,0.5)',
                    padding: [0, 0, 80, 0]
                }
            },
            // offsetCenter: [0, -50],
        },
        data: [{
            // name: 'CPU',
            name: '{a|' + 'CPU' + '}',
            value: 23,
            valueAnimation: true,

        }],
        radius: '40%',
        progress: {
            show: true,
            itemStyle: {
                color: '#fff',
            },
            roundCap: 'round',
        },
        // 指针
        pointer: {show: false},
        // 分隔线
        splitLine: {show: false},
        // 刻度线
        axisTick: {show: false},
        // 刻度标签
        axisLabel: {show: false},
        // 仪表盘轴线背景色
        axisLine: {
            roundCap: 'round',
            lineStyle: {
                color: [
                    [1, 'rgba(18, 155, 251, 0.2)']
                ]
            },
        },
    }, ]
};
```





### 指针动画

```
// data:[{value: v}]

var v = 20
setInterval(function () {
  myChart.setOption({
    series: [
      {
        data: [
          {
            // value: +(Math.random() * 100).toFixed(2)
            value: v++
          }
        ]
      }
    ]
  });
}, 100);
```

