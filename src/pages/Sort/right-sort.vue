<template>
  <div>
    <div class="warper">
        <div class="content">
          <img src="https://yanxuan.nosdn.127.net/868844d3288f130c1aa808312dbbd1d8.png?quality=75&type=webp&imageView&thumbnail=0x196" alt="">
          <div class="list">
              <ul v-if="Sortdata">
                   <li v-for="(item, index) in Sortdata.categoryList?Sortdata.categoryList:Sortdata.subCateList" :key="index">
                       <div class="image">
                            <img :src="item.wapBannerUrl" alt="">
                       </div>
                       <span class="text">{{item.name}}</span>
                  </li> 
              </ul>
          </div>
        </div>
    </div> 
  </div>
</template>

<script type="text/ecmascript-6">
import BScroll from 'better-scroll'
  export default {
     props:['sortdata','Listid'],
     data() {
          return {
              sortId:0,
              result:''
          }
      },
      mounted(){
         this.sortId =  this.Listid
      },
      computed:{
          Sortdata(){
                let {sortdata,result,Listid} = this
                // console.log(sortdata,Listid);
                if(sortdata){
                   result = sortdata.find((item)=>{
                   return  item.id === Listid
                 })
                }
                return result
          }  
      },
      watch:{
       sortdata(){
       this.$nextTick(()=>{
                new BScroll('.warper',{
                click:true,
                scrollY:true,
            })
        })  
       },
    },
    Listid(value){
        this.$nextTick(()=>{
                new BScroll('.warper',{
                click:true,
                scrollY:true,
            })
        })
          this.sortId = value;
          this.result = this.sortdata.find((item)=>{
              return  item.id === this.Listid
        })    
    }
  }
</script>

<style lang="stylus">
.warper
    width 100%
    height calc(100vh - 350px)
    .content
        width 100%
        margin 30px 0
    img 
        width 100%
        height 200px
    .list
        width 100%
        height 100%
        overflow hidden   
        ul
         min-height calc(70vh - 150px)
         display flex
         flex-wrap wrap
         li
          width 144px
          text-align center 
          margin 15px
          box-sizing border-box
        img
            width 144px
            height 144px
            display block
            vertical-align middle
            display inline-block
        .text
            text-align center
 
</style>
