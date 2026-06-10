# 🚀 pairUp.dev

A full-stack developer networking platform that helps developers discover, connect, and build professional relationships with like-minded engineers.

Inspired by modern networking platforms, pairUp.dev allows users to create profiles, browse developer feeds, send connection requests, manage connections, and grow their professional network.

---

## 🌐 Live Demo

🔗 https://your-domain.com

---

## 📸 Features

### 🔐 Authentication & Security
- JWT-based authentication
- HTTP-only cookie sessions
- Protected routes and middleware
- Secure login and signup flow

### 👤 User Profiles
- Create and update developer profiles
- Add personal information and skills
- Upload profile photos
- Live profile editing experience

### 🤝 Connection Management
- Browse developer feed
- Send connection requests
- Ignore suggestions
- Accept or reject incoming requests
- View all accepted connections

### 📡 REST API Architecture
- Authentication APIs
- Profile APIs
- Connection Request APIs
- Feed APIs
- Request Management APIs

### 🎨 Responsive UI
- Built using React and Tailwind CSS
- DaisyUI components
- Mobile-friendly design
- Clean and intuitive user experience

### ☁️ Deployment
- Frontend served through Nginx
- Backend deployed on AWS EC2
- MongoDB Atlas database
- Secure client-server communication

---

# 🛠️ Tech Stack

## Frontend
- React.js
- Redux Toolkit
- React Router
- Tailwind CSS
- DaisyUI
- Axios
- Vite

## Backend
- Node.js
- Express.js
- JWT Authentication
- Cookie Parser
- Bcrypt

## Database
- MongoDB
- Mongoose

## DevOps & Deployment
- AWS EC2
- Nginx
- Git
- GitHub

---

# 🏗️ Architecture

```text
Client (React)
       │
       ▼
 Redux Store
       │
       ▼
 REST APIs
       │
       ▼
 Node.js + Express
       │
       ▼
 Authentication Middleware
       │
       ▼
 MongoDB Atlas
```

---

# 📂 Project Structure

```text
pairUp.dev
│
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── store
│   │   ├── utils
│   │   └── App.jsx
│   └── package.json
│
├── backend
│   ├── src
│   │   ├── models
│   │   ├── routes
│   │   ├── middleware
│   │   ├── utils
│   │   └── app.js
│   └── package.json
│
└── README.md
```

---

# 🔑 Core Workflows

## User Signup

```text
User
  │
  ▼
Signup Form
  │
  ▼
POST /signup
  │
  ▼
Password Hashing (bcrypt)
  │
  ▼
JWT Generated
  │
  ▼
Cookie Created
  │
  ▼
User Logged In
```

---

## Connection Request Flow

```text
Developer A
      │
      ▼
Interested
      │
      ▼
POST /request/send/interested/:id
      │
      ▼
Connection Request Created
      │
      ▼
Developer B Receives Request
      │
      ▼
Accept / Reject
      │
      ▼
Connection Established
```

---

# 🚀 API Endpoints

## Authentication

```http
POST /signup
POST /login
POST /logout
```

## Profile

```http
GET    /profile/view
PATCH  /profile/edit
```

## Feed

```http
GET /feed
```

## Requests

```http
POST /request/send/:status/:userId
POST /request/review/:status/:requestId
GET  /user/requests/received
```

## Connections

```http
GET /user/connections
```

---

# 💻 Local Setup

## Clone Repository

```bash
git clone https://github.com/allemkarthik/pairUp.dev.git
```

## Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

## Backend Setup

```bash
cd backend

npm install

npm start
```

---

# 🔐 Environment Variables

Backend `.env`

```env
PORT=7777

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

CLIENT_URL=http://localhost:5173
```

---

# 📈 Resume Highlights

- Built a full-stack developer networking platform using React, Redux Toolkit, Node.js, Express.js, and MongoDB.
- Designed and implemented 15+ RESTful APIs for authentication, profile management, user discovery, and connection workflows.
- Developed JWT-based authentication with HTTP-only cookies and protected routes.
- Engineered scalable MongoDB schemas for user relationships and connection management.
- Deployed production infrastructure using AWS EC2 and Nginx.

---

# 🔮 Future Enhancements

- Payment integration
- Sending Emails using amazon SES
- Real-time notifications using Socket.IO
- Instant messaging between connections
- AI-powered developer matching
- Advanced search and filtering
- CI/CD with GitHub Actions
- Dockerized deployment
- Infinite scrolling feed

---

# 👨‍💻 Author

**Sai Karthik Allem**

Full-Stack Software Engineer

- GitHub: https://github.com/allemkarthik
- LinkedIn: https://linkedin.com/in/your-profile

---

⭐ If you found this project useful, consider giving it a star.