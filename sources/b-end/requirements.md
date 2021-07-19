# List of Endpoint
## POST /register

### Request
- username: String
- password: String

### Response
#### 201 Created
```json
{
  "code": 201,
  "data": "success create user",
  "user_id": Integer
}
```

#### 400 Bad Request
```json
{
  "code": 400,
  "msg": "Bad Request"
}
```

## POST /login

### Request
- username: String
- password: String

### Response
#### 200 OK
```json
{
  "code": 200,
  "data": {
    "access_token": "<access_token>"
  }
}
```

#### 400 Bad Request
```json
{
  "code": 400,
  "msg": "Invalid Login"
}
```

## GET /product

### Headers
- access_token: <access_token>

### Response
#### 200 OK
```json
{
  "code": 200,
  "data": {
    "products": [
      {
        "id": 1,
        "name": "Something Wicked",
        "stock": 25,
        "price": 15000
      }
    ]
  }
}
```

#### 401 Unauthorized
```json
{
  "code": 401,
  "msg": "Unauthorized"
}
```