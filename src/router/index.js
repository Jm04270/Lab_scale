import { createRouter, createWebHistory } from 'vue-router';
import MainContent from '@/components/MainContent.vue';
import TradeContent from '@/components/TradeContent.vue';
import ChatView from '@/components/Chat.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: MainContent
  },
  {
    path: '/trade',
    name: 'Trade',
    component: TradeContent
  },
  {
    path: '/chat',
    name: 'ChatView',
    component: ChatView
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
