<script>
export default {
  props: {
    list: Array,
    level: Number
  },
  // 虚拟DOM
  render (h) {
    // return h('h' + this.level, {
    return h('div', {
      class: {
        foo: true,
        bar: false
      },
      style: {
        color: '#90f',
        'font-size': '30px'
      }
    }, this.list)
  }
}
</script>

<style lang="scss" scoped>
</style>