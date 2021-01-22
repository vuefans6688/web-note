<template>
  <div>
    <!-- <input-com :user-name="username" @handle-input="username = $event" /> -->
    <input-com :user-name="username" @handle-input="restrictInput($event)" />
    <p>{{ username }}</p>
  </div>
</template>

<script>
import inputCom from './input-com'
import { intLimit } from '@/utils/input-limit'
export default {
  components: { inputCom },
  data () {
    return {
      username: ''
    }
  },
  methods: {
    restrictInput(event, limit) {
      this.username = intLimit(event, limit)
    }
  }
}
</script>