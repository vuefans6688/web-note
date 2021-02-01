<template>
  <div class="different-table">
    <el-form :inline="true" :model="addDetail" :rules="rules" size="small">
      <el-form-item label="标题:" prop="title">
        <el-input v-model="addDetail.title" placeholder="请输入标题"></el-input>
      </el-form-item>
      <el-form-item label="发布人:" prop="user">
        <el-input v-model="addDetail.user" placeholder="请输入发布人"></el-input>
      </el-form-item>
      <el-form-item label="发布时间:">
        <el-date-picker v-model="addDetail.dates" :value-format="valueFormat" :editable="false" type="date" placeholder="选择日期"></el-date-picker>
      </el-form-item>
      <el-form-item>
        <el-button @click="add" :disabled="disabled" type="primary">新增</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="allData" @selection-change="selectChange" stripe>
      <el-table-column type="selection" align="center"></el-table-column>
      <el-table-column label="序号" align="center">
        <template slot-scope="scope">
          <span>{{ scope.$index + 1 }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="title" label="标题"></el-table-column>
      <el-table-column align="center" prop="user" label="发布人"></el-table-column>
      <el-table-column align="center" prop="dates" label="发布时间"></el-table-column>
      <el-table-column align="center" label="操作">
        <template slot-scope="scope">
          <el-button @click="del(scope.row.id)" type="danger" size="small">删除</el-button>
          <el-button @click="edit(scope.row, scope.$index)" type="primary" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="batch-delete">
      <el-button @click="batchDelete" :disabled="selectData.length === 0" type="danger" size="small">批量删除</el-button>
    </div>
    <el-pagination @size-change="sizeChange" @current-change="currentChange" :total="total"
      :current-page="currentPage" :page-size="pageSize" :page-sizes="[1, 2, 3, 4]"
      layout="total, sizes, prev, pager, next, jumper" background>
    </el-pagination>
    <el-dialog title="提示" :visible.sync="dialogVisible" width="50%" align="center">
      <div class="delete-tip">
        <i class="el-icon-warning-outline"></i>
        <span class="text">是否删除该数据?</span>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false" size="small">取消</el-button>
        <el-button @click="confirm" type="primary" size="small">确定</el-button>
      </div>
		</el-dialog>
    <el-dialog :visible.sync="isEdit" title="编辑资料" align="center">
      <el-form :model="editDetail" size="small" label-width="80px">
        <el-form-item prop="title" label="标题:">
          <el-input v-model="editDetail.title"></el-input>
        </el-form-item>
        <el-form-item prop="user" label="发布人:">
          <el-input v-model="editDetail.user"></el-input>
        </el-form-item>
        <el-form-item prop="dates" label="发布时间:">
          <el-date-picker v-model="editDetail.dates" type="date" :value-format="valueFormat" placeholder="请选择日期" style="width: 100%;"></el-date-picker>
        </el-form-item>
        <el-form-item>
          <el-button @click="update" type="primary">更新</el-button>
          <el-button @click="isEdit = false">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isEdit: false,
      addDetail: {},
      editDetail: {},
      newsList: [
        {
          id: '45211546',
          title: '在移动设备开发',
          user: '小红',
          dates: '2020-11-18'
        }, 
        {
          id: '61341341',
          title: '图形及特效特性',
          user: '小梅',
          dates: '2020-11-18'
        }
      ],
      selectData: [],
      allData: [],
      editId: '',
      dialogVisible: false,
      pageSize: 2,  // 每页条数
      currentPage: 1,  // 当前页码
      total: 0,  // 数据总条数
      rules: {
        title: [
          { required: true, message: '标题不能为空', trigger: 'blur' }
        ],
        user: [
          { required: true, message: '发布人不能为空', trigger: 'blur' }
        ]
      }
    }
  },
  computed: {
    disabled () {
      return !this.addDetail.title && !this.addDetail.user && !this.addDetail.dates
    },
    valueFormat () {
      return 'yyyy-MM-dd'
    }
  },
  methods: {
    // 新增
    add () {
      this.newsList.push({
        id: Math.floor(Math.random() * 1000000 + 1),
        title: this.addDetail.title,
        user: this.addDetail.user,
        dates: this.addDetail.dates
      })
      this.addDetail = {}
    },
    // 删除
    del (id) {
      const index = this.newsList.findIndex(item => item.id === id)
      this.editId = index
      this.dialogVisible = true
    },
    confirm () {
      this.newsList.splice(this.editId, 1)
      this.dialogVisible = false
      this.handlePaging()
    },
    // 编辑
    edit (row, index) {
      this.editDetail = {
        id: row.id,
        title: row.title,
        user: row.user,
        dates: row.dates
      }
      this.editId = index
      this.isEdit = true
    },
    // 确认更新
    update () {
      this.newsList[this.editId].title = this.editDetail.title
      this.newsList[this.editId].user = this.editDetail.user
      this.newsList[this.editId].dates = this.editDetail.dates
      this.isEdit = false
    },
    selectChange (value) {
      this.selectData = value
    },
    batchDelete () {
      this.selectData.forEach(item => {
        const index = this.newsList.filter(value => value.id === item.id)
        if (index !== -1) {
          this.newsList.splice(index, 1)
        }
      })
      this.selectData = []
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
      const pageIndex = Math.ceil(this.newsList.length / this.pageSize)
      if (pageIndex === this.currentPage) {
        this.allData = this.newsList.slice((this.currentPage - 1) * this.pageSize)
      } else {
        this.allData = this.newsList.slice((this.currentPage - 1) * this.pageSize, this.currentPage * this.pageSize)
      }
      this.total = this.newsList.length
    }
  },
  mounted () {
    this.handlePaging()
  }
}
</script>

<style lang="scss" scoped>
.different-table {
  margin-top: 20px;
  .el-table {
    width: 80%;
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
      font-size: 17px;
    }
  }
  .batch-delete {
    margin-top: 10px;
  }
  .el-pagination {
    text-align: center;
  }
}
</style>