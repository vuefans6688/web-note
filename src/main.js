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
import axios from 'axios'

Vue.use(Vant)
Vue.use(VueCompositionApi)
Vue.use(ElementUI)
Vue.config.productionTip = false

Vue.filter('dateFilter', (value, pattern = 'YYYY-MM-DD HH:mm:ss') => {
  return moment(value).format(pattern)
})

Vue.prototype.$http = axios

new Vue({  
  router,
  store,
  render: h => h(App),
}).$mount('#app')
