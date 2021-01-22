import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import moment from 'moment'
import VueCompositionApi from '@vue/composition-api'

Vue.use(VueCompositionApi)

Vue.use(ElementUI)
Vue.config.productionTip = false

Vue.filter('dateFilter', (value, pattern = 'YYYY-MM-DD HH:mm:ss') => {
  return moment(value).format(pattern)
})

new Vue({  
  router,
  store,
  render: h => h(App),
}).$mount('#app')
