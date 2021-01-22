<template>
  <div class="decrease">
    <p>{{ message }}</p>
  </div>
</template>

<script>
import eventBus from './eventBus'
export default {
  data() {
    return {
      message: '加油站'
    }
  },
  mounted() {
    // 用$on监听事件，并通过回调方法获取数据
    eventBus.$on('event-target', value => {
      this.message = value
    })
  }
}
</script>

<style scoped>
.decrease {
  text-align: center;
}
</style>