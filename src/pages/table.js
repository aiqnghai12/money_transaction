import Vue from 'vue'
import table from 'com/table'
// import router from './router'
// import store from './store'
import '@utilt/vueTouch.js'

Vue.config.productionTip = false

new Vue({
  render: h => h(table),
}).$mount('#currency')


