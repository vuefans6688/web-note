<template>
  <div class="region">
    <div class="add-button">
      <el-button @click="addTo" type="primary" size="small">添加</el-button>
    </div>
    <el-dialog title="添加人员信息" :visible.sync="addVisible" align="center">
      <el-form :model="addForm" ref="add-form" size="small" label-width="82px">
        <el-form-item prop="name" label="姓名:">
          <el-input v-model="addForm.name" placeholder="请输入姓名"></el-input>
        </el-form-item>
        <el-form-item prop="date" label="日期:">
          <el-date-picker
            v-model="addForm.date"
            :value-format="valueFormat"
            type="date"
            :editable="false"
            placeholder="选择日期"
            style="width: 100%"
          ></el-date-picker>
        </el-form-item>
        <el-form-item label="年龄:">
          <el-date-picker
            v-model="addForm.age"
            type="date"
            :editable="false"
            placeholder="选择日期"
            style="width: 100%"
          ></el-date-picker>
        </el-form-item>
        <el-form-item prop="native" label="籍贯:">
          <el-select
            @change="chooseProvince"
            v-model="province"
            placeholder="请选择省份"
            style="width: 100%"
          >
            <el-option
              v-for="(item, index) in provinceList"
              :key="item.areaId"
              :label="item.areaName"
              :value="index"
            ></el-option>
          </el-select>
          <el-select
            @change="chooseCity"
            v-model="city"
            placeholder="请选择城市"
            style="width: 100%"
          >
            <el-option
              v-for="(item, index) in cityList"
              :key="item.areaId"
              :label="item.areaName"
              :value="index"
            ></el-option>
          </el-select>
          <el-select
            @change="chooseArea"
            v-model="area"
            placeholder="请选择地区"
            style="width: 100%"
          >
            <el-option
              v-for="(item, index) in areaList"
              :key="item.areaId"
              :label="item.areaName"
              :value="index"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button @click="addVisible = false" size="small">取消</el-button>
          <el-button type="primary" size="small" @click="addConfirm"
            >确定</el-button
          >
        </el-form-item>
      </el-form>
    </el-dialog>
    <el-table :data="tableData" style="width: 50%">
      <el-table-column
        prop="name"
        label="姓名"
        align="center"
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
      <el-table-column label="籍贯" align="center">
        <template slot-scope="scope">
          <span>{{
            scope.row.native.province.areaName +
            scope.row.native.city.areaName +
            scope.row.native.area.areaName
          }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <el-button @click="editTo(scope.row, scope.$index)" type="text"
            >编辑</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <el-dialog title="编辑人员信息" :visible.sync="editVisible" align="center">
      <el-form
        :model="editForm"
        ref="edit-form"
        size="small"
        label-width="82px"
      >
        <el-form-item prop="name" label="姓名:">
          <el-input v-model="editForm.name" placeholder="请输入姓名"></el-input>
        </el-form-item>
        <el-form-item prop="date" label="日期:">
          <el-date-picker
            v-model="editForm.date"
            :value-format="valueFormat"
            type="date"
            :editable="false"
            placeholder="选择日期"
            style="width: 100%"
          ></el-date-picker>
        </el-form-item>
        <el-form-item label="年龄:">
          <el-date-picker
            v-model="editForm.age"
            type="date"
            :editable="false"
            placeholder="选择日期"
            style="width: 100%"
          ></el-date-picker>
        </el-form-item>
        <el-form-item prop="native" label="籍贯:">
          <el-select
            @change="chooseProvince"
            v-model="province"
            placeholder="请选择省份"
            style="width: 100%"
          >
            <el-option
              v-for="(item, index) in provinceList"
              :key="item.areaId"
              :label="item.areaName"
              :value="index"
            ></el-option>
          </el-select>
          <el-select
            @change="chooseCity"
            v-model="city"
            placeholder="请选择城市"
            style="width: 100%"
          >
            <el-option
              v-for="(item, index) in cityList"
              :key="item.areaId"
              :label="item.areaName"
              :value="index"
            ></el-option>
          </el-select>
          <el-select
            @change="chooseArea"
            v-model="area"
            placeholder="请选择地区"
            style="width: 100%"
          >
            <el-option
              v-for="(item, index) in areaList"
              :key="item.areaId"
              :label="item.areaName"
              :value="index"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button @click="editVisible = false" size="small">取消</el-button>
          <el-button type="primary" size="small" @click="editConfirm"
            >确定</el-button
          >
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import { provinceList } from '../../utils/province-list'
import { computeAge } from '../../utils/compute-age'
export default {
  data () {
    return {
      tableData: [],
      addVisible: false,
      editVisible: false,
      province: '',
      city: '',
      area: '',
      provinceList,
      cityList: [],
      areaList: [],
      addForm: {
        id: '',
        name: '',
        date: '',
        age: '',
        native: {}
      },
      editForm: {
        id: '',
        name: '',
        date: '',
        age: '',
        native: {}
      },
      rowIndex: null
    }
  },
  methods: {
    addTo () {
      this.addVisible = true
    },
    addConfirm () {
      const province = provinceList[this.province]  // 获取省数据
      const city = province.childrenList[this.city]  // 获取市数据
      const area = city.childrenList[this.area]  // 获取区数据
      this.tableData.push({
        id: this.tableData.length + 1,
        name: this.addForm.name,
        date: this.addForm.date,
        age: this.addForm.age,
        native: {
          province: { areaId: province.areaId, areaName: province.areaName },  // 省id和name
          city: { areaId: city.areaId, areaName: city.areaName },  // 市id和name
          area: { areaId: area.areaId, areaName: area.areaName }  // 区id和name
        }
      })
      this.addVisible = false
      this.resetForm()
    },
    editTo (row, index) {
      this.editForm = {
        id: row.id,
        name: row.name,
        date: row.date,
        age: row.age,
        native: row.native
      }
      this.rowIndex = index
      this.editVisible = true
    },
    editConfirm () {
      const province = provinceList[this.province]
      const city = province.childrenList[this.city]
      const area = city.childrenList[this.area]
      this.editForm.native = {
        province: { areaId: province.areaId, areaName: province.areaName },
        city: { areaId: city.areaId, areaName: city.areaName },
        area: { areaId: area.areaId, areaName: area.areaName }
      }
      this.tableData[this.rowIndex].native = this.editForm.native
      this.tableData[this.rowIndex].name = this.editForm.name
      this.tableData[this.rowIndex].date = this.editForm.date
      this.tableData[this.rowIndex].age = this.editForm.age
      this.editVisible = false
      this.resetForm()
    },
    resetForm () {
      this.province = ''
      this.city = ''
      this.area = ''
      this.addForm = this.editForm = {}
    },
    chooseProvince (index) {
      this.cityList = provinceList[index].childrenList
      this.areaList = []
      this.city = ''
      this.area = ''
    },
    chooseCity (index) {
      this.areaList = this.cityList[index].childrenList
      this.area = ''
    },
    chooseArea (index) {
      this.area = index
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
    }
  }
}
</script>

<style lang="scss" scoped>
.add-button {
  text-align: center;
  margin-top: 20px;
}
.el-table {
  margin: 20px auto;
}
</style>