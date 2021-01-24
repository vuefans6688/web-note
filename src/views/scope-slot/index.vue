<template>
  <div class="scope-slot">
    <list v-slot="slotProps">
      <div>{{ slotProps.name }}</div>
    </list>
  </div>
</template>

<script>
import list from './list'
export default {
  components: { list }
}
</script>

<style lang="scss" scoped>

</style>