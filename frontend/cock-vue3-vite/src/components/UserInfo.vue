<template>
  <div class="user-info">
    <!-- 刷新时间 -->
    <span class="refresh-time">{{ currentTime }}</span>
    <!-- 用户信息 -->
    <div class="user-box">
      <el-avatar :src="userInfo.avatar" class="avatar"></el-avatar>
      <span class="user-name">{{ userInfo.name }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { punchApi } from '../api/punchApi'

// 定义用户信息类型
interface UserInfo {
  name: string
  avatar: string
}

// 响应式数据
const currentTime = ref('')
const userInfo = ref<UserInfo>({
  name: '',
  avatar: ''
})

// 更新时间函数
const updateTime = () => {
  const now = new Date()
  // 格式化时间：YYYY-MM-DD HH:mm:ss
  currentTime.value = now.toLocaleString('zh-CN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  }).replace(/\//g, '-')
}

// 获取用户信息
const getUserInfo = async () => {
  const res = await punchApi.getUserInfo()
  if (res.code === 200) {
    userInfo.value = res.data
  }
}

// 生命周期：挂载时初始化
onMounted(() => {
  // 初始化时间和用户信息
  updateTime()
  getUserInfo()
  // 每秒更新时间
  const timer = setInterval(updateTime, 1000)
  // 卸载时清除定时器
  onUnmounted(() => clearInterval(timer))
})
</script>

<style scoped>
.user-info {
  display: flex;
  align-items: center;
  gap: 20px;
  color: #666;
}

.user-box {
  display: flex;
  align-items: center;
  gap: 8px;
}

.avatar {
  width: 32px;
  height: 32px;
  cursor: pointer;
}

.user-name {
  font-size: 14px;
  color: #333;
}

.refresh-time {
  font-size: 12px;
}
</style>