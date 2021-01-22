const mixin = {
  data () {
    return {
      firstName: '露',
      lastName: '茜',
      isShow: false,
      a: 'a-class'
    }
  },
  methods: {
    updateStyle () {
      this.a = 'b-class'
    }
  },
  computed: {
    fullName: {
      get () {
        return this.firstName + '' + this.lastName
      },
      set (newValue) {
        const names = newValue.split('')
        this.firstName = names[0]
        this.lastName = names[names.length - 1]
      }
    }
  }
}

export default mixin