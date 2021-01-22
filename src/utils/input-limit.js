// 控制只能输入整数
export function intLimit(value, boundary = 0) {
  value = value.toString()
  const regArr = [
    ['^0(\\d+)$', '$1'],   // 禁止输入整数部分两位以上，但首位为0
    ['[^\\d]+', '']        // 禁止输入任何非数字
  ]
  regArr.forEach(item => {
    const matched = new RegExp(item[0])
    value = value.replace(matched, item[1])
  })
  if (boundary) {
    return parseInt(value, 10) > boundary ? boundary.toString() : value
  }
  return value
}

// 控制小数输入并限制位数
export function floatLimit(value, bit) {  // 控制输入价格
  value = value.toString()
  const regArr = [
    ['^0(\\d+)$', '$1'],        // 禁止输入整数部分两位以上，但首位为0
    ['[^\\d\\.]+', ''],         // 禁止输入任何非数字和点
    ['\\.(\\d?)\\.+', '.$1'],   // 禁止输入两个以上的点
    [`^(\\d+\\.\\d{${bit}}).+`, '$1']    // 禁止输入小数点后n位以上
  ]
  regArr.forEach(item => {
    const matched = new RegExp(item[0])
    value = value.replace(matched, item[1])
  })
  return value
}

