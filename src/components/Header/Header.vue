<template>
  <div>
    <div id="headerContainer">
        <img src="../../common/images/logo.png" alt="">
        <div class="searchInput">
            <i class="iconfont icon-soushuo"></i>
            <span @click="toSearchList" class="input">搜索商品, 共20261款好物</span>
        </div>
        <div class="login">登录</div>
    </div>
    <!-- 横向滑动 -->
    <div class="navContainer">
       <ul class="navList">
           <li>推荐</li>
           <li v-for="(slideItem,index) in slideList" :key="index">{{slideItem.name}}</li>
      </ul>
    </div>
    <i class="iconfont icon-icon-arrow-down"></i>
    <!-- 轮播图 -->
    <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item, index) in indexData.focusList" :key="index">
            <img :src="item.picUrl" alt="">
          </div>
        </div>
        <div class="swiper-pagination">
            <span class="swiper-pagination-bullet"></span>
        </div>
        
    </div>
    <!-- 轮播图下三个图标 -->
    <div class="tescoIcon">
       <div class="tesconItem">
          <i class="iconfont icon-wangyi1"></i>
          <span>网易自营品牌</span>
       </div>
       <div class="tesconItem">
          <i class="iconfont icon-tianwuyou"></i>
          <span>30天无忧退货</span>
       </div>
       <div class="tesconItem">
          <i class="iconfont icon-tuikuan"></i>
          <span>48小时极速退款</span>
       </div>
    </div>
    <ShopList/>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapState} from 'vuex'
  import ShopList from '../ShopList/ShopList'
  import BScorll from 'better-scroll'
  import Swiper from 'swiper'
  import 'swiper/css/swiper.min.css'
  export default {
      components: {
         ShopList
      },
      mounted(){
          //分发横向滑动
          this.$store.dispatch('getSlideList')
          this.$store.dispatch('getIndexDataList')
          new BScorll('.navContainer',{
            scrollX:true
          })
      },
      methods:{
         toSearchList(){
          this.$router.push('/SearchList')
         }
     },
     computed:{
       ...mapState({
         slideList : state => state. slideList,
         indexData :  state=>state.indexData
       })
     },
     watch: {
      indexData(){
        this.$nextTick(() => {
          new Swiper('.swiper-container',{
              loop:true,
              autoplay: true,
              pagination:{
                el:".swiper-pagination"
              },
          })
          new Swiper('.swiper-container')
          var mySwiper = document.querySelector('.swiper-container').swiper
          mySwiper.slideNext();
        })
      }
    }
      
  }
</script>

<style lang="stylus">
#headerContainer
    width 100%
    height 88px
    padding 16px 30px
    box-sizing border-box
    display flex
    align-items center
    img 
      width 138px
      height 40px
      margin-right 20px
    .searchInput
        width 442px
        height 56px
        background #ededed
        border-radius 10px
        text-align center
        line-height 54px
        font-size 28px
        color #666666
        .iconfont
            font-size 36px
            margin-right 10px
        .input
            background #ededed
    .login
        width 74px
        height 40px
        border 2px solid #dd1a21
        border-radius 5px
        color #dd1a21
        text-align center
        line-height 40px
        margin-left 16px
.icon-icon-arrow-down
    width 100px
    height 60px
    background #ffffff
    padding 0 
    margin 0
    position absolute
    right 0
    z-index 10
    text-align center
    line-height 60px
    top 86px
.navContainer
    width 100%
    position relative
    height 60px
    line-height 60px
    display flex
    overflow hidden
    
    box-sizing border-box
    .navList
        box-sizing border-box
        padding 0 70px 0 30px
        width calc(100vh-100px) 
        display flex
        font-size 28px
        white-space nowrap
        li
          padding 0 16px
          margin-right 20px
          color #333
          font-size 28px
          position relative
          right 0
          &:first-child:after
            content ''
            position absolute
            left 0
            bottom 0
            width 100%
            height 4px
            background #dd1a21
.swiper-container
 width 100%
 height 370px
 .swiper-wrapper
  width 100%
  height 370px
  .swiper-slide
   width 100%
   height 370px
   img 
    width 100%
    height 370px
 .swiper-pagination
    .swiper-pagination-bullet
      width 40px
      height 4px
      background #fff
      border-radius 0
.tescoIcon
   width 100%
   height 72px
   display flex
   padding 0 30px
   box-sizing border-box
   align-items center
   .tesconItem
      width 228px
      height 36px
      display flex
      align-items center
      i 
       font-size 32px
       color #dd1a21
      span  
        font-size 24px
        padding-left 8px
        font-weight 400
</style>
