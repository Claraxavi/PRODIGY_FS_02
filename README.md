👨‍💼 Employee Management System (Task-02)

📌 Project Overview

This is a Full Stack Employee Management System developed as part of the Prodigy Infotech Internship – Task 02.

The system allows administrators to:

Register and Login securely

Add new employees

View all employees

Update employee details

Delete employees

Search employees by name

View total employee count

All employee routes are protected using JWT authentication.

🚀 Tech Stack
Backend

Node.js

Express.js

MySQL

bcrypt

JSON Web Token (JWT)

dotenv

Frontend

HTML

CSS

JavaScript (Fetch API)

📂 Project Structure
PRODIGY_FS_02
│
├── server/
│   ├── routes/
│   ├── middleware/
│   ├── db.js
│   ├── server.js
│   ├── package.json
│   └── package-lock.json
│
├── frontend/
│   ├── login.html
│   ├── register.html
│   ├── employees.html
│   └── style.css
│
├── database.sql
├── .gitignore
├── README.md
└── LICENSE
⚙️ Installation & Setup Guide
1️⃣ Clone the Repository
git clone https://github.com/Claraxavi/PRODIGY_FS_02.git
cd PRODIGY_FS_02
2️⃣ Setup Database

Open MySQL Workbench and run the database.sql file.

This will create:

prodigy_auth database

users table

employees table

3️⃣ Configure Environment Variables

Inside the server folder, create a .env file:

PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=prodigy_auth
JWT_SECRET=your_secret_key
4️⃣ Install Backend Dependencies
cd server
npm install
5️⃣ Start the Server
npm start

Server runs at:

http://localhost:5000
6️⃣ Run Frontend

Open:

frontend/login.html

using Live Server in VS Code.

🔐 Security Implementation

Passwords are hashed using bcrypt

JWT tokens are generated during login

Protected routes use authentication middleware

Sensitive credentials are stored in .env

.env and node_modules are excluded using .gitignore

📜 License

This project is licensed under the MIT License.