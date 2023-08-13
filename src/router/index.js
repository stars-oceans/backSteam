import { createRouter, createWebHistory } from 'vue-router'
import {publicRoutes} from './router'

/**
 * 私有路由表
 */
const privateRoutes = [
  // 用户
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...publicRoutes, ...privateRoutes]
})


export default router
