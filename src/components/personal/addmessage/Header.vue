<template>
        <div class="header">
            <!-- 左图片  -->
        <img class="icon imgleft"  :src='icons[0] | backgroundUrl' :value='hrefs[0]' v-tap='addhref' >
        <!-- 标题 -->
         <div class="title">{{title}}</div>
         <img class="icon imgright"  :src='icons[1] | backgroundUrl' @click='addhref(hrefs[1])' >   右图片
        </div>
</template>

<script>
export default {
    data(){return{
                hrefs:['https://www.baidu.com'], //  
                icons:['jiantou3.png']
            }},
            props:{
                title:String
            },
            methods:{
             addhref(e){
                 window.location.href =e.target.getAttribute('value')
             }
            },
            filters:{
                    //    图片路径添加
       'backgroundUrl':(img)=>{
       if(!img)
       return ''
       return '../img/'+ img ;
       }
            }
}
</script>

<style>
body,html,img,ul,li,p,span{margin: 0;padding: 0;font-size: 0.18rem;list-style:none;
    font-family: 'PingFang SC';}
    body{background: #f5f5f5;}
.header{width: 100%;height: 0.45rem;background: #fff;
display: flex;justify-content: center;align-items: center;}
.header .icon{height: 0.21rem;width: 0.12rem;
 position: absolute;}
 .imgleft{left: 0.24rem;}
 .imgleft{right: 0.24rem;}
 .header .title{font-size: 0.17rem;line-height: 0.2rem;}
</style>
