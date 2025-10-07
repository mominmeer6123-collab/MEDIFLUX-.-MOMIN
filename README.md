# MediEdu — Educational Medical Dashboard (Original)

This is an **original**, educational starter application inspired by medical dashboard products.
It is built for learning and prototyping — **do not** copy proprietary designs or assets.

Features included:
- React + Vite frontend with Tailwind CSS
- Express + Mongoose (MongoDB) backend with JWT auth stub
- Patient management, Appointments, Reports endpoints with seed data
- Dockerfile for backend, docker-compose for local MongoDB + server
- MIT license

Quick start (frontend + backend separately):
1. Unzip and `cd` into the folder.
2. Frontend:
   - `cd frontend`
   - `npm install`
   - `npm run dev`
3. Backend:
   - `cd backend`
   - `npm install`
   - Create `.env` with `MONGO_URI` and `JWT_SECRET` (see .env.example)
   - `npm run dev`

Or run with Docker Compose:
  docker-compose up --build

