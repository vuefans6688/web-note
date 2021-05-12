<template>
  <div class="list">
    <div class="list-item" v-for="item in list" :key="item.id">
      <div class="item-wrap">
        <span class="item-name">{{ item.name }}</span>
      </div>
      <div
        class="children-item"
        v-if="item.children && item.children.length > 0"
      >
        <list :list="item.children" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // 递归组件需要设置名称，才能间接或者直接调用那个自身
  name: 'List',
  props: {
    list: Array
  }
}
</script>

<style lang="scss" scoped>
.list-item {
  .children-item {
    padding-left: 20px;
  }
}
</style>