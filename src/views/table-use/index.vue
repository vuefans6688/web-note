<template>
  <div class="table-use">
    <el-card class="box-card">
      <el-button type="success" size="small" @click="handleAdd">添加</el-button>
      <el-table :data="tableData">
        <el-table-column
          prop="date"
          label="日期"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="address"
          label="地址"
          align="center"
        ></el-table-column>
        <el-table-column label="年龄" align="center">
          <template slot-scope="scope">
            <span>{{ scope.row.age | ageFilter }}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作" align="center">
          <template slot-scope="scope">
            <el-button
              type="primary"
              size="small"
              @click="handleEdit(scope.$index, scope.row)"
              >编辑</el-button
            >
            <el-button
              type="danger"
              size="small"
              @click="handleRemove(scope.row.id, scope.row)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </el-card>
    <!-- 弹窗 -->
    <el-dialog :title="dialogTitle" :visible.sync="formVisible" align="center">
      <el-form :model="userInfo" size="small" label-width="80px">
        <el-form-item label="日期:">
          <el-date-picker
            v-model="userInfo.date"
            :value-format="valueFormat"
            type="date"
            :editable="false"
            placeholder="选择日期"
            style="width: 100%"
          ></el-date-picker>
        </el-form-item>
        <el-form-item label="姓名:">
          <el-input v-model="userInfo.name"></el-input>
        </el-form-item>
        <el-form-item label="地址:">
          <el-input v-model="userInfo.address"></el-input>
        </el-form-item>
        <el-form-item label="年龄:">
          <el-date-picker
            v-model="userInfo.age"
            type="date"
            :editable="false"
            placeholder="选择日期"
            style="width: 100%"
          ></el-date-picker>
        </el-form-item>
      </el-form>
      <div class="dialog-footer" slot="footer">
        <el-button @click="formVisible = false" size="small">取消</el-button>
        <el-button type="primary" size="small" @click="submitUser"
          >确定</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { computeAge } from '@/utils/compute-age'
export default {
  data () {
    return {
      formVisible: false,
      userInfo: {},
      dialogTitle: '添加人员信息',
      rowIndex: null,
      tableData: [
        {
          id: '001',
          date: '2021年4月15日',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          age: 51
        },
        {
          id: '002',
          date: '2021年4月15日',
          name: '张小丽',
          address: '上海市普陀区金沙江路 1519 弄',
          age: 51
        }
      ]
    }
  },
  filters: {
    ageFilter (params) {
      return computeAge(params)
    }
  },
  methods: {
    handleAdd () {
      this.dialogTitle = '添加人员信息'
      this.userInfo = {}
      this.formVisible = true
    },
    handleEdit (index, row) {
      this.dialogTitle = '编辑人员信息'
      this.userInfo = {
        id: row.id,
        name: row.name,
        date: row.date,
        address: row.address,
        age: row.age
      }
      this.rowIndex = index
      this.formVisible = true
    },
    submitUser () {
      if (this.dialogTitle === '编辑人员信息') {
        this.tableData.splice(this.rowIndex, 1, this.userInfo)
        this.formVisible = false
        return
      }
      this.tableData.splice(0, 0, this.userInfo)
      this.formVisible = false
    },
    handleRemove (id, row) {
      this.$confirm(`确定删除${row.name}吗？`, '提示', {
        onfirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'error'
      }).then(() => {
        const index = this.tableData.findIndex(item => item.id === id)
        this.tableData.splice(index, 1)
        this.$message({
          message: '删除成功',
          type: 'success'
        })
      }).catch(() => {
        this.$message({
          message: '取消删除',
          type: 'warning'
        })
      })
    }
  },
  computed: {
    valueFormat () {
      return 'yyyy年MM月dd日'
    }
  }
}
</script>

<style lang="scss" scoped>
.box-card {
  margin-top: 20px;
  margin-left: 30px;
  width: 70%;
}
</style>