<template>
  <div class="drop-down-selection">
    <div class="item-wrap">
      <select @change="getDay" v-model="formData.year">
        <option v-for="item in years" :value="item">{{ item }}年</option>
      </select>
      <select
        @change="getDay"
        v-model="formData.month"
        style="margin-left: 4px"
      >
        <option v-for="item in monthes" :value="item">{{ item }}月</option>
      </select>
      <select v-model="formData.day" style="margin-left: 4px">
        <option v-for="item in days" :value="item">{{ item }}日</option>
      </select>
      <button @click="submit">提交</button>
    </div>
    <p class="date">日期：{{ content }}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      years: [],
      monthes: [],
      days: [],
      formData: {
        year: '1900',
        month: '1',
        day: '1'
      },
      content: ''
    }
  },
  methods: {
    init () {
      this.getYear()
      this.getMonth()
      this.getDay()
    },
    getYear () {
      let date = new Date()
      let nowYear = date.getFullYear()
      for (let i = 1900; i <= nowYear; i++) {
        this.years.push(i)
      }
    },
    getMonth () {
      for (let i = 1; i < 13; i++) {
        this.monthes.push(i)
      }
    },
    getDay () {
      let day = this.getDayInMonth(this.formData.year, this.formData.month)
      for (let i = 1; i <= day; i++) {
        this.days.push(i)
      }
    },
    getDayInMonth (year, month) {
      month = parseInt(month, 10)
      return new Date(year, month, 0).getDate()
    },
    paddingZero (data) {
      return data.toString().length < 2 ? '0' + data : data
    },
    submit () {
      let currentDate = this.formData.year + '-' + this.paddingZero(this.formData.month) + '-' + this.paddingZero(this.formData.day)
      if (new Date() < new Date(currentDate)) {
        alert('请选择小于今天的年月日')
        return
      }
      this.content = currentDate
    }
  },
  mounted () {
    this.init()
  }

}
</script>

<style lang="scss" scoped>
.item-wrap {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  button {
    margin-left: 10px;
  }
}
.date {
  text-align: center;
}
</style>