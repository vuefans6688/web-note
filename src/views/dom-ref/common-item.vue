<template>
  <div class="common-item">
    <h3>{{ message }}</h3>
  </div>
</template>

<script>
export default {
  data () {
    return {
      message: ''
    }
  },
  methods: {
    sayHello () {
      this.message = '我在操作dom...'
    }
  }
}
</script>

<style lang="scss" scoped>

</style>