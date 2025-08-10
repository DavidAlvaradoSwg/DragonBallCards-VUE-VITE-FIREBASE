import { createRouter, createWebHistory } from 'vue-router';
import CardsListView from '../views/CardsListView.vue';
import AboutView from '../views/AboutView.vue';
import UsView from '../views/UsView.vue';

const routes = [
  {
    path: '/',
    name: 'CardsList',
    component: CardsListView,
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView,
  },
  {
    path: '/us',
    name: 'Us',
    component: UsView,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;

