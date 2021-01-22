// 初始化数据
const state = {
  // 商品列表
  shopList: [
    {
      id: 11,
      name: '鱼香肉丝',
      price: 12.50
    }, 
    {
      id: 22,
      name: '宫保鸡丁',
      price: 14.60
    }, 
    {
      id: 34,
      name: '干锅包菜',
      price: 13.60
    }, 
    {
      id: 47,
      name: '米饭',
      price: 2.00
    }
  ],
  // 添加到购物车的商品
  goodsList: []
}

// getter 抛出去的数据
const getters = {
  // 商品列表
  products(state) {
    return state.shopList
  },
  // 购物车的列表
  cartProducts(state) {
    return state.goodsList.map(({ id, num }) => {
      let product = state.shopList.find(item => item.id === id)
      return { ...product, num }
    })
  },
  // 计算总价
  totalPrice(state, getters) {
    return getters.cartProducts.reduce((total, item) => {
      return total += item.num * item.price
    }, 0)
  },
  // 计算总数量
  totalNum(state, getters) {
    return getters.cartProducts.reduce((pre, cur) => {
      return pre += cur.num
    }, 0)
  }
}

// mutation
const mutations = {
  // 添加到购物车操作
  add(state, { id }) {
    let record = state.goodsList.find(item => item.id === id)
    if (!record) {
      state.goodsList.push({
        id,
        num: 1
      })
    } else {
      record.num++
    }
  },
  // 清除购物车
  clearAll(state) {
    state.goodsList = []
  },
  // 删除购物车的指定的商品
  del(state, product) {
    state.goodsList.forEach((item, index) => {
      if (item.id === product.id) {
        // 找到index的下标值
        state.goodsList.splice(index, 1)
      }
    })
  }
}

// action 异步的操作
const actions = {
  // 添加到购物车操作
  addToCart({ commit }, product) {
    commit('add', { id: product.id })
  },
  // 清除购物车
  clearAllCart({ commit }) {
    commit('clearAll')
  },
  // 删除购物车的指定的商品
  delProduct({ commit }, product) {
    commit('del', product)
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
