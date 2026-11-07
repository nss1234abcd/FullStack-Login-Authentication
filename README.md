# Full Stack Login System

A full-stack authentication application built using React.js, Node.js, Express.js, and MongoDB. It allows users to register, log in securely, and access protected profile information using JWT authentication.

## Features

- User Registration
- User Login and Logout
- Password Hashing using bcrypt
- JWT-based Authentication
- Protected Profile API
- Email Validation
- Password Strength Validation
- Duplicate Email Detection
- MongoDB Database Integration
- Responsive User Interface
- Success and Error Notifications

## Technologies Used

**Frontend**
- React.js
- Vite
- Axios
- CSS

**Backend**
- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Token (JWT)
- bcryptjs
- dotenv
- CORS

**API Testing**
- Postman

## Project Structure

```text
FullStackLoginSystem/
│
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── middleware/
│   │   └── authMiddleware.js
│   ├── models/
│   │   └── User.js
│   ├── routes/
│   │   └── authRoutes.js
│   ├── .env
│   ├── .gitignore
│   └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── main.jsx
│   └── package.json
│
└── README.md
```
<img width="833" height="862" alt="Screenshot 2026-11-07 153313" src="https://github.com/user-attachments/assets/f86f1e75-5d4d-44cd-bfaf-32a5bb353702" />
<img width="642" height="733" alt="Screenshot 2026-11-07 153328" src="https://github.com/user-attachments/assets/b09768b7-c284-47f8-bed2-ea8e420d45fd" />
<img width="668" height="536" alt="Screenshot 2026-11-07 153414" src="https://github.com/user-attachments/assets/8c7bbdae-88ae-4cbe-8eb1-21f6b5ccbecd" />


## Installation and Setup

### 1. Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file inside the backend folder:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Start the backend:

```bash
npm run dev
```

Backend runs at:

`http://localhost:5000`

### 3. Frontend Setup

Open another terminal:

```bash
cd frontend
npm install
npm run dev
```

Frontend runs at:

`http://localhost:5173`

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Login an existing user |
| GET | `/api/profile` | Get authenticated user profile |

### Authentication

The application uses JWT (JSON Web Token) for authentication.

After successful login, the backend generates a JWT token. This token is required to access protected routes.

### Password Security

- Passwords are hashed using bcryptjs before storing them in MongoDB.
- Password validation requires uppercase letters, lowercase letters, numbers, special characters, and at least 8 characters.
- JWT tokens are used to authenticate protected API requests.

## API Testing with Postman

The backend APIs can be tested independently using Postman.

1. Test user registration.
2. Test login with valid credentials.
3. Test login with invalid credentials.
4. Test profile access with a valid JWT token.
5. Test profile access without a token.

## Database

MongoDB is used to store registered user information.

User passwords are stored as hashed values instead of plain text.

## Author

**Nutan Patil**

Computer Science and Engineering Graduate





