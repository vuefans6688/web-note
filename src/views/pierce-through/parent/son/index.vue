<template>
  <div class="son">
    <p>{{ $attrs["job"] }}, 在$attrs里面只会有props没有注册的属性</p>
    <p>性别---{{ gender }}</p>
    <p>工作---{{ $attrs["job"] }}</p>
    <button @click="send">给爷爷数据</button>
  </div>
</template>

<script>
export default {
  props: {
    gender: {
      type: String,
      default: ''
    }
  },
  methods: {
    send () {
      this.$emit('getSonData', '来自孙子的祝福数据')
    }
  },
  mounted () {
    this.$listeners.isClick()  // 孙子组件调用爷爷组件的方法, isClick
    this.$listeners.add()  // 孙子组件调用爷爷组件的方法, add
  }
}
</script>

<style lang="scss" scoped>
</style>