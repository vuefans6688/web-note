import { INCREMENT, DECREMENT } from './mutation-types.js'

const mutations = {
  [INCREMENT](state) {
    state.count++
  },
  [DECREMENT](state) {
    state.count--
  }
}

export default mutations