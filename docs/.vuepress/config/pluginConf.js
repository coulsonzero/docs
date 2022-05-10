const {searchPlugin} = require("@vuepress/plugin-search")

module.exports = [
	// ["@vuepress/plugin-search"],
	[
		searchPlugin({
			locales: {
				"/": {
					placeholder: "Search",
				},
			},
			// 排除首页
			isSearchable: (page) => page.path !== "/",
			// 允许搜索 Frontmatter 中的 `tags`
			getExtraFields: (page) => page.frontmatter.tags ?? [],
		}),
	],
	["demo-block"],
	[
		"vuepress-plugin-auto-sidebar",
		{
			output: {
				filename: "config/sidebarConf",
			},
			sort: {
				mode: "asc",
				readmeFirst: true,
				readmeFirstForce: false,
			},
			git: {
				trackStatus: "all",
			},
			ignore: [
				{
					menu: "/guide/other/",
					regex: "Inter*",
				},
			],
		},
	],
]
