<template>
    <div class="header">
          <p>{{msg[status]}}</p>
          <div>
              <van-icon name="arrow-left" />
          </div>
    </div>
</template>

<script>
export default {
    data(){return{
        status:1,
        msg:['买币','卖币']
    }}
}
</script>

<style lang="stylus" scoped>

   
</style>
