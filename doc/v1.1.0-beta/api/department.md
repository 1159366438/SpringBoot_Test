# v1.1.0-beta API 接口文档 - 部门接口

## 4. 部门管理相关接口

### 4.1 获取部门列表
获取系统中所有部门的列表。

- **URL**: `/api/department/list`
- **请求方式**: `GET`
- **认证方式**: JWT Token
- **请求参数**: 无
- **请求示例**:
```
GET /api/department/list
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
      "name": "技术部",
      "description": "负责技术研发工作",
      "parentId": 0,
      "level": 1,
      "orderNum": 1,
      "status": 1,
      "createTime": "2026-03-15 10:00:00",
      "updateTime": "2026-03-15 10:00:00"
    }
  ]
}
```

### 4.2 创建部门
创建新的部门。

- **URL**: `/api/department/create`
- **请求方式**: `POST`
- **认证方式**: JWT Token
- **请求体**:

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| name | string | 是 | 部门名称 |
| description | string | 否 | 部门描述 |
| parentId | int | 否 | 父部门ID，顶级部门为0 |
| orderNum | int | 否 | 排序号 |

- **请求示例**:
```json
POST /api/department/create
Content-Type: application/json
Authorization: Bearer <token>

{
  "name": "研发部",
  "description": "负责产品研发",
  "parentId": 1,
  "orderNum": 1
}
```

- **响应示例**:
```json
{
  "code": 200,
  "msg": "创建成功",
  "data": {
    "id": 2,
    "name": "研发部",
    "description": "负责产品研发",
    "parentId": 1,
    "level": 2,
    "orderNum": 1,
    "status": 1,
    "createTime": "2026-03-15 10:00:00"
  }
}
```

### 4.3 更新部门信息
更新部门信息。

- **URL**: `/api/department/update`
- **请求方式**: `PUT`
- **认证方式**: JWT Token
- **请求体**:

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| id | int | 是 | 部门ID |
| name | string | 否 | 部门名称 |
| description | string | 否 | 部门描述 |
| parentId | int | 否 | 父部门ID |
| orderNum | int | 否 | 排序号 |

- **请求示例**:
```json
PUT /api/department/update
Content-Type: application/json
Authorization: Bearer <token>

{
  "id": 2,
  "name": "软件研发部",
  "description": "负责软件产品研发"
}
```

- **响应示例**:
```json
{
  "code": 200,
  "msg": "更新成功",
  "data": null
}
```

### 4.4 删除部门
删除指定部门。

- **URL**: `/api/department/delete`
- **请求方式**: `DELETE`
- **认证方式**: JWT Token
- **请求参数**:

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| id | int | 是 | 部门ID |

- **请求示例**:
```
DELETE /api/department/delete?id=2
Authorization: Bearer <token>
```

- **响应示例**:
```json
{
  "code": 200,
  "msg": "删除成功",
  "data": null
}
```