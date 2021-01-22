<template>
  <div class="ref">
    <h1>{{ name }}</h1>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api'
export default {
  // ref响应式引用
  // ref处理基础类型的数据
  setup () {
    let name = ref('波')
    setTimeout(() => {
      name.value = '皮'
    }, 2000)
    return { 
      name 
    }
  }
}
</script>

<style lang="scss" scoped>

</style>