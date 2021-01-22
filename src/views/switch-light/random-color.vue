<template>
  <div class="random-color" ref="rands">
    <el-button @click="switchBackground">切换背景色</el-button>
  </div>
</template>

<script>
import { randValue } from '@/utils/random'
export default {
  methods: {
    switchBackground () {
      const r = randValue(0, 256), g = randValue(0, 256), b = randValue(0, 256)
      this.$refs.rands.style.background = `rgb(${r}, ${g}, ${b})`
    }
  }
}
</script>

<style lang="scss" scoped>
.random-color {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  .el-button {
    margin-top: 20px;
    margin-left: 20px;
  }
}
</style>