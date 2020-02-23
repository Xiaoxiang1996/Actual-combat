<template>
    
  <div>
    <!-- 分类列表 -->
     <div id="shopList">
      <ul v-if="indexData.kingKongModule" class="shopItem">
        <li v-for="(list,index) in indexData.kingKongModule.kingKongList" :key="index">
          <img :src="list.picUrl" alt="">
          <span>{{list.text}}</span>
        </li>
      </ul>
     </div>
     <!-- 蓝色块 -->
    <div class="blueContainer" v-if="indexData.bigPromotionModule">
      <div class="blueTop">
         <img :src="indexData.bigPromotionModule.floorList[0].cells[0].picUrl" alt="">
              <div class="products">
                <div class="swiper-wrapper">
                  <div class="swiper-slide" v-for="(item, index) in indexData.bigPromotionModule.floorList[0].cells[0].itemList" :key="index">
                    <img :src="item.picUrl" alt="">
                    <div class="price">
                      <span classs="re-price">￥{{item.retailPrice}}</span>
                      <!-- <del class="sub-price" v-show="item.counterPrice">￥{{item.counterPrice}}</del> -->
                    </div>
                </div>
              </div>
         </div>
      </div>
      <div class="blueBottom">
        <div class="blueMask">
          <img :src="indexData.bigPromotionModule.floorList[1].cells[0].picUrl" alt="">
        </div>
        <div class="blueList">
          <ul>
            <li v-for="(item, index) in indexData.bigPromotionModule.floorList[2].cells" :key="index">
              <img :src="item.picUrl" alt="">
            </li>
          </ul>
          <ul>
            <li v-for="(item2, i) in indexData.bigPromotionModule.floorList[3].cells" :key="i">
              <img :src="item2.picUrl" alt="">
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- <Category/> -->
  </div>
</template>

<script type="text/ecmascript-6">
import { mapState } from 'vuex'
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
// import Category from '../Category/Category'
  export default {
    // components: {
    //   Category
    // },
    mounted(){
      this.$store.dispatch('getIndexDataList')
    },
    computed:{
      ...mapState({
        indexData :  state=>state.indexData
      })
    },
    watch:{
      indexData(){
          this.$nextTick(()=>{
            new Swiper('.products',{
              autoplay:true,
              loop:true,
              // speed:100,
              effect : 'fade',
              fadeEffect: {
                crossFade: true,
              }
            })
        })
      }
    },
  }
</script>

<style lang="stylus">
#shopList
  width 100%
  height 373px
  .shopItem
    display flex
    flex-wrap wrap
    li
      width 110px
      height 156px
      margin 10px 20px
      img 
        width 110px
        height 110px
      //  margin-bottom 10px
      span 
        display block
        width 110px
        height 36px
        line-height 30px
        font-size 24px 
        text-align center 
        color #333
.blueContainer
  width 100%
  height 828px
  .blueTop
   width 100%
   height 240px
   position relative
   img
    width 100%
    height 100%
   .products 
        width 168px
        height 168px
        position absolute
        left 90px
        top 25px
        overflow hidden
        .swiper-wrapper
          width 100%
          height 100%
          .swiper-slide
            width 100%
            height 100%
            position relative
            img 
              width 85%
              height 85%
            .price
              width 115px
              height 32px
              background #f48f18
              position absolute
              left 10px
              bottom 8px
              border-radius 16px
              text-align center
              line-height 32px
              z-index 10
              span
                color #fff
                font-size 24px
                text-align center
              del
                font-size 24px
                color #fff
                -webkit-transform-origin-x 0
                -webkit-transform scale(0.5) 
  .blueBottom
   width 100%
   background #1674e3
   padding 20px
   box-sizing border-box
   .blueMask
    width 710px
    height 160px
    margin-bottom 5px
    img 
     width 100%
     height 100%
   .blueList
    ul
     display flex
     flex-wrap wrap
     li
      margin-top 5px
      &:nth-child(2n+1)
       margin-right 10px 
      img 
       width 349px
       height 186px
</style>
