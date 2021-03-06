<template>
  <div class="child">
    <el-card class="box-card">
      <el-table
        :data="allData"
        :row-style="rowStyle"
        @selection-change="selectChange"
      >
        <el-table-column
          type="selection"
          align="center"
          :selectable="selectable"
        ></el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          align="center"
        ></el-table-column>
        <el-table-column prop="age" label="年龄" align="center">
          <template slot-scope="scope">
            <span>{{ scope.row.age | ageFilter }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="status" label="状态" align="center">
          <template slot-scope="scope">
            <span>{{ scope.row.status === 1 ? "已启用" : "已禁用" }}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作" align="center">
          <template slot-scope="scope">
            <el-button
              @click="statusChange(scope.row)"
              :class="scope.row.status === 1 ? '' : 'disable'"
              type="text"
            >
              {{ scope.row.status === 1 ? "启用" : "禁用" }}
            </el-button>
            <el-button
              @click="deleteChange(scope.row.id)"
              type="text"
              style="color: #f00"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <div class="control">
        <el-button
          @click="batchDelete"
          :disabled="selectData.length === 0"
          type="danger"
          size="small"
          >批量删除</el-button
        >
      </div>
    </el-card>
    <el-pagination
      @size-change="sizeChange"
      @current-change="currentChange"
      :current-page="currentPage"
      :page-size="pageSize"
      :page-sizes="[1, 2, 3, 4]"
      layout="total, sizes, prev, pager, next, jumper"
      background
      :total="total"
    >
    </el-pagination>
  </div>
</template>

<script>
const DISABLE = 0  // 禁用
const ENABLE = 1   // 启用
export default {
  data () {
    return {
      allData: [],  // 后台传入的数据
      selectData: [],  // 选中的数据
      tableData: [  // 模拟数据
        { id: 1, name: '韩梅梅', age: new Date(1989, 10, 18), status: ENABLE },
        { id: 2, name: '卫华', age: new Date(1990, 2, 13), status: ENABLE },
        { id: 3, name: '露茜', age: new Date(1990, 7, 12), status: ENABLE },
        { id: 4, name: '莉莉', age: new Date(1990, 7, 12), status: ENABLE }
      ],
      pageSize: 2,  // 每页条数
      currentPage: 1,  // 当前页码
      total: 0  // 数据总条数    
    }
  },
  methods: {
    rowStyle ({ row }) {
      if (row.status === DISABLE) {
        return {
          color: '#ccc'
        }
      }
    },
    selectable (row) {
      return row.status === DISABLE ? false : true
    },
    statusChange (row) {
      row.status = (row.status + 1) % 2
    },
    deleteChange (id) {
      // this.tableData.splice((this.currentPage - 1) * this.pageSize + index, 1)
      const index = this.tableData.findIndex(item => item.id === id)
      this.tableData.splice(index, 1)
      this.currentPage = 1
      this.handlePaging()
    },
    selectChange (value) {
      this.selectData = value
    },
    batchDelete () {
      let newArray = []
      this.tableData.forEach(item => {
        let selectList = this.selectData.filter(value => value.id === item.id)
        if (!selectList || selectList.length === 0) {
          newArray.push(item)
        }
      })
      this.tableData = newArray
      this.currentPage = 1
      this.handlePaging()
    },
    sizeChange (size) {
      this.pageSize = size
      this.handlePaging()
    },
    currentChange (page) {
      this.currentPage = page
      this.handlePaging()
    },
    handlePaging () {
      const pageCount = Math.ceil(this.tableData.length / this.pageSize)
      const start = (this.currentPage - 1) * this.pageSize
      const end = this.currentPage * this.pageSize
      if (pageCount === this.currentPage) {
        this.allData = this.tableData.slice(start)
      } else {
        this.allData = this.tableData.slice(start, end)
      }
      this.total = this.tableData.length
    }
  },
  mounted () {
    this.handlePaging()
  },
  filters: {
    ageFilter (date) {
      if (typeof date === 'string') {
        date = new Date(date)
      }
      // 出生日期
      const birthYear = date.getFullYear()
      const birthMonth = date.getMonth() + 1
      const birthDay = date.getDate()
      const totalBirth = parseInt(birthMonth) * 100 + birthDay
      // 现在日期
      const nowDate = new Date()
      const nowYear = nowDate.getFullYear()
      const nowMonth = nowDate.getMonth() + 1
      const nowDay = nowDate.getDate()
      const totalNow = parseInt(nowMonth) * 100 + nowDay
      // 岁数
      const age = nowYear - birthYear
      return totalNow >= totalBirth ? age : age - 1
    }
  }
}
</script>

<style lang="scss" scoped>
.box-card {
  width: 600px;
  margin: 20px auto;
  .el-table {
    width: 600px;
    .disable {
      color: #f00;
    }
  }
  .control {
    margin-top: 20px;
  }
}
.el-pagination {
  text-align: center;
}
</style>