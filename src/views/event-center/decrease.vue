<template>
  <div class="decrease">
    <p class="message">{{ message }}</p>
  </div>
</template>

<script>
import bus from './bus'
export default {
  data () {
    return {
      message: '加油站'
    }
  },
  mounted () {
    // 用$on监听事件，并通过回调方法获取数据
    bus.$on('event-target', value => {
      this.message = value
    })
  }
}
</script>

<style scoped>
.message {
  text-align: center;
}
</style>