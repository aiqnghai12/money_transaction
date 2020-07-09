  <template>
      <div class="personal">
        <Header-component :is='operationlist[0]' :title='title' ></Header-component>
        <operationinputs-component :is='operationlist[1]' @give='give' 
        :inputsList='webdata[webindex].inputlist' :inputs='webdata[webindex].inputlist[0]'
        :inputtitleList='webdata[webindex].msglist'  :dataTypelist='webdata[webindex].dataTypelist'
         :webindex='webindex'></operationinputs-component>
      </div>
  </template>
  
  <script>
      import {mapState} from 'vuex'   
  import Header from 'comps//addmessage/Header'
   import operationinputs from './addmessage/operationinputs'

  export default {
    data(){return{
        operationlist:['Header','operationinputs'],
        title:'实名认证',
        webindex:0,
        ceshi:["sad",{data:"sdq"}]
    }},
    components:{
      Header,
      operationinputs
    },
    methods:{
      give(title){
        this.title = title
      }
    },
    computed:{    // 获取 store 中保存的数据
         ...mapState('personal',{  // 从 homeStore 块 中 获取 state 中的数据 传回对象 
         webdata: state => state.webdata
         }),
    }
  }
  </script>
  

  <style lang="stylus" scoped>
  body,html,.personal
     height 100%
  
  .personal
     display flex
     flex-direction column
     
     
       
  </style>
  
