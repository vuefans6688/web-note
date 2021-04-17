import Vue from 'vue'

export const store = Vue.observable({
  count: 0,
  name: '四季更替'
})

export const mutation = {
  increment (count) {
    store.count = count + 1
  },
  decrement (count) {
    store.count = count - 1
  },
  changeName (name) {
    store.name = name
  }
}
