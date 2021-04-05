<template>
  <div class="guess-number">
    <el-input v-model="content"></el-input>
    <el-button @click="handleGuess" type="primary">猜数字</el-button>
    <p v-html="answer"></p>
  </div>
</template>

<script>
import { getRandom } from '@/utils/getRandom'
export default {
  data () {
    return {
      content: '',
      answer: ''
    }
  },
  methods: {
    handleGuess () {
      let random = getRandom(1, 10)
      if (this.content === '') {
        return
      }
      if (this.content > random) {
        this.answer = '<span style="color: #f00;">你猜大了</span>'
      } else if (this.content < random) {
        this.answer = '<span style="color: #f00;">你猜小了</span>'
      } else {
        this.answer = '<span style="color: #42b983;">恭喜你，猜对了</span>'
      }
      this.content = ''
    }
  }
}
</script>

<style lang="scss" scoped>
.guess-number {
  margin-top: 20px;
  .el-input {
    width: 280px;
  }
  .el-button {
    margin-left: 10px;
  }
}
</style>