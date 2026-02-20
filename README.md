# 👨‍💼 Employee Management System (Task-02)

---

## 📌 Project Overview

This project is a **Full Stack Employee Management System** developed as part of the **Prodigy Infotech Internship – Task 02**.

The system allows authenticated administrators to securely manage employee records with full CRUD functionality.

The application follows secure authentication practices including password hashing and JWT-based authorization.

---

## 🎯 The System Allows Users To:

- Register a new account  
- Login securely  
- Access protected routes only after authentication  
- Add employees  
- View all employees  
- Update employee details  
- Delete employees  
- Search employees by name  
- View total employee count  
- Logout securely  

---

## 🚀 Tech Stack

### 🔹 Backend
- Node.js  
- Express.js  
- MySQL  
- bcrypt (Password Hashing)  
- JSON Web Token (JWT)  
- dotenv  

### 🔹 Frontend
- HTML  
- CSS  
- JavaScript (Fetch API)  

---

## 🔑 Key Features

- User Registration  
- Secure Password Hashing using bcrypt  
- JWT Token Generation  
- Protected Routes using Middleware  
- Full CRUD Operations  
- Search Functionality  
- Employee Count Display  
- Delete Confirmation Popup  
- Logout Functionality  
- Environment Variable Protection  

---

## 📂 Project Structure
PRODIGY_FS_02
│
├── server/
│ ├── routes/
│ ├── middleware/
│ ├── db.js
│ ├── server.js
│ ├── package.json
│ └── package-lock.json
│
├── frontend/
│ ├── login.html
│ ├── register.html
│ ├── employees.html
│ └── style.css
│
├── database.sql
├── .gitignore
├── README.md
└── LICENSE

---

## ⚙️ Installation & Setup Guide

### 🔹 1️⃣ Clone the Repository
git clone https://github.com/Claraxavi/PRODIGY_FS_02.git

cd PRODIGY_FS_02

---

### 🔹 2️⃣ Setup Database

1. Open MySQL Workbench  
2. Run the `database.sql` file  

This will create:

- `prodigy_auth` database  
- `users` table  
- `employees` table  

---

### 🔹 3️⃣ Configure Environment Variables

Inside the `server` folder, create a file named `.env` and add:
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=prodigy_auth
JWT_SECRET=your_secret_key

---

### 🔹 4️⃣ Install Backend Dependencies
cd server
npm install

---

### 🔹 5️⃣ Start the Server
npm start

Server will run at:
http://localhost:5000

---

### 🔹 6️⃣ Run Frontend

Open:

Using Live Server in VS Code.

---

## 🔄 Authentication Flow

1. User registers an account  
2. Password is hashed using bcrypt  
3. User logs in  
4. JWT token is generated  
5. Token is stored in browser localStorage  
6. Protected routes verify token using middleware  
7. Logout removes token from storage  

---

## 🛡 Security Implementation

- Passwords are hashed before storing in database  
- JWT tokens are signed using a secret key  
- Protected routes require valid authentication tokens  
- Sensitive credentials are stored in `.env` file  
- `.env` and `node_modules` are ignored via `.gitignore`  

---

## 📜 License

This project is licensed under the MIT License.