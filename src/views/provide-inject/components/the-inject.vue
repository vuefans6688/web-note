<template>
  <div class="the-inject">
    <h3>当前值: {{ count }}</h3>
  </div>
</template>

<script>
export default {
  inject: ['count']
}
</script>