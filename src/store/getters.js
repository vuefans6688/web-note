const getters = {
  count (state) {
    return state.count
  },
  // 商品列表
  goodList (state) {
    return state.good_list.map(item => {
      return {
        id: item.id,
        name: item.name,
        price: item.price.toFixed(2)
      }
    })
  },
  // 购物车的列表
  cartProducts (state) {
    return state.added.map(({ id, num }) => {
      let product = state.good_list.find(item => item.id === id )
      return {
        id: product.id,
        name: product.name,
        price: product.price.toFixed(2),
        num,
        total_num: (product.price * num).toFixed(2)
      }
    })
  },
  // 计算总价
  totalPrice (state, getters) {
    let total = 0
    getters.cartProducts.forEach(item => total += item.price * item.num)
    return total.toFixed(2)
  },
  // 计算总数量
  totalNum (state, getters) {
    let total = 0
    getters.cartProducts.forEach(item => total += item.num)
    return total
  }
}

export default getters