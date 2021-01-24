<template>
  <div class="todo-item">
    <li class="list">
      <slot name="pre-icon" :value="value"></slot>
      <span :class="isDelete ? 'title-2' : 'title-1'" @click="switchDelete">{{ title }}</span>
      <slot name="suf-icon">😄</slot>
      <span class="delete" v-if="!isDelete" @click="handleRemove">删除</span>
    </li>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    isDelete: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      value: parseInt(Math.random() * 10)
    }
  },
  methods: {
    handleRemove () {
      this.$emit('delete', this.title)
    },
    switchDelete () {
      this.$emit('changed', this.isDelete)
    }
  }
}
</script>

<style lang="scss" scoped>
.list {
  text-align: center;
  list-style: none;
  cursor: pointer;
  .delete {
    color: #f00; 
  }
  span {
    padding: 6px;
  }
  .title-2 {
    text-decoration: line-through;
    color: #888;
  }
}
</style>