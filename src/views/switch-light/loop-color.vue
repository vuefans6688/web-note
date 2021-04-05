<template>
  <div class="loop-color" ref="loop">
    <el-button @click="modifyBackground" type="primary">循环背景色</el-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      colorList: ['#f00', '#09f', '#42b983', '#f90', '#ffc0cb', '#fff'],
      index: -1
    }
  },
  methods: {
    modifyBackground () {
      // 如果没到头就加1
      this.index++
      if (this.index > this.colorList.length - 1) {
        // 如果到头了，则索引从0重新开始
        this.index = 0
      }
      this.$refs.loop.style.background = this.colorList[this.index]
    }
  }
}
</script>

<style lang="scss" scoped>
.loop-color {
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