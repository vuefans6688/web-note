<template>
  <div class="father">
    <!-- <son v-for="item in items" :key="item.id" :level="item.level">{{ item.info }}</son> -->
    <ul :is="list" v-for="item in items" :key="item.id" :level="item.level">{{ item.info }}</ul>
  </div>
</template>

<script>
import son from './son'
export default {
  components: { son },
  data() {
    return {
      items: [
        { id: 1, level: 1, info: '你好，世界' },
        { id: 2, level: 2, info: '你好，世界' },
        { id: 3, level: 3, info: '你好，世界' },
        { id: 4, level: 4, info: '你好，世界' },
        { id: 5, level: 5, info: '你好，世界' },
        { id: 6, level: 6, info: '你好，世界' }
      ],
      list: 'son'
    }
  }
}
</script>
