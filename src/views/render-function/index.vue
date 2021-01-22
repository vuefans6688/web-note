<template>
  <div class="render-function">
    <component :list="list" :level="1" :is="currentView"></component>
  </div>
</template>

<script>
import container from './components/container'
export default {
  components: { container },
  data () {
    return {
      list: ['沉鱼', '落雁', '闭月', '羞花'],
      currentView: container
    }
  }
}
</script>

<style lang="scss" scoped>

</style>