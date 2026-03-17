# 变更日志

## [unreleased]

### ✨ 新增功能

- 添加 v1.1.0-beta 版本文档
- 更新v1.1.0-beta版本文档，添加部门与权限管理相关内容
- 用户注册功能（前端表单验证、后端数据存储）
- 添加性别选项到用户注册功能\n\n- 更新数据库表结构，添加gender字段\n- 更新User实体类，添加gender属性\n- 更新RegisterRequest DTO，添加gender字段\n- 更新MyBatis映射文件，添加gender字段支持\n- 更新UserService实现，处理性别字段\n- 更新前端注册页面，添加性别选择选项\n- 添加性别相关的常量定义
- 添加性别字段功能及相关优化\n\n- 添加性别字段到用户注册功能\n- 修复性别字段未正确传递到后端的问题\n- 消除硬编码值，使用常量替代\n- 优化登录页面，避免不必要的用户信息请求\n- 更新CHANGELOG文档
- 添加完整的API文档注解和异常处理，集成SchemaSpy数据库文档
- 添加组织架构和部门管理页面

### 📝 文档更新

- 添加v1.0.1-beta发布说明
- 更新README.md中的版本信息至v1.1.0-beta
- 整理文档结构，更新变更日志和故障排除指南
- 整理文档结构，更新项目文档\n\n- 移动TROUBLESHOOTING.md到正确位置\n- 更新CHANGELOG.md到根目录\n- 更新代码标准文档\n- 更新项目计划文档
- 更新项目规则，添加CHANGELOG更新要求\n\n- 在Git提交规范中添加CHANGELOG更新规则\n- 在文档规范中强调CHANGELOG的重要性
- 更新CHANGELOG，添加后端Java文件标准注释记录
- 拆分API文档为模块化结构\n\n- 创建overview.md包含API概述和通用规范\n- 创建user.md包含用户相关接口\n- 创建punch.md包含打卡相关接口\n- 创建department.md包含部门管理接口\n- 创建role.md包含权限管理接口\n- 更新主api.md为目录式文档
- 更新数据库文档和配置，统一数据库名称为attendance_system
- 更新故障排除指南，完善git记录修改说明
- 恢复API文档文件
- 恢复数据库文档文件

### 🔧 重构与代码质量

- 更新项目规则和故障排除文档，调整日志目录结构
- 为后端Java文件添加标准文件头注释\n\n- 为所有Controller、Service、DAO、Entity、DTO、Config等类添加标准注释\n- 按照代码标准文档要求统一注释格式\n- 添加@author和@since标签
- 将UserInfo组件中的硬编码默认值替换为常量\n\n- 添加MENU_TEXT到USER_CONSTANTS.DEFAULT_VALUES\n- 使用USER_CONSTANTS.DEFAULT_VALUES.MENU_TEXT替换硬编码的'默认菜单'
- 按模块拆分数据库文档，完善数据库设计文档结构

### 🔨 杂项

- 更新前端文档，删除冗余README.md文件
- 删除不需要的日报文件
- 更新项目规则，添加中文提交信息要求
- 从git跟踪中移除.mvn和.trae目录
- 更新.gitignore以忽略.mvn和.trae目录

## [1.0.1-beta] - 2026-03-13

### ✨ 新增功能

- [**BREAKING**] 统一日志实现，替换所有System.out.println为SLF4J

### 📝 文档更新

- 更新v1.0.1版本功能详情

### 🔧 重构与代码质量

- 将硬编码值替换为常量
- 将ResponseResult.success的消息改为常量

## [1.0.0-beta] - 2026-03-12

