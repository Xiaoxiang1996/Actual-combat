<template>
  <section class="home">
     <Header />
     <ShopList />
     <Category/>
  </section>
     
</template>

<script type="text/ecmascript-6">
  import Header from '../../components/Header/Header'
  import ShopList from '../../components/ShopList/ShopList'
  import Category from '../../components/Category/Category'
  export default {
    components: {
       Header,
       ShopList,
       Category
    },
    mounted(){
      this.$store.dispatch('getSlideList')
      this.$store.dispatch('getIndexDataList')
    }
  }
</script>

<style lang="stylus">
  .home
   width 100%
   height 100%
</style>
