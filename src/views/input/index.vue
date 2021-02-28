<template>
  <div class="input">
    <!-- <input-component :user-name="username" @handle-input="username = $event" /> -->
    <input-component :user-name="username" @handle-input="restrictInput($event)" />
    <p class="user-name">{{ username }}</p>
  </div>
</template>

<script>
import { intLimit } from '@/utils/input-limit'
import InputComponent from './components/input-component'
export default {
  components: { InputComponent },
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

<style lang="scss" scoped>
.input {
  text-align: center;
  .user-name {
    color: crimson;
    font-size: 20px;
  }
}
</style>