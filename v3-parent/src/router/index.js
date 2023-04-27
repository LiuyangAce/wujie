import { createRouter, createWebHistory } from 'vue-router';
import layout from "../layout/index.vue";


const routes = [
  {
    path: '/v3Child',
    name: 'v3Child',
    component: () => import('@/views/v3Child.vue'),
    meta: {
      layout: 'layout',
    }
  },
  {
    path: '/reactChild',
    name: 'reactChild',
    component: () => import('@/views/reactChild.vue'),
    meta: {
      layout: 'layout',
    }
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})


export default router