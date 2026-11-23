# Munna Kumar - Portfolio Website

A modern, responsive personal portfolio built with React, Vite, Tailwind CSS, Framer Motion, and an Express/MongoDB backend.

---

## Quick Start (Frontend Only)

The portfolio comes with all personal data built-in as a fallback (`src/data/data.js`). You can run and view the entire portfolio without needing MongoDB:

1. Open a terminal and navigate to the `frontend` folder:
   ```bash
   cd munna-web-profile-main/frontend
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open your browser and navigate to:
   ```
   http://localhost:5173
   ```

---

## Full Stack Setup (Frontend + Backend + MongoDB)

If you want to run the backend API and database:

### 1. Backend Setup

1. Navigate to the `backend` folder:
   ```bash
   cd munna-web-profile-main/backend
   ```

2. Check `.env` configuration (a default `.env` has already been created):
   ```env
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/portfolio
   CORS_ORIGIN=http://localhost:5173
   ```
   *(If using MongoDB Atlas, replace `MONGODB_URI` with your Atlas connection string).*

3. Ensure MongoDB is running, then migrate data into MongoDB:
   ```bash
   npm run migrate
   ```

4. Start the backend server:
   ```bash
   npm run dev
   ```
   The backend will be running at `http://localhost:5000`.

### 2. Frontend Setup

In a separate terminal:
```bash
cd munna-web-profile-main/frontend
npm run dev
```

The frontend Vite server automatically proxies requests from `/api` to `http://localhost:5000`.

