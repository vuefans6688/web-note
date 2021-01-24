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
      default: '默认值'
    },
    age: {
      type: String,
      default: '默认值'
    }
  }
}
</script>

<style lang="scss" scoped>

</style>