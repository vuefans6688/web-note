<template>
  <div class="input-component">
    <!-- <input :value="username" @input="$emit('handle-input', $event.target.value)" v-focus> -->
    <input
      :value="username"
      @input="getUsername($event)"
      v-focus
      v-enter-number
    />
  </div>
</template>

<script>
export default {
  props: {
    username: {
      type: String,
      default: ''
    }
  },
  methods: {
    getUsername (event) {
      this.$emit('handle-input', event.target.value)
    }
  },
  directives: {
    focus: {
      inserted (el) {
        el.focus()
      }
    },
    // 限制input输入框只能输入纯数字
    'enter-number': {
      inserted (el) {
        el.addEventListener('keypress', e => {
          e = e || window.event
          let code = typeof e.charCode === 'number' ? e.charCode : e.keyCode
          let valid = /\d/
          if (!valid.test(String.fromCharCode(code)) && code > 9 && !e.ctrlKey) {
            if (e.preventDefault) {
              e.preventDefault()
            } else {
              e.returnValue = false
            }
          }
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.input-component {
  margin-top: 20px;
  text-align: center;
  input {
    width: 300px;
    height: 25px;
    line-height: 25px;
    border: 1px solid #e6e6ee;
    border-radius: 6px;
    color: #777;
  }
}
</style>