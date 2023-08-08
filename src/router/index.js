import { createRouter, createWebHistory } from 'vue-router'
const publicRoutes = [
  // 重新定向
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login/index.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home/index.vue'),
  },
  //  404
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/404/index.vue')
  },
  {
    path: '/:pathMatch(.*)',
    redirect: '/404'
  }

]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...publicRoutes]
})

export default router
