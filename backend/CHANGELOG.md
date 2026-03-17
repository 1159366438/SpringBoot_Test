## [unreleased]

### 🚀 Features

- *(log)* [**breaking**] 统一日志实现，替换所有System.out.println为SLF4J
- 用户注册功能（前端表单验证、后端数据存储）
- 添加性别选项到用户注册功能\n\n- 更新数据库表结构，添加gender字段\n- 更新User实体类，添加gender属性\n- 更新RegisterRequest DTO，添加gender字段\n- 更新MyBatis映射文件，添加gender字段支持\n- 更新UserService实现，处理性别字段\n- 更新前端注册页面，添加性别选择选项\n- 添加性别相关的常量定义
- 添加性别字段功能及相关优化\n\n- 添加性别字段到用户注册功能\n- 修复性别字段未正确传递到后端的问题\n- 消除硬编码值，使用常量替代\n- 优化登录页面，避免不必要的用户信息请求\n- 更新CHANGELOG文档
- *(swagger)* 添加完整的API文档注解和异常处理，集成SchemaSpy数据库文档

### 🚜 Refactor

- *(constant)* 将硬编码值替换为常量
- *(success-msg)* 将ResponseResult.success的消息改为常量
- 为后端Java文件添加标准文件头注释\n\n- 为所有Controller、Service、DAO、Entity、DTO、Config等类添加标准注释\n- 按照代码标准文档要求统一注释格式\n- 添加@author和@since标签

### 📚 Documentation

- 更新数据库文档和配置，统一数据库名称为attendance_system
