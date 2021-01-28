<template>
  <div class="increment">
    <p @click="handle">汽车</p>
  </div>
</template>

<script>
import bus from './bus'
export default {
  data () {
    return {
      info: '我要加油'
    }
  },
  methods: {
    handle () {
      // 通过emit触发事件，并传值
      bus.$emit('event-target', this.info)
    }
  }
}
</script>

<style scoped>
.increment {
  text-align: center;
}
</style>