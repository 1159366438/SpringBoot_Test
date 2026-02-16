// src/main.ts
import { createApp } from 'vue';
import App from './App.vue';
// 导入路由
import router from './router';
// 导入 Element Plus（如果用到）
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';

const app = createApp(App);

// 注册路由
app.use(router);
// 注册 Element Plus
app.use(ElementPlus);
// 注册所有 Element Plus 图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

app.mount('#app');