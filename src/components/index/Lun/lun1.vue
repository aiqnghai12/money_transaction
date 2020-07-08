
    <template>
         <div class="lun_page">
                 <el-component is='OffspringPage' @give='change'></el-component>
                 <lable-component is='LunLabel' :left='left'></lable-component>
         </div>
    </template>

<script>
import OffspringPage from './offspringPage'
import LunLabel from './lun_label'

export default {
           data () {
               return {
                   left:0
               }
           },
           methods:{
               change(left){
                 this.left = left;
               }
           },
           components:{
            'OffspringPage':OffspringPage,
            'LunLabel':LunLabel
        }
}
</script>

<style lang="stylus" scoped>

.lun_page
   width  100%
   height  1.8rem
   overflow  hidden
   position  relative
     
</style>


