<template>
  <div class="shop-cart">
    <h3>vuex-购物车</h3>
    <!-- 商品的列表 -->
    <product />
    <!-- 购物车的列表 -->
    <cart />
    <!-- 小记 -->
    <info />
  </div>
</template>

<script>
import Product from '@/components/Product'
import Cart from '@/components/Cart'
import Info from '@/components/Info'
export default {
  components: { Product, Cart, Info }
}
</script>

