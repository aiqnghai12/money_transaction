<template>
    <div class="footer">
        <ul>
            <li v-for=' item in iconlist' :key='item.id'>
                <router-link :to='item.path'>
               <!-- <van-icon :name="item.name" size="3rem" /> -->
                <van-icon :name="item.name" size="0.3rem"/>
                <p>{{item.msg}}</p>
                <div class="location"></div>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){return{
          iconlist:[{id:'1',name:'wap-home-o',msg:'首页',path:'/index'},
          {id:'2',name:'balance-list-o',msg:'订单',path:'/order'},
          {id:'3',name:'user-o',msg:'我的',path:'/mine'}],
    }}
}
</script>

<style lang="stylus" scoped>
   p,ul
    padding 0
    margin 0
   .footer
     height 0.49rem
     font-size 0.12rem
     ul
      height 100%
      display flex
      justify-content space-around
      align-items center
      list-style none
      li
       display flex
       flex-direction column
       align-items center
       text-align center
       font-size 0.10rem
       position relative
       a
        color #888
        
       .active
         .location
          background blue
          border-radius 50%
          height 0.17rem
          width 0.17rem
          position absolute
          right 0
          top 0.1rem
          opacity 0.6

</style>
