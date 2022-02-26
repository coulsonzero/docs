<div align='center' >
	<font size='70'>折线图</font><br/>
</div>




## 基础折线图
```javascript
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
      data: [150, 230, 224, 218, 135, 147, 260],
      type: 'line'
    }
  ]
};
```
## Ⅰ Series
### A. 线
#### 平滑曲线
```
smooth: true
```
#### 阶级线
```
step: 'start',  //'middle', 'end'
```
#### 堆叠(多条线)
```
stack: 'Total',  
```
#### 折线样式
```
lineStyle: {
    width: 0,
    color: 'red'
},
```
### B. 点 symbol
#### 去掉圆点 (默认：有)
- method 1
```
"symbol": "none",
```
- method 2
```
showSymbol: false,
```
#### 更改圆点大小

```
"symbolSize": 5,
```
### C. 面 areaStyle
#### 面积图
```
areaStyle: {},
```
#### 面积渐变色
```javascript
"itemStyle": {
	"normal": {
		areaStyle: {
        	opacity: 0.8,
        	color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          		{offset: 0,color: 'rgba(128, 255, 165)'},
          		{offset: 1,color: 'rgba(1, 191, 236)'}
        	])
      	}
    }
},
```

### D. 聚焦 (鼠标放置效果) emphasis
```
emphasis: {
    focus: 'series'
},
```


-------
## Ⅱ xAxis/yAxis
### A. 坐标轴两端留白 boundaryGap (默认: true)
#### **1. default**

```
"boundaryGap": true,
```
#### **2. 自定义**

```
 boundaryGap: ['20%', '20%'],
```
#### **3. 不留空白**

```
"boundaryGap": false,
```
### B. 轴线颜色 axisLine

```
"axisLine": {
	"lineStyle": {
		"type": "solid",
		"color": "#E1E1E1"
	}
},
```
### C. 轴字体颜色 axisLabel
```
"axisLabel": {
	"textStyle": {"color": "#868C97"}
},
```
### D. 网格线 splitLine

```
splitLine: {
     show: false
	"lineStyle": {
		"type": "solid",
		"color": "#868C97"
	}
},
```
### E. 聚焦轴线 axisPointer
```
"axisPointer": {
	show: false,
	"lineStyle": {"color": "#4E6BFF"}
},
```
## Demo

```javascript
option = {
    // 1.背景色
    "backgroundColor": "#1A253A",
    // 2.折线颜色
    "color": ["#00FFD2", "#00E4FF", "#0084FF", "#7916FF", "#00AEFF", "#0042FF", "#0034C9", "#1FE5C2", "#0AE192", "#5200C1", "#A132E8"],
    "title": {
        "text": "折线图"
    },
    "tooltip": {
        "trigger": "axis"
    },
    "xAxis": {
        "type": "category",
        "data": ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
        // 左对齐，间距为0
        "boundaryGap": false,  //true
        // 3.轴线颜色
        "axisLine": {
            "lineStyle": {
                "type": "solid",
                "color": "#E1E1E1"
            }
        },
        // 4.轴字体颜色
        "axisLabel": {
            "textStyle": {
                "color": "#868C97"
            }
        },
        // 5.网格线(dashed)
        "splitLine": {
            "show": false,
            "lineStyle": {
                "type": "solid",
                "color": "#868C97"
            }
        },
        // 6.悬浮指针轴线
        "axisPointer": {
            "lineStyle": {
                "color": "#4E6BFF"
            }
        }
    },
    "yAxis": {
        "type": "value",
        // 左对齐，间距为0
        "boundaryGap": false,
        // 轴线颜色
        "axisLine": {
            "lineStyle": {
                "type": "solid",
                "color": "#E1E1E1"
            }
        },
        // 轴字体颜色
        "axisLabel": {
            "textStyle": {
                "color": "#868C97"
            }
        },
        // 网格线
        "splitLine": {
            "show": false,
            "lineStyle": {
                "type": "solid",
                "color": "#868C97"
            }
        },
        // 悬浮指针轴线
        "axisPointer": {
            "lineStyle": {
                // "color": "#4E6BFF"
            }
        },
    },
    "series": [{
        "data": [8.1, 8.5, 9.5, 8.3, 8.3, 8.5, 8.5],
        "type": "line",
        // 去掉数值圆点
        "symbol": "none",
        // 圆点大小
        // "symbolSize": 5,
        // 平滑曲线
        "smooth": true,
        // 渐变面积图
        "itemStyle": {
            "normal": {
                "areaStyle": {
                    "type": "default",
                    "color": {
                        "colorStops": [{
                            "offset": 0,
                            "color": "#FF7B33"
                            // color: 'yellow'
                        }, {
                            "offset": 0.5,
                            "color": "#553B38"
                            // color: 'green'
                        }, {
                            "offset": 1,
                            "color": "#1A253A"
                            // color: 'red'

                        }],
                        // 渐变色方向
                        "x": 0,
                        "y": 0,
                        "x2": 0,
                        "y2": 1,
                        "type": "linear",
                        "global": false
                    }
                }
            }
        }
    }]
}
```



## 多个图表

```
xAxis: [
    { type: 'category', gridIndex: 0 },
    { type: 'category', gridIndex: 1 }
],
yAxis: [{ gridIndex: 0 }, { gridIndex: 1 }],
```



```typescript
option = {
    legend: {},
    grid: [{
            x: 80,
            y: 80,
            width: 200,
            height: 200,
            show: true,
        },
        {
            x: 350,
            y: 80,
            width: 200,
            height: 200,
            show: true,
        },
        {
            x: 600,
            y: 80,
            width: 200,
            height: 200,
            show: true,
        },
    ],
    xAxis: [{
            type: 'category',
            boundaryGap: false,
            gridIndex: 0, // 这个值很重要，用于指定图表组件属于哪个画布
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        },
        {
            type: 'category',
            gridIndex: 1,
            boundaryGap: false,
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        },
        {
            type: 'category',
            boundaryGap: false,
            gridIndex: 2, // 这个值很重要，用于指定图表组件属于哪个画布
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        }
    ],
    yAxis: [{
            gridIndex: 0
        },
        {
            gridIndex: 1
        },
        {
            gridIndex: 2
        },
    ],
    series: [{
            name: 'SO2',
            xAxisIndex: 0,
            yAxisIndex: 0,
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'line',
        },
        {
            name: 'CO',
            xAxisIndex: 0,
            yAxisIndex: 0,
            data: [220, 300, 250, 180, 170, 210, 230],
            type: 'line',
        },
        {
            name: 'SO2',
            xAxisIndex: 1,
            yAxisIndex: 1,
            data: [120, 200, 150, 80, 70],
            type: 'line',
        },
        {
            name: 'CO',
            xAxisIndex: 1,
            yAxisIndex: 1,
            data: [220, 300, 50, 180, 70],
            type: 'line',
        },
        {
            name: 'SO2',
            xAxisIndex: 2,
            yAxisIndex: 2,
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'line',
        },
        {
            name: 'CO',
            xAxisIndex: 2,
            yAxisIndex: 2,
            data: [220, 300, 50, 180, 70],
            type: 'line',
        },
        {
            name: 'CSO2',
            xAxisIndex: 0,
            yAxisIndex: 0,
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'line',
        },
        {
            name: 'QCO',
            xAxisIndex: 1,
            yAxisIndex: 1,
            data: [220, 300, 50, 180, 70],
            type: 'line',
        },
        {
            name: 'TSO2',
            xAxisIndex: 2,
            yAxisIndex: 2,
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'line',
        },
        {
            name: 'DCO',
            xAxisIndex: 0,
            yAxisIndex: 0,
            data: [220, 300, 50, 180, 70],
            type: 'line',
        },
    ],
}
```

