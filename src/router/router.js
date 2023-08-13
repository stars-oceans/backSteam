import Layout from '@/Layout/index.vue'

/**
 * 公开路由表
 */
const publicRoutes = [
  // 重新定向
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login/index.vue'),
    meta: {
      titel: '登录', icon: 'svg-article'
    }
  },
  {
    path: '/',
    redirect: '/profile',
    name: 'Layout',
    component: () => import('@/Layout/index.vue'),
    children: [
      // 侧边栏静态路由信息
      // 个人中心
      {
        path: '/profile',
        name: 'profile',
        component: () => import('@/views/user/index.vue'),
        meta: {
          title: '个人中心',
          icon: 'svg-article'
        }
      },
      {
        path: '/data',
        name: 'profile',
        component: () => import('@/views/user/index.vue'),
        meta: {
          title: '数据大屏',
          icon: 'svg-article'
        }
      },
      // 只有一个 子元素的特殊情况
      {
        path: '',
        name: 'profile',
        children: [
          {
            path: '/data',
            component: () => import('@/views/user/index.vue'),
            meta: {
              title: '特殊情况',
              icon: 'svg-article'
            }
          }
        ]
      },
      // 多个 子元素的特殊情况
      {
        path: '/aaaa',
        meta: {
          title: '多个子原素',
        },
        children: [
          {
            path: '/dat1',
            component: () => import('@/views/user/index.vue'),
            meta: {
              title: '子1',
              icon: 'svg-article'
            },
            children : [
              {
                path: '/dat1',
                component: () => import('@/views/user/index.vue'),
                meta: {
                  title: '子1',
                  icon: 'svg-article'
                },
                
              },
              {
                path: '/da1',
                component: () => import('@/views/user/index.vue'),
                meta: {
                  title: '子1',
                  icon: 'svg-article'
                },
                
              }
            ]
          },
          {
            path: '/data1',
            component: () => import('@/views/user/index.vue'),
            meta: {
              title: '=子2',
              icon: 'svg-article'
            }
          },
        ]
      },
      // 多个 子元素的特殊情况
      {
        path: '',
        name: 'aaa',
        meta: {
          title: '多个子原素',
        },
        children: [
          {
            path: '/data111',
            component: () => import('@/views/user/index.vue'),
            meta: {
              title: '子1',
              icon: 'svg-article'
            }
          },
          {
            path: '/data11',
            component: () => import('@/views/user/index.vue'),
            meta: {
              title: '=子2',
              icon: 'svg-article'
            }
          },
        ]
      },
      //  404
      {
        path: '/404',
        name: '404',
        component: () => import('@/views/404/index.vue'),
        meta: {
          title: '404',
          icon: 'svg-article',
          hidden: true
        }
      },
    ]
  },
  // 出问题404
  {
    path: '/:pathMatch(.*)',
    redirect: '/404'
  }
]


export { publicRoutes }