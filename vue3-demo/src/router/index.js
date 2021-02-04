import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('../views/index.vue')
    },
    {
      path: '/parent-1',
      name: 'parent-1',
      component: () => import('../views/parent-1.vue')
    },
    {
      path: '/parent-2',
      name: 'parent-2',
      component: () => import('../views/parent-2.vue')
    },
    {
      path: '/main',
      name: 'main',
      component: () => import('../views/main.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/about.vue')
    }
  ]
});

export default router;
