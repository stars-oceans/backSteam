import { defineStore } from 'pinia'
import { publicRoutes } from '@/router/router.js'
export const useRouterData = defineStore('routerData', () => {
    const routerData = publicRoutes

  return { routerData }
  })