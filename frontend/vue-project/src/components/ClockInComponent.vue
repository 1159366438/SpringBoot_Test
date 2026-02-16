<!-- src/components/ClockInComponent.vue -->
<template>
  <!-- 时间左侧的图片 -->
  <div class="time-icon-container">
    <img 
      src="@/assets/images/clock-icon.png" 
      alt="时间图标" 
      class="time-icon"
      />
  </div>

  <!-- 右上角时间容器 -->
  <div class="current-time">
    {{ currentTime }}
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue';

// 响应式时间
const currentTime = ref<string>('');
let timer: number | null = null;

// 格式化时间
const formatTime = (date: Date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');
  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
};

// 更新时间
const updateTime = () => {
  currentTime.value = formatTime(new Date());
};

// 生命周期
onMounted(() => {
  updateTime();
  timer = window.setInterval(updateTime, 1000);
});

onUnmounted(() => {
  if (timer) clearInterval(timer);
});
</script>

<style scoped>
.time-icon-container {
  position: fixed;
  top: 10px;
  right: 230px;
  z-index: 9999;
  width: 40px;
  height: 37px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f5f5f5;
  border-radius: 8px 0 0 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  box-sizing: border-box;
}

.time-icon {
  width: 24px;
  height: 24px;
  object-fit: contain;
}

.current-time {
  position: fixed;
  top: 10px;
  right: 10px;
  font-size: 16px;
  color: #333;
  font-weight: 500;
  background: #f5f5f5;
  padding: 5px 10px;
  border-radius: 0 8px 8px 0;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  z-index: 9999;
  height: 37px;
  line-height: 27px;
  box-sizing: border-box;
}
</style>