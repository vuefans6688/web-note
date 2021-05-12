<template>
  <div class="cart">
    <el-table :data="cartProducts" style="width: 87%">
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
      <el-table-column label="数量" width="180" align="center">
        <template slot-scope="scope">
          <el-input-number
            @input="handleBlur"
            @change="handleChange(scope.row)"
            :value="scope.row.num"
            :min="1"
            size="mini"
          ></el-input-number>
        </template>
      </el-table-column>
      <el-table-column
        prop="price"
        label="单价"
        width="180"
        align="center"
      ></el-table-column>
      <el-table-column
        prop="total_num"
        label="小计"
        width="180"
        align="center"
      ></el-table-column>
      <el-table-column label="操作" width="180" align="center">
        <template slot-scope="scope">
          <el-button
            @click="handleDelete(scope.row)"
            type="danger"
            plain
            icon="el-icon-delete"
            size="mini"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <info v-if="totalNum" />
    <el-dialog
      title="注意"
      :visible.sync="dialogVisible"
      width="20%"
      align="center"
    >
      <div class="delete-tip">
        <i class="el-icon-warning-outline"></i>
        <span class="text">确定要删除这个商品吗?</span>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false" size="small">取 消</el-button>
        <el-button @click="dialogConfirm" type="primary" size="small"
          >确 定</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Info from './Info'
export default {
  name: 'Cart',
  data () {
    return {
      dialogVisible: false,
      result: null,
      inputNumberValue: 1
    }
  },
  computed: {
    ...mapGetters(['cartProducts', 'totalNum'])
  },
  components: { Info },
  methods: {
    ...mapActions(['delProduct', 'numberChange']),
    handleDelete (data) {
      this.dialogVisible = true
      this.result = data
    },
    dialogConfirm () {
      this.delProduct(this.result)
      this.dialogVisible = false
    },
    handleBlur (value) {
      this.inputNumberValue = value
    },
    handleChange (data) {
      data.value = this.inputNumberValue
      this.numberChange(data)
    }
  }
}
</script>

<style lang="scss" scoped>
.el-table th > .cell {
  text-align: center;
}
.el-table td > .cell {
  text-align: center;
}
.delete-tip {
  display: flex;
  justify-content: center;
  align-items: center;
  .el-icon-warning-outline {
    font-size: 20px;
    color: #f90;
  }
  .text {
    margin-left: 10px;
    font-size: 16px;
  }
}
.dialog-footer {
  text-align: center;
}
</style>
