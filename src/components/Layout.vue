<template>
  <div class="layout">
    <el-container>
      <el-aside>
        <el-menu
          router
          :default-active="$route.path"
          class="el-menu-vertical-demo nav"
        >
          <el-menu-item index="/the-home">
            <i class="el-icon-menu"></i>
            <span slot="title">首页</span>
          </el-menu-item>
          <el-menu-item index="/shop-cart">
            <i class="el-icon-goods"></i>
            <span slot="title">
              购物车<el-badge class="mark" v-if="totalNum" :value="totalNum" />
            </span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <el-tag v-if="views === 'the-home'">商品列表</el-tag>
        <el-tag v-if="views === 'shop-cart'">购物车</el-tag>
        <goods v-if="views === 'the-home'" />
        <cart v-if="views === 'shop-cart'" />
      </el-main>
    </el-container>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Goods from './Goods'
import Cart from './Cart'
export default {
  name: 'layout',
  props: {
    views: String
  },
  components: { Goods, Cart },
  computed: {
    ...mapGetters(['goodList', 'totalNum'])
  },
  methods: {
    ...mapActions(['addToCart'])
  }
}
</script>

<style lang="scss" scoped>
.el-menu-vertical-demo {
  position: fixed;
  top: 0;
  min-height: 100vh;
  min-width: 200px;
}
</style>
