# Order Management

## Objectives

1. Register User
2. Login User
3. Create New Order
4. Read Order List

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

## Release 1

- Create register feature for User
- Buatlah otentikasi untuk pengamanan

**POST /login**  
Description : login for student

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
	"message": "Input email/password required"
}
```

Response 401

```json
{
	"message": "Invalid email/password"
}
```

&nbsp;

## Release 2

- Buatlah fitur pendaftaran kelas (Enrollment) agar student dapat mendaftarkan dirinya pada kelas yang diinginkan

**POST /enrollments/:courseId**

Description : create enrollment between logged student and course.  
Enrollment to 1 course by id (params : courseId).

Request Header

```json
{
	"access_token": "string"
}
```

Response 201

```json
{
	"message": "Success enroll to Course <course id>"
}
```

Response 401

```json
{
	"message": "Unauthorized"
}
```

Response 404

```json
{
	"message": "Course <course id> not found"
}
```

&nbsp;

**Note**

- Tanyakan kepada diri kalian, bagaimana hubungan antar tabel
- Pastikan kalian mengamankan REST API dengan otentikasi (Authentication)
