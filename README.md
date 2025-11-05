# 🎮 game-verse

A **frontend-only gaming e-commerce platform** showcasing modern web development skills. This is a fully functional demonstration project with realistic UI/UX, smooth interactions and complete user workflows.


⚠️ **Disclaimer:** This is a frontend demonstration project. All transactions, payments, and backend operations are simulated for showcase purposes only.


## ✨ Features

- 🎮 **10,000+ Games** browsable across PC, PlayStation, Xbox, and Nintendo Switch platforms
- 💰 **Realistic Pricing** with tax calculations and order summaries
- 🛒 **Fully Functional Shopping Cart** with add/remove items and persistent storage
- 🎬 **Video Previews** for each game
- 👥 **Multi-Page Navigation** with smooth scrolling and anchor links
- 📱 **Fully Responsive Design** optimized for mobile, tablet, and desktop
- ✨ **Smooth Animations & Transitions** throughout the app
- 🔄 **Realistic Checkout Flow** with loading states and success messages


## 🎯 Project Purpose

This project demonstrates:
- **React & TypeScript** skills with component-based architecture
- **Tailwind CSS** expertise for responsive, modern design
- **State Management** using React hooks (useState, useEffect)
- **Routing** with React Router v6
- **Local Storage** for cart persistence
- **UI/UX Design** principles with smooth interactions
- **Attention to Detail** in animations and user feedback


## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn


### Installation

Clone the repository
git clone https://github.com/niczeta/game-verse.git

Navigate to project
cd game-verse

Install dependencies
npm install

Start development server
npm run dev

Visit `http://localhost:5173` in your browser.


## 🛠️ Tech Stack

- **Frontend:** React 18 + TypeScript
- **Styling:** Tailwind CSS 3
- **Routing:** React Router v6
- **Icons:** React Icons
- **State Management:** React Hooks (useState, useEffect, useContext)
- **Storage:** Browser LocalStorage
- **Build Tool:** Vite


## 📖 Pages Overview


### 🏠 Home Page
- **Hero Section** with animated title and dual CTA buttons
- **Featured Games** section with scroll-to-section navigation
- **Multi-Platform Gallery** showcasing games by platform (PC, PS5, Xbox, Switch)
- Each game card is interactive and clickable


### 🛒 Shopping Cart
- **Add/Remove Items** with real-time updates
- **Cart Persistence** using localStorage (cart survives page refresh)
- **Order Summary** with automatic calculations
- **Tax Calculation** (10% of subtotal)
- **Checkout Simulation** with 3-second loading animation
- **Success Message** with auto-redirect to gallery
- **Empty Cart State** with helpful messaging


### 🔐 Authentication Page
- **Sign In / Sign Up Toggle** with smooth transitions
- **Form Validation** (email format, password strength, confirmation)
- **Password Visibility Toggle** for better UX
- **Social Login Buttons** (Google, Discord) - non-functional (demo)
- **Terms & Conditions** checkbox
- **Animated Success Message** after auth


### ℹ️ About Page
- **Company Story** and mission
- **Features Highlight** with icons
- **Stats Section** showing platform metrics
- **Call-to-Action** buttons (Email & Contact Form)


## 🎨 Design Highlights

- **Gradient Color Scheme:** Cyan, Indigo, and Yellow for modern gaming aesthetic
- **Smooth Animations:** Page transitions, button hovers, scroll effects
- **Responsive Grid:** Adapts from 1 column (mobile) to 4 columns (desktop)
- **Sticky Components:** Floating cart summary on checkout page
- **Loading States:** Visual feedback during checkout process
- **Form Feedback:** Real-time validation and error messages


## 🔄 User Flows

### Shopping Flow
1. Browse games across different platforms
2. Click on game to view details
3. Add to cart (stored in localStorage)
4. View cart with running total
5. Proceed to checkout (simulated)
6. See success message
7. Auto-redirect to gallery to continue shopping


### Authentication Flow
1. Sign In or Sign Up toggle
2. Fill form with validation
3. Submit (simulated)
4. Loading animation
5. Success message
6. Redirect to home


### Navigation Flow
1. Smooth scroll to sections using anchor links
2. Navbar highlights active page
3. Footer provides quick access to all sections
4. "Continue Shopping" buttons redirect to specific galleries


## 💡 Key Features Explained

### LocalStorage Cart
// Cart items persist even after closing the browser
const saved = localStorage.getItem("cart");
setCartItems(JSON.parse(saved));


### Smooth Scroll Navigation
const element = document.getElementById("pc-games");
element.scrollIntoView({ behavior: "smooth" });


### Form Validation
- Email format checking
- Password minimum length (6 characters)
- Password confirmation matching
- Terms acceptance required


### Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px)
- Touch-friendly buttons and spacing


## 🎯 What This Demonstrates

| Skill | Evidence |
|-------|----------|
| **React** | Component reusability, hooks, state management |
| **TypeScript** | Type safety throughout the app |
| **Tailwind CSS** | Responsive design, custom animations |
| **UI/UX** | Smooth transitions, clear feedback, accessibility |
| **Problem Solving** | Cart persistence, form validation, navigation |
| **Attention to Detail** | Animations, loading states, error handling |


## 📝 Simulated Features

⚠️ **The following features are simulated (non-functional):**
- 💳 Payment processing (checkout simulation only)
- 🔐 User authentication (form submission is simulated)
- 🔗 Social login (Google, Discord buttons don't authenticate)
- 📧 Email sending (contact form doesn't send emails)
- 🗄️ Backend API (all data is hardcoded in the frontend)


## 🚀 Future Enhancements (Production Ready)

- [ ] **Backend Integration** (Node.js / Express)
- [ ] **Real Payment Processing** (Stripe, PayPal)
- [ ] **User Authentication** (JWT, OAuth)
- [ ] **Database** (MongoDB, PostgreSQL)
- [ ] **User Accounts** (Wishlist, Order History)
- [ ] **Game Reviews & Ratings**
- [ ] **Search & Advanced Filtering**
- [ ] **Admin Dashboard**



## 🔗 Live Demo

🌐 **Live on Vercel:** [https://game-verse-mocha.vercel.app/](https://game-verse-mocha.vercel.app/)


## 📄 License

This project is provided for **viewing and educational purposes only**.

**Restrictions:**
- ❌ Unauthorized commercial use
- ❌ Copying or distribution without permission
- ❌ Creating derivative works without consent

For inquiries or to discuss this project: nicolemisuraca@outlook.it


## 👨‍💻 Author

** Nicole Misuraca **
- 🔗 GitHub: [@niczeta](https://github.com/niczta)
- 📧 Email: nicolemisuraca@outlook.it
- 💼 Linkedin: https://www.linkedin.com/in/nicolemisuraca

---

## 🙋 Questions or Feedback?

Feel free to reach out! I'm always excited to discuss web development, React, or this project.

---

Made with ❤️ as a demonstration of modern frontend development skills.


<!-- # React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
``` -->
