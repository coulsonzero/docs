# 饼状图



## Overview

### 基础饼图

```ts
option = {
  series: [{
      type: 'pie',
      radius: '50%',
      data: [
        { value: 1048, name: 'Search Engine' },
        { value: 735, name: 'Direct' },
        { value: 580, name: 'Email' },
        { value: 484, name: 'Union Ads' },
        { value: 300, name: 'Video Ads' }
    ],
  }],
  tooltip: {
    trigger: 'item'
  },
  legend: {
    orient: 'vertical'
  }
};
```

## Series

### 1. radius [圆环]

#### 单个为缩放比例

```js
series: [{
    type: 'pie',
    radius: '50%',
}]
```

#### 多个为圆环 (中心为空)

```js
radius: ['64%', '70%'],
```
### 圆环间隔 itemStyle
```ts
itemStyle: {
    borderRadius: 10,
    borderColor: '#fff',
    borderWidth: 2
},
```




```ts
itemStyle: {
    color: '#c23531',
    shadowBlur: 200,
    shadowColor: 'rgba(0, 0, 0, 0.5)'
},
```
### 玫瑰图 roseType
```
roseType: 'area',
```




```shell
roseType: 'radius',
```
### 位置布局(居中显示) center

```
center: ['50%', '50%'],
```
### 选中效果 selectedMode

```
selectedMode: 'single',
```

### 标签 label

**默认显示一个，切换显示不重叠**
写法一
```ts
label: {
    normal: {
        show: true,
        position: 'center',		//'inner'
        formatter: '{b}\n\n{c}%',
    },
    emphasis: {
        show: true,
        // 使标签不重叠
        focus: 'self',
    }
},
```
写法二
```ts
label: {
    show: true,
    position: 'center'
},
emphasis: {
    focus: 'self',
    label: {
        show: true
    }
},
```

#### 标签颜色

```ts
label: {
	color: 'rgba(255, 255, 255, 0.3)'
},
```
#### 标签线 labelLine
```ts
labelLine: {
    lineStyle: {
    	color: 'rgba(255, 255, 255, 0.3)'
	},
    smooth: 0.2,
    length: 10,
    length2: 20
},
```
### 悬浮 emphasis
```ts
emphasis: {
    label: {
        show: true,
        fontSize: '40',
        fontWeight: 'bold'
    }
},
```
#### 内标签悬浮（默认隐藏）
```ts
label: {
    show: false,
    position: 'center'
},
labelLine: {
	show: true
},
emphasis: {
    label: {
        show: true,
    }
},
```
#### 外标签悬浮

- `label:{show: false}`改为`true`
- 注释掉`// position: 'center'`
```ts
label: {
    show: true,
    // position: 'center'
},
labelLine: {
	show: true
},
emphasis: {
    label: {
        show: true,
    }
},
```

### 加载动画
```ts
animationType: 'scale',
animationEasing: 'elasticOut',
animationDelay: function (idx) {
    return Math.random() * 200;
}
```
### 多层饼图嵌套 radius

```ts
radius: [0, '30%'],
radius: ['60%', '70%'],
```

```ts
series: [
    {
        name: '访问来源',
        type: 'pie',
        radius: ['60%', '70%'],
        center: ['50%', '50%'],
        data: [{
            value: 335,
            name: '直接访问'
        }, {
            value: 310,
            name: '邮件营销'
        }, {
            value: 234,
            name: '联盟广告'
        }, {
            value: 135,
            name: '视频广告'
        }, {
            value: 1548,
            name: '搜索引擎'
        }],
        itemStyle: {
            emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        }
    },
    {
    	name: 'Access From',
        type: 'pie',
        radius: [0, '30%'],
        center: ['50%', '50%'],
        label: {
        position: 'inner',
           fontSize: 14
        },
        data: [
            { value: 1548, name: 'Search Engine' },
            { value: 775, name: 'Direct' },
            { value: 679, name: 'Marketing', selected: true }
        ]
    }]
```

------

## VisualMap(对比色图)
```ts
visualMap: {
    show: true,
    min: 80,
    max: 500,
    inRange: {
    	colorLightness: [0, 1]
    }
},
```

## Legend子项

### 子项排列（4 x 2）
```
data:nameArray.slice(0,4),
data:nameArray.slice(4,8),
```

### 水平/垂直排列 (默认：水平)

```
orient: 'horizontal',
```
```
orient: 'vertical',
```
### 垂直对齐方式

```
top: 'center',
```
```
bottom: 150,
```
### 水平对齐方式

```
left: '60%',
```
```
right: 80,
```
### 间距 （默认：10）
```
itemGap: 10,
```
```
formatter: '  {name}',
```



### 图标 （默认：长方体）

`icon`: 图标样式(圆形)

### 图标对齐方式（默认：left）
```
align: 'left',
```
### 文本颜色 （默认：黑色）
```
textStyle: {
	color: "#fff"
},
```


```ts
var trafficWay = [{
    name: '病假',
    value: 20
},{
    name: '事假',
    value: 10
},{
    name: '婚假',
    value: 30
},{
    name: '丧假',
    value: 40
},{
    name: '年休假',
    value: 40
},{
    name: '产假',
    value: 40
},{
    name: '调休',
    value: 40
},{
    name: '陪产假',
    value: 40
}];
var nameArray = trafficWay.map(item=>{
    return item.name
})
legend: [{
        icon: `path://M881.387 297.813c38.08 65.387 57.28 136.747 57.28 214.187s-19.094 148.8-57.28 214.187c-38.187 65.28-89.92 117.12-155.2 155.2S589.44 938.667 512 938.667s-148.8-19.094-214.187-57.28c-65.28-38.08-117.013-89.814-155.306-155.307C104.427 660.8 85.333 589.44 85.333 512c0-77.333 19.094-148.693 57.28-214.187 38.08-65.28 89.814-117.013 155.307-155.306C363.2 104.533 434.56 85.333 512 85.333c77.333 0 148.693 19.094 214.187 57.28 65.28 38.187 117.013 89.92 155.2 155.2z m-217.707-47.36C617.387 223.467 566.827 209.92 512 209.92s-105.387 13.547-151.68 40.533-82.987 63.68-109.973 109.974c-26.987 46.293-40.534 96.853-40.534 151.68s13.547 105.386 40.534 151.68c26.986 46.293 63.68 82.986 109.973 109.973 46.293 26.987 96.853 40.533 151.68 40.533s105.387-13.546 151.68-40.533c46.293-26.987 82.987-63.68 109.973-109.973 26.987-46.294 40.534-96.854 40.534-151.68s-13.547-105.387-40.534-151.68c-27.093-46.294-63.786-82.987-109.973-109.974z`,
        orient: 'vertical',
        // x: 'left',
        data:nameArray.slice(4,8),
        left: '80%',
        top: 'center',
        align: 'left',
        textStyle: {
          color: "#fff"
        },
        itemGap: 20
    },
    {
        icon: `path://M881.387 297.813c38.08 65.387 57.28 136.747 57.28 214.187s-19.094 148.8-57.28 214.187c-38.187 65.28-89.92 117.12-155.2 155.2S589.44 938.667 512 938.667s-148.8-19.094-214.187-57.28c-65.28-38.08-117.013-89.814-155.306-155.307C104.427 660.8 85.333 589.44 85.333 512c0-77.333 19.094-148.693 57.28-214.187 38.08-65.28 89.814-117.013 155.307-155.306C363.2 104.533 434.56 85.333 512 85.333c77.333 0 148.693 19.094 214.187 57.28 65.28 38.187 117.013 89.92 155.2 155.2z m-217.707-47.36C617.387 223.467 566.827 209.92 512 209.92s-105.387 13.547-151.68 40.533-82.987 63.68-109.973 109.974c-26.987 46.293-40.534 96.853-40.534 151.68s13.547 105.386 40.534 151.68c26.986 46.293 63.68 82.986 109.973 109.973 46.293 26.987 96.853 40.533 151.68 40.533s105.387-13.546 151.68-40.533c46.293-26.987 82.987-63.68 109.973-109.973 26.987-46.294 40.534-96.854 40.534-151.68s-13.547-105.387-40.534-151.68c-27.093-46.294-63.786-82.987-109.973-109.974z`,
        orient: 'vertical',
        // x: 'left',
        data:nameArray.slice(0,4),
        left: '70%',
        top: 'center',
        align: 'left',
        textStyle: {
          color: "#fff"
        },
        itemGap: 20
    },
    ],
```
### 文本格式化
```
/*
formatter: function(name) {
	if (chartdata.length) {
		const item = chartdata.filter((item) => item.name === name)[0];
		const percentage = item.value/sum*100;
		return `${name}:    ${percentage.toFixed(2)}% `;
	}
}
 */
 
formatter: function(name) {
	if (chartdata.length) {
		const item = chartdata.filter((item) => item.name === name)[0];
		const percentage = item.value / sum * 100;
		name = (item.name.length === 2) ? `  ${name}` : name;
		const DecimalPoint = 2;
		var per = percentage.toFixed(DecimalPoint);
		return (per.length > DecimalPoint + 2) ? `${name}:  ${per}%` : `${name}:    ${per}%`;
	}
}
```
## Color

```
"color": ["#41DEBB", "#41DDFF", "#1CB4FF", "#787FF6", "#4E6BFF", "#102088", "#4ADEDE", "#0036FF", "#3A0CA3", "#7209B7", "#F72585"]
```

## 默认标签显示切换
### 标签显示切换1

```javascript
var seriesData = [{
    "name": "计划",
    "value": 0.175,
    "yy": "计划"
}, {
    "name": "未计划",
    "value": 0.825,
    "yy": "未计划"
}];

var defaultValue = seriesData[0].value * 100 + '%';


option = {
    "color": [{
        "x": 0,
        "y": 0,
        "x2": 0,
        "y2": 1,
        "type": "linear",
        "global": false,
        "colorStops": [{
            "offset": 0,
            "color": "#0776FF"
        }, {
            "offset": 1,
            "color": "#0776FF"
        }]
    }, "#cccccc"],
    "title": {
        show: true,
        text: defaultValue,
        left: 'center',
        top: 'center',
        textStyle: {
            textAlign: 'center',
            fontSize: 12,
            fontWeight: 400
        },
    },
    "series": [{
        "type": "pie",
        "radius": ["45%", "60%"],
        // "center": ["50%", "35%"],
        "avoidLabelOverlap": false,
        // "hoverAnimation": false,
        "selectedOffset": 0,
        "label": {
            "normal": {
                "show": false,
                "position": "center",
                "formatter": "{d}%",
                "textStyle": {
                    "fontSize": 12,
                    "color": "#575760"
                }
            },
            emphasis: {
                show: true,
            }
        },
        "labelLine": {
            "show": true
        },
        "data": seriesData
    }]
}



// 默认值显示切换
myChart.on('mouseover', (params) => {
    myChart.setOption({
        title: {
            show: false,
        },
    })
})
myChart.on('mouseout', (params) => {
    myChart.setOption({
        title: {
            show: true,
        },
    })
})
```

### 标签显示切换2

```ts
option = {
    color: ['#ffd200', '#1affff', '#92ff0a', '#129bfb', '#ffd'],
    backgroundColor: '#1fb0aa',
    tooltip: {
        trigger: 'item'
    },
    legend: {
        orient: 'vertical',
        top: '30%',
        left: '70%',
        icon: 'circle',
        formatter: function(name) {
            switch (name) {
                case '云服务':
                    return name + '：    30%';
                case '解决方法':
                    return name + '： 40%';
                case '微服务':
                    return name + '：    10%';
                case '应用商店':
                    return name + '： 20%';
            }
        }
    },
    series: [{
        type: 'pie',
        radius: ['45%', '50%'],
        right: '200',
        avoidLabelOverlap: false,
        itemStyle: {
            borderColor: '#fff',
            borderWidth: 1
        },
        label: {
            show: true,
            position: 'center',
            color: '#fff',
            formatter: '{b}\n{d}%',
            fontSize: '30',
            fontWeight: 'bold',
        },

        emphasis: {
            focus: 'self',
            label: {
                show: true,
                fontSize: '30',
                fontWeight: 'bold',
            }
        },
        blur: {
            label: {
                color: '#1fb0aa'
            }
        },
        labelLine: {
            show: false,
            color: '#fff'
        },
        tooltip: {
            position: [400, 400]
        },

        data: [{
                value: 30,
                name: '云服务'
            },
            {
                value: 40,
                name: '解决方法'
            },
            {
                value: 10,
                name: '微服务'
            },
            {
                value: 20,
                name: '应用商店'
            }
        ]
    }]
};
```

