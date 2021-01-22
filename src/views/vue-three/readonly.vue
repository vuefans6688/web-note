<template>
  <div class="readonly">
    <h1 v-for="item in arr">{{ item }}</h1>
  </div>
</template>

<script>
import { reactive, readonly } from '@vue/composition-api'
export default {
  setup () {
    const arr = reactive(['张三', '李四', '王五', '赵六'])
    const copyArr = readonly(arr)
    setTimeout(() => {
      arr.splice(2, 0, '皮波')
      copyArr[0] = '皮卡丘'
    }, 2000)
    return {
      arr,
      copyArr
    }
  }
}
</script>

<style lang="scss" scoped>

</style>