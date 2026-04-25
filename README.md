# DevConnector

A full-stack social networking application for developers—built with the MERN stack (MongoDB, Express, React, Node.js).  
Users can register/login, create profiles, add education/experience, post updates, like/comment, connect with GitHub, and more.

---

## Features

- User authentication (JWT) and session handling  
- Profiles: create, edit, add experience & education  
- Developer listings: browse other devs, view public profiles  
- Posts: create, like/unlike, comment/discuss  
- GitHub integration: show GitHub repos on profile  
- Protected routes and user permissions  
- Responsive React frontend + Node/Express backend + MongoDB data store  

---

## Prerequisites

Before running locally, make sure you have:

- Node.js (v20+ recommended)  
- MongoDB (Atlas or local)  
- Git for cloning the repository  
- Docker Desktop, if you want to run the app in containers
- A GitHub personal access token, if using the GitHub repos feature

---

## Installation & Setup

```bash
# Clone the repository
git clone https://github.com/SaikrishnaSamudrala3/DevConnector.git
cd DevConnector

# Install backend dependencies
npm install

# Install frontend dependencies
npm install --prefix client

# Configure environment variables as needed:
#   MONGO_URI=<your_mongo_db_uri>
#   JWT_SECRET=<your_jwt_secret>
#   GITHUB_TOKEN=<your_github_personal_access_token>

# Start the application
npm run dev     # backend on :5001, Vite frontend on :3000
```

## Production Build

```bash
npm run build
npm start
```

The Express server serves the compiled Vite client from `client/build` when
`NODE_ENV=production`.

## Docker

```bash
docker compose up --build
```

The compose stack starts the app on `http://localhost:5000` and MongoDB on
`localhost:27017`. Override `JWT_SECRET`, `MONGO_URI`, and `GITHUB_TOKEN` for
real deployments.

For local Docker overrides, copy `.env.example` to `.env` and update the values.
Docker Compose reads `.env` automatically.

## Deployment Environment Variables

Set these in your hosting provider's environment/settings panel:

- `NODE_ENV=production`
- `MONGO_URI`: your MongoDB Atlas connection string
- `JWT_SECRET`: a long random secret used to sign login tokens
- `GITHUB_TOKEN`: optional GitHub personal access token for repo lookups
- `PORT`: optional; most hosts inject this automatically

Do not commit real credentials. `.env` files are ignored by git.
