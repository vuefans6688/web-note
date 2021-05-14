// 获取出生年龄，周岁、月、天、时、分、秒
export function computeAge (time) {
  let date = new Date()
  let year = date.getFullYear()
  let month = date.getMonth() + 1
  let day = date.getDate()
  // let hour = date.getHours()
  // let minute = date.getMinutes()
  // let second = date.getSeconds()

  let birthDate = new Date(time)
  let birthYear = birthDate.getFullYear()
  let birthMonth = birthDate.getMonth() + 1
  let birthDay = birthDate.getDate()
  // let birthHour = birthDate.getHours()
  // let birthMinute = birthDate.getMinutes()
  // let birthSecond = birthDate.getSeconds()

  // let nowSecond = second - birthSecond
  // if (nowSecond < 0) {
  //   minute -= 1
  //   nowSecond = 60 - birthSecond + second
  // }

  // let nowMinute = minute - birthMinute
  // if (nowMinute < 0) {
  //   hour -= 1
  //   nowMinute = 60 - birthMinute + minute
  // }

  // let nowHour = hour - birthHour
  // if (nowHour < 0) {
  //   day -= 1
  //   nowHour = 24 - birthHour + hour
  // }

  let nowDay = day - birthDay
  if (nowDay < 0) {
    month -= 1
    nowDay = getDaysOfMonth(time) - birthDay + day
  }

  let nowMonth = month - birthMonth
  if (nowMonth < 0) {
    year -= 1
    nowMonth = 12 - birthMonth + month
  }

  let nowYear = year - birthYear
  if (nowYear < 0) {
    nowYear = 0
  }

  // return (nowYear > 0 ? nowYear + '岁 ' : '') +
  //   (nowMonth > 0 ? nowMonth + '月 ' : '') +
  //   (nowDay > 0 ? nowDay + '天 ' : '') +
  //   (nowHour > 0 ? nowHour + '时 ' : '') +
  //   (nowMinute > 0 ? nowMinute + '分 ' : '') +
  //   (nowSecond > 0 ? nowSecond + '秒 ' : '')

  return (nowYear > 0 ? nowYear + '岁 ' : '')
}

// 获取当月的天数
export function getDaysOfMonth (birthDate) {
  const date = new Date(birthDate)
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  // 判断2月份的天数
  if (month === 2) {
    // 判断是否为闰年
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0) ? 29 : 28
  } else if (month === 1 || month === 3 || month === 5 ||
    month === 7 || month === 8 || month === 10 || month === 12) {
    return 31
  } else {
    return 30
  }
}