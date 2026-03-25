# Full-Stack Task Management System

A robust, decoupled Full-Stack Todo application built to demonstrate secure API development and modern frontend integration. This project features a Spring Boot RESTful API backend and a dynamic React.js frontend, utilizing JWT for secure, stateless authentication.

## 🏗️ Architecture & Tech Stack

**Frontend Interface:**
* **React.js** (Bootstrapped with Vite framework)
* **HTML5 & Modern CSS**
* **Fetch API** for asynchronous state management

**Backend API:**
* **Java 24**
* **Spring Boot 3.5.3**
* **Spring Security** (Custom JWT Filter Chain)
* **Spring Data JPA** (Hibernate ORM)

**Data Persistence:**
* **PostgreSQL**

---

## ✨ Core Features

* **Secure Authentication:** User registration and login protected by BCrypt password hashing and JSON Web Tokens (JWT).
* **Stateless API:** Fully decoupled architecture allowing the frontend and backend to scale independently.
* **CRUD Operations:** Complete Create, Read, Update, and Delete capabilities for task management.
* **Pagination Support:** Backend optimized to handle large datasets using Spring Data pageable requests.
* **Swagger/OpenAPI Integration:** Auto-generated API documentation for seamless testing and frontend integration.

---

## 🚀 Local Development Setup

Follow these steps to get a local copy up and running.

### 1. Database Configuration
This application requires a running instance of PostgreSQL.
1. Create a new PostgreSQL database on your local machine.
2. Navigate to `TodoBackend/src/main/resources/application.properties`.
3. Update the data source properties with your local database credentials. **(Do not commit your personal passwords to version control)**:
   ```properties
   spring.datasource.url=jdbc:postgresql://localhost:5432/<YOUR_DB_NAME>
   spring.datasource.username=<YOUR_DB_USERNAME>
   spring.datasource.password=<YOUR_DB_PASSWORD>
   ```

### 2. Backend Initialization (Spring Boot)

1. Open the `TodoBackend` directory in your preferred Java IDE (IntelliJ IDEA, VS Code, etc.).
2. Allow Maven to sync and download the required dependencies.
3. Run `TodoApplication.java`.
4. The server will initialize on `http://localhost:8080`.
5. *API Documentation:* Once the server is running, you can explore and test the endpoints visually by visiting `http://localhost:8080/swagger-ui.html`.

### 3. Frontend Initialization (React)

1. Open a new terminal instance and navigate to the frontend directory.
2. Install the required Node dependencies:
```bash
npm install
```

3. Boot up the Vite development server:
```bash
npm run dev
```

4. Access the frontend interface via the localhost port provided in your terminal (typically `http://localhost:5173`).

---

## 🔌 API Reference Guide

All API endpoints are prefixed with `/api/v1/todo` (except authentication routes) and require a valid JWT Bearer token in the `Authorization` header.

| HTTP Method | Endpoint | Description | Auth Required |
| --- | --- | --- | --- |
| `POST` | `/auth/register` | Register a new user | No |
| `POST` | `/auth/login` | Authenticate and retrieve JWT | No |
| `GET` | `/api/v1/todo` | Retrieve all tasks | Yes |
| `GET` | `/api/v1/todo/{id}` | Retrieve a specific task | Yes |
| `GET` | `/api/v1/todo/page` | Retrieve paginated tasks | Yes |
| `POST` | `/api/v1/todo/create` | Create a new task | Yes |
| `PUT` | `/api/v1/todo` | Update an existing task | Yes |
| `DELETE` | `/api/v1/todo/{id}` | Remove a task | Yes |

---

## 📝 License

Distributed under the MIT License. See `LICENSE` for more information.