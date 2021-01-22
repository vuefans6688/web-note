<template>
  <div class="short-letter">
    <div class="phone-number">
      <el-input v-model="phoneNumber" size="small" placeholder="手机号"></el-input>
    </div>
    <div class="verify-code">
      <el-input v-model="verifyCode" size="small" placeholder="验证码"></el-input>
      <el-button @click="sendCode" :disabled="!stop" size="small" type="primary">{{ access }}</el-button>
    </div>
    <div class="login">
      <el-button type="primary" size="small">登录</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      phoneNumber: '',
      verifyCode: '',
      stop: true,
      timer: 60
    }
  },
  methods: {
    sendCode () {
      this.stop = false
      this.timer = 60
      this.interval = setInterval(() => {
        this.timer--
        if (this.timer <= 0) {
          this.stop = true
          clearInterval(this.interval)
        }
      }, 1000)
    }
  },
  computed: {
    access () {
      return this.stop ? '发送验证码' : `${this.timer}秒后请重新发送`
    }
  }
}
</script>

<style lang="scss" scoped>
.verify-code {
  margin-top: 20px;
  .el-input {
    width: 160px;
  }
  .el-button {
    width: 193px;
    margin-left: 6px;
  }
}
.login {
  margin-top: 20px;
  .el-button {
    width: 100%;
  }
}
</style>