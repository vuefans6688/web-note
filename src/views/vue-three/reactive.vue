<template>
  <div class="reactive">
    <h1>{{ obj.name }}</h1>
  </div>
</template>

<script>
import { reactive } from '@vue/composition-api'
export default {
  // reactive处理非基础类型的数据
  setup () {
    const obj = reactive({ name: '皮' })
    setTimeout(() => {
      obj.name = '波'
    }, 2000)
    return { obj }
  }
}
</script>

<style lang="scss" scoped>

</style>