<template>
  <div class="provide-inject">
    <h1 @click="handleClick">{{ name }}</h1>
  </div>
</template>

<script>
import { inject } from '@vue/composition-api'
export default {
  setup () {
    
    // const name = inject('name', '皮皮')
    const name = inject('name')

    const changeName = inject('changeName')

    function handleClick() {
      changeName('马化云')
    }

    return {
      name,
      handleClick
    }
  }
}
</script>

<style lang="scss" scoped>

</style>