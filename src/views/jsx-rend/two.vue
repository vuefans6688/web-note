<script>
import one from './one'
import './index.scss'
export default {
  components: { one },
  data () {
    return {
      flag: true,
      message: '我是vue和react的结合体',
      list: [
        { id: '01', cityName: '苏州' },
        { id: '02', cityName: '牡丹江' },
        { id: '03', cityName: '长江' }
      ]
    }
  },
  render () {
    const tip = this.flag ? '你中奖了!' : '很遗憾，没中...'
    return (
      <div class="two">
        <p class="tip">中奖情况: {tip}</p>
        <one message={this.message} handle-change={this.handleChange} />
        <ul class="city-name">
          {
            this.list.map(item => <li>城市: {item.cityName}</li>)
          }
        </ul>
      </div>
    )
  },
  methods: {
    handleChange (e) {
      this.message = e.target.value
    }
  }
}
</script>