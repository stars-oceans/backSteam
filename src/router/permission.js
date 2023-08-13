import { useLoginStore } from '@/stores'
import router from '@/router'

// 白名单
const whiteList = ['/login', '/404']

// 路由前置守卫
router.beforeEach((to, from, next) => {
  const loginStore = useLoginStore()
  const token = loginStore.loginData?.data?.token
  if (whiteList.indexOf(to.path) > -1) {
    return next()
  }
  if (token) {
    next()
  } else {
    next('/login')
  }
})
