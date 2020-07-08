import Vue from 'vue'
import Router from 'vue-router'
import rotuesindex from 'router/rotues'

Vue.use(Router)

const router =  new Router({
    mode:'history',  // 表示路由模式,三种 hash[#dd] history[/home] abstruct[node]
    routes: rotuesindex.routes,
    linkActiveClass: 'active'
})

router.beforeEach((to, from, next) => {
    let role = 1
    if(!role && to.path !== '/index'){
        next('/index');
    }else if(to.meta.permission){
        // 如果是管理员权限则可进入，这里只是简单的模拟管理员权限而已
        role === 'admin' ? next() : next('/403');
    }else{
        // 简单的判断IE10及以下不进入富文本编辑器，该组件不兼容
        if(navigator.userAgent.indexOf('MSIE') > -1 && to.path === '/editor'){
            Vue.prototype.$alert('vue-quill-editor组件不兼容IE10及以下浏览器，请使用更高版本的浏览器查看', '浏览器不兼容通知', {
                confirmButtonText: '确定'
            });
        }else{
            next();
        }
    }
})


export default router