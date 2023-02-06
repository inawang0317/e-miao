export default [
  {
    path: '/visualizationSystem/index',
    name: 'MyWorkStation',
    component: () => import('@/views/visualizationSystem/workStation/index.vue'),
  },
  {
    path: '/visualizationSystem/chartHome/:id(.*)*',
    name: 'MyChartHome',
    component: () => import('@/views/visualizationSystem/chartHome/index.vue'),
  }
]