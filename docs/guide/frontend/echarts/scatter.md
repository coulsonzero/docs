# 散点地图



## series
### @初始化
- 设置shadow后会漏光
```
series: [{
	"type": "scatter",
	"coordinateSystem": "geo",
}],
```
- 不漏光
```
series: [{
	type: 'map',
    map: 'china',
    "coordinateSystem": "geo",
}],
```
### 散点颜色
```
color: ['#1CB4FF'],
```
### 散点大小 symbolSize

```
"symbolSize": 6,
```
### 散点数据 data

```
"data": [{
    "name": "海门",
    "value": [121.15, 31.89, 90]
}, {
    "name": "鄂尔多斯",
    "value": [109.781327, 39.608266, 120]
}, {
    "name": "招远",
    "value": [120.38, 37.35, 142]
}]
```
### 缩放, 移动 roam

- 缩放
```
roam: 'scale',
```
- 移动
```
roam: 'move',
```
- 可缩放可移动
```
roam: true,
```




## geo

### @初始化
```
"geo": {
	"map": "china",
	"itemStyle": {
		"normal": {
			"areaColor": "#EDEDED",
			"borderColor": "#D1D1D1",
		},
	},
},
```
### 指定地图 map

- 中国地图
```
"map": "china",
```
- 世界地图
```
"map": "world",
```
### 地图样式 itemStyle

#### 地图颜色

```
"areaColor": "#EDEDED",
```
#### 区域边界颜色 

```
"borderColor": "#D1D1D1",
```
#### 阴影
```
shadowColor: 'skyblue',
shadowBlur: 10,
shadowOffsetY: 20,
```

