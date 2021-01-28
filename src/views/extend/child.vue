<template>
  <div class="child"></div>
</template>

<script>
import parent from './parent'
  export default {
    extends: parent,
    data () {
      return {
        text: '我要继承parent组件'
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>