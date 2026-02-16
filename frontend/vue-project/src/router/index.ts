// src/router/index.ts
// 1. 导入运行时的值（正常 import）
import { createRouter, createWebHistory } from 'vue-router';
// 2. 导入仅类型（用 import type）
import type { RouteRecordRaw } from 'vue-router';

// 导入四个页面组件
import RoutePage from '@/views/RoutePage.vue';
import ConfigPage from '@/views/ConfigPage.vue';
import RolePage from '@/views/RolePage.vue';
import TaskPage from '@/views/TaskPage.vue';

// 定义路由规则（类型标注不变）
const routes: Array<RouteRecordRaw> = [
  { path: '/', redirect: '/route' },
  { path: '/route', name: 'Route', component: RoutePage },
  { path: '/config', name: 'Config', component: ConfigPage },
  { path: '/role', name: 'Role', component: RolePage },
  { path: '/task', name: 'Task', component: TaskPage },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;