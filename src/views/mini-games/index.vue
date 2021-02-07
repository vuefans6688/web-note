<template>
  <div class="mini-games">
    <div class="describe">{{ describe }}</div>
    <div class="row">
      <jing-zi-chess v-for="(chess, index) in 9" :key="index" 
        @handle-click="handleClick(index, $event)" :count="count" :is-finished="isFinished" />
    </div>
    <div class="result">结果：{{ result === null ? '胜负未分' : `胜方为${result}` }}</div>
  </div>
</template>

<script>
import JingZiChess from './components/jing-zi-chess'
export default {
  components: { JingZiChess },
  data () {
    return {
      count: 0,
      result: null,
      isFinished: false,
      describe: '开始游戏',
      maps: [
        [null, null, null], // 1. 声明一个二维数组
        [null, null, null], // 2.在用户点击的时候获取用户点击的序号和内容，把对应的index的event填到数组里面
        [null, null, null]  // 3.调用getWinner判断谁胜谁负
      ]
    }
  },
  methods: {
    handleClick (index, event) {
      // event用来接受子组件传过来的值
      // 知道哪个元素被点了，而且被点的内容也知道了，用一个数组maps存下来
      this.maps[Math.floor(index / 3)][index % 3] = event
      this.count += 1
      this.getWinner()
    },
    getWinner () {
      const maps = this.maps
      for (let i = 0; i < 3; i++) {
        if (
          maps[i][0] !== null &&
          maps[i][0] === maps[i][1] &&
          maps[i][1] === maps[i][2]
        ) {
          this.isFinished = true
          this.result = maps[i][0]
        }
      }
      for (let j = 0; j < 3; j++) {
        if (
          maps[0][j] !== null &&
          maps[0][j] === maps[1][j] &&
          maps[1][j] === maps[2][j]
        ) {
          this.isFinished = true
          this.result = maps[0][j]
        }
      }
      if (
        maps[0][0] !== null &&
        maps[0][0] === maps[1][1] &&
        maps[1][1] === maps[2][2]
      ) {
        this.isFinished = true
        this.result = maps[0][0]
      }
      if (
        maps[0][2] !== null &&
        maps[0][2] === maps[1][1] &&
        maps[1][1] === maps[2][0]
      ) {
        this.isFinished = true
        this.result = maps[0][2]
      }
      this.describe = `第${this.count}手`
      if (this.isFinished) {
        this.describe = `游戏结束，${this.describe}`
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.mini-games {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  .row {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 400px;
  }
}
</style>