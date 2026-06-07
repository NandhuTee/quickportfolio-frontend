# QuickPortfolio 🚀

A full-stack Portfolio CMS built with React, Node.js, Express, Prisma, and PostgreSQL.

QuickPortfolio allows developers to manage their portfolio through a custom dashboard and automatically generate a public portfolio website.

---

# ✨ Features

## 🔐 Authentication

* User Registration
* User Login
* JWT Authentication
* Protected Routes

## 👤 Portfolio Management

* Create/Edit Portfolio
* Bio Section
* Skills Management

## 🚀 Projects CMS

* Add Projects
* Edit Projects
* Delete Projects
* GitHub + Live Demo Links

## 💼 Experience Management

* Add Experience
* Delete Experience
* Timeline Display

## 🔗 Social Links

* Add Social Links
* Delete Links
* Public Portfolio Integration

## 🌍 Public Portfolio Website

* Dynamic Portfolio Pages
* Responsive Design
* Skills Section
* Projects Grid
* Experience Timeline
* Social Links Section

---

# 🛠️ Tech Stack

## Frontend

* React
* Vite
* Tailwind CSS
* React Router DOM

## Backend

* Node.js
* Express.js
* Prisma ORM
* PostgreSQL

## Deployment

* Vercel (Frontend)
* Render (Backend + Database)
Live Demo
Frontend: [https://quickportfolio-frontend-llno.vercel.app/]
Backend API: [https://quickportfolio-backend.onrender.com/]

---

# 📁 Project Structure

## Frontend

```bash
src/
 ├── components/
 ├── pages/
 ├── router/
 ├── App.jsx
 └── main.jsx
```

## Backend

```bash
src/
 ├── controllers/
 ├── routes/
 ├── middleware/
 ├── prisma/
 └── server.js
```

---

# ⚙️ Installation

## 1️⃣ Clone Repository

```bash
git clone <repo-url>
```

---

# 🚀 Frontend Setup

```bash
cd quickportfolio-frontend
npm install
npm run dev
```

Frontend runs on:

```bash
http://localhost:5173
```

---

# 🚀 Backend Setup

```bash
cd quickportfolio-backend
npm install
```

Create `.env`

```env
DATABASE_URL="your_postgresql_url"

JWT_SECRET="your_secret"

PORT=5000
```

Run Prisma:

```bash
npx prisma generate
npx prisma migrate dev
```

Start backend:

```bash
npm run dev
```

Backend runs on:

```bash
http://localhost:5000
```

---

# 🗄️ Database Models

* User
* Portfolio
* Project
* Experience
* SocialLink

---

# 📸 Video

Video Link :[ https://youtu.be/Bth22bpWtMs]
---

# 🔮 Future Improvements

* Profile Image Upload
* PDF Resume Download
* Contact Form
* Blog CMS
* Dark Mode
* Portfolio Analytics
* Admin Sidebar Navigation

---

# 🧠 What I Learned

This project helped me improve my understanding of:

* Full-stack architecture
* React component design
* REST API development
* Prisma ORM
* PostgreSQL integration
* Authentication systems
* CRUD workflows
* Deployment debugging

---

# 📄 License

MIT License

---

# 🙌 Acknowledgements

Built for the GitHub Finish-Up-A-Thon Challenge.
