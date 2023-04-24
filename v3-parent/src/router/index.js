import {createRouter, createWebHistory} from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'home',
    title: '首页',
    component: () => import('@/views/home.vue'),
    meta: {
      layout: 'defalutLayout'
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})


export default router