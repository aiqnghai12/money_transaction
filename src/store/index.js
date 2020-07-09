import Vue from 'vue'
import Vuex from 'vuex'
import personal from './personal' // 个人信息
import main from './index' // 个人信息
import table from './table' // 个人信息
Vue.use(Vuex);

export default new Vuex.Store({
    modules:{
        personal, // 个人信息
        main,
        table
    }
})