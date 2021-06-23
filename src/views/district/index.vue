<template>
  <div class="region">
    <div class="container">
      <el-select
        v-model="selectProvince"
        filterable
        size="small"
        @change="provinceChange($event)"
        placeholder="请选择省份"
      >
        <el-option
          :value="item"
          :label="item.label"
          v-for="(item, index) in provinceList"
          :key="index"
        ></el-option>
      </el-select>
      <el-select
        v-model="selectCity"
        filterable
        size="small"
        @change="cityChange($event)"
        placeholder="请选择城市"
      >
        <el-option
          :value="item"
          :label="item.label"
          v-for="(item, index) in cityList"
          :key="index"
        ></el-option>
      </el-select>
      <el-select
        v-model="selectArea"
        filterable
        size="small"
        @change="areaChange($event)"
        placeholder="请选择区县"
      >
        <el-option
          :value="item"
          :label="item.label"
          v-for="(item, index) in areaList"
          :key="index"
        ></el-option>
      </el-select>
    </div>
  </div>
</template>

<script>
import district from './district.json'
export default {
  data () {
    return {
      // 整个省、市、县数据
      provinceList: district,
      // 被选中的市数据
      cityList: [],
      // 被选中的县数据
      areaList: [],
      selectProvince: {},
      selectCity: {},
      selectArea: {}
    }
  },
  methods: {
    // 省份联动
    provinceChange (event) {
      if (event) {
        this.cityList = event.children
      } else {
        this.cityList = []
      }
      this.areaList = []
      this.$emit('get-province', [event.label, 'province'])
    },
    // 城市联动
    cityChange (event) {
      if (event) {
        this.areaList = event.children
      } else {
        this.areaList = []
      }
      this.$emit('get-city', [event.label, 'city'])
    },
    // 地区联动
    areaChange (event) {
      this.$emit('get-area', [event.label, 'area'])
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  margin-top: 20px;
  margin-left: 30px;
}
</style>