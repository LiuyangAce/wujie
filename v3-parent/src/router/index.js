import {createRouter, createWebHistory} from 'vue-router';

const routes = [
  {
    // path: '/',
    // redirect: '/v3Child',
    name: 'v3child',
    component: () => import('@/views/v3Child.vue'),
    meta: {
      layout: 'viewLayout',
      title: 'v3Child'
    }
  },
  {
    path: '/reactChild',
    name: 'reactChild',
    component: () => import('@/views/reactChild.vue'),
    meta: {
      layout: 'viewLayout',
      title: 'reactChild'
    }
  },
  {
    path: '/',
    redirect: '/wujieDemo',
    name: 'wujieDemo',
    component: () => import('@/views/HelloWorld.vue'),
    meta: {
      layout: 'viewLayout'
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})


export default router