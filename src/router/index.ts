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
          component: () => import('../views/SignupView/Position.vue'),
        },
        {
          name: 'step-2',
          path: 'commitment',
          component: () => import('../views/SignupView/Commitment.vue'),
        },
        {
          name: 'step-3',
          path: 'skills',
          component: () => import('../views/SignupView/Skills.vue'),
        },
        {
          name: 'step-4',
          path: 'start-time',
          component: () => import('../views/SignupView/StartTime.vue'),
        },
        {
          name: 'step-5',
          path: 'register',
          component: () => import('../views/SignupView/Register.vue'),
        },
        {
          name: 'step-6',
          path: 'schedule',
          component: () => import('../views/SignupView/Schedule.vue'),
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
