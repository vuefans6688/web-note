<template>
  <!-- 99乘法表 -->
  <div class="multip-table">
    <table border="1">
      <tr v-for="x in arrays" :key="x.id">
        <td v-for="y in arrays" v-if="x >= y" :key="y.id">
          {{ x }} x {{ y }} = {{ x * y }}
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      arrays: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    }
  }
}
</script>

<style lang="scss" scoped>
table {
  border: none;
  margin: 20px auto;
  border-collapse: collapse;
  tr {
    td {
      width: 100px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      background: #42b983;
      color: #fff;
      font-size: 17px;
    }
  }
}
</style>