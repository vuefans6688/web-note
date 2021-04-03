import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import './element-ui'  // 按需引入element-ui组件
import moment from 'moment'
import VueCompositionApi from '@vue/composition-api'
import Vant from 'vant'
import 'vant/lib/index.css'
// import axios from 'axios'
// 自定义封装axios插件
import httpConfig from './plugin'
import Situation from '@/components/Situation'

Vue.component('situation', Situation)

Vue.use(httpConfig)

// Vue.prototype.$http = axios

Vue.use(Vant)
Vue.use(VueCompositionApi)
Vue.use(ElementUI)

Vue.config.productionTip = false

Vue.filter('dateFilter', (value, pattern = 'YYYY-MM-DD HH:mm:ss') => moment(value).format(pattern))
Vue.filter('capitalize', value => {
  if (!value) {
    return ''
  }
  value = value.toString()
  return value.charAt(0).toUpperCase() + value.slice(1)
})

new Vue({  
  router,
  store,
  render: h => h(App),
}).$mount('#app')
