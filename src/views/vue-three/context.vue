<template>
  <div class="context">
    <h1 @click="handleClick">子组件</h1>
  </div>
</template>

<script>
export default {
  setup (props, context) {
    const { attrs, slots, emit } = context
    // console.log(attrs.app)  // None-Props属性
    // console.log(slots.default())
    function handleClick() {
      emit('change')
    }
    return {
      handleClick
    }
  }
}
</script>

<style lang="scss" scoped>

</style>