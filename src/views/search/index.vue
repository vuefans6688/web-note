<template>
  <div class="search">
    <div class="search-box">
      <el-input v-model="info" prefix-icon="el-icon-search" clearable size="small"></el-input>
      <el-button @click="searchMessage" type="primary" size="small">搜索</el-button>
    </div>
    <el-card class="search-history" v-if="historyList.length">
      <h4 class="title" @click="clearHistory">清空历史记录</h4>
      <div class="search-list" v-for="(item, index) in historyList" :key="index" 
        @mouseover="handleOver(index)" @mouseout="handleOut">
        <div class="name">{{ item.name }}</div>
        <div class="age">{{ item.age }}</div>
        <div class="el-icon-close" v-show="isActive === index" @click="deleteHistory(item.id)"></div>
      </div>
    </el-card>
    <div class="no-data" v-else>暂无数据...</div>
  </div>
</template>

<script>
const historyList = [
  { id: 1, name: '韩梅梅', age: 20 },
  { id: 2, name: '卫华', age: 19 },
  { id: 3, name: '莉莉', age: 20 }
]
export default {
  data () {
    return {
      info: '',
      historyList,
      isActive: false
    }
  },
  methods: {
    clearHistory () {
      this.historyList = []
    },
    searchMessage () {
      this.historyList = historyList.filter(search => !this.info || search.name.includes(this.info))  
    },
    handleOver (index) {
      this.isActive = index
    },
    handleOut () {
      this.isActive = null
    },
    deleteHistory (id) {
      const index = this.historyList.findIndex(item => item.id === id)
      this.historyList.splice(index, 1)
    }
  }
}
</script>

<style lang="scss" scoped>
.search-box {
  text-align: center;
  margin-left: 60px;
  .el-input {
    width: 280px;
  }
  .el-button {
    margin-left: 10px;
  }
}
.search-history {
  width: 220px;
  margin: 20px auto;
  cursor: pointer;
  .title {
    width: 150px;
    color: #f00;
    height: 20px;
    line-height: 20px;
    text-align: center;
    border: 1px solid #ccc;
    border-radius: 8px;
  }
  .search-list {
    display: flex;
    .age {
      padding-left: 20px;
    } 
    .el-icon-close {
      padding-top: 2px;
      padding-left: 10px;
      color: #f00;
      font-size: 18px;
    }
  }
}
.no-data {
  text-align: center;
  margin-top: 20px;  
  font-size: 18px;
}
</style>