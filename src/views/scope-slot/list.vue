<template>
  <div class="list">
    <slot v-for="item in list" :item="item" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: ['张三', '李四', '王五', '赵六']
    }
  }
}
</script>

<style lang="scss" scoped></style>