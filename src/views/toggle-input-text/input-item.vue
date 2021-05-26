<template>
  <div class="input-item">
    <label>消息: </label>
    <el-input
      v-model="message"
      size="small"
      placeholder="请输入内容"
    ></el-input>
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
  label {
    color: #666;
  }
  .el-input {
    width: 280px;
  }
}
</style>