<template>
  <div>
    <div class="box">
      <el-input v-model="message" placeholder="请输入身份证"></el-input>
      <el-button @click="getInfo" type="primary">获取信息</el-button>
      <p v-html="tips"></p>
      <p>性别: {{ gender }}</p>
      <p>年龄: {{ reveal }}</p>
      <p>出生日期: {{ birth }}</p>
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      message: '',
      tips: '',
      gender: '',
      reveal: '',
      birth: ''    
    }
  },
  methods: {
    userCard (idCard) {
      const regId = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
      // 验证身份证
      if (!regId.test(this.message)) {
        this.tips = '<span style="color: #f00;">证件不符合要求!</span>'
      } else {
        this.tips = '<span style="color: #32cd32;">身份证号码正确!</span>'
      }
      const str1 = idCard.substring(6, 10) 
      const str2 = idCard.substring(10, 12) 
      const str3 = idCard.substring(12, 14)
      // 获取性别
      this.gender = parseInt(idCard.substr(16, 1)) % 2 ? '男' : '女'
      // 获取出生日期
      if (idCard.length === 15) {
        this.birth = ('19' + idCard.substr(6, 6)).replace(/(.{4})(.{2})(.{2})/, '$1年$2月$3日')
      }
      if (idCard.length === 18) {
        this.birth = (idCard.substr(6, 8)).replace(/(.{4})(.{2})(.{2})/, '$1年$2月$3日')  
      }
      // 获取年龄
      const date = new Date()
      const month = date.getMonth() + 1
      const day = date.getDate()
      const age = date.getFullYear() - str1
      if (str2 <= month && str3 <= day) {
        this.reveal += age
      }
      this.message = ''
    },
    getInfo () {
      if (this.message === '') {
        return
      } else {
        this.userCard(this.message)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.box {
  text-align: center;
  margin-top: 20px;
  .el-input {
    width: 300px;
  }
  .el-button {
    margin-left: 10px;
  }
}
</style>