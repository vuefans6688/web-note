<template>
  <div class="recursion">
    <div class="data-list" v-for="(item, index) in dataList" :key="item.id">
      <div class="title">{{ item.title }}</div>
      <div class="children" v-if="item.children">
        <recursion :data-list="item.children" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'recursion',
  props: {
    dataList: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.data-list {
  .title {
    width: 200px;
    height: 20px;
    background: #eee;
  }
  div {
    padding: 8px;
  }
}
</style>