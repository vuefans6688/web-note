<template>
  <div class="off-spring">
    <off-spring>
      <template v-slot:heading>
        <h1>element-ui组件</h1>
      </template>
      <template v-slot:sub-heading>
        <p>这里是element-ui的部分组件介绍</p>
      </template>
      <template v-slot:footer-text>
        <p>出品@小土豆</p>
      </template>
    </off-spring>
  </div>
</template>

<script>
import OffSpring from './off-spring'
export default {
  components: { OffSpring }
}
</script>

<style lang="scss" scoped>

</style>