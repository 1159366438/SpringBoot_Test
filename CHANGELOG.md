# 变更日志

## [1.1.0-alpha.1] - 2026-03-17

### ✨ 新增功能
- **部门与权限管理基础**
  - 添加 v1.1.0-beta 版本文档
  - 更新 v1.1.0-beta 版本文档，添加部门与权限管理相关内容
- **用户注册与信息完善**
  - 用户注册功能（前端表单验证、后端数据存储）
  - 性别选项支持：
    - 更新数据库表结构，添加 `gender` 字段
    - 更新 User 实体类、RegisterRequest DTO、MyBatis 映射文件
    - 更新前端注册页面，添加性别选择选项
    - 添加性别相关常量
- **API 文档与工具集成**
  - 添加完整的 API 文档注解和异常处理
  - 集成 SchemaSpy 自动生成数据库文档
- **组织架构页面**
  - 添加组织架构和部门管理页面
- **版本发布**
  - 发布 v1.1.0-alpha.1 版本，更新考勤术语

### 📝 文档更新
- 添加 v1.0.1-beta 发布说明
- 更新 README.md 中的版本信息至 v1.1.0-beta
- 整理文档结构：
  - 移动 TROUBLESHOOTING.md 到正确位置
  - 更新 CHANGELOG.md 到根目录
  - 更新代码标准文档
  - 更新项目计划文档
- 更新项目规则，添加 CHANGELOG 更新要求
- 更新 CHANGELOG，添加后端 Java 文件标准注释记录
- 拆分 API 文档为模块化结构：
  - 创建 `overview.md`（API 概述和通用规范）
  - 创建 `user.md`、`punch.md`、`department.md`、`role.md`
  - 更新主 `api.md` 为目录式文档
- 更新数据库文档和配置，统一数据库名称为 `attendance_system`
- 更新故障排除指南，完善 Git 记录修改说明
- 恢复 API 文档文件
- 恢复数据库文档文件

### 🔧 重构与代码质量
- 更新项目规则和故障排除文档，调整日志目录结构
- 为后端 Java 文件添加标准文件头注释：
  - Controller、Service、DAO、Entity、DTO、Config 等类
  - 添加 `@author` 和 `@since` 标签
- 将 UserInfo 组件中的硬编码默认值替换为常量
  - 添加 `MENU_TEXT` 到 `USER_CONSTANTS.DEFAULT_VALUES`
- 按模块拆分数据库文档，完善数据库设计文档结构

### 🔨 杂项
- 更新前端文档，删除冗余 README.md 文件
- 删除不需要的日报文件
- 更新项目规则，添加中文提交信息要求
- 从 Git 跟踪中移除 `.mvn` 和 `.trae` 目录
- 更新 `.gitignore` 以忽略 `.mvn` 和 `.trae` 目录

---

## [1.0.1-beta] - 2026-03-13

### ✨ 新增功能
- [**BREAKING**] 统一日志实现，替换所有 `System.out.println` 为 SLF4J

### 📝 文档更新
- 更新 v1.0.1 版本功能详情

### 🔧 重构与代码质量
- 将硬编码值替换为常量
- 将 `ResponseResult.success` 的消息改为常量

---

## [1.0.0-beta] - 2026-03-12

（首次发布，基础功能）