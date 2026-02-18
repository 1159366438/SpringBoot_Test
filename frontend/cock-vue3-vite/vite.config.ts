import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  // 1. 插件配置
  plugins: [vue()],
  
  // 2. 路径别名（可选，方便导入）
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  
  // 3. 开发服务器配置（核心：代理后端8080接口，解决跨域+统一地址）
  server: {
    proxy: {
      // 匹配所有以 /api 开头的请求，转发到后端8080
      '/api': {
        target: 'http://localhost:8080', // 后端8080地址
        changeOrigin: true, // 开启跨域
        //rewrite: (path) => path.replace(/^\/api/, '') // 若后端接口无/api前缀，需开启此行
      }
    }
  },
  
  // 4. 全局环境变量（替代硬编码，API文件中可直接读取）
  define: {
    // 生产环境地址（若无需代理，可直接用这个地址）
    __API_BASE_URL__: JSON.stringify('http://localhost:8080')
  }
})