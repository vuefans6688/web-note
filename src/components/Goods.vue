<template>
  <div class="goods">
    <el-table
      :data="goodList"
      @selection-change="selectChange"
      style="width: 100%"
    >
      <el-table-column type="selection" align="center"></el-table-column>
      <el-table-column
        prop="id"
        label="商品ID"
        width="180"
        align="center"
      ></el-table-column>
      <el-table-column
        prop="name"
        label="商品名称"
        width="180"
        align="center"
      ></el-table-column>
      <el-table-column
        prop="price"
        label="单价"
        width="180"
        align="center"
      ></el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <el-button
            @click="addToCart(scope.row)"
            size="mini"
            type="primary"
            icon="el-icon-plus"
            >加入购物车</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <div class="batch-delete">
      <el-button
        @click="batchDelete"
        :disabled="selectData.length === 0"
        size="small"
        type="danger"
        >批量删除</el-button
      >
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'goods',
  data () {
    return {
      selectData: []
    }
  },
  computed: {
    ...mapGetters(['goodList', 'totalNum'])
  },
  methods: {
    ...mapActions(['addToCart']),
    selectChange (value) {
      this.selectData = value
    },
    batchDelete () {
      this.selectData.forEach(item => {
        const index = this.goodList.findIndex(value => value.id === item.id)
        if (index !== -1) {
          this.goodList.splice(index, 1)
        }
      })
      this.selectData = []
    }
  }
}
</script>

<style scoped>
.batch-delete {
  margin-top: 10px;
}
</style>
