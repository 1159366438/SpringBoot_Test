<!-- src/App.vue -->
<template>
  <!-- 1. 引入时间+图片组件（全局显示） -->
  <ClockInComponent />

  <!-- 2. 导航栏（替代原标签页，实现页面跳转） -->
  <nav class="nav-bar">
    <router-link to="/route" class="nav-item">Route</router-link>
    <router-link to="/config" class="nav-item">Config</router-link>
    <router-link to="/role" class="nav-item">Role</router-link>
    <router-link to="/task" class="nav-item">Task</router-link>
  </nav>

  <!-- 3. 路由出口：渲染当前页面组件 -->
  <router-view />
</template>

<script lang="ts" setup>
// 导入时间组件
import ClockInComponent from './components/ClockInComponent.vue';
</script>

<style scoped>
/* 导航栏样式 */
.nav-bar {
  position: fixed;
  top: 60px;
  left: 0;
  right: 0;
  background: #fff;
  padding: 10px 20px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  z-index: 9998;
  display: flex;
  gap: 15px;
}

/* 导航项样式 */
.nav-item {
  text-decoration: none;
  color: #333;
  padding: 8px 16px;
  border-radius: 4px;
  transition: background-color 0.2s;
}

/* 激活的导航项样式 */
.nav-item.router-link-active {
  background-color: #409eff;
  color: #fff;
}

/* 全局样式 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: #f9f9f9;
}
</style>