import {searchPlugin} from "@vuepress/plugin-search"
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance"


const pluginConfig = [
	// ["@vuepress/plugin-search"],
	[
		mdEnhancePlugin({
			// 启用代码演示
			demo: true,
			// 启用图表
			chart: true,
		}),
	],
	[
		searchPlugin({
			locales: {
				"/": {
					placeholder: "搜索",
				},
			},
			// 排除首页
			isSearchable: (page) => page.path !== "/",
			// 允许搜索 Frontmatter 中的 `tags`
			getExtraFields: (page) => page.frontmatter.tags ?? [],
		}),
	],
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


export default pluginConfig