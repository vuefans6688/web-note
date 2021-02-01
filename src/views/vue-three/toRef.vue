<template>
  <div class="toRef">
    <h1>{{ age }}</h1>
  </div>
</template>

<script>
import { toRef, reactive } from '@vue/composition-api'
export default {
  setup () {
    const obj = reactive({ name: '皮' })
    const age = toRef(obj, 'age')
    setTimeout(() => {
      obj.age = 20
    }, 2000)
    return { age }
  }
}
</script>

<style lang="scss" scoped>

</style>