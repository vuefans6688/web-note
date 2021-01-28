<template>
  <div class="module-menu">
    <el-menu :default-active="$route.path" router class="el-menu-vertical-demo">
      <el-menu-item index="/module/module-menu/formulation/west">
        <i class="el-icon-menu"></i>西/成药处方模板
      </el-menu-item>
      <!-- <el-menu-item index="/module-menu/formulation/china">
        <i class="el-icon-menu"></i>中药处方模板
      </el-menu-item>
      <el-menu-item index="/module-menu/formulation/infusion">
        <i class="el-icon-menu"></i>输液处方模板
      </el-menu-item>
      <el-menu-item index="/module-menu/formulation/check">
        <i class="el-icon-menu"></i>诊疗项目模板
      </el-menu-item>
      <el-menu-item index="/module-menu/formulation/material">
        <i class="el-icon-menu"></i>耗材组合模板
      </el-menu-item>
      <el-menu-item index="/module-menu/formulation/others">
        <i class="el-icon-menu"></i>其他项目模板
      </el-menu-item> -->
    </el-menu>
    <router-view class="view"></router-view>
  </div>
</template>

<script>
export default {
  updated () {
    if (this.$route.path.indexOf('module-menu') === -1) {
      return
    }
  }
}
</script>

<style lang="scss" scoped>
.module-menu {
  display: flex;
  position: fixed;
  left: 0;
  top: 65px;
  right: 0;
  bottom: 0;
}
</style>
