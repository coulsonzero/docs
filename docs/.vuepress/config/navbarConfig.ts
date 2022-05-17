import type {NavbarConfig} from "@vuepress/theme-default"

const navbarConfig: NavbarConfig = [
	{text: "🏡 首页", link: "https://coulsonzero.github.io"},
	{
		text: "前端",
		children: [
			{text: "HTML", link: "/guide/frontend/html"},
			{text: "CSS", link: "/guide/frontend/css"},
			{text: "JavaScript", link: "/guide/frontend/javascript/"},
			{
				text: "语法扩展",
				children: [
					{text: "SCSS", link: "/guide/frontend/scss"},
					{text: "TypeScript", link: "https://www.tslang.cn"},
					{text: "Canvas", link: "/guide/frontend/canvas"},
				],
			},
			{
				text: "web框架",
				children: [
					{text: "jQuery", link: "/guide/frontend/jquery"},
					{text: "Vue", link: "/guide/frontend/vue"},
					{text: "React", link: "/guide/frontend/react/"},
				],
			},
			{
				text: "前端开发工具",
				children: [{text: "dva", link: "/guide/frontend/dva"}],
			},
			{
				text: "web库",
				children: [
					{text: "Echarts", link: "/guide/frontend/echarts/"},
					{text: "Swiper", link: "https://swiperjs.com/demos"},
					{text: "ScroolReveal", link: "https://scrollrevealjs.org/"},
				],
			},
			{
				text: "打包工具",
				children: [
					{text: "Webpack", link: "https://www.webpackjs.com/"},
					{text: "Vite", link: "https://cn.vitejs.dev/"},
				],
			},
			{
				text: "文档管理",
				children: [{text: "VuePress", link: "https://v2.vuepress.vuejs.org/zh/"}],
			},
			{
				text: "语法规范",
				children: [
					{text: "ESLint", link: "/guide/frontend/eslint"},
					{text: "Vscode", link: "/guide/frontend/vscode"},
				],
			},
		],
	},
	{
		text: "后端",
		children: [
			{text: "C", link: "/guide/backend/c"},
			{text: "C++", link: "/guide/backend/c++"},
			{text: "Java", link: "/guide/backend/java"},
			{text: "Python", link: "/guide/backend/python"},
			{text: "Go", link: "/guide/backend/go"},
			{text: "Kotlin", link: "/guide/backend/kotlin"},
			{text: "Swift", link: "/guide/backend/swift"},
			{
				text: "框架",
				children: [
					{
						text: "SpringBoot",
						link: "https://spring.io/projects/spring-boot#learn",
					},
					{text: "Django", link: "/guide/backend/django.md"},
					{text: "Flask", link: "/guide/backend/flask.md"},
				],
			},
			{
				text: "类库",
				children: [{text: "Pyside6", link: "/guide/backend/pyside6"}],
			},
		],
	},
	{
		text: "运维",
		children: [
			{text: "SQL", link: "/guide/operations/sql"},
			{text: "Linux", link: "/guide/operations/linux"},
			{text: "Shell", link: "/guide/operations/shell"},
			{text: "MongoDB", link: "/guide/operations/mongodb"},
			{text: "Redis", link: "/guide/operations/redis"},
		],
	},
	{
		text: "算法",
		children: [
			{
				text: "Leetcode算法",
				link: "https://coulsonzero.github.io/leetcode-1/",
			},
			{text: "排序算法", link: "/guide/algorithm/Sort/README.md"},
			{text: "字符串", link: "/guide/algorithm/String/README.md"},
			{text: "链表", link: "/guide/algorithm/ListNode/README.md"},
			{text: "二叉树", link: "/guide/algorithm/Binarytree/README.md"},
		],
	},
	{
		text: "其它",
		children: [
			{text: "Markdown", link: "/guide/other/markdown"},
			{text: "Mac使用指南", link: "/guide/other/mac/README.md"},
			// {text: "interview", link: "/guide/other/Interview.md"},
			{text: "Error报错日志", link: "/guide/other/error.md"},
		],
	},
]

export default navbarConfig