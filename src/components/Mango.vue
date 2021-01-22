<template>
  <div class="mango">
    <h2>芒果</h2>
    <slot></slot>
    <h4>种类: {{ kind }}</h4>
    <h4>产地: {{ address }}</h4>
  </div>
</template>

<script>
export default {
  props: {
    kind: {
      type: String,
      default: ''
    },
    address: {
      type: String,
      default: ''
    }
  }
}
</script>
