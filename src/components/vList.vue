<template>
  <div class="list">
    <template v-if="list.length">
      <div class="container" v-for="(item, index) in list" :key="item.id" 
        @mouseover="changeOver(index)" @mouseout="changeOut(index)">
        <div class="name">{{ item.userName }}: </div>
        <div class="message">{{ item.message }}</div>
        <div class="el-icon-close" v-if="showIcon && currentIndex === index" 
          @click="removeComment(index)">
        </div>
        <div class="reply" @click="reply(index)">回复</div>
      </div>
    </template>
    <div class="no-data" v-else>留言列表暂无数据...</div>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      showIcon: false,
      currentIndex: 0
    }
  },
  methods: {
    changeOver(index) {
      this.showIcon = true
      this.currentIndex = index
    },
    changeOut(index) {
      this.showIcon = false
      this.currentIndex = index
    },
    reply(index) {
      this.handleReply(index)
    },
    handleReply(index) {
      this.$emit('reply', index)
    },
    removeComment(index) {
      const isDelete = confirm('确定要删除吗?')
      if (!isDelete) {
        return
      }
      this.list.splice(index, 1)
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  margin-top: 15px;
  cursor: pointer;
  .message {
    padding-left: 10px;
  }
  .el-icon-close {
    color: #f00;
    font-size: 18px;
    margin-top: 2px;
  }
  .reply {
    width: 40px;
    border: 1px solid #777;
    margin-left: 6px;
    border-radius: 6px;
    color: #555;
  }
}
.no-data {
  margin-top: 20px;
  text-align: center;
  color: #777;
  font-size: 17px;
}
</style>