// 计算当前月份的天数
export function getCurrentMonthDays (month, year) {
  const largeMonth = [1, 3, 5, 7, 8, 10, 12]
  if (largeMonth.includes(month)) {
    return 31
  } else if (month === 2) {
    return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0 ? 29 : 28
  } else {
    return 30
  }
}

export function calculateFromBirth (birthDate) {
  if (!birthDate) {
    return ''
  }
  let birthYear = birthDate.substr(0, 4)
  let birthMonth = birthDate.substr(5, 2)
  let birthDay = birthDate.substr(8, 2)
  let nowYear = new Date().getFullYear() - birthYear
  let nowMonth = new Date().getMonth() + 1 - birthMonth
  let nowDay = new Date().getDate() - birthDay
  // 获取当前月天数
  let currentDay = getCurrentMonthDays(birthMonth, birthYear)
  if (nowDay < 0) {
    nowMonth -= 1
    nowDay += currentDay
  }
  if (nowMonth < 0) {
    nowYear -= 1
    nowMonth += 12
  }
  if (nowYear > 0) {
    return `${nowYear}岁`
  } else if (nowMonth > 0) {
    return `${nowMonth}月`
  }
  return `${nowDay}天`
}



