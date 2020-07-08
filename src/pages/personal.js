import Vue from 'vue'
import personal from 'com/personal'
// import router from './router'
import store from '@/store'
import '@utilt/vueTouch.js'
Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(personal),
}).$mount('#personal')


