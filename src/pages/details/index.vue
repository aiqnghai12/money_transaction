<template>
     <div class="details">
    <div class="header">
        <a class="minimg mining-1" :href="baidu"></a> <p>{{webName}}</p>
    </div>
    <!-- 身 -->
    <div class="main">
         <div class="back">
           <div class="bg">
               <div id="goods_message">
                <div id="Articledata">
                    <div id="smilter"></div>
                    <div class="minborder"></div>
                    <div class="minborder minborder2"></div>
                   </div>
                <div class="goods_one" :value='number'>商品成单率</div>
                <div class="goods_data">
                    <img src="img/qianbao.png" alt="">
                    <p>{{unit}}</p>
                    <h4>$39,612</h4>
                </div>
                <div class="data_percentage">
                    <p>0%</p>
                    <p>100%</p>
                </div>
                <p class="goods_unit">{{commodityUnit}}</p>
               </div>
           </div>
         </div>
         <div class="number_message">
            <li>
                <div class="number"><p>总数量</p><p>{{allNumber}}</p></div>
                <div class="price"><p>价格</p><p>{{price}} CNY</p></div>
            </li>
            <li>
                <p>温馨提示</p>
                <div class="message_text">
                    <p>1.订单有效期为20分钟，请您及时在有效期内付款并点击「标记付款已完成」按钮，我才可以释放数字币给您。</p>
                    <p>2.如果您无法在20分钟内完成付款，请尽早取消。</p>
                    <p>3.开始交易后数字币由系统锁定托管，请安心下单。</p>
                </div>
            </li>
            <li>
                <div class="purchase"><p>购买金额</p> <div class="purchase_number"><span>最大可买入{{maxBuyPrice}}</span><p>CNY</p></div></div>
                <div class="purchase"><p>购买数量</p> <div class="purchase_number"><span>最大可买入{{maxBuyNumber}}</span><p>USDT</p></div></div>
                <div class="purchase"><p>选择支付方式</p> <div class="purchase_number Method_payment"> <h6>银行卡、支付宝</h6> <span class="jiantou4364"></span> </div></div>
            </li>
         </div>
    </div>
    <!-- 尾 -->
    <div class="footer">
        <p>立即购买</p>
    </div>
     </div>
</template>

<script>  
    import Cycle from '@utilt/ceshi.js'
 
 export default {
    data(){return{
                  webName:"商品详情",
                 unit:'布伦特原油',
                 commodityUnit:'USDT',
                 allNumber:'2530.2362',
                 price:'6.89',
                 maxBuyPrice:'15152.78',
                 maxBuyNumber:'2152.2378',
                 baidu:'https://www.baidu.com',
                 number:100,
                 pro:0
    }},
    mounted(){
       this.length = 124 
       this.opts1 = {
           id: "smilter",
           width: "258",
           height: "258",
           percent: 0, //  64  100%
           border: "10",
           bgColor: "rgba(0,0,0,0)",
           barColor: "#3C42F0"
       }
      this.cycle =  new Cycle(this.opts1).init()
    },
    updated(){
      let i = this.pro-this.number
      const timer = setInterval(()=>{
         if(this.number==0)
         document.querySelector('.minborder2').style.display = 'none'
         else
         document.querySelector('.minborder2').style.display = 'block'
         i<=0 ? i++ : i--
         if(i===0){
           i =0 
         clearInterval(timer)
         this.pro = this.number
       }
        this.cycle.init(this.number+i)
        document.querySelector('.minborder2').style.top =167 - Math.sin(2*Math.PI / 360*((this.number+i)*2.27-23))*this.length+"px"
        document.querySelector('.minborder2').style.left =10+this.length - Math.cos(2*Math.PI / 360*((this.number+i)*2.27-23))*this.length+"px"
     },16)
    }
 }

 



</script>


<style>

   /*   1pt = 2.6px 1px = 0.01rem 1pt = 0.026rem;  */
   html,body,img,p,h1,h2,h3,h4,h5,h6{margin: 0;padding: 0;}
   html,body{height: 100%;}
   .details{height: 100%;display: flex;flex-direction: column;justify-content: space-between;}
   a{text-decoration: solid}
   li{list-style: none;}
   body{background: #f9f9f9;font-size: 0.16rem;} 
   .header{background: #3C42F0;width: 100%;height: 0.44rem;color: #fff;
   line-height: 0.22rem; position: relative;display: flex;
   font-size: 0.18rem;justify-content: center;align-items: center;}   
   .bg{
       background: #3C42F0;height:4.33rem;width:4.03rem;position: absolute;
       top: -1rem;display: flex;justify-content: center;
       border-bottom-left-radius: 50%;border-bottom-right-radius: 50%;
   }
   .back{overflow: hidden;position: relative;height:3.7rem;width: 100%;z-index: -2;
   display: flex;justify-content: center;}
   .main{position: relative;flex: 1; overflow-y: scroll;
   margin: -0.28rem 0;}
   .minimg{background: no-repeat;background-position: center center;}
   .mining-1{
     background-image: url('/img/jiantou.png');
     position: absolute;left: 0.12rem;
   width: 0.1rem;height: 0.15rem;display: inline-block;background-size: cover;}
   #goods_message{ width:3.2rem; height:3.06rem;background: #fff;position: relative;
   top: 1.5rem;border-radius: 0.13rem;box-shadow: 2px 5px 15px 3px #eee}
   .number_message{width: 3.31rem;height: 550px;
  margin: 5px auto;}
  .number_message > li{width: 100%;background: #fff;margin-bottom: 0.15rem;
   list-style: none;border-radius: 0.09rem;box-shadow: 1px 4px 10px 1px #f3f3f3}
  .number_message > li:nth-child(1){
     font-size: 0.15rem;
     display: flex;align-items: center;justify-content: space-between;
  }
  .number_message > li:nth-child(1) > div{width:48%;padding: 0.1rem 0;
      text-align: center;line-height: 0.13rem;}
  .number_message .number p:nth-child(1),
  .number_message .price p:nth-child(1){color: #888;font-weight: 200;
  height: 0.13rem;margin: 0;}
  .number_message .number p:nth-child(2),
  .number_message .price p:nth-child(2){width: 100%;
      margin: 0.1rem 0;
      word-wrap:break-word; height: 0.1rem;line-height: 0.14rem;
      color: #3C42F0;font-weight: 700; font-size: 0.17rem}
  .number_message > li:nth-child(2){font-size: 0.12rem;box-sizing: border-box;
  padding:0.15rem;}
  .number_message > li:nth-child(2) > p:nth-child(1){font-size: 0.16rem;
  margin: 0;font-weight: 600;}
  .number_message .message_text p{margin: 0.06rem 0;color: #666;font-weight: 200;}
  .number_message > li:nth-child(3) {height: 1.48rem;margin-bottom: 0.6rem;}
  .purchase{height: 0.495rem;display: flex;justify-content: space-between;
  align-items: center;font-weight: 200;}
  .purchase p:nth-child(1){text-indent: 0.16rem;}
  .purchase .purchase_number{display: flex;align-items: center;
  font-size: 0.12rem;}
  .purchase .purchase_number p{font-size: 0.16rem;
  font-weight: 600;margin:0 0.16rem;}
  .jiantou4364{
    background: no-repeat url('/img/4364.png');
background-size: cover;width: 0.06rem;height: 0.1rem;display: block;}
.purchase .Method_payment h6{color:#3C42F0;
font-size: 0.12rem;font-weight: 200;} 
.purchase .Method_payment span{margin:0 0.16rem;}

.footer{background: #3C42F0;height: 0.52rem; width: 100%;
justify-content: center;align-items: center;display: flex;
color: #fff;font-weight: 600; font-size: 0.18rem;
z-index:5555;
   }


#Articledata{
  background: no-repeat url('/img/shuju_beijingshe.png');
  position: absolute;
width: 280px;height: 280px;margin: 0 auto;bottom: 1.2rem;left: 0;right: 0;
transform: scale(2.6);
background-position: center center;}
#smilter{width: 280px;height: 280px;position: absolute;transform: rotate(-113deg); 
top: 18px;left: 5px;}
/* transform: rotate(-110deg); */.minborder{width: 10px;height: 10px;background: #3C42F0;
border-radius: 50%;position: absolute;
top: 217px;left: 20.5px;}

.goods_one{position: absolute;top: 0.1rem;left: 0.1rem;
font-size: 0.13rem;}
.data_percentage{position: absolute;left: 0;right: 0;margin: 0 auto;
bottom: 0.6rem;display: flex;width: 2.4rem;justify-content: space-between;}
.goods_unit{position: absolute;left: 0;right: 0;margin: 0 auto;
bottom: 0.2rem;font-size: 0.16rem;color: #3C42F0;text-align: center;}
.goods_data{position: absolute;left: 0;right: 0;margin: 0 auto;
top: 1rem;display: flex;flex-direction: column;justify-content: center;
align-items: center;}
.goods_data img{width: 0.31rem;height: 0.28rem;}
.goods_data p{padding: 0.03rem;font-weight: 200;}
.goods_data h4{font-size: 0.3rem;color: #3C42F0;font-weight: 200;}

</style>
