<template>
  <div class="scope-slot">
    <list v-slot="slotProps">
      <div>{{ slotProps.item }}</div>
    </list>
  </div>
</template>

<script>
import List from './list'
export default {
  components: { List }
}
</script>

<style lang="scss" scoped>

</style>