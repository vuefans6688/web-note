<template>
  <div class="provide-inject">
    <the-provide :count="count" />
  </div>
</template>

<script>
import TheProvide from './components/the-provide'
export default {
  components: { TheProvide },
  data () {
    return {
      count: 0
    }
  },
  provide () {
    return {
      count: this.count
    }
  }
}
</script>

<style lang="scss" scoped>
.provide-inject {
  text-align: center;
}
</style>