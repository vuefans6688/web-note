<template>
  <div class="calculate-age">
    <el-form :model="old" size="small">
      <el-form-item prop="age">
        <el-input
          v-model="old.age"
          @keyup.native="intLimitAge('age')"
          @blur="calculateBirth"
          :style="{ width }"
          :maxlength="3"
          placeholder="请输入您的岁数"
        >
        </el-input>
      </el-form-item>
      <el-form-item prop="month">
        <el-input
          v-model="old.month"
          @keyup.native="intLimitAge('month', 12)"
          :style="{ width }"
          @blur="calculateBirth"
          :maxlength="2"
          placeholder="请输入您的出生月份"
        >
        </el-input>
      </el-form-item>
      <el-form-item prop="birth">
        <el-date-picker
          v-model="old.birth"
          type="date"
          @change="handleBirth"
          :editable="false"
          :style="{ width }"
          :clearable="false"
          :picker-options="pickerOptions"
          placeholder="请选择出生日期"
        >
        </el-date-picker>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { intLimit } from '@/utils/input-limit'
import { getCurrentMonthDays } from '@/utils/age-transfer'
export default {
  data () {
    return {
      pickerOptions: {
        disabledDate (time) {
          const date = new Date()
          const year = date.getFullYear()
          const month = date.getMonth()
          const day = date.getDate()
          return time.getTime() > new Date(year, month, day).getTime()
        }
      }
    }
  },
  props: {
    old: {
      type: Object,
      default () {
        return {
          age: 0,
          month: 0,
          birth: ''
        }
      }
    },
    width: {
      type: String,
      default: '100px'
    }
  },
  methods: {
    getAge () {
      return this.old.age || 0
    },
    getMonthes () {
      return this.old.month || 0
    },
    getBirth () {
      return this.old.birth || new Date()
    },
    // 计算出生日期
    calculateBirth () {
      let date = new Date()
      let year = date.getFullYear() - this.getAge()
      let month = date.getMonth() - this.getMonthes()
      let day = date.getDate()
      if (month < 0) {
        month += 12
        year -= 1
      }
      this.old.birth = new Date(year, month, day)
    },
    // 根据生日计算岁数
    handleBirth () {
      if (this.getBirth() > new Date()) {
        this.old.birth = ''
        return
      }
      this.old.age = new Date().getFullYear() - this.getBirth().getFullYear()
      this.old.month = new Date().getMonth() - this.getBirth().getMonth()
      let totalDay = new Date().getDate() - this.getBirth().getDate()
      // 获取当前月天数
      let currentYear = parseInt(this.getBirth().getFullYear(), 10)
      let currentMonth = parseInt(this.getBirth().getMonth() + 1, 10)
      let currentDay = getCurrentMonthDays(currentMonth, currentYear)
      if (totalDay < 0) {
        totalDay += currentDay
        this.old.month -= 1
      }
      if (this.old.month < 0) {
        this.old.month += 12
        this.old.age -= 1
      }
    },
    intLimitAge (value, limit) {
      this.old[value] = intLimit(this.old[value], limit)
    }
  }
}
</script>
