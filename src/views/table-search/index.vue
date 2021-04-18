<template>
  <div class="table-search">
    <div class="form-wrap">
      <el-input
        v-model="searchText"
        @keyup.enter="onSearch"
        size="small"
      ></el-input>
      <el-button @click="onSearch" type="primary" size="small">搜索</el-button>
    </div>
    <ul>
      <li v-for="item in searchList">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      searchText: '',
      dataList: ['上路巩州遇虎熊', '五百年前一场疯', '腾宵又是孙悟空', '失马鹰愁涧飞白龙', '沙河阻断路难通', '福陵山中收天蓬'],
      searchList: []
    }
  },
  methods: {
    onSearch () {
      this.searchList = this.dataList.filter(text => text.match(this.searchText))
    }
  },
  created () {
    this.searchList = this.dataList
  }
}
</script>

<style lang="scss" scoped>
.form-wrap {
  .el-input {
    width: 280px;
  }
  .el-button {
    margin-left: 10px;
  }
}
ul {
  li {
    list-style: none;
  }
}
</style>