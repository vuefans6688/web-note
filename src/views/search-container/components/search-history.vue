<template>
  <div class="search-history">
    <van-cell title="历史记录">
      <div v-if="isDeleteShow" class="action">
        <span class="delete-all">全部删除</span>
        <span @click="isDeleteShow = false" class="complete">完成</span>
      </div>
      <van-icon @click="isDeleteShow = true" v-else name="delete"></van-icon>
    </van-cell>
    <van-cell title="浙江杭州有赞前端开发团队">
      <van-icon v-if="isDeleteShow" name="close"></van-icon>
    </van-cell>
    <van-cell title="浙江温州江南皮革厂">
      <van-icon v-if="isDeleteShow" name="close"></van-icon>
    </van-cell>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isDeleteShow: false  // 是否显示删除
    }
  }
}
</script>

<style lang="scss" scoped>
.action {
  .delete-all {
    margin-right: 6px;
  }
  .complete {
    margin-left: 4px;
  }
}
</style>