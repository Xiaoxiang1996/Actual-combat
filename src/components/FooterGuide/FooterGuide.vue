/* eslint-disable no-irregular-whitespace */
<template>
    <div id="footerGuideContainer">
    <div class="guideItem" :class="{active: $route.path === '/home'}" @click="goPath('/home')">
      <span>
        <i class="iconfont icon-tab-sy"></i>
      </span>
      <span>首页</span>
    </div>
    <div class="guideItem" :class="{active: $route.path === '/sort'}" @click="goPath('/sort')">
      <span>
        <i class="iconfont icon-fenlei-0"></i>
      </span>
      <span>分类</span>

    </div>
    <div class="guideItem" :class="{active: $route.path === '/worth'}" @click="goPath('/worth')">
       <span>
        <i class="iconfont icon-shimozhidemai"></i>
      </span>
      <span>值得买</span>

    </div>
    <div class="guideItem" :class="{active: $route.path === '/shop'}" @click="goPath('/shop')">
      <span>
        <i class="iconfont icon-gouwuche"></i>
      </span>
      <span>购物车</span>
    </div>
    <div class="guideItem" :class="{active: $route.path === '/personal'}" @click="goPath('/personal')">
      <span>
        <i class="iconfont icon-geren"></i>
      </span>
      <span>个人</span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    methods:{
      goPath(path){
        this.$router.replace(path)
      }
    }
  }
</script>

<style lang="stylus">
@import "../../common/stylus/mixins.styl"
  #footerGuideContainer
    position fixed
    width 100%
    height 98px
    border-top 1px solid #eee
    left 0
    bottom 0
    box-sizing border-box
    display flex
    background #fff
    .guideItem
      width 20%
      height 100%
      text-align center
      margin-top 20px
      display flex
      flex-direction column
      &.active
        color $green
        span:first-child
        margin 10px 0 
        i
          font-size 42px
</style>
