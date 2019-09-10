<template>
 <article>
   <Slider :items ="item" :cname="$style.slider"/>
   <section :class="$style.list">
     <div :class="$style.item" v-for="item in enters" :key="item.img">
       <router-link :to="{ name: item.href }">
         <img :src="item.img" alt="item.title">
         <h4>{{ item.title }}</h4>
       </router-link>
     </div>
   </section>
 </article>
</template>
<script>
import Slider from '../core/slider.vue'
export default {
  name: '',
  data () {
    return {
      item: [
        {
          href: "home",
          src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5bc6ee53b7f76c1ee42a42710fcb1a05.jpg?thumb=1&w=720&h=360"
        },
        {
          href: "home",
          src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e9bcc9c5714fb6137375fb89e6b77de7.jpg?thumb=1&w=720&h=360"
        },
        {
          href: "home",
          src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e8d1b241617a52f249acd3008c7bc657.jpg?thumb=1&w=720&h=360"
        }
      ],
      enters: [
        {
        href: "home",
        img: "https://img12.360buyimg.com/jrpmobile/jfs/t3991/64/2521945388/12110/93c0139/58d1e462Ncf294123.png?width=132&height=132",
        title: "优惠券"
        },
        {
        href: "home",
        img: "https://img12.360buyimg.com/jrpmobile/jfs/t5590/252/875247023/17343/946aa72c/59224650N0f7ffc92.png?width=132&height=132",
        title: "领福利"
        },
        {
        href: "home",
        img: "https://img12.360buyimg.com/jrpmobile/jfs/t4393/329/2180608902/13217/c88c0cec/58ec9dcdN1534e2d7.png?width=132&height=132",
        title: "抢钢镚"
        },
        {
        href: "home",
        img: "https://img12.360buyimg.com/jrpmobile/jfs/t5488/298/1036263348/12073/b4f4de97/590ac8e8Ne9def22e.png?width=135&height=135",
        title: "白条提额"
        },
        {
        href: "home",
        img: "https://img12.360buyimg.com/jrpmobile/jfs/t1/520/34/950/3686/5b9239e3Eaaf5465c/8d8c35badacfc114.png?width=132&height=132",
        title: "工资理财"
        },
        {
        href: "home",
        img: "https://img12.360buyimg.com/jrpmobile/jfs/t1/1216/39/659/4516/5b923b1cE5943d1c6/dabaf8b842f57eb9.png?width=132&height=132",
        title: "众筹"
        }
      ]
    }
  },
  components: {
    Slider
  }
}
</script>
<style lang="scss" module>
@import "../../css/elements";
.slider {
  margin-top: 120px;
  img {
    width: 100%;
  }
}
.list {
  @include list(row);
  background: #fff;
  padding-top: 40px;
  padding-bottom: 20px;
  justify-content: space-around;
  a {
    text-decoration: none;
  }
  .item {
    text-align: center;
    img {
      display: inline-block;
      width: 90px;
      height: 90px;
    }
    h4 {
      font-size: 26px;
      margin-top: 12px;
      color: #666;
    }
  }
}
</style>
