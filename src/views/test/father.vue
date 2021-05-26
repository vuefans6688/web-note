<template>
  <div class="father">
    <el-table :data="tableData" :row-style="rowStyle" border>
      <el-table-column prop="status" label="状态" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.status | statusFilter }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <el-button
            v-if="scope.row.status === 0"
            @click="statusChange(scope.$index)"
            type="text"
            class="enable"
            >启用</el-button
          >
          <el-button
            v-if="scope.row.status === 1"
            @click="statusChange(scope.$index)"
            type="text"
            class="disable"
            >禁用</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tableData: [{ status: 0 }]
    }
  },
  methods: {
    rowStyle ({ row }) {
      let styles = {}
      if (row.status === 0) {
        styles.color = '#ccc'
      }
      return styles
    },
    statusChange (index) {
      setTimeout(() => {
        this.tableData[index].status = (this.tableData[index].status + 1) % 2
      }, 1000)
    }
  },
  filters: {
    statusFilter (status) {
      return status === 0 ? '启用' : '禁用'
    }
  }
}
</script>

<style lang="scss" scoped>
.el-table {
  width: 20%;
  margin: 20px auto;
  .enable {
    color: #56bc94;
  }
  .disable {
    color: #f00;
  }
}
</style>