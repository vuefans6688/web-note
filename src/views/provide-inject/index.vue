<template>
  <div class="provide-inject">
    <provide :count="count" />
    <el-button size="small" @click="count += 1">Add</el-button>
  </div>
</template>

<script>
import Provide from './provide'
export default {
  components: { Provide },
  data () {
    return {
      count: 1
    }
  },
  provide: {
    count: 1
  }
  // provide () {
  //   return {
  //     count: this.count
  //   }
  // }
}
</script>

<style lang="scss" scoped>

</style>