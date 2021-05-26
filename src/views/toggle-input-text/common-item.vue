<template>
  <div class="common-item">
    <h3>{{ title }}</h3>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: '你好，世界!'
    }
  }
}
</script>

<style lang="scss" scoped>
.common-item {
  text-align: center;
  h3 {
    color: #777;
  }
}
</style>