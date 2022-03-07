# 事件处理


## 基础设置

```typescript
// 1. 初始化ECharts实例
var myChart = echarts.init(document.getElementById('main'));
// 2. 指定图表的配置项和数据
var option = {};
// 3. 使用配置项和数据显示图表
myChart.setOption(option);
```

### 鼠标点击事件

```typescript
// 处理点击事件并且跳转到相应的百度搜索页面
myChart.on('click', function(params) {
    window.open('https://www.baidu.com/s?wd=' + encodeURIComponent(params.name));
});
```

### 添加数据
```
myChart.setOption({
    title: {
      backgroundColor: '#333',
      text: 'SELECTED DATA INDICES: \n' + brushed.join('\n'),
      bottom: 0,
      right: '10%',
      width: 100,
      textStyle: {
        fontSize: 12,
        color: '#fff'
      }
    }
});
```

### 加载动画

```typescript
myChart.showLoading();
$.get('data.json').done(function (data) {
    myChart.hideLoading();
    myChart.setOption(...);
});
```

### 跟随浏览器缩放
```
window.addEventListener("resize", function() {
	mychart.resize();
})
```

### 约束缩放尺寸
```
@media screen and (max-width: 1024px) {
	html {
		font-size: 42px !important;
	}
}
@media screen and (max-width: 1920px) {
	html {
		font-size: 80px !important;
	}
}
```