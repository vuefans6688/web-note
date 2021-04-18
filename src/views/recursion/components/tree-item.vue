<template>
  <div class="tree-structure">
    <div class="name-text">{{ treeData.name }}</div>
    <ul
      v-if="treeData.children && treeData.children.length > 0"
      class="sub-item"
    >
      <tree-item
        v-for="item in treeData.children"
        :tree-data="item"
        :key="item.id"
      ></tree-item>
    </ul>
  </div>
</template>

<script>
export default {
  // 递归组件需要设置名称，才能间接或者直接调用那个自身
  name: 'tree-item',
  props: {
    treeData: {
      type: [Array, Object]
    }
  }
}
</script>

<style lang="scss" scoped>
.tree-structure {
  .sub-item {
    padding-left: 10px;
  }
}
</style>