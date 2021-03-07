import { INCREMENT, DECREMENT } from './mutation-types'

export default {
  [INCREMENT] (state) {
    state.count++
  },
  [DECREMENT] (state) {
    state.count--
  },
  // 加入购物车
	ADD_TO_CART (state, { id }) {
		let record = state.added.find(item => item.id === id )
    if (!record) {
      state.added.push({
        id,
        num: 1
      })
    } else {
      record.num++
    }
	},
  // 购物车商品数量改变
  NUM_CHANGE (state, { id, value }) {
    state.added.forEach(item => {
      if (item.id === id){
        item.num = value
      }
    })
  },

  // 删除购物车的指定的商品
  DELETE (state, product) {
    state.added.forEach((item, index) => {
      if(item.id === product.id) {
        // 找到added的下标值
        state.added.splice(index, 1)
      }
    })
  },
  // 清空购物车
  CLEAR (state) {
    state.added = []
  }
}