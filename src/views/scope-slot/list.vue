<template>
  <div class="list">
    <slot v-for="name in names" :name="name" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      names: ['张三', '李四', '王五', '赵六']
    }
  }
}
</script>

<style lang="scss" scoped></style>