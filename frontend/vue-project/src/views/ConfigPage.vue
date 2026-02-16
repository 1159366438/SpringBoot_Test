<!-- src/views/ConfigPage.vue -->
<template>
  <div class="page-container">
    <h2>Config 页面</h2>
    <!-- 原输入框+查询功能 -->
    <el-input 
      v-model="inputValue" 
      style="width: 240px" 
      placeholder="Please input"
    />
    <p class="input-preview">查询的内容：{{ queryResult }}</p>
    <el-button 
      type="primary" 
      style="margin-left: 10px"
      @click="sendInputToBackend"
    >
      查询
    </el-button>
  </div>
</template>

<script lang="ts" setup>
import { ElMessage } from 'element-plus';
import { ref } from 'vue';
import axios from 'axios';

// 声明响应式变量
const inputValue = ref<string>('');
const queryResult = ref<string>('');

// 安全的 JSON 转换函数
const safeJsonStringify = (value: unknown): string => {
  if (value === null || value === undefined) {
    return '暂无数据';
  }
  if (typeof value === 'string') {
    return value;
  }
  try {
    return JSON.stringify(value, null, 2);
  } catch (error) {
    return `数据解析失败：${(error as Error).message}`;
  }
};

// 发送请求方法
const sendInputToBackend = async () => {
  if (!inputValue.value.trim()) {
    ElMessage.warning('请输入内容后再发送！');
    return;
  }

  try {
    const response = await axios.get<unknown>('/api/input/send', {
      params: { content: inputValue.value }
    });
    queryResult.value = safeJsonStringify(response.data);
    ElMessage.success('查询成功！');
  } catch (error) {
    queryResult.value = `查询失败：${(error as Error).message || '未知错误'}`;
    ElMessage.error('查询失败，请重试！');
  }
};
</script>

<style scoped>
.page-container {
  padding: 40px;
  margin-top: 60px;
}
.input-preview {
  margin: 10px 0;
  color: #666;
  font-size: 14px;
  white-space: pre-wrap;
}
</style>