<template>
  <!-- 99乘法表 -->
  <div class="multip-formula">
    <table border="1">
      <tr v-for="row in count">
        <td v-for="col in row">{{ col }} x {{ row }} = {{ row * col }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      count: 9
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