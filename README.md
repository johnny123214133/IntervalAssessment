# Customer Support - Monorepo

A full-stack application featuring a beautiful customer support interface with Node.js backend and React frontend.

## 🚀 Quick Start

### Install Dependencies
```bash
npm run install:all
```

### Development Mode
```bash
npm run dev
```

This will start both the backend server (port 5000) and frontend development server (port 3000) concurrently.

### Individual Services

#### Frontend Development
```bash
npm run dev:frontend
```
Access at: http://localhost:3000

#### Backend Development
```bash
npm run dev:backend
```
API available at: http://localhost:5000

## 📁 Project Structure

```
├── frontend/           # React TypeScript frontend
│   ├── src/
│   ├── public/
│   └── package.json
├── backend/            # Node.js Express backend
│   ├── server.js
│   └── package.json
├── package.json        # Root package.json (monorepo)
└── README.md
```

## 🎨 Features

### Frontend
- Beautiful gradient landing page
- Animated "REDO Customer Support" button
- Responsive design with mobile-first approach
- Modern UI with Tailwind CSS
- Smooth animations and micro-interactions
- Professional typography with Inter font

### Backend
- Express.js REST API
- CORS enabled for frontend communication
- Security middleware (Helmet)
- Request logging (Morgan)
- Health check endpoint
- Support ticket creation endpoint

## 🔧 API Endpoints

- `GET /api/health` - Health check
- `GET /api/support` - Get support information
- `POST /api/support/ticket` - Create support ticket

## 🎯 Technologies Used

### Frontend
- React 18 with TypeScript
- Vite for fast development
- Tailwind CSS for styling
- Lucide React for icons
- Inter font for typography

### Backend
- Node.js with Express
- CORS for cross-origin requests
- Helmet for security
- Morgan for logging
- Nodemon for development

## 📝 Development Commands

- `npm run dev` - Start both frontend and backend
- `npm run dev:frontend` - Start only frontend
- `npm run dev:backend` - Start only backend  
- `npm run build` - Build frontend for production
- `npm run install:all` - Install all dependencies

## 🎨 Design Philosophy

This project follows Apple-level design aesthetics with:
- Clean, minimal interface
- Thoughtful animations and transitions
- Premium color gradients
- Consistent spacing and typography
- Responsive design patterns
- Accessible color contrasts

Built with ❤️ for exceptional customer experience.
