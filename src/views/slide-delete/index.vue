<template>
  <div class="container">
    <ul>
      <li
        class="list-item"
        v-for="(item, index) in list"
        data-type="0"
        :key="index"
        ref="list-item"
      >
        <div
          class="list-box"
          @touchstart.capture="touchStart"
          @touchend.capture="touchEnd"
          :data-index="index"
        >
          <div class="list-content">
            <p class="title">{{ item.title }}</p>
            <p class="tips">{{ item.tips }}</p>
            <p class="time">{{ item.time }}</p>
          </div>
        </div>
        <div class="delete" :data-index="index" @click="deleteItem">删除</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      startX: 0,  // 开始位置
      endX: 0,    // 结束位置
      list: [
        {
          title: '你好1',
          tips: '提示1',
          time: '2020-01-19'
        },
        {
          title: '你好2',
          tips: '提示2',
          time: '2020-02-19'
        },
        {
          title: '你好3',
          tips: '提示3',
          time: '2020-03-19'
        },
        {
          title: '你好4',
          tips: '提示4',
          time: '2020-04-19'
        }
      ]
    }
  },
  methods: {
    // 滑动开始
    touchStart (e) {
      // 记录开始位置
      this.startX = e.touches[0].clientX
    },
    // 滑动结束
    touchEnd (e) {
      let index = e.currentTarget.dataset.index
      // 当前滑动的父级元素
      let parentElement = e.currentTarget.parentElement
      // 记录结束位置
      this.endX = e.changedTouches[0].clientX
      // 左滑
      if (parentElement.dataset.type == 0 && this.startX - this.endX > 30) {
        this.resetSlide(index)
        parentElement.dataset.type = 1
      }
      // 右滑
      if (parentElement.dataset.type == 1 && this.startX - this.endX < -30) {
        this.resetSlide(index)
        parentElement.dataset.type = 0
      }
      this.startX = 0
      this.endX = 0
    },
    // 判断当前是否有滑块处于滑动状态
    checkSlide () {
      let listItems = this.$refs['list-item']
      listItems.forEach(item => {
        if (item.dataset.type === 1) {
          return true
        }
      })
      return false
    },
    // 复位滑动状态
    resetSlide (i) {
      let listItems = this.$refs['list-item']
      // 复位
      listItems.forEach((item, index) => {
        if (i === index) {
          item.dataset.type = 1
        } else {
          item.dataset.type = 0
        }
      })
    },
    // 删除
    deleteItem (e) {
      // 当前索引
      let index = e.currentTarget.dataset.index
      // 删除
      this.list.splice(index, 1)
      // 复位
      this.resetSlide()
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  overflow: hidden;
  ul {
    list-style: none;
  }
}
.list-item {
  position: relative;
  height: 1.6rem;
  -webkit-transition: all 0.2s;
  transition: all 0.2s;
}
.list-item[data-type="0"] {
  transform: translate3d(0, 0, 0);
}
.list-item[data-type="1"] {
  transform: translate3d(-2rem, 0, 0);
}
.list-item:after {
  content: "";
  position: absolute;
  left: 0.2rem;
  bottom: 0;
  right: 0;
  height: 1px;
  border-bottom: 1px solid #ccc;
  color: #ccc;
  -webkit-transform-origin: 0 100%;
  transform-origin: 0 100%;
  -webkit-transform: scaleY(0.5);
  transform: scaleY(0.5);
  z-index: 2;
}
.list-box {
  padding: 0.2rem;
  background: #fff;
  display: flex;
  align-items: center;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  justify-content: flex-end;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  font-size: 0;
}
.list-item .list-content {
  padding: 0.1rem 0 0.1rem 0.2rem;
  position: relative;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  overflow: hidden;
}
.list-item .title {
  display: block;
  color: #333;
  overflow: hidden;
  font-size: 15px;
  font-weight: bold;
  text-overflow: ellipsis;
  white-space: nowrap;
  position: absolute;
  left: 50px;
  top: 0;
}
.list-item .tips {
  display: block;
  overflow: hidden;
  font-size: 12px;
  color: #999;
  line-height: 20px;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.list-item .time {
  display: block;
  font-size: 12px;
  position: absolute;
  right: 0;
  top: 5px;
  color: #666;
}
.list-item .delete {
  width: 2rem;
  height: 1.6rem;
  background: #ff4949;
  font-size: 16px;
  color: #fff;
  text-align: center;
  line-height: 1.6rem;
  position: absolute;
  top: 0;
  right: -2rem;
}
</style>