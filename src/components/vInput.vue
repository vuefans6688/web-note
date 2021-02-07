<template>
  <div class="input-enter">
    <label class="nick">昵称: </label>
    <input type="text" :value="value" @input="updateValue($event)" placeholder="请输入昵称">
  </div>
</template>

<script>
export default {
  // 接收父组件传过来的value
  props: {
    value: {
      type: [String, Number],
      default: ''
    }
  },
  methods: {
    // 监听input输入事件
    updateValue (event) {
      // 触发父组件的自定义事件
      // target事件属性可返回事件的目标节点(触发该事件的节点)，如生成事件的元素、文档或窗口
      // 将input的value值传给父组件
      this.$emit('input', event.target.value)
    }
  }
}
</script>

<style lang="scss" scoped>
.input-enter {
  margin-top: 20px;
  margin-left: 30px;
  color: #666;
  input {
    width: 300px;
    height: 24px;
    line-height: 24px;
    padding: 4px 5px;
    border-radius: 5px;
  }
}
</style>