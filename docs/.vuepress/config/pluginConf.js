module.exports = [
	["@vuepress/plugin-search"],
	["demo-block"],
	[
		"vuepress-plugin-auto-sidebar",
		{
			output: {
				filename: "config/sidebarConf"
			},
			sort: {
				mode: "asc",
				readmeFirst: true,
				readmeFirstForce: false
			},
			git: {
				trackStatus: "all"
			},
			ignore: [
				{
					menu: "/guide/other/",
					regex: "Inter*"
				}
			]
		}
	]
]
