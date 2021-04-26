<template>
  <div class="mine-canvas">
    <canvas id="canvas" :width="contentWidth" :height="contentHeight"></canvas>
  </div>
</template>

<script>
export default {
  name: 'MineCanvas',
  props: {
    verify: {
      type: [Array, String],
      default: 'asdf'
    }
  },
  data () {
    return {
      fontSizeMin: 26,
      fontSizeMax: 24,
      backgroundColorMin: 180,
      backgroundColorMax: 240,
      colorMin: 50,
      colorMax: 160,
      lineColorMin: 40,
      lineColorMax: 180,
      dotColorMin: 0,
      dotColorMax: 255,
      contentWidth: 190,
      contentHeight: 30,
      contentLineHeight: 30,
      contentTextAlign: 'center'
    }
  },
  methods: {
    // 生成一个随机数字
    randomNumber (min, max) {
      return Math.floor(Math.random() * (max - min) + min)
    },
    // 生成一个随机颜色
    randomColor (min, max) {
      let r = this.randomNumber(min, max)
      let g = this.randomNumber(min, max)
      let b = this.randomNumber(min, max)
      return `rgb(${r}, ${g}, ${b})`
    },
    drawPicture () {
      let canvas = document.getElementById('canvas')
      let context = canvas.getContext('2d')
      // 绘制背景
      context.fillStyle = this.randomColor(this.backgroundColorMin, this.backgroundColorMax)  // 图形填充颜色设置
      context.strokeStyle = this.randomColor(this.backgroundColorMin, this.backgroundColorMax)  // 图形轮廓的颜色设置
      context.fillRect(0, 0, this.contentWidth, this.contentHeight)  // 绘制一个填充的矩形 0 0 width height x起点 y起点  宽 高
      context.strokeRect(0, 0, this.contentWidth, this.contentHeight)  // 绘制一个矩形边框 0 0 width height x起点 y起点  宽 高
      context.clearRect(50, 0, this.contentWidth, this.contentHeight)   // 清除指定矩形区域，清除部分完全透明
      // 绘制文字
      for (let i = 0; i < this.verify.length; i++) {
        this.drawText(context, this.verify[i], i)
      }
      this.drawLine(context)
      this.drawDot(context)
    },
    drawText (context, text, i) {
      context.fillStyle = this.randomColor(this.colorMin, this.colorMax)
      context.font = this.randomNumber(this.fontSizeMin, this.fontSizeMax) + 'px SimHei'  // 字体大小
      context.textBaseline = 'alphabetic'  // 基线对齐
      let x = (i + 1) * (this.contentWidth / (this.verify.length + 1))
      let y = this.randomNumber(this.fontSizeMax, this.contentHeight - 5)
      let deg = this.randomNumber(-45, 45)
      // 修改坐标原点和旋转角度
      context.translate(x, y)  // 移动不同位置  参数偏移量
      context.rotate(deg * Math.PI / 180)  // 旋转 参数角度
      context.fillText(text, 0, 0)
      // 恢复坐标原点和旋转角度
      context.rotate(-deg * Math.PI / 180)
      context.translate(-x, -y)
    },
    // 绘制干扰线
    drawLine (context) {
      for (let i = 0; i < 8; i++) {
        context.strokeStyle = this.randomColor(this.lineColorMin, this.lineColorMax)
        context.beginPath()  // 新建一条路径
        context.moveTo(this.randomNumber(0, this.contentWidth), this.randomNumber(0, this.contentHeight))  // 设置起点x, y
        context.lineTo(this.randomNumber(0, this.contentWidth), this.randomNumber(0, this.contentHeight))  // 绘制直线 x, y 一条当前位置到x, y点的直线
        context.stroke()  // 通过线条绘制图形轮廓
        context.closePath()  // 结束闭合路径
      }
    },
    // 绘制干扰点
    drawDot (context) {
      for (let i = 0; i < 100; i++) {
        context.fillStyle = this.randomColor(0, 255)
        context.beginPath()
        // 绘制圆弧或圆, x, y, radius, startAngle, endAngle, anticlockwise 
        // x, y 圆心点, radius 半径, 从startAngle开始到endAngle结束
        context.arc(this.randomNumber(0, this.contentWidth), this.randomNumber(0, this.contentHeight), 1, 0, 2 * Math.PI)
        context.fill()  // 通过填充路径的内容区域生成实心的图形
      }
    }
  },
  watch: {
    verify () {
      this.drawPicture()
    }
  },
  mounted () {
    this.drawPicture()
  }
}
</script>  