<template>
  <div class="mixin">
    <el-button type="primary" @click="isShow = !isShow">切换动画</el-button>
    <transition name="bounce">
      <el-card class="box" v-if="isShow">{{ fullName }}</el-card>
    </transition>
    <el-button @click="updateStyle">更新样式</el-button>
    <p :class="a">动态绑定class</p>
  </div>
</template>

<script>
import mixin from './mixin'
export default {
  mixins: [mixin]
}
</script>

<style lang="scss" scoped>
.mixin {
  text-align: center;
}
.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
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
.box {
  width: 100px;
  height: 100px;
  margin: 20px auto;
  font-size: 20px;
}
.a-class {
  font-size: 16px;
  color: #777;
}
.b-class {
  font-size: 22px;
  color: #32cd32;
}
</style>