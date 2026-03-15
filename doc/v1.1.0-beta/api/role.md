# v1.1.0-beta API 接口文档 - 角色接口

## 5. 权限管理相关接口

### 5.1 获取角色列表
获取系统中所有角色的列表。

- **URL**: `/api/role/list`
- **请求方式**: `GET`
- **认证方式**: JWT Token
- **请求参数**: 无
- **请求示例**:
```
GET /api/role/list
Authorization: Bearer <token>
```

- **响应示例**:
```json
{
  "code": 200,
  "msg": "success",
  "data": [
    {
      "id": 1,
      "name": "管理员",
      "code": "ADMIN",
      "description": "系统管理员，拥有最高权限",
      "status": 1,
      "createTime": "2026-03-15 10:00:00",
      "updateTime": "2026-03-15 10:00:00"
    },
    {
      "id": 2,
      "name": "普通用户",
      "code": "USER",
      "description": "普通用户，基本操作权限",
      "status": 1,
      "createTime": "2026-03-15 10:00:00",
      "updateTime": "2026-03-15 10:00:00"
    }
  ]
}
```

### 5.2 分配用户角色
为指定用户分配角色。

- **URL**: `/api/role/assign`
- **请求方式**: `POST`
- **认证方式**: JWT Token
- **请求体**:

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| userId | int | 是 | 用户ID |
| roleId | int | 是 | 角色ID |

- **请求示例**:
```json
POST /api/role/assign
Content-Type: application/json
Authorization: Bearer <token>

{
  "userId": 1,
  "roleId": 2
}
```

- **响应示例**:
```json
{
  "code": 200,
  "msg": "角色分配成功",
  "data": null
}
```

### 5.3 权限验证
验证用户是否具有指定权限。

- **URL**: `/api/role/check-permission`
- **请求方式**: `POST`
- **认证方式**: JWT Token
- **请求体**:

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| userId | int | 是 | 用户ID |
| permission | string | 是 | 权限标识符 |

- **请求示例**:
```json
POST /api/role/check-permission
Content-Type: application/json
Authorization: Bearer <token>

{
  "userId": 1,
  "permission": "user:create"
}
```

- **响应示例**:
```json
{
  "code": 200,
  "msg": "success",
  "data": {
    "hasPermission": true
  }
}
```

### 5.4 获取用户角色
获取指定用户的角色信息。

- **URL**: `/api/role/user-roles`
- **请求方式**: `GET`
- **认证方式**: JWT Token
- **请求参数**:

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| userId | int | 是 | 用户ID |

- **请求示例**:
```
GET /api/role/user-roles?userId=1
Authorization: Bearer <token>
```

- **响应示例**:
```json
{
  "code": 200,
  "msg": "success",
  "data": [
    {
      "id": 1,
      "name": "管理员",
      "code": "ADMIN",
      "description": "系统管理员，拥有最高权限"
    }
  ]
}
```