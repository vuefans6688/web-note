<template>
  <div class="calculate-age">
    <el-form :model="old" size="small">
      <el-form-item prop="age">
        <el-input
          v-model="old.age"
          @keyup.native="handleAge('age')"
          @blur="calculateBirth"
          :style="{ width }"
          :maxlength="3"
          placeholder="请输入岁数"
        >
        </el-input>
      </el-form-item>
      <el-form-item prop="month">
        <el-input
          v-model="old.month"
          @blur="calculateBirth"
          @keyup.native="handleAge('month', 12)"
          :style="{ width }"
          :maxlength="2"
          placeholder="请输入出生月份"
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
      let year = new Date().getFullYear() - this.getAge()
      let month = new Date().getMonth() - this.getMonthes()
      let day = new Date().getDate()
      // Date对象中月份是0开始取值的
      // 一年十二月，月份位做十二进制减法，不足借一，一当12
      if (month < 0) {
        month += 12
        year -= 1
      }
      this.old.birth = new Date(year, month, day)
    },
    // 根据出生日期来计算岁数
    handleBirth () {
      if (this.getBirth() > new Date()) {
        this.old.birth = ''
        return
      }
      // 获取出生月份的天数
      this.old.age = new Date().getFullYear() - this.getBirth().getFullYear()
      this.old.month = new Date().getMonth() - this.getBirth().getMonth()
      let diffDay = new Date().getDate() - this.getBirth().getDate()
      let birthYear = parseInt(this.getBirth().getFullYear(), 10)
      let birthMonth = parseInt(this.getBirth().getMonth() + 1, 10)
      let birthDay = getCurrentMonthDays(birthMonth, birthYear)
      if (diffDay < 0) {
        diffDay += birthDay
        this.old.month -= 1
      }
      if (this.old.month < 0) {
        this.old.month += 12
        this.old.age -= 1
      }
    },
    handleAge (value, condition) {
      this.old[value] = intLimit(this.old[value], condition)
    }
  }
}
</script>
