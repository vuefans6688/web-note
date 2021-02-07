<template>
  <div class="jing-zi-chess">
    <div class="cell" @click="changeChess">
      <div v-if="isShow">{{ text }}</div>
      <div v-else></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    count: {
      type: Number,
      required: true
    },
    isFinished: {
      type: Boolean,
      required: true
    }
  },
  data () {
    return {
      text: '',
      isShow: false
    }
  },
  methods: {
    changeChess () {
      if (this.isFinished || this.text !== '') {
        return
      }
      this.isShow = true
      this.text = this.count % 2 === 0 ? 'x' : 'o'
      this.$emit('handle-click', this.text) 
    }
  }
}
</script>

<style lang="scss" scoped>
.cell {
  width: 100px;
  height: 100px;
  border: 1px solid #000;
  font-size: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>