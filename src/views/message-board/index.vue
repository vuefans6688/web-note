<template>
  <div class="message-board">
    <div class="control">
      <label>模糊搜索: </label>
      <el-input v-model="keyword" size="small" v-auto-focus></el-input>
      <el-button type="primary" size="small" @click="wantMessage"
        >我要留言</el-button
      >
      <el-button type="danger" size="small" @click="batchDelete"
        >批量删除</el-button
      >
    </div>
    <el-dialog title="添加留言" :visible.sync="isAdd" align="center">
      <el-form :model="formBoard" label-width="80px" size="small">
        <el-form-item label="昵称:" prop="nickName">
          <el-input
            v-model.trim="formBoard.nickName"
            placeholder="请输入昵称"
          ></el-input>
        </el-form-item>
        <el-form-item label="内容:" prop="content">
          <el-input
            type="textarea"
            v-model.trim="formBoard.content"
            placeholder="请输入内容"
          ></el-input>
        </el-form-item>
        <el-form-item label="日期:" prop="date">
          <el-date-picker
            style="width: 100%"
            type="datetime"
            v-model="formBoard.date"
            placeholder="选择日期"
          ></el-date-picker>
        </el-form-item>
        <el-form-item label="民族:" prop="nation">
          <el-select
            style="width: 100%"
            v-model="formBoard.nation"
            placeholder="选择民族"
          >
            <el-option
              v-for="formBoard in nationOption"
              :key="formBoard.id"
              :label="formBoard.name"
              :value="formBoard.name"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="性别:" prop="sex">
          <el-select
            style="width: 100%"
            v-model="formBoard.sex"
            placeholder="选择性别"
          >
            <el-option
              v-for="formBoard in sexOption"
              :key="formBoard.id"
              :label="formBoard.gender"
              :value="formBoard.gender"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="证件类型:" prop="idCard">
          <el-select
            style="width: 100%"
            v-model="formBoard.idCard"
            placeholder="选择证件类型"
          >
            <el-option
              v-for="formBoard in idOption"
              :key="formBoard.id"
              :label="formBoard.name"
              :value="formBoard.name"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="籍贯:" prop="nativePlace">
          <el-cascader
            :props="addProp"
            style="width: 100%"
            v-model="formBoard.nativePlace"
            :options="provinceOption"
            placeholder="选择籍贯"
          >
          </el-cascader>
        </el-form-item>
        <el-form-item label="婚姻状况:" prop="marriage" align="left">
          <el-radio-group v-model="formBoard.marriage">
            <el-radio
              v-for="formBoard in marriageOption"
              :key="formBoard.id"
              :label="formBoard.label"
              :value="formBoard.label"
              border
            ></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item align="right">
          <el-button type="primary" @click="addConfirm">确 定</el-button>
          <el-button @click="isAdd = false">取 消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
    <el-card class="table-board">
      <h3 class="title">有{{ tableData.length }}条留言</h3>
      <!-- <el-table :data="tableData" @selection-change="selectChange" :row-style="rowStyle"> -->
      <el-table
        :data="search(keyword)"
        @selection-change="selectChange"
        :row-style="rowStyle"
      >
        <!-- <el-table :data="searchList" @selection-change="selectChange" :row-style="rowStyle"> -->
        <el-table-column type="selection" align="center"></el-table-column>
        <el-table-column
          prop="nickName"
          label="昵称"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="content"
          label="内容"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="date"
          label="日期"
          align="center"
          :formatter="formatter"
          width="200"
        ></el-table-column>
        <el-table-column
          prop="nation"
          label="民族"
          align="center"
          width="60"
        ></el-table-column>
        <el-table-column
          prop="sex"
          label="性别"
          align="center"
          width="60"
        ></el-table-column>
        <el-table-column
          prop="idCard"
          label="证件类型"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="nativePlace"
          label="籍贯"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="marriage"
          label="婚姻状况"
          align="center"
          width="80"
        ></el-table-column>
        <el-table-column
          prop="status"
          label="留言状态"
          align="center"
          width="80"
        >
          <template slot-scope="scope">
            <span>{{ scope.row.status === 1 ? "已读" : "未读" }}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作" align="center">
          <template slot-scope="scope">
            <el-button
              @click="eidtBoard(scope.$index, scope.row)"
              :style="{ color: scope.row.status === 1 ? '' : '#ccc' }"
              type="text"
              >修改</el-button
            >
            <!-- <el-button type="text" @click="deleteBoard(scope.$index)" :style="{color: scope.row.status === 1 ? '' : '#ccc'}" class="delete">删除</el-button> -->
            <!-- <el-button type="text" @click="deleteBoard(scope.row.id)" :style="{color: scope.row.status === 1 ? '' : '#ccc'}" class="delete">删除</el-button> -->
            <el-button
              @click="deleteBoard(scope.row.id)"
              :style="{ color: scope.row.status === 1 ? '' : '#ccc' }"
              class="delete"
              type="text"
              >删除</el-button
            >
            <el-button
              @click="stateSwitch(scope.row)"
              :style="{ color: scope.row.status === 1 ? '' : '#f00' }"
              type="text"
            >
              {{ scope.row.status === 1 ? "已读" : "未读" }}
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
    <el-dialog title="修改留言" :visible.sync="isEdit" align="center">
      <el-form :model="modifyBoard" label-width="80px" size="small">
        <el-form-item label="昵称:" prop="nickName">
          <el-input
            v-model.trim="modifyBoard.nickName"
            placeholder="修改昵称"
          ></el-input>
        </el-form-item>
        <el-form-item label="内容:" prop="content">
          <el-input
            type="textarea"
            v-model.trim="modifyBoard.content"
            placeholder="修改内容"
          ></el-input>
        </el-form-item>
        <el-form-item label="日期:" prop="date">
          <el-date-picker
            style="width: 100%"
            type="datetime"
            v-model="modifyBoard.date"
            placeholder="选择日期"
          ></el-date-picker>
        </el-form-item>
        <el-form-item label="民族:" prop="nation">
          <el-select
            style="width: 100%"
            v-model="modifyBoard.nation"
            placeholder="选择民族"
          >
            <el-option
              v-for="modifyBoard in nationOption"
              :key="modifyBoard.id"
              :label="modifyBoard.name"
              :value="modifyBoard.name"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="性别:" prop="sex">
          <el-select
            style="width: 100%"
            v-model="modifyBoard.sex"
            placeholder="选择性别"
          >
            <el-option
              v-for="modifyBoard in sexOption"
              :key="modifyBoard.id"
              :label="modifyBoard.gender"
              :value="modifyBoard.gender"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="证件类型:" prop="idCard">
          <el-select
            style="width: 100%"
            v-model="modifyBoard.idCard"
            placeholder="选择证件类型"
          >
            <el-option
              v-for="modifyBoard in idOption"
              :key="modifyBoard.id"
              :label="modifyBoard.name"
              :value="modifyBoard.name"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="籍贯:" prop="nativePlace">
          <el-cascader
            :props="modifyProp"
            style="width: 100%"
            v-model="modifyBoard.nativePlace"
            :options="provinceOption"
            placeholder="选择籍贯"
          >
          </el-cascader>
        </el-form-item>
        <el-form-item label="婚姻状况:" prop="marriage" align="left">
          <el-radio-group v-model="modifyBoard.marriage">
            <el-radio
              v-for="modifyBoard in marriageOption"
              :key="modifyBoard.id"
              :label="modifyBoard.label"
              :value="modifyBoard.label"
              border
            >
            </el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item align="right">
          <el-button type="primary" @click="editConfirm">确 定</el-button>
          <el-button @click="isEdit = false">取 消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
const UN_READ = 0
const AL_READ = 1
import nations from '@/utils/nations'
import idCard from '@/utils/idCard'
import provinceList from '@/utils/provinceList'
import marriageList from '@/utils/marriageList'
import { dateFormat } from '@/utils/dateFormat'
export default {
  // 自定义指令，让文本框自动聚焦
  directives: {
    'auto-focus': {
      inserted (el) {
        el.children[0].focus()  // element-ui组件中的用法
        // el.focus()  // 非ui组件中的用法
      }
    }
  },
  data () {
    return {
      isAdd: false,    // 是否显示新增
      isEdit: false,   // 是否显示编辑
      selectBoard: [],  // 选中的数据
      nationOption: nations,  // 民族
      sexOption: [  // 性别
        { id: 0, gender: '女' },
        { id: 1, gender: '男' }
      ],
      idOption: idCard,  // 身份证
      provinceOption: provinceList,  // 籍贯
      addProp: {
        value: 'areaName',
        label: 'areaName',
        children: 'childrenList'
      },
      modifyProp: {
        value: 'areaName',
        label: 'areaName',
        children: 'childrenList'
      },
      marriageOption: marriageList,  // 婚姻状况
      tableData: [
        {
          id: 1,
          nickName: '抬起头我就是上帝',
          content: '一缕明媚的晨光洒向我的窗沿',
          date: new Date(),
          nation: '苗族',
          sex: '女',
          idCard: '中国人民解放军军官证',
          nativePlace: ['山东', '临沂市', '蒙阴县'],
          marriage: '未婚',
          status: AL_READ
        }
      ],
      formBoard: {  // 新增数据
        id: '',
        nickName: '',
        content: '',
        date: new Date(),
        nation: '',
        sex: '',
        idCard: '',
        nativePlace: [],
        marriage: ''
      },
      modifyBoard: {  // 修改数据
        id: '',
        nickName: '',
        content: '',
        date: new Date(),
        nation: '',
        sex: '',
        idCard: '',
        nativePlace: [],
        marriage: ''
      },
      index: null,  // 记录编辑的行号
      keyword: '',  // 搜索关键字
      isEmpty: false  // 数据列表是否为空
    }
  },
  // computed: {
  //   searchList () {
  //     return this.tableData.filter(item => !this.keyword || item.nickName.includes(this.keyword))
  //   }
  // },
  methods: {
    // search (keyword) {
    //   return this.tableData.filter(item => {
    //     return new RegExp(keyword, 'g').test(item.nickName)
    //   })
    // },
    search (keyword) {
      const result = this.tableData.filter(item => new RegExp(keyword, 'g').test(item.nickName))
      this.isEmpty = result.length > 0 ? false : true
      return result
    },
    wantMessage () {
      this.isAdd = true
    },
    addConfirm () {
      this.isAdd = false
      if (this.formBoard.nickName === '') {
        this.$message({
          message: '昵称不能为空!',
          type: 'warning'
        })
        return
      } else {
        this.tableData.push({
          id: this.tableData.length + 1,
          nickName: this.formBoard.nickName,
          content: this.formBoard.content,
          date: this.formBoard.date || new Date(),
          nation: this.formBoard.nation,
          sex: this.formBoard.sex,
          idCard: this.formBoard.idCard,
          nativePlace: this.formBoard.nativePlace,
          marriage: this.formBoard.marriage,
          status: AL_READ
        })
        this.formBoard = {}
      }
    },
    formatter (row, column, cellValue) {
      if (typeof cellValue === 'string') {  // 判断日期是否是字符串类型
        cellValue = new Date(cellValue)
      }
      const years = cellValue.getFullYear()
      const months = dateFormat(cellValue.getMonth() + 1)
      const days = dateFormat(cellValue.getDate())
      const hours = dateFormat(cellValue.getHours())
      const minutes = dateFormat(cellValue.getMinutes())
      return `${years}年${months}月${days}日 ${hours}:${minutes}`
    },
    // deleteBoard(index) {
    //   this.tableData.splice(index, 1) 
    // },
    deleteBoard (id) {
      // 判断item.id是否等于id，把要删除的元素留下
      this.tableData = this.tableData.filter(item => item.id !== id)
    },
    // deleteBoard(id) {
    //   // 用findIndex方法直接找到要删除的元素的索引
    //   const index = this.tableData.findIndex(item => item.id === id)
    //   this.tableData.splice(index, 1)
    // },
    eidtBoard (index) {
      this.isEdit = true
      this.modifyBoard = { ...this.tableData[index] }
      this.index = index
    },
    editConfirm () {
      this.isEdit = false
      this.tableData[this.index].nickName = this.modifyBoard.nickName
      this.tableData[this.index].content = this.modifyBoard.content
      this.tableData[this.index].date = this.modifyBoard.date
      this.tableData[this.index].nation = this.modifyBoard.nation
      this.tableData[this.index].sex = this.modifyBoard.sex
      this.tableData[this.index].idCard = this.modifyBoard.idCard
      this.tableData[this.index].nativePlace = this.modifyBoard.nativePlace
      this.tableData[this.index].marriage = this.modifyBoard.marriage
    },
    selectChange (value) {
      this.selectBoard = value
    },
    batchDelete () {
      // 方法一
      this.selectBoard.forEach(item => {
        const index = this.tableData.findIndex(value => value.id === item.id)
        if (index !== -1) {
          this.tableData.splice(index, 1)
        }
      })
      this.selectBoard = []

      // 方法二
      // this.tableData = this.tableData.filter(item => {
      //   return this.selectBoard.findIndex(value => value.id === item.id) < 0
      // })

      // 方法三
      // const arr = []
      // this.tableData.map(item => {
      //   const selectList = this.selectBoard.filter(value => value.id === item.id)
      //   if (!selectList || selectList.length === 0) {
      //     arr.push(item)
      //   }
      // })     
      // this.tableData = arr  // 替换成空数组
    },
    stateSwitch (row) {
      row.status = (row.status + 1) % 2
    },
    rowStyle ({ row }) {
      const styles = {}
      if (row.status === UN_READ) {
        styles.color = '#ccc'
      }
      return styles
    }
  }
}
</script>

<style lang="scss" scoped>
.message-board {
  width: 1260px;
  margin: 30px auto;
  .control {
    label {
      color: #666;
    }
    .el-input {
      width: 280px;
      margin-right: 10px;
    }
  }
  .table-board {
    margin-top: 20px;
    .title {
      color: #666;
    }
    .delete {
      color: #f00;
    }
  }
}
</style>
