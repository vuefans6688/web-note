import axios from 'axios'

export function enclosurePromise (url = '', data = {}, type = 'GET') {
  return new Promise((resolve, reject) => {
    // 定义promise对象
    let promise
    // 判断请求的方式
    if (type === 'GET') {
      // 拼接请求字符串
      let strings = ''
      Object.keys(data).forEach(key => strings += key + '=' + data[key] + '&')
      // 过滤url最后的&
      if (strings !== '') {
        strings = strings.substring(0, strings.lastIndexOf('&'))
        // 完整路径
        url += '?' + strings
      }
      // 发送get请求
      promise = axios.get(url)
    } else {
      // 发送post请求
      promise = axios.post(url, data)
    }
    // 返回请求的结果
    promise.then(response => {
      resolve(response.data)
    }).catch(error => {
      reject(error)
    })
  })
}