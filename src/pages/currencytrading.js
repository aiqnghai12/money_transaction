import Vue from 'vue'
import currencytrading from 'com/currencytrading'
// import router from './router'
import store from '@/store'
import '@utilt/vueTouch.js'

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(currencytrading),
}).$mount('#currencytrading')


