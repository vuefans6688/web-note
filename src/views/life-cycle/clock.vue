<template>
  <div class="clock">
    <div class="container">
      <el-button type="primary" @click="handleClick">{{ buttonText }}</el-button>
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
      start: false,
      interval: null
    }
  },
  methods: {
    handleClick () {
      this.start = !this.start
    },
    startClock () {
      clearInterval(this.interval)
      if (this.start) {
        this.interval = setInterval(() => {
          this.now = new Date()
        }, 1000)
      }
    }
  },
  mounted () {
    this.startClock()
  },
  beforeDestroy () {
    clearInterval(this.interval)
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
