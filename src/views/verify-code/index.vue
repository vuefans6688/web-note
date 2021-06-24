<template>
  <div class="verify-code">
    <h3 @click="changeCode(4)">{{ codeText }}</h3>
  </div>
</template>

<script>
import { randValue } from '@/utils/random'
export default {
  data () {
    return {
      codeText: '',
      codeList: [
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
        'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D',
        'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V',
        'W', 'X', 'Y', 'Z'
      ]
    }
  },
  methods: {
    changeCode (digit) {
      let strings = ''
      for (let i = 0; i < digit; i++) {
        // 调用随机函数，并赋值
        let index = randValue(62, 0)
        strings += this.codeList[index]
      }
      this.codeText = strings
    }
  },
  created () {
    this.changeCode(4)
  }
}
</script>

<style lang="scss" scoped>
.verify-code {
  display: flex;
  justify-content: center;
  h3 {
    width: 100px;
    height: 35px;
    line-height: 35px;
    text-align: center;
    box-sizing: border-box;
    border: 1px solid #666;
    background-color: #ddd;
    color: #666;
    cursor: pointer;
  }
}
</style>