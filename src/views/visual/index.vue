<template>
  <div class="visual">
    <p>数量: {{ count }}</p>
    <p>名字: {{ name }}</p>
    <el-button @click="setCount(count + 1)" type="primary">+</el-button>
    <el-button @click="setCount(count - 1)" :disabled="count < 1" type="primary">-</el-button>
    <el-button @click="changeName(name2)" type="success">改变名字</el-button>
  </div>
</template>

<script>
import { store, mutation } from '@/observe'
export default {
  data () {
    return {
      name2: '皮大爷'
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
    setCount: mutation.setCount,
    changeName: mutation.changeName
  }
}
</script>

<style lang="scss" scoped></style>