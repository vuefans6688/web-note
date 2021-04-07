<template>
  <div class="dynamic-route">
    <p>动态路由组件</p>
    <p style="color: #f00;">从named-route组件获得的路由参数: {{ content }}</p>
    <router-link to="/named-route">返回到命名路由组件</router-link>
  </div>
</template>

<script>
export default {
  data () {
    return {
      content: this.$route.params.id
    }
  }
}
</script>

<style scoped>
.dynamic-route {
  text-align: center;
}
</style>