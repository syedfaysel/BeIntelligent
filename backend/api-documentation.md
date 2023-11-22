# API Documentation

Base url : `http://{host}:{port}/api/v1`  
i.e `http://localhost:4000/api/v1/`

**Available APIs:**

[Authentication](#auth-api)  
[Books APIs](#books-apis)

## Auth api

### signup

Endpoint: baseurl`/auth/signup`

<details>
<summary>Reqest body:</summary>
 
```json
{
    "username": "soumitra",
    "firstName": "Soumitra",
    "lastName": "Das",
    "email": "soumitra@gmail.com",
    "password": "********"
}
```
</details>

<details>
<summary>JSON Response:</summary>
 
```json
{
    "success": true,
    "message": "User created successfully",
    "user": {
        "username": "soumitra",
        "email": "soumitra@gmail.com"
    }
}
```
</details>

### login

Endpoint: baseurl`/auth/login`

<details>
<summary>Reqest body:</summary>
 
```json
{
    "email": "faysel@gmail.com",
    "password": "********"
}
```
</details>

<details>
<summary>JSON Response:</summary>
 
```json
{
    "message": "User logged in successfully",
    "success": true,
    "user": {
        "_id": "655d4a9281278104da2ce8e3",
        "username": "syedfaysel",
        "firstName": "Syed Faysel",
        "lastName": "Ahammad Rajo",
        "email": "faysel@gmail.com",
        "createdAt": "2023-11-22T00:25:54.715Z",
        "updatedAt": "2023-11-22T00:25:54.715Z",
        "__v": 0
    },
    "token": "jwt token"
}
```
</details>

## Books APIs

[get all books](#get-books)

### get-books

Endpoint:
