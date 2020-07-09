const TABLEDATE = "TABLEDATE"

export default {
    namespaced: true,//命名空间，这要有它，那么这个homeStore就是一个数据块
    state:{  //  数据存放处

    },
    actions: {   //  方法存放
                 // commit规定方法  payload 传入参数
     async gettabledata ({commit},payload) {  // 数据发送方法
         
        commit({
          type: TABLEDATE,  //  参数传入到 mutations 中 用户数据回传
          payload    //  数据 状态    ----------
        })
      }
    },
    mutations: {   //  通过 commit 中的 type  和 方法名 对应    
      TABLEDATE (state,action) {  // state state数据存放对象   action 传入的数据 
        Object.assign(state.data,action.payload)
      }
    }
  }