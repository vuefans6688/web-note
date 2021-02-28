<template>
  <div class="global-filter">
    <el-input v-model="message" size="small"></el-input>
    <p>{{ message | capitalize }}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      message: '全局过滤器'
    }
  }
}
</script>

<style lang="scss" scoped>
.global-filter {
  margin-top: 20px;
  margin-left: 20px;
  .el-input {
    width: 280px;
  }
}
</style>