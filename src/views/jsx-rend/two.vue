<script>
import one from './one'
export default {
  data () {
    return {
      flag: true,
      message: '我是jsx和render的结合体',
      list: [
        { cityName: '苏州' },
        { cityName: '牡丹江' },
        { cityName: '长江' }
      ] 
    }
  },
  render () {
    const tip = this.flag ? '你中奖了!' : '很遗憾，没中...'
    return (
      <div>
        <p style={{ 'text-align': 'center', color: '#09f' }}>中奖情况: {tip}</p>
        <one style={{ 'text-align': 'center', color: '#f00' }} message={this.message} 
          handle-change={this.handleOnInput}>
        </one>
        <ul style={{ 'text-align': 'center', 'list-style': 'none', color: '#f90' }}>
          {this.list.map(item => <li>城市: {item.cityName}</li>)}
        </ul>
      </div>
    )
  },
  methods: {
    handleOnInput (e) {
      this.message = e.target.value
    }
  }
}
</script>