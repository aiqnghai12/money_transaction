  <template>
      <div class="table">
         <header-componet is="currheader"></header-componet>
         <nav-component is="TableCurrency" @give='changeCondition'></nav-component>
          <message-component is="tablemessage" :condition='condition' ></message-component>
      </div>
  </template>
  
  <script>

  import currheader from 'comp/table/currheader';
  import TableCurrency from 'comp/table/TableCurrency'
  import tablemessage from 'comp/table/tablemessage'

  export default {
    data(){
return {
  condition:0
}
    },
    methods:{
      changeCondition(val){
      this.condition = val
      }
    },
     components:{
       currheader,
       TableCurrency,
       tablemessage
     }
  }
  </script>

 <style lang="stylus" scoped>
  .table 
     display flex
     flex-direction column
     height  100%
 </style>
 