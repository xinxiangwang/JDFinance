<template lang="html">
  <div>
    <heador/>
    <hSlider/>
    <Novice/>
    <Borrow/>
    <Money/>
    <Product/>
    <Life/>
    <Foot/>
    <Navbar/>
  </div>
</template>

<script>
import heador from '../public/header.vue'
import Foot from '../public/footer.vue'
import Navbar from '../public/navbar.vue'
import hSlider from './hSlider.vue'
import Novice from './novice.vue'
import Borrow from './borrow.vue'
import Money from './money.vue'
import Product from './product.vue'
import Life from './life.vue'
export default {
  components: {
    heador,
    hSlider,
    Novice,
    Borrow,
    Money,
    Product,
    Life,
    Foot,
    Navbar
  }
}
</script>

<style lang="scss" module>
  .home{
    color: red;
    font-size: 80px;
  }
</style>
