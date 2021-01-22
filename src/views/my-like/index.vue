<template>
  <div class="my-like">
    <el-table :data="tableData" :row-style="rowStyle" border>
      <el-table-column prop="status" label="状态" align="center">
        <template slot-scope="scope">
          <span>{{ statusList[scope.row.status] }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <el-button type="text" @click="changeStatus(scope.$index)">
            {{ statusList[scope.row.status] }}
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      statusList: ['完成', '未完成', '进行中', '任务中断'],
      tableData: [{ status: 0 }]
    }
  },
  methods: {
    changeStatus (index) {
      const tableIndex = this.tableData[index]
      setTimeout(() => {
        // tableIndex.status = (tableIndex.status + 1) % this.statusList.length
        tableIndex.status = (tableIndex.status + 1) % 4
      }, 1000)
    },
    rowStyle ({ row }) {
      const obj = {}
      switch (row.status) {
        case 0:
          obj.color = '#32cd32'
          break
        case 1:
          obj.color = '#f00'
          break
        case 2:
          obj.color = '#09f'
          break
        case 3:
          obj.color = '#ffa500'
          break      
      }
      return obj
    }
  }
}
</script>

<style lang="scss" scoped>
.el-table {
  width: 20%;
  margin: 20px auto;
}
</style>