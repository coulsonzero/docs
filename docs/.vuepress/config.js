const navConf = require("./config/navConf.js")

module.exports = {
	lang: "zh-CN",
	base: "/docs/",
	title: "Zero",
	description: "文档管理中心",
	port: 80,
	// 搜索栏
	plugins: [
		"@vuepress/plugin-search",
		"demo-block"
	],
	themeConfig: {
		// logo: "https://vuejs.org/images/logo.png",
		logo: "/coulsonzero.png",
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
	markdown: {
		code: {
			lineNumbers: 10, // 代码超过n行显示行号, 默认值为true
		},
	},
}
