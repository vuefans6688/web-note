import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import getters from './getters'
import actions from './actions'
import cart from './modules/cart'

Vue.use(Vuex)

const state = {
  count: 0
}

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions,
  modules: {
    cart
  }
})