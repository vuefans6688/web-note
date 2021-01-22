import Vue from 'vue'

export const store = Vue.observable({
  count: 0,
  name: '皮卡丘'
})

export const mutation = {
  setCount (count) {
    store.count = count
  },
  changeName (name) {
    store.name = name
  }
}
