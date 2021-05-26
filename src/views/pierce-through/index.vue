<template>
  <div class="pierce-through">
    <section>
      <parent
        :name="name"
        :age="age"
        :gender="gender"
        :job="job"
        @isClick="isClick"
        @add="add"
        @getSonData="getSonData"
      />
      <input type="text" v-model="name" />
      <input type="text" v-model="age" />
      <input type="text" v-model="gender" />
      <input type="text" v-model="job" />
    </section>
  </div>
</template>

<script>
import parent from './parent'
export default {
  components: { parent },
  data () {
    return {
      name: '李四',
      age: '18',
      gender: '男',
      job: '程序员'
    }
  },
  methods: {
    add () {
      console.log('parent的add方法')
    },
    isClick () {
      console.log('parent的isClick方法')
    },
    getSonData (data) {
      console.log('孙子传来的数据', data)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>