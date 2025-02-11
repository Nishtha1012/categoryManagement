### Project Setup and Run

#### 1. Clone the Repository

```bash
git clone {{REPOSITORY_URL}}
```

#### 2. Install Dependencies

Navigate to the project directory and install dependencies:

```bash
cd {{PROJECT_DIRECTORY}}
npm install
```

#### 3. Configure Environment Variables

Create a `.env` file in the root directory with the following values:

```env
BASE_URL={{BASE_URL}}
MONGO_URI={{MONGO_CONNECTION_URI}}
JWT_SECRET={{YOUR_JWT_SECRET_KEY}}
JWT_EXPIRATION_IN_MINUTES={{JWT_EXPIRATION_IN_MINUTES}}

```

#### 4. Run the Application

Start the server:

```bash
npm run dev
```

The server will be running on `http://localhost:{{PORT}}`.

## API Documentation

### Overview

This API provides authentication and category management functionalities. It includes user registration, login, and category CRUD operations.

### Base URL

```
{{BASE_URL}}
```

### Authentication

Some API endpoints require authentication. You must include the **authToken** in the cookies:

```
Cookie: authToken={{TOKEN}}
```

---

### API Endpoints

#### 1. User Authentication

##### Register User

**Endpoint:** `POST /api/auth/register`

**Request Body:**

```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

**Response:**

```json
{
  "_id": "67aaf125a8db5ecfe3981708",
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "__v": 0
}
```

##### Login User

**Endpoint:** `POST /api/auth/login`

**Request Body:**

```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

**Response:**

```json
{
  "_id": "67aaf125a8db5ecfe3981708",
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "__v": 0
}
```

---

### 2. Category Management

##### Create Category

**Endpoint:** `POST /api/category`

**Headers:**

```
Cookie: authToken={{TOKEN}}
```

**Request Body:**

```json
{
  "name": "Electronics",
  "status": "active"
}
```

**Response:**

```json
{
  "name": "Electronics",
  "status": "active",
  "_id": "67aaf49ce9272af8d3101797",
  "__v": 0
}
```

##### Get Categories

**Endpoint:** `GET /api/category`

**Response:**

```json
[
  {
    "id": "67aaf49ce9272af8d3101797",
    "name": "Electronics",
    "status": "active"
  }
]
```

##### Update Category

**Endpoint:** `PUT /api/category/{id}`

**Headers:**

```
Cookie: authToken={{TOKEN}}
```

**Request Body:**

```json
{
  "name": "Updated Electronics",
  "status": "inActive"
}
```

##### Delete Category

**Endpoint:** `DELETE /api/category/{id}`

**Headers:**

```
Cookie: authToken={{TOKEN}}
```

**Response:**

```json
{
  "_id": "67aaf49ce9272af8d3101797",
  "name": "asdfg",
  "status": "active",
  "parent": "67aaf13ea8db5ecfe398170d",
  "__v": 0
}
```

---

### Testing with Postman

1. **Import Postman Collection:** Use the provided JSON collection.
2. **Set Environment Variables:** `BASE_URL` and `TOKEN` (in cookies).
3. **Send Requests:** Start testing endpoints by sending requests.

---
