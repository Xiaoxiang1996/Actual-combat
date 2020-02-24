<template>
  <div>
      <div class="header">
        <div class="header-w">
          <a href="/home">
            <i class="iconfont icon-shouye"></i>
          </a>
          <a class="home" href="/home">
            <div class="txt">值得买</div>
          </a>
          <div class="header-r">
            <a class="searchlist"  href="/headernav">
              <i class="iconfont icon-soushuo"></i>
            </a>
            <a href="/cart">
              <i class="iconfont icon-gouwuche"></i>
            </a>
          </div>
        </div>
      </div>
      <div class="z-swiperContainer">
         <div class="swiper-bgurl">
           <img src="https://m.you.163.com/topic/index/img/topic_logo.c2284970.png" alt="">
           <div class="text">严选好物&nbsp;用心生活</div>
         </div>
         <div class="swiper-middle">
           <div class="swiper-container">
             <div class="swiper-wrapper">
               <div class="swiper-slide" v-for="(item,index) in navData" :key="index">
                 <div class="msiteItem" v-for="(list, index) in item" :key="index">
                   <!-- <div class="imgHeight"> -->
                     <span><img :src="list.picUrl" alt=""></span>
                     <img :src="list.picUrl" alt="">
                   <!-- </div> -->
                   <div class="itemBottom">
                     <div class="sub-title">{{list.mainTitle}}</div>
                     <span>{{list.viceTitle}}</span>
                   </div>
                 </div>
               </div>
             </div>
             <div class="swiper-pagination">
               <span class="swiper-pagination-bullet"></span>
             </div>
           </div>
         </div>
      </div>
      <div class="fullContainer">
        <waterfall :col='col' :width="width" :gutterWidth="gutterWidth" :data="layoutData" @loadmore="loadmore">
            <template>
                <div class="cell-item" v-for="(item, index) in layoutData" :key="index">
                    <img :src="item.topics[1].picUrl" alt="" class="img">
                    <div class="line1" >
                        {{item.topics[1].title}}
                    </div>
                    <div class="line2">
                        <div class="userInfo">
                            <img :src="item.topics.avatar" alt="" class="avt">
                            <div class="name">{{item.topics[1].nickname}}</div>
                        </div>
                        <div class="see">
                            <img class="seeImg" src="data:image/png;base64,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" alt="">
                            <div class="seeText">{{item.topics[1].readCount}}</div>
                        </div>
                    </div>
                </div>
            </template>
        </waterfall>
      </div> 
  </div>
</template>

<script type="text/ecmascript-6">
  import{mapState} from 'vuex'
  import Swiper from 'swiper'
  import _ from 'lodash'
  export default {
    data(){
      return{
         navData:[],
         width:345,
         gutterWidth:20,
         layoutData:[],
         col:2
      }
    },
    mounted(){
      this.$store.dispatch('getWorthNavData')
      this.$store.dispatch('getWorthyList')
      this.getData()
      var _this = this;
      window.addEventListener('scroll', function(){
      var scr = document.documentElement.scrollTop || document.body.scrollTop; // 向上滚动的那一部分高度
      var clientHeight = document.documentElement.clientHeight; // 屏幕高度也就是当前设备静态下你所看到的视觉高度
      var scrHeight = document.documentElement.scrollHeight || document.body.scrollHeight; // 整个网页的实际高度，兼容Pc端
      if(scr + clientHeight + 10 >= scrHeight){
          _this.loadmore();
      }
      });
    },
    computed:{
      ...mapState({
        worthyNav:state=> state.worthyNav,
        worthyList:state=> state.worthyList
      }),
      itemWidth(){ 
          return (133*0.5*(document.documentElement.clientWidth/375))
      }
    },
    methods:{
      splicNavdata(){
        //值得买头部数据截取
        console.log(this.worthyNav)
        if(this.worthyNav.length>0){
           let navArray = _.chunk(this.worthyNav,this.worthyNav.length/2)
           let arrResult = []
           for (let i = 0; i < navArray.length; i++) {
              arrResult.push(_.chunk(navArray[i],1))
           }
           let result = []
           for (let i = 0; i < arrResult[0].length; i++) {
              // [1,4] [2,5] [3,6]依次push到result中
              result.push(arrResult[0][i].concat(arrResult[1][i]))
           }  
           this.navData = result
        }
      },
      getData(){
         this.layoutData=this.worthyList
        //  console.log(this.worthyList)
      },
      // scroll(scrollData){
      //     // console.log(scrollData)
      // },
      switchCol(col){
          this.col = col
          console.log(this.col)
      },
      loadmore(){
        this.layoutData = this.layoutData.concat(this.worthyList)
        console.log(this.layoutData)
      }
      // console.log(this.data)
    },
    watch:{
      worthyNav(){
        this.splicNavdata()
        this.$nextTick(()=>{
          new Swiper('.swiper-container', {
              // autoplay:true,
              slidesPerView:'4',
              slidesPerGroup:1,
              loop:false,
              pagination: {
                  el: '.swiper-pagination',
              },
          })
        })
      },
      worthyList(){
        this.getData()
      }


    }
  }
</script>

<style lang="stylus">
// div
//  background #eee
.header
    height 88px
    background #fafafa
    .header-w
      width 100%
      height 88px
      z-index 1
      margin auto
      position relative
      padding 16px 24px
      display flex
      -webkit-box-align center
      align-items center
      -webkit-box-pack justify
      justify-content space-between
      box-sizing border-box
      a
         padding-top 25px
        .iconfont
          line-height 1px
          font-size 50px
      .home
        position absolute
        left 0
        right 0
        top 0
        bottom 10px
        margin auto
        padding-left 250px
      .header-r
        margin-top 28px
        margin-left auto   
        margin-right: 5px;
        .search
          margin-right 40px
.z-swiperContainer
  width 100%
  height 685px
  // background #eee
  .swiper-bgurl
   width 100%
   height 724px
   background-image url('https://m.you.163.com/topic/index/img/topic_title_bg.2373a140.png')
   background-repeat no-repeat
   background-size cover
   position relative
   img 
    position absolute
    left 12px
    top 60px 
    width 128px
    height 68px
   .text
    height 44px
    font-size 30px
    color #fff
    position absolute
    top 79px
    left 146px
  .swiper-middle
   width 710px
   margin 0 20px
   height 540px
   background #fff
   position absolute
   bottom 0
   left 0
   border-radius 20px
   z-index 100
   .swiper-container
    width 100%
    height 100%
    .swiper-wrapper
      width 100%
      height 100%
      .swiper-slide
        width 177px
        height 540px
        // padding 8px 6px 6px
        box-sizing border-box
        .msiteItem
          width 168px
          height 201px
          display flex
          margin-top 28px
          flex-direction column
          align-items center
          // .imgHeight
          //   width 120px
          //   height 120px
          img  
            width 120px
            height 120px
            // display inline-block
            // margin-bottom 10px
          .itemBottom
            width 168px
            height 201px
            text-align center
            margin-top 8px
            // flex-direction column
            .sub-title
              font-size 28px
              color #333
              height 40px
              text-align center
              font-weight bold
              line-height 40px
              // align-items center
            span 
              display block
              height 30px
              line-height 30px
              margin-top 2px
              color #999 
  .swiper-pagination
    margin-bottom 15px
    .swiper-pagination-bullet
      width 40px
      height 4px
      margin 0
      &.swiper-pagination-bullet-active
        background #DD1A21 
.fullContainer
  width 100%
  height 100%
  padding  30px 20px 0
  box-sizing border-box
  background #eee
  // display flex
  .cell-item
      background-color #fff
      border-radius 16px
      // display flex 
      overflow hidden
      margin-bottom 20px
      .img
          width 345px
      .line1
          width 343px
          box-sizing border-box
          padding 18px 16px 0
          font-size 28px
          line-height 40px
          color #333
      .line2
          width 343px
          height 89px
          box-sizing border-box
          padding 17px 16px 12px
          display flex
          justify-content space-between
          .userInfo
              height 48px
              display flex
              .avt
                  width 48px
                  height 48px
                  border 1px solid #d9d9d9
                  border-radius 24px
              .name
                  height 48px
                  color #7f7f7f
                  font-size 24px
                  line-height 48px
                  margin-left 8px
          .see
              // width 100px
              height 48px
              display flex
              .seeImg
                  width 32px
                  height 32px
              .seeText                          
                  height 32px
                  line-height 32px
                  font-size 24px     
                  color #7f7f7f       
</style>
