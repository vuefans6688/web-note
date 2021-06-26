<template>
  <div class="different-tag-color">
    <ul class="item-wrap">
      <li
        class="item-list"
        v-for="(item, index) in mockData"
        :class="itemClass(index)"
      >
        {{ disorders[item].text }}
      </li>
    </ul>
    <div class="change-item">
      <button @click="changeItem">换一换</button>
    </div>
  </div>
</template>

<script>
import { initData } from './init-data'
export default {
  data () {
    return {
      disorders: initData(),
      mockData: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      sensitizes: ['active-one', 'active-two', 'active-three']
    }
  },
  methods: {
    itemClass (index) {
      return this.sensitizes[index % 3]
    },
    changeItem () {
      let empty = []
      let i = 0
      while (i < 12) {
        let newList = Math.floor(Math.random() * this.disorders.length)
        if (empty.indexOf(newList) < 0) {
          empty.push(newList)
          i++
        }
      }
      this.mockData = empty
    }
  }
}
</script>

<style lang="scss" scoped>
.item-wrap {
  margin: 20px auto;
  display: flex;
  flex-wrap: wrap;
  width: 600px;
  .item-list {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 10px;
    width: 120px;
    height: 30px;
    border: 1px solid #ddd;
    &.active-one {
      background-color: #42b983;
      color: #fff;
    }
    &.active-two {
      background-color: #409eff;
      color: #fff;
    }
    &.active-three {
      background-color: #f90000;
      color: #fff;
    }
  }
}
.change-item {
  text-align: center;
  button {
    width: 120px;
    height: 30px;
    border: none;
    background-color: #f90;
    color: #fff;
  }
}
</style>