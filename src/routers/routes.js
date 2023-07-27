// 页面路由
export default [
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/home/home.vue'),
  },
]
