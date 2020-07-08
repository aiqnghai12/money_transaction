  ///  input 自定义插件 数据存放处
 export default {
    inputsTypelist : [{id:1,type:'text',msg:'请输入手机号',title:'手机号',token:0,dataType:'phone',denger:'电话号码格式有误',top:0,Rexp:/^[1][3|4|5|6|7|8|9][0-9]{9}$/},
    {id:2,type:'text',msg:'短信验证码',title:'验证码',token:1,dataType:'token1',denger:'验证码输入不正确',top:0,Rexp:/^\d{6}$/},
    {id:3,type:'text',msg:'请输入邮箱',title:'邮箱',token:0,dataType:'email',denger:'邮箱格式有误',top:0,Rexp:/^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/},
    {id:4,type:'text',msg:'邮箱验证码',title:'验证码',token:1,dataType:'token2',denger:'验证码输入不正确',top:0,Rexp:/^\d{6}$/},
    {id:5,type:'text',msg:'请输入身份证',title:'身份证',token:0,dataType:'IDCard',denger:'身份证格式有误',top:0,Rexp:/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/},
    {id:6,type:'text',msg:'6-20位大写字母开头+字符字母数字',title:'密码',token:0,dataType:'password',denger:'密码格式有误',top:0,Rexp:/^(?=.*\W)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[A-Z]([a-zA-Z0-9]|\W){5,19}$/},
    {id:7,type:'text',msg:'非必填',title:'邀请码',token:0,dataType:'code',top:0},
    {id:8,type:'switch',title:'是否开启',token:0,dataType:'dataswitch',top:1}
   ]
}