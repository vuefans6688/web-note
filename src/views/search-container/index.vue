<template>
  <div class="search-container">
    <!-- 提示: 在van-search外层增加form标签，且action不为空，即可在iOS输入法中显示搜索按钮 -->
    <form action="/">
      <!-- 搜索框 -->
      <van-search @search="onSearch" @cancel="onCancel" v-model="searchText" 
        @focus="isResultShow = false" show-action background="#09f" placeholder="请输入搜索关键词" />
      <!-- /搜索框 -->
    </form>

    <!-- 搜索结果 -->
    <search-result v-if="isResultShow" />
    <!-- /搜索结果 -->

    <!-- 联想建议 -->
    <search-suggestion v-else-if="searchText" :search-text="searchText" />
    <!-- /联想建议 -->

    <!-- 历史记录 -->
    <search-history v-else />
    <!-- /历史记录 -->
  </div>
</template>

<script>
import SearchSuggestion from './components/search-suggestion'
import SearchHistory from './components/search-history'
import SearchResult from './components/search-result'
export default {
  components: { SearchSuggestion, SearchHistory, SearchResult },
  data () {
    return {
      searchText: '',  // 搜索输入框的内容
      isResultShow: false  // 是否显示搜索结果
    }
  },
  methods: {
    onSearch () {
      // 展示搜索结果
      this.isResultShow = true
    },
    onCancel () {
      this.$router.back()
    }
  }
}
</script>

<style lang="scss" scoped>
.van-search {
  .van-search__action {
    color: #fff;
  }
}
</style>