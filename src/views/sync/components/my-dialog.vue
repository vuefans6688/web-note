<template>
  <div class="my-dialog" v-if="show">
    <p>默认初始值是{{ show }}, 所以是显示的</p>
    <el-button @click.stop="closeDialog" type="danger">关闭</el-button>
  </div>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    closeDialog () {
      this.$emit('update:show', false)  // 触发input事件，并传入新值
    }
  }
}
</script>

<style lang="scss" scoped>
.my-dialog {
  text-align: center;
  padding: 20px 5px;
  box-shadow: 1px 1px 5px #ccc;
  border: 1px solid #ddd;
  margin-bottom: 10px;
  p {
    color: #f00;
    font-size: 20px;
  }
}
</style>