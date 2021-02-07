<template>
  <div class="area-enter">
    <label class="content">留言内容: </label>
    <!-- ref被用来给元素或子组件注册引用信息，引用信息将会注册在父组件的$refs对象上 -->
    <!-- 如果在普通的dom元素上使用，引用就指向dom元素，如果用在子组件上，引用就指向组件实例 -->
    <textarea type="text" ref="message" :value="value" @input="updateValue($event)" placeholder="请输入留言内容"></textarea>
  </div>
</template>

<script>
export default {
  // 接收父组件传过来的value
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  methods: {
    // 监听input输入事件
    updateValue (event) {
      this.$emit('input', event.target.value)
    },
    focus () {
      // 一个对象，持有注册过ref特性的所有dom元素和组件实例
      this.$refs.message.focus()
    }
  }
}
</script>

<style lang="scss" scoped>
.area-enter {
  display: flex;
  justify-content: center;
  margin-top: 30px;
  color: #666;
  .content {
    margin-right: 5px;
  }
  textarea {
    width: 300px;
    height: 100px;
    padding: 4px 5px;
    border-radius: 5px;
  }
}
</style>