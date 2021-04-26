<template>
  <div class="recursion">
    <ul>
      <tree-item
        v-for="item in dataList"
        :tree-data="item"
        :key="item.id"
      ></tree-item>
    </ul>
  </div>
</template>

<script>
import { treeData } from './detail'
import TreeItem from './components/tree-item'
export default {
  components: {
    TreeItem
  },
  data () {
    return {
      dataList: []
    }
  },
  methods: {
    loadData () {
      return treeData
    }
  },
  created () {
    this.dataList = this.loadData()
  }
}
</script>

<style lang="scss" scoped>
</style>