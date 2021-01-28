<template>
  <div class="annual-bonus">
    <p class="work-year">
      工作年限: <el-input v-model="year"></el-input>
    </p>
    <p class="work-money">
      工作薪酬: <el-input v-model="money"></el-input>
    </p>
    <p class="show-content">你的年终奖为: ￥{{ result.toFixed(2) }}</p>
    <p class="submit">
      <el-button @click="handleSubmit" type="primary">提交</el-button>
    </p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      year: '',
      money: '',
      result: 0  // 设置初始值
    }
  },
  methods: {
    handleSubmit () {
      const year = Number(this.year)
      const money = Number(this.money)
      // 校验year和money是否是有效数字
      if (isNaN(year) || isNaN(money)) {
        this.$message.error('输入有误，请查证！')
        return
      }
      // 工作0年
      if (year === 0) {
        this.result = money >= 8000 ? money * 1.2 : money * 1
      // 工作1年
      } else if (year === 1) {
        this.result = money >= 10000 ? money * 1.7 : money * 1.5
      // 工作2年及以上 
      } else {
        this.result = money >= 12000 ? money * 3.2 : money * 3
      }
    }
  }
}
</script>

<style scoped>
p > .el-input {
  width: 280px;
}
.show-content {
  color: #f00;
  font-style: italic;
}
</style>