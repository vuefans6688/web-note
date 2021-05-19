<template>
  <div class="modal">
    <div class="action">
      <el-button @click="add" type="primary" size="small">添加</el-button>
      <el-button
        @click="batchDelete"
        type="danger"
        size="small"
        :disabled="selectData.length === 0"
        >批量删除</el-button
      >
    </div>
    <el-table
      :data="tableData"
      @selection-change="selectChange"
      ref="table-data"
      style="width: 100%"
    >
      <el-table-column type="selection" align="center"></el-table-column>
      <el-table-column
        type="index"
        label="序号"
        align="center"
        width="70"
      ></el-table-column>
      <el-table-column
        prop="date"
        label="日期"
        align="center"
      ></el-table-column>
      <el-table-column label="年龄" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.age | ageFilter }}</span>
        </template>
      </el-table-column>
      <el-table-column
        prop="name"
        label="名字"
        align="center"
      ></el-table-column>
      <el-table-column prop="sex" label="性别" align="center"></el-table-column>
      <el-table-column
        prop="native"
        label="籍贯"
        align="center"
      ></el-table-column>
      <el-table-column label="状态" align="center">
        <template slot-scope="{ row }">
          <el-tag :type="row.status | statusType">
            {{ row.status | formatStatus }}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <el-button
            @click="edit(scope.$index, scope.row)"
            type="text"
            style="color: #409eff"
            >编辑</el-button
          >
          <el-button
            @click="remove(scope.row.id, scope.row)"
            type="text"
            style="color: #f56c6c"
            >删除</el-button
          >
          <el-button
            @click="stateChange(scope.row)"
            v-if="scope.row.status === 0"
            :style="{ color: scope.row.status === 0 ? '#e6a23c' : '' }"
            type="text"
          >
            未读
          </el-button>
          <el-button
            @click="stateChange(scope.row)"
            v-if="scope.row.status === 1"
            :style="{ color: scope.row.status === 1 ? '#909399' : '' }"
            type="text"
          >
            已读
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog :visible.sync="modalShow" :title="modalTitle" align="center">
      <el-form :model="form" ref="form" label-width="82px" size="small">
        <el-form-item label="日期:">
          <el-date-picker
            v-model="form.date"
            :value-format="valueFormat"
            type="date"
            :editable="false"
            placeholder="选择日期"
            style="width: 100%"
          ></el-date-picker>
        </el-form-item>
        <el-form-item label="年龄:">
          <el-date-picker
            v-model="form.age"
            type="date"
            :editable="false"
            placeholder="请选择"
            style="width: 100%"
          ></el-date-picker>
        </el-form-item>
        <el-form-item prop="name" label="名字:">
          <el-input v-model="form.name" placeholder="请输入名字"></el-input>
        </el-form-item>
        <el-form-item label="籍贯:" prop="native">
          <el-cascader
            :props="nativeProps"
            v-model="form.native"
            :options="nativeOptions"
            style="width: 100%"
            placeholder="选择籍贯"
          >
          </el-cascader>
        </el-form-item>
        <el-form-item label="性别:" prop="sex" align="left">
          <el-select
            v-model="form.sex"
            style="width: 100%"
            placeholder="选择性别"
          >
            <el-option
              v-for="item in sexOptions"
              :key="item.id"
              :label="item.gender"
              :value="item.gender"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="状态:" prop="status" align="left">
          <el-select
            v-model="form.status"
            style="width: 100%"
            placeholder="选择状态"
          >
            <el-option
              v-for="(item, index) in stateOptions"
              :key="index"
              :label="item.text"
              :value="item.state"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button @click="update" type="primary">确认</el-button>
          <el-button @click="modalShow = false">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import { computeAge } from '@/utils/compute-age'
import { provinceList } from '@/utils/province-list'
import { sexList } from '@/utils/sex-list'
import { statusList } from '@/utils/status-list'
export default {
  data () {
    return {
      tableData: [],
      form: {
        id: '',
        name: '',
        date: '',
        age: '',
        sex: '',
        native: '',
        status: ''
      },
      nativeOptions: provinceList,  // 籍贯
      nativeProps: {
        value: 'areaName',
        label: 'areaName',
        children: 'childrenList'
      },
      sexOptions: sexList,  // 性别
      stateOptions: statusList,
      modalShow: false,
      modalTitle: '',
      modalType: '',
      rowIndex: null,
      selectData: []
    }
  },
  methods: {
    add () {
      this.modalShow = true
      this.modalTitle = '添加信息'
      this.modalType = 'add'
      this.form = {}
    },
    edit (index, row) {
      this.modalShow = true
      this.modalTitle = '编辑信息'
      this.modalType = 'edit'
      this.form = {
        id: row.id,
        name: row.name,
        date: row.date,
        age: row.age,
        sex: row.sex,
        native: row.native,
        status: row.status
      }
      this.rowIndex = index
    },
    update () {
      if (this.modalType === 'edit') {
        this.modalShow = false
        this.tableData.splice(this.rowIndex, 1, this.form)
      } else {
        this.modalShow = false
        this.tableData.splice(0, 0, this.form)
      }
    },
    remove (id, row) {
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
    },
    selectChange (data) {
      this.selectData = data
    },
    batchDelete () {
      this.selectData.forEach(item => {
        const index = this.tableData.filter(value => item.id === value.id)
        if (index !== -1) {
          this.tableData.splice(index, 1)
        }
      })
      this.selectData = []
      this.$refs['table-data'].clearSelection()
    },
    stateChange (row) {
      row.status = (row.status + 1) % 2
    }
  },
  computed: {
    valueFormat () {
      return 'yyyy年MM月dd日'
    }
  },
  filters: {
    ageFilter (params) {
      return computeAge(params)
    },
    statusType (status) {
      const statusMap = {
        0: 'warning',
        1: 'info'
      }
      return statusMap[status]
    },
    formatStatus (status) {
      const statusMap = {
        0: '未读',
        1: '已读'
      }
      return statusMap[status]
    }
  }
}
</script>

<style lang="scss" scoped>
.modal {
  margin-top: 20px;
  margin-left: 40px;
}
</style>