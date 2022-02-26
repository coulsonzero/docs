# Lines







## Overview

```
{
	name: '航线',
	type: 'lines',
	data: lineData,
	zlevel: 2,
	effect: {
        show: true,
        period: 5, 			// 值越小 速度越快
        trailLength: 0, 	// 0-1  值越大，越拖
        symbol: 'arrow', 	// 箭头图标
        symbolSize: 6, 		// 图标大小
	},
    lineStyle: {
        normal: {
            color: '#f4e925',
            width: 1,
            opacity: 1,
            curveness: 0.3, //线的倾斜程度  0为直线
        },
    },
},
```



<!-- ![](imgs/lines1.png) -->



