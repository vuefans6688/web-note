<template>
  <div class="old-year">
    <div class="user-name">
      姓名: <el-autocomplete @select="selectChange" size="small" placeholder="请输入姓名"></el-autocomplete>
    </div>
    <div class="user-age">
      年龄: <calculate-age :old="date" ref="age-ref" :width="width"></calculate-age>
    </div>
  </div>
</template>

<script>
import { dateFilter } from '@/utils/convert-date'
import CalculateAge from '@/components/CalculateAge'
export default {
  components: { CalculateAge },
  data () {
    return {
      date: {
        age: '',
        month: '',
        birth: ''
      },
      width: '260px'
    }
  },
  methods: {
    selectChange () {
      const birthday = dateFilter(this.date.birth)
      this.date.birth = new Date(birthday.replace(/-/g, '/'))
      this.$refs['age-ref'].handleBirth()
    }
  }
}
</script>

<style lang="scss" scoped>
.user-name {
  margin-top: 10px;
  .el-autocomplete {
    width: 260px;
  }
}
.user-age {
  display: flex;
  margin-top: 20px;
  .calculate-age {
    margin-left: 5px;
  }
}
</style>