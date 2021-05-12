<template>
  <div class="recursion">
    <list :list="datas" />
  </div>
</template>

<script>
import list from './components/list'
import { datas } from './detail'
export default {
  name: 'Recursion',
  components: {
    list
  },
  data () {
    return {
      datas
    }
  },
  methods: {
    loadData () {
      return datas
    }
  },
  created () {
    this.datas = this.loadData()
  }
}
</script>

<style lang="scss" scoped>
</style>