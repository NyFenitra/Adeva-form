import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/signup',
      name: 'home',
      component: () => import('../views/SignupView/Layout.vue'),
      children: [
        {
          name: 'step-1',
          path: '',
          alias: 'position',
          component: () => import('../views/SignupView/Index.vue'),
        },
        {
          name: 'step-2',
          path: 'commitment',
          component: () => import('../views/SignupView/Commitment.vue'),
        },
      ],
    },
    // Not found then redirect to /signup
    {
      path: '/:pathMatch(.*)*',
      redirect: '/signup/position',
    },
  ],
});

export default router;
