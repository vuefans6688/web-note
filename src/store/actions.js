import { INCREMENT, DECREMENT } from './mutation-types.js'

const actions = {
  [INCREMENT]({commit}) {
    commit(INCREMENT)
  },
  [DECREMENT]({commit}) {
    commit(DECREMENT)
  }
}

export default actions