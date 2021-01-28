<template>
  <div class="login-container">
    <van-nav-bar @click-left="$router.back()" title="欢迎登录" left-arrow />
    <van-form @submit="onLogin" @failed="onFailed" ref="login-form" :show-error="false">
      <van-field v-model="user.mobile" :rules="formRules.mobile" name="mobile" label="手机号" placeholder="请输入手机号或用户名" />
      <van-field v-model="user.code" :rules="formRules.code" name="code" label="验证码" placeholder="请输入验证码">
        <template #button>
          <van-button @click.prevent="onVerifyCode" size="mini" type="info" plain>{{ buttonText }}</van-button>
        </template>
      </van-field>
      <div class="submit-box">
        <van-button native-type="submit" type="info" size="small" block>登录</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { captcha, login } from '@/api'
export default {
  data () {
    return {
      formRules: {
        mobile: [
          { required: true, message: '手机号不能为空' },
          { pattern: /^1[3-9]\d{9}$/, message: '手机号格式不对' }
        ],
        code: [
          { required: true, message: '验证码不能为空' },
          { pattern: /^\d{4}$/, message: '验证码格式不对' }
        ]
      },
      user: {
        mobile: '',
        code: ''
      },
      buttonText: '获取验证码',
      countDown: 0
    }
  },
  methods: {
    onVerifyCode () {
      if (this.countDown > 0) {
        return 
      }
      this.$refs['login-form'].validate('mobile').then(() => {
        captcha({ mobile: this.user.mobile }).then(res => {
          this.$toast.success(res.data)
          this.countDown = 60
          this.buttonText = `${this.countDown}秒后重试`
          this.intervalId =setInterval(() => {
            this.countDown--
            this.buttonText = `${this.countDown}秒后重试`
            if (this.countDown <= 0) {
              clearInterval(this.intervalId)
              this.buttonText = '获取验证码'
            }
          }, 1000)
        })
      })
    },
    onLogin () {
      login(this.user).then(res => {
        console.log(res.data)
      })
    },
    onFailed (error) {
      if (error.message[0]) {
        this.$toast({
          message: error.errors[0].message,
          position: 'top'
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
/deep/.van-nav-bar {
  .van-nav-bar__arrow {
    font-size: 20px;
  }
}
.submit-box {
  padding: 0 15px;
  margin-top: 30px;
}
</style>