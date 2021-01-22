<template>
  <div class="input-item">
    文本内容: <el-input v-model="message" size="small"></el-input>
    <p>{{ message }}</p>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        message: ''
      }
    }
  }
</script>

<style lang="scss" scoped>
.input-item {
  .el-input {
    width: 280px;
  }
}
</style>