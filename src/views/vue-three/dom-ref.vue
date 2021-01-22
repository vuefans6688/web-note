<template>
  <div class="dom-ref">
    <h1 ref="judge">你好，世界！</h1>
  </div>
</template>

<script>
import { onMounted, ref } from '@vue/composition-api'
export default {
  // compositionAPI语法下，通过ref获取真实DOM元素节点
  setup () {
    
    const judge = ref(null)

    onMounted(() => {
      console.log(judge.value)
    })

    return {
      judge
    }
  }
}
</script>

<style lang="scss" scoped>

</style>