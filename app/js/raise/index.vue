<template lang="html">
  <div>
    <heador/>
    <Rslider/>
    <Daily/>
    <Inh/>
    <More/>
    <Foot/>
    <Navbar/>
  </div>
</template>

<script>
import heador from '../public/header.vue'
import Foot from '../public/footer.vue'
import Navbar from '../public/navbar.vue'
import Rslider from './rslider.vue'
import Daily from './daily.vue'
import Inh from './inh.vue'
import More from './more.vue'
export default {
  components: {
    heador,
    Rslider,
    Daily,
    Foot,
    Navbar,
    Inh,
    More
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
