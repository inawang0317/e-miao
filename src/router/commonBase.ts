export default [
  {
    path: '/commonBase/index',
    name: 'Index',
    component: () => import('@/views/commonBase/Home.vue'),
  },
  {
    path: '/commonBase/login',
    name: 'Login',
    component: () => import('@/views/commonBase/Login.vue'),
    meta: {
      title: 'Login'
    }
  },
  {
    path: '/commonBase/error',
    name: 'Error',
    component: () => import('@/views/commonBase/Error.vue')
  },
]