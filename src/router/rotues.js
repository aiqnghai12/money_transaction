
const underfind404 = () => import(/*webpackChunckName:group-foo*/'@pages/404')
const order = () => import(/*webpackChunckName:group-foo*/'@pages/order')
const mine = () => import(/*webpackChunckName:group-foo*/'@pages/mine')
const main = () => import(/*webpackChunckName:group-foo*/'@pages/index')
const mainbuy =  () => import(/*webpackChunckName:group-foo*/'@index/buysell/buy')
const mainsell =  () => import(/*webpackChunckName:group-foo*/'@index/buysell/sell')

export default {routes: [
    {
      path: '/index',
      component: main
    },
    {
        path:'/order',
        component: order
    },
    {
        path:'/mine',
        component: mine
    },
    {
        path: '/index/buy',
        component: mainbuy
    },
      {
        path: '/index/sell',
        component: mainsell
      },
      {
        path:'*',
        component: underfind404,
        name:'notfound',
        meta:{
            title:'404-页面丢失'
        }
    }
  ]
}