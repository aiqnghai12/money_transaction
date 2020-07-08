<template>
      <div class="busell">
            <el-component is="header12"></el-component>
             <router-view/>
      </div>
</template>

<script>
import header12 from '@index/buysell/header'

export default {
   components:{
       header12
   }
}
</script>

<style lang="stylus" scoped>
  .busell
   flex 1
   overflow hidden
</style>
