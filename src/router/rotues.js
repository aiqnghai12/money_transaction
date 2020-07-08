
const underfind404 = () => import(/*webpackChunckName:group-foo*/'com/404')
const indexorder = () => import(/*webpackChunckName:group-foo*/'@index/order')
const indexmine = () => import(/*webpackChunckName:group-foo*/'@index/mine')
const indexmain = () => import(/*webpackChunckName:group-foo*/'@index/main')
const mainbuy =  () => import(/*webpackChunckName:group-foo*/'@index/buysell/buy')
const mainsell =  () => import(/*webpackChunckName:group-foo*/'@index/buysell/sell')

export default {routes: [
    {
      path: '/index',
      component: indexmain
    },
    {
        path:'/order',
        component: indexorder
    },
    {
        path:'/mine',
        component: indexmine
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