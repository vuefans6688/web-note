<template>
  <div class="auto-complete">
    <el-autocomplete popper-class="my-autocomplete" v-model="state" 
    :fetch-suggestions="querySearch" @select="handleSelect" placeholder="请输入内容">
      <i class="el-icon-edit el-input__icon" slot="suffix" @click="handleIconClick"></i>
      <template slot-scope="{ item }">
        <div class="name">{{ item.name }}</div>
        <span class="price">{{ item.price }}</span>
      </template>
    </el-autocomplete>
  </div>
</template>

<script>
import { data } from './food-list'
export default {
  data () {
    return {
      restaurants: [],
      state: ''
    }
  },
  methods: {
    querySearch (queryString, callback) {
      const results = queryString ? this.restaurants.filter(this.createFilter(queryString)) : this.restaurants
      // 调用 callback 返回建议列表的数据
      callback(results)
    },
    createFilter (queryString) {
      return restaurant => restaurant.name.toLowerCase().includes(queryString.toLowerCase())
    },
    loadAll () {
      return data
    },
    handleSelect () {
      // console.log(item)
    },
    handleIconClick () {
      // console.log(event)
    }
  },
  mounted () {
    this.restaurants = this.loadAll()
  }
}
</script>

<style lang="scss" scoped>
.auto-complete {
  text-align: center;
  margin-top: 20px;
  .my-autocomplete {
    li {
      line-height: normal;
      padding: 7px;
      .name {
        text-overflow: ellipsis;
        overflow: hidden;
      }
      .price {
        font-size: 12px;
        color: #b4b4b4;
      }
      .highlighted .price {
        color: #ddd;
      }
    }
  }
}
</style>