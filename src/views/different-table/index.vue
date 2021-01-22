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
        <el-date-picker v-model="addDetail.dates" type="date" value-format="yyyy-MM-dd" placeholder="选择日期"></el-date-picker>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="add">新增</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="newsList" stripe>
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
    <el-dialog :visible.sync="isEdit" title="编辑资料" align="center">
      <el-form :model="editDetail" size="small" label-width="80px">
        <el-form-item prop="title" label="标题:">
          <el-input v-model="editDetail.title"></el-input>
        </el-form-item>
        <el-form-item prop="user" label="发布人:">
          <el-input v-model="editDetail.user"></el-input>
        </el-form-item>
        <el-form-item prop="dates" label="发布时间:">
          <el-date-picker v-model="editDetail.dates" type="date" value-format="yyyy-MM-dd" placeholder="请选择日期" style="width: 100%;"></el-date-picker>
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
          title: '在移动设备开发',
          user: '小红',
          dates: '2020-11-18',
          id: "45211546"
        }, 
        {
          title: '图形及特效特性',
          user: '小梅',
          dates: '2020-11-18',
          id: "61341341"
        }
      ],
      editId: '',
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
      this.newsList.splice(index, 1)
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
    }
  }
}
</script>

<style lang="scss" scoped>
.different-table {
  margin-top: 20px;
  .el-table {
    width: 70%;
  }
}
</style>