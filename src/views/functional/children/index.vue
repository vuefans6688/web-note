<template functional>
  <div class="children">
    <h3 v-for="person in props.persons" :key="person.id">
      名字: {{ person.name }} 年龄: {{ person.age }}
    </h3>
  </div>
</template>

<script>
export default {
  props: {
    persons: Array,
    default: () => []
  }
}
</script>

<style lang="scss" scoped>

</style>