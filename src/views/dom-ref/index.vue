<template>
  <div class="dom-ref">
    <!-- ref实际是获取dom节点/组件引用的语法 -->
    <common-item ref="common" />
  </div>
</template>

<script>
import CommonItem from './common-item'
export default {
  components: { CommonItem },
  mounted () {
    this.$refs.common.sayHello()
  }
}
</script>

<style lang="scss" scoped>

</style>