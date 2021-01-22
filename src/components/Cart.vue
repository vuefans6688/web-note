<template>
  <div class="cart">
    <h4>已选商品</h4>
    <el-table :data="cartProducts" border>
      <el-table-column label="名称" prop="name" align="center"></el-table-column>
      <el-table-column label="价格" prop="price" align="center"></el-table-column>
      <el-table-column label="数量" prop="num" align="center">
        <template slot-scope="scope">
          <el-input-number v-model="scope.row.num" size="small" :min="1" :max="50"></el-input-number>
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <el-button type="danger" size="mini" @click="delProduct(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex"
export default {
  name: 'Cart',
  computed: {
    ...mapGetters(['cartProducts'])
  },
  methods: {
    ...mapActions(['delProduct'])
  }
}
</script>

<style lang="scss" scoped>
.el-table {
  width: 870px;
}
</style>