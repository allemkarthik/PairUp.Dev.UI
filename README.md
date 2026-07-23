# 🚀 PairUp.dev

> A full-stack developer networking platform that enables developers to discover, connect, chat in real time, and grow their professional network.

PairUp.dev is inspired by modern networking platforms, allowing developers to create professional profiles, discover like-minded engineers, send connection requests, chat instantly, and upgrade to premium memberships.

---

## 🌐 Live Demo

### Frontend
https://pairupdev.com

### Backend API
https://api.pairupdev.com

---

# 📸 Features

## 🔐 Authentication & Security

- JWT Authentication
- HTTP-only Cookies
- Protected Routes
- Password Hashing (bcrypt)
- Input Validation
- Secure Authentication Middleware

---

## 👤 Developer Profiles

- Create developer profile
- Edit profile
- Upload profile image (Cloudinary)
- Skills management
- About section
- Date of Birth support
- Birthday email automation
- Live profile preview

---

## 🤝 Developer Connections

- Browse developer feed
- Discover new developers
- Ignore suggestions
- Send connection requests
- Accept requests
- Reject requests
- View received requests
- View all accepted connections

---

## 💬 Real-Time Chat

- Socket.IO based messaging
- Instant one-to-one chat
- Chat history stored in MongoDB
- Load previous conversations
- Join private chat rooms
- Live message updates

---

## 💳 Premium Memberships

Powered by Razorpay

### Premium

- 100 connection requests/day
- Premium badge
- Unlimited profile views
- Unlimited developer search
- Priority support
- Early access to features

### Premium Pro

- Unlimited connection requests
- Premium Pro badge
- Unlimited messaging
- Priority feed ranking
- Profile viewer insights
- AI profile optimization
- Early feature access

---

## 💰 Payment System

- Razorpay Checkout
- Order creation
- Payment verification
- Secure webhook-ready architecture
- Payment history stored in MongoDB

---

## 📧 Email Automation (AWS SES)

- Welcome emails
- Daily pending request reminders
- Birthday wishes
- Scheduled background jobs
- SES Production Ready

---

## ⏰ Scheduled Jobs (node-cron)

- Birthday email scheduler
- Pending connection reminder emails
- Automated daily tasks

---

## 🔍 Developer Feed

- Pagination
- Smart filtering
- Excludes existing connections
- Excludes ignored developers
- Optimized MongoDB queries

---

## 📡 REST APIs

- Authentication APIs
- Profile APIs
- Feed APIs
- Connection APIs
- Chat APIs
- Premium APIs
- Payment APIs

---

## ☁️ Deployment

- Frontend deployed using Vercel
- Backend hosted on AWS EC2
- Nginx Reverse Proxy
- MongoDB Atlas
- Cloudinary CDN
- AWS SES
- Razorpay

---

# 🛠 Tech Stack

## Frontend

- React.js
- Redux Toolkit
- React Router
- Axios
- Tailwind CSS
- DaisyUI
- Vite
- Socket.IO Client

---

## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcrypt
- Cookie Parser
- Socket.IO
- Node Cron
- AWS SDK
- Razorpay

---

## Cloud Services

- AWS EC2
- AWS SES
- MongoDB Atlas
- Cloudinary
- Razorpay

---

## DevOps

- Git
- GitHub
- Nginx

---

# 🏗 Architecture

```text
                     React + Redux
                           │
                           │
                    Axios / Socket.IO
                           │
          ┌────────────────┴────────────────┐
          │                                 │
     REST APIs                        WebSocket
          │                                 │
          └────────── Express.js ───────────┘
                          │
                Authentication Middleware
                          │
                      MongoDB Atlas
                          │
     ┌─────────────┬─────────────┬─────────────┐
     │             │             │             │
 Cloudinary      AWS SES      Razorpay     Node Cron
```

---

# 📂 Project Structure

```text
PairUp.dev

frontend/
│
├── src/
│   ├── components/
│   ├── pages/
│   ├── store/
│   ├── utils/
│   ├── hooks/
│   └── App.jsx
│
└── package.json


backend/
│
├── src/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── config/
│   ├── utils/
│   ├── cronJobs/
│   ├── app.js
│   └── database.js
│
└── package.json
```

---

# 🔑 Core Workflows

## User Authentication

```text
Signup
   │
   ▼
bcrypt Hash Password
   │
   ▼
JWT Generated
   │
   ▼
HTTP-only Cookie
   │
   ▼
Authenticated User
```

---

## Connection Workflow

```text
Developer A
      │
      ▼
Interested
      │
      ▼
Connection Request Created
      │
      ▼
Developer B
      │
      ▼
Accept / Reject
      │
      ▼
Connection Established
```

---

## Chat Workflow

```text
Open Chat
      │
      ▼
Join Socket Room
      │
      ▼
Load Previous Messages
      │
      ▼
Send Message
      │
      ▼
Socket.IO
      │
      ▼
MongoDB
      │
      ▼
Receiver Instantly Gets Message
```

---

## Payment Workflow

```text
Choose Membership
        │
        ▼
Create Razorpay Order
        │
        ▼
Open Checkout
        │
        ▼
Payment Success
        │
        ▼
Verify Signature
        │
        ▼
Upgrade Membership
```

---

## Birthday Email Workflow

```text
Node Cron
      │
      ▼
Check Today's Date
      │
      ▼
MongoDB Aggregation
      │
      ▼
Birthday Users
      │
      ▼
AWS SES
      │
      ▼
Birthday Email Sent
```

---

# 🚀 API Endpoints

## Authentication

```http
POST /signup
POST /login
POST /logout
```

---

## Profile

```http
GET    /profile/view
PATCH  /profile/edit
```

---

## Feed

```http
GET /feed?page=1&limit=10
```

---

## Connection Requests

```http
POST /request/send/:status/:userId

POST /request/review/:status/:requestId

GET /user/requests/received

GET /user/connections
```

---

## Chat

```http
GET /chat/:targetUserId
```

---

## Premium

```http
GET /premium/verify
```

---

## Payments

```http
POST /payment/create

POST /payment/webhook
```

---

# ⚙️ Environment Variables

## Backend

```env
PORT=

MONGO_URI=

JWT_SECRET=

CLIENT_URL=

AWS_ACCESS_KEY_ID=

AWS_SECRET_ACCESS_KEY=

AWS_REGION=

AWS_SES_FROM_EMAIL=

RAZORPAY_KEY_ID=

RAZORPAY_KEY_SECRET=
```

---

## Frontend

```env
VITE_BASE_URL=

VITE_CLOUDINARY_CLOUD_NAME=

VITE_CLOUDINARY_UPLOAD_PRESET=
```

---

# 💻 Local Setup

## Clone Repository

```bash
git clone https://github.com/allemkarthik/PairUp.dev.git
```

---

## Backend

```bash
cd backend

npm install

npm run dev
```

---

## Frontend

```bash
cd frontend

npm install

npm run dev
```

---

# 🔒 Security

- JWT Authentication
- HTTP-only Cookies
- bcrypt Password Hashing
- Protected APIs
- Secure Environment Variables
- CORS Configuration
- Request Validation
- Razorpay Signature Verification
- AWS IAM Credentials

---



# 🚀 Future Enhancements

- Push Notifications
- Read Receipts
- Typing Indicators
- Video Calling
- AI Developer Matching
- Recommendation Engine
- Resume Builder
- GitHub Profile Import
- OAuth Login
- CI/CD using GitHub Actions
- Docker & Kubernetes Deployment
- Microservice Architecture

---

# 👨‍💻 Author

## Allem Sai Karthik

Master's in Computer Science  
St Francis College

### Connect with me

- GitHub: https://github.com/allemkarthik
- LinkedIn: https://linkedin.com/in/allemkarthik

---

## ⭐ Support

If you found this project useful, consider giving it a ⭐ on GitHub.