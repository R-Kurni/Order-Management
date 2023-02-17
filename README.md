# Order Management

## Objectives

1. Register User
2. Login User
3. Read Order List
4. Create New Order

&nbsp;

## Release 0

Create 2 tables with the following details:

1. User:
   - email (required)
   - password (required)
2. Order:
   - name (required)
   - quantity (required)
   - price (required)
   - totalPrice (required)

&nbsp;

Relation (1 to Many):

```
1 User may have several Order.
```

&nbsp;

## Release 1

- Create register feature for User

**POST /register**  
Description : register new User

Request Body

```json
{
	"email": "string",
	"password": "string"
}
```

Response 200

```json
{
	"message": "Email <entered email address> successfully created."
}
```

Response 400

```json
{
	"message": "Email is required"
}
OR
{
    "message": "Invalid email format"
}
OR
{
    "message": "Email has already been used"
}
OR
{
    "message": "Password is required"
}
OR
{
    "message": "Password must be 6 - 18 characters"
}
```

&nbsp;

## Release 2

- Create login feature for User
- Create authentication for safety

**POST /login**  
Description : login for User

Request Body

```json
{
	"email": "string",
	"password": "string"
}
```

Response 200

```json
{
	"access_token": "string"
}
```

Response 400

```json
{
    "message": "Email is required"
}
OR
{
    "message": "Password is required"
}
```

Response 401

```json
{
	"message": "Invalid email/password"
}
```

&nbsp;

## Release 3

- Read Order List of the logged in User

**GET /orders**  
Description : Order List of the logged in User

Request Header

```json
{
	"access_token": "string"
}
```

Response 200

```json
[]
OR
[
  {
    "id": "integer",
    "name": "string",
    "quantity": "integer",
    "price": "integer",
    "totalPrice": "integer",
    "UserId": "integer",
    "createdAt": "string",
    "updatedAt": "string"
  },
  ...
]
```
