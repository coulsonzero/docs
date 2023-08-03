import type {SidebarConfig} from "@vuepress/theme-default"

const sidebarConfig = {
	"/guide/algorithm/Array/": [
		{
			text: "Array",
			title: "Array",
			collapsable: false,
			sidebarDepth: 1,
			children: ["26. 删除有序数组中的重复项.md"],
		},
	],
	"/guide/algorithm/Binarytree/": [
		{
			text: "Binarytree",
			title: "Binarytree",
			collapsable: false,
			sidebarDepth: 1,
			children: ["README.md"],
		},
	],
	"/guide/algorithm/Interview/": [
		{
			text: "Interview",
			title: "Interview",
			collapsable: false,
			sidebarDepth: 1,
			children: ["README.md"],
		},
	],
	"/guide/algorithm/ListNode/": [
		{
			text: "List Node",
			title: "List Node",
			collapsable: false,
			sidebarDepth: 1,
			children: [
				"README.md",
				"ListNode.md",
				"deleteDuplicates.md",
				"deleteNode.md",
				"hasCycle.md",
				"isPalindrome.md",
				"mergeTwoSortedLists.md",
				"removeNthFromEnd.md",
				"reverseList.md",
			],
		},
	],
	"/guide/algorithm/Sort/": [
		{
			text: "Sort",
			title: "Sort",
			collapsable: false,
			sidebarDepth: 1,
			children: ["README.md"],
		},
	],
	"/guide/algorithm/String/": [
		{
			text: "String",
			title: "String",
			collapsable: false,
			sidebarDepth: 1,
			children: ["README.md", "387.字符串中的第一个唯一字符.md"],
		},
	],
	"/guide/frontend/echarts/": [
		{
			text: "Echarts",
			title: "Echarts",
			collapsable: false,
			sidebarDepth: 1,
			children: ["README.md", "EchartsExample.md", "bar.md", "echartsBase.md", "event.md", "gauge.md", "line.md", "lines.md", "pie.md", "radar.md", "scatter.md"],
		},
	],
	"/guide/frontend/react/": [
		{
			text: "React",
			title: "React",
			collapsable: false,
			sidebarDepth: 1,
			children: ["README.md", "nextjs.md", "dva.md", "antd/"],
		},
	],
	"/guide/frontend/react/antd": [
		{
			text: "antd",
			title: "antd",
			collapsable: false,
			sidebarDepth: 1,
			children: ["README.md", "table.md"],
		},
	],
	"/guide/other/mac/": [
		{
			text: "Mac",
			title: "Mac",
			collapsable: false,
			sidebarDepth: 1,
			children: [
				"README.md",
				"catport.md",
				"gestures.md",
				"homebrew.md",
				"hosts.md",
				"idealicence.md",
				"mysql.md",
				"nslookup.md",
				"openidea.md",
				"rosetta.md",
				"shortcuts.md",
				"software.md",
				"ssh.md",
				"terminal.md",
				"wifipassword.md",
				"codeTerminal.md",
				"hardDiskEncryption.md",
				"修改hosts文件加速GitHub访问.md",
			],
		},
	],
	"/guide/backend/": [
		{
			text: "Backend",
			title: "Backend",
			collapsable: false,
			sidebarDepth: 1,
			children: ["c.md", "c++.md", "django.md", "flask.md", "go.md", "java.md", "rust.md", "kotlin.md", "pyside6.md", "python.md", "swift.md", "gin.md", "gorm.md", "pyside6.md"],
		},
	],
	"/guide/frontend/": [
		{
			text: "Frontend",
			title: "Frontend",
			collapsable: false,
			sidebarDepth: 1,
			children: [
				"html.md",
				"css.md",
				"scss.md",
				"javascript/",
				"typescript.md",
				"react/",
				"vue.md",
				"echarts/",
				"canvas.md",
				"eslint.md",
				"jquery.md",
				"vscode.md",
			]
		},
	],
	"/guide/frontend/javascript/": [
		{
			text: "JavaScript",
			title: "JavaScript",
			collapsable: false,
			sidebarDepth: 1,
			children: ["README.md"],
		},
	],
	"/guide/operations/": [
		{
			text: "Operations",
			title: "Operations",
			collapsable: false,
			sidebarDepth: 2,
			children: ["sql.md", "mysql.md", "linux.md", "mongodb.md", "redis.md", "shell.md", "docker.md"],
		},
	],
	"/guide/backend/HarmonyOS/": [
		{
			text: "HarmonyOS",
			title: "HarmonyOS",
			collapsable: false,
			sidebarDepth: 2,
			children: ["README.md"],
		},
	],
	"/guide/other/": [
		{
			text: "Other",
			title: "Other",
			collapsable: false,
			sidebarDepth: 1,
			children: ["error.md", "markdown.md"],
		},
	],
}

export default sidebarConfig
