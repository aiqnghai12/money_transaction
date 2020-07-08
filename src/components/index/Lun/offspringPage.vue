<template>
    <div class="offspring_page" v-panstart='panstart' v-panmove='panmove' v-panend='panend'>
      <div class="lun_li" v-for='item in  data' :key='item.id' >
        <lunmsg-component is="lunmsg" :item='item'></lunmsg-component>
      </div>
    </div>
</template>

<script>
import lunmsg from './lun_msg';

export default {
data () {
         return {      
              data:[{
           id:'1',
           title:'美原油',
           msg:'价格大幅度上涨，65MA即将进入超卖区',
           closing:'78.27'
                  },
                  {
           id:'2',
           title:'布伦特原油',
           msg:'价格大幅度上涨，65MA即将进入超卖区',
           closing:'50'
                  },
                  {
           id:'3',
           title:'欧元美元',
           msg:'价格大幅度上涨，65MA即将进入超卖区',
           closing:'66.23' 
                  }],
                   left:0,
                   clientX:0,
                   movebool:0
               } },
               mounted(){
                   this.width = document.body.offsetWidth
               },
               methods:{
                panstart(e){
                  this.clientX = e.center.x;
                  e.target.parentNode.style.transition = 'none';
              e.preventDefault()
            }
            , panmove(e){
                 this.newleft = this.left + e.center.x - this.clientX
                    this.target = e.target.parentNode;
                    if(this.newleft>=0){
                        this.newleft = 0;
                    }else if(this.newleft <=  - this.width * 2){
                        this.newleft =  - this.width * 2
                    }
                     this.target.style.left = this.newleft + "px"
                     this.$emit('give',this.newleft)
               },
               panend(){
                 this.target.style.transition =' all .3s'
                    for(let i = 0;i<3 ;i++){
                        if(this.newleft-this.width/2>=-this.width*(i+1)){
                       this.target.style.left = -this.width*i +"px"
                       this.left = -this.width*i;
                        i=3
                        }
                    }

                  this.$emit('give',this.left);
               }
               },
               components:{
                   lunmsg
               }

}
</script>

 <style lang="stylus" scoped>
    .offspring_page
      display flex
      width 300%
      height 1.8rem
      position absolute
      top 0 
      left  0
      z-index 200
    .lun_li
      flex  1
      height  100%
      font-size  30px
      text-align  center
      float  left
      display flex
      justify-content center
      align-items center
      background rgba(0,0,0,0)
      position relative
 </style>
 
