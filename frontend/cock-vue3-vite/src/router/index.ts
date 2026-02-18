import { createRouter, createWebHistory } from 'vue-router'
import PunchPage from '../views/PunchPage.vue'

const routes = [
  {
    path: '/',
    redirect: '/punch' // 默认跳转到打卡页
  },
  {
    path: '/punch',
    name: 'PunchPage',
    component: PunchPage,
    meta: { title: '打卡页面' }
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router