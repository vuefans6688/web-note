<template>
  <div class="manage-state">
    <div class="counter">
      <el-button @click="reduceHandle" :disabled="count < 1" size="small">减1</el-button>
      <span>{{ count }}</span>
      <el-button @click="addHandle" size="small">加1</el-button>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
export default {
  methods: {
    ...mapMutations(['INCREMENT', 'DECREMENT']),
    addHandle () {
      this.INCREMENT()
    },
    reduceHandle () {
      this.DECREMENT()
    }
  },
  computed: {
    ...mapGetters(['count'])
  }
}
</script>

<style lang="scss" scoped>
.counter {
  margin-top: 20px;
  text-align: center;
  span {
    padding: 10px;
  }
}
</style>