<template>
  <div class="situation">
    <h2 class="global" @click="modifyInfo">{{ info }}</h2>
  </div>
</template>

<script>
export default {
  props: {
    info: String
  },
  methods: {
    modifyInfo () {
      this.$emit('change-info')
    }
  }
}
</script>

<style lang="scss" scoped>
.situation {
  text-align: center;
  .global {
    color: crimson;
  }
}
</style>