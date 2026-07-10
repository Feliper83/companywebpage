# 🚀 Cybevite - Software Solutions Platform

![Node.js](https://img.shields.io/badge/Node.js-20.19+-green)
![React](https://img.shields.io/badge/React-19.1-blue)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-14+-blue)
![License](https://img.shields.io/badge/license-MIT-green)

> Modern fullstack web application for software solutions and services, featuring multilingual support (EN/ES) and serverless deployment to AWS.

---

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Architecture](#-architecture)
- [Prerequisites](#-prerequisites)
- [Installation](#-installation)
- [Configuration](#-configuration)
- [Usage](#-usage)
- [Deployment](#-deployment)
- [API Documentation](#-api-documentation)
- [Project Structure](#-project-structure)
- [Scripts](#-scripts)
- [Contributing](#-contributing)
- [License](#-license)

---

## ✨ Features

- 🌐 **Multilingual Support** - English and Spanish (i18n with react-i18next)
- 📱 **Responsive Design** - Mobile-first approach with Bootstrap 5 + PrimeReact
- 🔄 **RESTful API** - Express.js backend with the `pg` PostgreSQL driver
- 🗄️ **PostgreSQL Database** - Hosted on Neon (serverless Postgres)
- ☁️ **Serverless Deployment** - AWS Lambda (backend) + S3/CloudFront (frontend)
- ⚙️ **CI/CD** - Automated deploys to AWS on push to `main` via GitHub Actions
- 📝 **Content Management** - Dynamic sections, blogs, services, and jobs
- 💼 **Career Portal** - Job listings with application system
- 📧 **Contact Forms** - Integrated contact and application handling
- 🎨 **Modern UI** - Font Awesome icons, Swiper carousels, PrimeReact components

---

## 🛠 Tech Stack

### Frontend
- **React 19** - UI library
- **Vite 7** - Build tool and dev server
- **React Router 7** - Client-side routing
- **i18next / react-i18next** - Internationalization
- **Bootstrap 5 / react-bootstrap** - CSS framework
- **PrimeReact** - UI components
- **Swiper** - Touch slider

### Backend
- **Express 5** - Web framework
- **pg** - PostgreSQL driver (no ORM)
- **PostgreSQL (Neon)** - Relational database
- **serverless-http** - Adapter to run Express on AWS Lambda
- **CORS** - Cross-origin resource sharing

### DevOps
- **AWS Lambda** - Serverless compute for the API
- **AWS S3 + CloudFront** - Static hosting and CDN for the frontend
- **Serverless Framework** - Backend deployment automation
- **GitHub Actions** - CI/CD (see `.github/workflows/deploy.yml`)

---

## 🏗 Architecture

```
┌─────────────────────────────────────────┐
│  FRONTEND (React SPA)                   │
│  - Vite Dev Server (Port 5173+)         │
│  - Production: S3 + CloudFront          │
└─────────────────────────────────────────┘
              ↓ HTTP/REST
┌─────────────────────────────────────────┐
│  BACKEND (Express API)                  │
│  - Local: Port 3001                     │
│  - Production: AWS Lambda               │
└─────────────────────────────────────────┘
              ↓ pg (node-postgres)
┌─────────────────────────────────────────┐
│  DATABASE (PostgreSQL)                  │
│  - Development: Local instance          │
│  - Production: Neon PostgreSQL          │
└─────────────────────────────────────────┘
```

---

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** >= 20.19.0 or >= 22.12.0
- **npm** >= 10.8.2
- **PostgreSQL** >= 14.0 (for local development)
- **Git**

---

## 🚀 Installation

### 1. Clone the repository

```bash
git clone https://github.com/Feliper83/companywebpage.git
cd cybevite
```

### 2. Install dependencies

```bash
npm install
cd src/server && npm install && cd ../..
```

### 3. Set up environment variables

Copy `env.example.txt` to `.env` in the project root and to `src/server/.env`, then fill in the values (database connection string, API URL, etc).

### 4. Initialize the database

```bash
cd src/server
npm run seed          # loads db/seed.sql
cd ../..
```

---

## ⚙️ Configuration

### Database Configuration

Set `DATABASE_URL` in `src/server/.env`:

```env
DATABASE_URL="postgresql://USERNAME:PASSWORD@HOST:PORT/DATABASE?sslmode=require"
```

### Vite Proxy Configuration

The development server proxies API requests to the backend. See `vite.config.js`:

```javascript
server: {
  proxy: {
    '/api': {
      target: 'http://localhost:3001',
      changeOrigin: true
    }
  }
}
```

---

## 💻 Usage

### Development Mode

**Start both frontend and backend:**
```bash
npm run dev
```

This runs:
- Frontend: `http://localhost:5173` (Vite picks the next free port if busy)
- Backend: `http://localhost:3001`

**Start services separately:**
```bash
# Backend only
npm run server:dev

# Frontend only
npm run client:dev
```

### Production Build

```bash
# Build frontend
npm run client:build

# Preview production build
npm run client:preview
```

---

## 🌐 Deployment

Production deploys are automated: every push to `main` triggers `.github/workflows/deploy.yml`, which deploys the backend (Lambda) and then the frontend (S3 + CloudFront invalidation). See [DEPLOYMENT.md](DEPLOYMENT.md) for the full guide, manual deploy steps, and rollback instructions.

---

## 📚 API Documentation

### Base URL
- Development: `http://localhost:3001/api`
- Production: see `VITE_API_URL` / API Gateway URL from the Lambda deploy

### Endpoints

```http
GET  /api/sections?lang_code=en
GET  /api/abouts?lang_code=en
GET  /api/services?lang_code=en
GET  /api/blogs?lang_code=en
GET  /api/languages
GET  /api/benefits?lang_code=en
GET  /api/jobs?lang_code=en
POST /api/apply
GET  /api/company?lang_code=en
GET  /api/contacts
POST /api/contacts
```

---

## 📁 Project Structure

```
cybevite/
├── public/                 # Static assets
│   ├── images/            # Images and media
│   ├── css/                # Global styles
│   ├── js/                 # External scripts
│   └── webfonts/           # Font Awesome fonts
├── src/
│   ├── assets/             # React assets
│   ├── components/         # Reusable components (Navbar, Footer, LazyImage)
│   ├── pages/               # Page components (Home, About, Solutions, ...)
│   ├── config/              # Configuration (api.js, socialLinks.js)
│   ├── js/                  # Legacy scripts loaded by pages
│   ├── server/               # Backend code
│   │   ├── controllers/     # Request handlers
│   │   ├── services/        # Business logic
│   │   ├── routes/          # API routes
│   │   ├── db/               # SQL seed/migration files
│   │   ├── db.js             # Database connection (pg Pool)
│   │   ├── serverless.yml    # Serverless Framework config
│   │   └── index.js          # Server entry point
│   ├── i18n.js               # Internationalization setup
│   ├── App.jsx                # Main App component
│   └── main.jsx                # React entry point
├── .github/workflows/deploy.yml  # CI/CD pipeline
├── dist/                   # Production build (generated, not committed)
├── package.json
├── vite.config.js
└── README.md
```

---

## 📜 Scripts

### Development
```bash
npm run dev              # Start both servers
npm run client:dev       # Start frontend only
npm run server:dev       # Start backend only
```

### Build
```bash
npm run client:build     # Build frontend for production
npm run client:preview   # Preview production build
```

### Database
```bash
npm run seed               # Seed data (src/server/seed.js)
npm run migrate:services   # Run services migration
```

### Utilities
```bash
npm run lint              # Run ESLint
npm run backend:offline   # Run serverless offline for local Lambda testing
```

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

See [REGLAS-DE-ORO.md](REGLAS-DE-ORO.md) for project conventions and code patterns.

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👥 Team

**Cybevite Team** - [Website](https://cybevite.com)

---

## 📞 Support

For support, email support@cybevite.com or open an issue on GitHub.

---

## 🎯 Roadmap

- [ ] Add authentication (JWT)
- [ ] Implement admin dashboard
- [ ] Add unit tests
- [ ] Docker containerization
- [ ] API rate limiting
- [ ] Email notifications
- [ ] File upload for CVs
- [ ] Analytics dashboard

---

Made with ❤️ by Cybevite Team
