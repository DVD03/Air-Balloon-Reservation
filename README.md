# Balloon Reservation System

This repository contains a **full-stack balloon ride reservation platform** composed of a Node.js/Express backend with MongoDB and a React + Vite frontend with TailwindCSS.

## 🗂️ Project Structure

- **backend/** – REST API server built with Express and Mongoose.
  - `index.js` – entry point
  - `controllers/` – request handlers for bookings, customers, and pilots
  - `models/` – Mongoose schemas (UserModel, BookingModel, pilot)
  - `routes/` – Express routers
  - `utils/` – helper modules (email templates, sendEmail.js)
  - `mongoose/` – connection setup
- **frontend/** – client application using React, Vite, TailwindCSS and Ant Design.
  - `src/` – components, views and routing logic
  - `public/` – static assets

## 🚀 Features

- User registration/login (customers & pilots)
- Booking creation, viewing and updates
- Pilot management and salary timetable
- Stripe payment integration
- Email notifications via Nodemailer
- Admin dashboard for managing users and bookings

## 🔧 Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm or yarn
- MongoDB instance (local or Atlas)

### Backend Setup

1. Navigate to the backend folder:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file with your configuration, e.g.:
   ```env
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/balloon
   JWT_SECRET=your_secret
   STRIPE_KEY=your_stripe_key
   EMAIL_USER=your_email@example.com
   EMAIL_PASS=your_email_password
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

### Frontend Setup

1. Change to the frontend directory:
   ```bash
   cd ../frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## ⚙️ Scripts

- `npm run dev` – start development server (both backend and frontend spawn with their own commands)
- `npm run build` (frontend) – build production assets
- `npm test` – placeholder for tests

## 📁 Deployment

Deploy the backend to any Node hosting (Heroku, DigitalOcean, etc.) and point the frontend's API base URL to your backend. Build the frontend with `npm run build` and serve the static files from a CDN or web server.

## 🛠️ Technologies

- **Backend:** Node.js, Express, MongoDB, Mongoose, Nodemailer, Stripe, bcrypt, dotenv
- **Frontend:** React, Vite, Tailwind CSS, Ant Design, axios, react-router-dom

## 🤝 Contributing

Contributions are welcome! Please fork the repo, create a feature branch, and submit a pull request.

## 📄 License

This project is provided under the [ISC License](https://opensource.org/licenses/ISC).

---

> Developed for a balloon reservation demonstration project.
