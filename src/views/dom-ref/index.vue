<template>
  <div class="dom-ref">
    <!-- ref用来获取dom节点/组件引用的语法 -->
    <common-item ref="commons" />
  </div>
</template>

<script>
import CommonItem from './components/common-item'
export default {
  components: {
    CommonItem
  },
  mounted () {
    this.$refs.commons.handleClick()
  }
}
</script>

<style lang="scss" scoped>
</style>