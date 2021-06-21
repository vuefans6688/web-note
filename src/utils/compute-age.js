// 获取出生年龄，周岁、月、天、时、分、秒
export function computeAge (time) {
  let nowDate = new Date()
  let nowYear = nowDate.getFullYear()
  let nowMonth = nowDate.getMonth() + 1
  let nowDay = nowDate.getDate()
  let nowHour = nowDate.getHours()
  let nowMinute = nowDate.getMinutes()
  let nowSecond = nowDate.getSeconds()

  let birthDate = new Date(time)
  let birthYear = birthDate.getFullYear()
  let birthMonth = birthDate.getMonth() + 1
  let birthDay = birthDate.getDate()
  let birthHour = birthDate.getHours()
  let birthMinute = birthDate.getMinutes()
  let birthSecond = birthDate.getSeconds()

  let diffSecond = nowSecond - birthSecond
  if (diffSecond < 0) {
    nowMinute -= 1
    diffSecond = 60 - birthSecond + nowSecond
  }

  let diffMinute = nowMinute - birthMinute
  if (diffMinute < 0) {
    nowHour -= 1
    diffMinute = 60 - birthMinute + nowMinute
  }

  let diffHour = nowHour - birthHour
  if (diffHour < 0) {
    nowDay -= 1
    diffHour = 24 - birthHour + nowHour
  }

  let diffDay = nowDay - birthDay
  if (diffDay < 0) {
    nowMonth -= 1
    diffDay = getDaysOfMonth(time) - birthDay + nowDay
  }

  let diffMonth = nowMonth - birthMonth
  if (diffMonth < 0) {
    nowYear -= 1
    diffMonth = 12 - birthMonth + nowMonth
  }

  let diffYear = nowYear - birthYear
  if (diffYear < 0) {
    diffYear = 0
  }

  return (diffYear > 0 ? diffYear + '岁 ' : '') +
    (diffMonth > 0 ? diffMonth + '月 ' : '') +
    (diffDay > 0 ? diffDay + '天 ' : '') +
    (diffHour > 0 ? diffHour + '时 ' : '') +
    (diffMinute > 0 ? diffMinute + '分 ' : '') +
    (diffSecond > 0 ? diffSecond + '秒 ' : '')
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