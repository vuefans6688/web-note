<template>
  <div class="father">
    <ul :is="'son'" v-for="item in items" :key="item.id" :level="item.level">{{ item.info }}</ul>
  </div>
</template>

<script>
import son from './son'
export default {
  components: { son },
  data () {
    return {
      items: [
        { id: '001', level: 1, info: '你好，世界' },
        { id: '002', level: 2, info: '你好，世界' },
        { id: '003', level: 3, info: '你好，世界' },
        { id: '004', level: 4, info: '你好，世界' },
        { id: '005', level: 5, info: '你好，世界' },
        { id: '006', level: 6, info: '你好，世界' }
      ]
    }
  }
}
</script>
