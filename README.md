

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

 Step 3: Install the necessary dependencies.
npm i

 Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev

# ShopOfSmiles 🛍️ 

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![React](https://img.shields.io/badge/React-18-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue.svg)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.0-38B2AC.svg)](https://tailwindcss.com/)

An elegant e-commerce platform built with modern web technologies, featuring a responsive design and seamless shopping experience.

## 🚀 Features

- Responsive design for all devices
- Product catalog with categories
- Shopping cart functionality
- User-friendly interface
- Featured products showcase
- Newsletter subscription
- Category browsing

## 🛠️ Tech Stack

- **Frontend:** React, TypeScript, Tailwind CSS
- **UI Components:** shadcn/ui
- **State Management:** React Context
- **Routing:** React Router
- **Data Fetching:** TanStack Query

## 🏃‍♂️ Getting Started

1. **Clone the repository**
   ```bash
   git clone <YOUR_GIT_URL>
   ```

2. **Navigate to project directory**
   ```bash
   cd <YOUR_PROJECT_NAME>
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

The application will start running at `http://localhost:8080`

## 📝 Environment Variables

To run this project, you might need to add the following environment variables to your .env file:

```bash
VITE_API_URL=your_api_url
VITE_PUBLIC_URL=your_public_url
```

## 📁 Project Structure

```
src/
├── components/     # Reusable components
├── context/       # React context providers
├── data/          # Static data and constants
├── hooks/         # Custom React hooks
├── lib/           # Utility functions
└── pages/         # Page components
```

