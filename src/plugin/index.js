// axios插件模块
import axios from 'axios'

const httpConfig = {}
httpConfig.install = Vue => {
  // 接口基准地址
  axios.defaults.baseURL = 'https://autumnfish.cn/heimamm_server'
  // 添加实例方法
  Vue.prototype.$http = axios
}

export default httpConfig
