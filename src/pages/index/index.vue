<template>
        <div class="main container">
       <mainheader-component is='mainheader'></mainheader-component>
       <lun-component is="lun1"></lun-component>
             <router-view/>
       <div class="news">
               <p>新闻资讯</p>
               <div class="news_divs">
               <div>
                      <a href=""><img src="img/bannner_xinwen_1.webp" alt="">
                      <p>区块链不是什么？区块链是什么</p>
                      </a>
               </div>
               <div>
                      <a href=""> <img src="img/bannner_xinwen_2.webp" alt="">
                      <p>关于抄底，你们知道多少？</p>
                      </a>
               </div>
               </div>
       </div>
        
        <div class="buy buyselldiv">
             <div class="buysell_text"> <p>买币</p>  <router-link to='/index/buy' exact> <span>更多</span>  </router-link></div>
              <div class="goodslist">
                    
              </div>
        </div>
         <div class="sell buyselldiv">
      <div class="buysell_text"> <p>卖币</p>  <router-link to='/index/sell' exact> <span>更多</span>  </router-link> </div>
       <div class="goodslist">
            <goodsli  />
       </div>
        </div>

       </div>
</template>

<script>
import lun1 from '@index/Lun/lun1'
import goodsli from '@index/goodsli'
import mainheader from '@index/main/mainheader'

export default {
components:{
        lun1,
        mainheader,
        goodsli
}
}
</script>

<style lang="stylus" scoped>
   .main
    font-size 0.16rem
    .news
     margin 0 auto
     width 3.35rem
     padding-top 0.1rem
     p 
      font-size 0.16rem
      margin-bottom 0.1rem
     .news_divs 
      display flex
      margin-bottom 0.1rem
      justify-content space-between
      a 
       display flex
       flex-direction column
       align-items center
       justify-content center
       color #282828
      p 
       width 1.44rem
       font-size 0.12rem
       height 0.32rem
      img 
       width 1.6rem
       height 0.94rem
       margin-bottom 0.1rem
   
   .buyselldiv
    margin 0 auto
    width  3.35rem
    margin-bottom 0.2rem
     
   .buysell_text
    display flex
    justify-content space-between
    align-items center
    span  
     font-size 0.12rem
     color #999

</style>

