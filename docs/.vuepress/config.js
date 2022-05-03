const navConf = require("./config/navConf.js")

module.exports = {
	lang: "zh-CN",
	base: "/docs/",
	title: "Zero",
	description: "文档管理中心",
	port: 80,
	// 搜索栏
	plugins: ["@vuepress/plugin-search", "demo-block"],
	themeConfig: {
		// 导航栏
		logo: "https://vuejs.org/images/logo.png",
		repo: "https://github.com/coulsonzero/docs",
		// 是否编辑
		editLinks: true,
		editLinkText: "Edit this page",
		docsRepo: "https://github.com/coulsonzero/docs",
		docsDir: "docs",
		docsBranch: "master",
		editLinkPattern: ":repo/edit/:branch/:path",
		smoothScroll: true,
		// 顶部导航栏
		navbar: navConf,
	},
	/*
	head: [
		[
			"script",
			{src: "https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js"},
		],
		[
			"script",
			{
				src: "https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js",
			},
		],
		["script", {src: "https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js"}],
		[
			"script",
			{src: "https://cdn.jsdelivr.net/npm/@babel/standalone/babel.min.js"},
		],
	],
	*/

	markdown: {
		code: {
			lineNumbers: 4, // 代码超过4行显示行号, 默认值为true
		},
	},
}
