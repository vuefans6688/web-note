<template>
  <div class="vue-three">
    <h1>欢迎使用vue3.0-compositionAPI</h1>
    <!-- <context app="app" /> -->
    <!-- <context @change="handleChange">父组件</context> -->

    <provide-inject />
    <router-view />
  </div>
</template>

<script>
import Context from './context'
import ProvideInject from './provide-inject'
import { provide, ref, readonly } from '@vue/composition-api'
export default {
  components: { Context, ProvideInject },
  // created实例被完全初始化之前
  // 原理: 通过proxy对数据进行封装，当数据变化时，触发模板等内容的更新
  methods: {
    handleChange () {
      console.log('我被触发了...')
    }
  },
  setup () {

    // provide('name', '皮卡丘')

    // provide('name', ref('皮卡丘'))

    const name = ref('皮卡丘')

    provide('name', readonly(name))

    provide('changeName', value => {
      name.value = value
    })
  }
}
</script>

<style lang="scss" scoped>
h1 {
  color: #42b983;
}
</style>