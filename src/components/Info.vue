<template>
  <div class="info">
    <el-row :gutter="20">
      <el-col :span="6">总数: {{ totalNum }}</el-col>
      <el-col :span="6">合计价格: {{ totalPrice }}</el-col>
      <el-col :span="6">
        <el-button
          @click="clearAll"
          type="danger"
          size="medium"
          icon="el-icon-delete"
          >清空购物车</el-button
        >
      </el-col>
      <el-col :span="6"></el-col>
    </el-row>
    <el-dialog
      title="注意"
      :visible.sync="dialogVisible"
      width="20%"
      align="center"
    >
      <div class="delete-tip">
        <i class="el-icon-warning-outline"></i>
        <span class="text">要清空购物车吗?</span>
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
export default {
  name: 'info',
  data () {
    return {
      dialogVisible: false
    }
  },
  computed: {
    ...mapGetters(['totalPrice', 'totalNum'])
  },
  methods: {
    ...mapActions(['clearAllCart']),
    clearAll () {
      this.dialogVisible = true
    },
    dialogConfirm () {
      this.clearAllCart()
      this.dialogVisible = false
    }
  }
}
</script>

<style lang="scss" scoped>
.el-col-6 {
  padding: 20px;
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
