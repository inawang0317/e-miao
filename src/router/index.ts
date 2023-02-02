import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import commonBase from './commonBase'
import visualizationSystem from './visualizationSystem'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/commonBase/index'
  },
  ...commonBase,
  ...visualizationSystem
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})


// 路由守卫
router.beforeEach((to, from, next) => {
  if (!to.matched.length) {
    next('./error?code=404')
  } else {
    next()
  }
})

export default router
