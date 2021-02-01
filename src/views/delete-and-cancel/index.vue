<template>
  <div class="delete-and-cancel">
    <div v-for="(menu, index) in menus" :key="index">
      <span>{{ index + 1 }}、</span>
      <span>{{ menu.message }}</span>
      <span @click="confirmDelete(menu.id)" :class="menu.isCancelDelete ? 'confirm' : 'cancel'">
        {{ menu.isCancelDelete ? '删除' : '取消' }}
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        menus: [
          { id: 1, message: '第一条消息', isCancelDelete: true },
          { id: 2, message: '第二条消息', isCancelDelete: true },
          { id: 3, message: '第三条消息', isCancelDelete: false }
        ]
      }
    },
    methods: {
      confirmDelete (id) {
        const index = this.menus.findIndex(menu => menu.id === id)
        if (this.menus[index].isCancelDelete && this.menus.length) {
          this.menus.splice(index, 1)
        } 
      }
    }
  }
</script>

<style lang="scss" scoped>
.confirm {
  color: #f00;
}
.cancel {
  color: #ccc;
  text-decoration: line-through;
}
</style>