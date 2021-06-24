<template>
  <div class="different-tag-color">
    <ul class="item-wrap">
      <li
        class="item-list"
        v-for="(disorder, index) in disorders"
        :key="disorder.id"
        :class="itemClass(index)"
      >
        {{ disorder.text }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      disorders: [],
      sensitizes: ['active-one', 'active-two', 'active-three']
    }
  },
  methods: {
    initData () {
      let multiples = []
      for (let i = 0; i < 20; i++) {
        multiples[i] = {
          id: Math.floor(Math.random() * 10 + 1),
          text: '列表' + i
        }
      }
      return multiples
    },
    itemClass (index) {
      return this.sensitizes[index % 3]
    }
  },
  mounted () {
    this.disorders = this.initData()
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
</style>