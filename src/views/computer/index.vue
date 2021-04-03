<template>
  <div class="computer">
    <p>反转字符串1: {{ reverseMessage1() }}</p>
    <p>反转字符串2: {{ reverseMessage2 }}</p>
    <p>现在时间: {{ now | dateFilter }}</p>
    <p>
      <button @click="reload">强制更新</button>
      <span>{{ message }}</span>
    </p>
    <situation :info="info" @change-info="changeInfo" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      now: new Date(),
      message: 'Hello World!',
      info: '我是来自全局的组件...'
    }
  },
  methods: {
    reverseMessage1 () {
      return this.message.split('').reverse().join('')
    },
    reload () {
      this.$forceUpdate()  // 调用$forceUpdate方法
    },
    changeInfo () {
      this.info = '赶紧来改改它吧'
    }
  },
  updated () {
    this.message = '我是修改的数据'  // 更新修改数据
  },
  computed: {
    reverseMessage2 () {
      return this.message.split('').reverse().join('')
    }
  }
}
</script>

<style lang="scss" scoped>
p {
  text-align: center;
}
p:last-child {
  span {
    padding-left: 10px;
    color: #f00;
  }
}
</style>