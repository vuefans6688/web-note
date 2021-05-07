<template>
  <div class="table-gather">
    <div class="control">
      <el-button type="primary" size="small" @click="batchAdd"
        >批量添加</el-button
      >
      <el-button type="primary" size="small" @click="batchEdit"
        >批量编辑</el-button
      >
      <el-button type="primary" size="small" @click="submit">提交</el-button>
      <el-button type="danger" size="small" @click="batchDelete"
        >批量删除</el-button
      >
    </div>
    <el-table :data="tableData" @selection-change="selectChange" border>
      <el-table-column
        type="selection"
        align="center"
        width="80"
      ></el-table-column>
      <el-table-column label="标题" align="center" width="200">
        <template slot-scope="scope">
          <span v-if="scope.row.show">
            <el-input
              size="small"
              placeholder="请输入标题"
              v-model="scope.row.title"
            ></el-input>
          </span>
          <span v-else>{{ scope.row.title }}</span>
        </template>
      </el-table-column>
      <el-table-column label="内容" align="center" width="250">
        <template slot-scope="scope">
          <span v-if="scope.row.show">
            <el-input
              size="small"
              placeholder="请输入内容"
              v-model="scope.row.content"
            ></el-input>
          </span>
          <span v-else>{{ scope.row.content }}</span>
        </template>
      </el-table-column>
      <el-table-column label="日期" align="center" width="250">
        <template slot-scope="scope">
          <span v-if="scope.row.show">
            <el-date-picker
              type="datetime"
              size="small"
              v-model="scope.row.date"
              placeholder="请选择日期"
            ></el-date-picker>
          </span>
          <span v-else>{{ scope.row.date | dateFilter }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <el-button
            type="primary"
            size="small"
            @click="edit(scope.row, scope.$index)"
            >{{ scope.row.show ? "保存" : "修改" }}</el-button
          >
          <el-button
            type="primary"
            size="small"
            @click="singleCopy(scope.row, scope.$index)"
            >单行复制</el-button
          >
          <el-button
            type="danger"
            size="small"
            @click="singleDelete(scope.$index)"
            >单行删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { dateFormat } from '@/utils/date-format'
import deepCopy from '@/utils/deep-copy'
export default {
  data () {
    return {
      tableData: [
        {
          show: false,
          title: '标题',
          content: '内容',
          date: new Date()
        }
      ],
      multipleSelect: []
    }
  },
  methods: {
    // 单行编辑
    edit (row, index) {
      row.show = !row.show
      this.$set(this.tableData, index, row)
    },
    // 批量编辑
    batchEdit () {
      this.tableData.map((item, index) => {
        item.show = true
        this.$set(this.tableData, index, item)
      })
    },
    // 提交
    submit () {
      this.tableData.map((item, index) => {
        item.show = false
        this.$set(this.tableData, index, item)
      })
    },
    // 单行复制
    singleCopy (row, index) {
      this.tableData.splice(index, 0, deepCopy(row))
    },
    // 单行删除
    singleDelete (index) {
      this.tableData.splice(index, 1)
    },
    // 批量添加
    batchAdd () {
      if (this.multipleSelect.length === 0) {
        const list = {
          show: false,
          title: '',
          content: '',
          date: new Date()
        }
        this.tableData.push(list)
      } else {
        this.multipleSelect.forEach((item, index) => {
          this.tableData.splice(index, 0, deepCopy(item))
        })
      }
    },
    // 选中数据
    selectChange (value) {
      this.multipleSelect = value
    },
    // 批量删除
    batchDelete () {
      this.multipleSelect.forEach((item, index) => {
        item.id = index  // 获取要删除的数据下标
        this.tableData.filter((value, i) => {
          if (item.id === value.id) {
            this.tableData.splice(i, 1)
          }
        })
      })
    }
  },
  filters: {
    dateFilter (date) {
      if (typeof date === 'string') {
        date = new Date(date)
      }
      const years = date.getFullYear()
      const months = dateFormat(date.getMonth() + 1)
      const days = dateFormat(date.getDate())
      const hours = dateFormat(date.getHours())
      const minutes = dateFormat(date.getMinutes())
      return `${years}年${months}月${days}日 ${hours}:${minutes}`
    }
  }
}
</script>

<style scoped>
.control {
  text-align: center;
  margin-top: 20px;
}
.el-table {
  margin: 20px auto;
  width: 1100px;
}
</style>
