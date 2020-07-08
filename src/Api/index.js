import request from '@utilt/request'
import { cateUrl,phoneTokemUrl ,emailTokemUrl} from './url';
//! 获取分类页面
export function cateReq (params) {
  //  /index.php?r=class/category&type=1
  return request({
    method:'post',
    url: cateUrl,
    data:params
  })
}

export function phoneTokem (phone){
  return request({
    method:'post',
    url:phoneTokemUrl,
    data:phone
  })
}

export function emailTokem (email){
  return request({
    method:'post',
    url:emailTokemUrl,
    data:email
  })
}