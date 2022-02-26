[bar1]: ../../../.vuepress/public/assets/echarts/bar/bar1.png
[bar2]: ../../../.vuepress/public/assets/echarts/bar/bar2.png
[bar3]: ../../../.vuepress/public/assets/echarts/bar/bar3.png
[bar4]: ../../../.vuepress/public/assets/echarts/bar/bar4.png
[bar5]: ../../../.vuepress/public/assets/echarts/bar/bar5.png
[bar6]: ../../../.vuepress/public/assets/echarts/bar/bar6.png
[bar7]: ../../../.vuepress/public/assets/echarts/bar/bar7.png



[line1]: ../../../.vuepress/public/assets/echarts/line/line1.png
[line2]: ../../../.vuepress/public/assets/echarts/line/line2.png
[line3]: ../../../.vuepress/public/assets/echarts/line/line3.png
[line4]: ../../../.vuepress/public/assets/echarts/line/line4.png


[pie1]: ../../../.vuepress/public/assets/echarts/pie/pie1.png
[pie2]: ../../../.vuepress/public/assets/echarts/pie/pie2.png
[pie3]: ../../../.vuepress/public/assets/echarts/pie/pie3.png
[pie4]: ../../../.vuepress/public/assets/echarts/pie/pie4.png
[pie5]: ../../../.vuepress/public/assets/echarts/pie/pie5.png
[pie6]: ../../../.vuepress/public/assets/echarts/pie/pie6.png


[radar1]: ../../../.vuepress/public/assets/echarts/radar/radar1.png
[radar2]: ../../../.vuepress/public/assets/echarts/radar/radar2.png

[gauge1]: ../../../.vuepress/public/assets/echarts/gauge/gauge1.png
[gauge2]: ../../../.vuepress/public/assets/echarts/gauge/gauge2.png
[gauge3]: ../../../.vuepress/public/assets/echarts/gauge/gauge3.png



[map1]: ../../../.vuepress/public/assets/echarts/map/map1.png
[map2]: ../../../.vuepress/public/assets/echarts/map/map2.png

[scatter1]: ../../../.vuepress/public/assets/echarts/scatter/scatter1.png

[lines1]: ../../../.vuepress/public/assets/echarts/lines/lines1.png

# EchartsExample



## Bar

### bar1

![bar1]

::: details 点击查看代码
```typescript
option = {
    tooltip: {
        trigger: 'axis'
    },
    // 图表位置
    grid: {
        top: '20%',
        left: '18%',

    },
    xAxis: {
        show: false,
        type: 'value',
    },
    yAxis: {
        type: 'category',
        data: yData,
        // 隐藏y轴线
        axisLine: {
            show: false
        },
        // 隐藏刻度线
        axisTick: {
            show: false
        },
        // 坐标轴标签样式
        axisLabel: {
            textStyle: {
                color: "#fff"
            },
        },

    },
    series: [{
        data: seriesData,
        type: 'bar',
        // 柱体宽度
        barWidth: 8,
        // 柱体圆角
        itemStyle: {
            normal: {
                barBorderRadius: [4, 8, 8, 4]
            }
        }
    }]
};






// y轴数据
var yData = ['云服务', '解决方案', '微服务', '应用商店'];

// series数据
var seriesData = [{
    value: 1105,
    itemStyle: {
        color: new echarts.graphic.LinearGradient(1, 1, 0, 0, [{
                offset: 0,
                color: '#99FF1A'
            },
            {
                offset: 1,
                color: '#699800'
            }
        ])
    },
}, {
    value: 2335,
    itemStyle: {
        color: new echarts.graphic.LinearGradient(1, 1, 0, 0, [{
                offset: 0,
                color: '#E5FF1A'
            },
            {
                offset: 1,
                color: '#999200'
            }
        ])
    }
}, {
    value: 3335,
    itemStyle: {
        color: new echarts.graphic.LinearGradient(1, 1, 0, 0, [{
                offset: 0,
                color: '#1AC7FF'
            },
            {
                offset: 1,
                color: '#008998'
            }
        ]),
    }
}, {
    value: 1935,
    itemStyle: {
        color: new echarts.graphic.LinearGradient(1, 1, 0, 0, [{
                offset: 0,
                color: '#4490FC'
            },
            {
                offset: 1,
                color: '#1672ED'
            }
        ]),
    }
}]
```
:::

### bar2

![bar2]

::: details 点击查看代码
```typescript
var data1 = [709, 1999, 709, 2299, 3299, 2299, 1999, 2999, 1999, 709, 1999, 709];
var xData = function() {
    var data = [];
    for (var i = 1; i < 13; i++) {
        data.push(i + "月");
    }
    return data;
}();
option = {
    // backgroundColor: '#020D20',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow',
            textStyle: {
                color: '#05294D',
            },
        },
        backgroundColor: '#05294D',
        borderColor: '#135469',
        borderWidth: 2,
        padding: [20, 20, 20, 20],
    },
    grid: {
        borderWidth: 0,
        top: '15%',
        left: '15%',
        bottom: '10%',
        textStyle: {
            color: '#fff',
        },
    },
    legend: {
        top: '0%',
        right: '10%',
        textStyle: {
            fontSize: '20px',
            fontFamily: 'MicrosoftYaHeiUI',
            color: '#FFFFFF',
        },
        itemWidth: 28,
        itemHeight: 28,
        data: [{
                // name: '周转量',
                icon: 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAA1ElEQVR4Xu2WsQ2AMBADP4ghYBtGZxsYAhHEAMQ19tF+g+/PSVqFfy08fwEAA8IJUIFwATgEqQAVCCdABcIF4BagAlQgnAAVCBeAW4AKUIFwAlQgXABuASpABcIJjCtw9O3vfOaquta2f+UYApjO3v8O4P3/e2mfOQEw2jAGpFeg0g9BhwNQZeAlqAi5zzHAfcMqHwYoQu5zDHDfsMqHAYqQ+xwD3Des8mGAIuQ+xwD3Dat8GKAIuc8xwH3DKh8GKELucwxw37DKhwGKkPscA9w3rPI9drIYQbytq9EAAAAASUVORK5CYII=',
            },
            {
                name: '趋势',
                icon: 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAA1UlEQVRYR+2UMQ7CMAxFvxdyFtqVhREpZ+AEnIyRM1RiY2NsOQgTXYzSUlVNm9ZWhwrJnvPjpxfHhI2LNu4PAzADZsAM/I+BT5FnAF8JqBl0cb6sNFu0z/N751+nLisy0ISJb2DkTZBQgukshYjyT+ergxhgEA6NQwUQIcQoH4HPGpgKtwZ+NhYglpq3MhM1F5ZcLDmTBJCE1wImZ0DSvAuvfaKRAU3zJIRySAczUBfZg4GjdMInIZTfNALY3wFy6xaNblGJFpFm42nPGoAZMANmwAx8ASjjyiGj/fCxAAAAAElFTkSuQmCC',
            },
        ],
    },
    xAxis: [{
        type: 'category',
        axisLine: {
            lineStyle: {
                color: 'rgba(255,255,255,.5)',
            },
        },
        splitLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
        splitArea: {
            show: false,
        },
        axisLabel: {
            interval: 0,
            color: 'rgba(255,255,255,0.7)',
            fontSize: 18,
        },
        data: xData,
    }, ],
    yAxis: [{
        type: 'value',
        splitLine: {
            show: true,
            "lineStyle": {
                "type": "dotted", //"solid"实线,"dotted"虚线
                "color": "#868C97"
            }
        },
        axisLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
        axisLabel: {
            interval: 0,
            color: 'rgba(255,255,255,0.5)',
            fontSize: 20,
        },
        splitArea: {
            show: false,
        },
    }],
    series: [{
        name: '访问量',
        type: 'bar',
        // "stack": "总量",
        barMaxWidth: 35,
        barGap: '10%',
        itemStyle: {
            normal: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                            offset: 0,
                            color: '#43c6f2', // 0% 处的颜色
                        },
                        {
                            offset: 1,
                            color: '#162c45', // 100% 处的颜色
                        },
                    ],
                    global: false, // 缺省为 false
                },
            },
        },
        data: data1,
    }],
};
```
:::


### bar3

![bar3]

::: details 点击查看代码
```typescript
var ydata = [{
    value: 1105,
    itemStyle: {
        color: '#47D2FF'
    }
}, {
    value: 2335,
    itemStyle: {
        color: '#0078FF'
    }
}, {
    value: 3335,
    itemStyle: {
        color: '#004EFF'
    }
}, {
    value: 1935,
    itemStyle: {
        color: '#8C25FF'
    }
}]

var yAxis = ["应用商店", "微服务", "解决方案", "云服务"]
let bgData = []
for (let i in ydata) {
    bgData.push(6000)
}
option = {

    tooltip: {
        textStyle: {
            fontSize: 16
        },
        // formatter: function (res) {
        //   return `${res.name} : ${res.data}单位`;
        // }
    },
    legend: {
        selectedMode: false,
        show: false
    },
    grid: {
        left: '2%',
        right: '5%',
        bottom: '5%',
        top: 5,
        containLabel: true
    },
    xAxis: [{
        type: 'value',
        show: false
    }],
    yAxis: [{
        splitLine: {
            show: false
        },
        axisLine: { // y轴
            show: false
        },
        type: 'category',
        inverse: true, /// 柱状图顺序
        axisTick: {
            show: false
        },
        data: yAxis,
        axisLabel: {
            show: true,
            textStyle: {
                color: '#EFF4FF',
                fontSize: '16px'
            },

        }
    }, {
        type: 'category',
        inverse: true,
        axisTick: 'none',
        axisLine: 'none',
        show: true,
        axisLabel: {
            textStyle: {
                color: '#EFF4FF',
                fontSize: '18px'
            },
        },
        data: ydata
    }],
    series: [{
            name: '背景',
            type: 'bar',
            barWidth: 10,
            barGap: '-100%',
            data: bgData,

            itemStyle: {
                normal: {
                    color: '#889AB8',
                    barBorderRadius: [2, 2, 2, 2],
                }
            },
        },
        {
            // name: '本年累计',
            type: 'bar',
            barWidth: 10, // 柱子宽度
            label: {
                show: false,
                position: 'right', // 位置
                color: '#fff',
                fontSize: 14,
                distance: 300 // 距离
            }, // 柱子上方的数值
            itemStyle: {
                barBorderRadius: [2, 2, 2, 2],
                color: '#47D2FF'
            },
            data: ydata
        },
    ]
}
```
:::

### bar4

![bar4]

::: details 点击查看代码
```typescript
option = {
    baseOption: {
        timeline: {
            axisType: 'category',
            currentIndex: 11,
            playInterval: 5000,
            controlStyle: {
                position: 'left'
            },
            data: [
                '1月',
                '2月',
                '3月',
                '4月',
                '5月',
                '6月',
                '7月',
                '8月',
                '9月',
                '10月',
                '11月',
                '12月'
            ],
            width: '80%',
            left: '10%'
        },
        // backgroundColor: '#00265f',
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {
            data: ['数据名称', '数据名称1'],
            align: 'right',
            right: 10,
            textStyle: {
                color: "#fff"
            },
            itemWidth: 10,
            itemHeight: 10,
            itemGap: 35
        },
        grid: {
            left: '3%',
            right: '2%',
            bottom: '20%',
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            data: ['1', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
            axisLine: {
                show: true,
                lineStyle: {
                    color: "#063374",
                    width: 1,
                    type: "solid"
                }
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: "#EFF4FF",
                }
            },
        }],
        yAxis: [{
            type: 'value',
            axisTick: {
                show: false,
            },
            axisLabel: {
                margin: 14,
                color: '#EFF4FF',
            },
            axisLine: {
                show: false,
                lineStyle: {
                    color: "#00c7ff",
                    width: 1,
                    type: "solid"
                },
            },
            splitLine: {
                lineStyle: {
                    type: 'dashed',
                    color: "#1A466B",
                }
            }
        }],
        series: [{
                name: '数据名称',
                type: 'bar',
                barWidth: 10, //柱子宽度
                barGap: 1, //柱子之间间距
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#0078FF'
                        }, {
                            offset: 1,
                            color: 'rgba(0, 120, 255, 0)'
                        }]),
                        opacity: 1,
                    }
                }
            },
            {
                name: '数据名称1',
                type: 'bar',
                barWidth: 10,
                barGap: 1,
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#00FFE4'
                        }, {
                            offset: 1,
                            color: 'rgba(1, 241, 218, 0)'
                        }]),
                        opacity: 1,
                    }
                }
            }
        ]
    },
    options: [{
            xAxis: [{
                'type': 'category',
                'axisLabel': {
                    'interval': 0
                },
                data: ["1月"],
                splitLine: {
                    show: false
                }
            }],
            title: {
                text: ''
            },
            series: [{
                    data: [120]
                },
                {
                    data: [100]
                },
            ],
            type: 'bar'
        },
        {
            xAxis: [{
                'type': 'category',
                'axisLabel': {
                    'interval': 0
                },
                data: ["1月", "2月"],
                splitLine: {
                    show: false
                }
            }],
            title: {
                text: ''
            },
            series: [{
                    data: [120, 80]
                },
                {
                    data: [100, 60]
                },
            ],
            type: 'bar'

        },
        {
            xAxis: [{
                'type': 'category',
                'axisLabel': {
                    'interval': 0
                },
                data: ["1月", "2月", "3月"],
                splitLine: {
                    show: false
                }
            }],
            title: {
                text: ''
            },
            series: [{
                    data: [120, 80, 200]
                },
                {
                    data: [100, 60, 150]
                },
            ],
            type: 'bar'

        },
        {
            xAxis: [{
                'type': 'category',
                'axisLabel': {
                    'interval': 0
                },
                data: ["1月", "2月", "3月", "4月"],
                splitLine: {
                    show: false
                }
            }],
            title: {
                text: ''
            },
            series: [{
                    data: [120, 80, 200, 150]
                },
                {
                    data: [100, 60, 150, 60]
                },
            ],
            type: 'bar'

        },
        {
            xAxis: [{
                'type': 'category',
                'axisLabel': {
                    'interval': 0
                },
                data: ["1月", "2月", "3月", "4月", "5月"],
                splitLine: {
                    show: false
                }
            }],
            title: {
                text: ''
            },
            series: [{
                    data: [120, 80, 200, 150, 60]
                },
                {
                    data: [100, 60, 150, 60, 100]
                },
            ],
            type: 'bar'

        },
        {
            xAxis: [{
                'type': 'category',
                'axisLabel': {
                    'interval': 0
                },
                data: ["1月", "2月", "3月", "4月", "5月", "6月"],
                splitLine: {
                    show: false
                }
            }],
            title: {
                text: ''
            },
            series: [{
                    data: [120, 80, 200, 150, 60, 90]
                },
                {
                    data: [100, 60, 150, 60, 100, 80]
                },
            ],
            type: 'bar'

        },
        {
            xAxis: [{
                'type': 'category',
                'axisLabel': {
                    'interval': 0
                },
                data: ["1月", "2月", "3月", "4月", "5月", "6月", "7月"],
                splitLine: {
                    show: false
                }
            }],
            title: {
                text: ''
            },
            series: [{
                    data: [120, 80, 200, 150, 60, 90, 120]
                },
                {
                    data: [100, 60, 150, 60, 100, 80, 120]
                },
            ],
            type: 'bar'

        },
        {
            xAxis: [{
                'type': 'category',
                'axisLabel': {
                    'interval': 0
                },
                data: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月"],
                splitLine: {
                    show: false
                }
            }],
            title: {
                text: ''
            },
            series: [{
                    data: [120, 80, 200, 150, 60, 90, 120, 140]
                },
                {
                    data: [100, 60, 150, 60, 100, 80, 120, 150]
                },
            ],
            type: 'bar'

        },
        {
            xAxis: [{
                'type': 'category',
                'axisLabel': {
                    'interval': 0
                },
                data: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月"],
                splitLine: {
                    show: false
                }
            }],
            title: {
                text: ''
            },
            series: [{
                    data: [120, 80, 200, 150, 60, 90, 120, 140, 110]
                },
                {
                    data: [100, 60, 150, 60, 100, 80, 120, 150, 130]
                },
            ],
            type: 'bar'

        },
        {
            xAxis: [{
                'type': 'category',
                'axisLabel': {
                    'interval': 0
                },
                data: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月"],
                splitLine: {
                    show: false
                }
            }],
            title: {
                text: ''
            },
            series: [{
                    data: [120, 80, 200, 150, 60, 90, 120, 140, 110, 130]
                },
                {
                    data: [100, 60, 150, 60, 100, 80, 120, 150, 130, 80]
                },
            ],
            type: 'bar'

        },
        {
            xAxis: [{
                'type': 'category',
                'axisLabel': {
                    'interval': 0
                },
                data: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月"],
                splitLine: {
                    show: false
                }
            }],
            title: {
                text: ''
            },
            series: [{
                    data: [120, 80, 200, 150, 60, 90, 120, 140, 110, 130, 80]
                },
                {
                    data: [100, 60, 150, 60, 100, 80, 120, 150, 130, 80, 110]
                },
            ],
            type: 'bar'

        },
        {
            xAxis: [{
                'type': 'category',
                'axisLabel': {
                    'interval': 0
                },
                data: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
                splitLine: {
                    show: false
                }
            }],
            title: {
                text: ''
            },
            series: [{
                    data: [120, 80, 200, 150, 60, 90, 120, 140, 110, 130, 80, 120]
                },
                {
                    data: [100, 60, 150, 60, 100, 80, 120, 150, 130, 80, 110, 130]
                },
            ],
            type: 'bar'

        },

    ]

};
```
:::


### bar5

![bar5]

::: details 点击查看代码
```typescript
option = {
    // backgroundColor: '#323232',
    grid: {
        left: '8%',
        right: '8%',
        top: '1%',
        bottom: '1%',
        containLabel: true
    },
    tooltip: {
        trigger: 'axis',
        show: false
    },
    xAxis: {
        type: 'value',
        splitLine: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            show: false
        },
        axisTick: {
            show: false
        },
        data: ['A']
    },
    yAxis: {
        type: 'category',
        axisLine: {
            show: false
        },
        data: ['B']
    },
    series: [{
            // name: 'A',
            type: 'bar',
            stack: 'total',
            barWidth: 150,
            label: {
                show: true,
                formatter: function(params, index) {
                    return ((params.value)) + '%';
                },
                fontSize: 30,
                fontFamily: "digital",
                color: 'rgba(0, 0, 0, 0.5)',
            },
            itemStyle: {
                normal: {
                    // barBorderRadius: [20, 0, 0, 20],
                    // color: 'lightgreen'
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 1, [{
                            offset: 0,
                            color: '#041431'
                        },
                        {
                            offset: 0.5,
                            color: '#05727a'
                        },
                        {
                            offset: 1,
                            color: '#00FFE4'
                        }
                    ])
                },
                emphasis: {
                    focus: 'series'
                },
            },
            data: [62]
        },
        {
            // name: 'B',
            type: 'bar',
            stack: 'total',
            barWidth: 60,
            label: {
                show: true,
                formatter: function(params, index) {
                    return ((params.value)) + '%';
                },
                fontSize: 30,
                color: 'rgba(0, 0, 0, 0.5)',
            },
            itemStyle: {
                normal: {
                    // barBorderRadius: [0, 20, 20, 0],
                    // color: '#0078FF'
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 1, [{
                            offset: 0,
                            color: '#0078FF'
                        },
                        {
                            offset: 0.5,
                            color: '#053573'
                        },
                        {
                            offset: 1,
                            color: '#071835'
                        }
                    ])
                },
                emphasis: {
                    focus: 'series'
                },
            },
            data: [48]
        },
    ]
};
```
:::

### bar6

![bar6]

::: details 点击查看代码
```typescript
option = {
    legend: {
        icon: "circle",
        textStyle: {
            color: "#fff"
        },
        right: '2%',
        top: 'center',
        orient: 'vertical',
    },
    "tooltip": {
        "trigger": "axis",
        // "formatter": "{c}%"

    },
    grid: {
        borderWidth: 0,
        top: '10%',
        left: '10%',
        right: '27%',
        bottom: '15%',
        textStyle: {
            color: '#fff',
        },
    },
    "xAxis": {
        type: "value",
        axisLabel: {
            show: false,
            color: '#ffffff'
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false,
            "lineStyle": {
                "type": "solid",
                "color": "rgba(255,255,255,0.4)"
            }
        },

    },
    "yAxis": {
        "type": "category",
        "data": yAxisData,
        axisLabel: {
            color: '#ffffff'
        },
        axisTick: {
            show: false
        },
        "axisLine": {
            show: false
        },

    },
    "series": [{
            name: '石油',
            "type": "bar",
            "data": oilData,
            stack: 'total',
            barWidth: 10,
            itemStyle: {
                barBorderRadius: [8, 0, 0, 8]
            },
            color: '#47D2FF',
        },
        {
            name: '天然气',
            "data": nature_gasData,
            stack: 'total',
            "type": "bar",
            color: '#0078FF',
        },
        {
            name: '煤矿',
            "data": coalData,
            stack: 'total',
            "type": "bar",
            color: '#004EFF'
        },
        {
            name: '发电量',
            "data": powerData,
            stack: 'total',
            "type": "bar",
            itemStyle: {
                barBorderRadius: [0, 8, 8, 0]
            },
            color: '#8C25FF'
        },
    ]
}





var yAxisData = ["中国", "美国", "印度", "日本", "俄罗斯"];
var oilData = [30, 20, 20, 30, 20];
var nature_gasData = [20, 30, 30, 20, 20];
var coalData = [30, 20, 30, 20, 20];
var powerData = [20, 30, 20, 30, 40];
```
:::


## Line

### line1

![line1]

::: details 点击查看代码
```typescript
var seriesData = [
    [60, 280, 50, 193, 390, 330, 220],
    [120, 232, 101, 334, 290, 330, 320]
];
option = {
    color: ['#18FFFC', '#129BFB'],
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        // 两端不留白
        boundaryGap: false,
        // 隐藏刻度线
        axisTick: {
            show: false
        },
        // 轴线
        axisLine: {
            show: false,
        },
        axisLabel: {
            textStyle: {
                color: "rgba(255,255,255,0.3)"
            },
        },
    },
    yAxis: {
        type: 'value',
        max: 500,
        splitLine: {
            // show: false
            lineStyle: {
                type: "solid",
                color: 'rgba(255, 255, 255, 0.1)',
            }
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: "#fff"
            }
        },
        axisTick: {
            show: false,
        },
        axisLabel: {
            textStyle: {
                color: "rgba(255,255,255,0.3)"
            },
        },
    },
    legend: {
        icon: 'circle',
        itemWidth: 8,
        textStyle: {
            color: "#fff",
        },
        left: 'right',
    },
    grid: {
        left: '5%',
        right: '3%',
    },
    series: [{
            name: '累计访问',
            data: seriesData[0],
            type: 'line',
            // 平滑曲线
            smooth: true,
            // 面积渐变
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(109, 252, 255, 1)'
                        },
                        {
                            offset: 1,
                            color: 'rgba(109, 252, 255, 0)'
                        }
                    ], false),
                    shadowColor: 'rgba(109, 252, 255, 0.5)',
                    shadowBlur: 20
                }
            },
            // 去掉圆点
            showSymbol: false,
            // 线条样式
            lineStyle: {
                normal: {
                    width: 3,
                    color: "rgba(24, 255, 252, 0.8)",
                },
            },
        },
        {
            name: '每日访问',
            data: seriesData[1],
            type: 'line',
            smooth: true,
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(18, 155, 251, 1)'
                        },
                        {
                            offset: 1,
                            color: 'rgba(18, 155, 251, 0)',
                        }
                    ], false),
                    shadowColor: 'rgba(18, 155, 251, 0.5)',
                    shadowBlur: 20
                }
            },
            showSymbol: false,
            lineStyle: {
                normal: {
                    width: 3,
                    color: 'rgba(18, 155, 251, 0.8)',
                },
            },
        }
    ]
};
```
:::


### line2

![line2]

::: details 点击查看代码
```typescript
option = {
    "backgroundColor": "#1A253A",
    "tooltip": {
        "trigger": "axis"
    },
    "legend": {
        "orient": "horizontal",
        // "icon": "circle",
        "left": "70%",
        itemStyle: {
            borderWidth: 2
        },
        "data": ["每日访问", "累计访问"],
        "textStyle": {
            "fontSize": 12,
            "color": "#fff"
        },
        "align": "left"
    },
    "xAxis": {

        "type": "category",
        "boundaryGap": false,
        "axisLine": {
            "lineStyle": {
                "type": "solid",
                "color": "#E1E1E1"
            }
        },
        "axisLabel": {
            "textStyle": {
                "color": "#868C97"
            }
        },
        "splitLine": {
            "show": false,
            "lineStyle": {
                "type": "solid",
                "color": "#868C97"
            }
        },
        "axisPointer": {
            "lineStyle": {
                "color": "#4E6BFF"
            }
        },
        "data": ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月"]
    },
    "yAxis": {
        "type": "value",

        //"name": "信息量",
        "axisLine": {
            show: false,
            "lineStyle": {
                "type": "solid",
                "color": "#E1E1E1"
            }
        },
        "axisLabel": {
            "textStyle": {
                "color": "#868C97"
            }
        },
        "splitLine": {
            "show": true,
            "lineStyle": {
                "type": "dotted", //"solid"实线,"dotted"虚线
                "color": "#868C97"
            }
        }
    },
    "series": [{
        "name": "每日访问",
        "symbol": "circle",
        "symbolSize": 5,
        "data": [600, 800, 595, 640, 610, 900, 795, 610, 800, 760],
        "type": "line",
        "smooth": true,
        "areaStyle": {
            // "type": "default",
            "color": {
                "colorStops": [{
                    "offset": 0,
                    "color": "#8C25FF", //"#FF7B33"
                }, {
                    "offset": 0.1,
                    "color": "#8C25FF"
                }, {
                    "offset": 0.5,
                    "color": "#1A253A" //"#1A253A"
                }],
                "x": 0,
                "y": 0,
                "x2": 0,
                "y2": 1,
                "type": "linear",
                "global": false
            }
        },
        "itemStyle": {
            "normal": {
                color: '#FFFFFF',
                borderColor: '#8C25FF',
                lineStyle: {
                    color: '#8C25FF'
                }
            }
        }
    }, {
        "name": "累计访问",
        "symbol": "circle",
        "symbolSize": 5,
        "data": [430, 430, 395, 450, 380, 510, 420, 490, 610, 580],
        "type": "line",
        "smooth": true,
        "areaStyle": {
            "type": "default",
            "color": {
                "colorStops": [{
                    "offset": 0,
                    "color": "#0078FF"
                }, {
                    "offset": 0.1,
                    "color": "#0078FF"
                }, {
                    "offset": 0.5,
                    "color": "#1A253A" //"#0078FF"
                }],
                "x": 0,
                "y": 0,
                "x2": 0,
                "y2": 1,
                "type": "linear",
                "global": false
            }
        },
        "itemStyle": {
            "normal": {
                color: '#FFFFFF',
                borderColor: '#0078FF',
                lineStyle: {
                    color: '#0078FF'
                }
            }
        }
    }],
    "color": ["#8C25FF", "#0078FF", "#FF4040", "#E60636", "#F65A70", "#EA5A94", "#FF5BE2", "#F56134", "#FF9D4D", "#F1F406", "#BBF25B"]
}
```
:::


### line3

![line3]

::: details 点击查看代码
```typescript
var nameArr = ['一生产线', '二生产线', '三生产线', '四生产线', '五生产线', '六生产线', '七生产线', '八生产线', '九生产线', '十生产线', '十一生产线']

option = {
    color: ['#FFC20A', '#E3196A', '#5157C7', '#0E9CFF', '#00FF42', '#A2FF00', '#E60012', '#22AC38', '#5F52A0', '#FF8A00', '#F600FF'],
    // backgroundColor: '#1b1d3d',
    legend: {
        icon: "roundRect",
        // symbol: '', //实心圆
        // itemStyle:{
        //     borderColor:['#FFC20A','green'],
        //     borderWidth:3,
        // },
        // borderColor:'red',
        // borderWidth:5,
        textStyle: {
            color: "#fff"

        },
        selected: {
            '五生产线': false,
            '六生产线': false,
            '七生产线': false,
            '八生产线': false,
            '九生产线': false,
            '十生产线': false,
            '十一生产线': false
        },
        itemWidth: 16,
        itemHeight: 16,
        // orient: 'vertical',
        top: 'bottom',
        right: 20,
        itemGap: 16,
    },
    grid: {
        left: '3%',
        containLabel: true
    },
    tooltip: {
        trigger: 'axis'
    },
    xAxis: {
        type: 'category',
        data: ['10/09', '10/10', '10/11', '10/12', '10/13', '10/14', '10/15'],
        "splitLine": {
            show: false,
        },
        axisLabel: {
            formatter: '{value}', //格式化
            fontSize: 14,
            margin: 20,
            textStyle: {
                color: '#FFFFFF',
            },
        },
    },
    yAxis: {
        type: 'value',
        "splitLine": {
            "lineStyle": {
                "type": "dotted",
                "color": "#163150"
            }
        },
        axisLabel: {
            fontSize: 14,
            textStyle: {
                color: '#FFFFFF',
            },
        },
    },
    series: [{
        name: '一生产线',
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        smooth: true, //平滑曲线
        showSymbol: true, //数值折点的展现
        // symbol: 'circle', //实心圆
        "symbolSize": 8,
        // zlevel: 3, //层级
        itemStyle: {
            normal: {
                // color: '#FFFFFF',
                borderColor: '#FFC20A',

            },
            // emphasis: { //选中的聚焦效果
            //     color: 'red',
            //     borderWidth: 10,
            //     borderColor: 'red',
            //     // symbolSize:20,
            // }

        },
        lineStyle: {
            normal: {
                width: 2,
                color: '#FFC20A',
            },
        },
    }, {
        name: '二生产线',
        data: [412, 302, 201, 253, 270, 530, 320],
        type: 'line',
        smooth: true, //平滑曲线
        showSymbol: true, //数值折点的展现
        // symbol: 'circle', //实心圆
        "symbolSize": 8,
        zlevel: 3,
        itemStyle: {
            normal: {
                // color: '#FFFFFF',
                borderColor: '#FFC20A',
            },
        },
        lineStyle: {
            normal: {
                width: 2,
                color: '#E3196A',
            }
        },

    }, {
        name: '三生产线',
        data: [912, 902, 901, 873, 880, 910, 900],
        type: 'line',
        smooth: true, //平滑曲线
        showSymbol: true, //数值折点的展现
        // symbol: 'circle', //实心圆
        "symbolSize": 8,
        zlevel: 3,
        itemStyle: {
            normal: {
                // color: '#FFFFFF',
                borderColor: '#FFC20A',

            },
        },
        lineStyle: {
            normal: {
                width: 2,
                color: '#5157C7',
            },

        },

    }, {
        name: '四生产线',
        data: [812, 802, 801, 803, 800, 850, 860],
        type: 'line',
        smooth: true, //平滑曲线
        showSymbol: true, //数值折点的展现
        // symbol: 'circle', //实心圆
        "symbolSize": 8,
        zlevel: 3,
        itemStyle: {
            normal: {
                // color: '#FFFFFF',
                borderColor: '#FFC20A',

            },
        },
        lineStyle: {
            normal: {
                width: 2,
                color: '#18FFFC',
            },

        },

    }, {
        name: '五生产线',
        data: [712, 702, 701, 703, 700, 750, 760],
        type: 'line',
        smooth: true, //平滑曲线
        showSymbol: true, //数值折点的展现
        // symbol: 'circle', //实心圆
        "symbolSize": 8,
        zlevel: 3,
        itemStyle: {
            normal: {
                // color: '#FFFFFF',
                borderColor: '#FFC20A',

            },
        },
        lineStyle: {
            normal: {
                width: 2,
                color: '#00FF42',
            },

        },

    }, {
        name: '六生产线',
        data: [612, 602, 601, 603, 600, 650, 660],
        type: 'line',
        smooth: true, //平滑曲线
        showSymbol: true, //数值折点的展现
        // symbol: 'circle', //实心圆
        "symbolSize": 8,
        zlevel: 3,
        itemStyle: {
            normal: {
                // color: '#FFFFFF',
                borderColor: '#FFC20A',

            },
        },
        lineStyle: {
            normal: {
                width: 2,
                color: '#A2FF00',
            },

        },

    }, {
        name: '七生产线',
        data: [512, 502, 501, 503, 500, 550, 560],
        type: 'line',
        smooth: true, //平滑曲线
        showSymbol: true, //数值折点的展现
        // symbol: 'circle', //实心圆
        "symbolSize": 8,
        zlevel: 3,
        itemStyle: {
            normal: {
                // color: '#FFFFFF',
                borderColor: '#FFC20A',

            },
        },
        lineStyle: {
            normal: {
                width: 2,
                color: '#E60012',
            },

        },

    }, {
        name: '八生产线',
        data: [412, 402, 401, 403, 400, 450, 460],
        type: 'line',
        smooth: true, //平滑曲线
        showSymbol: true, //数值折点的展现
        // symbol: 'circle', //实心圆
        "symbolSize": 8,
        zlevel: 3,
        itemStyle: {
            normal: {
                // color: '#FFFFFF',
                borderColor: '#FFC20A',

            },
        },
        lineStyle: {
            normal: {
                width: 2,
                color: '#22AC38',
            },

        },

    }, {
        name: '九生产线',
        data: [312, 302, 301, 303, 300, 350, 360],
        type: 'line',
        smooth: true, //平滑曲线
        showSymbol: true, //数值折点的展现
        // symbol: 'circle', //实心圆
        "symbolSize": 8,
        zlevel: 3,
        itemStyle: {
            normal: {
                // color: '#FFFFFF',
                borderColor: '#FFC20A',

            },
        },
        lineStyle: {
            normal: {
                width: 2,
                color: '#5F52A0',
            },

        },

    }, {
        name: '十生产线',
        data: [112, 102, 101, 103, 100, 250, 160],
        type: 'line',
        smooth: true, //平滑曲线
        showSymbol: true, //数值折点的展现
        // symbol: 'circle', //实心圆
        "symbolSize": 8,
        zlevel: 3,
        itemStyle: {
            normal: {
                // color: '#FFFFFF',
                borderColor: '#FFC20A',

            },
        },
        lineStyle: {
            normal: {
                width: 2,
                color: '#FF8A00',
            },

        },

    }, {
        name: '十一生产线',
        data: [212, 202, 201, 203, 300, 250, 260],
        type: 'line',
        smooth: true, //平滑曲线
        showSymbol: true, //数值折点的展现
        // symbol: 'circle', //实心圆
        "symbolSize": 8,
        zlevel: 3,
        itemStyle: {
            normal: {
                // color: '#FFFFFF',
                borderColor: '#FFC20A',

            },
        },
        lineStyle: {
            normal: {
                width: 2,
                color: '#F600FF',
            },

        },

    }],

};
```
:::


### line4

![line4]

::: details 点击查看代码
```typescript
option = {
    legend: {
        orient: 'vertical',
        icon: 'roundRect',
        itemGap: 40,
        formatter: '   {name}',
        top: '0%',
        right: '9%',
        //itemWidth: 0,
        textStyle: {
            color: '#fff',
            fontSize: 17
        },
    },
    grid: [{
            x: 40,
            y: 70,
            width: 1320,
            height: 110,
            show: false,
        },
        {
            x: 40,
            y: 310,
            width: 1320,
            height: 110,
            show: false,
        },
        {
            x: 40,
            y: 550,
            width: 1320,
            height: 110,
            show: false,
        },
    ],

    xAxis: [{
            type: 'category',
            boundaryGap: false,
            gridIndex: 0, // 这个值很重要，用于指定图表组件属于哪个画布
            data: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
            axisLabel: {
                margin: 15,
                color: '#7892BC',
            },
        },

        {
            type: 'category',
            gridIndex: 1,
            boundaryGap: false,
            data: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],

            axisLabel: {
                margin: 15,
                color: '#7892BC',
            },
        },
        {
            type: 'category',
            boundaryGap: false,
            gridIndex: 2, // 这个值很重要，用于指定图表组件属于哪个画布
            data: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],

            axisLabel: {
                margin: 15,
                color: '#7892BC',
            },
        }
    ],
    yAxis: [{
            axisLabel: {
                interval: 0,
                color: '#7892BC',
                fontSize: 10
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: 'rgba(6, 31, 55, 1.00)',
                    width: 1,
                    type: 'dashed',
                    color: '#4D6386'
                }
            },
            gridIndex: 0
        },
        {
            axisLabel: {
                interval: 0,
                color: '#7892BC',
                fontSize: 10
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: 'rgba(6, 31, 55, 1.00)',
                    width: 1,
                    type: 'dashed',
                    color: '#4D6386'
                }
            },
            gridIndex: 1
        },
        {
            axisLabel: {
                interval: 0,
                color: '#7892BC',
                fontSize: 10
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: 'rgba(6, 31, 55, 1.00)',
                    width: 1,
                    type: 'dashed',
                    color: '#4D6386'
                }
            },
            gridIndex: 2
        },
    ],
    series: [{
            name: '   减压炉Ⅱ',
            xAxisIndex: 0,
            yAxisIndex: 0,
            type: 'line',
            smooth: true,
            data: [30, 35, 33, 42, 20, 10, 20, 30, 20, 22],
            symbol: 'circle',
            symbolSize: 0,
            itemStyle: {
                normal: {
                    color: '#A9F8FF',
                    //borderColor: 'rgba(0, 255, 222, 1)',
                    lineStyle: {
                        color: '#A9F8FF'
                    }
                }
            }
        }, {
            name: '   减压炉Ⅱ',
            xAxisIndex: 1,
            yAxisIndex: 1,
            type: 'line',
            smooth: true,
            data: [30, 35, 33, 42, 20, 10, 20, 30, 20, 22],
            symbol: 'circle',
            symbolSize: 0,
            itemStyle: {
                normal: {
                    color: '#A9F8FF',
                    //borderColor: 'rgba(0, 255, 222, 1)',
                    lineStyle: {
                        color: '#A9F8FF'
                    }
                }
            }
        }, {
            name: '   减压炉Ⅱ',
            xAxisIndex: 2,
            yAxisIndex: 2,
            type: 'line',
            smooth: true,
            data: [30, 35, 33, 42, 20, 10, 20, 30, 20, 22],
            symbol: 'circle',
            symbolSize: 0,
            itemStyle: {
                normal: {
                    color: '#A9F8FF',
                    //borderColor: 'rgba(0, 255, 222, 1)',
                    lineStyle: {
                        color: '#A9F8FF'
                    }
                }
            }
        }, {
            name: '   加氢反应炉',
            xAxisIndex: 0,
            yAxisIndex: 0,
            type: 'line',
            smooth: true,
            data: [20, 30, 43, 45, 25, 40, 25, 35, 25, 32],
            symbol: 'circle',
            symbolSize: 0,
            itemStyle: {
                normal: {
                    color: '#47D2FF',
                    lineStyle: {
                        color: '#47D2FF'
                    }
                }
            }
        }, {
            name: '   加氢反应炉',
            xAxisIndex: 1,
            yAxisIndex: 1,
            type: 'line',
            smooth: true,
            data: [20, 30, 43, 45, 25, 40, 25, 35, 25, 32],
            symbol: 'circle',
            symbolSize: 0,
            itemStyle: {
                normal: {
                    color: '#47D2FF',

                    lineStyle: {
                        color: '#47D2FF'
                    }
                }
            }
        }, {
            name: '   加氢反应炉',
            xAxisIndex: 2,
            yAxisIndex: 2,
            type: 'line',
            smooth: true,
            data: [20, 30, 43, 45, 25, 40, 25, 35, 25, 32],
            symbol: 'circle',
            symbolSize: 0,
            itemStyle: {
                normal: {
                    color: '#47D2FF',

                    lineStyle: {
                        color: '#47D2FF'
                    }
                }
            }
        }, {
            name: '   汽提塔重沸炉Ⅰ',
            xAxisIndex: 0,
            yAxisIndex: 0,
            type: 'line',
            smooth: true,
            data: [10, 20, 33, 44, 55, 44, 22, 33, 22, 33],
            symbol: 'circle',
            symbolSize: 0,
            itemStyle: {
                normal: {
                    color: '#0078FF',

                    lineStyle: {
                        color: '#0078FF'
                    }
                }
            }
        }, {
            name: '   汽提塔重沸炉Ⅰ',
            xAxisIndex: 1,
            yAxisIndex: 1,
            type: 'line',
            smooth: true,
            data: [10, 20, 33, 44, 55, 44, 22, 33, 22, 33],
            symbol: 'circle',
            symbolSize: 0,
            itemStyle: {
                normal: {
                    color: '#0078FF',

                    lineStyle: {
                        color: '#0078FF'
                    }
                }
            }
        }, {
            name: '   汽提塔重沸炉Ⅰ',
            xAxisIndex: 2,
            yAxisIndex: 2,
            type: 'line',
            smooth: true,
            data: [10, 20, 33, 44, 55, 44, 22, 33, 22, 33],
            symbol: 'circle',
            symbolSize: 0,
            itemStyle: {
                normal: {
                    color: '#0078FF',
                    lineStyle: {
                        color: '#0078FF'
                    }
                }
            }
        }, {
            name: '   1号中间加热炉Ⅰ',
            xAxisIndex: 0,
            yAxisIndex: 0,
            type: 'line',
            smooth: true,
            data: [5, 8, 20, 30, 21, 1, 10, 25, 15, 30],
            symbol: 'circle',
            symbolSize: 0,
            itemStyle: {
                normal: {
                    color: '#004EFF',
                    lineStyle: {
                        color: '#004EFF'
                    }
                }
            }
        }, {
            name: '   1号中间加热炉Ⅰ',
            xAxisIndex: 1,
            yAxisIndex: 1,
            type: 'line',
            smooth: true,
            data: [5, 8, 20, 30, 21, 1, 10, 25, 15, 30],
            symbol: 'circle',
            symbolSize: 0,
            itemStyle: {
                normal: {
                    color: '#004EFF',
                    lineStyle: {
                        color: '#004EFF'
                    }
                }
            }
        }, {
            name: '   1号中间加热炉Ⅰ',
            xAxisIndex: 2,
            yAxisIndex: 2,
            type: 'line',
            smooth: true,
            data: [5, 8, 20, 30, 21, 1, 10, 25, 15, 30],
            symbol: 'circle',
            symbolSize: 0,
            itemStyle: {
                normal: {
                    color: '#004EFF',
                    lineStyle: {
                        color: '#004EFF'
                    }
                }
            }
        },
        {
            name: '   进料加热炉',
            xAxisIndex: 0,
            yAxisIndex: 0,
            type: 'line',
            smooth: true,
            data: [34, 30, 23, 2, 16, 51, 40, 50, 40, 51],
            symbol: 'circle',
            symbolSize: 0,
            itemStyle: {
                normal: {
                    color: '#8C25FF',
                    lineStyle: {
                        color: '#8C25FF'
                    }
                }
            }
        }, {
            name: '   进料加热炉',
            xAxisIndex: 1,
            yAxisIndex: 1,
            type: 'line',
            smooth: true,
            data: [34, 30, 23, 2, 16, 51, 40, 50, 40, 51],
            symbol: 'circle',
            symbolSize: 0,
            itemStyle: {
                normal: {
                    color: '#8C25FF',
                    lineStyle: {
                        color: '#8C25FF'
                    }
                }
            }
        }, {
            name: '   进料加热炉',
            xAxisIndex: 2,
            yAxisIndex: 2,
            type: 'line',
            smooth: true,
            data: [34, 30, 23, 2, 16, 51, 40, 50, 40, 51],
            symbol: 'circle',
            symbolSize: 0,
            itemStyle: {
                normal: {
                    color: '#8C25FF',
                    lineStyle: {
                        color: '#8C25FF'
                    }
                }
            }
        },
        {
            name: '   减压炉Ⅰ',
            type: 'line',
            xAxisIndex: 0,
            yAxisIndex: 0,
            smooth: true,
            data: [3, 3, 30, 20, 11, 21, 20, 30, 10, 21],
            symbol: 'circle',
            symbolSize: 0,
            itemStyle: {
                normal: {
                    color: '#E27A41',
                    lineStyle: {
                        color: '#E27A41'
                    }
                }
            }
        }, {
            name: '   减压炉Ⅰ',
            type: 'line',
            xAxisIndex: 1,
            yAxisIndex: 1,
            smooth: true,
            data: [3, 3, 30, 20, 11, 21, 20, 30, 10, 21],
            symbol: 'circle',
            symbolSize: 0,
            itemStyle: {
                normal: {
                    color: '#E27A41',
                    lineStyle: {
                        color: '#E27A41'
                    }
                }
            }
        }, {
            name: '   减压炉Ⅰ',
            type: 'line',
            xAxisIndex: 2,
            yAxisIndex: 2,
            smooth: true,
            data: [3, 3, 30, 20, 11, 21, 20, 30, 10, 21],
            symbol: 'circle',
            symbolSize: 0,
            itemStyle: {
                normal: {
                    color: '#E27A41',
                    lineStyle: {
                        color: '#E27A41'
                    }
                }
            }
        },
        {
            name: '   加氢重沸炉',
            type: 'line',
            xAxisIndex: 0,
            yAxisIndex: 0,
            smooth: true,
            data: [10, 8, 20, 30, 21, 1, 10, 25, 15, 30],
            symbol: 'circle',
            symbolSize: 0,
            itemStyle: {
                normal: {
                    color: '#00A06D',
                    lineStyle: {
                        color: '#00A06D'
                    }
                }
            }
        }, {
            name: '   加氢重沸炉',
            type: 'line',
            xAxisIndex: 1,
            yAxisIndex: 1,
            smooth: true,
            data: [10, 8, 20, 30, 21, 1, 10, 25, 15, 30],
            symbol: 'circle',
            symbolSize: 0,
            itemStyle: {
                normal: {
                    color: '#00A06D',
                    lineStyle: {
                        color: '#00A06D'
                    }
                }
            }
        }, {
            name: '   加氢重沸炉',
            type: 'line',
            xAxisIndex: 2,
            yAxisIndex: 2,
            smooth: true,
            data: [10, 8, 20, 30, 21, 1, 10, 25, 15, 30],
            symbol: 'circle',
            symbolSize: 0,
            itemStyle: {
                normal: {
                    color: '#00A06D',
                    lineStyle: {
                        color: '#00A06D'
                    }
                }
            }
        }, {
            name: '   分馏加热炉',
            type: 'line',
            xAxisIndex: 0,
            yAxisIndex: 0,
            smooth: true,
            data: [15, 18, 25, 35, 51, 15, 15, 55, 25, 35],
            symbol: 'circle',
            symbolSize: 0,
            itemStyle: {
                normal: {
                    color: '#B1E96E',
                    lineStyle: {
                        color: '#B1E96E'
                    }
                }
            }
        }, {
            name: '   分馏加热炉',
            type: 'line',
            xAxisIndex: 1,
            yAxisIndex: 1,
            smooth: true,
            data: [15, 18, 25, 35, 51, 15, 15, 55, 25, 35],
            symbol: 'circle',
            symbolSize: 0,
            itemStyle: {
                normal: {
                    color: '#B1E96E',
                    lineStyle: {
                        color: '#B1E96E'
                    }
                }
            }
        }, {
            name: '   分馏加热炉',
            type: 'line',
            xAxisIndex: 2,
            yAxisIndex: 2,
            smooth: true,
            data: [15, 18, 25, 35, 51, 15, 15, 55, 25, 35],
            symbol: 'circle',
            symbolSize: 0,
            itemStyle: {
                normal: {
                    color: '#B1E96E',
                    lineStyle: {
                        color: '#B1E96E'
                    }
                }
            }
        }, {
            name: '   3号中间加热炉Ⅰ',
            type: 'line',
            xAxisIndex: 0,
            yAxisIndex: 0,
            smooth: true,
            data: [5, 8, 5, 3, 5, 1, 5, 5, 2, 3],
            symbol: 'circle',
            symbolSize: 0,
            itemStyle: {
                normal: {
                    color: '#F0BB1A',
                    lineStyle: {
                        color: '#F0BB1A'
                    }
                }
            }
        }, {
            name: '   3号中间加热炉Ⅰ',
            type: 'line',
            xAxisIndex: 1,
            yAxisIndex: 1,
            smooth: true,
            data: [5, 8, 5, 3, 5, 1, 5, 5, 2, 3],
            symbol: 'circle',
            symbolSize: 0,
            itemStyle: {
                normal: {
                    color: '#F0BB1A',
                    lineStyle: {
                        color: '#F0BB1A'
                    }
                }
            }
        }, {
            name: '   3号中间加热炉Ⅰ',
            type: 'line',
            xAxisIndex: 2,
            yAxisIndex: 2,
            smooth: true,
            data: [5, 8, 5, 3, 5, 1, 5, 5, 2, 3],
            symbol: 'circle',
            symbolSize: 0,
            itemStyle: {
                normal: {
                    color: '#F0BB1A',
                    lineStyle: {
                        color: '#F0BB1A'
                    }
                }
            }
        }, {
            name: '   分馏塔进料加热炉132-F-201',
            type: 'line',
            xAxisIndex: 0,
            yAxisIndex: 0,
            smooth: true,
            data: [25, 18, 25, 43, 15, 18, 35, 15, 28, 36],
            symbol: 'circle',
            symbolSize: 0,
            itemStyle: {
                normal: {
                    color: '#EE7C65',
                    lineStyle: {
                        color: '#EE7C65'
                    }
                }
            }
        }, {
            name: '   分馏塔进料加热炉132-F-201',
            type: 'line',
            xAxisIndex: 1,
            yAxisIndex: 1,
            smooth: true,
            data: [25, 18, 25, 43, 15, 18, 35, 15, 28, 36],
            symbol: 'circle',
            symbolSize: 0,
            itemStyle: {
                normal: {
                    color: '#EE7C65',
                    lineStyle: {
                        color: '#EE7C65'
                    }
                }
            }
        }, {
            name: '   分馏塔进料加热炉132-F-201',
            type: 'line',
            xAxisIndex: 2,
            yAxisIndex: 2,
            smooth: true,
            data: [25, 18, 25, 43, 15, 18, 35, 15, 28, 36],
            symbol: 'circle',
            symbolSize: 0,
            itemStyle: {
                normal: {
                    color: '#EE7C65',
                    lineStyle: {
                        color: '#EE7C65'
                    }
                }
            }
        }, {
            name: '   反应进料加热炉132',
            type: 'line',
            xAxisIndex: 0,
            yAxisIndex: 0,
            smooth: true,
            data: [11, 12, 33, 44, 55, 44, 33, 22, 11, 1],
            symbol: 'circle',
            symbolSize: 0,
            itemStyle: {
                normal: {
                    color: '#D086D1',
                    lineStyle: {
                        color: '#D086D1'
                    }
                }
            }
        }, {
            name: '   反应进料加热炉132',
            type: 'line',
            xAxisIndex: 1,
            yAxisIndex: 1,
            smooth: true,
            data: [11, 12, 33, 44, 55, 44, 33, 22, 11, 1],
            symbol: 'circle',
            symbolSize: 0,
            itemStyle: {
                normal: {
                    color: '#D086D1',
                    lineStyle: {
                        color: '#D086D1'
                    }
                }
            }
        }, {
            name: '   反应进料加热炉132',
            type: 'line',
            xAxisIndex: 2,
            yAxisIndex: 2,
            smooth: true,
            data: [11, 12, 33, 44, 55, 44, 33, 22, 11, 1],
            symbol: 'circle',
            symbolSize: 0,
            itemStyle: {
                normal: {
                    color: '#D086D1',
                    lineStyle: {
                        color: '#D086D1'
                    }
                }
            }
        }, {
            name: '   蒸汽锅炉101加热炉',
            type: 'line',
            xAxisIndex: 0,
            yAxisIndex: 0,
            smooth: true,
            data: [55, 44, 33, 22, 11, 22, 33, 44, 55, 60],
            symbol: 'circle',
            symbolSize: 0,
            itemStyle: {
                normal: {
                    color: '#8DABFF',
                    lineStyle: {
                        color: '#8DABFF'
                    }
                }
            }
        }, {
            name: '   蒸汽锅炉101加热炉',
            type: 'line',
            xAxisIndex: 1,
            yAxisIndex: 1,
            smooth: true,
            data: [55, 44, 33, 22, 11, 22, 33, 44, 55, 60],
            symbol: 'circle',
            symbolSize: 0,
            itemStyle: {
                normal: {
                    color: '#8DABFF',
                    lineStyle: {
                        color: '#8DABFF'
                    }
                }
            }
        }, {
            name: '   蒸汽锅炉101加热炉',
            type: 'line',
            xAxisIndex: 2,
            yAxisIndex: 2,
            smooth: true,
            data: [55, 44, 33, 22, 11, 22, 33, 44, 55, 60],
            symbol: 'circle',
            symbolSize: 0,
            itemStyle: {
                normal: {
                    color: '#8DABFF',
                    lineStyle: {
                        color: '#8DABFF'
                    }
                }
            }
        },
    ]
}
```
:::



### line5

::: details 点击查看代码
```typescript
let xData = ["03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00"];
let seriesData = [
    [118, 80, 95, 104, 110, 90, 95, 60, 80],
    [43, 30, 45, 50, 70, 51, 42, 49, 61]
];
let seriesNames = ["A", "B"];

option = {
    backgroundColor: "#1A253A",
    color: ['#18FFFC', '#129BFB'],
    xAxis: {
        type: 'category',
        data: xData,
        // 两端不留白
        boundaryGap: false,
        // 隐藏刻度线
        axisTick: {
            show: false
        },
        // 轴线
        axisLine: {
            show: false,
        },
        axisLabel: {
            textStyle: {
                color: "rgba(255,255,255,0.3)"
            },
        },
        axisPointer: {
            show: true,
            lineStyle: {
                color: "transparent"
            }
        },
    },
    yAxis: {
        type: 'value',
        min: 20,
        axisLabel: {
            formatter: '{value} kPa'
        },
        splitLine: {
            // show: false
            lineStyle: {
                type: "solid",
                color: 'rgba(255, 255, 255, 0.1)',
            }
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: "#fff"
            }
        },
        axisTick: {
            show: false,
        },
        axisLabel: {
            textStyle: {
                color: "rgba(255,255,255,0.3)"
            },
        },
    },
    legend: {
        icon: 'circle',
        itemWidth: 8,
        textStyle: {
            color: "rgba(255,255,255,0.8)",
        },
        left: 'center',
    },
    tooltip: {
        "trigger": "axis"
    },
    grid: {
        left: '10%',
        right: '10%',
    },
    series: [{
            name: seriesNames[0],
            data: seriesData[0],
            type: 'line',
            // 去掉圆点
            showSymbol: false,
        },
        {
            name: seriesNames[1],
            data: seriesData[1],
            type: 'line',
            showSymbol: false
        }
    ]
};
```
:::




## Pie

### 1.  进度条

![pie1]


::: details 点击查看代码

```typescript
var value = 96;

option = {
    title: {
        text: '{a|' + value + '}{c|%}',
        x: 'center',
        y: 'center',
        textStyle: {
            rich: {
                a: {
                    fontSize: 20,
                    color: '#fff'
                },

                c: {
                    fontSize: 14,
                    color: 'rgba(255,255,255,0.7)',
                    padding: [5, 2]
                }
            }
        }
    },
    series: [{
            type: 'pie',
            radius: ['80%', '60%'],
            silent: true,
            clockwise: true,
            startAngle: -72,
            "clockwise": false, //逆时针
            z: 0,
            zlevel: 0,
            label: {
                normal: {
                    position: "center",

                }
            },
            data: [{
                    value: value,
                    name: "",
                    itemStyle: {
                        normal: {
                            color: 'rgba(0,250,0,5)'
                        }
                    }
                },
                {
                    value: 100 - value,
                    name: "",
                    label: {
                        normal: {
                            show: false
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: "rgba(0,250,0,0.2)"
                        }
                    }
                }
            ]
        },

        {
            name: "",
            type: "gauge",
            radius: "72%",
            center: ['50%', '50%'],
            startAngle: 0,
            endAngle: 359.9,
            splitNumber: 10,
            hoverAnimation: true,
            axisTick: {
                show: false
            },
            splitLine: {
                length: 50,
                lineStyle: {
                    width: 4,
                    // color: "#1c2043"
                    color: 'rgba(28,32,67,0.7)'
                }
            },
            axisLabel: {
                show: false
            },
            pointer: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    opacity: 0
                }
            },
            detail: {
                show: false
            },
            data: [{
                value: 0,
                name: ""
            }]
        },
    ]
}
```
:::

### 2. pie2

![pie2]

::: details 点击查看代码
```typescript
var seriesData = [{
        value: 30,
        name: '云服务'
    },
    {
        value: 40,
        name: '解决方案'
    },
    {
        value: 10,
        name: '微服务'
    },
    {
        value: 20,
        name: '应用商店'
    },
];
//圆环和子项颜色
const color = [
    '#FFD200',
    '#18FFFC',
    '#92FF0A',
    '#129BFB',
];




option = {
    // backgroundColor: '#1b1d3d',
    // 更改圆环颜色
    color: color,
    tooltip: {
        trigger: 'item'
    },
    legend: {

        orient: 'vertical',
        right: '5%',
        top: 'center',
        //
        icon: 'circle',
        itemWidth: 10,
        textStyle: {
            color: "#fff",
            fontSize: 16,
        },
        // 百分比格式化
        formatter: function(name) {
            function sumArr(arr) {
                let sum = 0;
                for (var i = 0; i < arr.length; i++) {
                    sum += arr[i].value;
                }
                return sum;
            }
            sum = sumArr(seriesData);
            if (seriesData.length) {
                const item = seriesData.filter((item) => item.name === name)[0];
                const percentage = item.value / sum * 100;
                name = (item.name.length === 2) ? `  ${name}` : name;
                // 保留小数点后几位
                const DecimalPoint = 0;
                const per = percentage.toFixed(DecimalPoint);
                return (per.length > DecimalPoint + 2) ? `  ${name}:  ${per}%` : `  ${name}:    ${per}%`;
            }
        }
    },
    series: [{
        type: 'pie',
        center: ['25%', '50%'],
        // 圆环(中心为空)
        radius: ['54%', '60%'],
        data: seriesData,
        label: {
            show: false,
            position: 'center',
            fontSize: '20',
            fontWeight: 'bold',
            formatter: '{b}\n\n{c}%',
            color: '#fff'
        },
        labelLine: {
            show: true
        },
        emphasis: {
            label: {
                show: true,
                fontSize: '20',
            }
        },
    }]
};
```
:::
### 3. pie3

![pie3]

::: details 点击查看代码
```typescript
//颜色16进制换算rgba,添加透明度
function hexToRgba(hex, opacity) {
    return (
        'rgba(' +
        parseInt('0x' + hex.slice(1, 3)) +
        ',' +
        parseInt('0x' + hex.slice(3, 5)) +
        ',' +
        parseInt('0x' + hex.slice(5, 7)) +
        ',' +
        opacity +
        ')'
    );
}

backgroundColor = 'rgba(0,0,0,1)';

var legend = ['中海油', '中石油', '中石化'];

// 数据
let chartdata = [{
        name: '动火作业',
        value: 30,
    },
    {
        name: '密闭空间作业',
        value: 50,
    },
    {
        name: '吊装作业',
        value: 80,
    },
    {
        name: '高处作业',
        value: 80,
    }
];

radius = ['30%', '60%'];
// 颜色系列
color = ['#47D2FF', '#0078FF', '#004EFF', '#8C25FF'];
labelshow = true;
centerimg = true;
lineshow = false;
let color1 = [],
    color2 = [];
// color3 = [];
// 设置每层圆环颜色和添加间隔的透明色
color.forEach((item) => {
    color1.push(item, 'transparent');
    color2.push(hexToRgba(item, 0.2), 'transparent');
    // color3.push(hexToRgba(item, 0.4), 'transparent');
});
let data1 = [];
let sum = 0;
// 根据总值设置间隔值大小
chartdata.forEach((item) => {
    sum += Number(item.value);
});
// 给每个数据后添加特定的透明的数据形成间隔
chartdata.forEach((item, index) => {
    if (item.value !== 0) {
        data1.push(item, {
            name: '',
            value: sum / 70,
            labelLine: {
                show: false,
                lineStyle: {
                    color: 'transparent',
                },
            },
            itemStyle: {
                color: 'transparent',
            },
        });
    }
});
// 每层圆环大小
let radius2 = [Number(radius[1].split('%')[0]) + 0 + '%', Number(radius[1].split('%')[0]) + 6 + '%'];
let radius3 = [Number(radius[1].split('%')[0]) + 8 + '%', Number(radius[1].split('%')[0]) + 15 + '%'];
option = {
    title: {
        text: '今年',
        top: '45%',
        textAlign: "center",
        left: "35%",
        textStyle: {
            color: '#fff',
            fontSize: 18,
            fontWeight: '400'
        }
    },
    legend: {
        top: '35%',
        left: '60%',
        itemWidth: 10, // 设置宽度
        itemHeight: 10, // 设置高度
        textStyle: {
            color: '#EFF4FF'
        },
        orient: 'horizontal',
        formatter: function(name) {
            // var data=[];
            var data1 = option.series[0].data; //获取第一个数组
            var data2 = option.series[1].data; //获取第二个数组
            var data = data1.concat(data2); //要把两个饼图数据合并为一个数组才可以
            var total = 0;
            var tarValue;
            for (var i = 0, l = data.length; i < l; i++) {
                total += data[i].value;
                if (data[i].name == name) {
                    tarValue = data[i].value;
                }
            }
            var p = ((tarValue / total) * 200); //两个饼图所以需要*200-看图数量类推
            return name + " " + " " + p.toFixed(2) + "%";
        },
        // formatter: '{b}' + ' ' + '{c}',
    },

    grid: {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        containLabel: true,
    },
    tooltip: {
        backgroundColor: '#203C70',
        textStyle: {
            color: '#EFF4FF'
        },
        trigger: 'item',
        formatter: (params) => {
            if (params.name !== '') {
                return '<br/>' + params.marker + params.name + '<br/>' + '\n' + params.percent + '%' + '  ' + params.value;
            }
        },
    },
    series: [
        //最外层圆环
        {
            type: 'pie',
            radius: radius3,
            center: ['35%', '50%'],
            hoverAnimation: true, //选中--->放大的效果
            startAngle: 90, //起始方向
            clockwise: false,
            selectedMode: 'single',
            selectedOffset: 0,
            itemStyle: {
                normal: {
                    color: (params) => {
                        return color1[params.dataIndex];
                    },
                }
            },
            label: {
                show: false,
                position: 'outside',
                // emphasis:{
                //     show:true,
                //     textStyle:{
                //         fontSize:30,
                //         fontWeight:'bold'
                //     }
                // },
                formatter: (params) => {
                    let zzb = 0;
                    data1.forEach((item, index) => {
                        // 当前值一半加上前面的值是否大于50%（判断label朝向）
                        if (index <= params.dataIndex && item.name != '') {
                            if (index == params.dataIndex) {
                                zzb += Number(item.value) / 2;
                            } else {
                                zzb += Number(item.value);
                            }
                        }
                    });
                    if (params.name != '') {
                        // 若当前值一半加上前面的值的占比大于0.5三角形朝右，相反朝左
                        if (zzb / sum > 0.5) {
                            return '{txt|' + ((params.value * 100) / sum).toFixed(0) + '%}' + '\n{san|▶}';
                        } else {
                            return '{txt|' + ((params.value * 100) / sum).toFixed(0) + '%}' + '\n{san|◀}';
                        }
                    }
                },
                align: 'left',
                padding: [0, -50, 10, -60],
                rich: {
                    txt: { //占比的颜色
                        color: '#fff',
                        width: 10,
                        height: 10,
                        padding: [10, 10, 0, 24],
                    },
                    san: { //三角的颜色
                        // color:'red',
                        padding: [12, -3, -20, 10],
                    },
                },
            },
            labelLine: {
                show: true,
                length: 15,
                length2: 60,
                lineStyle: {
                    color: '#fff',
                    width: 2,
                },
            },
            data: data1,
            z: 666,
        },
        {
            type: 'pie',
            radius: radius2,
            center: ['35%', '50%'],
            // hoverAnimation: false,
            startAngle: 90,
            clockwise: false,
            selectedMode: 'single',
            selectedOffset: 0,
            itemStyle: {
                normal: {
                    color: (params) => {
                        return color2[params.dataIndex];
                    },
                },
            },
            label: {
                show: false,
                formatter: '{b}' + ' ' + '{c}',
            },
            data: data1,
            z: 666,
        },
        {
            type: 'pie',
            // name: '今年',
            // textStyle: {
            //     color: '#FFF'
            // },
            radius: ['45%'],
            center: ['35%', '50%'],
            hoverAnimation: false,
            startAngle: 90,
            clockwise: false,
            selectedMode: 'single',
            selectedOffset: 0,
            itemStyle: {
                normal: {
                    // color: (params) => {
                    //     return color3[params.dataIndex];
                    // },
                    color: '#26344e',
                    opacity: 0.2
                },
            },
            label: {
                show: false,
                formatter: '{b}' + ' ' + '{c}',
            },
            data: [0],
            z: 666,
        },
    ],
};
```
:::

### 4. pie4

::: details 点击查看代码
```typescript
option = {
    // "title": {
    //     "x": "center"
    // },
    "tooltip": {
        "trigger": "item",
        "formatter": "{b} : {c}亿吨 ({d}%)"
    },
    "series": [{
        "name": "原油产量",
        "type": "pie",
        "radius": "156px",
        "center": ["50%", "50%"],
        "clockwise": false,
        "label": {
            "position": "inner",
            "textStyle": {
                "color": "#EFF4FF",
                "fontSize": "14px"
            },
            "formatter": "{b}\n{d}%"
        },
        "data": seriesData,
        // [{
        //     "value": 56,
        //     "name": "美国"
        // }, {
        //     "value": 25700,
        //     "name": "加拿大"
        // }, {
        //     "value": 19500,
        //     "name": "中国"
        // }, {
        //     "value": 53300,
        //     "name": "俄罗斯"
        // }, {
        //     "value": 55800,
        //     "name": "沙特"
        // }],
        "itemStyle": {
            "textStyle": {
                "color": "#EFF4FF"
            },
            "emphasis": {
                "shadowBlur": 10,
                "shadowOffsetX": 0,
                "shadowColor": "rgba(0, 0, 0, 0.5)"
            }
        }
    }],
    "color": ["#004EFF", "#8C25FF", "#E27A41", "#47D2FF", "#0078FF"]
}


/*
var seriesData = [];
var value = [];
var country = [];

// 1.配置cosmoData自定义数据库(数据源名称需一致)
var result = cosmo.data({
    name: '饼图-世界原油产量',
});

// 2.将数据库中的数据添加到数组中
result.map(item => {
    country.push(item['country'])
    value.push(item['total'])

});

// 将数组数据配置到seriesData中
for (var i = 0; i < country.length; i++) {
    seriesData.push({
        "name": country[i],
        "value": value[i],
    })
};
*/
```
:::


### 5.pie5

![pie5]
::: details 点击查看代码
```typescript
var seriesData = [{
        name: '化肥1',
        value: 30,
    },
    {
        name: '化肥2',
        value: 50,
    },
    {
        name: '化肥3',
        value: 20,
    }
];
//圆环和子项颜色
var color = ['#18FFFC', '#129BFB', '#92FF0A'];




option = {
    // backgroundColor: '#1b1d3d',
    // 更改圆环颜色
    color: color,
    tooltip: {
        trigger: 'item'
    },
    legend: {
        // top: '85%',
        bottom: '0',
        left: '8%',
        // left: '30%',
        itemWidth: 13, // 设置宽度
        itemHeight: 13, // 设置高度
        orient: 'horizontal',
        textStyle: {
            color: '#EFF4FF'
        },
        // orient: 'evaporation',
        textStyle: {
            color: '#fff',
            // formatter: '{b}'
        },
    },
    series: [{
        type: 'pie',
        center: ['25%', '40%'],
        // 圆环(中心为空)
        radius: ['54%', '60%'],
        data: seriesData,
        label: {
            show: true,
            // position: 'center',
            fontSize: '13',
            fontWeight: 'bold',
            formatter: '{c}%',
            color: '#fff',
            // 百分比格式化
        },
        labelLine: {
            show: true
        },
        emphasis: {
            label: {
                show: true,
                fontSize: '20',
            }
        },

    }]
};
```
:::


### 6. pie6

![pie6]

::: details 点击查看代码
```typescript
//颜色16进制换算rgba,添加透明度
function hexToRgba(hex, opacity) {
    return (
        'rgba(' +
        parseInt('0x' + hex.slice(1, 3)) +
        ',' +
        parseInt('0x' + hex.slice(3, 5)) +
        ',' +
        parseInt('0x' + hex.slice(5, 7)) +
        ',' +
        opacity +
        ')'
    );
}

//backgroundColor = '#0A2E5D';
// 数据
chartdata = [{
        name: '1月',
        value: 120,
    },
    {
        name: '2月',
        value: 88,
    },
    {
        name: '3月',
        value: 80,
    },
    {
        name: '4月',
        value: 77,
    },
    {
        name: '5月',
        value: 66,
    },
    {
        name: '6月',
        value: 55,
    },
    {
        name: '7月',
        value: 44,
    },
    {
        name: '8月',
        value: 33,
    },
    {
        name: '9月',
        value: 22,
    },
    {
        name: '10月',
        value: 11,
    }, {
        name: '11月',
        value: 9,
    }, {
        name: '12月',
        value: 66,
    },
];
var legendData1 = [];
var legendData2 = [];
for (var i = 0; i < chartdata.length; i++) {
    var halfLength = Math.ceil(chartdata.length / 2);
    var itemName = chartdata[i].name;
    if (i < halfLength) {
        legendData1.push(itemName)
    } else {
        legendData2.push(itemName)
    }
}
radius = ['50%', '54%'];
// 颜色系列
color = ['#5E3CEF', '#8DABFF', '#D086D1', '#EE7C65', '#F0BB1A', '#B1E96E', '#6ADE8B', '#ABE2FF', '#80D4D9', '#5AB3FF', '#3672ED', '#004EFF'];
labelshow = true;
centerimg = true;
lineshow = false;
let color1 = [],
    color2 = [];
// color3 = [];
// 设置每层圆环颜色和添加间隔的透明色
color.forEach((item) => {
    color1.push(item, 'transparent');
    color2.push(hexToRgba(item, 0.3), 'transparent');
    // color3.push(hexToRgba(item, 0.1), 'transparent');
});
let data1 = [];
let sum = 0;
// 根据总值设置间隔值大小
chartdata.forEach((item) => {
    sum += Number(item.value);
});
// 给每个数据后添加特定的透明的数据形成间隔
chartdata.forEach((item, index) => {
    if (item.value !== 0) {
        data1.push(item, {
            name: '',
            value: sum / 70,
            labelLine: {
                show: false,
                lineStyle: {
                    color: 'transparent',
                },
            },
            itemStyle: {
                color: 'transparent',
            },
        });
    }
});
// 每层圆环大小
let radius2 = [Number(radius[1].split('%')[0]) + 0 + '%', Number(radius[1].split('%')[0]) + 5 + '%'];
let radius3 = [Number(radius[1].split('%')[0]) + 7 + '%', Number(radius[1].split('%')[0]) + 13 + '%'];
option = {
    //    backgroundColor: backgroundColor,
    legend: [{
        top: '20%',
        left: '60%',
        itemWidth: 10, // 设置宽度
        itemHeight: 10, // 设置高度
        textStyle: {
            color: '#EFF4FF',
            fontSize: 14
        },
        orient: 'vertical',
        data: legendData1,
        textStyle: {
            color: 'white'
        },

        formatter: function(name) {
            if (chartdata.length) {
                const item = chartdata.filter((item) => item.name === name)[0];
                const percentage = item.value / sum;
                return (item.name.length == 2) ? `  ${name}:    ${percentage.toFixed(2)} ` : `${name}:    ${percentage.toFixed(2)} `;

            }
        }

    }, {
        top: '20%',
        left: '80%',
        itemWidth: 10, // 设置宽度
        itemHeight: 10, // 设置高度
        textStyle: {
            color: '#EFF4FF',
            fontSize: 14
        },
        orient: 'vertical',
        data: legendData2,
        textStyle: {
            color: 'white'
        },
        formatter: function(name) {
            if (chartdata.length) {
                const item = chartdata.filter((item) => item.name === name)[0];
                const percentage = item.value / sum;
                return (item.name.length == 2) ? `  ${name}:    ${percentage.toFixed(2)} ` : `${name}:    ${percentage.toFixed(2)} `;

            }
        }
    }],
    grid: {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        containLabel: true,
    },
    //tooltip: {
    //    formatter: (params) => {
    //        if (params.name !== '') {
    //            return params.name + ' : ' + params.value + '\n' + '(' + params.percent + '%)';
    //        }
    //   },
    // },
    series: [
        // 最外层圆环
        {
            type: 'pie',
            radius: radius3,
            center: ['35%', '50%'],
            hoverAnimation: true,
            clockwise: false, //顺时针的方向
            startAngle: 90,
            selectedMode: 'single',
            selectedOffset: 0,
            itemStyle: {
                normal: {
                    color: (params) => {
                        return color1[params.dataIndex];
                    },
                },
            },
            label: {
                show: false,
                position: 'center',
                position: 'inner',
                formatter: (params) => {
                    let zzb = 0;
                    data1.forEach((item, index) => {
                        // 当前值一半加上前面的值是否大于50%（判断label朝向）
                        if (index <= params.dataIndex && item.name != '') {
                            if (index == params.dataIndex) {
                                zzb += Number(item.value) / 2;
                            } else {
                                zzb += Number(item.value);
                            }
                        }
                    });
                    if (params.name != '') {
                        // 若当前值一半加上前面的值的占比大于0.5三角形朝右，相反朝左
                        if (zzb / sum > 0.5) {
                            return '{txt|' + params.name + '\t\t' + ((params.value * 100) / sum).toFixed(0) + '%}' + '\n';
                        } else {
                            return '{txt|' + params.name + '\t\t' + ((params.value * 100) / sum).toFixed(0) + '%}' + '\n';
                        }
                    }
                },
                align: 'left',
                padding: [0, -50, 10, -60],
                rich: {
                    txt: {
                        color: '#fff',
                        fontSize: 16,
                        width: 10,
                        height: 10,
                        padding: [10, 10, 0, 24],
                    },
                    san: {
                        padding: [12, -3, -10, 10],
                    },
                },
            },
            labelLine: {
                show: true,
                length: 15,
                length2: 60,
                lineStyle: {
                    color: '#1f3353',
                    width: 2,
                },
            },
            data: data1,
            z: 666,
        },
        {
            type: 'pie',
            radius: radius2,
            center: ['35%', '50%'],
            hoverAnimation: true,
            startAngle: 90,
            clockwise: false, //顺时针的方向
            selectedMode: 'single',
            selectedOffset: 0,
            itemStyle: {
                normal: {
                    color: (params) => {
                        return color2[params.dataIndex];
                    },
                },
            },
            label: {
                show: false,
                formatter: '{value|{c}}\n{label|{b}}',
            },
            data: data1,
            z: 666,
        },
        {
            type: 'pie',
            radius: ['45%'],
            center: ['35%', '50%'],
            hoverAnimation: true,
            startAngle: 90,
            clockwise: false, //顺时针的方向
            selectedMode: 'single',
            selectedOffset: 0,
            itemStyle: {
                normal: {
                    // color: (params) => {
                    //     return color3[params.dataIndex];
                    // },
                    color: 'rgba(32, 60, 112, 0.2)'
                },
            },
            label: {
                show: false,
                formatter: '{value|{c}}\n{label|{b}}',
            },
            data: [1],
            // z: 666,
        },
    ],
};
```
:::


## Radar

### 1.雷达图

![radar1]

::: details 点击查看代码
```typescript
var seriesData = [{
        value: [800, 600, 780, 560, 900, 480],
        name: '累计成交',
        // 面积样式
        areaStyle: {
            color: 'rgba(18, 153, 250, 0.3)'
        },
    },
    {
        value: [460, 460, 580, 160, 420, 310],
        name: '每日成交',
        areaStyle: {
            color: 'rgba(24, 255, 252, 0.3)'
        },
        z: 1
    }
];

var optionColor = ['#1299FA', '#17FFFB'];
var radarIndicator = [{
        name: '安全消息',
        max: 1000
    },
    {
        name: '产品服务',
        max: 1000
    },
    {
        name: '账户信息',
        max: 1000
    },
    {
        name: '公告',
        max: 1000
    },
    {
        name: '订阅服务',
        max: 1000
    },
    {
        name: '其他',
        max: 1000
    },
];

option = {
    // backgroundColor: '#1b1d3d',
    color: optionColor,
    legend: {
        // 图标样式
        icon: 'circle',
        right: '5%',
        // 图标文本整体排列方式
        orient: 'vertical',
        // 图标与文本左对齐
        align: 'left',
        // 图标大小
        itemWidth: 8,
        textStyle: {
            color: "#fff",
            fontSize: 13,
        },
    },
    tooltip: {},
    radar: {
        // 位置居中
        center: ['40%', '50%'],
        // 缩小
        // radius: '50%',
        indicator: radarIndicator,
        // 雷达线面积
        splitArea: {
            "show": false,
        },
        // 雷达线数量
        splitNumber: 5,
        // 旋转雷达图
        startAngle: 60,
        // 网格线
        splitLine: {
            lineStyle: {
                color: 'rgba(255,255,255,0.1)'
            },
        },
        //轴线颜色
        axisLine: {
            lineStyle: {
                color: 'rgba(255,255,255,0.1)'
            },
        },

    },
    series: [{
        name: 'Budget vs spending',
        type: 'radar',
        data: seriesData,
        // 拐点大小
        symbolSize: 5,

    }]
};
```
:::

### radar2

![radar2]

::: details 点击查看代码
```typescript
option = {
    // color:['#8C25FF','#0078FF'],
    // "backgroundColor": "#1A253A",
    "legend": [{
        "top": '70%',
        "right": 30,
        "data": ["每日成交", "累计成交"],
        "itemGap": 12,
        "textStyle": {
            "fontSize": 12,
            "color": "#EFF4FF"
        },
        "icon": "circle",
        "orient": "vertical",
        "align": "left"
    }],
    "tooltip": {},
    "radar": {
        center: ['40%', '50%'],
        "indicator": [{
            "name": "其他",
            "max": 50
        }, {
            "name": "安全消息",
            "max": 50
        }, {
            "name": "产品服务",
            "max": 50
        }, {
            "name": "公告",
            "max": 50
        }, {
            "name": "账户信息",
            "max": 50
        }, {
            "name": "订阅服务",
            "max": 50
        }],
        "splitNumber": 5,
        startAngle: 0, //旋转的度数。
        "name": {
            "textStyle": {
                "color": "#EFF4FF"
            }
        },
        "splitLine": {
            "lineStyle": {
                "color": "#1A466B",

                // "opacity": 0.2
            }
        },
        "splitArea": {
            "show": false
        },
        "axisLine": {
            "lineStyle": {
                "color": "#1A466B",
                // color: 'red',
                // "opacity": 0.2
            }
        }
    },
    "series": [{
        "type": "radar",
        "data": [{
            "name": "每日成交",
            "lineStyle": {
                "normal": {
                    // "color": "#FF5BE2",
                    color: '#8C25FF',
                    "width": 1
                }
            },
            "value": [33, 33, 46, 46, 47, 37, 44],
            "itemStyle": {
                "normal": {
                    color: '#8C25FF',
                }
            },
            "areaStyle": {
                "normal": {
                    color: '#8C25FF',
                    // "opacity": 0.35
                    opacity: 0.2
                }
            }
        }, {
            "name": "累计成交",
            "lineStyle": {
                "normal": {
                    "color": "#0078FF",
                    "width": 1
                }
            },
            "value": [39, 45, 46, 41, 38, 43, 39],
            "itemStyle": {
                "normal": {
                    "color": "#0078FF"
                }
            },
            "areaStyle": {
                "normal": {
                    color: '#0078FF',
                    "opacity": 0.2
                }
            }
        }]
    }],
    // "color": ['#8C25FF','#0078FF', "#FFE44E", "#FF4040", "#E60636", "#F65A70", "#EA5A94", "#F56134", "#FF9D4D", "#F1F406", "#BBF25B"]
}
```
:::

## Scatter

### scatter1

![scatter1]

::: details 点击查看代码
```typescript
option = {
    //backgroundColor: '#0C2F6F',
    "title": {
        //"text": "散点统计图1",
        "textStyle": {
            "color": "#EFF4FF",
            "fontFamily": "PingFang-SC-Bold",
            "fontSize": 14
        },
        "left": "center"
    },
    "legend": {
        "orient": "vertical",
        "icon": "rect",
        "left": "right",
        "bottom": "90%",
        // "itemWidth": 6,
        itemWidth: 12,
        itemHeight: 8,
        //itemGap: 35,
        "data": ["数据名称1", "数据名称2", "数据名称3"],
        "textStyle": {
            "fontSize": 12,
            "color": "#EFF4FF"
        },
        "align": "left"
    },
    "xAxis": {
        "type": "category",
        data: [
            '9月01日', '9月09日', '9月17日', '9月25日', '10月03日', '10月11日',
            '10月19日', '10月27日', '11月04日', '11月12日'
        ],
        axisLabel: {
            show: true,
            textStyle: {
                color: "#EFF4FF",
            }
        },
        boundaryGap: false,
    },
    "yAxis": {
        "type": "category",
        data: ['大鹏LNG', '深圳LNG', '珠海LNG'],
        axisLine: {
            show: false
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: "#EFF4FF",
            }
        },
    },
    "series": [{
        "name": "数据名称1",
        "symbolSize": 12,
        "color": ["#A9F8FF"],
        "data": [
            [0, 2],
            [1.2, 2],
            [2, 2],
            [3, 2],
            [4, 2],
            [5, 2],
            [5.5, 2],
            [6, 2],

        ],
        "type": "scatter"
    }, {
        "name": "数据名称2",
        "symbolSize": 12,
        "color": ["#00FFE6"],
        "data": [
            [0, 1],
            [1, 1],
            [2, 1],
            [3, 1],
            [4, 1],

        ],
        "type": "scatter"
    }, {
        "name": "数据名称3",
        "symbolSize": 12,
        "color": ["#0078FF"],
        "data": [
            [0, 0],
            [1, 0],
            [2, 0],
            [2.5, 0],
            [3, 0],
        ],
        "type": "scatter"
    }],
    "color": ["#FF6600", "#FF9000", "#FFD033", "#B8E04C", "#5EE53F", "#FFEA00", "#EDFF20", "#7CB518", "#32A400", "#FB4607", "#EB3568"]
}
```
:::


## Gauge

### 1. 进度条

![gauge1]

::: details 点击查看代码
```typescript
var getmax = 100;
var getvalue = 33;
option = {
    // backgroundColor: '#040042',
    tooltip: {
        formatter: '{a} <br/>{b} : {c}%'
    },
    series: [{
        name: 'Pressure',
        type: 'gauge',
        progress: {
            show: true,
            roundCap: 'round', //圆角,
            itemStyle: {
                color: '#FFFFFF',
                // color: '#6DFCFF',
            },
            // backgroundColor:'#6DFCFF'
        },
        axisTick: { // 坐标轴小标记
            show: false,
            length: 12, // 属性length控制线长
            lineStyle: { // 属性lineStyle控制线条样式
                color: 'auto'
            }
        },
        splitLine: { // 分隔线
            show: false,
            length: 5, // 属性length控制线长
            lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式
                color: 'rgba(255,255,255,0.7)',
            }
        },
        axisLabel: {
            show: false,
            borderRadius: 1,
            color: 'rgba(255,255,255,0.7)',
            padding: 1,
        },
        title: {
            fontSize: 20,
            fontColor: "#FFF",
            color: "#FFF",
            paddingTop: 10,
            offsetCenter: [0, -20]
        },
        pointer: {
            show: false
        },
        axisLine: {
            roundCap: 'round',
            // 坐标轴线
            lineStyle: {
                // 属性lineStyle控制线条样式
                // width: 10, // 仪表盘宽度
                color: [
                    // [0.2, '#2ca1ff'],
                    // [0.8, '#0adbfa'],
                    [1, 'rgba(18, 155, 251, 0.2)'],
                ],
            },
        },
        detail: {
            valueAnimation: true,
            formatter: '{value}',
            shadowOffsetX: 0,
            shadowOffsetY: 0,
            // borderWidth: 1,
            // textBorderColor: '#000',
            // textBorderWidth: 1,
            // textShadowBlur: 1,
            textShadowColor: '#fff',
            textShadowOffsetX: 0,
            textShadowOffsetY: 0,
            // paddingTop: 10,
            // fontFamily: 'digital',
            fontSize: 24,
            fontWeight: 'Regular',
            color: '#fff',
            rich: {},
            offsetCenter: [0, '20%'],
            formatter: function(value) {
                console.info(value)
                return (value + "%");
            }
        },

        data: [{
            value: 23,
            name: 'cpu'
        }]
    }]
};
```
:::


### gauge2

![gauge2]

::: details 点击查看代码
```typescript
var num = 89;

option = {
    // backgroundColor: '#1f1e26',
    title: [{
        text: num + '%',
        // position: '',
        x: '45%',
        y: '35%',
        textAlign: 'center',
        textStyle: {
            fontSize: '14',
            fontWeight: '100',
            color: '#022B54',
            textAlign: 'center',
        },
    }],
    polar: {
        radius: ['83%', '100%'],
        // center: ['50%', '50%'],
    },
    angleAxis: {
        max: 100,
        show: false,
        startAngle: 90,
        "clockwise": false, //逆时针
    },
    radiusAxis: {
        type: 'category',
        // show: true,
        axisLabel: {
            show: false,
        },
        axisLine: {
            show: false,

        },
        axisTick: {
            show: false
        },
    },
    series: [{
        name: '',
        type: 'bar',
        coordinateSystem: 'polar',
        "clockwise": true,
        roundCap: true,
        // barWidth: 60,
        // showBackground: false,
        backgroundStyle: {
            color: '#464451',
        },
        data: [num],
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                    offset: 0,
                    color: '#4FACFE'
                }, {
                    offset: 1,
                    color: '#00F2FE'
                }]),
            }
        }
    }, ]
};
```
:::

### gauge3

![gauge3]




## Map

### 1. 中国地图

![map1]

::: details 点击查看代码
```typescript
var img1 = 'image://http://cosmo-child-main-nginx.apps.szdev.ocpx.cnooc/rss/project/tenant/largescreen/海油大屏开发/largesd/productlc/support/img/fertilizerimg/third.png';
var img_green = 'image://http://cosmo-child-main-nginx.apps.szdev.ocpx.cnooc/rss/project/tenant/largescreen/海油大屏开发/largesd/productlc/support/img/fertilizerimg/zu24_huafei.png';
var img_yellow = 'image://http://cosmo-child-main-nginx.apps.szdev.ocpx.cnooc/rss/project/tenant/largescreen/海油大屏开发/largesd/productlc/support/img/fertilizerimg/zu25_huafei.png';
var img_blue = 'image://http://cosmo-child-main-nginx.apps.szdev.ocpx.cnooc/rss/project/tenant/largescreen/海油大屏开发/largesd/productlc/support/img/fertilizerimg/zu26_huafei.png';
var img_chinaBg = 'image://http://cosmo-child-main-nginx.apps.szdev.ocpx.cnooc/rss/project/tenant/largescreen/海油大屏开发/largesd/industriali/support/img/platform/19.png';

var seriesData = [{
    name: '哈尔滨',
    value: [126.41, 45.45],
    img: img_yellow,
    datas: 170,
}, {
    name: '石家庄',
    value: [114.28, 38.02],
    img: img_green,
    datas: 112,
}, {
    "name": "海门",
    "value": [121.15, 31.89],
    datas: 90,
    img: img1,
}, {
    "name": "招远",
    "value": [120.38, 37.3],
    datas: 142,
    img: img1,
}, {
    name: '沈阳',
    value: [123.24, 41.50],
    datas: 100,
    img: img_blue,
}, ];

var domImg = document.createElement('img');
domImg.style.height = domImg.height = domImg.width = domImg.style.width = '8px';
domImg.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAIAAAAmKNuZAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ4IDc5LjE2NDAzNiwgMjAxOS8wOC8xMy0wMTowNjo1NyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjAgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkE4MTE0OTgyQTdDQzExRUI4Q0RBRkMwQkFGMTY2NDhEIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkE4MTE0OTgzQTdDQzExRUI4Q0RBRkMwQkFGMTY2NDhEIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QTgxMTQ5ODBBN0NDMTFFQjhDREFGQzBCQUYxNjY0OEQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QTgxMTQ5ODFBN0NDMTFFQjhDREFGQzBCQUYxNjY0OEQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4v4trwAAAAVklEQVR42mL0D225cu0hAzWAjpY8C9CsL19/wIV4uDnI5gKNYmKgKhjcxrFAggBZiBIuyDhqRQWQOxoVo1ExGhWjUTEaFYMiKoB1LVq1TXZUAI0CCDAAcAlaxCt7dtQAAAAASUVORK5CYII=';
domImg.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAIAAAAmKNuZAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ4IDc5LjE2NDAzNiwgMjAxOS8wOC8xMy0wMTowNjo1NyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjAgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkE4MTE0OTgyQTdDQzExRUI4Q0RBRkMwQkFGMTY2NDhEIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkE4MTE0OTgzQTdDQzExRUI4Q0RBRkMwQkFGMTY2NDhEIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QTgxMTQ5ODBBN0NDMTFFQjhDREFGQzBCQUYxNjY0OEQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QTgxMTQ5ODFBN0NDMTFFQjhDREFGQzBCQUYxNjY0OEQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4v4trwAAAAVklEQVR42mL0D225cu0hAzWAjpY8C9CsL19/wIV4uDnI5gKNYmKgKhjcxrFAggBZiBIuyDhqRQWQOxoVo1ExGhWjUTEaFYMiKoB1LVq1TXZUAI0CCDAAcAlaxCt7dtQAAAAASUVORK5CYII=';

var domImgHover = document.createElement('img');
domImgHover.style.height = domImgHover.height = domImgHover.width = domImgHover.style.width = '8px';
domImgHover.src =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAIAAAAmKNuZAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ4IDc5LjE2NDAzNiwgMjAxOS8wOC8xMy0wMTowNjo1NyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjAgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkFDQ0Q2RjYyQTdDRDExRUI4ODUxRDIxRjkzMEExNzg2IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkFDQ0Q2RjYzQTdDRDExRUI4ODUxRDIxRjkzMEExNzg2Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QUNDRDZGNjBBN0NEMTFFQjg4NTFEMjFGOTMwQTE3ODYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QUNDRDZGNjFBN0NEMTFFQjg4NTFEMjFGOTMwQTE3ODYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6FboimAAAASklEQVR42mIUnL9XtHsDAzXA69IARjWtXJYX7+FCfyQEKeEyMVAVDG7jWCB+RhaihAsybjQqRqNiNCpGo2I0KoZZVDBSt9oGCDAAhYNrvRu3DWEAAAAASUVORK5CYII=';


option = {
    "geo": {
        "map": "china",
        // layoutCenter: ['50%', '50.5%'],
        // layoutSize: '100%',
        silent: true,
        roam: false,
        z: 0,
        "itemStyle": {
            "normal": {
                "areaColor": "RGBA(0, 47, 134, 1)",

                // "borderColor": "#D1D1D1",
                borderWidth: 6, //设置外层边框
                borderColor: 'RGBA(40, 213, 255, 1)',
                shadowColor: 'RGBA(28, 92, 164, 0.8)',
                // shadowBlur: 2,
                shadowOffsetX: 0,
                shadowOffsetY: 12,
            },
        }
    },
    series: [
        // 背景底色
        {
            "name": "数据1",
            z: 2,
            // zindex: 2,
            type: 'map',
            map: 'china',
            // data: seriesData,
            itemStyle: {
                normal: {
                    borderColor: 'rgba(255, 255, 255, 0.4)',
                    borderWidth: 1,
                    // areaColor: {
                    //     image: domImg,
                    //     // image: img_chinaBg,
                    // },
                    areaColor: {
                        type: 'linear-gradient',
                        x: 0,
                        y: 1500,
                        x2: 1000,
                        y2: 0,
                        colorStops: [{
                                offset: 0,
                                color: 'RGBA(15, 62, 150, 1)' // 0% 处的颜色
                            },
                            {
                                offset: 0.5,
                                color: '#277aec' // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: 'RGBA(15, 62, 150, 1)' // 100% 处的颜色
                            }
                        ],
                        global: true // 缺省为 false
                    },
                    // shadowColor: 'RGBA(28, 92, 164, 1)',
                },
                emphasis: {
                    areaColor: 'RGBA(12, 134, 255, 1)',
                    borderColor: '#2ab8ff',
                    borderWidth: 1,
                    shadowColor: 'rgba(255, 255, 255, 1)',
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowOffsetY: 1,
                },
            },
        },
        // 底部动效
        {
            tooltip: {
                show: false,
            },
            type: 'effectScatter',
            coordinateSystem: 'geo',
            rippleEffect: {
                scale: 10,
                brushType: 'stroke',
            },
            showEffectOn: 'render',
            itemStyle: {
                normal: {
                    shadowColor: '#0ff',
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    color: function(params) {
                        var colorList = [
                            new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                                    offset: 0,
                                    color: '#64fbc5',
                                },
                                {
                                    offset: 1,
                                    color: '#018ace',
                                },
                            ]),
                            new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                                    offset: 0,
                                    color: '#64fbc5',
                                },
                                {
                                    offset: 1,
                                    color: '#018ace',
                                },
                            ]),
                            new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                                    offset: 0,
                                    color: '#168e6d',
                                },
                                {
                                    offset: 1,
                                    color: '#c78d7b',
                                },
                            ]),
                            new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                                    offset: 0,
                                    color: '#61c0f1',
                                },
                                {
                                    offset: 1,
                                    color: '#6f2eb6',
                                },
                            ]),
                            new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                                    offset: 0,
                                    color: '#168e6d',
                                },
                                {
                                    offset: 1,
                                    color: '#c78d7b',
                                },
                            ]),
                            new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                                    offset: 0,
                                    color: '#61c0f1',
                                },
                                {
                                    offset: 1,
                                    color: '#6f2eb6',
                                },
                            ]),
                        ];
                        return colorList[params.dataIndex];
                    },
                },
            },
            label: {
                normal: {
                    color: '#fff',
                },
            },
            symbol: 'circle',
            symbolSize: [10, 5],
            data: seriesData,
            zlevel: 3,
        },
        // 定位图片
        /*
        {
            type: 'scatter',
            coordinateSystem: 'geo',
            itemStyle: {
                color: '#f00',
            },
            symbol: function (value, params) {
                return params.data.img;
            },
            symbolSize: [32, 41],
            symbolOffset: [0, -20],
            z: 9999,
            data: seriesData,
        },
        */
        // 顶部标签背景
        {
            type: 'scatter',
            coordinateSystem: 'geo',
            label: {
                normal: {
                    show: true,
                    formatter: function(params) {
                        var name = params.name;
                        var value = params.data.datas;
                        var text = `{tline|${name}}\n{fline|${value} kg} `;
                        return text;
                    },
                    color: '#fff',
                    rich: {
                        fline: {
                            // padding: [0, 0, 0, 40],
                            color: '#fff',
                            textShadowColor: '#030615',
                            textShadowBlur: '0',
                            textShadowOffsetX: 1,
                            textShadowOffsetY: 1,
                            fontSize: 16,
                            fontWeight: 400,
                            textAlign: 'center',
                        },
                        tline: {
                            // padding: [0, 27],
                            color: '#ABF8FF',
                            fontSize: 16,
                            textAlign: 'center',
                        },
                    },
                },
                emphasis: {
                    show: true,
                },
            },
            itemStyle: {
                color: '#00FFF6',
            },
            // symbol: img1,
            symbol: function(value, params) {
                return params.data.img;
            },
            symbolSize: [100, 50],
            symbolOffset: [0, -60],
            z: 999,
            data: seriesData,
        }

    ],
    // "color": ["#1CB4FF", "#787FF6", "#4E6BFF", "#102088", "#4ADEDE", "#41DEBB", "#41DDFF", "#0036FF", "#3A0CA3", "#7209B7", "#F72585"]
};
```
:::


### map2

![map2]

::: details 点击查看代码
```typescript
// var img1 = 'image://http://cosmo-child-main-nginx.apps.szdev.ocpx.cnooc/rss/project/tenant/largescreen/海油大屏开发/largesd/productlc/support/img/fertilizerimg/third.png';

var mapDate = [{
    "name": "海门",
    "value": [121.15, 31.89, 90]
}, {
    "name": "鄂尔多斯",
    "value": [109.781327, 39.608266, 120]
}, {
    "name": "招远",
    "value": [120.38, 37.35, 142]
}];

option = {
    "geo": {
        "map": "china",
        "itemStyle": {
            "normal": {
                "areaColor": "#102088",
                "borderColor": "#D1D1D1",
                shadowColor: 'rgba(0,0, 50,0.5)',
                shadowBlur: 20,
                shadowOffsetX: 2,
                shadowOffsetY: 5,
            },
        }
    },
    /*
    "legend": {
        "orient": "vertical",
        "left": "right",
        "bottom": "10%",
        "itemWidth": 6,
        "data": ["数据1", "数据2", "数据3", "数据4"],
        "textStyle": {
            "fontSize": 12,
            "color": "#1E1E1E"
        },
        "align": "left"
    },
    */
    "series": [{

            "name": "数据1",
            z: 0,
            type: 'map',
            map: 'china',
            // data: seriesData,
            itemStyle: {
                normal: {
                    borderColor: 'rgba(255,255,255,0.3)',
                    borderWidth: 1,
                    // areaColor: {
                    //     // image: domImg,
                    //     // image: img_chinaBg,
                    //     repeat: 'repeat',
                    // },
                    areaColor: 'rgba(70, 100, 170, 1)',
                    shadowColor: 'rgba(0, 0, 0, 0.5)',
                    // shadowBlur: 0,
                    // shadowOffsetX: 2,
                    // shadowOffsetY: 10,
                },
                /*
                emphasis: {
                    areaColor: {
                        image: domImgHover,
                        // image: img_chinaBg,
                        repeat: 'repeat',
                    },
                    borderColor: '#2ab8ff',
                    borderWidth: 1,
                    shadowColor: 'rgba(0, 255, 255, 0.7)',
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowOffsetY: 1,
                    label: {
                        show: false,
                    },
                },
                */
            },


        }, {
            "name": "数据1",
            "symbolSize": 6,
            // "color": ["#1CB4FF"],
            "type": "scatter",
            "coordinateSystem": "geo",
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
        },
        {
            "name": "数据1",
            "symbolSize": 6,
            // "color": ["#1CB4FF"],
            // "type": "scatter",
            type: 'map',
            map: 'china',
            "coordinateSystem": "geo",
            // roam: 'scale',
            "data": mapDate,
        },
        {
            type: 'scatter',
            coordinateSystem: 'geo',
            /*
            label: {
                normal: {
                    show: true,
                    formatter: function(params) {
                        var name = params.name;
                        var value = params.data.datas;
                        var text = `{fline|${value}}\n{tline|${name}}`;
                        return text;
                    },
                    color: '#fff',
                    rich: {
                        fline: {
                            padding: [0, 25],
                            color: '#fff',
                            textShadowColor: '#030615',
                            textShadowBlur: '0',
                            textShadowOffsetX: 1,
                            textShadowOffsetY: 1,
                            fontSize: 14,
                            fontWeight: 400,
                        },
                        tline: {
                            padding: [0, 27],
                            color: '#ABF8FF',
                            fontSize: 12,
                        },
                    },
                },
                emphasis: {
                    show: true,
                },
            },
            */
            itemStyle: {
                color: '#00FFF6',
            },
            // symbol: img1,
            // symbolSize: [100, 50],
            // symbolOffset: [0, -60],
            z: 999,
            // data: mapDate,
        }

    ],
    "color": ["#1CB4FF", "#787FF6", "#4E6BFF", "#102088", "#4ADEDE", "#41DEBB", "#41DDFF", "#0036FF", "#3A0CA3", "#7209B7", "#F72585"]
};
```
:::

## Tabel

### table1

<!-- ![](imgs/table1.png) -->

## JS

### 1. Date

<!-- ![](imgs/date.png) -->

```js
function printTime() {
    var d = new Date();
    var year = d.getFullYear();
    var month = d.getMonth()+1;
    var day = d.getDate();
    var date = `${year}-${month}-${day}`;
    var hours = d.getHours();
    var mins = d.getMinutes();
    var mins = mins < 10 ? `0${mins}` : mins;
    var secs = d.getSeconds();
    var secs = secs < 10 ? `0${secs}` : secs;
    var time = `${hours}:${mins}:${secs}`;
    var dateTime = hours < 12 ? `${date} AM ${time}` : `${date} PM ${time}`;
    console.log(dateTime);
    $("#cmpbb8c0flabel").html(dateTime);
}
setInterval(printTime, 1000);
```

### 2. Video

<!-- ![](imgs/video.png) -->

::: details 点击查看代码
```js
// 在div中添加video
var video = document.createElement("video");
video.setAttribute("width", "419");
video.setAttribute("height", "237");
video.setAttribute("controls", "controls");
video.setAttribute("autoplay", "autoplay");
document.querySelector("#cmp990b60rectangle").appendChild(video);

var mp4 = document.createElement("source");
// 视频路径
mp4.setAttribute("src", `${ip_port}/rss/project/tenant/largescreen/海油大屏开发/largesd/productp/support/video/demo.mp4`);
mp4.setAttribute("type", "video/mp4");
video.appendChild(mp4);
```
:::

### 3. radio

<!-- ![](imgs/radio1.png) -->

### 4. 打开新页面

```
window.open(url, '_blank');
```

### 5. js新增内容

<!-- ![](imgs/box1.png) -->

::: details 点击查看代码
```js
var box = document.querySelector("#cmpcfebbcrectangle");
box.classList.add("box");

var img = document.createElement("div")
img.classList.add("imgBg")
box.appendChild(img)

var text = document.createElement("div");
text.classList.add("title")
text.innerHTML = "This is a test..."
box.appendChild(text)
```
:::

::: details 点击查看代码

```css
.box {
    background: linear-gradient(45deg, rgb(65, 155, 77), skyBlue, deepSkyBlue);
}
.imgBg {
    background: linear-gradient(lightGreen, skyblue, lightYellow);
    background-size: cover;

}
.title {
    position: absolute;
    left: 50%;
    top: 100%;
    transform: translate(-50%, 100%);
    color: red;
    padding: 10px 20px;
    border: 1px solid #000;
    /*transition: all 0.5s ease;*/
    /*opacity: 0;*/
    animation: move 1s ease infinite;
}
/*
.box:hover .title {
    transform: translateY(-120px) translateX(-50%);
    opacity: 1;
    transition: all 0.5s ease;
}
*/
@keyframes move {
    0% {
        opacity: 0;
    }
    100% {
        transform: translateY(-120px) translateX(-50%);
        opacity: 1;
    }
}
```
:::


### 6. 增加多个box，每个box内又新增内容

<!-- ![](imgs/box2.png) -->


::: details 点击查看代码
```javascript
const labelName = ['能源总体态势', '生产产量分析', '炼化加工转换监控', '安全生产作业', '能耗水耗检测', '海气生产', '海气生产进口LNG', '电厂发电', '电厂发电-管道外输'];
var container = document.querySelector("#cmp1257b0rectangle");
// var container = document.createElement("div");
// document.body.appendChild(container)


container.classList.add("container");
for (let i = 0; i < labelName.length; i++) {
    var box = document.createElement("div");
    box.classList.add("box");

    var img = document.createElement("img")
    img.classList.add("imgBg")
    img.src = `http://cosmo-child-main-nginx.apps.szdev.ocpx.cnooc/rss/project/tenant/largescreen/海油大屏开发/largesd/support/img/safeproduction/${i+1}.png`;
    box.appendChild(img)

    var text = document.createElement("div");
    text.classList.add("title")
    // text.innerHTML = "This is a test..."
    text.innerHTML = labelName[i]
    box.appendChild(text)

    container.appendChild(box)
}
```
:::

::: details 点击查看代码
```css
.container {
    /*position: relative;*/
    width: auto;
    /*height: auto;*/
    background: #323232;
    /*overflow-y: scroll;*/
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
}

.box {
    position: relative;
    /*width: 400px;*/
    /*height: 300px;*/
    /*background: linear-gradient(45deg, rgb(65, 155, 77), skyBlue, deepSkyBlue);*/
}
.imgBg {
    position: absolute;
    top: 0;
    width: 500px;
    height: 300px;
    margin: 50px;
    /*background: linear-gradient(lightGreen, skyblue, lightYellow);*/
    background-size: cover;

}
.title {
    position: absolute;
    left: 50%;
    top: 90%;
    transform: translate(-50%, -90%);
    color: red;
    padding: 10px 20px;
    border: 1px solid #000;
    transition: all 0.5s ease;
    opacity: 1;
    animation: move 1s ease infinite;
}
```
:::




## ChinaMap

### ChinaMap1

<!-- ![](./imgs/ChinaMap1.png) -->


::: details 点击查看代码
```javascript
var chinaGeoCoordMap = {
    黑龙江: [127.9688, 45.368],
    内蒙古: [110.3467, 41.4899],
    吉林: [125.8154, 44.2584],
    北京市: [116.4551, 40.2539],
    辽宁: [123.1238, 42.1216],
    河北: [114.4995, 38.1006],
    天津: [117.4219, 39.4189],
    山西: [112.3352, 37.9413],
    陕西: [109.1162, 34.2004],
    甘肃: [103.5901, 36.3043],
    宁夏: [106.3586, 38.1775],
    青海: [101.4038, 36.8207],
    新疆: [87.9236, 43.5883],
    西藏: [91.11, 29.97],
    四川: [103.9526, 30.7617],
    重庆: [108.384366, 30.439702],
    山东: [117.1582, 36.8701],
    河南: [113.4668, 34.6234],
    江苏: [118.8062, 31.9208],
    安徽: [117.29, 32.0581],
    湖北: [114.3896, 30.6628],
    浙江: [119.5313, 29.8773],
    福建: [119.4543, 25.9222],
    江西: [116.0046, 28.6633],
    湖南: [113.0823, 28.2568],
    贵州: [106.6992, 26.7682],
    云南: [102.9199, 25.4663],
    广东: [113.12244, 23.009505],
    广西: [108.479, 23.1152],
    海南: [110.3893, 19.8516],
    上海: [121.4648, 31.2891],
};


var chinaDatas = [
    [{
        name: '黑龙江',
        value: 5,
    }, ],
    [{
        name: '内蒙古',
        value: 3,
    }, ],
    [{
        name: '北京市',
        value: 20,
    }, ],
    [{
        name: '吉林',
        value: 3,
    }, ],
    [{
        name: '辽宁',
        value: 5,
    }, ],
    [{
        name: '河北',
        value: 6,
    }, ],
    [{
        name: '天津',
        value: 5,
    }, ],
    [{
        name: '山西',
        value: 7,
    }, ],
    [{
        name: '陕西',
        value: 6,
    }, ],
    [{
        name: '甘肃',
        value: 5,
    }, ],
    [{
        name: '宁夏',
        value: 5,
    }, ],
    [{
        name: '青海',
        value: 7,
    }, ],
    [{
        name: '新疆',
        value: 3,
    }, ],
    [{
        name: '西藏',
        value: 3,
    }, ],
    [{
        name: '四川',
        value: 10,
    }, ],
    [{
        name: '重庆',
        value: 9,
    }, ],
    [{
        name: '广东',
        value: 30,
    }, ],
    [{
        name: '山东',
        value: 6,
    }, ],
    [{
        name: '河南',
        value: 8,
    }, ],
    [{
        name: '江苏',
        value: 10,
    }, ],
    [{
        name: '安徽',
        value: 9,
    }, ],
    [{
        name: '湖北',
        value: 10,
    }, ],
    [{
        name: '浙江',
        value: 16,
    }, ],
    [{
        name: '福建',
        value: 9,
    }, ],

    [{
        name: '湖南',
        value: 14,
    }, ],
    [{
        name: '贵州',
        value: 8,
    }, ],
    [{
        name: '广西',
        value: 7,
    }, ],
    [{
        name: '海南',
        value: 7,
    }, ],
    [{
        name: '上海',
        value: 17,
    }, ],
];


var convertData = function(data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var dataItem = data[i];
        var fromCoord = chinaGeoCoordMap[dataItem[0].name];
        var toCoord = [116.0046, 28.6633];
        if (fromCoord && toCoord) {
            res.push([{
                    coord: fromCoord,
                    value: dataItem[0].value,
                },
                {
                    coord: toCoord,
                },
            ]);
        }
    }
    return res;
};


var series = [];
[
    ['江西', chinaDatas]
].forEach(function(item, i) {
    console.log(item);
    series.push({
            type: 'lines',
            zlevel: 1,
            effect: {
                show: true,
                period: 4, //箭头指向速度，值越小速度越快
                trailLength: 0.02, //特效尾迹长度[0,1]值越大，尾迹越长重
                symbol: 'arrow', //箭头图标
                symbolSize: 5, //图标大小
            },
            lineStyle: {
                normal: {
                    width: 1, //尾迹线条宽度
                    opacity: 1, //尾迹线条透明度
                    curveness: 0.3, //尾迹线条曲直度
                },
            },
            data: convertData(item[1]),
        }, {
            type: 'effectScatter',
            coordinateSystem: 'geo',
            zlevel: 2,
            rippleEffect: {
                //涟漪特效
                period: 4, //动画时间，值越小速度越快
                brushType: 'stroke', //波纹绘制方式 stroke, fill
                scale: 4, //波纹圆环最大限制，值越大波纹越大
            },
            label: {
                normal: {
                    show: true,
                    position: 'right', //显示位置
                    offset: [5, 0], //偏移设置
                    formatter: function(params) {
                        //圆环显示文字
                        return params.data.name;
                    },
                    fontSize: 10,
                },
                emphasis: {
                    show: true,
                },
            },
            symbol: 'circle',
            symbolSize: function(val) {
                return 3 + val[2] * 1; //圆环大小
            },
            itemStyle: {
                normal: {
                    show: false,
                    color: '#FFA54F',
                },
            },
            data: item[1].map(function(dataItem) {
                return {
                    name: dataItem[0].name,
                    value: chinaGeoCoordMap[dataItem[0].name].concat([dataItem[0].value]),
                };
            }),
        },
        //被攻击点
        {
            type: 'scatter',
            coordinateSystem: 'geo',
            zlevel: 2,
            rippleEffect: {
                period: 4,
                brushType: 'stroke',
                scale: 4,
            },
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    //offset:[5, 0],
                    color: '#0f0',
                    formatter: '{b}',
                    textStyle: {
                        color: '#0f0',
                    },
                },
                emphasis: {
                    show: true,
                    color: '#FFA54F',
                },
            },
            symbol: 'pin',
            symbolSize: 50,
            data: [{
                name: item[0],
                value: chinaGeoCoordMap[item[0]].concat([10]),
            }, ],
        }
    );
});

option = {
    tooltip: {
        trigger: 'item',
        backgroundColor: 'rgba(166, 200, 76, 0.82)',
        borderColor: '#FFFFCC',
        showDelay: 0,
        hideDelay: 0,
        enterable: true,
        transitionDuration: 0,
        extraCssText: 'z-index:100',
        formatter: function(params, ticket, callback) {
            //根据业务自己拓展要显示的内容
            var res = '';
            var name = params.name;
            var value = params.value[params.seriesIndex + 1];
            res = "<span style='color:blue;'>" + name + '</span><br/>数据：' + value;
            return res;
        },
    },
    backgroundColor: '#013954',
    visualMap: {
        //图例值控制
        min: 1,
        max: 30,
        calculable: true,
        show: true,
        color: ['#f44336', '#fc9700', '#ffde00', '#ffde00', '#00eaff'],
        textStyle: {
            color: '#fff',
        },
    },
    geo: {
        map: 'china',
        zoom: 1.2,
        label: {
            emphasis: {
                show: false,
            },
        },
        roam: true, //是否允许缩放
        itemStyle: {
            normal: {
                color: 'rgba(51, 69, 89, .5)', //地图背景色
                borderColor: '#516a89', //省市边界线00fcff 516a89
                borderWidth: 1,
            },
            emphasis: {
                color: 'rgba(37, 43, 61, .5)', //悬浮背景
            },
        },
    },
    series: series,
};
```
:::


### ChinaMap2

<!-- ![](./imgs/echarts/ChinaMap2.png) -->

::: details 点击查看代码
```javascript
var allData = {"citys":[{"name":"延寿","value":[128.331644,45.451897,2],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"临江","value":[126.918087,41.811979,2],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"嘉兴","value":[120.755486,30.746129,4],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"四平","value":[124.350398,43.16642,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"营口","value":[122.235418,40.667012,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"密云","value":[116.801346,40.35874,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"威海","value":[122.12042,37.513068,32],"symbolSize":3,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"杭州","value":[120.15507,30.274085,10],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"集安","value":[126.194031,41.125307,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"贵阳","value":[106.630154,26.647661,2],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"抚顺","value":[123.957208,41.880872,3],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"海门","value":[121.181615,31.871173,2],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"珠海","value":[113.576726,22.270715,9],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"河北","value":[114.475704,38.584854,-19],"symbolSize":2,"itemStyle":{"normal":{"color":"#58B3CC"}}},{"name":"深圳","value":[114.057868,22.543099,14],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"黄浦","value":[121.484443,31.231763,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"蓬莱","value":[120.758848,37.810661,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"吉林","value":[126.549572,43.837883,-364],"symbolSize":14,"itemStyle":{"normal":{"color":"#58B3CC"}}},{"name":"甘肃","value":[103.826308,36.059421,-2],"symbolSize":2,"itemStyle":{"normal":{"color":"#58B3CC"}}},{"name":"龙井","value":[129.427066,42.766311,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"茂名","value":[110.925456,21.662999,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"丹东","value":[124.354707,40.0005,2],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"晋中","value":[112.752695,37.687024,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"浙江","value":[120.152792,30.267447,-2],"symbolSize":2,"itemStyle":{"normal":{"color":"#58B3CC"}}},{"name":"海城","value":[122.685217,40.882377,2],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"溆浦","value":[110.594921,27.908281,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"北京","value":[116.407526,39.90403,-14],"symbolSize":2,"itemStyle":{"normal":{"color":"#58B3CC"}}},{"name":"铁岭","value":[123.726166,42.223769,2],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"大同","value":[113.61244,40.040295,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"金坛","value":[119.597897,31.723247,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"齐齐哈尔","value":[126.661669,45.742347,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"咸阳","value":[108.708991,34.329605,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"四川","value":[104.075931,30.651652,-5],"symbolSize":2,"itemStyle":{"normal":{"color":"#58B3CC"}}},{"name":"福田","value":[114.055036,22.52153,2],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"盘锦","value":[122.070714,41.119997,3],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"中山","value":[113.392782,22.517646,4],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"福建","value":[119.295144,26.10078,-1],"symbolSize":2,"itemStyle":{"normal":{"color":"#58B3CC"}}},{"name":"泰顺","value":[119.717649,27.556884,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"宝山","value":[131.401589,46.577167,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"庆安","value":[127.507825,46.880102,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"海淀","value":[116.298056,39.959912,32],"symbolSize":3,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"大兴","value":[116.341395,39.726929,3],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"桦川","value":[130.719081,47.023001,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"惠州","value":[114.416196,23.111847,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"青岛","value":[120.38264,36.067082,52],"symbolSize":3,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"朝阳","value":[116.443108,39.92147,17],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"沈阳","value":[123.431475,41.805698,41],"symbolSize":3,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"菏泽","value":[115.480656,35.23375,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"南通","value":[120.894291,31.980172,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"南充","value":[106.110698,30.837793,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"双城","value":[126.312745,45.383263,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"南京","value":[118.796877,32.060255,17],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"新疆","value":[87.627704,43.793026,-2],"symbolSize":2,"itemStyle":{"normal":{"color":"#58B3CC"}}},{"name":"成都","value":[104.066541,30.572269,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"陕西","value":[108.954239,34.265472,-2],"symbolSize":2,"itemStyle":{"normal":{"color":"#58B3CC"}}},{"name":"黄岛","value":[120.04619,35.872664,2],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"温州","value":[120.699367,27.994267,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"石家庄","value":[114.51486,38.042307,4],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"邢台","value":[114.504844,37.070589,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"赣州","value":[114.93503,25.831829,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"义乌","value":[120.075058,29.306841,3],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"南昌","value":[115.858198,28.682892,2],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"闵行","value":[121.381709,31.112813,18],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"长宁","value":[121.424624,31.220367,7],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"道里","value":[126.616957,45.755777,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"乳山","value":[121.539765,36.919816,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"双流","value":[103.923648,30.574473,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"广州","value":[113.264435,23.129163,13],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"西城","value":[116.365868,39.912289,4],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"佳木斯","value":[130.318917,46.799923,2],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"皇姑","value":[123.44197,41.824796,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"榆树","value":[126.533146,44.840288,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"临汾","value":[111.518976,36.088005,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"上海","value":[121.473701,31.230416,44],"symbolSize":3,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"内蒙古","value":[111.765618,40.817498,-23],"symbolSize":2,"itemStyle":{"normal":{"color":"#58B3CC"}}},{"name":"尚志","value":[128.009895,45.209586,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"湖里","value":[118.146769,24.512905,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"台州","value":[121.420757,28.656386,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"潍坊","value":[119.161756,36.706774,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"苏州","value":[120.585316,31.298886,14],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"房山","value":[116.143267,39.749144,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"即墨","value":[120.447128,36.389639,15],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"舒兰","value":[126.965607,44.406106,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"延吉","value":[129.508946,42.891255,3],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"三河","value":[117.078295,39.982718,4],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"大连","value":[121.614682,38.914003,40],"symbolSize":3,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"辉南","value":[126.046912,42.684993,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"无锡","value":[120.31191,31.49117,14],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"常州","value":[119.973987,31.810689,4],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"广西","value":[108.327546,22.815478,-1],"symbolSize":2,"itemStyle":{"normal":{"color":"#58B3CC"}}},{"name":"泉州","value":[118.675676,24.874132,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"昌平","value":[116.231204,40.22066,4],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"海阳","value":[121.158434,36.776378,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"郑州","value":[113.625368,34.7466,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"东城","value":[116.416357,39.928353,10],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"黄骅","value":[117.330048,38.371383,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"武侯","value":[104.04339,30.641982,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"鸡东","value":[131.12408,45.260412,2],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"龙口","value":[120.477813,37.646108,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"汤原","value":[129.905072,46.730706,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"湖北","value":[114.341862,30.546498,-4],"symbolSize":2,"itemStyle":{"normal":{"color":"#58B3CC"}}},{"name":"克拉玛依","value":[84.889207,45.579889,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"厦门","value":[118.089425,24.479834,3],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"哈尔滨","value":[126.534967,45.803775,8],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"秦皇岛","value":[119.600493,39.935385,7],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"江苏","value":[118.763232,32.061707,-1],"symbolSize":2,"itemStyle":{"normal":{"color":"#58B3CC"}}},{"name":"常熟","value":[120.752481,31.654376,4],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"烟台","value":[121.447935,37.463822,24],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"和平","value":[117.21451,39.116949,4],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"环翠","value":[122.123444,37.501991,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"宣武门外东大街","value":[116.378888,39.899332,3],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"张家港","value":[120.553284,31.870367,4],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"临安","value":[119.724733,30.233873,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"延安","value":[109.489727,36.585455,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"天津","value":[117.200983,39.084158,28],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"城阳","value":[120.39631,36.307064,15],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"石景山","value":[116.222982,39.906611,3],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"长沙","value":[112.938814,28.228209,5],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"安徽","value":[117.284923,31.861184,-1],"symbolSize":2,"itemStyle":{"normal":{"color":"#58B3CC"}}},{"name":"昆山","value":[120.980737,31.385598,4],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"徐汇","value":[121.436525,31.188523,2],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"东港","value":[124.152705,39.863008,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"廊坊","value":[116.683752,39.538047,4],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"鞍山","value":[122.994329,41.108647,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"海陵","value":[119.919425,32.491016,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"黑龙江","value":[126.661669,45.742347,-198],"symbolSize":8,"itemStyle":{"normal":{"color":"#58B3CC"}}},{"name":"西藏","value":[91.117212,29.646923,-1],"symbolSize":2,"itemStyle":{"normal":{"color":"#58B3CC"}}},{"name":"河南","value":[113.274379,34.445122,0],"symbolSize":2,"itemStyle":{"normal":{"color":"#58B3CC"}}},{"name":"湖南","value":[112.98381,28.112444,-1],"symbolSize":2,"itemStyle":{"normal":{"color":"#58B3CC"}}},{"name":"佛山","value":[113.121416,23.021548,2],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"珲春","value":[130.366036,42.862821,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"扬州","value":[119.412966,32.39421,5],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"日照","value":[119.526888,35.416377,2],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"唐山","value":[118.180194,39.630867,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"同江","value":[132.510919,47.642707,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"荣成","value":[122.486658,37.16516,4],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"虎林","value":[132.93721,45.762686,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"武汉","value":[114.305393,30.593099,2],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"合肥","value":[117.227239,31.820587,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"荆州","value":[112.239741,30.335165,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"丰台","value":[116.287149,39.858427,3],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"山东","value":[117.020359,36.66853,-6],"symbolSize":2,"itemStyle":{"normal":{"color":"#58B3CC"}}},{"name":"舟山","value":[122.207216,29.985295,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"连云港","value":[119.221611,34.596653,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"西安","value":[108.940175,34.341568,3],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"济南","value":[117.12,36.651216,4],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"绵阳","value":[104.679114,31.46745,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"辽宁","value":[123.42944,41.835441,-58],"symbolSize":3,"itemStyle":{"normal":{"color":"#58B3CC"}}},{"name":"山西","value":[112.562398,37.873532,-3],"symbolSize":2,"itemStyle":{"normal":{"color":"#58B3CC"}}},{"name":"呼和浩特","value":[111.749181,40.842585,2],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"河西","value":[117.223372,39.109563,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"兴和","value":[113.834173,40.872301,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"重庆","value":[106.551557,29.56301,2],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"胶州","value":[120.033382,36.26468,5],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"宁波","value":[121.550357,29.874557,10],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"滨海","value":[119.820831,33.990334,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"太原","value":[112.548879,37.87059,2],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"鸡西","value":[130.969333,45.295075,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"兰山","value":[118.347707,35.051729,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"阳泉","value":[113.580519,37.856972,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"勃利","value":[130.592171,45.755063,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"长春","value":[125.323544,43.817072,8],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}}],"moveLines":[{"fromName":"黑龙江","toName":"珠海","coords":[[126.661669,45.742347],[113.576726,22.270715]]},{"fromName":"黑龙江","toName":"舒兰","coords":[[126.661669,45.742347],[126.965607,44.406106]]},{"fromName":"黑龙江","toName":"大连","coords":[[126.661669,45.742347],[121.614682,38.914003]]},{"fromName":"辽宁","toName":"集安","coords":[[123.42944,41.835441],[126.194031,41.125307]]},{"fromName":"吉林","toName":"抚顺","coords":[[126.549572,43.837883],[123.957208,41.880872]]},{"fromName":"山东","toName":"南京","coords":[[117.020359,36.66853],[118.796877,32.060255]]},{"fromName":"北京","toName":"沈阳","coords":[[116.407526,39.90403],[123.431475,41.805698]]},{"fromName":"黑龙江","toName":"环翠","coords":[[126.661669,45.742347],[122.123444,37.501991]]},{"fromName":"天津","toName":"大连","coords":[[117.200983,39.084158],[121.614682,38.914003]]},{"fromName":"吉林","toName":"兴和","coords":[[126.549572,43.837883],[113.834173,40.872301]]},{"fromName":"河北","toName":"勃利","coords":[[114.475704,38.584854],[130.592171,45.755063]]},{"fromName":"吉林","toName":"大连","coords":[[126.549572,43.837883],[121.614682,38.914003]]},{"fromName":"吉林","toName":"沈阳","coords":[[126.549572,43.837883],[123.431475,41.805698]]},{"fromName":"黑龙江","toName":"闵行","coords":[[126.661669,45.742347],[121.381709,31.112813]]},{"fromName":"天津","toName":"朝阳","coords":[[117.200983,39.084158],[116.443108,39.92147]]},{"fromName":"吉林","toName":"黄岛","coords":[[126.549572,43.837883],[120.04619,35.872664]]},{"fromName":"内蒙古","toName":"上海","coords":[[111.765618,40.817498],[121.473701,31.230416]]},{"fromName":"内蒙古","toName":"南京","coords":[[111.765618,40.817498],[118.796877,32.060255]]},{"fromName":"辽宁","toName":"杭州","coords":[[123.42944,41.835441],[120.15507,30.274085]]},{"fromName":"黑龙江","toName":"海城","coords":[[126.661669,45.742347],[122.685217,40.882377]]},{"fromName":"吉林","toName":"西城","coords":[[126.549572,43.837883],[116.365868,39.912289]]},{"fromName":"四川","toName":"上海","coords":[[104.075931,30.651652],[121.473701,31.230416]]},{"fromName":"黑龙江","toName":"西城","coords":[[126.661669,45.742347],[116.365868,39.912289]]},{"fromName":"吉林","toName":"丹东","coords":[[126.549572,43.837883],[124.354707,40.0005]]},{"fromName":"吉林","toName":"宁波","coords":[[126.549572,43.837883],[121.550357,29.874557]]},{"fromName":"辽宁","toName":"海淀","coords":[[123.42944,41.835441],[116.298056,39.959912]]},{"fromName":"辽宁","toName":"青岛","coords":[[123.42944,41.835441],[120.38264,36.067082]]},{"fromName":"吉林","toName":"苏州","coords":[[126.549572,43.837883],[120.585316,31.298886]]},{"fromName":"黑龙江","toName":"抚顺","coords":[[126.661669,45.742347],[123.957208,41.880872]]},{"fromName":"吉林","toName":"临安","coords":[[126.549572,43.837883],[119.724733,30.233873]]},{"fromName":"辽宁","toName":"烟台","coords":[[123.42944,41.835441],[121.447935,37.463822]]},{"fromName":"黑龙江","toName":"海淀","coords":[[126.661669,45.742347],[116.298056,39.959912]]},{"fromName":"黑龙江","toName":"南昌","coords":[[126.661669,45.742347],[115.858198,28.682892]]},{"fromName":"内蒙古","toName":"沈阳","coords":[[111.765618,40.817498],[123.431475,41.805698]]},{"fromName":"山西","toName":"城阳","coords":[[112.562398,37.873532],[120.39631,36.307064]]},{"fromName":"吉林","toName":"广州","coords":[[126.549572,43.837883],[113.264435,23.129163]]},{"fromName":"上海","toName":"沈阳","coords":[[121.473701,31.230416],[123.431475,41.805698]]},{"fromName":"四川","toName":"阳泉","coords":[[104.075931,30.651652],[113.580519,37.856972]]},{"fromName":"河北","toName":"桦川","coords":[[114.475704,38.584854],[130.719081,47.023001]]},{"fromName":"内蒙古","toName":"海淀","coords":[[111.765618,40.817498],[116.298056,39.959912]]},{"fromName":"安徽","toName":"河北","coords":[[117.284923,31.861184],[114.475704,38.584854]]},{"fromName":"辽宁","toName":"呼和浩特","coords":[[123.42944,41.835441],[111.749181,40.842585]]},{"fromName":"广西","toName":"茂名","coords":[[108.327546,22.815478],[110.925456,21.662999]]},{"fromName":"吉林","toName":"东城","coords":[[126.549572,43.837883],[116.416357,39.928353]]},{"fromName":"内蒙古","toName":"盘锦","coords":[[111.765618,40.817498],[122.070714,41.119997]]},{"fromName":"山东","toName":"哈尔滨","coords":[[117.020359,36.66853],[126.534967,45.803775]]},{"fromName":"黑龙江","toName":"沈阳","coords":[[126.661669,45.742347],[123.431475,41.805698]]},{"fromName":"黑龙江","toName":"丰台","coords":[[126.661669,45.742347],[116.287149,39.858427]]},{"fromName":"四川","toName":"盘锦","coords":[[104.075931,30.651652],[122.070714,41.119997]]},{"fromName":"黑龙江","toName":"皇姑","coords":[[126.661669,45.742347],[123.44197,41.824796]]},{"fromName":"河北","toName":"虎林","coords":[[114.475704,38.584854],[132.93721,45.762686]]},{"fromName":"辽宁","toName":"宝山","coords":[[123.42944,41.835441],[131.401589,46.577167]]},{"fromName":"黑龙江","toName":"吉林","coords":[[126.661669,45.742347],[126.549572,43.837883]]},{"fromName":"黑龙江","toName":"青岛","coords":[[126.661669,45.742347],[120.38264,36.067082]]},{"fromName":"吉林","toName":"烟台","coords":[[126.549572,43.837883],[121.447935,37.463822]]},{"fromName":"山东","toName":"临江","coords":[[117.020359,36.66853],[126.918087,41.811979]]},{"fromName":"黑龙江","toName":"黄岛","coords":[[126.661669,45.742347],[120.04619,35.872664]]},{"fromName":"吉林","toName":"石家庄","coords":[[126.549572,43.837883],[114.51486,38.042307]]},{"fromName":"吉林","toName":"汤原","coords":[[126.549572,43.837883],[129.905072,46.730706]]},{"fromName":"黑龙江","toName":"临江","coords":[[126.661669,45.742347],[126.918087,41.811979]]},{"fromName":"吉林","toName":"济南","coords":[[126.549572,43.837883],[117.12,36.651216]]},{"fromName":"吉林","toName":"太原","coords":[[126.549572,43.837883],[112.548879,37.87059]]},{"fromName":"吉林","toName":"威海","coords":[[126.549572,43.837883],[122.12042,37.513068]]},{"fromName":"湖北","toName":"深圳","coords":[[114.341862,30.546498],[114.057868,22.543099]]},{"fromName":"内蒙古","toName":"荣成","coords":[[111.765618,40.817498],[122.486658,37.16516]]},{"fromName":"辽宁","toName":"郑州","coords":[[123.42944,41.835441],[113.625368,34.7466]]},{"fromName":"黑龙江","toName":"朝阳","coords":[[126.661669,45.742347],[116.443108,39.92147]]},{"fromName":"吉林","toName":"昆山","coords":[[126.549572,43.837883],[120.980737,31.385598]]},{"fromName":"吉林","toName":"双城","coords":[[126.549572,43.837883],[126.312745,45.383263]]},{"fromName":"黑龙江","toName":"克拉玛依","coords":[[126.661669,45.742347],[84.889207,45.579889]]},{"fromName":"辽宁","toName":"上海","coords":[[123.42944,41.835441],[121.473701,31.230416]]},{"fromName":"吉林","toName":"海阳","coords":[[126.549572,43.837883],[121.158434,36.776378]]},{"fromName":"吉林","toName":"宣武门外东大街","coords":[[126.549572,43.837883],[116.378888,39.899332]]},{"fromName":"山东","toName":"海淀","coords":[[117.020359,36.66853],[116.298056,39.959912]]},{"fromName":"内蒙古","toName":"威海","coords":[[111.765618,40.817498],[122.12042,37.513068]]},{"fromName":"黑龙江","toName":"晋中","coords":[[126.661669,45.742347],[112.752695,37.687024]]},{"fromName":"西藏","toName":"广州","coords":[[91.117212,29.646923],[113.264435,23.129163]]},{"fromName":"辽宁","toName":"无锡","coords":[[123.42944,41.835441],[120.31191,31.49117]]},{"fromName":"黑龙江","toName":"城阳","coords":[[126.661669,45.742347],[120.39631,36.307064]]},{"fromName":"河北","toName":"丰台","coords":[[114.475704,38.584854],[116.287149,39.858427]]},{"fromName":"黑龙江","toName":"扬州","coords":[[126.661669,45.742347],[119.412966,32.39421]]},{"fromName":"辽宁","toName":"天津","coords":[[123.42944,41.835441],[117.200983,39.084158]]},{"fromName":"吉林","toName":"扬州","coords":[[126.549572,43.837883],[119.412966,32.39421]]},{"fromName":"吉林","toName":"嘉兴","coords":[[126.549572,43.837883],[120.755486,30.746129]]},{"fromName":"河北","toName":"延寿","coords":[[114.475704,38.584854],[128.331644,45.451897]]},{"fromName":"吉林","toName":"义乌","coords":[[126.549572,43.837883],[120.075058,29.306841]]},{"fromName":"吉林","toName":"张家港","coords":[[126.549572,43.837883],[120.553284,31.870367]]},{"fromName":"辽宁","toName":"贵阳","coords":[[123.42944,41.835441],[106.630154,26.647661]]},{"fromName":"吉林","toName":"辽宁","coords":[[126.549572,43.837883],[123.42944,41.835441]]},{"fromName":"河南","toName":"营口","coords":[[113.274379,34.445122],[122.235418,40.667012]]},{"fromName":"吉林","toName":"合肥","coords":[[126.549572,43.837883],[117.227239,31.820587]]},{"fromName":"黑龙江","toName":"苏州","coords":[[126.661669,45.742347],[120.585316,31.298886]]},{"fromName":"黑龙江","toName":"榆树","coords":[[126.661669,45.742347],[126.533146,44.840288]]},{"fromName":"吉林","toName":"常熟","coords":[[126.549572,43.837883],[120.752481,31.654376]]},{"fromName":"吉林","toName":"乳山","coords":[[126.549572,43.837883],[121.539765,36.919816]]},{"fromName":"四川","toName":"青岛","coords":[[104.075931,30.651652],[120.38264,36.067082]]},{"fromName":"黑龙江","toName":"深圳","coords":[[126.661669,45.742347],[114.057868,22.543099]]},{"fromName":"天津","toName":"东城","coords":[[117.200983,39.084158],[116.416357,39.928353]]},{"fromName":"黑龙江","toName":"上海","coords":[[126.661669,45.742347],[121.473701,31.230416]]},{"fromName":"天津","toName":"宁波","coords":[[117.200983,39.084158],[121.550357,29.874557]]},{"fromName":"吉林","toName":"海门","coords":[[126.549572,43.837883],[121.181615,31.871173]]},{"fromName":"山西","toName":"沈阳","coords":[[112.562398,37.873532],[123.431475,41.805698]]},{"fromName":"吉林","toName":"成都","coords":[[126.549572,43.837883],[104.066541,30.572269]]},{"fromName":"吉林","toName":"南昌","coords":[[126.549572,43.837883],[115.858198,28.682892]]},{"fromName":"黑龙江","toName":"常州","coords":[[126.661669,45.742347],[119.973987,31.810689]]},{"fromName":"内蒙古","toName":"兰山","coords":[[111.765618,40.817498],[118.347707,35.051729]]},{"fromName":"吉林","toName":"河南","coords":[[126.549572,43.837883],[113.274379,34.445122]]},{"fromName":"黑龙江","toName":"福田","coords":[[126.661669,45.742347],[114.055036,22.52153]]},{"fromName":"吉林","toName":"常州","coords":[[126.549572,43.837883],[119.973987,31.810689]]},{"fromName":"吉林","toName":"双流","coords":[[126.549572,43.837883],[103.923648,30.574473]]},{"fromName":"吉林","toName":"潍坊","coords":[[126.549572,43.837883],[119.161756,36.706774]]},{"fromName":"吉林","toName":"延安","coords":[[126.549572,43.837883],[109.489727,36.585455]]},{"fromName":"辽宁","toName":"长春","coords":[[123.42944,41.835441],[125.323544,43.817072]]},{"fromName":"黑龙江","toName":"南京","coords":[[126.661669,45.742347],[118.796877,32.060255]]},{"fromName":"辽宁","toName":"和平","coords":[[123.42944,41.835441],[117.21451,39.116949]]},{"fromName":"北京","toName":"哈尔滨","coords":[[116.407526,39.90403],[126.534967,45.803775]]},{"fromName":"吉林","toName":"武汉","coords":[[126.549572,43.837883],[114.305393,30.593099]]},{"fromName":"吉林","toName":"海陵","coords":[[126.549572,43.837883],[119.919425,32.491016]]},{"fromName":"吉林","toName":"日照","coords":[[126.549572,43.837883],[119.526888,35.416377]]},{"fromName":"吉林","toName":"台州","coords":[[126.549572,43.837883],[121.420757,28.656386]]},{"fromName":"辽宁","toName":"厦门","coords":[[123.42944,41.835441],[118.089425,24.479834]]},{"fromName":"黑龙江","toName":"贵阳","coords":[[126.661669,45.742347],[106.630154,26.647661]]},{"fromName":"吉林","toName":"鞍山","coords":[[126.549572,43.837883],[122.994329,41.108647]]},{"fromName":"辽宁","toName":"荣成","coords":[[123.42944,41.835441],[122.486658,37.16516]]},{"fromName":"黑龙江","toName":"天津","coords":[[126.661669,45.742347],[117.200983,39.084158]]},{"fromName":"黑龙江","toName":"河西","coords":[[126.661669,45.742347],[117.223372,39.109563]]},{"fromName":"黑龙江","toName":"秦皇岛","coords":[[126.661669,45.742347],[119.600493,39.935385]]},{"fromName":"吉林","toName":"荆州","coords":[[126.549572,43.837883],[112.239741,30.335165]]},{"fromName":"黑龙江","toName":"东城","coords":[[126.661669,45.742347],[116.416357,39.928353]]},{"fromName":"吉林","toName":"即墨","coords":[[126.549572,43.837883],[120.447128,36.389639]]},{"fromName":"辽宁","toName":"西城","coords":[[123.42944,41.835441],[116.365868,39.912289]]},{"fromName":"黑龙江","toName":"大兴","coords":[[126.661669,45.742347],[116.341395,39.726929]]},{"fromName":"河北","toName":"哈尔滨","coords":[[114.475704,38.584854],[126.534967,45.803775]]},{"fromName":"黑龙江","toName":"江苏","coords":[[126.661669,45.742347],[118.763232,32.061707]]},{"fromName":"吉林","toName":"和平","coords":[[126.549572,43.837883],[117.21451,39.116949]]},{"fromName":"江苏","toName":"鸡东","coords":[[118.763232,32.061707],[131.12408,45.260412]]},{"fromName":"辽宁","toName":"辉南","coords":[[123.42944,41.835441],[126.046912,42.684993]]},{"fromName":"吉林","toName":"深圳","coords":[[126.549572,43.837883],[114.057868,22.543099]]},{"fromName":"福建","toName":"泰顺","coords":[[119.295144,26.10078],[119.717649,27.556884]]},{"fromName":"上海","toName":"深圳","coords":[[121.473701,31.230416],[114.057868,22.543099]]},{"fromName":"吉林","toName":"秦皇岛","coords":[[126.549572,43.837883],[119.600493,39.935385]]},{"fromName":"吉林","toName":"徐汇","coords":[[126.549572,43.837883],[121.436525,31.188523]]},{"fromName":"吉林","toName":"石景山","coords":[[126.549572,43.837883],[116.222982,39.906611]]},{"fromName":"辽宁","toName":"城阳","coords":[[123.42944,41.835441],[120.39631,36.307064]]},{"fromName":"黑龙江","toName":"威海","coords":[[126.661669,45.742347],[122.12042,37.513068]]},{"fromName":"黑龙江","toName":"惠州","coords":[[126.661669,45.742347],[114.416196,23.111847]]},{"fromName":"吉林","toName":"龙口","coords":[[126.549572,43.837883],[120.477813,37.646108]]},{"fromName":"黑龙江","toName":"四平","coords":[[126.661669,45.742347],[124.350398,43.16642]]},{"fromName":"吉林","toName":"南充","coords":[[126.549572,43.837883],[106.110698,30.837793]]},{"fromName":"河北","toName":"东港","coords":[[114.475704,38.584854],[124.152705,39.863008]]},{"fromName":"辽宁","toName":"西安","coords":[[123.42944,41.835441],[108.940175,34.341568]]},{"fromName":"内蒙古","toName":"滨海","coords":[[111.765618,40.817498],[119.820831,33.990334]]},{"fromName":"河南","toName":"青岛","coords":[[113.274379,34.445122],[120.38264,36.067082]]},{"fromName":"黑龙江","toName":"昆山","coords":[[126.661669,45.742347],[120.980737,31.385598]]},{"fromName":"辽宁","toName":"长沙","coords":[[123.42944,41.835441],[112.938814,28.228209]]},{"fromName":"吉林","toName":"哈尔滨","coords":[[126.549572,43.837883],[126.534967,45.803775]]},{"fromName":"河北","toName":"尚志","coords":[[114.475704,38.584854],[128.009895,45.209586]]},{"fromName":"辽宁","toName":"东城","coords":[[123.42944,41.835441],[116.416357,39.928353]]},{"fromName":"辽宁","toName":"珠海","coords":[[123.42944,41.835441],[113.576726,22.270715]]},{"fromName":"黑龙江","toName":"铁岭","coords":[[126.661669,45.742347],[123.726166,42.223769]]},{"fromName":"黑龙江","toName":"蓬莱","coords":[[126.661669,45.742347],[120.758848,37.810661]]},{"fromName":"北京","toName":"天津","coords":[[116.407526,39.90403],[117.200983,39.084158]]},{"fromName":"内蒙古","toName":"天津","coords":[[111.765618,40.817498],[117.200983,39.084158]]},{"fromName":"黑龙江","toName":"宁波","coords":[[126.661669,45.742347],[121.550357,29.874557]]},{"fromName":"吉林","toName":"上海","coords":[[126.549572,43.837883],[121.473701,31.230416]]},{"fromName":"辽宁","toName":"佛山","coords":[[123.42944,41.835441],[113.121416,23.021548]]},{"fromName":"吉林","toName":"长宁","coords":[[126.549572,43.837883],[121.424624,31.220367]]},{"fromName":"黑龙江","toName":"珲春","coords":[[126.661669,45.742347],[130.366036,42.862821]]},{"fromName":"山东","toName":"黄浦","coords":[[117.020359,36.66853],[121.484443,31.231763]]},{"fromName":"辽宁","toName":"威海","coords":[[123.42944,41.835441],[122.12042,37.513068]]},{"fromName":"天津","toName":"长春","coords":[[117.200983,39.084158],[125.323544,43.817072]]},{"fromName":"新疆","toName":"上海","coords":[[87.627704,43.793026],[121.473701,31.230416]]},{"fromName":"河北","toName":"鸡西","coords":[[114.475704,38.584854],[130.969333,45.295075]]},{"fromName":"陕西","toName":"呼和浩特","coords":[[108.954239,34.265472],[111.749181,40.842585]]},{"fromName":"吉林","toName":"连云港","coords":[[126.549572,43.837883],[119.221611,34.596653]]},{"fromName":"黑龙江","toName":"杭州","coords":[[126.661669,45.742347],[120.15507,30.274085]]},{"fromName":"黑龙江","toName":"嘉兴","coords":[[126.661669,45.742347],[120.755486,30.746129]]},{"fromName":"陕西","toName":"盘锦","coords":[[108.954239,34.265472],[122.070714,41.119997]]},{"fromName":"河北","toName":"同江","coords":[[114.475704,38.584854],[132.510919,47.642707]]},{"fromName":"吉林","toName":"杭州","coords":[[126.549572,43.837883],[120.15507,30.274085]]},{"fromName":"黑龙江","toName":"舟山","coords":[[126.661669,45.742347],[122.207216,29.985295]]},{"fromName":"河南","toName":"大连","coords":[[113.274379,34.445122],[121.614682,38.914003]]},{"fromName":"辽宁","toName":"绵阳","coords":[[123.42944,41.835441],[104.679114,31.46745]]},{"fromName":"吉林","toName":"溆浦","coords":[[126.549572,43.837883],[110.594921,27.908281]]},{"fromName":"吉林","toName":"朝阳","coords":[[126.549572,43.837883],[116.443108,39.92147]]},{"fromName":"吉林","toName":"无锡","coords":[[126.549572,43.837883],[120.31191,31.49117]]},{"fromName":"浙江","toName":"沈阳","coords":[[120.152792,30.267447],[123.431475,41.805698]]},{"fromName":"吉林","toName":"湖里","coords":[[126.549572,43.837883],[118.146769,24.512905]]},{"fromName":"黑龙江","toName":"无锡","coords":[[126.661669,45.742347],[120.31191,31.49117]]},{"fromName":"黑龙江","toName":"长宁","coords":[[126.661669,45.742347],[121.424624,31.220367]]},{"fromName":"辽宁","toName":"胶州","coords":[[123.42944,41.835441],[120.033382,36.26468]]},{"fromName":"吉林","toName":"青岛","coords":[[126.549572,43.837883],[120.38264,36.067082]]},{"fromName":"河北","toName":"海淀","coords":[[114.475704,38.584854],[116.298056,39.959912]]},{"fromName":"黑龙江","toName":"厦门","coords":[[126.661669,45.742347],[118.089425,24.479834]]},{"fromName":"黑龙江","toName":"中山","coords":[[126.661669,45.742347],[113.392782,22.517646]]},{"fromName":"河北","toName":"太原","coords":[[114.475704,38.584854],[112.548879,37.87059]]},{"fromName":"新疆","toName":"吉林","coords":[[87.627704,43.793026],[126.549572,43.837883]]},{"fromName":"吉林","toName":"武侯","coords":[[126.549572,43.837883],[104.04339,30.641982]]},{"fromName":"北京","toName":"廊坊","coords":[[116.407526,39.90403],[116.683752,39.538047]]},{"fromName":"浙江","toName":"临汾","coords":[[120.152792,30.267447],[111.518976,36.088005]]},{"fromName":"湖北","toName":"天津","coords":[[114.341862,30.546498],[117.200983,39.084158]]},{"fromName":"黑龙江","toName":"泉州","coords":[[126.661669,45.742347],[118.675676,24.874132]]},{"fromName":"黑龙江","toName":"温州","coords":[[126.661669,45.742347],[120.699367,27.994267]]},{"fromName":"黑龙江","toName":"唐山","coords":[[126.661669,45.742347],[118.180194,39.630867]]},{"fromName":"北京","toName":"铁岭","coords":[[116.407526,39.90403],[123.726166,42.223769]]},{"fromName":"辽宁","toName":"即墨","coords":[[123.42944,41.835441],[120.447128,36.389639]]},{"fromName":"北京","toName":"上海","coords":[[116.407526,39.90403],[121.473701,31.230416]]},{"fromName":"黑龙江","toName":"广州","coords":[[126.661669,45.742347],[113.264435,23.129163]]},{"fromName":"吉林","toName":"廊坊","coords":[[126.549572,43.837883],[116.683752,39.538047]]},{"fromName":"黑龙江","toName":"荣成","coords":[[126.661669,45.742347],[122.486658,37.16516]]},{"fromName":"吉林","toName":"海城","coords":[[126.549572,43.837883],[122.685217,40.882377]]},{"fromName":"湖南","toName":"沈阳","coords":[[112.98381,28.112444],[123.431475,41.805698]]},{"fromName":"北京","toName":"青岛","coords":[[116.407526,39.90403],[120.38264,36.067082]]},{"fromName":"河北","toName":"大连","coords":[[114.475704,38.584854],[121.614682,38.914003]]},{"fromName":"内蒙古","toName":"珠海","coords":[[111.765618,40.817498],[113.576726,22.270715]]},{"fromName":"黑龙江","toName":"房山","coords":[[126.661669,45.742347],[116.143267,39.749144]]},{"fromName":"黑龙江","toName":"金坛","coords":[[126.661669,45.742347],[119.597897,31.723247]]},{"fromName":"河北","toName":"齐齐哈尔","coords":[[114.475704,38.584854],[126.661669,45.742347]]},{"fromName":"吉林","toName":"大兴","coords":[[126.549572,43.837883],[116.341395,39.726929]]},{"fromName":"吉林","toName":"密云","coords":[[126.549572,43.837883],[116.801346,40.35874]]},{"fromName":"黑龙江","toName":"和平","coords":[[126.661669,45.742347],[117.21451,39.116949]]},{"fromName":"内蒙古","toName":"龙井","coords":[[111.765618,40.817498],[129.427066,42.766311]]},{"fromName":"吉林","toName":"道里","coords":[[126.549572,43.837883],[126.616957,45.755777]]},{"fromName":"山东","toName":"武汉","coords":[[117.020359,36.66853],[114.305393,30.593099]]},{"fromName":"甘肃","toName":"常熟","coords":[[103.826308,36.059421],[120.752481,31.654376]]},{"fromName":"黑龙江","toName":"烟台","coords":[[126.661669,45.742347],[121.447935,37.463822]]},{"fromName":"吉林","toName":"海淀","coords":[[126.549572,43.837883],[116.298056,39.959912]]},{"fromName":"黑龙江","toName":"长沙","coords":[[126.661669,45.742347],[112.938814,28.228209]]},{"fromName":"天津","toName":"石家庄","coords":[[117.200983,39.084158],[114.51486,38.042307]]},{"fromName":"吉林","toName":"佛山","coords":[[126.549572,43.837883],[113.121416,23.021548]]},{"fromName":"辽宁","toName":"黄骅","coords":[[123.42944,41.835441],[117.330048,38.371383]]},{"fromName":"内蒙古","toName":"中山","coords":[[111.765618,40.817498],[113.392782,22.517646]]},{"fromName":"黑龙江","toName":"北京","coords":[[126.661669,45.742347],[116.407526,39.90403]]},{"fromName":"黑龙江","toName":"三河","coords":[[126.661669,45.742347],[117.078295,39.982718]]},{"fromName":"河北","toName":"庆安","coords":[[114.475704,38.584854],[127.507825,46.880102]]},{"fromName":"吉林","toName":"长沙","coords":[[126.549572,43.837883],[112.938814,28.228209]]},{"fromName":"黑龙江","toName":"西安","coords":[[126.661669,45.742347],[108.940175,34.341568]]},{"fromName":"内蒙古","toName":"朝阳","coords":[[111.765618,40.817498],[116.443108,39.92147]]},{"fromName":"辽宁","toName":"丰台","coords":[[123.42944,41.835441],[116.287149,39.858427]]},{"fromName":"黑龙江","toName":"延吉","coords":[[126.661669,45.742347],[129.508946,42.891255]]},{"fromName":"黑龙江","toName":"长春","coords":[[126.661669,45.742347],[125.323544,43.817072]]},{"fromName":"吉林","toName":"天津","coords":[[126.549572,43.837883],[117.200983,39.084158]]},{"fromName":"吉林","toName":"昌平","coords":[[126.549572,43.837883],[116.231204,40.22066]]},{"fromName":"吉林","toName":"赣州","coords":[[126.549572,43.837883],[114.93503,25.831829]]},{"fromName":"吉林","toName":"厦门","coords":[[126.549572,43.837883],[118.089425,24.479834]]},{"fromName":"内蒙古","toName":"秦皇岛","coords":[[111.765618,40.817498],[119.600493,39.935385]]},{"fromName":"内蒙古","toName":"菏泽","coords":[[111.765618,40.817498],[115.480656,35.23375]]},{"fromName":"吉林","toName":"闵行","coords":[[126.549572,43.837883],[121.381709,31.112813]]},{"fromName":"辽宁","toName":"石景山","coords":[[123.42944,41.835441],[116.222982,39.906611]]},{"fromName":"吉林","toName":"珠海","coords":[[126.549572,43.837883],[113.576726,22.270715]]},{"fromName":"内蒙古","toName":"青岛","coords":[[111.765618,40.817498],[120.38264,36.067082]]},{"fromName":"北京","toName":"海门","coords":[[116.407526,39.90403],[121.181615,31.871173]]},{"fromName":"内蒙古","toName":"长春","coords":[[111.765618,40.817498],[125.323544,43.817072]]},{"fromName":"吉林","toName":"城阳","coords":[[126.549572,43.837883],[120.39631,36.307064]]},{"fromName":"吉林","toName":"大同","coords":[[126.549572,43.837883],[113.61244,40.040295]]},{"fromName":"湖北","toName":"邢台","coords":[[114.341862,30.546498],[114.504844,37.070589]]},{"fromName":"吉林","toName":"胶州","coords":[[126.549572,43.837883],[120.033382,36.26468]]},{"fromName":"吉林","toName":"重庆","coords":[[126.549572,43.837883],[106.551557,29.56301]]},{"fromName":"河北","toName":"佳木斯","coords":[[114.475704,38.584854],[130.318917,46.799923]]},{"fromName":"甘肃","toName":"大连","coords":[[103.826308,36.059421],[121.614682,38.914003]]},{"fromName":"吉林","toName":"南京","coords":[[126.549572,43.837883],[118.796877,32.060255]]},{"fromName":"内蒙古","toName":"日照","coords":[[111.765618,40.817498],[119.526888,35.416377]]},{"fromName":"吉林","toName":"鸡东","coords":[[126.549572,43.837883],[131.12408,45.260412]]},{"fromName":"黑龙江","toName":"即墨","coords":[[126.661669,45.742347],[120.447128,36.389639]]},{"fromName":"江苏","toName":"朝阳","coords":[[118.763232,32.061707],[116.443108,39.92147]]},{"fromName":"吉林","toName":"南通","coords":[[126.549572,43.837883],[120.894291,31.980172]]},{"fromName":"黑龙江","toName":"张家港","coords":[[126.661669,45.742347],[120.553284,31.870367]]},{"fromName":"吉林","toName":"三河","coords":[[126.549572,43.837883],[117.078295,39.982718]]},{"fromName":"吉林","toName":"咸阳","coords":[[126.549572,43.837883],[108.708991,34.329605]]},{"fromName":"吉林","toName":"中山","coords":[[126.549572,43.837883],[113.392782,22.517646]]},{"fromName":"黑龙江","toName":"胶州","coords":[[126.661669,45.742347],[120.033382,36.26468]]}]};

option = {
    backgroundColor: '#013954',
    title: {
        text: '朴姓人口迁徙图',
        left: 'center',
        textStyle: {
            color: '#fff',
        },
    },
    legend: {
        show: false,
        orient: 'vertical',
        top: 'bottom',
        left: 'right',
        data: ['地点', '线路'],
        textStyle: {
            color: '#fff',
        },
    },
    geo: {
        map: 'china',
        label: {
            emphasis: {
                show: false,
            },
        },
        roam: true, //是否允许缩放
        itemStyle: {
            normal: {
                color: 'rgba(51, 69, 89, .5)', //地图背景色
                borderColor: '#516a89', //省市边界线00fcff 516a89
                borderWidth: 1,
            },
            emphasis: {
                color: 'rgba(37, 43, 61, .5)', //悬浮背景
            },
        },
    },
    series: [
        {
            name: '地点',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            zlevel: 2,
            rippleEffect: {  //涟漪特效
                brushType: 'stroke',//波纹绘制方式 stroke，fill
                period:4,//动画时间，值越小速度越快
                scale:4,//波纹圆环最大显示，值越大波纹越大
            },
            label: {
                emphasis: {
                    show: true,
                    position: 'right',
                    formatter: '{b}',
                },
            },
            symbolSize: 2,
            showEffectOn: 'render',
            itemStyle: {
                normal: {
                    color: '#46bee9',
                },
            },
            data: allData.citys,
        },
        {
            name: '线路',
            type: 'lines',
            coordinateSystem: 'geo',
            zlevel: 2,
            large: true,
            effect: {
                show: true,
                constantSpeed: 30,
                symbol: 'arrow', //箭头图标，pin 圆点
                symbolSize: 3, //图标大小
                trailLength: 0, //特效尾迹长度[0,1]值越大，尾迹越长重
            },
            lineStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1,
                        [
                            {
                                offset: 0,
                                color: '#58B3CC',
                            },
                            {
                                offset: 1,
                                color: '#F58158',
                            },
                        ],
                        false
                    ),
                    width: 1, //尾迹线条宽度
                    opacity: 0.2, //尾迹线条透明度
                    curveness: 0.2, //尾迹线条曲直度
                },
            },
            data: allData.moveLines,
        },
    ],
};
```
:::
