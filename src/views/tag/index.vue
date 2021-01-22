<template>
  <div class="tag">
    <div class="content" v-for="(tag, index) in tags" :key="tag.id" 
      @mouseenter="handleEnter(index)" @mouseleave="handleLeave" 
      :class="{ active: isActive === index }">
      <span class="index">{{ index + 1 }}、</span>
      <span class="text">{{ tag.text }}</span>
      <span class="el-icon-close" v-if="isActive === index" @click="handleDelete(tag.id)"></span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isActive: false,
      tags: [
        { id: '001', text: '吃饭' },
        { id: '002', text: '听音乐' },
        { id: '003', text: '跑步' },
        { id: '004', text: '登山' }
      ]
    }
  },
  methods: {
    handleEnter (index) {
      this.isActive = index
    },
    handleLeave () {
      this.isActive = null
    },
    handleDelete (id) {
      const index = this.tags.findIndex(tag => tag.id === id)
      this.tags.splice(index, 1)
    }
  }
}
</script>

<style lang="scss" scoped>
.content {
  width: 130px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  cursor: pointer;
  &.active {
    background: #eee;
  }
  span {
    font-size: 18px;
    padding-left: 6px;
  }
  .el-icon-close {
    color: #f00;
    margin-top: 8px;
    margin-left: 8px;
    font-size: 18px;
  }
}
</style>