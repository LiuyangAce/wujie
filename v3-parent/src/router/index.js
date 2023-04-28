import { createRouter, createWebHistory } from 'vue-router';

const layoutComponent = () => import('@/layout/index.vue')


const routes = [
  {
    path: '/childList',
    name: 'childList',
    component: layoutComponent,
    children: [
      {
        path: 'home',
        name: 'home',
        component: () => import('@/views/home.vue'),
      },
      {
        path: 'v3Child',
        name: 'v3Child',
        component: () => import('@/views/v3Child.vue'),
      },
      {
        path: 'reactChild',
        name: 'reactChild',
        component: () => import('@/views/reactChild.vue'),
      },
    ]
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})


export default router