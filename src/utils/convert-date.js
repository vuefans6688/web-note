// 对Date()对象的扩展，将Date转化为指定格式的String
// 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用1-2个占位符，
// 年(y)可以用1-4个占位符，毫秒(S)只能用1个占位符(是1-3位的数字)
// 例子：
// new Date().formatterTime("yyyy-MM-dd hh:mm:ss.S")  ==> 2006-07-02 08:09:04.423
// new Date().formatterTime("yyyy-M-d h:m:s.S")       ==> 2006-7-2 8:9:4.18
export function formatterTime (date, formatter) {
  const config = {
    'M+': date.getMonth() + 1,                   // 月份
    'd+': date.getDate(),                        // 日
    'h+': date.getHours(),                       // 小时
    'm+': date.getMinutes(),                     // 分
    's+': date.getSeconds(),                     // 秒
    'S+': date.getMilliseconds(),                // 毫秒
    'q+': Math.floor((date.getMonth() + 3) / 3)  // 季度
  }
  if (/(y+)/.test(formatter)) {
    formatter = formatter.replace(RegExp.$1, (`${date.getFullYear()}`).substr(4 - RegExp.$1.length))
  }
  Object.keys(config).forEach(key => {
    if (new RegExp(`(${key})`).test(formatter)) {
      if (key === 'S+') {
        const start = `00${config[key]}`.length - 3
        formatter = formatter.replace(RegExp.$1, `00${config[key]}`.substr(start, RegExp.$1.length))
      } else {
        formatter = formatter.replace(RegExp.$1, (RegExp.$1.length === 1) ? (config[key]) : ((`00${config[key]}`).substr((`${config[key]}`).length)))
      }
    }
  })
  return formatter
}

export function dateFilter (date, format = 'yyyy-MM-dd') {
  if (!date) {
    return ''
  }
  if (typeof date === 'object') {
    return date.formatterTime('yyyy-MM-dd')
  }
  const timeStamp = parseInt(date, 10)
  if (isNaN(timeStamp)) {
    return ''
  }
  return formatterTime(new Date(timeStamp), format)
}

// 将日期yyyy-MM-dd转化成日期对象(支持8位、14位) 
export function dateChange (value) {
  let label = ''
  value = value.toString()
  if (value.length === 8) {
    label = value.replace(/^(\d{4})(\d{2})(\d{2})$/, '$1-$2-$3')
  } else if (value.length === 14) {
    label = value.replace(/^(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})$/, '$1-$2-$3 $4:$5:$6')
  } else {
    return dateFilter(new Date())
  }
  return label
}
