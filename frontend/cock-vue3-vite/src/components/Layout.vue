<template>
  <div class="layout-container">
    <!-- 左侧标签页 -->
    <div class="layout-sidebar">
      <el-tabs v-model="activeTab" type="card" @tab-change="handleTabChange">
        <el-tab-pane label="今日打卡" name="today"></el-tab-pane>
        <el-tab-pane label="打卡记录" name="record"></el-tab-pane>
        <el-tab-pane label="统计分析" name="analysis"></el-tab-pane>
      </el-tabs>
    </div>

    <!-- 右侧内容区 -->
    <div class="layout-content">
      <!-- 顶部栏：刷新时间+用户信息 -->
      <div class="content-header">
        <UserInfo />
      </div>
      <!-- 内容主体：根据标签切换显示不同组件 -->
      <div class="content-body">
        <PunchCard v-if="activeTab === 'today'" />
        <RecordCard v-if="activeTab === 'record'" />

        <div v-else class="analysis-content">
          <el-empty description="统计分析功能待开发" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import UserInfo from './UserInfo.vue'
import PunchCard from './PunchCard.vue'
import RecordCard from './RecordCard.vue'
import { punchApi } from '../api/punchApi'

// 响应式数据
const activeTab = ref('today') // 默认选中“今日打卡”
const punchRecord = ref<any[]>([])

// 标签切换事件
const handleTabChange = (tabName: string) => {
  console.log('切换到标签：', tabName)
  // 切换到打卡记录时加载数据
  if (tabName === 'record') {
    getPunchRecord()
  }
}

// 获取打卡记录
const getPunchRecord = async () => {
  const res = await punchApi.getPunchRecord()
  if (res.code === 200) {
    punchRecord.value = res.data
  }
}

// 初始化加载打卡记录
onMounted(() => {
  getPunchRecord()
})
</script>

<style scoped>
.layout-container {
  display: flex;
  height: calc(100vh - 20px);
  gap: 10px;
  padding: 10px;
}

.layout-sidebar {
  width: 240px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

.layout-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  padding: 10px;
}

.content-header {
  text-align: right;
  padding-bottom: 10px;
  border-bottom: 1px solid #eee;
  margin-bottom: 10px;
}

.content-body {
  flex: 1;
  overflow: auto;
  padding: 10px;
}

.record-content, .analysis-content {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>