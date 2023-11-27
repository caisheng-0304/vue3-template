
const Layouts = () => import("@/layouts/index.vue")
export const indexRoutes= [
  {
    path: '/',
    meta: {
      title: '首页',
    },
    component: () => import('@/views/home/index.vue'),
  },
    {
      path: "/404",
      component: () => import("@/views/error-page/404.vue"),
      meta: {
        hidden: true
      },
      alias: "/:pathMatch(.*)*"
    },
]
export const constantRoutes= [
  {
    path: '/contain',
    meta: {
      title: '首页',
    },
    component: Layouts,
    children: [
      {
        path: 'all',
        name: 'all',
        meta: {
          title: '全部',
        },
        component: () => import('@/views/all/index.vue'),
      },
      {
        path: 'flavorYangcheng',
        name: 'flavorYangcheng',
        meta: {
          title: '羊城风味',
        },
        component: () => import('@/views/flavorYangcheng/index.vue'),
      },
      {
        path: 'modernFife',
        name: 'modernFife',
        meta: {
          title: '摩登生活',
        },
        component: () => import('@/views/modernFife/index.vue'),
      },
      {
        path: 'hipPlace',
        name: 'hipPlace',
        meta: {
          title: '时髦场所',
        },
        component: () => import('@/views/hipPlace/index.vue'),
      },
      {
        path: 'ceMedicine',
        name: 'ceMedicine',
        meta: {
          title: '中西成药',
        },
        component: () => import('@/views/ceMedicine/index.vue'),
      },
      {
        path: 'epilogue',
        name: 'epilogue',
        meta: {
          title: '结语',
        },
        component: () => import('@/views/epilogue/index.vue'),
      },
    ],
  },
]
