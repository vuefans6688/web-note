<template>
  <div class="increment">
    <p @click="handleCar">汽车</p>
  </div>
</template>

<script>
import bus from './bus'
export default {
  data () {
    return {
      message: '我要加油'
    }
  },
  methods: {
    handleCar () {
      // 通过emit触发事件，并传值
      bus.$emit('event-target', this.message)
    }
  }
}
</script>

<style scoped>
.increment {
  text-align: center;
}
</style>