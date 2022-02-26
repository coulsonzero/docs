# FWP条形图样式




## Overview
### 基础条形图
```
option = {
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [120, 200, 150, 80, 70, 110, 130],
      type: 'bar'
    }
  ]
};
```


```typescript
//可以在每行后面加个逗号!
option = {
    let xdata = ['周一', '周二', '周三', '周四', '周五', '周六', '周日'];
    let ydata = [120, 200, 150, 80, 70, 110, 130];
    
    //背景色
    //backgroundColor: "#1A253A",
    //标题
    title: {text, subtext, textStyle},
    //柱体
    series: [{name, data, type}],
    //x轴
    xAxis: [{type, data}],
    //y轴
    yAxis: [{type, name, splitLine}],
        
    //选项
    legend: {data}
	//悬浮提示
    tooltip: {trigger: 'axis', axisPointer:{type:'cross'}},
    //工具栏
    toolbox: {feature: {}},
    grid: {},
	dataZoom: {}
};
```


###  Ⅰ  Title
```typescript
title: {
	text: "标题",
	subtext: "副标题",
	textStyle: {color: 'orange'}	//字体颜色
	//居中显示
	//left: 'center', 
    //垂直居中
    //top: 'center',
},
```
### SubText
```
subtextStyle: {
	color: 'white',
	fontSize: 20
}
```

<img src="imgs/title.png" style="zoom:100%" />



------





###  Ⅱ  Series ------  柱体

#### @初始化

```typescript
series: [{
	type: 'bar',
	data: arr,
	name: 'Precipitation',  	//需绑定legend子选项(可选)
}],
```

<img src="imgs/barWidth.png" style="zoom:100%" />

#### 1. 宽度 barWidth
```typescript
barWidth: 16,	
```

#### 2. 圆角、颜色 itemStyle
- 圆角
```
itemStyle: {
	normal: {
		barBorderRadius: [8, 8, 0, 0],
	}
},
```
-  颜色
```
itemStyle: {
	normal: {
		barBorderRadius: [8, 8, 0, 0],
			color: 'skyblue'
	}
},
itemStyle: {
	normal: {barBorderRadius: [8, 8, 0, 0],	color: 'skyblue'},
	emphasis: {focus: 'series'},	//hover样式: 其他柱体隐藏
},
```
- 鼠标悬停（hover样式）: 其他柱体隐藏
```typescript
itemStyle: {
	emphasis: {focus: 'series'},	
},
//水平柱状图圆角：[0, 8, 8, 0]
```
<img src="imgs/barWidth.png" style="zoom:100%" />

#### 3. 渐变色 itemStyle
```typescript
itemStyle: {
    color: new echarts.graphic.LinearGradient(1, 1, 0, 0, [
        {offset: 0,   color: '#99FF1A'},
        {offset: 1,   color: '#699800'}
    ])
},
//水平柱状图： 0, 0, 1, 1
```

#### 4. 堆叠合并
- 总体合并
```
stack: 'total',
```
- 合并到指定数据中
```typescript
stack: 'Search Engine',		//柱体合并(改：圆角+值范围)
yAxis: [{
	yAxisIndex: 1,  //自适应高度
}]
```

<img src="imgs/stack.png" style="zoom:100%" />

#### 5. y轴高度自适应
```typescript
yAxisIndex: 1,
```
<img src="imgs/height.png" style="zoom:50%" /> <img src="imgs/yAxisIndex.png" style="zoom:50%" />



#### 6. 最值和平均值

```typescript
markPoint: {
	data: [{type: 'max',name: 'Max'}, {type: 'min',name: 'Min'}]
},
markLine: {
	data: [{type: 'average',name: 'Avg'}]
}
```
<img src="imgs/max-min.png" style="zoom:140%" />


#### 7. 背景悬浮框

```typescript
showBackground: true,
backgroundStyle: {
	color: 'rgba(180, 180, 180, 0.2)'
}
```
<img src="imgs/showBackground.png" style="zoom:140%" />

#### 8. 柱体顶部椭圆
```typescript
{ //柱子顶部椭圆
	"name": "",
	"type": "pictorialBar",
	"data": [120, 200, 150, 80, 70, 110, 130]
	"symbolSize": [30, 15],
	"symbolOffset": [0, -10],
	"symbolPosition": "end",
	"z": 12,
	itemStyle: {
		opacity: 1,
		color: function(params) {
            return new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {offset: 0,color: 'green'},
                {offset: 0.5,color: 'skyblue'},
                {offset: 1,color: 'orange'}
            ], false)
		}
	},
	label: {
        show: true,
        position: 'top',
        fontSize: 16,
        color: '#fff',
	}
},
```
#### 9. 自定义每根柱体颜色 data
```typescript
data: [
	120,
	{value: 200,itemStyle: {color: '#a90000'}},
	150,
	80,
	70,
	110,
	130
],
```
#### 10. 瀑布图 stack

```
stack: 'Total',
```
#### 11. 标签 label
```
label: {
    show: true,
    position: 'bottom',  //'top','inside'
    fontSize: 16,
    color: '#fff',
    formatter: '{b}: {c}',
    distance: 50
},
```
#### 12.正负交错轴
```
data: [
    { value: -0.07, label: labelRight },
    { value: -0.09, label: labelRight },
    0.2,
    0.44,
    { value: -0.23, label: labelRight },
    0.08,
    { value: -0.17, label: labelRight },
    0.47,
    { value: -0.36, label: labelRight },
    0.18
]
```

------
### Ⅲ  xAxis/yAxis (坐标轴)

#### @初始化
```typescript
xAxis: [{
	type: 'category',
    data: xdata,	//数据
}],
    
yAxis: [
  {
	type: 'value',
	name: 'Precipitation',
    splitLine: {show: false},		//不显示线条
  },
  {	
	type: 'value',
	name: 'Evaporation',
    splitLine: {show: false},		//不显示线条
  }
],
legend: {
	data: ['Evaporation', 'Precipitation', 'Temperature']
}
```

#### 线
##### 1. splitLine 网格线
```
splitLine: {show: false},
```

<img src="imgs/showSplitLine.png" style="zoom:100%" />





#### 2. 背景色 => 轴色 (字体、轴线  => 柱体色、选项色、标题色、工具栏字体色?)

```typescript
background: '#323232',
xAxis: [{
	...
    axisLabel: {color: '#ffffff'},     //inside: true  字体置于柱内
    axisLine: {lineStyle: {color: "#c1c1c1"}}
},
yAxis: [{
	...
    axisLabel: {color: '#ffffff'},     //inside: true  字体置于柱内
    axisLine: {lineStyle: {color: "#c1c1c1"}}
},
    
series: [{
    itemStyle: {
	normal: {barBorderRadius: [8, 8, 0, 0],	color: 'skyblue'},
}],
legend: {
    textStyle: {color: "#ffffff"}
},
title: {
	textStyle: {color: 'orange'}	//字体颜色
},
```
<img src="imgs/background-color.png" style="zoom:100%" />



####  3. 坐标值范围 (最值、间距、单位)
```typescript
yAxis: [{
	...
    min: 0,
    max: 350,
    interval: 50,	//值间距
    axisLabel: {formatter: '{value} ml'},  //单位
}],
```
<img src="imgs/yValue.png" style="zoom:100%" />




#### 4. 垂直 ---> 水平条形图

```typescript
//将yAxis的type改为category, xAxis改为value
xAxis: {
  type: 'value',
},
yAxis: {
  type: 'category',
  data: ['Brazil', 'Indonesia', 'USA', 'India', 'China', 'World']
},
```
<img src="imgs/horizontalBarChart.png" style="zoom:100%" />




#### 5. 其他
```typescript
xAxis: [{
    //axisPointer: {type: 'shadow'},  //hover样式
    //axisTick: {show: false}
    //z: 10
    //boundaryGap: true,
}],
yAxis: [{
	...
    dataZoom: [{type: 'inside'}]    //鼠标滚轮缩放
    //boundaryGap: [0.2, 0.2],
}],
```

#### 6.轴线对齐
```
axisTick: {
	alignWithLabel: true
}
```

------
### Ⅳ  Tooltip (提示工具)

```typescript
tooltip: {
    trigger: 'axis',
    axisPointer: {type: 'cross', crossStyle: {color: '#999'}} //线条
},
```

<img src="imgs/toolTip.png" width=140% />

------



### Ⅴ  Toolbox  ( 工具栏 )

```typescript
toolbox: {
    feature: {
        dataView: {show: true, readOnly: false},
    	magicType: {show: true, type: ['line', 'bar']}, //type:['line']
   	 	restore: {show: true},
    	saveAsImage: {show: true}
    }
},
```
<img src="imgs/toolBox.png" style="zoom:100%" width=120% />

------



###  Ⅵ  Legend (子选项)

#### @初始化

```typescript
legend: {
	data: ['Evaporation', 'Precipitation', 'Temperature'],
},
```

#### 间距
##### 子项间距

```
itemGap: 10
```
##### 项目与标签间距

```
formatter: '   {name}',
```
- 子选项格式化
```typescript
// 使用字符串模板，模板变量为图例名称 {name}
formatter: 'Legend {name}'
// 使用回调函数
formatter: function (name) {
    return 'Legend ' + name;
}
```

#### 示例
```typescript
legend: {
	data: ['Evaporation', 'Precipitation', 'Temperature'],
	top: 10, 			//间距
   itemGap: 20, 		//子项间距
    icon: "circle", 	//圆形单选框
    textStyle: {fontSize: 12, color: "#000000"}, //字体样式设置
},
    
series: [
    {
      name: 'Evaporation',
      type: 'bar',
      data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
    },
    {
      name: 'Precipitation',
      type: 'bar',
      data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
    },
    {
      name: 'Temperature',
      type: 'line',
      yAxisIndex: 1,   //折线
      data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
    }
  ],
```

<img src="imgs/legend.png" style="zoom:110%"/>

### Ⅶ grid 布局

```typescript
grid: {
  left: '5%',
  right: '14%',
  bottom: '13%',
     containLabel: true
},
```

### Ⅷ  dataZoom 趋势线

```typescript
dataZoom: {
    show: true,
    start: 0,
    end: 100
},
```

<img src="imgs/dataZoom.png" style="zoom:100%"/>

### Ⅸ 时间轴 timeline
#### 基础设置
```
timeline: {
	axisType: 'category',
	data: ['2019', '2020', '2021'],
}
```
#### 自动播放 autoPlay

- 默认为true
- 关闭自动播放
```
autoPlay: false,
```
-  播放间隔
```
playInterval: 2000
```
#### 宽度 width

```
width: '80%',  //'180'
```
#### 位置

```
left: '10%',
right: '10%',
//bottom: '2%',
```
#### 标签 label

- 文本格式化
```
label: {
	formatter: function (s) {
		return new Date(s).getFullYear();
	}
},
```
- 颜色
```
label: {
	normal: {
		textStyle: {
			color: 'rgb(179, 239, 255)'
		}
	},
	emphasis: {
		textStyle: {
			color: '#fff'
		}
	}
},
```
#### 默认索引 currentIndex

```
currentIndex: 0,
```
#### 点 
##### 大小
symbolSize

```
symbolSize: 10,
```
```
symbol: 'diamond',
```
##### 选中点样式
```
checkpointStyle: {
  borderColor: '#8df4f4',
  color: '#53D9FF',
  borderWidth: 2,
},
```
#### 线颜色 lineStyle

```
lineStyle: {
	color: '#8df4f4'
},
```
#### Demo

```
option = {
    baseOption: {
        timeline: {
            axisType: 'category',
            data: ['2019', '2020', '2021'],
        },
        title: {
            text: '柱状图'
        },
        tooltip: {
            trigger: 'axis'
        },
        xAxis: {
            type: 'category',
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'bar'
        }]
    },
    options: [
        {
            title: {text: '2019柱状图'},
            series: [{
                data: [120, 200, 150, 80, 70, 110, 130],
                type: 'bar'
            }]
        },
        {
            title: {text: '2020柱状图'},
            series: [{
                data: [58, 160, 150, 80, 70, 110, 50],
                type: 'bar'
            }]
        },
    ]
};
```

```typescript
timeline: {
        axisType: 'category',
        // realtime: false,
        //   loop: false,
        autoPlay: false,
        currentIndex: 7,
        playInterval: 1000,
        // controlStyle: {
        //     position: 'left'
        // },
        data: [
            '2002-01-01',
            '2003-01-01',
            '2004-01-01',
            {
                value: '2005-01-01',
                tooltip: {
                    formatter: '{b} GDP达到一个高度'
                },
                symbol: 'diamond',
                symbolSize: 16
            },
            '2006-01-01',
            '2007-01-01',
            '2008-01-01',
            '2009-01-01',
            '2010-01-01',
            {
                value: '2011-01-01',
                tooltip: {
                    formatter: function(params) {
                        return params.name + 'GDP达到又一个高度';
                    }
                },
                symbol: 'diamond',
                symbolSize: 18
            }
        ],
```


------
## For Example

### 条形图demo

```typescript
import * as echarts from 'echarts';

type EChartsOption = echarts.EChartsOption;

var chartDom = document.getElementById('main')!;
var myChart = echarts.init(chartDom);
var option: EChartsOption;

option = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      crossStyle: {
        color: '#999'
      }
    }
  },
  toolbox: {
    feature: {
      dataView: { show: true, readOnly: false },
      magicType: { show: true, type: ['line', 'bar'] },
      restore: { show: true },
      saveAsImage: { show: true }
    }
  },
  legend: {
    data: ['Evaporation', 'Precipitation', 'Temperature']
  },
  xAxis: [
    {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      axisPointer: {
        type: 'shadow'
      }
    }
  ],
  yAxis: [
    {
      type: 'value',
      name: 'Precipitation',
      min: 0,
      max: 250,
      interval: 50,
      axisLabel: {
        formatter: '{value} ml'
      }
    },
    {
      type: 'value',
      name: 'Temperature',
      min: 0,
      max: 25,
      interval: 5,
      axisLabel: {
        formatter: '{value} °C'
      }
    }
  ],
  series: [
    {
      name: 'Evaporation',
      type: 'bar',
      data: [
        2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3
      ]
    },
    {
      name: 'Precipitation',
      type: 'bar',
      data: [
        2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3
      ]
    },
    {
      name: 'Temperature',
      type: 'line',
      yAxisIndex: 1,
      data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
    }
  ]
};

option && myChart.setOption(option);

```

### 条形图加强版
```typescript
option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#999'
            }
        }
    },
    toolbox: {
        feature: {
            dataView: {
                show: true,
                readOnly: false
            },
            magicType: {
                show: true,
                type: ['line', 'bar']
            },
            restore: {
                show: true
            },
            saveAsImage: {
                show: true
            }
        }
    },
    legend: {
        data: ['Evaporation', 'Precipitation', 'Temperature'],
        top: 10, //间距
        itemGap: 20, //子项间距
        // icon: "circle", 	//圆形单选框
        textStyle: {
            fontSize: 12,
            color: "#000000"
        }, //字体样式设置
    },
    xAxis: [{
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisPointer: {
            type: 'shadow'
        }
    }],
    yAxis: [{
            type: 'value',
            name: 'Precipitation',
            min: 0,
            max: 200,
            interval: 50,
            axisLabel: {
                formatter: '{value} ml'
            }
        },
        {
            type: 'value',
            name: 'Temperature',
            min: 0,
            max: 25,
            interval: 5,
            axisLabel: {
                formatter: '{value} °C'
            }
        }
    ],
    series: [{
            name: 'Evaporation',
            type: 'bar',
            data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
            barWidth: 16,
            itemStyle: {
                normal: {
                    barBorderRadius: [8, 8, 0, 0],
                    color: 'skyblue'
                },
                emphasis: {
                    color: 'orange'
                }
            }
        },
        {
            name: 'Precipitation',
            type: 'bar',
            data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
            barWidth: 16,
            itemStyle: {
                normal: {
                    barBorderRadius: [8, 8, 0, 0],
                    color: '#353535'
                },
                emphasis: {
                    color: '#d54ff2'
                }
            }
        },
        {
            name: 'Temperature',
            type: 'line',
            // type: 'bar',
            yAxisIndex: 1,
            data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2],
            barWidth: 16,
            itemStyle: {
                normal: {
                    barBorderRadius: [8, 8, 0, 0],
                    color: '#f234e2'
                },
            }
        },

    ]
};
```

```
['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
```