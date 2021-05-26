<template>
  <div class="toggle-input-text">
    <!-- 动态组件 -->
    <!-- <input-item  v-if="currentItem === 'input-item'" />
    <common-item v-if="currentItem === 'common-item'" /> -->
    <!-- 缓存机制 -->
    <keep-alive>
      <component :is="currentItem"></component>
    </keep-alive>
    <br />
    <el-button @click="handleClick" type="primary" size="small">切换</el-button>
  </div>
</template>

<script>
import InputItem from './input-item'
import CommonItem from './common-item'
export default {
  components: {
    InputItem,
    CommonItem
  },
  data () {
    return {
      currentItem: 'input-item'
    }
  },
  methods: {
    handleClick () {
      this.currentItem = this.currentItem === 'input-item' ? 'common-item' : 'input-item'
    }
  }
}
</script>

<style lang="scss" scoped>
.toggle-input-text {
  margin: 20px auto;
  text-align: center;
}
</style>