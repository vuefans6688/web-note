<template>
  <div class="watch">
    <!-- 姓名: <input v-model="name"> -->
    <!-- <p>{{ name }}</p> -->

    <!-- 姓名: <input v-model="obj.name">
    <p>{{ obj.name }}</p> -->

    中文名: <input v-model="name">
    <p>{{ name }}</p>

    英文名: <input v-model="englishName">
    <p>{{ englishName }}</p>
  </div>
</template>

<script>
// watch侦听器
// watchEffect侦听器，偏向于effect
import { ref, watch, watchEffect, reactive, toRefs } from '@vue/composition-api'
export default {
  setup () {
    // const name = ref('皮卡丘')

    const obj = reactive({ name: '皮卡丘', englishName: 'Pikachu' })

    const { name, englishName } = toRefs(obj)

    // 具备一定的惰性 lazy
    // 参数可以拿到原始和当前值
    // watch(name, (cur, pre) => {
    //   console.log(cur, pre)
    // })

    // 可以侦听多个数据的变化，用一个侦听器承载
    watch([() => obj.name, () => obj.englishName], ([curName, curEng], [preName, preEng]) => {
      console.log(curName, curEng)
      console.log(preName, preEng)
    }, { immediate: true })

    // 立即执行，没有惰性 immediate
    // 不需要传递你要侦听的内容，自动会感知代码依赖，不需要传递多个参数，只需要传递一个回调函数
    // 不能获取之前数据的值
    const stop = watchEffect(() => {
      console.log(obj.name)
      console.log(obj.englishName)
      setTimeout(() => {
        stop()
      }, 5000)
    })

    return {
      // name,
      // obj,
      name,
      englishName
    }
  }
}
</script>

<style lang="scss" scoped>
input {
  width: 280px;
}
</style>