const PERSONALDATA = "PERSONALDATA"
const PHONETOKEN = 'PHONETOKEN'
const EMAILTOKEN = 'EMAILTOKEN'
// phoneTokem
import {cateReq,emailTokem} from '@Api'
import dataType from '@utilt/inputsType'
  const    {inputsTypelist} = dataType

export default {
    namespaced: true,//命名空间，这要有它，那么这个homeStore就是一个数据块
    state:{  //  数据存放处
      token1status:{},
      token2status:{},
      data:{key:'65aibwdiuhuiq4984eqdqwib498'}   //   用户私有数据  不带有密码账号 带有 邮箱 手机 以及他们的验证码 以及 私钥
      ,webdata:[
     {msglist:['注册'],dataTypelist:[['phone','token1','password']]
     ,inputlist:[[inputsTypelist[0],inputsTypelist[1],inputsTypelist[5],inputsTypelist[6]]]}
   ]
    },
    actions: {   //  方法存放
                 // commit规定方法  payload 传入参数
     async personaldata ({commit},payload) {  // 数据发送方法
        if(payload.postdata){
          let personaldata = this.state.personal.data;
          Object.assign(personaldata,payload)
           const newdata =   await  cateReq(personaldata)
           console.log(newdata)}
        commit({
          type: PERSONALDATA,  //  参数传入到 mutations 中 用户数据回传
          payload    //  数据 状态    ----------
        })
      },
     async phonetoken ({commit},payload){   // 手机验证码请求 
          // const result =  await  phoneTokem(payload)
          console.log(payload)
          const result = {status:200,msg:'发送成功'}
           // 返回成功状态 200 或者 500  发送失败 或300 用户名已存在
            commit({
              type: PHONETOKEN, 
              payload:result   
            })
            return result
      },
           async emailtoken ({commit},payload){   // 手机验证码请求 
          const result =  await  emailTokem(payload) 
            commit({
              type: EMAILTOKEN,  //  参数传入到 mutations 中 用户数据回传
              payload:result    //  数据 状态    ----------
            })
      }
    },
    mutations: {   //  通过 commit 中的 type  和 方法名 对应    
      PERSONALDATA (state,action) {  // state state数据存放对象   action 传入的数据 
        Object.assign(state.data,action.payload)
      },
      PHONETOKEN (state,action) {  // 手机验证返回信息 
        Object.assign(state.token1status,action.payload)
      },
      EMAILTOKEN (state,action){  // 邮箱验证返回信息
        Object.assign(state.token2status,action.payload)
      }
    }
  }