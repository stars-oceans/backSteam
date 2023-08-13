import axios from 'axios'
import md5 from 'md5'
import { useLoginStore } from '@/stores'
import { ElMessage } from 'element-plus'
// 注意这个时候 pinia 还没有挂载, 不能调用,能在这个上面来调用

// 环境变量
const baseURL = import.meta.env.VITE_BASE_URL

// console.log(import.meta.env);

// 创建我们的 axios 实例
const http = axios.create({
  // 基地址
  baseURL: baseURL,
  // 超时时间
  timeout: 10000
})

// 请求拦截器
http.interceptors.request.use(
  (config) => {
    // 后端的加密
    const { icode, time } = getTestICode()
    config.headers.icode = icode
    config.headers.codeType = time

    const loginStore = useLoginStore()
    // token 标头
    const token = loginStore.loginData?.data?.token
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (err) => {
    console.dir(err)
    return Promise.reject(err)
  }
)

// 响应拦截器
http.interceptors.response.use(
  (res) => {
    return res
  },
  (err) => {
    // 错误提示
    ElMessage.error(err.response?.data.message || err.request?.response || err.response?.responseText)
    return Promise.reject(err)
  }
)

/**
 * 返回 Icode 的实现
 */
function getTestICode() {
  const now = parseInt(Date.now() / 1000)
  const code = now + 'LGD_Sunday-1991-12-30'
  return {
    icode: md5(code),
    time: now
  }
}
// 导出
export { http }
