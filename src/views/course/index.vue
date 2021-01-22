<template>
  <div class="course">
    <todo-list>
      <todo-item v-for="item in lessons" :key="item.id" :title="item.title" 
        :is-delete="item.isDelete" @delete="handleDelete(item.id)">
        <template v-slot:pre-icon="{ value }">
          <span>前置图标{{ value }}</span>
        </template>
      </todo-item>
    </todo-list>
  </div>
</template>

<script>
import TodoList from './todo-list'
import TodoItem from './todo-item'
export default {
  components: { TodoList, TodoItem },
  data () {
    return {
      lessons: [
        { id: '0001', title: '课程一', isDelete: false },
        { id: '0002', title: '课程二', isDelete: true }
      ]
    }
  },
  methods: {
    handleDelete (id) {
      const index = this.list.findIndex(item => item.id === id)
      this.list.splice(index, 1)
    }
  }
}
</script>

<style lang="scss" scoped>
.message {
  text-align: center;
  input {
    width: 200px;
  }
  span {
    padding: 6px;
  }
}
</style>