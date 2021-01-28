<template>
  <div class="son">
    <el-table :data="tableData" border>
      <el-table-column prop="status" label="状态" align="center">
        <template slot-scope="scope">
          <el-tag :type="scope.row.status | statusFilter">
            {{ scope.row.status | formatStatus }}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <el-button v-if="scope.row.status === 0" @click="statusChange(scope.$index)" type="text" class="enable">启用</el-button>
          <el-button v-if="scope.row.status === 1" @click="statusChange(scope.$index)" type="text" class="disable">禁用</el-button>
          <el-button v-if="scope.row.status === 2" @click="statusChange(scope.$index)" type="text" class="freeze">冻结</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tableData: [
        {
          status: 0
        }
      ]
    }
  },
  methods: {
    statusChange (index) {
      setTimeout(() => {
        this.tableData[index].status = (this.tableData[index].status + 1) % 3
      }, 1000)
    }
  },
  filters: {
    // 类型转换
    statusFilter (status) {
      const statusMap = {
        0: 'danger',
        1: 'success',
        2: 'info'
      }
      return statusMap[status]
    },
    // 状态转换
    formatStatus (status) {
      const statusMap = {
        0: '禁用',
        1: '启用',
        2: '冻结'
      }
      return statusMap[status]
    }
  }
}
</script>

<style lang="scss" scoped>
.el-table {
  margin: 20px auto;
  width: 20%;
  .enable {
    color: #56bc94;
  }
  .disable {
    color: #f00;
  }
  .freeze {
    color: #666;
  }
}
</style>