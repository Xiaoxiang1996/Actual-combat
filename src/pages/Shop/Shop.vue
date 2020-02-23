<template>
  <div>
    <div class="header">
      <p class="shop">购物车</p>
      <p class="money">领券</p>
    </div>
    <div class="details">
      <ul>
        <li>⚪30天无忧退货</li>
        <li>⚪48小时快速退款</li>
        <li>⚪满88免邮费</li>
      </ul>
    </div>
    <div class="bot">
      <div class="logo"></div>
     <router-link to="/my" class='btn'>登陆</router-link>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="stylus">
.header
  height 80px
  line-height 80px
  background #fff
  padding 0 60px
  display flex
  font-size 35px
  justify-content space-between
  .money
    color red
.details
  height 70px
  background #eee
  padding 10px
  box-sizing border-box
  ul
    display flex
    li
      margin 20px 30px
.bot
  height 1100px
  background #eee      
  .logo
    width 300px
    height 300px
    position absolute
    left 50%
    bottom 50%
    transform translate(-50%,50%)
    background url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-d6193bd6e4.png?imageView&type=webp) no-repeat 0 0
    background-size cover
  .btn
    width 500px
    height 100px
    display block
    position relative
    top 60%
    left 50%
    transform translate(-50%)
    line-height 100px
    text-align center
    font-size 40px
    color white


    background red  
 
</style>
