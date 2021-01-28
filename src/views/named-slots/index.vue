<template>
  <div class="named-slots">
    <!-- 插槽名称为 heading -->
    <slot name="heading"></slot>
    <!-- 插槽名称为 sub-heading -->
    <slot name="sub-heading"></slot>
    <!-- 标记 -->
    <div>
      <i class="el-icon-s-flag"></i>Badge标记
      <div class="content">
        <el-badge :value="value" class="item">
          <el-button size="small">评论</el-button>
        </el-badge>
      </div>
    </div>
    <div>
      <i class="el-icon-s-flag"></i>进度条
      <div class="content">
        <el-progress :percentage="percentage"></el-progress>
      </div>
    </div>
    <!-- 插槽名称为 footer-text -->
    <slot name="footer-text"></slot>
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