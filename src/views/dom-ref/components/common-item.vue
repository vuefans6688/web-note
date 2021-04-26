<template>
  <div class="common-item">
    <h3
      @click="handleClick"
      :class="isHide ? 'same-level' : 'equal-level'"
      class="common"
    >
      {{ message }}
    </h3>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isHide: false
    }
  },
  methods: {
    handleClick () {
      this.isHide = !this.isHide
    }
  },
  computed: {
    message () {
      return this.isHide ? '我是common-item组件!!!' : '我会通过ref属性把值传递给父组件...'
    }
  }
}
</script>

<style lang="scss" scoped>
.common {
  text-align: center;
  font-size: 24px;
  &.same-level {
    color: #f00000;
  }
  &.equal-level {
    color: #42b983;
  }
}
</style>