<template>
  <Panel title="新闻" :class="$style.panel">
    <section :class="$style.content">
      <swiper :class="$style.slider" :options="swiperOption">
        <swiper-slide v-for="item  in items" :key="item.href">
          <router-link :to="{name: item.href}">
            <div :class="$style.item">{{ item.text }} <em>></em></div>
          </router-link>
        </swiper-slide>
      </swiper>
    </section>
  </Panel>
</template>
<script>
import Panel from '../core/panel.vue'
import {swiper, swiperSlide} from 'vue-awesome-swiper'
export default {
  name: '',
  data () {
    return {
      swiperOption: {
        direction: 'vertical',
        slidesPerView: 1,
        spaceBetween: 1,
        mousewheel: true,
        autoplay: true,
        loop: true
      },
      items: [
        {
          href: 'home',
          text: '百万白条券免费送，速来领取!!!'
        },
        {
          href: 'home',
          text: '签到领流量，1元500M!'
        }
      ]
    }
  },
  components: {
    Panel,
    swiper,
    swiperSlide
  }
}
</script>
<style>
  @import "~swiper/dist/css/swiper.css";
</style>
<style lang="scss" module>
@import "../../css/elements.scss";
.panel {
  @include panel;
  >h4 {
    display: none;
  }
  .content {
    margin-top: 100px;
    height: 72px;
    background: url(//m.jr.jd.com/spe/qyy/main/images/scroll_title_img.png) left center no-repeat;
    border-top: 1px solid #eee;
    padding-left: 178px;
    overflow: hidden;
    line-height: 72px;
    .slider {
      height: 100%;
      div {
        color: #333;
        font-size: 28px;
        box-sizing: border-box;
        font-weight: 500;
        font-family: PingFangSC-Medium;
        a {
          text-decoration: none;
          margin-right: 20px;
          display: block;
          width: 100%;
          height: 100%;
          box-sizing: border-box;
          padding-right: 25px;
          div {
            text-align: left;
          }
          em {
            float: right;
            color: #ddd;
          }
        }
      }
    }
  }
}
</style>
