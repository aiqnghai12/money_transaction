import Vue from 'vue'
import Details from 'com/Details.vue'
// import router from './router'
// import store from './store'
import '@utilt/vueTouch.js'

Vue.config.productionTip = false

new Vue({
  render: h => h(Details),
}).$mount('#details')


