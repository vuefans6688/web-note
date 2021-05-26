<template>
  <div class="search-suggestion">
    <van-cell title="angular" icon="search"></van-cell>
    <van-cell title="react" icon="search"></van-cell>
    <van-cell title="vue" icon="search"></van-cell>
  </div>
</template>

<script>
// 引入防抖、节流的库
import { debounce } from 'lodash'
export default {
  props: {
    searchText: {
      type: String,
      required: true
    }
  },
  watch: {
    // 属性名：要监视的数据名称
    // searchText () {
    //   console.log('wahaha')
    // }

    // 侦听的完整写法
    searchText: {
      // 当数据发生变化将会执行handler处理函数
      handler: debounce(async () => {
        // 发送网络请求
        const result = await console.log('wahaha')
        console.log(result)
      }, 200),
      // 该回调将会在侦听开始之后被立即调用
      immediate: true
    }
  }
}
</script>

<style lang="scss" scoped>
</style>