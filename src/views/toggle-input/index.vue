<template>
  <div class="toggle-input">
    <el-card class="box-card">
      <el-tabs v-model="activeName">
        <el-tab-pane label="短信登录" name="first">
          <short-letter />
        </el-tab-pane>
        <el-tab-pane label="密码登录" name="second">
          <pass-word />
        </el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>

<script>
import ShortLetter from './short-letter'
import PassWord from './pass-word'
export default {
  components: {
    ShortLetter,
    PassWord
  },
  data () {
    return {
      activeName: 'first',
    }
  }
}
</script>

<style lang="scss" scoped>
.box-card {
  width: 400px;
  margin: 20px auto;
  .el-tabs {
    width: 280px;
    margin-left: 40px;
  }
}
</style>