<template>
  <div class="public-module">
    <el-form :inline="true" size="small">
      <el-form-item label="模板名称:">
        <el-input v-model="templateName"></el-input>
      </el-form-item>
      <el-form-item label="模板类型:">
        <el-select v-model="templateType" @change="ownerTypeChange">
          <el-option
            v-for="item in moduleOption"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button @click="addModule" type="primary">新增</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="tableData" style="width: 100%" stripe>
      <el-table-column type="index" label="序号" align="center">
      </el-table-column>
      <el-table-column prop="name" label="模板名称" align="center">
      </el-table-column>
      <el-table-column prop="owner_type" label="模板类型" align="center">
      </el-table-column>
      <el-table-column prop="create_time" label="创建时间" align="center">
      </el-table-column>
      <el-table-column prop="control" label="操作" align="center">
        <template slot-scope="scope">
          <el-button @click="edit(scope.$index)" type="text">修改</el-button>
          <el-button @click="del(scope.$index)" type="text">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-size="10"
      layout="total, prev, pager, next, jumper"
      :total="total"
    >
    </el-pagination>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
function sortListByName (obj1, obj2) {
  return obj1.name.localeCompare(obj2.name)
}
export default {
  props: {
    message: Array,
    default: () => []
  },
  data () {
    return {
      tableData: [],
      moduleOption: [
        {
          value: 2,
          label: '全部'
        },
        {
          value: 1,
          label: '通用模板'
        },
        {
          value: 1,
          label: '个人模板'
        }
      ],
      templateName: '',
      templateId: '',
      templateType: '全部',
      selectedType: 2,
      ownerType: 2,
      currentTemplateType: 0,
      currentPage: 1,
      pageSize: 10,
      total: 0
    }
  },
  mounted () {
    switch (this.$route.params.formulationId) {
      case 'west':
        this.renderTemplateList(2)
        break
      default:
        break
    }
  },
  watch: {
    $route (to) {
      switch (to.params.formulationId) {
        case 'west':
          this.renderTemplateList(2)
          break
        default:
          break
      }
    },
    templateType: {
      handler () {
        this.getTemplateList(this.templateType)
      }
    }
  },
  methods: {
    renderTemplateList (selectedType) {
      this.selectedType = selectedType
      this.tableData = []
      this.currentPage = 1
      this.getTemplateList()
    },
    makeDateTime (timestamp) {
      const str = '' + timestamp
      return '20' + str.substr(0, 2) + '-' + str.substr(2, 2) + '-' + str.substr(4, 2) + ' ' + str.substr(6, 2) + ':' + str.substr(8, 2) + ':' + str.substr(10, 2)
    },
    getTemplateList () {
      this.tableData = []
      this.$http.post('/service/template/list', {
        head: {
          accessToken: this.token,
          lastnotice: 0,
          msgid: ''
        },
        body: {
          clinic_id: this.clinic,
          type: this.selectedType,
          owner_type: this.ownerType,
          page_index: this.currentPage - 1,
          page_size: this.pageSize,
          name: (!this.templateName ? '' : this.templateName)
        }
      }).then(response => {
        const res = response.data
        if (res.errcode === 0 && res.data && res.data.clinic_id === this.clinic &&
          res.data.items && res.data.items.length) {
          const data = res.data.items || []
          this.tableData = data.map(value => {
            value.owner_type = value.owner_type ? '通用模板' : '个人模板'
            value.create_time = this.makeDateTime(value.create_time)
            return value
          })
          this.total = res.data.total
          this.tableData.sort(sortListByName)
        } else {
          this.tableData = []
          if (res.errcode !== 0) {
            this.$message({ message: res.errmsg, type: 'error', showClose: true, duration: 1000 })
          }
        }
      }).catch()
    },
    handleCurrentChange (page) {
      this.currentPage = page
      this.getTemplateList()
    },
    ownerTypeChange (page) {
      this.ownerType = page
      this.getTemplateList(this.templateName)
    },
    addModule () {
      if (this.$route.params.formulationId === 'west') {
        const id = 'new'
        this.$router.push({ name: 'NewWesternFormulation', params: { templateId: id, data: null, selectedType: 2 } })
      }
    },
    edit (index) {
      if (this.$route.params.formulationId === 'west') {
        const id = this.tableData[index].template_id
        this.$router.push({ name: 'NewWesternFormulation', params: { templateId: id, data: this.tableData[index], selectedType: 2 } })
      }
    },
    del (index) {
      this.$confirm('是否删除该模板?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        const id = this.tableData[index].template_id
        this.$http.post('/service/template/delete', {
          head: {
            accessToken: this.token,
            lastnotice: 0,
            msgid: ''
          },
          body: {
            clinic_id: this.clinic,
            template_id: id
          }
        }).then(response => {
          const res = response.data
          if (res.errcode === 0 && res.data && res.data.clinic_id === this.clinic) {
            this.tableData.splice(index, 1)
            this.$message({ message: '删除成功!', type: 'success', showClose: true, duration: 1000 })
            this.total -= 1;
          } else if (res.errcode !== 0) {
            this.$message({ message: res.errmsg, type: 'error', showClose: true, duration: 1000 })
          }
        })
      }).catch(() => {
        this.$message({ message: '已取消删除!', type: 'info', showClose: true, duration: 1000 })
      })
    }
  },
  computed: {
    ...mapGetters(['token', 'clinic'])
  }
}
</script>

<style lang="scss" scoped>
</style>