// 获取所有的子集的方法
const getChildrenRoutes = (routes) => {
  const result = []
  routes.forEach((route) => {
    if (route.children && route.children.length > 0) {
      result.push(...route.children)
    }
  })
  console.log(result)
  return result
}

/**
 *  处理脱离层级的路由
 */
export const filterRoutes = (routes) => {
  // 所有的子集路由
  const childrenRoutes = getChildrenRoutes(routes)
  console.log(childrenRoutes)
  // 跟据子集路由进行查重操作
  return routes = routes.filter((route) => {
    // 根据route在childrenRoutes中进行查重，把所有重复路由表剔除
    return !childrenRoutes.find((childrenRoute) => {
      return childrenRoute.path === route.path
    })
  })
}

/**
 * 跟据 routes 数据, 返回对应的menu规则
 */
export const generateMenus = (routes, basePath = '') => {
  const result = []
  routes.forEach((route) => {

  })
  return result 
}
