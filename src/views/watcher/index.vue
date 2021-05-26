<template>
  <div class="watcher">
    <p class="change">
      <el-button @click="a += 1">自增1</el-button>
      <span>{{ a }}</span>
      <el-button @click="a -= 1" :disabled="a < 1">自减1</el-button>
    </p>
    <!-- <p class="data">{{ $data }}</p> -->
    <p class="name">
      姓: <el-input v-model="firstName"></el-input> &nbsp; 名:
      <el-input v-model="lastName"></el-input>
    </p>
    <p class="full">显示姓名: {{ fullName }}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      a: 1,
      b: {
        c: 2,
        d: 3
      },
      e: {
        f: {
          g: 4
        }
      },
      h: [],
      firstName: '张',
      lastName: '佳宁',
      fullName: '张佳宁'
    }
  },
  watch: {
    a () {
      this.b.c += 1
    },
    'b.c' () {
      this.b.d += 1
    },
    'b.d' () {
      this.e.f.g += 1
    },
    e: {
      handler () {
        this.h.push('诸事顺利')
      },
      deep: true
    },
    firstName (value) {
      this.fullName = value + ' ' + this.lastName
    },
    lastName (value) {
      this.fullName = this.firstName + ' ' + value
    }
  }
}
</script>

<style lang="scss" scoped>
.change {
  span {
    padding: 10px;
  }
}
.name {
  .el-input {
    width: 200px;
  }
}
p {
  text-align: center;
}
</style>