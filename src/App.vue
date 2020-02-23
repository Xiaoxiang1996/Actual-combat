<template>
  <div>
     <router-view></router-view>
     <FooterGuide v-show="$route.meta.isShowFooter"/>
  </div>
</template>

<script type="text/ecmascript-6">
  import FooterGuide from './components/FooterGuide/FooterGuide'
  export default {
    name :'app',
    components: {
      FooterGuide
    },
  }
</script>

<style >

 
</style>

