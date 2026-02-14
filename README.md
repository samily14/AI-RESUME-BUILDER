AI Resume Builder – MERN Stack

A full-stack AI Resume Builder web application that allows users to create professional resumes, preview them, and download them as PDF files.
Built using the MERN stack with server-side PDF generation.

🚀 Features

User-friendly resume form

Clean and responsive UI

Career Objective, Skills, Projects, and Experience sections

Dynamic PDF resume generation

REST API–based backend architecture

Separation of frontend and backend

🛠️ Tech Stack
Frontend

React.js (Create React App)

HTML5, CSS3

Axios

Backend

Node.js

Express.js

MongoDB (Mongoose)

Puppeteer (PDF generation)

📁 Project Structure
AI-Resume-Builder-MERN/
│
├── frontend/        # React frontend
│   ├── src/
│   │   ├── App.js
│   │   └── App.css
│   └── package.json
│
├── backend/         # Node & Express backend
│   ├── routes/
│   │   └── resumeRoutes.js
│   ├── server.js
│   └── package.json
│
└── README.md

⚙️ Installation & Setup
1️⃣ Clone the repository
git clone https://github.com/samily14/AI-Resume-Builder-MERN.git

2️⃣ Backend setup
cd backend
npm install
npm start


Backend runs on http://localhost:5000

3️⃣ Frontend setup
cd frontend
npm install
npm start


Frontend runs on http://localhost:3000

📄 PDF Generation Workflow

User enters resume details in the React frontend

Data is sent to backend via REST API

Backend uses Puppeteer to convert HTML into PDF

Resume is downloaded automatically

🎯 Use Case

Resume creation for students and freshers

Internship and placement preparation

Learning full-stack MERN development

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
