<template>
  <div class="off-spring">
    <!-- 标记 -->
    <div class="badge">
      <i class="el-icon-s-flag"></i>Badge标记
      <el-badge :value="value">
        <el-button size="small">评论</el-button>
      </el-badge>
    </div>
    <!-- 进度条 -->
    <div class="progress">
      <i class="el-icon-s-flag"></i>进度条
      <el-progress :percentage="percentage"></el-progress>
    </div>
    <!-- 占位符 -->
    <slot>我是这个slot里面本来的内容</slot>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: 12,
      percentage: 50
    }
  }
}
</script>

<style lang="scss" scoped>

</style>