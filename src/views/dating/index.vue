<template>
  <div class="dating">
    <p class="d1">完整版: {{ date | dateFilter }}</p>
    <p class="d2">年月日: {{ date | dateFilter("YYYY-MM-DD") }}</p>
    <p class="d3">时分秒: {{ date | dateFilter("HH:mm:ss") }}</p>
    <p class="d4">现在是: {{ today }}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      date: new Date()
    }
  },
  computed: {
    today () {
      const date = new Date()
      const year = date.getFullYear()
      const month = date.getMonth() + 1
      const day = date.getDate()
      return `${year}年${month}月${day}日`
    }
  }
}
</script>

<style scoped>
p {
  text-align: center;
  font-size: 22px;
}
.d1 {
  color: #f00;
}
.d2 {
  color: #32cd32;
}
.d3 {
  color: #09f;
}
.d4 {
  color: #f90;
}
</style>