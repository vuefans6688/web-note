<template>
  <div class="vue-set">
    <p>姓名: {{ info.name }}</p>
    <p>年龄: {{ info.age }}</p>
    <p>性别: {{ info.gender }}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      info: {
        name: '露茜',
        age: 20
      }
    }
  },
  created () {
    this.$set(this.info, 'gender', '女')
  }
}
</script>