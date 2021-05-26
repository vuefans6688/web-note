<template>
  <div class="child">
    <ul>
      <li v-for="data in datas"></li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      datas: [
        { id: '01', text: '子组件内容一' },
        { id: '02', text: '子组件内容二' },
        { id: '03', text: '子组件内容三' }
      ]
    }
  }
}
</script>