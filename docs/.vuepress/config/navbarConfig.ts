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
				text: "web框架",
				children: [
					{text: "React", link: "/guide/frontend/react/"},
					{ text: "Vue",link: "/guide/frontend/vue" },
					// {text: "Vue3", link: "/guide/frontend/vue-pro"},
					{text: "jQuery", link: "/guide/frontend/jquery"},
				],
			},
			{
				text: "语法扩展",
				children: [
					{text: "SCSS", link: "/guide/frontend/scss"},
					{text: "TypeScript", link: "/guide/frontend/typescript"},
				],
			},
			{
				text: "可视化库",
				children: [
					{text: "Echarts", link: "/guide/frontend/echarts/"},
					{text: "Canvas", link: "/guide/frontend/canvas"},
					{text: "Three.js", link: "https://threejs.org"},
				],
			},
			{
				text: "js库",
				children: [
					{text: "Swiper", link: "https://swiperjs.com/demos"},
					{text: "ScroolReveal", link: "https://scrollrevealjs.org/"},
				],
			},
			{
				text: "package管理器",
				children: [
					{text: "yarn", link: "https://www.yarnpkg.cn/"},
					{text: "Vite", link: "https://cn.vitejs.dev/"},
				],
			},
			{
				text: "打包器",
				children: [{text: "webpack", link: "https://www.webpackjs.com/"}],
				children: [{text: "parcel", link: "https://parceljs.org/"}],
			},
			{
				text: "文档管理",
				children: [{text: "VuePress", link: "https://v2.vuepress.vuejs.org/zh/"}],
			},
			{
				text: "语法规范",
				children: [{text: "ESLint", link: "/guide/frontend/eslint"}],
			},
		],
	},
	{
		text: "后端",
		children: [
			{text: "C", link: "/guide/backend/c"},
			{ text: "C++",link: "/guide/backend/c++" },
			{ text: "Python",link: "/guide/backend/python" },
			{ text: "Java",link: "/guide/backend/java" },
			{ text: "Go",link: "/guide/backend/go" },
			{ text: "Rust",link: "/guide/backend/rust" },
			{text: "Kotlin", link: "/guide/backend/kotlin"},
			{text: "Swift", link: "/guide/backend/swift"},
			{
				text: "Golang框架",
				children: [
					{text: "Gin", link: "/guide/backend/gin.md"},
					{text: "Gorm", link: "/guide/backend/gorm.md"},
					// {text: "gRPC", link: "/guide/backend/grpc.md"},
				],
			},
			{
				text: "Python框架",
				children: [
					{ text: "Flask",link: "/guide/backend/flask.md" },
					{ text: "FastApi",link: "/guide/backend/fastapi.md" },
					{text: "Django", link: "/guide/backend/django.md"},
				],
			},
			{
				text: "Java框架",
				children: [{text: "SpringBoot", link: "/guide/backend/springboot.md"}],
			},
			{
				text: "GUI库",
				children: [{text: "Pyside6", link: "/guide/backend/pyside6"}],
			},
			{
				text: "系统开发",
				children: [{text: "HarmonyOS", link: "/guide/backend/HarmonyOS/README.md"}],
			},
		],
	},
	{
		text: "运维",
		children: [
			{
				text: "数据库",
				children: [
					{text: "MySQL", link: "/guide/operations/mysql"},
					{text: "Redis", link: "/guide/operations/redis"},
					{text: "MongoDB", link: "/guide/operations/mongodb"},
				],
			},
			{
				text: "命令",
				children: [
					{text: "Linux", link: "/guide/operations/linux"},
					{text: "Shell", link: "/guide/operations/shell"},
					{text: "Git", link: "/guide/operations/git"},
				],
			},
			{
				text: "部署",
				children: [{text: "Docker", link: "/guide/operations/docker"}],
			},
		],
	},
	{
		text: "算法",
		children: [
			{text: "Leetcode算法", link: "https://coulsonzero.github.io/leetcode-1/"},
			{text: "Leetcode-Golang", link: "https://books.halfrost.com/leetcode/"},
			{text: "排序算法", link: "/guide/algorithm/Sort/README.md"},
			// {text: "字符串", link: "/guide/algorithm/String/README.md"},
			// {text: "数组", link: "/guide/algorithm/Array/README.md"},
			// {text: "链表", link: "/guide/algorithm/ListNode/README.md"},
			// {text: "二叉树", link: "/guide/algorithm/Binarytree/README.md"},
		],
	},
	{
		text: "其它",
		children: [
			{text: "Markdown", link: "/guide/other/markdown"},
			{text: "Mac使用指南", link: "/guide/other/mac/README.md"},
			{text: "Vscode", link: "/guide/frontend/vscode"},
			// {text: "interview", link: "/guide/other/Interview.md"},
			// {text: "Error报错日志", link: "/guide/other/error.md"},
		],
	},
	{ text: "🔗友链", link: "/guide/links/" },
	{ text: "Piano", link: "/guide/piano/README.md" },
]

export default navbarConfig



