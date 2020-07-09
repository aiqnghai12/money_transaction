import Vue from 'vue'
import App from './App.vue'
import '@utilt'
import store from 'store'
import  router from '@router'
import '@utilt/vueTouch.js'

Vue.config.productionTip = false
new Vue({
  store,    // 注入store  组件会得到$store 属性
  router,
  render: h => h(App),
}).$mount('#app')


