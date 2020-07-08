<template>
     <ul class="lun_label">
             <li v-for="(item,index) in percentage()" :style='item' :key='index'></li>
     </ul>
</template>

<script>
export default {
          data(){
              return {
                number:0,
                stylelist:['width:0.3rem;background:#2B2FD4','','']
              }
          },
          props:{
              left :Number
          },
          methods:{
            percentage(){
             for(let i=0 ; i< this.stylelist.length ;i++){
                   if( -this.left / (this.width * (this.stylelist.length-1)) < (1/(this.stylelist.length-1))*(i+1) ) 
                    {   
                        this.number = i
                        i = this.stylelist.length
                    }
                }  
                 return  this.stylelist.map( (item,index) =>{
                 return item = index == this.number ? `width:0.23rem;background:#2B2FD4` : ''
                })
            //    return 
            }
          },
          mounted(){
              this.width = document.body.offsetWidth
          }
}
</script>

<style lang="stylus" scoped>
    .lun_label
      position  absolute
      left  0
      right  0
      bottom  0.05rem
      display  flex
      justify-content  center
      align-items  center
      margin  0 auto
      padding  0
      
    .lun_label li
     width  0.12rem
     height 0.04rem
     background  #ccc
     border-radius  0.02rem
     list-style  none
     margin  0 3px
     transition  all .2s 
</style>
