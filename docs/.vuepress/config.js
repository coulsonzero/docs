module.exports = {
	base: "/docs/",
	title: "CoulsonZero",
	description: "文档管理中心",
	port: 80,
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
		navbar: [
			{text: "主页", link: "/"},
			{text: "Bing", link: "https://cn.bing.com"},
			{
				text: "前端",
				children: [
					{text: "HTML5", link: "/guide/frontend/html"},
					{text: "CSS3", link: "/guide/frontend/css"},
					{text: "JavaScript(ES6)", link: "/guide/frontend/javascript"},
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
							{text: "Vue", link: "https://v3.cn.vuejs.org/"},
							{text: "React", link: "/guide/frontend/react"},
						],
					},
					{
						text: "web库",
						children: [
							{text: "Echarts", link: "/guide/frontend/echarts/echarts"},
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
						children: [
							{text: "VuePress", link: "https://v2.vuepress.vuejs.org/zh/"},
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
							{text: "Django", link: "https://www.djangoproject.com/"},
							{text: "flask", link: "https://flask.net.cn"},
						],
					},
					{
						text: "类库",
						children: [{text: "pyside6", link: "/guide/backend/pyside6"}],
					},
				],
			},
			{
				text: "运维",
				children: [
					{text: "SQL", link: "/guide/operations/sql"},
					{text: "linux", link: "/guide/operations/linux"},
					{text: "shell", link: "/guide/operations/shell"},
					{text: "MongoDB", link: "/guide/operations/mongodb"},
				],
			},
			{
				text: "算法",
				children: [
					{
						text: "Leetcode算法",
						link: "https://coulsonzero.github.io/leetcode-1/",
					},
					{text: "字符串", link: "/guide/algorithm/String/README.md"},
					{text: "链表", link: "/guide/algorithm/ListNode/README.md"},
				],
			},
			{
				text: "其它",
				children: [
					{text: "Markdown", link: "/guide/other/markdown"},
					{text: "Mac使用指南", link: "/guide/other/mac/README.md"},
				],
			},
		],
		// 可折叠的侧边栏
		/*
		sidebar: {
			"/": [
				{
					text: "前端",
					// 可折叠
					collapsible: true,
					children: [
						"/guide/frontend/html.md",
						"/guide/frontend/css",
						"/guide/frontend/javascript",
						"/guide/frontend/echarts/echarts",
						"/guide/frontend/jquery",
					],
				},
				{
					text: "后端",
					collapsible: true,
					children: [
						"/guide/backend/python",
						"/guide/backend/java",
						"/guide/backend/go",
						"/guide/backend/swift",
					],
				},
				{
					text: "运维",
					collapsible: true,
					children: [
						"/guide/operations/sql",
						"/guide/operations/linux",
						"/guide/operations/shell",
						"/guide/operations/markdown"
					],
				},
			],
		},
		*/
	},
	// 搜索栏
	plugins: ["@vuepress/plugin-search"],
};