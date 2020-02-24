<template>
  <div id="root">
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
#root{
  width: 750px;
  overflow: hidden
}
 
</style>

