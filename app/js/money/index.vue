<template lang="html">
  <div>
    <heador/>
    <Mslider/>
    <Ada/>
    <Money/>
    <Adb/>
    <Finance/>
    <Adc/>
    <Foot cname="mfoot"/>
    <Navbar/>
  </div>
</template>

<script>
import heador from '../public/header.vue'
import Foot from '../public/footer.vue'
import Navbar from '../public/navbar.vue'
import Mslider from './mslider.vue'
import Ada from './ada.vue'
import Money from './money.vue'
import Adb from './adb.vue'
import Finance from './finance.vue'
import Adc from './adc.vue'
export default {
  components: {
    heador,
    Foot,
    Navbar,
    Mslider,
    Ada,
    Money,
    Adb,
    Finance,
    Adc
  }
}
</script>

<style lang="scss">
  .home{
    color: red;
    font-size: 80px;
  }
  .mfoot {
    ul {
      li:first-child {
        display: none;
      }
    }
  }
</style>
