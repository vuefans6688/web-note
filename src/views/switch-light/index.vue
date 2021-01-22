<template>
  <div class="switch-light" :class="isOpen ? 'on-off' : ''">
    <el-checkbox @change="isOpen = !isOpen">开关灯</el-checkbox>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isOpen: false
    }
  }
}
</script>

<style lang="scss" scoped>
.switch-light {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  &.on-off {
    width: 100%;
    height: 100%;
    background-color: #000;
  }
  .el-checkbox {
    margin-left: 20px;
    margin-top: 20px;
  }
}
</style>