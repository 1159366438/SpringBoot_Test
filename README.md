# 考勤系统 (Attendance System) v1.0.0 内测版

[![Vue.js](https://img.shields.io/badge/Vue.js-3.5.25-4FC08D?logo=vuedotjs)](https://vuejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Spring Boot](https://img.shields.io/badge/Spring%20Boot-4.0.2-6DB33F?logo=springboot)](https://spring.io/projects/spring-boot)
[![MySQL](https://img.shields.io/badge/MySQL-8.0-4479A1?logo=mysql)](https://www.mysql.com/)
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)

基于前后端分离架构的现代化考勤管理系统，提供高效、可靠的员工打卡与考勤记录管理功能。适用于中小型企业及团队，支持快速部署与二次开发。

> 📅 发布日期：2026-03-12 | 📌 当前版本：v1.0.0 内测版

---

## 技术栈

### 前端
- **Vue.js 3** (Composition API + `<script setup>`) - 渐进式JavaScript框架
- **TypeScript** - 静态类型检查，提升代码健壮性
- **Vite** - 极速构建与热更新
- **Element Plus** - 企业级UI组件库
- **Pinia** - Vue官方推荐状态管理
- **Vue Router** - 官方路由管理器
- **Axios** - 基于Promise的HTTP客户端
- **国际化(i18n)** - 内置多语言支持

### 后端
- **Spring Boot 4** - 快速构建生产级应用
- **MyBatis** - 简化数据库操作的持久层框架
- **MySQL Connector** - 数据库驱动（版本由Spring Boot管理）
- **Java JDK 17** - 开发运行环境

### 开发工具
- **Node.js v20.x** - JavaScript运行时
- **ESLint v9.x** - 代码检查
- **Prettier v3.x** - 代码格式化
- **Git v2.x** - 版本控制
- **Maven v3.8+** - 项目构建

---

## 核心特性

- ✨ **现代化架构**：前后端分离，独立开发与部署，易于扩展
- 🧩 **组件化开发**：Vue 3 组件复用，提升开发效率
- 🗂️ **统一状态管理**：Pinia 集中管理应用状态
- 📱 **响应式设计**：完美适配桌面与移动设备
- 🌐 **国际化支持**：多语言内置，满足全球化需求
- 🔒 **安全可靠**：基于JWT的身份验证，数据加密传输

---

## 快速开始

### 环境准备
- Node.js (v20+)
- Java JDK (v17+)
- Maven (v3.8+)
- MySQL (v8.0+)

### 克隆项目
```bash
git clone https://github.com/1159366438/attendance-system.git
cd attendance-system
```

### 后端启动
```bash
cd backend
# 使用Maven运行Spring Boot应用
mvn spring-boot:run
```
后端服务默认启动在 `http://localhost:8080`

### 前端启动
```bash
cd frontend/cock-vue3-vite
npm install          # 安装依赖
npm run dev          # 启动开发服务器
```
前端开发服务器默认运行在 `http://localhost:5173`

### 数据库初始化
1. 确保MySQL服务已启动，并创建数据库：
```sql
CREATE DATABASE IF NOT EXISTS `mydatabase` 
  DEFAULT CHARACTER SET utf8mb4 
  COLLATE utf8mb4_unicode_ci;
```
2. 执行初始化脚本：
```bash
mysql -u [用户名] -p mydatabase < backend/src/main/resources/schema.sql
```
或直接在MySQL客户端运行 `schema.sql` 中的SQL语句。

### 登录系统
- 默认管理员账号：`admin` / `123456`（BCrypt加密）

---

## 项目结构

```
attendance-system/
├── backend/                           # Spring Boot后端
│   ├── src/main/
│   │   ├── java/com/example/
│   │   │   ├── common/                # 通用工具类
│   │   │   ├── config/                 # 配置类（跨域、安全等）
│   │   │   ├── controller/              # REST API控制器
│   │   │   ├── dao/                     # 数据访问接口
│   │   │   ├── dto/                     # 数据传输对象
│   │   │   ├── entity/                  # 实体类
│   │   │   ├── service/                  # 业务逻辑层
│   │   │   └── PunchCardApplication.java # 启动类
│   │   └── resources/
│   │       ├── mapper/                   # MyBatis XML映射
│   │       ├── application.yml           # 应用配置
│   │       └── schema.sql                 # 数据库初始化脚本
│   └── pom.xml                           # Maven依赖管理
├── frontend/                         # Vue 3前端
│   └── cock-vue3-vite/
│       ├── src/                       # 源代码
│       ├── public/                     # 静态资源
│       ├── package.json                 # 项目配置
│       └── vite.config.js               # Vite配置
├── doc/                               # 项目文档
│   ├── api.md                          # API接口文档
│   ├── database.md                      # 数据库设计
│   └── plan.md                          # 开发计划
├── .gitignore
└── README.md                          # 本文件
```

---

## 版本规划

| 版本 | 类型 | 主要功能 | 计划时间 |
|------|------|----------|----------|
| v1.0.0 | 内测版 | 基础打卡、用户登录、分页查询 | 当前 |
| v1.1.0 | 内测版 | 部门与权限管理（RBAC） | 待定 |
| v1.2.0 | 内测版 | 打卡规则 + 地图集成 | 待定 |
| v1.3.0 | 内测版 | 增强查询 + Excel导出 | 待定 |
| v1.4.0 | 内测版 | Redis缓存 + Docker部署 | 待定 |
| v1.5.0 | 内测版 | 移动端适配（PWA） | 待定 |
| v2.0.0 | 正式版 | 全功能稳定版 | 待定 |

---

## 待集成技术

- [ ] Redis - 缓存与会话管理
- [ ] Docker - 容器化部署
- [ ] RabbitMQ - 消息队列
- [ ] Spring Cloud - 微服务架构

---

## 贡献指南

欢迎贡献代码或提出建议！请遵循以下步骤：
1. Fork 本仓库
2. 创建您的特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交您的修改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开一个 Pull Request

---

## 许可证

本项目基于 [MIT 许可证](LICENSE) 开源，您可以自由使用、修改和分发。

---

## 联系方式

如有任何问题或建议，请通过 [GitHub Issues](https://github.com/1159366438/attendance-system/issues) 联系我们。
