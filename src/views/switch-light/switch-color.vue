<template>
  <div class="switch-color" :style="styleObject">
    <el-button @click="changeColor">切换样式</el-button>
  </div>
</template>

<script>

export default {
  data () {
    return {
      styleObject: {
        background: '#fff'
      }
    }
  },
  methods: {
    changeColor () {
      let background = this.styleObject.background
      switch (background) {
        case '#fff':
          this.styleObject.background = '#000'
          break
        case '#000':
          this.styleObject.background = '#f00'
          break
        case '#f00':
          this.styleObject.background = '#09f'
          break
        case '#09f':
          this.styleObject.background = '#42b983'
          break
        case '#42b983':
          this.styleObject.background = '#f90'
          break
        case '#f90':
          this.styleObject.background = '#ffc0cb'
          break
        default:
          this.styleObject.background = '#fff'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.switch-color {
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