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

- Node.js (v14+ recommended)  
- MongoDB (Atlas or local)  
- Git for cloning the repository  
- An account on GitHub (if using GitHub-integration feature)  

---

## Installation & Setup

```bash
# Clone the repository
git clone https://github.com/SaikrishnaSamudrala3/DevConnector.git
cd DevConnector

# Install backend dependencies
npm install

# Install frontend dependencies
cd client
npm install
cd ..

# Create configuration file
#   In server/config folder (or config/) create default.json or .env with something like:
# {
#   "mongoURI": "<your_mongo_db_uri>",
#   "jwtSecret": "<your_jwt_secret>",
#   "githubClientId": "<your_github_client_id>",
#   "githubSecret": "<your_github_client_secret>"
# }

# Start the application
npm run dev     # runs backend + frontend concurrently with hot-reload
