<template lang="html">
  <div>
    <heador/>
    <islider/>
    <Welfare/>
    <Service/>
    <Foot/>
    <Navbar/>
  </div>
</template>

<script>
import heador from '../public/header.vue'
import Foot from '../public/footer.vue'
import Navbar from '../public/navbar.vue'
import Islider from './islider.vue'
import Welfare from './welfare.vue'
import Service from './service.vue'
export default {
  components: {
    heador,
    Foot,
    Navbar,
    Islider,
    Welfare,
    Service
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
