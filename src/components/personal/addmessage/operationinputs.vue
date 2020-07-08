    <!-- msg='msg' title="title" type='type' left='left' -->
    <template>
            <div class="operation-inputs">
                <el-component is='operationtext' v-for='item in inputsList[nextindex]' :key='item.id' 
                 :item = 'item'   @phoneToken='phoneToken'
                  :inputdata='inputdata'
                  @give='changedata'></el-component>
                <div :class="['operation-button',{'checked':bool}]"  v-tap='conf'>{{buttonmsg}}</div>
            </div>
    </template>
    <script>
    import {mapActions} from 'vuex'   // 分块 使用的两个方法
    import Vue from 'vue'
    const vue = new Vue()
    import operationtext from './operationtext'
    export default {
            props:{
                webindex:Number,
                inputs:Array,
                inputsList:Array,
                inputtitleList:Array,
                dataTypelist:Array
            },
           data(){return{   //  left 标签 在左 0 或 右 1 msg 提示信息   title 输入信息  token 是否需要验证码  denger 警告信息   top 是否向上有间居
              nextindex:0,
              buttonmsg:"下一步",
               inputdata:{
              tokemsg:'获取验证码',
              imVue:vue,
              animainbool:0
              },
              data:{postdata:0},  // postdata 数据   会传输到 store中, 如果 在 store中获取到postdata 为1 则表示允许发送数据 否则只允许 保存数据 负责是下一步 还是 完成
              bool:1 //标记  全部输入 指定的 才会进行 事件 
            //   buttonmsg:"完成",
            //   data:{key:'',postdata:1}
          }},
          methods:{
               ...mapActions('personal',['personaldata','phonetoken']),  // 获取 store 的数据传输方法  personaldata 方法 负责数据的后台传输和数据的接收
              changedata({dataType,val}){  // 数据接收函数 接收 数据key 和 数据
               this.data[dataType] = val;   // 添加到主要数据 this.data中
               this.bool = 0;    
               let keys = Object.keys(this.data) // 获取数据中的所有 key 值 
               this.dataTypelist[this.nextindex].forEach(item=>{    // 遍历  
                     keys.indexOf(item) == -1 || this.data[item] === ''  ?  this.bool = 1 : ''    // 如果都符合条件 则... bool 为 0 按钮点击事件开启
               })

               },
               conf(){  // 按钮点击事件   发送数据
               if(!this.bool){   // 点击事件开关
               if(this.data.postdata){ 
               this.personaldata(this.data)
               return
               }
               this.nextindex++;
               if(this.nextindex == this.inputsList.length-1)
               {   
                   this.buttonmsg = ' 完成 ' 
                   this.data.postdata = 1;
               }
               this.changethisWeb(this.inputtitleList[this.nextindex])
                }
               }, //  msg 页头 名  inputs 子组件数据
               changethisWeb(msg){  //  子组件切换 方法 用户 下一步 下一步 等相同页面的子组件切换
               this.$emit('give',msg);    // 发送给 父组件 父组件 发送给 头组件
                this.bool = 1
               },
              async  phoneToken({type,target}){
                  let result = ''
                  if(type =='token1'){
                        if(!this.data['phone'] || this.data['phone']==''){ // 如果为 null 或 空
                        return
                    }else 
                      result =  await this.phonetoken({phone:this.data.phone }) 
                  }else{
                        if(!this.data['email'] || this.data['email']==''){
                        return
                    }else
                        result =  await this.phonetoken({email:this.data.email })    
                  }
                  
                  if(result.status==200) // 如果定于200 则表示发送成功
                 {   
                     this.inputdata.animainbool = 1
                     this.animain(target)

                 }    
                  return result
               },
               animain(target){
                    Object.assign(target.style,{
                             background:'#2167DD',
                             color:'#fff'
                         })
                         this.timernumber = 60  // 控制 秒数
                         this.inputdata.tokemsg = this.timernumber+"s"
                         this.timer = setInterval(()=>{
                             this.timernumber --;
                             if(this.timernumber<=0){
                                 this.inputdata.animainbool = 0
                            clearInterval(this.timer)
                             this.inputdata.tokemsg = '获取验证码'
                             Object.assign(target.style,{
                             background:'#fff',
                             color:'#2167DD'
                         })
                         return
                            }
                           this.inputdata.tokemsg = this.timernumber+"s" 
                         },1000) 
               }
          },
          components:{
              operationtext
          },
          computed:{

          },
          mounted(){ //  从 store中获取 数据  从父元素穿过来的下标中进行 页面样式的决定
            this.changethisWeb(this.inputtitleList[this.nextindex])
            if(this.inputsList.length==1){ //  如果数据只有一条 则 表示 不需要下一步
                this.buttonmsg = '完成'
                this.data.postdata = 1
            }
         }
    }
    </script>
    <style>
    .operation-inputs{flex: 1;}
    .operation-button{width: 3.15rem;height:0.48rem;font-size: 0.18rem;background: #2167DD;border-radius: 0.1rem;
    text-align: center;line-height: 0.48rem; box-shadow: 3px 6px 20px 2px #6E9EF0;
    color: #fff;margin: 0.3rem auto;}
    .checked{background:#ccc;box-shadow:none}
    </style>
    