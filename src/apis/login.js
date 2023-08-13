import { http } from '@/utils/http.js'
//登录的接口
/**
 * data
 * @returns {*}
 */
export const getLoginDataAPI = (data) =>{
  // console.log(data);
    return http({ 
        url: '/api/sys/login',
        method : 'post',
        data
    })
}
  

