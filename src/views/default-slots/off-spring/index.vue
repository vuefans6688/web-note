<template>
  <div class="off-spring">
    <!-- 标记 -->
    <div>
      <i class="el-icon-s-flag"></i>Badge标记
      <div class="conten">
        <el-badge :value="value" class="item">
          <el-button size="small">评论</el-button>
        </el-badge>
      </div>
    </div>
    <!-- 进度条 -->
    <div>
      <i class="el-icon-s-flag"></i>进度条
      <div class="content">
        <el-progress :percentage="percentage"></el-progress>
      </div>
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