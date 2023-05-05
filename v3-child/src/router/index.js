import { createRouter, createWebHistory } from 'vue-router';



const routes = [
  {
    path: '/',
    name: 'v3Child-home',
    component: () => import('@/components/HelloWorld.vue')
  },
  {
    path: '/1',
    name: 'v3Child-1',
    component: () => import('@/views/1.vue')
  },
  {
    path: '/2',
    name: 'v3Child-2',
    component: () => import('@/views/1.vue')
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})


export default router