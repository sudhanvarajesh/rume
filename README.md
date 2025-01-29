# rume: A Real-Time Chatroom Application

🚀 Overview
Rume is a microservices-based real-time chat application built with React, Node.js, Express, Socket.io, and MongoDB Atlas. It enables users to create and join multiple chatrooms for seamless instant messaging, active user tracking, and efficient room-based interactions.

The backend is containerized with Docker for scalable and isolated service management and deployed on AWS ECS & EC2, ensuring high availability and performance.

✨ Features
Real-time messaging with WebSockets (Socket.io)
Multiple chatrooms for categorized discussions
Active user tracking within chatrooms
Authentication & Authorization using Passport.js and JWT
Microservices architecture for scalability
Cloud-hosted MongoDB Atlas for secure data storage
Containerized services with Docker for deployment
AWS ECS & EC2 for cloud deployment
🏗️ Tech Stack
Frontend: React, Tailwind CSS
Backend: Node.js, Express, Socket.io
Authentication: Passport.js, JWT
Database: MongoDB Atlas
Deployment: AWS ECS, EC2, Docker
Version Control: Git & GitHub
📦 Microservices Architecture
The backend is divided into multiple microservices, each running in its own container:

Service	Description	Port
User Service	Handles authentication and user management	8081
Room Service	Manages chatroom creation and retrieval	8083
Chat Service	Handles real-time messaging via WebSockets	8082
Frontend	React-based UI	3000
🔧 Setup & Installation
Prerequisites
Node.js installed
Docker installed
MongoDB Atlas database set up
1️⃣ Clone the Repository
bash
Copy
git clone https://github.com/sudhanvarajesh/rume/
cd rume-chat-app
2️⃣ Set Up Environment Variables
Create a .env file in the root directory with the following variables:

ini
Copy
MONGO_URI=your-mongodb-atlas-uri
JWT_SECRET=your-secret-key
PORT=8080
3️⃣ Run with Docker
bash
Copy
docker-compose up --build
This will start all microservices in separate containers.

4️⃣ Running Locally (Without Docker)
Backend
bash
Copy
cd backend
npm install
npm start
Frontend
bash
Copy
cd frontend
npm install
npm start
Open http://localhost:3000 to access the chat app.

🚀 Deployment on AWS ECS
Build and push Docker images to AWS ECR
Configure ECS Task Definitions for microservices
Deploy to ECS using Fargate or EC2 instances
Set up a Load Balancer for routing
🛠️ Testing
Unit Tests: Run with Jest
API Testing: Use Postman or cURL
bash
Copy
npm test

👨‍💻 Contributing
We welcome contributions! To contribute:

Fork the repository
Create a feature branch (git checkout -b feature-name)
Commit your changes (git commit -m "Added feature")
Push to your fork (git push origin feature-name)
Open a Pull Request

