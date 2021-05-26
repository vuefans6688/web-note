<template>
  <div class="plug">
    <!-- 作用域插槽 -->
    <stride>
      <template v-slot:todo="slotProps">
        <div class="full-name">{{ slotProps.fullName }}</div>
      </template>
    </stride>

    <!-- 利用render函数渲染组件 -->
    <fruit />

    <!-- 自定义指令 -->
    <p v-color-full="colorfull">我的颜色由自定义指令来更改</p>
    <p class="directive">
      <input v-model="keyword" type="text" style="width: 280px" v-focus />
      <el-input v-model="keyword" size="small" v-focus></el-input>
    </p>
    <p class="upper-case" v-upper-text="info"></p>
  </div>
</template>

<script>
import Stride from '@/components/Stride'
import Fruit from '@/components/Fruit'
export default {
  components: {
    Stride,
    Fruit
  },
  directives: {
    'color-full': {
      bind (el, binding) {
        el.style.color = binding.value.color
        el.style.fontWeight = binding.value.fontWeight
        el.style.fontSize = binding.value.fontSize
        el.style.textAlign = binding.value.textAlign
      }
    },
    focus: {
      inserted (el) {
        el.focus()  // html标签自动获取焦点方法
        el.querySelector('input').focus()  // element-ui自动获取焦点方法
      }
    },
    'upper-text' (el, binding) {
      el.textContent = binding.value.toUpperCase()
    }
  },
  data () {
    return {
      colorfull: {
        color: '#42b983',
        fontSize: '20px',
        fontWeight: 'bold',
        textAlign: 'center'
      },
      keyword: '',
      info: 'this Is Lucy'
    }
  }
}
</script>

<style lang="scss" scoped>
.full-name {
  text-align: center;
  color: #f00;
  font-size: 18px;
}
.directive {
  text-align: center;
  .el-input {
    width: 280px;
  }
}
.upper-case {
  text-align: center;
  color: #f50;
  font-weight: bold;
}
</style>