<template>
  <div class="case">
    <div class="header">
      <input :value="inputValue" @input="handleInput" v-before-add>
      <button @click="handleSubmit">提交</button>
    </div>
    <ul>
      <li v-for="(item, index) in list" :key="index">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
import { ref, reactive } from '@vue/composition-api'
export default {
  directives: {
    'before-add': {
      inserted (el) {
        el.focus()
      }
    }
  },
  setup () {
    const list = reactive(['张三', '李四'])

    const inputValue = ref('阿悠悠')

    function handleInput(e) {
      inputValue.value = e.target.value
    }

    function handleSubmit() {
      list.push(inputValue.value)
      inputValue.value = ''
    }

    return {
      list,
      inputValue,
      handleInput,
      handleSubmit
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  input {
    width: 280px;
  }
  button {
    margin-left: 10px;
  }
}
</style>