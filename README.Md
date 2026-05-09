<p align="center">
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=700&size=28&pause=1000&color=DB4C3F&center=true&vCenter=true&width=700&lines=ToDoist;Full-Stack+%7C+JWT+%7C+Cloud+Deployed+%F0%9F%9A%80" alt="Typing SVG" />
</p>

<p align="center">
  <a href="https://spring-react-to-do-gl2cyoppe-kk-af3453da.vercel.app">
    <img src="https://img.shields.io/badge/Frontend-Live%20on%20Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Frontend Live" />
  </a>
  <a href="https://springreacttodobykk-50040626068.development.catalystappsail.in">
    <img src="https://img.shields.io/badge/Backend-Live%20on%20Zoho-E42527?style=for-the-badge&logo=zoho&logoColor=white" alt="Backend Live" />
  </a>
  <a href="https://github.com/KARTHIKAKRISHNA123/Spring-React-ToDo-NM">
    <img src="https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
  </a>
  <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="License" />
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Spring%20Boot-3.4.4-6DB33F?style=flat-square&logo=springboot&logoColor=white" />
  <img src="https://img.shields.io/badge/Java-17-ED8B00?style=flat-square&logo=openjdk&logoColor=white" />
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black" />
  <img src="https://img.shields.io/badge/Vite-8-646CFF?style=flat-square&logo=vite&logoColor=white" />
  <img src="https://img.shields.io/badge/Tailwind%20CSS-4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" />
  <img src="https://img.shields.io/badge/PostgreSQL-Supabase-4169E1?style=flat-square&logo=postgresql&logoColor=white" />
  <img src="https://img.shields.io/badge/JWT-Auth-000000?style=flat-square&logo=jsonwebtokens&logoColor=white" />
</p>

---

> **Built by Karthika Krishna M** — A hands-on deep dive into Spring Boot, REST APIs, JWT Security, Cloud Deployment, and DevOps — from zero knowledge to production. From a local project in Alangulam, Tenkasi, Tamil Nadu to a live, globally deployed distributed system.

---

## 🌐 Live Deployment

| Service | Platform | URL |
|---|---|---|
| **Frontend** | ![Vercel](https://img.shields.io/badge/Vercel-000?logo=vercel&logoColor=white) | https://spring-react-to-do-gl2cyoppe-kk-af3453da.vercel.app |
| **Backend** | ![Zoho](https://img.shields.io/badge/Zoho-E42527?logo=zoho&logoColor=white) | https://springreacttodobykk-50040626068.development.catalystappsail.in |
| **Database** | ![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?logo=supabase&logoColor=white) | PostgreSQL — Mumbai Region (ap-south-1) |

---

## 📋 Table of Contents

1. [Project Overview](#1-project-overview)
2. [Live Architecture](#2-live-architecture)
3. [Tech Stack — A to Z](#3-tech-stack--a-to-z)
4. [Backend Deep Dive](#4-backend-deep-dive)
5. [Frontend Deep Dive](#5-frontend-deep-dive)
6. [API Reference](#6-api-reference)
7. [Database Strategy](#7-database-strategy)
8. [Security — JWT & Spring Security](#8-security--jwt--spring-security)
9. [DevOps & Cloud Deployment](#9-devops--cloud-deployment)
10. [The CORS Battle — 24 Hours of Debugging](#10-the-cors-battle--24-hours-of-debugging)
11. [Learning Journey — Spring Boot from Zero](#11-learning-journey--spring-boot-from-zero)
12. [Known Issues & Fixes](#12-known-issues--fixes)
13. [Local Development Setup](#13-local-development-setup)
14. [Architectural Diagrams](#14-architectural-diagrams)
15. [Project Status](#15-project-status)

---

## 1. Project Overview

This is a **production-grade, full-stack task management application** built from scratch — not a tutorial clone. It simulates the architecture of a real-world distributed system with:

- A **Spring Boot REST API** serving as the backend engine
- A **React + Vite frontend** with Todoist-inspired dark mode UI and Google Labs-inspired 3D bento grid cards
- **JWT stateless authentication** for secure, scalable user sessions
- **Supabase PostgreSQL** as the cloud database
- Deployed on **Zoho Catalyst AppSail** (backend) and **Vercel** (frontend)

The project began as a local "Hello World" Spring Boot app and evolved into a live, globally accessible distributed system — a journey that included 24+ hours of deployment debugging, CORS battles, database migrations, and cloud infrastructure configuration.

---

## 2. Live Architecture

```mermaid
flowchart LR
    A[User Browser\nVercel Frontend]
    B[Zoho Catalyst\nAppSail\nSpring Boot Java 17]
    C[(Supabase\nPostgreSQL\nMumbai ap-south-1)]

    A -->|HTTPS + JWT Bearer Token| B
    B -->|JDBC SSL Port 6543\nPooler Mode| C
    C -->|Query Results| B
    B -->|JSON Response| A
```

```mermaid
flowchart TD
    A[Vercel\nReact Frontend\nTailwind + Framer Motion]
    B[Zoho Catalyst AppSail\nSpring Boot 3.4.4\nJava 17\nPort assigned dynamically]
    C[Supabase\nPostgreSQL Cloud\nMumbai Region]
    D[Zoho Auth Gateway\nCORS Whitelist\nVercel URL approved]

    A -->|POST /auth/login\nPOST /auth/register| B
    A -->|GET POST PUT DELETE\n/api/v1/toDo/**\nAuthorization: Bearer token| B
    B -->|Preflight OPTIONS passes\nvia Zoho Outer Gate| D
    D --> A
    B -->|HikariCP Connection Pool\nSSL + Transaction Mode| C
```

---

## 3. Tech Stack — A to Z

### 3.1 Backend

<p align="left">
  <img src="https://img.shields.io/badge/Java-17-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white" />
  <img src="https://img.shields.io/badge/Spring%20Boot-3.4.4-6DB33F?style=for-the-badge&logo=springboot&logoColor=white" />
  <img src="https://img.shields.io/badge/Spring%20Security-6DB33F?style=for-the-badge&logo=springsecurity&logoColor=white" />
  <img src="https://img.shields.io/badge/Spring%20Data%20JPA-6DB33F?style=for-the-badge&logo=spring&logoColor=white" />
  <img src="https://img.shields.io/badge/Hibernate-59666C?style=for-the-badge&logo=hibernate&logoColor=white" />
  <img src="https://img.shields.io/badge/Maven-C71A36?style=for-the-badge&logo=apachemaven&logoColor=white" />
  <img src="https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white" />
  <img src="https://img.shields.io/badge/Lombok-BC4521?style=for-the-badge&logo=lombok&logoColor=white" />
</p>

| Package | Full Form | Why We Use It |
|---|---|---|
| ![Spring](https://img.shields.io/badge/-spring--boot--starter--web-6DB33F?logo=springboot&logoColor=white) | Spring Web MVC Starter | REST API support via `@RestController`. Includes embedded Apache Tomcat. |
| ![Spring](https://img.shields.io/badge/-spring--boot--starter--data--jpa-6DB33F?logo=spring&logoColor=white) | Spring Data JPA Starter | JPA = Java Persistence API. ORM via Hibernate. Write Java objects instead of SQL. |
| ![Spring](https://img.shields.io/badge/-spring--boot--starter--security-6DB33F?logo=springsecurity&logoColor=white) | Spring Security Starter | JWT filter chain, CORS, BCrypt hashing, route protection. |
| ![Spring](https://img.shields.io/badge/-spring--boot--starter--validation-6DB33F?logo=spring&logoColor=white) | Bean Validation Starter | `@NotBlank`, `@NotNull`, `@Email` on entity fields. |
| ![PostgreSQL](https://img.shields.io/badge/-postgresql-4169E1?logo=postgresql&logoColor=white) | PostgreSQL JDBC Driver | Connects Spring Boot to PostgreSQL via JDBC. |
| ![JWT](https://img.shields.io/badge/-jjwt--api%20%2F%20impl%20%2F%20jackson-000000?logo=jsonwebtokens&logoColor=white) | Java JWT Library (JJWT) | Generates, signs, validates JWT tokens using HS256. |
| ![Lombok](https://img.shields.io/badge/-lombok-BC4521?logo=lombok&logoColor=white) | Project Lombok | `@Data`, `@Builder`, `@NoArgsConstructor` — eliminates boilerplate. |

### 3.2 Frontend

<p align="left">
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black" />
  <img src="https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white" />
  <img src="https://img.shields.io/badge/Tailwind%20CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" />
  <img src="https://img.shields.io/badge/Framer%20Motion-12-0055FF?style=for-the-badge&logo=framer&logoColor=white" />
  <img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white" />
  <img src="https://img.shields.io/badge/TanStack%20Query-FF4154?style=for-the-badge&logo=reactquery&logoColor=white" />
  <img src="https://img.shields.io/badge/React%20Router-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white" />
  <img src="https://img.shields.io/badge/React%20Hook%20Form-EC5990?style=for-the-badge&logo=reacthookform&logoColor=white" />
</p>

| Package | Full Form | Why We Use It |
|---|---|---|
| ![React](https://img.shields.io/badge/-React%2019-61DAFB?logo=react&logoColor=black) | React JavaScript Library | Component-based UI. Entire frontend is isolated, reusable components. |
| ![Vite](https://img.shields.io/badge/-Vite%208-646CFF?logo=vite&logoColor=white) | Vite Build Tool | Lightning-fast dev server with HMR. Much faster than Create React App. |
| ![Tailwind](https://img.shields.io/badge/-Tailwind%20CSS%204-06B6D4?logo=tailwindcss&logoColor=white) | Tailwind CSS Framework | Utility-first — styles are class names inside JSX. No separate CSS files. |
| ![Framer](https://img.shields.io/badge/-Framer%20Motion%2012-0055FF?logo=framer&logoColor=white) | Framer Motion | 3D card tilts, staggered entrance animations, spring physics. |
| ![Axios](https://img.shields.io/badge/-Axios-5A29E4?logo=axios&logoColor=white) | Axios HTTP Client | Interceptors auto-attach JWT token to every request. |
| ![TanStack](https://img.shields.io/badge/-TanStack%20Query%205-FF4154?logo=reactquery&logoColor=white) | TanStack Query | Server state management. Replaces `useEffect` for API calls. |
| ![Router](https://img.shields.io/badge/-React%20Router%207-CA4245?logo=reactrouter&logoColor=white) | React Router DOM | Client-side routing between pages without reloads. |
| ![HookForm](https://img.shields.io/badge/-React%20Hook%20Form%207-EC5990?logo=reacthookform&logoColor=white) | React Hook Form | Form validation without re-rendering on every keystroke. |
| ![Lucide](https://img.shields.io/badge/-Lucide%20React-F56040?logo=lucide&logoColor=white) | Lucide React Icons | SVG icons — Trash2, Edit2, LogOut, Plus, Check, RotateCcw. |
| ![Toast](https://img.shields.io/badge/-react--hot--toast-FF6154?logo=react&logoColor=white) | React Hot Toast | Toast notifications for login, register, CRUD feedback. |

### 3.3 DevOps & Infrastructure

<p align="left">
  <img src="https://img.shields.io/badge/Zoho%20Catalyst-E42527?style=for-the-badge&logo=zoho&logoColor=white" />
  <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" />
  <img src="https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white" />
  <img src="https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white" />
  <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" />
  <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" />
  <img src="https://img.shields.io/badge/IntelliJ%20IDEA-000000?style=for-the-badge&logo=intellijidea&logoColor=white" />
</p>

| Tool | Full Form | Purpose |
|---|---|---|
| ![Maven](https://img.shields.io/badge/-Maven-C71A36?logo=apachemaven&logoColor=white) | Apache Maven Wrapper | Java build tool. Compiles, resolves dependencies, packages JAR. |
| ![Zoho](https://img.shields.io/badge/-Zoho%20Catalyst%20AppSail-E42527?logo=zoho&logoColor=white) | Zoho Cloud Platform | Backend hosting. Dynamic ports. 10-second startup window. |
| ![Vercel](https://img.shields.io/badge/-Vercel-000000?logo=vercel&logoColor=white) | Vercel Deployment Platform | Frontend hosting. Auto-deploys on GitHub push. |
| ![Supabase](https://img.shields.io/badge/-Supabase-3ECF8E?logo=supabase&logoColor=white) | Supabase Cloud Database | Managed PostgreSQL. Mumbai region. Transaction pooler port 6543. |
| ![HikariCP](https://img.shields.io/badge/-HikariCP-336791?logo=postgresql&logoColor=white) | HikariCP Connection Pool | Spring Boot's default JDBC pool. Manages Supabase connections. |

---

## 4. Backend Deep Dive

### 4.1 Project Structure

```
com.kk.HelloWorld/
├── HelloWorldApplication.java      @SpringBootApplication — Entry point
├── JwtFilter.java                  OncePerRequestFilter — Validates JWT on every request
│
├── config/
│   ├── SecurityConfig.java         Nuclear CORS Filter + JWT Security Chain
│   └── ServerPortCustomizer.java   Reads X_ZOHO_CATALYST_LISTEN_PORT env variable
│
├── controller/
│   ├── AuthController.java         POST /auth/register, POST /auth/login
│   ├── HealthController.java       GET / — Zoho health check endpoint
│   ├── ToDoController.java         Full CRUD — /api/v1/toDo/**
│   ├── HelloWorldController.java   GET /hello — test endpoint
│   └── KKController.java           GET /kk — test endpoint
│
├── models/
│   ├── ToDo.java                   @Entity — todo table
│   └── User.java                   @Entity — user_table
│
├── repository/
│   ├── ToDoRepository.java         extends JpaRepository<ToDo, Long>
│   └── UserRepository.java         extends JpaRepository<User, Long>
│
├── service/
│   ├── ToDoService.java            CRUD business logic + pagination
│   └── UserService.java            User creation
│
└── utils/
    └── JwtUtil.java                HS256 token generation + validation
```

### 4.2 The 3-Tier Layered Architecture

```mermaid
flowchart TD
    A[Client / Browser Request]

    subgraph Presentation Layer
        B[Controller\nHandles HTTP Requests & Responses]
    end

    subgraph Service Layer
        C[Service\nBusiness Logic Processing]
    end

    subgraph Persistence Layer
        D[Repository / DAO\nDatabase Operations]
        E[(Database)]
    end

    A --> B
    B --> C
    C --> D
    D --> E
    E --> D
    D --> C
    C --> B
    B --> A
```

**Key Rule**: Layers never skip each other. Controller → Service → Repository → Database. Always.

### 4.3 Spring Core Concepts Applied

**Dependency Injection:**
```java
@Service
public class ToDoService {
    @Autowired
    private ToDoRepository toDoRepository; // Spring injects — not new ToDoRepository()
}
```

**Open/Closed Principle:**
- Switching REST → GraphQL? Only change the Controller layer.
- Switching PostgreSQL → MongoDB? Only change the Repository layer.
- Switching JWT → OAuth? Only change SecurityConfig + JwtFilter.

### 4.4 Maven Build Tool

```mermaid
flowchart LR
    A[pom.xml\nDependency Declaration]
    B[Maven Repository\nmvnrepository.com]
    C[Local .m2 Cache]
    D[target/ folder\nCompiled .class files]
    E[HelloWorld-0.0.1-SNAPSHOT.jar\nDeployable artifact]

    A --> B
    B --> C
    C --> D
    D --> E
```

| Command | What It Does |
|---|---|
| `./mvnw clean` | Deletes `target/` folder |
| `./mvnw compile` | Compiles Java source to `.class` bytecode |
| `./mvnw clean package -DskipTests` | Builds final JAR, skips tests |
| `Ctrl+Shift+O` in IntelliJ | Reloads Maven — downloads new dependencies |

### 4.5 REST API — HTTP Methods

```mermaid
flowchart TD
    A[HTTP Request Types]
    A --> B[GET\nRetrieve Data]
    A --> C[POST\nCreate New Resource]
    A --> D[PUT\nUpdate Entire Resource]
    A --> E[PATCH\nUpdate Partial Resource]
    A --> F[DELETE\nRemove Resource]
```

> Before REST there was **SOAP** (Simple Object Access Protocol) — complex XML-based. REST uses simple URLs + HTTP methods.

### 4.6 Spring Data JPA — ORM Layer

```mermaid
flowchart TD
    A[Application Service Layer]
    B[Spring Data JPA]
    C[Repository Interface\nextends JpaRepository]
    D[ORM Mapping\nJPA / Hibernate]
    E[(Relational Database\nPostgreSQL / H2)]

    A --> B
    B --> C
    C --> D
    D --> E
    E --> D
    D --> C
    C --> B
    B --> A
```

| Annotation | Purpose |
|---|---|
| `@Entity` | Maps Java class to a database table |
| `@Table(name="user_table")` | Overrides default table name |
| `@Id` | Marks the primary key |
| `@GeneratedValue` | Auto-increments ID on insert |
| `@NotBlank` | Field cannot be null, empty, or whitespace |
| `@NotNull` | Field cannot be null (for Boolean types) |
| `@Email` | Validates email format |

### 4.7 Dynamic Port — ServerPortCustomizer

Zoho Catalyst assigns a random port on every startup via environment variable:

```java
@Configuration
public class ServerPortCustomizer
    implements WebServerFactoryCustomizer<ConfigurableServletWebServerFactory> {
    @Override
    public void customize(ConfigurableServletWebServerFactory factory) {
        String port = System.getenv("X_ZOHO_CATALYST_LISTEN_PORT");
        if (port != null) factory.setPort(Integer.parseInt(port));
        else factory.setPort(8081); // local fallback
    }
}
```

---

## 5. Frontend Deep Dive

### 5.1 Project Structure

```
react-todo-frontend/
├── index.html                    Single HTML file — id="root" (not id="app"!)
├── vite.config.js                plugins: [react(), tailwindcss()] — both required
├── package.json
│
└── src/
    ├── main.jsx                  Root — mounts React to #root
    ├── App.jsx                   React Router + TanStack Query + Toaster setup
    ├── index.css                 Tailwind @import + @theme dark mode variables
    │
    ├── api/
    │   ├── axios.js              baseURL from VITE_API_BASE_URL env var + JWT interceptor
    │   └── todoService.js        getAllTodos, createTodo, updateTodo, deleteTodo
    │
    ├── components/
    │   ├── layout/
    │   │   ├── AppLayout.jsx     Flex container — Sidebar + Main content
    │   │   ├── Header.jsx        Todoist logo + red Logout button
    │   │   └── Sidebar.jsx       Left nav — Inbox, Today links
    │   └── todos/
    │       ├── TaskList.jsx      Bento grid — maps todos → TaskItem cards
    │       └── TaskItem.jsx      Google Labs 3D card — tilt, hover, edit, delete
    │
    ├── hooks/
    │   └── useTodos.js           TanStack Query — useQuery + useMutation
    │
    └── pages/
        ├── Dashboard.jsx         Main authenticated view
        ├── Login.jsx             React Hook Form + toast notifications
        └── Register.jsx          React Hook Form + toast notifications
```

### 5.2 Data Flow — From Click to Database

```mermaid
flowchart LR
    A[User adds task\nTaskList.jsx]
    B[useTodos hook\naddTodoMutation]
    C[todoService.createTodo]
    D[axios.js\nAdds Bearer JWT header]
    E[Zoho AppSail\nSpring Boot]
    F[JwtFilter\nvalidates token]
    G[ToDoController\nPOST /api/v1/toDo/create]
    H[ToDoService]
    I[ToDoRepository\n.save]
    J[(Supabase\nPostgreSQL)]

    A --> B --> C --> D -->|HTTPS| E
    E --> F --> G --> H --> I --> J
    J -->|saved entity| I
    I -->|201 Created| G
    G -->|JSON response| E
    E -->|response| D
    D -->|invalidateQueries| B
    B -->|re-fetch + re-render| A
```

### 5.3 Tailwind Dark Mode Theme

```css
@theme {
  --color-background: #1f1f1f;
  --color-foreground: #ffffff;
  --color-primary: #db4c3f;        /* Todoist signature red */
  --color-secondary: #383838;
  --color-muted: #2c2c2c;
  --color-muted-foreground: #a8a8a8;
  --color-border: #363636;
  --color-card: #2c2c2c;
  --sidebar-background: #282828;
}
```

### 5.4 Framer Motion Animations

```mermaid
flowchart TD
    A[TaskItem Animations]
    A --> B[Staggered Waterfall Entrance\nstaggerChildren: 0.1s delay]
    A --> C[3D Tilt on Hover\nuseMotionValue x/y\nrotateX / rotateY via useTransform]
    A --> D[Magnetic Focus\nhovered card: scale 1.03, y -12\nothers: opacity 0.3, pointer-events none]
    A --> E[Spring Slide-in\nstiffness 400 damping 30]
    A --> F[Exit Animation\nopacity 0 scale 0.5]
    A --> G[Tap Feedback\nwhileTap scale 0.96]
```

---

## 6. API Reference

All protected endpoints require `Authorization: Bearer <token>` header.

| Method | Endpoint | Auth | Description | Response |
|---|---|---|---|---|
| `GET` | `/` | No | Zoho health check | `200 Backend is Live!` |
| `POST` | `/auth/register` | No | Register new user | `201 Created` / `409 Conflict` |
| `POST` | `/auth/login` | No | Login — returns JWT | `200 {token: "..."}` |
| `GET` | `/api/v1/toDo` | ✅ Yes | Get all todos | `200 List<ToDo>` |
| `GET` | `/api/v1/toDo/{id}` | ✅ Yes | Get specific todo | `200 ToDo` / `404` |
| `GET` | `/api/v1/toDo/page?page=0&size=5` | ✅ Yes | Paginated todos | `200 Page<ToDo>` |
| `POST` | `/api/v1/toDo/create` | ✅ Yes | Create new todo | `201 ToDo` |
| `PUT` | `/api/v1/toDo` | ✅ Yes | Update todo | `200 ToDo` |
| `DELETE` | `/api/v1/toDo/{id}` | ✅ Yes | Delete todo | `200 String` |

**ToDo entity schema:**
```json
{
  "id": 1,
  "title": "Complete Spring Boot deployment",
  "isCompleted": false
}
```

---

## 7. Database Strategy

```mermaid
flowchart LR
    A[Development Phase]
    B[H2 In-Memory DB\njdbc:h2:mem:tododb\nZero install\nData resets on restart]
    C[Testing Phase\nLocal PostgreSQL\nlocalhost:5433/todo]
    D[Production Phase]
    E[Supabase Cloud PostgreSQL\nMumbai Region ap-south-1\nPooler Port 6543\nSSL Required]

    A --> B --> C --> D --> E
```

Switching between databases = **3 lines in `application.properties`**. All `@Entity` classes stay the same. This is JPA abstraction.

### Supabase Connection

```properties
spring.datasource.url=jdbc:postgresql://aws-1-ap-south-1.pooler.supabase.com:6543/postgres?sslmode=require&prepareThreshold=0
```

| Parameter | Reason |
|---|---|
| **Port 6543** | Transaction Pooler — required for cloud-to-cloud |
| **`sslmode=require`** | Mandatory for Supabase |
| **`prepareThreshold=0`** | Disables prepared statements for pooler compatibility |
| **Mumbai region** | Closest to Zoho Catalyst Chennai — minimum latency |

---

## 8. Security — JWT & Spring Security

### Login Flow

```mermaid
sequenceDiagram
    participant User as Client (Browser)
    participant API as Spring Boot Server
    participant Filter as JwtFilter / Security
    participant DB as Supabase (PostgreSQL)

    User->>API: POST /auth/login (email, password)
    API->>Filter: Intercept Request
    Filter->>DB: Find User by Email
    DB-->>Filter: Return User (Hashed Password)
    Filter->>Filter: BCrypt.matches(password, hashedPass)
    Note right of Filter: If valid → Generate JWT HS256
    Filter-->>API: Return Token String
    API-->>User: 200 OK { "token": "eyJhbG..." }
```

### Every Protected Request

```mermaid
flowchart LR
    A[Client] -->|Authorization: Bearer eyJ...| B[JwtFilter]
    B --> C{Token Valid?}
    C -->|No| D[401 Unauthorized]
    C -->|Yes| E[Extract Email]
    E --> F[SecurityContextHolder]
    F --> G[Controller Processes Request]
    G --> H[200 OK + Data]
```

### JWT Structure

```mermaid
flowchart TD
    A[JWT Token\neyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...]
    A --> B[Header\nAlgorithm: HS256\nType: JWT]
    A --> C[Payload\nsub: user@email.com\niat: Issued At\nexp: 24 hours]
    A --> D[Signature]
    B --> E[Base64URL Encode]
    C --> E
    E --> F[HMACSHA256 with Secret Key]
    F --> D
```

### Security Concepts

| Concept | Full Form | What It Means |
|---|---|---|
| ![JWT](https://img.shields.io/badge/JWT-000?logo=jsonwebtokens) | JSON Web Token | Signed token. Stateless — server stores nothing. |
| HS256 | HMAC SHA-256 | Symmetric signing. Secret key must be 32+ characters. |
| BCrypt | Blowfish Crypt | One-way password hashing. Never stores plain text. |
| CSRF | Cross-Site Request Forgery | Disabled for REST APIs using stateless JWT. |
| CORS | Cross-Origin Resource Sharing | Browser policy — server must explicitly allow origins. |

---

## 9. DevOps & Cloud Deployment

### Deployment Pipeline

```mermaid
flowchart TD
    A[Local Machine\nIntelliJ IDEA\nWindows]

    subgraph Build
        B[./mvnw clean package -DskipTests\nCreates HelloWorld-0.0.1-SNAPSHOT.jar]
    end

    subgraph Transfer
        C[Copy JAR to\nDeployment/ folder]
    end

    subgraph Deploy
        D[catalyst deploy\nZoho Catalyst CLI\nChennai Data Center]
    end

    subgraph Live
        E[Zoho AppSail\nJava 17 Runtime\nDynamic Port\n512MB Memory]
    end

    A --> B --> C --> D --> E
```

### Manual CI/CD Commands

```bash
# Step 1 — Build
cd D:\SpringToDo\HelloWorld
./mvnw clean package -DskipTests

# Step 2 — Transfer
copy target\HelloWorld-0.0.1-SNAPSHOT.jar ..\Deployment\

# Step 3 — Deploy
cd ..\Deployment
catalyst deploy

# Step 4 — Monitor in Zoho Dashboard → Logs → SpringReactToDoByKK
```

### Zoho `app-config.json`

```json
{
    "command": "java -jar HelloWorld-0.0.1-SNAPSHOT.jar",
    "stack": "java17",
    "memory": 512,
    "platform": "javase",
    "health_check": {
        "type": "http",
        "path": "/",
        "initial_delay": 30
    }
}
```

### The 10-Second Startup Race

Zoho kills apps that don't start within 10 seconds:

| Optimization | Time Saved |
|---|---|
| `spring.jpa.hibernate.ddl-auto=none` | ~3 seconds |
| `spring.main.lazy-initialization=true` | ~2 seconds |
| `spring.data.jpa.repositories.bootstrap-mode=lazy` | ~1 second |
| Removing Swagger dependency | ~2 seconds |
| `HealthController` at `GET /` | Health check passes ✅ |

**Result:** Startup reduced from ~14 seconds → ~6 seconds.

### Java Version Migration

| Phase | Version | Reason |
|---|---|---|
| Local Dev | ![Java 21](https://img.shields.io/badge/Java-21-ED8B00?logo=openjdk) | Latest LTS locally |
| Cloud | ![Java 17](https://img.shields.io/badge/Java-17-ED8B00?logo=openjdk) | Zoho Catalyst runtime constraint |

### Vercel Frontend Deployment

```mermaid
flowchart LR
    A[GitHub Repository\nKARTHIKAKRISHNA123]
    B[Vercel\nAuto-detects Vite]
    C[npm run build]
    D[Env Variable\nVITE_API_BASE_URL set in dashboard]
    E[Live on vercel.app]

    A -->|Push to main| B --> C --> D --> E
```

---

## 10. The CORS Battle — 24 Hours of Debugging

```mermaid
flowchart TD
    A[Start: CORS Error\nNo Access-Control-Allow-Origin header]
    A --> B[Attempt 1\nCorsConfigurationSource inside SecurityConfig]
    B --> C[Still failing — Spring blocks before CORS filter]
    C --> D[Attempt 2\nNuclear FilterRegistrationBean\nOrdered.HIGHEST_PRECEDENCE]
    D --> E[Java adds header\nbut Zoho ALSO adds one]
    E --> F[New Error: Multiple CORS header values\nBrowser rejects duplicate]
    F --> G[The Real Fix\nDelete Java CORS bean entirely]
    G --> H[Zoho Dashboard\nCloud Scale → Authentication\n→ Authorized Domains\nAdd Vercel URL + Enable Toggle]
    H --> I[SUCCESS ✅\nSingle CORS header\nVercel ↔ Zoho handshake works]
```

### What Each Error Actually Meant

| Error | What Was Really Happening |
|---|---|
| `"Email might already be taken"` | False alarm — request never reached database. CORS blocked it. |
| `net::ERR_FAILED` | CORS preflight OPTIONS was blocked |
| `No Access-Control-Allow-Origin header` | Backend was offline / not responding |
| `Multiple CORS header values` | Both Zoho AND Java were adding the same header |
| `Execution failed. Please check startup command or port` | App crashed before Tomcat started — DB connection / port issue |

---

## 11. Learning Journey — Spring Boot from Zero

Built from zero Java web framework knowledge in Alangulam, Tenkasi, Tamil Nadu.

### Week-by-Week

| Week | Concept | Key Takeaway |
|---|---|---|
| 1 | `start.spring.io` project setup | Maven generates the skeleton. `mvnw` runs without global Maven. |
| 1 | Embedded Tomcat | Spring Boot bundles its own server. No external install. |
| 1 | REST vs SOAP | SOAP = complex XML. REST = simple URLs + HTTP methods. |
| 1 | `@RestController`, `@GetMapping` | Controller maps URLs to Java methods. |
| 2 | 3-Tier Architecture | Controller → Service → Repository → DB. Never skip layers. |
| 2 | Dependency Injection & IoC | `@Autowired` = Spring injects. No manual `new`. |
| 2 | `@SpringBootApplication` | = `@EnableAutoConfiguration` + `@ComponentScan`. |
| 2 | Request Params / Path Variables / Body | 3 ways to send input to an API. |
| 3 | JPA + Hibernate ORM | `@Entity` → table. `JpaRepository` → free CRUD. |
| 3 | H2 In-Memory Database | Zero-install dev DB. Spring Boot 4.x broke it — use 3.x. |
| 3 | H2 Console debugging | Boot 4.0.4 bug + stale `.class` files = 404. |
| 4 | Spring Security Filter Chain | Every request goes through filters before controllers. |
| 4 | JWT Authentication | Header.Payload.Signature — stateless auth. |
| 4 | BCrypt | Never store plain text passwords. |
| 4 | CORS | Browser blocks cross-origin. Server must allow explicitly. |
| 5 | React + Vite + Tailwind | Both `react()` AND `tailwindcss()` needed in plugins. |
| 5 | Axios interceptors | Auto-attach JWT. No manual headers per call. |
| 5 | TanStack Query | `invalidateQueries` refreshes UI after mutations. |
| 5 | URL mismatch 403 | Frontend `/todos` ≠ backend `/api/v1/toDo`. Always verify. |
| 6 | PostgreSQL migration | H2 → Postgres = 3 lines in `application.properties`. |
| 6 | Email exists bug | `ddl-auto=update` never clears data. Fix: `TRUNCATE TABLE`. |
| 7 | Zoho Catalyst deploy | Java 17. Dynamic port via `ServerPortCustomizer`. |
| 7 | Supabase cloud DB | Pooler 6543. `sslmode=require`. `prepareThreshold=0`. Mumbai. |
| 7 | The localhost trap | `localhost` in cloud = cloud server, not your laptop. |
| 7 | CORS — the final boss | 24 hours. Nuclear filter. Zoho dashboard. Duplicate header. |

### The Biggest Lessons

1. **![Spring Boot](https://img.shields.io/badge/Spring%20Boot-4.x%20unstable-FF0000?logo=springboot) Use 3.4.x** — Boot 4.x broke H2 console registration.
2. **Always `Build → Clean Project` after version changes** — Stale `.class` files override everything.
3. **The localhost trap** — `localhost` in cloud config = the cloud server itself.
4. **CORS is a browser policy** — Not a server error. Browser enforces it.
5. **Zoho has two CORS layers** — Java + Dashboard. Both active = duplicate header = blocked.
6. **`ddl-auto=none` in production** — Tables exist. Don't scan on every boot.
7. **JWT is stateless** — The token IS the authentication. Server stores nothing.

---

## 12. Known Issues & Fixes

| Issue | Root Cause | Fix |
|---|---|---|
| Port 8080 in use | Old Spring Boot instance running | `taskkill /PID <id> /F` or `server.port=8081` |
| H2 console 404 | Spring Boot 4.0.4 bug | Downgrade to 3.4.4 + Clean Project |
| Spring Security login page | `spring-boot-starter-security` added twice | Remove duplicate from `pom.xml` |
| `annotation values must be of the form name=value` | `@ComponentScan` wrong multi-package syntax | Use `basePackages = {}` or remove entirely |
| `SecurityConfig.java` not found | File in `src/main/java/` root | Move to `com.kk.HelloWorld.config` package |
| `cannot find symbol AntPathRequestMatcher` | Removed in Spring Security 6.x | Delete premature SecurityConfig |
| Email Already Exists for all registrations | Stale PostgreSQL data | `TRUNCATE TABLE user_table` in pgAdmin |
| `GET /todos 403 Forbidden` | Frontend `/todos` vs backend `/api/v1/toDo` | Fix URLs in `todoService.js` |
| `npm run dev` blank page | `@vitejs/plugin-react` missing, `id="app"` not `"root"` | `npm install -D @vitejs/plugin-react` + fix `index.html` |
| Tailwind styles not applying | `tailwindcss()` missing from `vite.config.js` | Add to `plugins: [react(), tailwindcss()]` |
| `ConflictingBeanDefinitionException` | Two `ServerPortCustomizer` in different packages | Delete root package version |
| `Execution failed. Please check startup command or port` | App not starting in 10s | `ddl-auto=none` + lazy init + correct Mumbai URL |
| CORS Multiple Values Error | Both Zoho AND Java adding CORS header | Remove Java CORS bean — let Zoho handle it |
| Corrupted JDBC URL | Double `jdbc:jdbc:` prefix | Replace entire `application.properties` |

---

## 13. Local Development Setup

### Prerequisites

<p align="left">
  <img src="https://img.shields.io/badge/Java%20JDK-17-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white" />
  <img src="https://img.shields.io/badge/IntelliJ%20IDEA-Community-000000?style=for-the-badge&logo=intellijidea&logoColor=white" />
  <img src="https://img.shields.io/badge/Node.js-18+-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" />
  <img src="https://img.shields.io/badge/PostgreSQL-15+-4169E1?style=for-the-badge&logo=postgresql&logoColor=white" />
  <img src="https://img.shields.io/badge/Git-Latest-F05032?style=for-the-badge&logo=git&logoColor=white" />
</p>

### Backend Setup

```bash
git clone https://github.com/KARTHIKAKRISHNA123/Spring-React-ToDo-NM.git
cd Spring-React-ToDo-NM/HelloWorld

# For H2 development — uncomment in application.properties:
# spring.datasource.url=jdbc:h2:mem:tododb;DB_CLOSE_DELAY=-1
# spring.datasource.username=sa
# spring.datasource.password=
# spring.h2.console.enabled=true

./mvnw spring-boot:run
# → http://localhost:8081
# → http://localhost:8081/h2-console (dev only)
```

### Frontend Setup

```bash
cd react-todo-frontend
npm install

# Create .env for local dev:
echo "VITE_API_BASE_URL=http://localhost:8081" > .env

npm run dev
# → http://localhost:5173
```

### Environment Variables

| Variable | Location | Value |
|---|---|---|
| `VITE_API_BASE_URL` | Vercel Dashboard / `.env` | Zoho AppSail backend URL |
| `X_ZOHO_CATALYST_LISTEN_PORT` | Zoho (auto-set) | Dynamic port from Catalyst |

---

## 14. Architectural Diagrams

### Full System Architecture

```mermaid
flowchart LR
    subgraph Client
        A[Browser\nVercel App]
    end

    subgraph ZohoCatalyst [Zoho Catalyst]
        B[Outer Gateway\nCORS Whitelist]
        C[AppSail Container\nSpring Boot 3.4.4\nJava 17 — 512MB]
        D[JwtFilter\nServerPortCustomizer\nHealthController]
    end

    subgraph SupabaseCloud [Supabase]
        E[Transaction Pooler\nPort 6543 — SSL]
        F[(PostgreSQL\nMumbai ap-south-1)]
    end

    A -->|HTTPS + JWT| B --> C --> D
    D -->|JDBC + SSL| E --> F
    F --> E --> D --> C --> B -->|JSON| A
```

### Java → Spring → Spring Boot

```mermaid
flowchart TD
    A[Java Language\nBase Programming]
    B[Spring Framework\nDI + IoC + AOP]
    C[Spring Boot\nAuto-Config\nEmbedded Tomcat\nStarter Deps]
    A --> B --> C
```

### Spring Security Filter Chain

```mermaid
flowchart LR
    A[Client Request]
    B[CORS Filter\nHighest Precedence]
    C[JwtFilter\nOncePerRequestFilter]
    D{Token Valid?}
    E[Controller Layer]
    F[401 Unauthorized]

    A --> B --> C --> D
    D -->|Yes| E
    D -->|No| F
```

### Port and Network Routing

```mermaid
flowchart LR
    A[Client Device]
    B[Zoho Server\nIP Address]
    C[Dynamic Port\nX_ZOHO_CATALYST_LISTEN_PORT]
    D[Spring Boot JAR\nHealthController responds GET /]

    A -->|Network Request| B --> C --> D
```

---

## 15. Project Status

| Feature | Status |
|---|---|
| ![Spring](https://img.shields.io/badge/Spring%20Boot%20Backend-Complete-6DB33F?logo=springboot) | ✅ |
| ![JWT](https://img.shields.io/badge/JWT%20Auth%20Register%20%2B%20Login-Complete-000000?logo=jsonwebtokens) | ✅ |
| ![CRUD](https://img.shields.io/badge/Full%20CRUD%20Todo%20Operations-Complete-blue) | ✅ |
| ![React](https://img.shields.io/badge/React%20Frontend%20Dark%20Mode-Complete-61DAFB?logo=react) | ✅ |
| ![Framer](https://img.shields.io/badge/Google%20Labs%203D%20Bento%20Grid-Complete-0055FF?logo=framer) | ✅ |
| ![Axios](https://img.shields.io/badge/Axios%20JWT%20Interceptor-Complete-5A29E4?logo=axios) | ✅ |
| ![TanStack](https://img.shields.io/badge/TanStack%20Query-Complete-FF4154?logo=reactquery) | ✅ |
| ![Zoho](https://img.shields.io/badge/Backend%20Deployed%20Zoho%20Catalyst-Live-E42527?logo=zoho) | ✅ |
| ![Vercel](https://img.shields.io/badge/Frontend%20Deployed%20Vercel-Live-000000?logo=vercel) | ✅ |
| ![Supabase](https://img.shields.io/badge/Database%20Supabase%20Mumbai-Live-3ECF8E?logo=supabase) | ✅ |
| ![CORS](https://img.shields.io/badge/CORS%20Resolved%20End--to--End-Resolved-success) | ✅ |


---

## License

![MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

---

## Author

<p align="left">
  <a href="https://github.com/KARTHIKAKRISHNA123">
    <img src="https://img.shields.io/badge/GitHub-KARTHIKAKRISHNA123-181717?style=for-the-badge&logo=github&logoColor=white" />
  </a>
  <a href="https://www.linkedin.com/in/karthika-krishna-m">
    <img src="https://img.shields.io/badge/LinkedIn-Karthika%20Krishna%20M-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" />
  </a>
  <a href="mailto:karthikakrishna201005@gmail.com">
    <img src="https://img.shields.io/badge/Email-karthikakrishna201005%40gmail.com-D14836?style=for-the-badge&logo=gmail&logoColor=white" />
  </a>
</p>



