<script>
export default {
  props: {
    message: {
      type: String,
      default: ''
    },
    handleChange: {
      type: Function,
      required: true
    }
  },
  render () {
    return (
      <div class="one">
        <input value={this.message} on-input={this.handleChange} />
        <p class="info">消息: {this.message}</p>
      </div>
    )
  }
}
</script>