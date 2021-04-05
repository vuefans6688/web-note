<template>
  <div class="named-route">
    <p>命名路由组件</p>
    <router-link :to="urls">跳转到动态路由组件</router-link>
  </div>
</template>

<script>
export default {
  computed: {
    urls () {
      return {
        name: 'dynamic-route',
        params: {
          id: '123456789'
        }
      }
    }
  }
}
</script>

<style scoped>
.named-route {
  text-align: center;
}
</style>
