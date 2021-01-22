<template>
  <div class="visual">
    <p>数量: {{ count }}</p>
    <p>名字: {{ name }}</p>
    <el-button @click="increment(count)" type="primary">+</el-button>
    <el-button @click="decrement(count)" :disabled="count < 1" type="primary">-</el-button>
    <el-button @click="changeName(trueName)" type="success">改变名字</el-button>
  </div>
</template>

<script>
import { store, mutation } from '@/observe'
export default {
  data () {
    return {
      trueName: '小皮'
    }
  },
  computed: {
    count () {
      return store.count
    },
    name () {
      return store.name
    }
  },
  methods: {
    increment: mutation.increment,
    decrement: mutation.decrement,
    changeName: mutation.changeName
  }
}
</script>

<style lang="scss" scoped></style>