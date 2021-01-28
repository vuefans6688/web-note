<template>
  <div class="search-home">
    <van-button to="/search-container" slot="title" icon="search" type="info" size="small" round>搜索</van-button>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.search-home {
  display: flex;
  justify-content: center;
  margin-top: 10px;
  .van-button {
    width: 200px;
    opacity: 0.6;
  }
}
</style>