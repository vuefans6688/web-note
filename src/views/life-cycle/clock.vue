<template>
  <div class="clock">
    <div class="container">
      <el-button @click="handleClick" type="primary">{{ buttonText }}</el-button>
      <span class="now-time">当前时间: {{ now | dateFilter }}</span>
    </div>   
  </div>
</template>

<script>
export default {
  name: 'clock',
  data () {
    return {
      now: new Date(),
      start: false
    }
  },
  methods: {
    handleClick () {
      this.start = !this.start
    },
    startClock () {
      clearInterval(this.intervalId)
      if (this.start) {
        this.intervalId = setInterval(() => {
          this.now = new Date()
        }, 1000)
      }
    }
  },
  watch: {
    start () {
      this.startClock()
    }
  },
  computed: {
    buttonText () {
      return this.start ? '停止' : '开始'
    }
  },
  mounted () {
    this.startClock()
  },
  beforeDestroy () {
    clearInterval(this.intervalId)
  }  
}
</script>

<style lang="scss" scoped>
.container {
  text-align: center;
  .now-time {
    font-size: 20px;
    color: #666;
    margin-left: 15px;
  }
}
</style>
