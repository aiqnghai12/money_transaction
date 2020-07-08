     <template>
         <div class="table-currency">
             <!-- 遍历循环切换按钮 -->
              <ul><li v-for='(item,index) in condition' :class='{"colorchange":item.flag}' :value='index'  :key='item.id' v-tap='changecondition'>{{item.msg}}
                  <div class="div_hr"  :class='{"backgroundchange":item.flag}' ></div>
              </li></ul>
              <!-- 被切换组件 -->
         </div>
     </template>

      <script>
     export default {
            data(){return{
            index:0,
             condition:[
              {id:1,msg:'全部',flag:true},
              {id:2,msg:'上架中',flag:false},
              {id:3,msg:'已下架',flag:false},
              {id:4,msg:'已失效',flag:false},
          ]}},
          methods:{
              changecondition(e){
  
                let index = /\d/.test(e.target.value)  ? e.target.value : e.target.parentNode.value
                if(index==this.index) return;
          
                this.condition[this.index].flag =  false;
                this.condition[index].flag =  true;
                this.index= index;
                this.$emit('give',this.index);   //************ */
              }
          }
     }
     </script>
     

     <style>
     .table-currency{width: 100%;height: 0.34rem;background: #fff;}
.table-currency >ul{display: flex;align-items: center; flex-direction: row}
.table-currency >ul >li{ flex: 1;list-style: none;
font-size: 0.15rem;text-align: center;height: 0.30rem;line-height: 0.30rem;}
li  .div_hr{height: 0.04rem;width: 100%;
border-radius: 0.02rem;}
.colorchange{color:#2167DD}
.backgroundchange{background:#2167DD}
     </style>
     