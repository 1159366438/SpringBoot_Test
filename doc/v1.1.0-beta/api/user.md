# v1.1.0-beta API 接口文档 - 用户接口

## 2. 用户相关接口

### 2.1 获取用户信息
获取指定用户的信息详情。

- **URL**: `/api/user/info`
- **请求方式**: `GET`
- **认证方式**: JWT Token (可选)
- **请求参数**:

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| userId | int | 否 | 用户ID，如果不传则获取当前登录用户信息 |

- **请求示例**:
```
GET /api/user/info?userId=1
Authorization: Bearer <token>
```

- **响应示例**:
```json
{
  "code": 200,
  "msg": "success",
  "data": {
    "id": 1,
    "username": "admin",
    "age": 25,
    "avatar": "https://example.com/avatar.jpg",
    "gender": 1,
    "createTime": "2026-03-15 10:00:00"
  }
}
```

### 2.2 用户登录
用户登录验证接口。

- **URL**: `/api/user/login`
- **请求方式**: `POST`
- **认证方式**: 无
- **请求体**:

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| username | string | 是 | 用户名 |
| password | string | 是 | 密码 |

- **请求示例**:
```json
POST /api/user/login
Content-Type: application/json

{
  "username": "admin",
  "password": "123456"
}
```

- **响应示例**:
```json
{
  "code": 200,
  "msg": "success",
  "data": {
    "user": {
      "id": 1,
      "username": "admin",
      "age": 25,
      "avatar": "",
      "gender": 0,
      "createTime": "2026-03-15 10:00:00"
    }
  }
}
```

### 2.3 用户登出
用户登出接口。

- **URL**: `/api/user/logout`
- **请求方式**: `POST`
- **认证方式**: JWT Token
- **请求参数**: 无
- **请求示例**:
```
POST /api/user/logout
Authorization: Bearer <token>
```

- **响应示例**:
```json
{
  "code": 200,
  "msg": "登出成功",
  "data": null
}
```

### 2.4 用户注册
用户注册接口。

- **URL**: `/api/user/register`
- **请求方式**: `POST`
- **认证方式**: 无
- **请求体**:

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| username | string | 是 | 用户名 |
| password | string | 是 | 密码 |
| confirmPassword | string | 是 | 确认密码 |
| age | int | 否 | 年龄 |
| avatar | string | 否 | 头像URL |
| gender | int | 否 | 性别（0-未知 1-男 2-女） |

- **请求示例**:
```json
POST /api/user/register
Content-Type: application/json

{
  "username": "newuser",
  "password": "123456",
  "confirmPassword": "123456",
  "age": 25,
  "avatar": "https://example.com/avatar.jpg",
  "gender": 1
}
```

- **响应示例**:
```json
{
  "code": 200,
  "msg": "注册成功",
  "data": {
    "id": 2,
    "username": "newuser",
    "age": 25,
    "avatar": "https://example.com/avatar.jpg",
    "gender": 1,
    "createTime": "2026-03-15 10:00:00"
  }
}
```