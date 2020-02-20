<template>
    <!-- 分类列表 -->
    <div id="shopList">
      <ul v-if="indexData" class="shopItem">
        <li v-for="(list,index) in indexData.kingKongList" :key="index">
          <img :src="list.picUrl" alt="">
          <span>{{list.text}}</span>
        </li>
      </ul>
    </div>
</template>

<script type="text/ecmascript-6">
import { mapState } from 'vuex'
  export default {
    mounted(){
      this.$store.dispatch('getIndexDataList')
    },
    computed:{
      ...mapState({
        indexData :  state=>state.indexData.kingKongModule
      })
    }
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
 
</style>
