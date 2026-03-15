# v1.1.0-beta API 接口文档 - 概述

<p align="center">
  <strong>版本：v1.1.0-beta</strong> | 
  <strong>最后更新：2026-03-15</strong> | 
  <strong>作者：开发团队</strong>
</p>

## 1. 概述

### 1.1 基本信息
- **协议**: HTTPS
- **域名**: `https://api.yourdomain.com`
- **版本**: v1.1.0-beta
- **字符编码**: UTF-8
- **内容格式**: JSON

### 1.2 公共响应结构
所有接口均遵循统一的响应格式：

```json
{
  "code": 200,
  "msg": "success",
  "data": {},
  "timestamp": "2026-03-15T10:00:00.000+00:00"
}
```

| 字段 | 类型 | 说明 |
|------|------|------|
| code | int | 响应码，200表示成功，其他表示不同错误 |
| msg | string | 响应消息，对响应码的简要说明 |
| data | object | 响应数据，具体内容根据接口而定 |
| timestamp | string | 响应时间戳 |

### 1.3 通用状态码
| 状态码 | 说明 |
|--------|------|
| 200 | 成功 |
| 400 | 参数错误 |
| 401 | 未授权 |
| 404 | 资源不存在 |
| 500 | 服务器内部错误 |

### 1.4 认证方式
- 使用 JWT Token 进行身份验证
- Token 通过请求头 Authorization 传递
- 格式：`Authorization: Bearer <token>`

### 1.5 安全说明
- 所有敏感数据传输使用 HTTPS 加密
- 密码等敏感信息需进行加密处理
- 防止 SQL 注入、XSS 等常见攻击

### 1.6 数据格式说明
- 日期时间格式：`yyyy-MM-dd HH:mm:ss`
- 数值精度：货币类型保留两位小数
- 字符串编码：UTF-8