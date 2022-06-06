import { createRouter, createWebHistory } from 'vue-router';

import DeathKnight from '@/views/DeathKnight/index.vue';

const router = createRouter({
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'DeathKnight',
      component: DeathKnight,
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../components/old/AboutView.vue')
    // }
  ],
});

// eslint-disable-next-line import/no-default-export
export default router;
