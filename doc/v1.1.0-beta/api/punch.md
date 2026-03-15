# v1.1.0-beta API 接口文档 - 打卡接口

## 3. 打卡相关接口

### 3.1 获取打卡记录（分页）
获取指定用户的打卡记录（支持分页）。

- **URL**: `/api/punch/record`
- **请求方式**: `GET`
- **认证方式**: JWT Token
- **请求参数**:

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| userId | int | 是 | 用户ID |
| page | int | 否 | 页码，默认为1 |
| size | int | 否 | 每页数量，默认为15 |

- **请求示例**:
```
GET /api/punch/record?userId=1&page=1&size=15
Authorization: Bearer <token>
```

- **响应示例**:
```json
{
  "code": 200,
  "msg": "success",
  "data": {
    "records": [
      {
        "id": 1,
        "userId": 1,
        "checkInTime": "2026-03-15 09:00:00",
        "checkInType": 1,
        "checkInStatus": 1,
        "checkInLocation": "办公室A座",
        "createTime": "2026-03-15 09:00:00"
      }
    ],
    "total": 1,
    "page": 1,
    "size": 15
  }
}
```

### 3.2 上班打卡
用户打卡接口，记录上下班打卡信息。

- **URL**: `/api/punch/in`
- **请求方式**: `POST`
- **认证方式**: JWT Token
- **请求体**:

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| userId | int | 是 | 用户ID |

- **请求示例**:
```json
POST /api/punch/in
Content-Type: application/json
Authorization: Bearer <token>

{
  "userId": 1
}
```

- **响应示例**:
```json
{
  "code": 200,
  "msg": "打卡成功",
  "data": null
}
```