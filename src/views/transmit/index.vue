<template>
  <div class="transmit">
    <!-- <el-button @click="getInfo('玛丽', 30)" type="primary">获取信息</el-button> -->
    <!-- <el-button @click="getInfo" type="primary">获取信息</el-button> -->
    <el-button @click="getInfo('特瑞', 32)" type="primary">获取信息</el-button>
  </div>
</template>

<script>
export default {
  methods: {
    // 路由params传参
    // getInfo (name, age) {
    //   this.$router.push(`/receive/${name}/${age}`)
    // },

    // 路由query传参
    // getInfo () {
    //   this.$router.push({
    //     path: '/receive',
    //     query: {
    //       name: '玛丽',
    //       age: 30
    //     }
    //   })
    // },

    // 通过路由指定的props属性传参
    // getInfo (name, age) {
    //   this.$router.push(`/receive/${name}/${age}`)
    // },
    
    getInfo (name, age) {
      this.$router.push({
        path: '/receive',
        query: {
          name,
          age
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped></style>