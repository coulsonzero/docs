import { defineUserConfig } from 'vuepress'
import { defaultTheme } from "@vuepress/theme-default"

import {navbarConfig, sidebarConfig, pluginConfig} from './config/index'
import path from "path"


export default defineUserConfig({
	lang: "zh-CN",
	/* 如果设置了域名解析则需要删除base: '/' */
	// base: "/docs/",
	title: "Zero",
	description: "文档管理中心",
	port: 80,
	// host: '127.0.0.1',
	// open: true,
	plugins: pluginConfig,
	/* 静态资源别名 */
	alias: {
		"@": path.resolve(__dirname, "./public"),
	},
	theme: defaultTheme({
		/* navbar扩展 */
		// logo: "https://vuejs.org/images/logo.png",
		logo: "/coulsonzero.png",
		/* github地址 */
		repo: "https://github.com/coulsonzero/docs",
		repoLabel: "Github",
		/* footer */
		editLinks: true,
		editLinkText: "在 GitHub 上编辑此页",
		lastUpdatedText: "上次更新",
		contributorsText: "贡献者",
		docsRepo: "https://github.com/coulsonzero/docs",
		docsDir: "docs",
		docsBranch: "master",
		editLinkPattern: ":repo/edit/:branch/:path",
		smoothScroll: true,
		/* 导航栏 */
		navbar: navbarConfig,
		/* 侧边栏 */
		sidebar: sidebarConfig,
	}),
	markdown: {
		code: {
			lineNumbers: 10, // 代码超过n行显示行号, 默认值为true
		},
	},
})