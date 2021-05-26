<template>
  <div class="victory-defeat">
    <ul class="board">
      <li
        v-for="(chess, index) in chesses"
        @click="setChess(index)"
        class="square"
      >
        {{ chess }}
      </li>
    </ul>
    <div class="container">
      <div class="hint">{{ playerHint }}</div>
      <button @click="restart" class="restart">重新开始</button>
      <ul class="normal">
        <li v-for="(history, index) in histories" class="history">
          <button @click="repentance(index)" class="step">
            第{{ index + 1 }}步
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      chesses: Array(9).fill(),
      histories: [],
      isNext: true,
      winner: '',
      cases: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
      ]
    }
  },
  methods: {
    // 放置棋子
    setChess (index) {
      if (this.chesses[index] || this.winner !== '') {
        return
      }
      if (!this.chesses[index] && !this.winner) {
        this.$set(this.chesses, index, this.nextPlayer)
        this.histories.push({
          status: [...this.chesses],
          player: this.isNext
        })
      }
      if (this.isWin(this.nextPlayer)) {
        this.winner = this.nextPlayer
      }
      this.isNext = !this.isNext
    },
    // 悔棋
    repentance (index) {
      this.chesses = this.histories[index].status
      this.histories.splice(index + 1, this.histories.length - index - 1)
      this.isNext = !this.histories[index].player
      this.winner = this.isWin('o') ? 'o' : this.isWin('x') ? 'x' : ''
    },
    // 判断是否胜出
    isWin (player) {
      return this.cases.some(arrays => arrays.every(item => this.chesses[item] === player))
    },
    // 初始化数据
    restart () {
      this.chesses = Array(9).fill('')
      this.histories = []
      this.isNext = true
      this.winner = ''
    }
  },
  computed: {
    nextPlayer () {
      return this.isNext ? 'o' : 'x'
    },
    playerHint () {
      return this.winner ? '胜者: ' + this.winner : '下一个玩家: ' + this.nextPlayer
    }
  }
}
</script>

<style lang="scss" scoped>
.victory-defeat {
  display: flex;
  justify-content: center;
  margin: 20px auto;
  .board {
    width: 400px;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    .square {
      height: 100px;
      width: 100px;
      line-height: 100px;
      border: 1px solid #ebebeb;
      font-size: 50px;
      font-weight: 900;
      text-align: center;
    }
  }
  .container {
    .normal {
      list-style: none;
      .history {
        padding: 5px;
      }
    }
    .hint {
      padding: 10px;
      text-align: center;
      color: crimson;
      font-size: 18px;
    }
    .restart {
      margin-left: 5px;
    }
  }
}
</style>