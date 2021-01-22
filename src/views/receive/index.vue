<template>
  <div class="receive">
    <h1>名字: {{ name }} 年龄: {{ age }}</h1>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // name: this.$route.params.name,
      // age: this.$route.params.age

      // name: this.$route.query.name,
      // age: this.$route.query.age
    }
  },
  created () {
    // console.log(this.$route.params.name, this.$route.params.age)

    // console.log(this.$route.query.name, this.$route.query.age)

    // console.log(this.name, this.age)
  },
  props: {
    name: {
      type: String,
      required: true
    },
    age: {
      type: [String, Number],
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>

</style>