<template>
  <div class="tab">
    <span class="list" v-for="(item, index) in list" :class="{active: currentIndex === index}"
      @click="handleTab(index)">
      {{ item }}
    </span>
    <div class="content" v-for="(item, index) in content" v-show="currentIndex === index">
      <img :src="item">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: ['祝绪丹', '鞠婧祎', '宋轶'],
      content: [
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583489009719&di=d1d35de4561818d18ea728444a59aacb&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fpic%2F5%2Fd5%2Ff77ae46aed.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583494551985&di=d0ca7e90b4cc35d9bbfadb8cc91a5db9&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201903%2F16%2F20190316171632_fodwy.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583494616273&di=b9e094f34a7dd00345af14a5f01c734b&imgtype=0&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201607%2F31%2F20160731150331_8Q4Wi.jpeg'
      ],
      currentIndex: 0    
    }
  },
  methods: {
    handleTab(index) {      
      this.currentIndex = index      
    }
  }
}
</script>

<style lang="scss" scoped>
.tab {
  text-align: center;
  .list {
    display: inline-block;
    width: 151px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    cursor: pointer;
    background: #eee;
    color: #666;
    &.active {
      color: #fff;
      background: #09f;
    }
  }
  .content {
    img {
      width: 453px; 
      height: 400px;
    }
  }
}

</style>