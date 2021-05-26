<template>
  <div class="recursive">
    <recursion :data-list="dataList" />
  </div>
</template>

<script>
import recursion from './components/recursion'
export default {
  name: 'recursive',
  components: { recursion },
  data () {
    return {
      dataList: [
        {
          title: '手机',
          level: 1,
          children: [
            {
              title: '华为',
              level: 2,
              children: [
                {
                  title: '红米',
                  level: 3
                }
              ]
            },
            {
              title: '苹果',
              level: 2
            },
            {
              title: '三星',
              level: 2
            }
          ]
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
</style>