option = {
	tooltip: {
		trigger: "axis",
	},
	// 图表位置
	grid: {
		top: "20%",
		left: "18%",
	},
	xAxis: {
		show: false,
		type: "value",
	},
	yAxis: {
		type: "category",
		data: yData,
		// 隐藏y轴线
		axisLine: {
			show: false,
		},
		// 隐藏刻度线
		axisTick: {
			show: false,
		},
		// 坐标轴标签样式
		axisLabel: {
			textStyle: {
				color: "#fff",
			},
		},
	},
	series: [
		{
			data: seriesData,
			type: "bar",
			// 柱体宽度
			barWidth: 8,
			// 柱体圆角
			itemStyle: {
				normal: {
					barBorderRadius: [4, 8, 8, 4],
				},
			},
		},
	],
}

// y轴数据
var yData = ["云服务", "解决方案", "微服务", "应用商店"]

// series数据
var seriesData = [
	{
		value: 1105,
		itemStyle: {
			color: new echarts.graphic.LinearGradient(1, 1, 0, 0, [
				{
					offset: 0,
					color: "#99FF1A",
				},
				{
					offset: 1,
					color: "#699800",
				},
			]),
		},
	},
	{
		value: 2335,
		itemStyle: {
			color: new echarts.graphic.LinearGradient(1, 1, 0, 0, [
				{
					offset: 0,
					color: "#E5FF1A",
				},
				{
					offset: 1,
					color: "#999200",
				},
			]),
		},
	},
	{
		value: 3335,
		itemStyle: {
			color: new echarts.graphic.LinearGradient(1, 1, 0, 0, [
				{
					offset: 0,
					color: "#1AC7FF",
				},
				{
					offset: 1,
					color: "#008998",
				},
			]),
		},
	},
	{
		value: 1935,
		itemStyle: {
			color: new echarts.graphic.LinearGradient(1, 1, 0, 0, [
				{
					offset: 0,
					color: "#4490FC",
				},
				{
					offset: 1,
					color: "#1672ED",
				},
			]),
		},
	},
]
