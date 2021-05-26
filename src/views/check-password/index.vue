<template>
  <div class="check-password">
    <el-form
      :model="registerForm"
      ref="registerForm"
      :rules="rules"
      size="small"
    >
      <el-form-item label="密码" :label-width="formLabelWidth" prop="password">
        <el-input
          type="password"
          v-model="registerForm.password"
          autocomplete="off"
          clearable
          show-password
          placeholder="8-20位字符在数字、小写、大写字母以及特殊字符中四选三"
        >
        </el-input>
        <el-progress
          :percentage="passwordPercent"
          :format="passwordPercentFormat"
        ></el-progress>
      </el-form-item>
      <el-form-item
        label="确认密码"
        :label-width="formLabelWidth"
        prop="comfirmPassword"
      >
        <el-input
          type="password"
          v-model="registerForm.comfirmPassword"
          autocomplete="off"
          clearable
          placeholder="请输入确认密码"
        >
        </el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data () {
    const validatePassword = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        // 密码必须包含6-20位的字符、数字和特殊字符
        let charLength = 0
        if (this.registerForm.password !== '') {
          if (this.registerForm.password.match(/([a-z])+/)) {
            charLength++
          }
          if (this.registerForm.password.match(/([0-9])+/)) {
            charLength++
          }
          if (this.registerForm.password.match(/([A-Z])+/)) {
            charLength++
          }
          if (this.registerForm.password.match(/([\W])+/) && !this.registerForm.password.match(/(![\u4E00-\u9FA5])+/)) {
            charLength++
          }
          if (this.registerForm.password.length < 6 || this.registerForm.password.length > 20) {
            callback(new Error('要求6-20位字符'))
            charLength = 0
          }
          if (this.registerForm.password.match(/([\u4E00-\u9FA5])+/)) {
            callback(new Error('不能包含中文字符'))
            charLength = 0
          }
          switch (charLength) {
            case 0:
              this.passwordPercent = 0
              callback(new Error('数字、小写字母、大写字母以及特殊字符中四选三'))
              break
            case 1:
              this.passwordPercent = 33
              callback(new Error('数字、小写字母、大写字母以及特殊字符中四选三'))
              break
            case 2:
              this.passwordPercent = 66
              callback(new Error('数字、小写字母 、大写字母以及特殊字符中四选三'))
              break
            case 3:
            case 4:
              this.passwordPercent = 100
              break
            default:
              this.passwordPercent = 0
          }
        }
        callback()
      }
    }
    const validateConfirmPassword = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.registerForm.comfirmPassword !== this.registerForm.password) {
          callback(new Error('两次输入的密码不一致'))
        }
        callback()
      }
    }
    return {
      // 密码百分比
      passwordPercent: 0,
      // 表单变量
      registerForm: {
        password: '',
        comfirmPassword: ''
      },
      // 表单label宽度
      formLabelWidth: '120px',
      // 验证规则
      rules: {
        password: [
          { required: true, validator: validatePassword, trigger: ['blur', 'change'] }
        ],
        comfirmPassword: [
          { required: true, validator: validateConfirmPassword, trigger: ['blur', 'change'] }
        ]
      }
    }
  },
  methods: {
    // 密码验证是否符合条件
    passwordPercentFormat (percentage) {
      return percentage === 100 ? '符合' : '不符'
    }
  }
}
</script>

<style lang="scss" scoped>
.el-form-item {
  width: 500px;
  .el-progress {
    margin-top: 5px;
    margin-left: 20px;
  }
}
</style>