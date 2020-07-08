<template>
    <div class="lunmsg">
        <div class="lunmsg_div">
        <p>{{item.title}}</p>
        <span>{{item.msg}}</span>
        <h3>+{{item.closing}}%</h3>
        <h6>成交率 :</h6>
        </div>
        <div class="lunmsg_image">
            <div class="image_"></div>
            <div class="lunmsg_image_div">
           <p class="buy">用户买涨</p>
           <p class="sell">用户卖涨</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
   props:{
       item:Object
   }
}
</script>

<style lang="stylus" scoped>
    .lunmsg
     width 3.15rem
     height 1.46rem
     position relative
     z-index -1
     box-shadow 0.02rem  0.02rem 0.05rem 0.03rem #f1f1f1
     border-radius 0.1rem
     text-align left
     .lunmsg_div
      margin-left 0.22rem
      margin-top 0.12rem 
      p
       font-size 0.16rem
       font-weight 550
      span 
       font-size 0.1rem
       font-weight 300
      h3
        font-size 0.21rem
        margin-top 0.12rem
        color #FF5269
      h6 
        font-size 0.1rem
        font-weight 300
    
    .lunmsg_image
     position absolute
     right 0.2rem
     bottom 0.14rem
     width 1rem
     height 1.3rem
     display flex
     flex-direction column 
     
    .lunmsg_image_div
       display flex
       justify-content space-between
       font-size 0.09rem
        
       .buy
        color #F83852
        background #FFCDD4
        padding 0.02rem 0.05rem
        border-radius 0.02rem

       .sell
         color #2174E3
         background #B1D2FF
         padding 0.02rem 0.05rem
         border-radius 0.02rem
    .image_
       flex 1
</style>

