<template>
  <div class="gasoline">
    <p class="type">
      汽油型号:
      <el-select v-model="types" placeholder="请选择汽油型号">
        <el-option
          v-for="item in options"
          :key="item.id"
          :value="item.text"
        ></el-option>
      </el-select>
    </p>
    <p class="price">
      汽油升数:
      <el-input v-model="rise" placeholder="请输入汽油升数"></el-input>
    </p>
    <p class="money">支付总价为: ￥{{ totalMoney.toFixed(2) }}</p>
    <p class="submit">
      <el-button @click="handleSubmit" type="primary">提交</el-button>
    </p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      types: '',
      rise: '',
      options: [
        { id: 1, text: '#95' },
        { id: 2, text: '#97' }
      ],
      totalMoney: 0
    }
  },
  methods: {
    handleSubmit () {
      const rise = Number(this.rise)
      if (isNaN(rise)) {
        this.$message.error('输入有误，请查证！')
        return
      }
      if (this.types === '#95') {
        this.totalMoney = rise >= 20 ? rise * 5.9 : rise * 6
      } else {
        this.totalMoney = rise >= 30 ? rise * 6.95 : rise * 7
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.price {
  .el-input {
    width: 210px;
  }
}
.money {
  color: #f00;
  font-weight: bold;
}
</style>