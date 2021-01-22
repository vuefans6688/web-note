<template>
  <div class="life-cycle">
    <h1 @click="handleClick">{{ name }}</h1>
  </div>
</template>

<script>
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted, 
  onRenderTracked, onRenderTriggered, ref } from '@vue/composition-api'
export default {
  setup () {

    const name = ref('皮卡丘')

    function handleClick() {
      name.value = '皮波波'
    }

    onBeforeMount(() => {
      console.log('onBeforeMount')
    })

    onMounted(() => {
      console.log('onMounted')
    })

    onBeforeUpdate(() => {
      console.log('onBeforeUpdate')
    })

    onUpdated(() => {
      console.log('onUpdated')
    })

    onBeforeUnmount(() => {
      console.log('onBeforeUnmount')
    })

    onUnmounted(() => {
      console.log('onUnmounted')
    })

    // 每次渲染后重新收集响应式依赖
    // onRenderTracked(() => {
    //   console.log('onRenderTracked')
    // })

    // 每次触发页面重新渲染时自动执行
    // onRenderTriggered(() => {
    //   console.log('onRenderTriggered')
    // })

    return {
      name,
      handleClick
    }
  }
}
</script>

<style lang="scss" scoped>

</style>