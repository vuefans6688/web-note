<template>
  <div class="event-center">
    <increment />
    <decrease />
  </div>
</template>

<script>
import increment from './increment'
import decrease from './decrease'
export default {
  components: {
    increment,
    decrease
  }
}
</script>
