Personal Portfolio Website
Full-stack portfolio built with React, Node.js/Express, and MongoDB.
Tech Stack
Frontend: React + Vite, Framer Motion, React Router
Backend: Node.js, Express
Database: MongoDB (Mongoose)
Deploy: Vercel / Netlify (frontend), Render / Railway (backend)
Project Structure
```
portfolio/
├── client/               # React frontend (Vite)
│   └── src/
│       ├── components/   # Navbar, ProjectCard
│       ├── pages/        # Home, Projects, About, Contact
│       └── assets/       # Global CSS
├── server/               # Express backend
│   ├── models/           # Mongoose schemas
│   └── routes/           # API route handlers
├── .env.example
└── package.json
```
Getting Started
Prerequisites
Node.js 18+
MongoDB (local or MongoDB Atlas)
Setup
```bash
# Clone the repo
git clone <your-repo-url>
cd portfolio

# Install root dependencies
npm install

# Install client dependencies
cd client && npm install && cd ..

# Set up environment variables
cp .env.example .env
# Edit .env with your MongoDB URI
```
Development
```bash
npm run dev
# Runs Express on :5000 and Vite on :5173 concurrently
```
Production Build
```bash
npm run build   # Builds the React app
npm start       # Serves everything from Express
```
API Endpoints
Method	Path	Description
GET	`/api/projects`	List all projects
GET	`/api/projects/:id`	Get single project
POST	`/api/projects`	Create project
PUT	`/api/projects/:id`	Update project
DELETE	`/api/projects/:id`	Delete project
Deployment
Frontend → Vercel / Netlify
Point to `client/` directory, build command: `npm run build`, output: `dist/`.
Backend → Render / Railway
Set `MONGODB_URI` and `NODE_ENV=production` environment variables.
Full-stack → Railway / Fly.io
Deploy the root; set `NODE_ENV=production` and `MONGODB_URI`.
