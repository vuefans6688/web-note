<template>
  <div class="parent">
    <el-card class="box-card" v-show="isShow">
      <div class="select">已选择{{ selectData.length }}项</div>
      <div class="fork" @click="close">
        <i class="el-icon-close"></i>
      </div>
      <div class="control">
        <el-button @click="cancel" size="mini">取消</el-button>
        <el-button @click="confirm(selectData)" type="primary" size="mini"
          >确定</el-button
        >
      </div>
    </el-card>
    <el-table :data="formData" @selection-change="selectChange" ref="form-ref">
      <el-table-column
        type="selection"
        align="center"
        width="60"
      ></el-table-column>
      <el-table-column prop="name" label="名字" align="center" width="100">
        <template slot-scope="scope">
          <el-input
            v-model="scope.row.name"
            v-if="scope.row.isEdit"
            size="small"
            placeholder="请输入名字"
          ></el-input>
          <span v-else>{{ scope.row.name }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="sex" label="性别" align="center" width="90">
        <template slot-scope="scope">
          <el-input
            v-model="scope.row.sex"
            v-if="scope.row.isEdit"
            size="small"
            placeholder="请输入性别"
          ></el-input>
          <span v-else>{{ scope.row.sex }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="age" label="年龄" align="center" width="90">
        <template slot-scope="scope">
          <el-input
            v-model="scope.row.age"
            v-if="scope.row.isEdit"
            size="small"
            placeholder="请输入年龄"
          ></el-input>
          <span v-else>{{ scope.row.age }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <el-button
            @click="modify(scope.$index, scope.row)"
            v-if="!scope.row.isModify"
            type="text"
            >修改</el-button
          >
          <el-button
            @click="modifyConfirm(scope.$index)"
            v-if="scope.row.isModify"
            type="text"
            class="confirm"
            >确定</el-button
          >
          <el-button
            @click="modifyCancel(scope.$index)"
            v-if="scope.row.isModify"
            type="text"
            class="cancel"
            >取消</el-button
          >
          <el-button @click="remove(scope.row.id)" type="text" class="remove"
            >移除</el-button
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
      isShow: false,
      selectData: [],
      formData: [
        { id: '101', name: '莉莉', sex: '女', age: 23, isEdit: false, isModify: false },
        { id: '202', name: '韩梅梅', sex: '女', age: 20, isEdit: false, isModify: false },
        { id: '303', name: '卫华', sex: '女', age: 22, isEdit: false, isModify: false },
        { id: '404', name: '露茜', sex: '女', age: 24, isEdit: false, isModify: false }
      ],
      editData: {
        id: '',
        name: '',
        sex: '',
        age: '',
        isEdit: false,
        isModify: false
      },
      currentIndex: 0
    }
  },
  methods: {
    selectChange (value) {
      this.selectData = value
      this.isShow = false
      if (value && value.length > 0) {
        this.isShow = true
      }
    },
    confirm (selectList) {
      this.isShow = true
      this.$confirm(`是否删除${selectList[0].name}?`, {
        confirmButtonText: '确定',
        cancelButtonText: '取消'
      }).then(() => {
        this.formData = this.formData.filter(item => {
          return selectList.findIndex(value => value.id === item.id) < 0
        })
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消!'
        })
      })
    },
    cancel () {
      this.isShow = false
      this.$refs['form-ref'].clearSelection()
    },
    close () {
      this.cancel()
    },
    modify (i, row) {
      this.formData[i].isEdit = true
      this.formData[i].isModify = true
      this.editData = {
        name: row.name,
        sex: row.sex,
        age: row.age
      }
      this.currentIndex = i
    },
    modifyCancel (i) {
      this.formData[i].isEdit = false
      this.formData[i].isModify = false
      this.formData[i].name = this.editData.name
      this.formData[i].sex = this.editData.sex
      this.formData[i].age = this.editData.age
    },
    modifyConfirm (i) {
      this.formData[i].isEdit = false
      this.formData[i].isModify = false
    },
    remove (id) {
      const index = this.formData.findIndex(item => item.id === id)
      this.formData.splice(index, 1)
    }
  }
}
</script>

<style lang="scss" scoped>
.box-card {
  width: 340px;
  margin: 20px auto;
  .select {
    text-align: center;
  }
  .fork {
    position: relative;
    padding-top: 20px;
    cursor: pointer;
    .el-icon-close {
      position: absolute;
      top: -26px;
      right: 5px;
      font-size: 20px;
    }
  }
  .control {
    text-align: center;
  }
}
.el-table {
  width: 500px;
  margin: 20px auto;
  .confirm {
    color: #42b983;
  }
  .cancel {
    color: #888;
  }
  .remove {
    color: #f00;
  }
}
</style>