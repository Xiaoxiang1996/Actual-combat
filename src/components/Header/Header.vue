<template>
  <div>
      <div id="headerContainer">
          <img src="../../common/images/logo.png" alt="">
          <div class="searchInput">
              <i class="iconfont icon-soushuo"></i>
              <input class="input" type="text" placeholder="搜索商品, 共20261款好物" placeholder-class="placeholder">
          </div>
          <div class="login">登录</div>
      </div>
      <div class="navContainer">
       <ul class="navList">
           <li>推荐</li>
           <li>居家生活</li>
           <li>服饰鞋包</li>
           <li>美食酒水</li>
           <li>个护清洁</li>
           <li>母婴亲子</li>
           <li>运动旅行</li>
           <li>数码家电</li>
           <li>全球特色</li>
      </ul>
     </div>
     <i class="iconfont icon-icon-arrow-down"></i>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
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
        .icon-sousuo
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
    position relative
    height 60px
    line-height 60px
    display flex
    overflow hidden
    padding 0 30px
    .navList
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
</style>
