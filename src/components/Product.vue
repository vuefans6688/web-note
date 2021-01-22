<template>
  <div class="product">
    <el-table :data="products" border>
      <el-table-column label="名称" prop="name" align="center"></el-table-column>
      <el-table-column label="价格" prop="price" align="center"></el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <el-button type="primary" size="mini" @click="addToCart(scope.row)">添加到已选商品</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex"
export default {
  name: 'Product',
  computed: {
    ...mapGetters(['products'])
  },
  methods: {
    ...mapActions(['addToCart'])
  }
}
</script>

<style lang="scss" scoped>
.el-table {
  width: 870px;
}
</style>
