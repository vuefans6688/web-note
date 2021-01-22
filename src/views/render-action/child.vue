<script>
export default {
  props: {
    list: {
      type: Array,
      default () {
        return []
      }
    }
  },
  render (h) {
    if (this.list.length) {
      return h('ul', this.list.map(item => {
        return h('li', {
          style: {
            color: '#09f',
            'font-size': '24px'
          }
        }, item)
      }))
    } else {
      return h('p', {
        style: {
          'background-color': '#eee',
          color: '#777',
          width: '200px',
          height: '30px',
          'line-height': '30px',
          'text-align': 'center',
          border: '1px solid #ddd'
        },
        // 如果有模板就先解析模板
        domProps: {
          innerHTML: '好好学习，天天向上'
        },
        on: {
          click () {
            console.log('我是render函数')
          }
        }
      }, '列表为空')
    }
  }
}
</script>