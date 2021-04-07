<template>
  <!-- 拖拽功能 -->
  <div class="drag">
    <div class="box" @mousedown="handleDrag">
      x轴：{{ positionX }}，y轴 {{ positionY }}
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      positionX: 0,
      positionY: 0
    }
  },
  methods: {
    handleDrag (event) {
      // 阻止默认事件，防止拖动时其它元素被选中
      event.preventDefault()
      // 获取目标元素
      let element = event.target
      // 计算鼠标相对元素的位置
      let distanceX = event.clientX - element.offsetLeft
      let distanceY = event.clientY - element.offsetTop
      // 鼠标按下并移动的事件
      document.onmousemove = event => {
        // 用鼠标的位置减去鼠标相对元素的位置，得到元素的位置
        let left = event.clientX - distanceX
        let top = event.clientY - distanceY
        // 绑定元素位置到positionX和positionY上面
        this.positionX = top
        this.positionY = left
        // 移动当前元素
        element.style.left = left + 'px'
        element.style.top = top + 'px'
      }
      document.onmouseup = () => {
        document.onmousemove = null
        document.onmouseup = null
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.drag {
  position: relative;
  .box {
    position: absolute;
    top: 10px;
    left: 10px;
    width: 200px;
    height: 200px;
    background: #42b983;
    color: #fff;
    border: 4px solid #ddd;
  }
}
</style>