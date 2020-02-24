import Vue from 'vue'
import 'lib-flexible/flexible'
import App from './App.vue'
import router from './router/index'
import store from './store'
import * as API from  './api/index'
import './veeValidate/index'
import waterfall from 'vue-waterfall2'
Vue.prototype.$API = API

Vue.config.productionTip = false
Vue.use(waterfall)
import 'swiper/css/swiper.min.css'
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
