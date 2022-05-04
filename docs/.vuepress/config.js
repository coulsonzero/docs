const navConf = require("./config/navConf.js")
const sidebarConf = require("./config/sidebarConf.js")
const pluginConf = require("./config/pluginConf.js")




module.exports = {
	lang: "zh-CN",
	/* 如果设置了域名解析则需要删除base: '/' */
	// base: "/docs/",
	title: "Zero",
	description: "文档管理中心",
	port: 80,
	/* 搜索栏 */
	plugins: pluginConf,
	themeConfig: {
		// logo: "https://vuejs.org/images/logo.png",
		logo: "/coulsonzero.png",
		repo: "https://github.com/coulsonzero/docs",
		editLinks: true,
		editLinkText: "Edit this page",
		docsRepo: "https://github.com/coulsonzero/docs",
		docsDir: "docs",
		docsBranch: "master",
		editLinkPattern: ":repo/edit/:branch/:path",
		smoothScroll: true,
		/* 导航栏 */
		navbar: navConf,
		/* 侧边栏 */
		sidebar: sidebarConf,
	},
	markdown: {
		code: {
			lineNumbers: 10, // 代码超过n行显示行号, 默认值为true
		},
	},
}
