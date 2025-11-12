// Main App component - sets up routing, page transitions, and layout structure for the entire application
// Uses Framer Motion for smooth page entrance/exit animations and React Router for navigation

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import "./index.css";
import { motion, AnimatePresence } from "framer-motion";
import { Layout } from "./layout/Layout";
import { ScrollToTop } from "./layout/ScrollToTop";
import { About } from "./paths/About";
import { ContactPage } from "./paths/ContactPage";
import { AuthPage } from "./paths/AuthPage";
import { FAQPage } from "./paths/FAQPage";
import { Cart } from "./paths/Cart";
import { HomePage } from "./paths/HomePage";
import { GameDetailPage } from "./paths/GameDetailPage";

// Type definition for PageWrapper component props
type PageWrapperProps = {
  children: React.ReactNode; // Page content to be animated
};

// PageWrapper component - wraps each page with entrance/exit animations using Framer Motion
const PageWrapper = ({ children }: PageWrapperProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
};

// AnimatedRoutes component - manages all application routes with page transition animations
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* Layout wrapper - Navbar and Footer persist across all routes */}
        <Route element={<Layout />}>
          {/* Home page */}
          <Route
            path="/"
            element={
              <PageWrapper>
                <HomePage />
              </PageWrapper>
            }
          />

          {/* Game detail page (dettaglio dinamico) */}
          <Route
            path="/game/:id"
            element={
              <PageWrapper>
                <GameDetailPage />
              </PageWrapper>
            }
          />

          {/* Authentication page */}
          <Route
            path="/auth-page"
            element={
              <PageWrapper>
                <AuthPage />
              </PageWrapper>
            }
          />

          {/* Contact page */}
          <Route
            path="/contact-page"
            element={
              <PageWrapper>
                <ContactPage />
              </PageWrapper>
            }
          />

          {/* About page */}
          <Route
            path="/about-page"
            element={
              <PageWrapper>
                <About />
              </PageWrapper>
            }
          />

          {/* FAQ page */}
          <Route
            path="/faq-page"
            element={
              <PageWrapper>
                <FAQPage />
              </PageWrapper>
            }
          />

          {/* Cart page */}
          <Route
            path="/cart-page"
            element={
              <PageWrapper>
                <Cart />
              </PageWrapper>
            }
          />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

// Main App component - root component that sets up Router and global app structure
const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <AnimatedRoutes />
    </Router>
  );
};

export default App;
