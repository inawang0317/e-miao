export default [
  {
    path: '/commonBase/login',
    name: 'Login',
    component: () => import('@/views/commonBase/Login.vue'),
    meta: {
      title: 'Login'
    }
  }
]