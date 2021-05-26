<template>
  <div class="sync">
    <transition name="bounce">
      <my-dialog :show.sync="isChild" v-if="isChild" />
    </transition>
    <el-button @click="changeChild" type="primary">{{ buttonText }}</el-button>
  </div>
</template>

<script>
import MyDialog from './components/my-dialog'
export default {
  components: { MyDialog },
  data () {
    return {
      isChild: false
    }
  },
  methods: {
    changeChild () {
      this.isChild = !this.isChild
    }
  },
  computed: {
    buttonText () {
      return !this.isChild ? '打开' : '关闭'
    }
  }
}
</script>

<style lang="scss" scoped>
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>