 <!-- 被切换组件   负责显示数据 以及接收切换组件改变的信息， 做出数据显示的改变 -->
     <template>
            <div class="table-message">
                <div class="table-div-message">
                    <li v-for='item in filterdata' :key='item.id'>
                        <div class="condition">
                            <p :class="{'be-sold':item.trading}">{{ item.trading  | selecttrading}} <span>USDT</span> </p>
                            <p :class="{'icon-status2':item.condition!=1}">{{ item.condition | filtercondition }}</p>
                        </div>
                        <div class="number">
                            <p>{{item.price}} CNY</p>
                            <p>{{item.total_number}}</p>
                            <p>{{item.timer}}</p>
                        </div>
                        <div class="instructions">
                            <p>购买价格</p>
                            <p>购买总数量</p>
                            <p>时间</p>
                        </div>
                    </li>
                </div>
                <p>已经到底了</p>
            </div>
        </template>

        <script>
         import axios from 'axios'
        export default {
             data(){return{data:'',showdata:''}},
            computed:{
            filterdata(){
             if(!this.condition)   // 如果为0 返回 全部 
             return this.data
             else
             return this.data.filter(item=>{  
                return  item.condition==this.condition })
            }
        },
        props:{
            condition:Number
        },
        mounted(){
            axios.get('/data/data.json')
            .then( response=>{
             this.data = response.data.list
             this.data = this.data.map(item=>{ 
                 item.condition = parseInt ( item.condition); 
                 item.trading = parseInt( item.trading); 
                 return item;})
            })
            .catch(function (error) {
                console.log(error);
            })
         },
         filters:{
             'selecttrading':val=>{
            return val==0 ? '购买' : '出售'
             },
             'filtercondition':val=>{
                      switch (val) {
                          case 1:
                        return '上架中'

                              case 2:
                        return '已下架'

                              case 3:
                        return '已失效'

                          default:
                              break;
                      }
             }
         }
        }
        </script>
    
    <style  scpped>
    .table-message{width: 100%;flex: 1;
    overflow-y: scroll;padding-bottom: 0.1rem;}
.table-div-message{overflow: hidden;background: #f5f5f5}
.table-message > p{background: #f5f5f5;color: #666;
    text-align: center;height: 0.8rem;line-height: 0.6rem;
    font-size: 0.16rem;color: #999
}
.table-div-message >li{width: 100%;height: 1rem;background: #fff;
    margin-top: 0.1rem;border-radius: 0.1rem;
    display: flex;justify-content: space-evenly;
    flex-direction: column;
}
.table-div-message >li >div{
    display: flex;justify-content: space-between;
    align-items: center;
    padding:0 0.14rem; font-weight: 200
}
.table-div-message  .condition p:nth-child(1){color:#2167DD;
font-size: 0.14rem;}
.table-div-message  .condition p:nth-child(1) span{
    font-size: 0.14rem;
    color: #666;line-height: 0.2rem;height: 0.2rem;
    display: inline-block;position: relative;top: 0.03rem;
}
.table-div-message  .condition p:nth-child(2){color:#fff;
    font-size: 0.12rem;
    width: 0.44rem;height: 0.22rem;line-height: 0.22rem;
background: #2167DD;border-top-right-radius: 0.02rem 0.05rem;
border-top-left-radius: 0.02rem 0.05rem;
border-bottom-right-radius: 0.02rem 0.05rem;
border-bottom-left-radius: 0.02rem 0.05rem;}
.table-div-message .number p{font-size:0.13rem;}
.table-div-message .instructions p{font-size:0.14rem; }
.table-div-message p:nth-child(1){text-align: left;}
.table-div-message p:nth-child(2){text-align: center;}
.table-div-message p:nth-child(3){text-align: right;}
.icon-status2{background:#80A8EC !important; }
.be-sold{color: orangered !important;}
.table-div-message .number p:nth-child(1){width: 0.76rem;}
.table-div-message .number p:nth-child(2){width: 0.9rem;}
.table-div-message .number p:nth-child(3){width: 0.76rem;}
.table-div-message .instructions p:nth-child(1){width: 0.76rem;}
.table-div-message .instructions p:nth-child(2){width: 0.9rem;}
.table-div-message .instructions p:nth-child(3){width: 0.76rem;}
    </style>
    
        