import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/signup',
      name: 'home',
      component: () => import('../views/SignupView.vue'),
      children: [],
    },
    // Not found then redirect to /signup
    {
      path: '/:pathMatch(.*)*',
      redirect: '/signup',
    },
  ],
});

export default router;
