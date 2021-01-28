<template>
  <div class="render-function">
    <component :list="list" :level="1" :is="currentView"></component>
  </div>
</template>

<script>
import containers from './components/containers'
export default {
  components: { containers },
  data () {
    return {
      list: ['沉鱼', '落雁', '闭月', '羞花'],
      currentView: containers
    }
  }
}
</script>

<style lang="scss" scoped>

</style>