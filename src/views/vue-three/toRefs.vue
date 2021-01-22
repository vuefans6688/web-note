<template>
  <div class="toRefs">
    <h1>{{ name }}</h1>
  </div>
</template>

<script>
import { toRefs } from '@vue/composition-api'
export default {
  setup () {
    const obj = reactive({ name: '皮' })
    setTimeout(() => {
      obj.name = '波'
    }, 2000)
    const { name } = toRefs(obj)
    return {
      name
    }
  }
}
</script>

<style lang="scss" scoped>

</style>