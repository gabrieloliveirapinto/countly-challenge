import { createRouter, createWebHistory } from 'vue-router';

import EventsOverview from '@/views/EventsOverview';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'EventOverview',
      component: EventsOverview
    }
  ]
});

export default router;
