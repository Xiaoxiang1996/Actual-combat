import Vue from 'vue'
import 'lib-flexible/flexible'
import App from './App.vue'
import router from './router/index'
import store from './store'
import * as API from  './api/index'
import './veeValidate/index'
Vue.prototype.$API = API

Vue.config.productionTip = false

import 'swiper/css/swiper.min.css'
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
