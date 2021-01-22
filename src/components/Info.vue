<template>
  <div class="info">
    <div class="item-wrapper">
      <div class="item">总数: <strong>{{ totalNum }}</strong></div>
      <div class="item">总价: <strong>¥{{ totalPrice }}</strong></div>
      <div class="item">
        <el-button type="danger" size="mini" @click="clearAllCart">清空购物车</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Info',
  methods: {
    ...mapActions(['clearAllCart'])
  },
  computed: {
    ...mapGetters(['totalPrice', 'totalNum'])
  }
}
</script>

<style lang="scss" scoped>
.item-wrapper {
  width: 870px;
  height: 40px;
  display: flex;
  background-color: #dfdfdf;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
}
.item {
  flex: 1;
  text-align: center;
}
</style>