<template>
  <div class="place-zone">
    <div class="add">
      <el-button type="primary" size="small" @click="add">添加</el-button>
    </div>
    <el-dialog title="新增信息" :visible.sync="isAdd" align="center">
      <el-form :model="addForm" label-width="80px" size="small">
        <el-form-item prop="native" label="籍贯">
          <el-select
            v-model="province"
            @change="chooseProvince"
            placeholder="省份"
            style="width: 100%"
          >
            <el-option
              v-for="(province, index) in addressList"
              :key="province.areaId"
              :label="province.areaName"
              :value="index"
            ></el-option>
          </el-select>
          <el-select
            v-model="city"
            @change="chooseCity"
            placeholder="城市"
            style="width: 100%"
          >
            <el-option
              v-for="(city, index) in cityList"
              :key="city.areaId"
              :label="city.areaName"
              :value="index"
            ></el-option>
          </el-select>
          <el-select
            v-model="area"
            @change="chooseArea"
            placeholder="地区"
            style="width: 100%"
          >
            <el-option
              v-for="(area, index) in areaList"
              :key="area.areaId"
              :label="area.areaName"
              :value="index"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button @click="addConfirm" type="primary">确定</el-button>
          <el-button @click="addCancel">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
    <el-table :data="tableData" border>
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
          <el-button type="text" @click="edit(scope.row, scope.$index)"
            >修改</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <el-dialog title="编辑信息" :visible.sync="isEdit" align="center">
      <el-form :model="editForm" label-width="80px" size="small">
        <el-form-item prop="native" label="籍贯">
          <el-select
            v-model="province"
            @change="chooseProvince"
            placeholder="省份"
            style="width: 100%"
          >
            <el-option
              v-for="(province, index) in addressList"
              :key="province.areaId"
              :label="province.areaName"
              :value="index"
            ></el-option>
          </el-select>
          <el-select
            v-model="city"
            @change="chooseCity"
            placeholder="城市"
            style="width: 100%"
          >
            <el-option
              v-for="(city, index) in cityList"
              :key="city.areaId"
              :label="city.areaName"
              :value="index"
            ></el-option>
          </el-select>
          <el-select
            v-model="area"
            @change="chooseArea"
            placeholder="地区"
            style="width: 100%"
          >
            <el-option
              v-for="(area, index) in areaList"
              :key="area.areaId"
              :label="area.areaName"
              :value="index"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button @click="editConfirm" type="primary">确定</el-button>
          <el-button @click="editCancel">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import { addressList } from './address-list'
export default {
  data () {
    return {
      isAdd: false,
      isEdit: false,
      province: '',
      city: '',
      area: '',
      addressList,
      cityList: [],
      areaList: [],
      tableData: [],
      addForm: {
        id: '',
        native: {}
      },
      editForm: {
        id: '',
        native: {}
      },
      editIndex: 0  // 记录编辑的行号
    }
  },
  methods: {
    add () {
      this.isAdd = true
    },
    addConfirm () {
      this.isAdd = false
      const province = addressList[this.province]  // 获取省数据
      const city = province.children[this.city]  // 获取市数据
      const area = city.children[this.area]  // 获取区数据
      this.tableData.push({
        id: this.tableData.length + 1,
        native: {
          province: { areaId: province.areaId, areaName: province.areaName },  // 省id和name
          city: { areaId: city.areaId, areaName: city.areaName },  // 市id和name
          area: { areaId: area.areaId, areaName: area.areaName }  // 区id和name
        }
      })
      this.resetForm()
    },
    addCancel () {
      this.isAdd = false
      this.resetForm()
    },
    edit (row, index) {
      this.isEdit = true
      this.editIndex = index
      this.editForm = {
        id: row.id,
        native: row.native
      }
    },
    editConfirm () {
      this.isEdit = false
      const province = addressList[this.province]
      const city = province.children[this.city]
      const area = city.children[this.area]
      this.editForm.native = {
        province: { areaId: province.areaId, areaName: province.areaName },
        city: { areaId: city.areaId, areaName: city.areaName },
        area: { areaId: area.areaId, areaName: area.areaName }
      }
      this.tableData[this.editIndex].native = this.editForm.native
      this.resetForm()
    },
    editCancel () {
      this.isEdit = false
      this.resetForm()
    },
    resetForm () {
      this.province = ''
      this.city = ''
      this.area = ''
    },
    chooseProvince (index) {
      // this.province = index  
      this.cityList = addressList[index].children
      this.areaList = []
      this.city = ''
      this.area = ''
    },
    chooseCity (index) {
      // this.city = index  
      this.areaList = this.cityList[index].children
      this.area = ''
    },
    chooseArea (index) {
      this.area = index
    }
  }
}
</script>

<style lang="scss" scoped>
.place-zone {
  text-align: center;
  margin-top: 20px;
  .el-table {
    width: 500px;
    margin: 20px auto;
  }
}
</style>
