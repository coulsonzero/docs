# Echarts



## Legend

```
legend: {},
```

```typescript
data
//图标
icon: 'circle',   //'roundRect'
itemStyle: {}

//文本
formatter
textStyle: {}

//整体
show
selected: {}
orient: 'vertical',  //'horizontal'

//其它
itemGap
backgroundColor
top
left
bottom
right
```
For Example

```typescript
legend: {
  // data: ['A','B'],
  icon: "circle",
  textStyle: {color: "red"},
  orient: 'vertical',
  top: 'center',
  right: 20,
  itemGap: 16,
  formatter: '{name} 组',
},
grid: {
  left: '5%',
  right: '14%',
  bottom: '13%',
  containLabel: true
},
```

### 显示子项 （series中添加name即可）

- 不显示
```typescript
show: false,
```

-  显示(加了legend)
```typescript
legend: {//show: true,  //可缺省}
series: [{name: 'A'}],
```

- 特定显示
```typescript
selected: {'A': false},
//selected: {'A': false, 'B': true},   //默认为true
```

**For Example**

```typescript
legend: {
    //data: ['A', 'B'],  //可缺省
},
series: [
  {
  	name: 'A',
    data: [120, 200, 150, 80, 70, 110, 130],
    type: 'bar'
	},
  {
  	name: 'B',
    data: [120, 200, 150, 80, 70, 110, 130],
    type: 'bar'
	},
]
```

### icon

#### a. 图标形状
-   默认(圆角矩形)
```typescript
icon: 'roundRect',
```
-   圆形
```typescript
icon: 'circle', 
```

#### b. 图标放在文字右边
- 图标居右
```typescript
align: 'right',
```
- 默认(居左)

### text

#### a. 颜色

>   （默认：黑色）

```typescript
textStyle: {color: "#fff"},
```

### 整体布局

#### a. 垂直排列

```typescript
orient: 'vertical',
```
- 默认(水平排列)
```
orient: 'horizontal',
```

#### b. 位置 (同时需要调整图标位置)

>    (默认：上)

```typescript
top: 'center',
right: 80,
```

```typescript
left: '60%',right: 80,
```
- 调整图表位置
```typescript
grid: {
  left: '5%',
  right: '14%',
  bottom: '13%',
  containLabel: true
},
```
### c. 间距

- 柱子间距
```
barGap:'0%',
```
```
barCategoryGap:'0%'
```

>   （默认：10）

- 子项间距

```
itemGap: 16
```

- 图标与标签间距

```
formatter: '   {name}',
```

- 子选项格式化

```typescript
// 使用字符串模板，模板变量为图例名称 {name}
formatter: 'Legend {name}'// 使用回调函数
formatter: function (name) {    return 'Legend ' + name;}
```

#### c. 排列（4 x 2）

```
data:nameArray.slice(0,4),
data:nameArray.slice(4,8),
```

------

## Title

```typescript
// 主标题
text
link: 'https://echarts.apache.org/zh/option.html#title.link',
traget: 'blank',  //'self'
textStyle: {color, fontSize},

// 副标题
subtext
sublink: 'https://www.aidustry.com/cpp/homePage',
subtarget: 'self',
subtextStyle: {color, fontSize},

// 布局
textAlign
top
left: 'center',
bottom
right
itemGap
backgroundColor
```

### 1. 主标题

#### a. 文本

```typescript
text: 'Main Text',
```

#### b. 文本样式

```typescript
textStyle: {color: 'red', fontSize: 16},
```

#### c. 链接

```typescript
link: 'https://echarts.apache.org/zh/option.html#title.link',
```

#### d. 窗口打开方式

- 此窗口

```typescript
target: 'self',
```

- 新窗口 (default)

```typescript
target: 'blank',
```

### 2. 副标题

#### a. 文本

```typescript
subtext: 'Sub Text',
```

#### b. 文本样式

```typescript
subtextStyle: {color: 'red', fontSize: 16},
```

#### c. 文本链接

```typescript
sublink: 'https://www.aidustry.com/cpp/homePage',
```

#### d. 窗口打开方式

- 此窗口

```typescript
subtarget: 'self',
```

- 新窗口

```typescript
subtraget: 'blank',
```

### 3. 整体布局

```
show: false,
top
left: 'center',
bottom
right
itemGap: '20'
backgroundColor
```
#### a. 不显示标题

```
show: false,
```
#### b. 位置

-   top

-   left

    ```
    left: 'center',
    ```

-   bottom

-   right



#### c. 主副标题间距

```
itemGap: 10,
```
#### d. 背景色

```
backgroundColor: '#23252A',
```

## XAxis
```typescript
xAxis: {
        type: 'category',
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
        // show: false,
        // "boundaryGap": true,
        //坐标轴线
        "axisLine": {
            "lineStyle": {
                "type": "solid",
                "color": "blue"
            }
        },
        //坐标轴标签
        "axisLabel": {
            "textStyle": {
                "color": "red"
            },
            // 	inside: true
        },
        //坐标轴刻度线
        axisTick: {
            show: false
        },
        //网格线
        "splitLine": {
            "show": true,
            "lineStyle": {
                "type": "solid",
                "color": "red"
            }
        },
        //聚焦柱体线
        "axisPointer": {
            show: true,
            "lineStyle": {
                "color": "green"
            }
        },
        
        

    },
yAxis: {
	// show: false,
	type: 'value',
	min: 0,
	max: 350,
	interval: 50,	//值间距
	axisLabel: {formatter: '{value} ml'},  //单位
},
```
### 线
#### 1. axisLine

>  坐标轴线
>
>  默认显示
##### show

```javascript
axisLine: {show: false},
```
##### lineStyle

```
axisLine: {
	lineStyle: {type: "solid", color: "blue"}
},
```

#### 2. axisTick

>   刻度线

##### show

```
axisTick: {show: false},
```
##### alignWithLabel

>   刻度线与标签对齐

```
axisTick: {alignWithLabel: true},
```

#### 3. splitLine

>   网格线

##### show

```
splitLine: {"show": false},
```
##### lineStyle

>   样式(颜色、虚线)

```typescript
splitLine: {
	"show": true,
	"lineStyle": {"type": "solid","color": "red"}
},
```

#### 4. axisPointer

>    <聚焦柱体线>

```typescript
axisPointer: {
	show: true,
	lineStyle: {color: "green"}
},
```

### axisLabel

>   刻度标签

#### show

```typescript
"axisLabel": {show: false},
```

#### textStyle

```javascript
//坐标轴标签
axisLabel: {
	textStyle: {
		color: "#fff"
	},
},
```

### 布局

#### boundaryGap

>   坐标轴两边不留白

```typescript
"boundaryGap": true,
```

#### min & max

>   坐标轴取值范围

```
min: 
max: 
```

#### scale

>   数值波动

```
scale: true,
```

