import axios from 'axios'

const instance = axios.create({
  baseURL: '/api'  // 基础路径
})

instance.interceptors.request.use(
  config => {
    if (config.token) {
      const token = localStorage.getItem('token')
      if (token) {
        // config.headers.Authorization = `Bearer ${token}`
        // config.headers['Authorization'] = token
        config.headers.Authorization = token
      }
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    return Promise.reject(error)
  }
)

export default function request (url, data = {}, method = 'post') {
  return new Promise((resolve, reject) => {
    const options = {
      url,
      method
    }
    method === 'get' ? options.params = data : options.data = data
    instance(options).then(response => {
      if (!response.data.code) {
        resolve(response)
      }
      if (response.data.code === 200) {
        resolve(response.data)
      } else if (response.data.code === 401 || response.data.code === 403) {
        alert('请先登录')
        window.location.href = '/login'
      } else {
        alert('页面请求失败，请重新再试')
      }
    }).catch(error => {
      reject(error)
    })
  })
}