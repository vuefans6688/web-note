<template>
  <div class="short-letter">
    <div class="phone-number">
      <el-input size="small" v-model="phoneNumber" placeholder="手机号"></el-input>
    </div>
    <div class="verify-code">
      <el-input size="small" v-model="verifyCode" placeholder="验证码"></el-input>
      <el-button size="small" :disabled="!stop" type="primary" @click="sendCode">{{ access }}</el-button>
    </div>
    <div class="login">
      <el-button size="small" type="primary">登录</el-button>
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
.phone-number {
  .el-input {
    width: 280px;
  }
}
.verify-code {
  margin-top: 20px;
  .el-input {
    width: 137px;
  }
  .el-button {
    width: 137px;
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