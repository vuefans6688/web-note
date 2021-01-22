<template>
  <div class="functional">
    <children :persons="persons" />
  </div>
</template>

<script>
import children from '../functional/children'
export default {
  components: { children },
  data () {
    return {
      persons: [
        { id: '001', name: '玛丽', age: 20 },
        { id: '002', name: '尤莉', age: 18 },
        { id: '003', name: '火舞', age: 19 }
      ]
    }
  }
}
</script>
