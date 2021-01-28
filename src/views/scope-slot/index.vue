<template>
  <div class="scope-slot">
    <todo-list>
      <todo-item v-for="lesson in lessons" :key="lesson.id" :title="lesson.title" 
        :is-delete="lesson.isDelete" @delete="handleDelete(lesson.id)"
        @changed="handleChange(lesson)">
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
      // 找到当前被删除的元素的下标
      const index = this.lessons.findIndex(item => item.id === id)
      this.lessons.splice(index, 1)
    },
    handleChange (lesson) {
      // 找到当前需要切换的元素
      lesson.isDelete = !lesson.isDelete
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