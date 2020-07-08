    <template >
            <div class="operation" :class='{"marginTop":item.top}'>
                <!-- 普通input 组件样式 -->
               <div class="operation-text"  v-if="typeselect('text')"> 
               <p class="operation-title">{{item.title}}</p>
               <input :class="['operation-input',{'inputred':flag},{'token':item.token}]" :type='item.type' :placeholder="item.msg" @input="inputOninput"  @blur.once='inputOnblur' @keydown.13='inputkeydown'>
               <div class="operation-token" v-if='item.token' v-tap='tokentap'>{{inputdata.tokemsg}}</div>  
                <!-- // 验证码 -->
               <p class="operation-warning" v-show='flag'>{{item.denger}}</p>
               </div>
               <!-- 靠右 input 组件样式 -->
               <div class="operation-text operation-text2"  v-if="typeselect('text2')">
                    <p class="operation-title text2-title">{{item.title}}</p>
                    <p class="operation-warning text2-warning" v-show='flag'>{{item.denger}}</p>
                    <input :class="['operation-input text2-input',{'inputred':flag},{'token':item.token}]" :type='item.type' :placeholder="item.msg" @input="inputOninput"  @blur.once='inputOnblur' @keydown.13='inputkeydown'>
               </div>
               <!-- 按钮  -->
               <div class="operation-text operation-text2 operation-switch"  v-if="typeselect('switch')">
                    <p class="operation-title text2-title switch-title">{{item.title}}</p>
                    <div class="operation-onoff" v-tap='switchchange'>  <p  class="p-onoff"></p> </div>
                </div>
            </div>
    </template>
    <script>

    export default { 
                  props:{
                     item:Object,
                     inputdata:Object
                  },   //               flag 警告控制  dataSwitch 开关 inputbool input事件控制
                  data(){return{flag:0,dataswitch:1,inputbool:0}},
                  methods:{
                      inputOnblur(e){   //   失焦 方法  第一次输入使用失焦 
                        let dataType = this.item.dataType
                        if(this.item.Rexp) { //  判断是否需要 有正则输入
                        this.flag = !this.item.Rexp.test(e.target.value)  //有  正则表表达式 判断用户输入的是否符合格式  由 flag 属性 控制警告标语显示
                        this.inputbool = 1;  // 控制 input事件开启   如果没有正则 就不需要开启 
                        }
                        if(!this.flag)    // 初始化为 0 如果 没有正则 或 正则 成功 则 允许发送
                        this.$emit('give',{dataType,val:e.target.value})  // 正则正确 发送数据到 父 组件 
                      },
                      inputkeydown(e){
                        e.target.blur()  // 回车触发失焦 
                      },
                      inputOninput(e){
                        if(!this.inputbool) return   // 当第一次失焦后 开启 input 事件 
                        let dataType = this.item.dataType     
                        if(this.item.Rexp)   // 正则
                        this.flag = !this.item.Rexp.test(e.target.value)
                        this.$emit('give',{dataType,val: !this.flag ? e.target.value : ''})  // 发送数据到父组件 如果 正则判断不正确 则
                      },
                      tokentap(e){ // 验证码发送事件 
                         if(this.inputdata.animainbool) return   // 控制器 不能频繁点击 
                         this.$emit('phoneToken',{type:this.item.dataType,target:e.target})
                      },
                      typeselect(type){  //  类型 判断
                      return this.item.type == type
                      },
                      switchchange(e){ // 开关 控制器 
                          this.dataswitch = !this.dataswitch //快关数据 改变
                          if(e.target.tagName=="P"){  // 需要 过渡效果 需要使用 原生  点击是父元素 还是 子元素  样式改变代码
                          e.target.style.right = this.dataswitch ? '0.26rem' : '0.02rem';
                           e.target.parentNode.style.background = this.dataswitch ? '#2167DD' :'#ccc'
                          }else{
                           e.target.firstElementChild.style.right = this.dataswitch ? '0.26rem' : '0.02rem';
                           e.target.style.background = this.dataswitch ? '#2167DD' :'#ccc'
                          }
                            let dataType = this.item.dataType   // 获取发送过来的开关参数 字符串
                            let _dataswitch = this.dataswitch   // 获取 开关数据
                            this.$emit('give',{dataType,val:_dataswitch})    //  发送到 父元素
                      }
                  }
    }
    </script>
    
    <style>

input:focus::-webkit-input-placeholder {
color: transparent;}
input:focus:-moz-placeholder {
color: transparent;}
input:focus::-moz-placeholder {
color: transparent;}
input:focus:-ms-input-placeholder {
color: transparent;}
    .operation{width: 100%;}
      .operation-inputs{display:flex;flex-direction: column;align-items: center}
       .operation-text{height:0.6rem;background: #fff;border-top: 0.01rem solid #f5f5f5;position: relative;
    display: flex;align-items: center; width: 100%;}
       .operation-text .operation-title{width: 1.15rem;text-indent: 0.25rem;font-size: 0.16rem; }
       .operation-text .operation-input{width:1.99rem;border: none;font-size: 0.12rem;height: 0.2rem;outline: none;
       border: 1px solid rgba(0,0,0,0)}
       .operation-text .operation-token{width: 0.63rem;height: 0.22rem;position: absolute;border: 0.01rem solid #2167DD;border-radius: 0.03rem;
        font-size: 0.1rem;text-align: center;line-height: 0.22rem;color: #2167DD;left: 2.77rem; 
    }
    .operation.marginTop{margin-top: 0.1rem;}
    .operation-text .operation-warning{position: absolute; width: 2rem;top: 0.04rem; font-size: 0.1rem;color: red;
    left: 1.09rem;}
    .operation-input.inputred{color:red;}
    .operation-input.token{width: 1rem;}
    
    /* text2 样式 */
    .operation-text2{height: 0.44rem;margin-bottom: 0.01rem;border: none;justify-content: space-between;}
    .operation-text2 .text2-title{font-size: 0.14rem;}
    .operation-text2 .text2-input{margin-right: 0.25rem;text-align:right;}
     .operation-text2 .text2-warning{ top: 0.16rem }
    /* select 样式 */
     /* .operation-select{height: 0.44rem;margin: 0 0.01rem;justify-content: space-between;}
     .operation-options{font-size: 0.14rem;margin-right: 0.25rem;border: none;text-align: right;}
     .operation-options option{font-size: 0.14rem;text-align: right;} */

     .operation-onoff{width: 0.44rem;height: 0.22rem;background: #2167DD;margin-right: 0.25rem;transition: all 1s;
     border-radius: 0.11rem;display: flex;align-items: center;padding: 0 0.02rem;position: relative}
          .operation-onoff .p-onoff{width: 0.2rem;height: 0.2rem;border-radius: 50%;background: #fff;
          position: absolute; transition: all .4s; right: 0.26rem;
          }

    </style>
    