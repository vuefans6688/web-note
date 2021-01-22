<template>
  <div class="interlace-discolor">
    <ul>
      <li v-for="(name, index) in names" @mouseover="handleOver(index)" 
        @mouseout="handleOut" :class="{ on: index === activeName && index % 2 === 0, 
        off: index === activeName && index % 2 !==0 }">
        {{ name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      names: ['张三', '李四', '王五', '赵六', '刘德华', '张学友', '黎明', '郭富城'],
      activeName: 0
    }
  },
  methods: {
    handleOver (index) {
      this.activeName = index
    },
    handleOut () {
      this.activeName = null
    }
  }
}
</script>

<style lang="scss" scoped>
ul {
  list-style: none;
  color: #777;
  .on {
    background-color: #f00;
    border: 1px solid #09f;
  }
  .off {
    background-color: #f90;
    border: 1px solid #000;
  }
}
</style>