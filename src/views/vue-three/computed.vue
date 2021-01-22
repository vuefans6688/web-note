<template>
  <div class="computed">
    <span @click="handleClick">{{ count }}</span>
    <p>{{ countAddFive }}</p>
  </div>
</template>

<script>
// computed计算属性
import { ref, computed } from '@vue/composition-api'
export default {
  setup () {
    const count = ref(0)

    const handleClick = () => {
      count.value += 1
    }

    // const countAddFive = computed(() => {
    //   return count.value + 5
    // })

    let countAddFive = computed({
      get () {
        return count.value + 5
      },
      set (param) {
        count.value = param - 5
      }
    })

    setTimeout(() => {
      countAddFive.value = 100
    }, 2000)

    return {
      count,
      handleClick,
      countAddFive
    }
  }
}
</script>

<style lang="scss" scoped>

</style>