import {searchPlugin} from "@vuepress/plugin-search"
import {mdEnhancePlugin} from "vuepress-plugin-md-enhance"
import {commentPlugin} from "vuepress-plugin-comment2"
import {copyCodePlugin} from "vuepress-plugin-copy-code2"
import {DefaultThemePluginsOptions} from "@vuepress/theme-default"
import {registerComponentsPlugin} from "@vuepress/plugin-register-components"
// import {getDirname, path} from "@vuepress/utils"
// import {path} from "@vuepress/utils"
// const __dir = getDirname(import.meta.url)

const pluginConfig: DefaultThemePluginsOptions = [
	[
		// 复制代码
		copyCodePlugin({
			showInMobile: true,
			// 提示显示时长
			duration: 1000,
		}),
	],
	[
		// 启用giscus评论
		commentPlugin({
			type: "giscus",
			repo: "coulsonzero/docs",
			repoId: "R_kgDOG056-Q",
			category: "General",
			categoryId: "DIC_kwDOG056-c4CPEsY",
			mapping: "title",
		}),
	],
	[
		mdEnhancePlugin({
			// 启用代码演示
			demo: true,
			// 启用图表
			chart: true,
			// echarts
			echarts: true,
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
	// ["@vuepress/plugin-search"],
	[
		"vuepress-plugin-auto-sidebar",
		{
			output: {
				filename: "config/sidebarConfig",
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
	// [
	// 	registerComponentsPlugin({
	// 		components: {
	// 			// FooBar: path.resolve(__dirname, "./components/FooBar.vue"),
	// 			componentsDir: path.resolve(__dir, "./components"),
	// 		},
	// 	})
	// ]
]

export default pluginConfig
