-->Many job seekers find it difficult to write professional resumes. Our project solves this by generating resumes automatically using AI.

-->Users can register and login, fill their details in a resume form, and the AI will generate a formatted resume instantly. They can choose templates and download the resume as PDF.

-->We used MongoDB for storing user data, Express and Node.js for the backend, and React for the frontend. The AI integration is done using OpenAI GPT.

-->The workflow is: user inputs data → backend sends it to AI → AI generates content → data is stored in MongoDB → user can view and download PDF.

AI-Resume-Builder/
  backend/
    server.js
    routes/
      auth.js
      resume.js
    controllers/
      authController.js
      resumeController.js
    models/
      User.js
      Resume.js
    middleware/
      authMiddleware.js
    config/
      db.js
    .env
  frontend/
    src/
      components/
      pages/
      services/
      App.js
      index.js
    package.json
  README.md
