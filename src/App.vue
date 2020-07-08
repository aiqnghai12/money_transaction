<template>
     <div class="App" onload='roterindex'>
      <router-view/>
      <footer-componet is='indexfooter'></footer-componet>
     </div>
</template>

<script>
import indexfooter from 'com/index/footer'

export default {
  components:{
    indexfooter
  },
  beforeCreate(){
   this.$router.push({  //核心语句
        path:'/index',   //跳转的路径
    })
  }
}
</script>


<style lang="stylus">
    @import 'assets/stylus/fister.css'
    
    html,body,.App
     height 100%;
     background #fcfcfc
     margin 0
     padding 0

    .App
      display  flex
      flex-direction column
</style>
