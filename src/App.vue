﻿<template>
  <div id="app">
    <router-view />
    <router-view name="namedView"></router-view>
    <router-view name="header"></router-view>
    <router-view name="body"></router-view>
    <router-view name="footer"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss" scoped>
</style>
