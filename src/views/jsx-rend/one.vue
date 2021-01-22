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
      <div>
        <p>消息: {this.message}</p>
        <input value={this.message} on-input={this.handleChange}/>
      </div>
    )
  }
}
</script>