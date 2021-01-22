<template>
  <div class="tag">
    <div class="content" v-for="(tag, index) in tags" :key="index" 
      @mouseenter="handleEnter(index)" @mouseleave="handleLeave" 
      :class="{active: isActive === index}">
      <span class="index">{{ index + 1 }}、</span>
      <span class="text">{{ tag.text }}</span>
      <span class="el-icon-close" v-if="isActive === index" @click="del(tag.id)"></span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: 0,
      tags: [
        { id: '01', text: '吃饭' },
        { id: '02', text: '听音乐' },
        { id: '03', text: '跑步' },
        { id: '04', text: '登山' }
      ]
    }
  },
  methods: {
    handleEnter(index) {
      this.isActive = index
    },
    handleLeave() {
      this.isActive = null
    },
    del(id) {
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
  margin: 5px auto;
  text-align: center;
  cursor: pointer;
  &.active {
    background: #eee;
  }
  .index, .text {
    font-size: 18px;
    margin-left: 8px;
  }
  .el-icon-close {
    color: #f00;
    margin-top: 8px;
    margin-left: 8px;
    font-size: 18px;
  }
}
</style>