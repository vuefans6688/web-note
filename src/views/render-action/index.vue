<template>
  <div class="render-action">
    <child :list="list" />
    <el-button @click="handleClick" type="success">显示列表</el-button>
  </div>
</template>

<script>
import child from './child'
export default {
  components: { child },
  data () {
    return {
      list: []
    }
  },
  methods: {
    handleClick () {
      this.list = ['vue.js项目实战', 'JavaScript高级教程', 'CSS3进阶视频', 'Node.js入门教程']
    }
  }
}
</script>