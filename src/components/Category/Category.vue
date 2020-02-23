<template>
<div>
     <!-- 新人专享礼 -->
    <div class="exclusiveContainer" v-if="indexData.indexActivityModule">
        <div class="exclusiveTop">
          <span class="line1 line"></span>
          <span> 新人专享礼 </span>
          <span class="line2 line"></span>
        </div>
        <div class="exclusiveBottom">
          <div class="leftContainer">
            <span>新人专享礼包</span>
            <img src="http://yanxuan.nosdn.127.net/ba4d635ec94ad95b28bfab6500900659.png" alt="">
          </div>
          <div class="rightContainer">
            <div class="welfare">
              <span>{{indexData.indexActivityModule[0].title}}</span>
              <span class="today">{{indexData.indexActivityModule[0].subTitle}}</span>
              <img :src="indexData.indexActivityModule[0].picUrl" alt="">
            </div>
            <div class="fight">
              <span>{{indexData.indexActivityModule[1].title}}</span>
              <span class="one">{{indexData.indexActivityModule[1].tag}}</span>
            </div>
          </div>
        </div>
    </div>

    <!-- 类目热销榜 -->
    <div class="hotCatainer" v-if="indexData.categoryHotSellModule">
        <div class="text">{{indexData.categoryHotSellModule.title}}</div>
        <div class="hotTop">
            <div class="hotList-top">
              <div class="hotList-top-item" :class="{active:index === 1}" v-for="(item, index) in hotSellListFirst" :key="index">
                  <div class="hotItem">
                     <span>{{item.categoryName}}</span>
                  </div>
                  <div class="hotItem-img">
                     <img :src="item.picUrl" alt="">
                  </div>
              </div>
            </div>
        </div>
        <div class="hotBottom">
            <div class="hotList-bottom-item" v-for="(item, index) in remainingHotSellList" :key="index">
                <div class="item">{{item.categoryName}}</div>
                <div class="item-img">
                    <img :src="item.picUrl" alt="">
                </div>
            </div>
        </div>
    
    
    </div> 
    <div class="line5"></div> 
    <!-- 限时购 -->
    <div class="specialDiscount" v-if="indexData.flashSaleModule">
        <div class="specialDiscountTitle">
          <div class="title-left">
            <span>限时购</span>
            <div class="dateNow">
              <div class="date">{{hou}}</div>
              <span>:</span>
              <div class="date">{{min}}</div>
              <span>:</span>
              <div class="date">{{sec}}</div>
            </div>
          </div>
          <div class="title-right">
            <span>更多</span>
            <span class="iconfont iconyou ico"></span>
          </div>
        </div>
        <div class="specialDiscountList">
          <div class="list-item" v-for="(item, index) in indexData.flashSaleModule.itemList" :key="index">
            <div class="item-img">
              <img :src="item.showPicUrl" alt="">
            </div>
            <div class="price">
              <span>￥{{item.activityPrice}}</span>
              <del>￥{{item.originPrice}}</del>
            </div>
          </div>
        </div>
    </div>
    <!-- 新品首发 -->
    <div class="newGoodsContainer">
           <div class="newGoodsTop">
             <span>新品首发</span>
             <div class="more">
               <span>更多</span>
               <i class="iconfont icon-right"></i>
             </div>
           </div>
           <div class="newGoodsBottom">
             <div class="newGoodsList">
               <li v-for="(newItem,index) in newItemListCount" :key="index">
                 <img :src="newItem.listPicUrl" alt="">
                 <div class="newGoodsText">{{newItem.name}}</div>
                 <span class="newGoodsPrice">￥{{newItem.retailPrice}}</span>
                 <span class="newGoodsT">{{newItem.itemTagList[0].name}}</span>
               </li>
             </div>
           </div>
    </div>
    <!-- 倒数第二个 -->
    <div class="replenishment">
           <ul class="replenishmentList">
             <li v-for="(replenishItem,index) in indexData.sceneLightShoppingGuideModule" :key="index">
               <span>{{replenishItem.styleItem.title}}</span>
               <span class="title">{{replenishItem.styleItem.desc}}</span>
               <div>
                 <img :src="replenishItem.styleItem.picUrlList[0]" alt="">
                 <img :src="replenishItem.styleItem.picUrlList[1]" alt="">
               </div>
             </li>
           </ul>
    </div> 
    <!-- 最底部 -->
    <div class="fotter">
           <div>
             <div class="footerT">
             <div class="leftApp div">
             <span>下载APP</span>
             
           </div>
            <div class="div RApp">电脑版</div>
           
           </div>
             <div class="footerText">
               <span>
               网易公司版权所有 © 1997-2020
               </span>
               <br/>
               <span>
               食品经营许可证：JY13301080111719
               </span>
             </div>
           </div>
    </div> 
</div>
</template>

<script type="text/ecmascript-6">
  import { mapState } from 'vuex'
  export default {
      data() {
        return {
          hou:0,
          min:0,
          sec:0,
        }
      },
      methods:{
        time(){
           if(this.indexData.flashSaleModule){
            let date = this.indexData.flashSaleModule.remainTime;
            let interval = setInterval(()=>{
                //new Date当前的时间戳，也可以换成自定义的时间戳
                if (date > 0) {
                    let time = date / 1000;
                    // 获取时、分、秒,毫秒
                    this.hou = parseInt((time % (60 * 60 * 24)) / 3600)<10?('0'+parseInt((time % (60 * 60 * 24)) / 3600)):parseInt((time % (60 * 60 * 24)) / 3600)
                    this.min = parseInt(((time % (60 * 60 * 24)) % 3600) / 60)<10?('0'+parseInt(((time % (60 * 60 * 24)) % 3600) / 60)):parseInt(((time % (60 * 60 * 24)) % 3600) / 60);
                    this.sec = parseInt(((time % (60 * 60 * 24)) % 3600) % 60)<10?('0'+parseInt(((time % (60 * 60 * 24)) % 3600) % 60)):parseInt(((time % (60 * 60 * 24)) % 3600) % 60);
                  } else {
                    //活动已结束，全部设置为'00'
                    // console.log("aaa")
                      this.hou="00",
                      this.min="00",
                      this.sec="00"
                  }
              
              date -= 1000
            
          },1000)
        }
      }
    },
      computed:{
          ...mapState({
               indexData:state=>state.indexData
          }),
          hotSellListFirst(){
            if(this.indexData.categoryHotSellModule){
              return this.indexData.categoryHotSellModule.categoryList.slice(0,2)
            }
          },
          remainingHotSellList(){
            if(this.indexData.categoryHotSellModule){
              return this.indexData.categoryHotSellModule.categoryList.filter((item,index)=>{
                  return index >1
              })
            } 
         },
          newItemListCount(){
          if(this.indexData.newItemList){
            return this.indexData.newItemList.filter((item,index)=>{
              return index < 6
            })
          }
        }
      },
  }
</script>

<style lang="stylus">
.exclusiveContainer
 width 750px
 height 588px
 padding-bottom 30px
 padding-top 20px 
 box-sizing border-box
 background #ededed
 .exclusiveTop
  width 750px
  height 90px
  background #ffffff
  color #333
  font-size 32px
  text-align center
  line-height 90px
  position relative
  .line 
   display block
   width 24px
   height 3px
   background #333
   position absolute
   top 0
   right 0
   left -220px
   bottom  0
   margin auto
  .line2
   left 220px
 .exclusiveBottom
  width 750px
  height 458px
  background #fff
  padding 0 30px
  box-sizing border-box
  .leftContainer
   width 343px
   height 434px
   background #f9e9cf
   float left
   span
    width 100%
    height 78px
    display block
    color #333
    font-size 32px
    padding 30px 0 0 30px
   img  
    width 258px
    height 257px
    display block
    margin 0 auto
  .rightContainer
   width 343px
   height 215px
   background #FBE2D3
   float right
   padding 20px 0 0 30px
   box-sizing border-box
   .welfare
    position relative
    span
     font-size 32px
     display block
     margin-bottom 10px
    .today
     font-size 24px
     color #7f7f7f
    img 
     width 200px
     height 200px
     display block
     position absolute
     left 120px
     top -10px
   .fight
    width 343px
    height 215px
    background #F9E9CF
    float right
    margin-top 123px
    padding 20px 0 0 30px
    box-sizing border-box
    span
     font-size 32px
     color #333
     display block
    .one
     width 120px
     height 32px
     background #cbb693
     color #ffffff
     font-size 22px
     text-align center
     line-height 32px
     border-radius 6px
     margin-top 5px
.hotCatainer
 height 710px
 background #fff
 .text
  height 100px
  line-height 100px
  font-size 32px
  color #333
  box-sizing border-box
  padding 0 30px
 .hotTop
  height 210px
  box-sizing border-box
  padding 0 20px 20px 30px
  .hotList-top
   display flex
   .hotList-top-item
    width 340px
    height 200px
    position relative
    margin-right 10px
    margin-bottom 10px
    background #F9F3E4
    border-radius 4px
    &.active
     background #EBEFF6
    .hotItem
     margin-top 66px
     font-size 28px
     padding-left 24px
     span 
      position relative
      &:after
        content ''
        display block
        position absolute
        left 0
        bottom -15px
        width 48px
        height 4px
        background #333
    .hotItem-img
     width 200px
     height 200px
     position absolute
     top 0
     right 0
     img 
      width 100%
      height 100%
  .hotbottom
        display flex
        flex-wrap wrap
        .hotList-bottom-item
          width 165px
          height 180px
          margin 0 10px 10px 0
          background #F5F5F5
          border-radius 4px
          .item
            margin-top 10px
            height 36px
            line-heigth 36px
            font-size 24px
            color #333
            text-align center
          .item-img
            width 120px
            height 120px
            margin-left 23px
            margin-top 2px
            img 
              width 100%
              height 100%
.line5
  height 20px
  width 100%
  background #eee
.specialDiscount
    height 700px
    background #eee
    margin 20px 0
    .specialDiscountTitle
      height 80px
      padding 0 30px
      display flex
      justify-content space-between
      align-items center
      background #fff
      .title-left
        display flex
        align-items center
        span
          font-size 32px
          color #333
        .dateNow
          margin-left 12px
          height 100%
          display flex
          align-items center
          .date
            width 36px
            height 36px
            background #333
            color #fff
            margin 0 10px
            font-size 24px
            border-radius 5px
            text-align center
            line-height 36px
          
      .title-right 
        font-size 28px
        .ico
          margin-left 8px
          font-size 24px
          color #aaa
    .specialDiscountList
      background #fff
      height 600px
      padding 0 10px 0 30px
      display flex
      flex-wrap wrap
      .list-item
        width 216px
        height 300px
        box-sizing border-box
        padding-bottom 30px
        margin-right 20px
        .item-img
          width 216px
          height 216px
          background #F5F5F5
          margin-bottom 12px
          img 
            width 100%
            height 100%
        .price
          padding-left 20px
          height 42px
          span
            font-size 28px
            color #DD1A21
            margin-right 12px
          del
            font-size 24px
            color #7F7F7F
 .hotBottom
  display flex
  flex-wrap wrap
  margin-left 30px
  .hotList-bottom-item
    width 165px
    height 180px
    margin 0 10px 10px 0
    background #F5F5F5
    border-radius 4px
   .item
    margin-top 10px
    height 36px
    line-heigth 36px
    font-size 24px
    color #333
    text-align center
   .item-img
      width 120px
      height 120px
      margin-left 23px
      margin-top 2px
      img 
       width 100%
       height 100%
.newGoodsContainer
 width 100%
 height 942px
 background #eee
 .newGoodsTop
  width 100%
  height 107px
  background #ffffff
  padding 0 30px
  box-sizing border-box
  line-height 100px
  span 
   font-size 32px
   overflow hidden
  .more
   display inline-block
   float right
   font-size 28px
 .newGoodsBottom
  width 750px
  height 820px
  background #fff
  padding-left 10px
  box-sizing border-box
  overflow hidden
  .newGoodsList
   width 740px
   height 820px
   padding-bottom 13px
   box-sizing border-box
   display flex
   flex-wrap wrap
   overflow hidden
   li
    margin-left 20px
    margin-bottom 20px
   img
    width 216px
    height 216px
    background #f5f5f5
   .newGoodsText
    font-size 24px
    color #333
    display block
    width 216px
    height 68px
    line-height 35px
    margin-top 10px
    overflow hidden
   .newGoodsPrice
    font-size 32px
    color #dd1a21
    display block
    margin-left -5px
    margin-top 10px
    margin-bottom 12px
   .newGoodsT
    height 30px
    border 1px solid #dd1a21
    font-size 16px
    line-height 30px
    border-radius 30px
    line-height 30px
    margin-top 10px
    padding 3px 5px
    color #dd1a21
.replenishment
 width 750px
 height 596px
 background #eee
 .replenishmentList
  width 100%
  height 576px
  background #fff
  padding 10px 30px
  box-sizing border-box
  li
   width 340px
   height 260px
   background #f5f5f5
   margin 4px 0 0 4px
   padding 20px 0 0 20px
   box-sizing border-box
   float left
   span
    color #333
    font-size 32px
    display block
    margin-left 10px
    margin-bottom 10px
   .title
    font-size 24px
    color #7f7f7f
   div
    display flex
    img
     width 150px
     height 150px
     margin-right 4px
.fotter
 padding-bottom 98px
div
 position relative
 .footerT
  width 750px
  height 244px
  background #333
  padding 54px 20px 28px
  box-sizing border-box
  position relative
  .div
   width 172px
   height 62px
   color #fff
   font-size 24px
   border 1px solid #666
   text-align center
   line-height 62px
   margin-bottom 36px
   margin-left 50px
  .RApp,.leftApp
   float left
  .leftApp
   margin-left 150px
 .footerText
  color #999
  display block
  text-align center
  position absolute
  bottom 30px
  left 168px
  line-height 30px
    



 
</style>
