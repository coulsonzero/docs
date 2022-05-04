const sortFn = (a, b) => {
    /*
	const lastA = a.filename[0]
	const lastB = b.filename[0]

	return lastA > lastB ? 1 : -1
    */

    return a.filename.toLowerCase().charAt(0) > b.filename.toLowerCase().charAt(0) ? 1 : -1
}

module.exports = [
	["@vuepress/plugin-search"],
	["demo-block"],
	[
		"vuepress-plugin-auto-sidebar",
		{
			output: {
				filename: "config/sidebarConf",
			},
			sort: {
				mode: "custom",
				fn: sortFn,
			},
			git: {
				trackStatus: "all",
			},
		},
	],
]
