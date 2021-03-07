<template>
  <div class="custom-style">
    <p class="theme">自定义主题样式</p>
    <div class="article">
      <p>这是一个段落!!!</p>
    </div>
    <div class="warning">弹窗警告!!!</div>
    <p class="anchor">
      <a href="#">这是一个锚点</a>
    </p>
    <p class="origin">原始值</p>
    <p class="target">目标值</p>
    <p class="container">这是一个容器</p>
    <p class="content">这是一些内容</p>
    <p class="card">这是一张卡片</p>
    <p class="box">这是一个盒子</p>
    <p class="functional">这是一个函数</p>
    <div class="logo">
      <a href="#"></a>
    </div>
    <ul class="demo">
      <p>zero</p>
      <li>one</li>
      <li>two</li>
    </ul>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/base.scss';
.theme {
  background: $primary-color;
}

.article {
  width: 200px;
  & {
    font-size: 20px;
    color: #f00;
  }
}

.warning {
  @include modal;
}

.anchor {
  @include alert(#8a6d3b, #fcf8e3);
}

.origin {
  padding: 15px;
}

.target {
  @extend .origin;
  background-color: #d9edf7;
}

.container {
  // h 色调 s 饱和度 l 亮度 a 透明度
  background-color: hsla(0, 100%, 50%, 0.5);
}

.content {
  border: 1px solid $base-color;
  background-color: $light-color;
  color: $dark-color;
}

.card {
  background-color: $saturate-color;
}

.box {
  background-color: $desaturate-color;
}

.functional {
  background-color: color(light);
}

.logo {
  width: 55px;
  height: 55px;
  overflow: hidden;
  margin: 20px auto;
  a {
    display: block;
    width: 110px;
    height: 55px;
    &:before {
      content: '';
      display: inline-block;
      width: 55px;
      height: 55px;
      background: url('../../assets/img/mi.jpg') no-repeat center;
      background-size: contain;
      transition: margin .2s;
    }
    &:after {
      content: '';
      display: inline-block;
      width: 55px;
      height: 55px;
      background: url('../../assets/img/home.jpg') no-repeat center;
      background-size: contain;
    }
    &:hover:before {
      margin-left: -55px;
      transition: margin .2s;
    }
  }
}

// element:nth-of-type(n)是指父元素下第n个element元素
// element:nth-child(n)是指父元素下第n个元素且这个元素为element，若不是，则选择失败
.demo {
  li:nth-child(2) {
    color: #ff0000;
  }
  li:nth-of-type(2) {
    color: #00ff00;
  }
}
</style>