<template>
<div>
      <router-link class="go-back" to='search'>
        <p>搜索商品,共20259款好物</p>
      </router-link>
      <div class="sort">
          <!-- 左侧导航 -->
          <div class="l-sort">
            <div class="wrpper">
            <ul class="content">
              <li v-for="(item, index) in sortList.categoryL1List" :key="index">
                <span  :class="{L_bor:current===index}" @click="currIndex(index,item.id)">{{item.name}}</span>
                <span v-show="current===index" class="bord"></span>
              </li>
            </ul>
            </div>
          </div>
          <!-- 右测页面 -->
          <div class="r-sort">
            <rightSort :sortdata='sortdata' :Listid='Listid' />
          </div>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
import {mapState} from 'vuex'
import BScroll from 'better-scroll'
import rightSort from './right-sort'
  export default {
     components:{
       rightSort
     },
     data() {
      return {
        current:0,
        Listid:11,
      }
     },
     mounted(){
        this.$store.dispatch('getList')
        this.$store.dispatch('getData')
     },
     methods:{
      currIndex(index,id){
        this.current = index
        this.Listid = id
      },
     },
     computed:{
      ...mapState({
        sortList:state=>state.sortList,
        sortdata:state=>state.sortdata
      })
     },
     watch:{
      list(){
        this.$nextTick(()=>{
          new BScroll('.wrpper',{
          click:true,//使用better-scroll 会把我们的click禁用 
          scrollY:true,
        })
        })
      }
    }
  }
</script>

<style lang ="stylus">
.go-back
  width 700px
  height 50px
  line-height 50px
  text-align center
  box-sizing border-box
  text-align center
  display flex
  position relative
  top 15px
  left 25px
  background-color #F4F4F4
  &::before
    content ''
    width 80px
    height 30px
    // display inline-block
    position absolute
    top 50%
    left 80px
    transform translateY(-50%) 
    background url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-553dba3aff.png?imageView&type=webp) no-repeat 20px center;
    background-size 30px
    vertical-align: middle;
   p
    width 100%
    font-size 28px
.sort
  width 100vw
  height calc(100vh - 200px) 
  margin-top 30px
  border-top 1px solid black
  // background yellow
  overflow hidden
  .l-sort
    width 22vw
    height 100%
    float left 
    background #fff
    border 1px solid #bbb
  .wrpper
    width 100%
    height 100%
    .content
      width 100%
      height  calc(100vh - 250px)
      padding 40px 0
      li
        width 100%
        height 50px
        line-height 50px
        text-align center
        border-bottom 1px solid #eee 
        margin 35px 0
        position relative
        span
          color #333
          font-size 28px
          // box-sizing border-box
          // margin-left 10px

        .L_bor
          color red
          font-size 28px
          // padding-left 15px
          box-sizing border-box
          // border-left 3px solid red
        .bord
          width 5px
          height 40px
          background red
          position absolute
          top 0
          left 0
  .r-sort
    width 535px
    height 100%
    margin auto
    // margin  0 10  0px
    margin-left 193px
    box-sizing border-box
 
</style>
