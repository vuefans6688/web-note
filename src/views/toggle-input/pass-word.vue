<template>
  <div class="pass-word">
    <div class="user-name">
      <el-input
        size="small"
        v-model="username"
        placeholder="手机号/邮箱/用户名"
      ></el-input>
    </div>
    <div class="pass-word">
      <el-input
        size="small"
        type="password"
        v-model="password"
        v-if="!isShow"
        placeholder="密码"
      ></el-input>
      <el-input
        size="small"
        type="text"
        v-model="password"
        v-else
        placeholder="密码"
      ></el-input>
    </div>
    <div class="switch-icon">
      <el-switch v-model="value" @change="isShow = !isShow"></el-switch>
    </div>
    <div class="verify-code">
      <el-input
        size="small"
        v-model="verifyCode"
        placeholder="验证码"
      ></el-input>
    </div>
    <div class="canvas">
      <mine-canvas></mine-canvas>
    </div>
    <div class="login">
      <el-button size="small" type="primary">登录</el-button>
    </div>
  </div>
</template>

<script>
import MineCanvas from '@/components/MineCanvas'
export default {
  components: {
    MineCanvas
  },
  data () {
    return {
      username: '',
      password: '',
      verifyCode: '',
      isShow: false,
      value: false
    }
  }
}
</script>

<style lang="scss" scoped>
.pass-word {
  margin-top: 20px;
}
.switch-icon {
  position: relative;
  .el-switch {
    position: absolute;
    bottom: 6px;
    right: 8px;
  }
}
.verify-code {
  margin-top: 20px;
  .el-input {
    width: 170px;
  }
}
.canvas {
  position: relative;
  .mine-canvas {
    position: absolute;
    bottom: -4px;
    left: 180px;
  }
}
.login {
  margin-top: 20px;
  .el-button {
    width: 100%;
  }
}
</style>