<template>
    <div class="goodsli">
        <div class="shop_img"><img :src="'img/'+pic" alt="">
        </div>
         <p class="shop_name">{{shop_name}}</p>
         <div class="shop_msg">
             <p>{{oldorder}} <span>成交单</span> </p>
             <p>{{price}} <span>CNY</span> </p>
         </div>
    </div>
</template>

<script>
export default {
      data(){return{ // 买币
            id: 1,
            price: 561.35,
            shop_name: 'v{货币寂静[87>',
            oldorder: 64671,
            oldorder_: 2,
            number: 550,
            max_number: 2342,
            min_number: 711,
            currency_type: 1,
            pic:'Bitfinex.webp'
      }}
}
</script>

<style lang="stylus" scoped>
    .goodsli
     width 3.37rem
     height 0.67rem
     display flex
     background #fff
     justify-content space-between
     align-items center
     .shop_img
      width 0.5rem
      height 0.5rem
      border-radius 50%
      overflow hidden
      margin-left 0.23rem
      display flex
      justify-content center
      align-items center
      img 
       width 0.7rem
       height 0.7rem
    .shop_name
      width 1.3rem
    
    .shop_msg
      width 1.1rem
      display flex
      justify-content space-between
      align-items center
      margin-right 0.1rem
      p
       display flex
       width 0.5rem
       text-align right
       flex-direction column
       color #3C42F0
       span 
        font-size 0.12rem
        color #4D53F1
</style>
