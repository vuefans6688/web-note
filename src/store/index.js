import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import getters from './getters'
import actions from './actions'
import cart from './modules/cart'

Vue.use(Vuex)

const state = {
  count: 0,
  good_list: [
    {
      id: '1',
      name: '护手霜',
      price: 9.9
    }, 
    {
      id: '2',
      name: '植物精华',
      price: 12.8
    }, 
    {
      id: '3',
      name: '洁面乳',
      price: 3.9
    }, 
    {
      id: '4',
      name: '保湿水',
      price: 5.6
    }
  ],
  // 添加到购物车的商品
  added:[]
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