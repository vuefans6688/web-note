<template>
  <div class="parent">
    <div class="text" v-for="item in datas">
      <span>编号: {{ item.id }}</span>
      <span>内容: {{ item.text }}</span>
      <button @click="handleRemove(item.id)">删除</button>
    </div>
  </div>
</template>

<script>
import child from './child'
export default {
  extends: child,
  methods: {
    handleRemove (id) {
      const index = this.datas.findIndex(data => data.id === id)
      this.datas.splice(index, 1)
    }
  }
}
</script>

<style lang="scss" scoped>
.text {
  text-align: center;
  margin-top: 10px;
  font-size: 18px;
  color: #6a6a6a;
  font-weight: 600;
  span {
    padding: 8px;
  }
  button {
    color: #f00;
  }
}
</style>