<template>
 <Panel title="In货推荐" :class="$style.panel">
   <section :class="$style.content">
     <div :class="$style.items" v-for="(item, index) in items" :key="index">
       <img :src="item.category" alt="">
       <div v-for="(product, index) in item.list" :key="index">
          <img :src="product.img" alt="">
          <p>{{ product.title }}</p>
          <p>{{ product.price }}<em>起</em></p>
          <div :class="$style.jx">精选</div>
          <article>
            <div :class="$style.wrapper">
              <div :class="$style.inner" :style="{width:product.progress+'%'}"></div>
            </div>
            <p>{{ product.progress }}%</p>
          </article>
       </div>
     </div>
   </section>
 </Panel>
</template>
<script>
import Panel from '../core/panel.vue'
export default {
  name: '',
  data () {
    return {
      items: [
        {
          category: '//img12.360buyimg.com/jrpmobile/jfs/t3406/210/2247820735/50952/86016eea/5846d8e7N20446dbd.png?width=750&height=200',
          list: [
            {
              img: 'https://img30.360buyimg.com/cf/s250x250_jfs/t14881/283/656508232/143980/9b606acf/5a33a171N18c9c80a.jpg',
              title: '双响蓝牙音响',
              price: '29.00',
              progress: 39
            },
            {
              img: 'https://img30.360buyimg.com/cf/s250x250_jfs/t15529/308/632300625/135123/adb9c6d0/5a37676dNc31da9ea.jpg',
              title: '脑波相机',
              price: '998.00',
              progress: 60
            }
          ]
        },
        {
          category: '//img12.360buyimg.com/jrpmobile/jfs/t3739/82/2244582797/54399/746c7d79/5846a953N66b67d05.png?width=750&height=200',
          list: [
            {
              img: 'https://img30.360buyimg.com/cf/s250x250_jfs/t11257/287/2281727659/55759/e00b90a/5a138f21N32dca834.jpg',
              title: '智能电动牙刷',
              price: '19.00',
              progress: 10
            },
            {
              img: 'https://img30.360buyimg.com/cf/s250x250_jfs/t14209/293/662014092/61635/bba5c330/5a33a983N077cac56.jpg',
              title: '烟草加热电子烟',
              price: '258.00',
              progress: 80
            }
          ]
        },
        {
          category: '//img12.360buyimg.com/jrpmobile/jfs/t3214/113/4408032436/61548/ce316eef/5846d310Ne93f00c9.png?width=750&height=200',
          list: [
            {
              img: 'https://img30.360buyimg.com/cf/s250x250_jfs/t15007/47/884045069/149879/17987250/5a3cb182N15868ea1.jpg',
              title: '赖公高淮封藏老酒',
              price: '99.00',
              progress: 99
            },
            {
              img: 'https://img30.360buyimg.com/cf/s250x250_jfs/t14197/160/546457496/134173/4e1baccd/5a30ccc5Na44f7492.jpg',
              title: '泗洪花雕醉蟹',
              price: '58.00',
              progress: 47
            }
          ]
        }
      ]
    }
  },
  components: {
    Panel
  }
}
</script>
<style lang="scss" module>
 @import "../../css/elements.scss";
 .panel {
   @include panel;
   .content {
     width: 100%;
     .items {
       @include flex(row);
        width: 100%;
        height: 590px;
        background: rgba(0, 0, 0, 0.02);
        >img {
          width: 100%;
        }
        >div {
          width: 50%;
          text-align: center;
          position: relative;
          
          >img {
            width: 4.25rem;
            height: 4.25rem;
            margin: 1.1rem auto 0.5rem;
          }
          p {
            &:nth-child(2) {
              color: #444;
              font-size: 0.7rem;
            }
            &:nth-child(3) {
              color: #FF3232;
              font-size: 0.9rem;
              margin-top: 5px;
            }
            em {
              font-family: PingFangSC-Semibold;
              font-size: 0.5rem;
              color: #999;
              height: 1.2rem;
              line-height: 1.2rem;
              margin-left:  0.1rem;
            }
          }
          .jx {
            position: absolute;
            left: 0;
            top: 0;
            font-family: PingFangSC-Medium;
            font-size: 0.5rem;
            color: #ff0000;
            text-align: center;
            padding: 0.1rem 0.2rem;
            background-image: linear-gradient(-35deg, #C1C1C1 0, #ACACAC 100%);
          }
          >article {
            @include flex(row);
            align-items: center;
            justify-content: space-around;
            padding: 0 20px;
            height: 3px;
            line-height: 30px;
            margin-top: 12px;
            .wrapper {
              width: 144px;
              height: 10px;
              border-radius: 22px;
            }
            .inner {
              width: 40%;
              height: 10px;
              border-radius: 22px;
              background-image: linear-gradient(270deg, #F55 1%, #FF9C31 100%);
            }
            p {
              font-size: 24px;
              color: #999;
            }
          }
        }
     }
   }
 }
</style>
