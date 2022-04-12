/**
 * 日期格式化
 */

class DateTime {
    constructor(root, {format=false, displayTime=false, displayWeek=false} = {}) {
        this.root = root,
        this.format = format,
        this.displayTime = displayTime,
        this.displayWeek = displayWeek
        this.setTime()
    }
	getTime() {
		const d = new Date()
		let [month, day, year] = [d.getMonth() + 1, d.getDate(), d.getFullYear()]
		let [hours, mins, secs] = [d.getHours(), d.getMinutes(), d.getSeconds()]
		let weekDay = ["日", "一", "二", "三", "四", "五", "六"]
		let week = ""
		// 格式化日期时间
		if (this.format) {
			month = month < 10 ? `0${month}` : month
			day = day < 10 ? `0${day}` : day
			hours = hours < 10 ? `0${hours}` : hours
			mins = mins < 10 ? `0${mins}` : mins
			secs = secs < 10 ? `0${secs}` : secs
			week = hours < 12 ? `AM` : `PM`
		}

		let date = `${year}-${month}-${day}`
		let time = `${hours}:${mins}:${secs}`

		// 1. 默认日期： 年-月-日
		let res = date

		// 2. 显示具体时间：时-分-秒
		if (this.displayTime) res = `${date} ${time}`

		// 3. 显示上午还是下午，星期几
		if (this.displayWeek) {
			res = `${date} ${time} ${week} 星期${weekDay[d.getDay()]}`
		}

		return res
        // document.querySelector(root).innerHTML = res
	}
    setTime() {
        const dateTimeLabel = document.createElement('div')
		document.body.appendChild(dateTimeLabel)
		dateTimeLabel.id = this.root

		setInterval(() => {
			dateTimeLabel.innerHTML = this.getTime()
		}, 1000)

    }
}
// module.exports = {DateTime}
// exports.getTime() {}
export default DateTime

