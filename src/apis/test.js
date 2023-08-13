import { http } from '@/utils/http.js'
import md5 from 'md5'
//测试
export const getUserList = () => {
    return http({
        url: '/api/sys/login',
        method: 'post',
        data: {
            username: 'super-admin',
            password: md5('123456')
        }
    })
}


