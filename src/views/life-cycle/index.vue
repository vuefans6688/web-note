<template>
  <div class="life-cycle">
    <p class="container">
      <el-button @click="handleClick" type="success">{{ buttonText }}</el-button>
    </p>
    <clock v-if="!isDestroy"></clock>
  </div>
</template>

<script>
import clock from './clock'
export default {
  name: 'life-cycle',
  components: { clock },
  data () {
    return {
      isDestroy: false
    }
  },
  methods: {
    handleClick () {
      this.isDestroy = !this.isDestroy
    }
  },
  computed: {
    buttonText () {
      return this.isDestroy ? '加载时钟' : '销毁时钟'
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  text-align: center;
}
</style>