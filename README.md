# 考勤系统 (Attendance System)

基于前后端分离架构的现代化考勤管理系统，旨在提供高效的员工打卡和考勤记录管理功能。

## 技术栈

### 前端技术
- **Vue.js 3** [![Version](https://img.shields.io/badge/version-^3.5.25-blue)](#) - 渐进式 JavaScript 框架，使用 Composition API 和 `<script setup>` 语法
- **TypeScript** [![Version](https://img.shields.io/badge/version-~5.9.3-blue)](#) - 为 JavaScript 添加静态类型检查，提升代码质量和可维护性
- **Vite** [![Version](https://img.shields.io/badge/version-7.3.1-blue)](#) - 下一代前端构建工具，提供快速的热更新和构建速度
- **Element Plus** [![Version](https://img.shields.io/badge/version-^2.13.2-blue)](#) - 基于 Vue 3 的桌面端组件库，提供丰富的 UI 组件
- **@element-plus/icons-vue** [![Version](https://img.shields.io/badge/version-^2.3.2-blue)](#) - Element Plus 图标库，提供丰富的 SVG 图标
- **Pinia** [![Version](https://img.shields.io/badge/version-^2.3.1-blue)](#) - Vue 官方推荐的状态管理库，轻量且易于使用
- **Vue Router** [![Version](https://img.shields.io/badge/version-^4.6.4-blue)](#) - Vue.js 的官方路由管理器，支持嵌套路由和动态路由
- **Axios** [![Version](https://img.shields.io/badge/version-^1.13.5-blue)](#) - 基于 Promise 的 HTTP 客户端，用于发起 API 请求
- **国际化 (i18n)** - 支持多语言，便于系统国际化部署

### 后端技术
- **Spring Boot 4** [![Version](https://img.shields.io/badge/version-4.0.2-blue)](#) - 用于快速构建基于 Spring 的应用程序
- **MyBatis** [![Version](https://img.shields.io/badge/version-3.0.5-blue)](#) - 持久层框架，简化数据库操作
- **MySQL Connector/J** [![Status](https://img.shields.io/badge/status-版本由SpringBoot自动管理-blue)](#) - MySQL 数据库连接驱动
- **Java JDK** [![Version](https://img.shields.io/badge/version-17-blue)](#) - Java 开发工具包

## 项目特点

- **现代化架构**：采用前后端分离设计，便于团队协作和独立部署
- **组件化开发**：使用 Vue 3 的组件化思想，提高代码复用性和可维护性
- **状态管理**：使用 Pinia 进行全局状态管理，统一数据流
- **响应式设计**：适配不同屏幕尺寸，支持移动端和桌面端访问
- **国际化支持**：内置多语言支持，便于全球化部署
- **代码规范**：遵循业界最佳实践，使用 TypeScript 提升代码质量

## 开发环境

- **Node.js** [![Version](https://img.shields.io/badge/version-v20.x-blue)](#) - JavaScript 运行时环境
- **ESLint** [![Version](https://img.shields.io/badge/version-v9.x-blue)](#) - JavaScript/TypeScript 代码检查工具
- **Prettier** [![Version](https://img.shields.io/badge/version-v3.x-blue)](#) - 代码格式化工具
- **Git** [![Version](https://img.shields.io/badge/version-v2.x-blue)](#) - 版本控制系统

## 未来规划

- **Redis** [![Status](https://img.shields.io/badge/status-待集成-yellow)](#) - 内存数据结构存储，可用作缓存和会话存储
- **Docker** [![Status](https://img.shields.io/badge/status-待集成-yellow)](#) - 容器化平台，便于应用部署和扩展
- **RabbitMQ** [![Status](https://img.shields.io/badge/status-待集成-yellow)](#) - 消息队列，支持异步处理和解耦
- **Spring Cloud** [![Status](https://img.shields.io/badge/status-待集成-yellow)](#) - 微服务架构解决方案
- 增加更多考勤管理功能
- 优化用户体验和界面设计
- 添加数据分析和报表功能
- 集成通知系统（邮件、短信等）
- 扩展移动端支持