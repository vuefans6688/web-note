<script>
import Mango from './Mango'
export default {
  components: { Mango },
  data () {
    return {
      kind: '大青芒',
      address: '云南',
      delicious: '非常美味'
    }
  },
  render () {
    const { kind, address } = this
    const style = {
      margin: '20px auto',
      textAlign: 'center',
      color: '#09f'
    }
    return (
      <Mango kind={kind} address={address} style={style}>{this.delicious}</Mango>
    )
  }
}
</script>

