<template>
  <div class="parent">
    <div class="property">
      <son v-bind="$attrs" v-on="$listeners" />
    </div>
    <div class="name">{{ name }}</div>
    <div class="age">{{ age }}</div>
  </div>
</template>

<script>
import son from './son'
export default {
  components: { son },
  props: {
    name: {
      type: String,
      default: 'default'
    },
    age: {
      type: String,
      default: 'default'
    }
  }
}
</script>

<style lang="scss" scoped>
</style>