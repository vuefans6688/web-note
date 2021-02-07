<template>
  <div class="stride">
    <!-- v-slot作用域插槽 -->
    <slot name="todo" :full-name="fullName">{{ fullName }}</slot>
  </div>
</template>

<script>
export default {
  data () {
    return {      
      fullName: '双儿'
    }
  }
}
</script>

