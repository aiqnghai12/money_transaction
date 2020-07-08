import Vue from 'vue'
import Vuex from 'vuex'
import personal from './personal' // 个人信息
Vue.use(Vuex);

export default new Vuex.Store({
    modules:{
        personal // 个人信息
    }
})