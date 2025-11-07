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

// Type definition for PageWrapper component props
type PageWrapperProps = {
  children: React.ReactNode; // Page content to be animated
};

// PageWrapper component - wraps each page with entrance/exit animations using Framer Motion
// Provides consistent fade and slide animations for all page transitions
const PageWrapper = ({ children }: PageWrapperProps) => {
  return (
    <motion.div
      // Initial state when page first mounts - invisible and slightly below
      initial={{ opacity: 0, y: 20 }}
      // Animate to state when page is active - fully visible and in final position
      animate={{ opacity: 1, y: 0 }}
      // Exit state when page is leaving - fades out and moves up
      exit={{ opacity: 0, y: -20 }}
      // Transition configuration - smooth fade and slide effect
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
};

// AnimatedRoutes component - manages all application routes with page transition animations
// Uses AnimatePresence to handle enter/exit animations during route changes
const AnimatedRoutes = () => {
  // Get current location to trigger re-renders on route changes
  const location = useLocation();

  return (
    // AnimatePresence enables exit animations when routes change
    <AnimatePresence mode="wait">
      {/* Routes component with location key to detect navigation changes */}
      <Routes location={location} key={location.pathname}>
        {/* Layout wrapper - Navbar and Footer persist across all routes */}
        <Route element={<Layout />}>
          {/* Home page - main landing page with hero and featured games */}
          <Route
            path="/"
            element={
              <PageWrapper>
                <HomePage />
              </PageWrapper>
            }
          />

          {/* Authentication page - sign in and sign up forms */}
          <Route
            path="/auth-page"
            element={
              <PageWrapper>
                <AuthPage />
              </PageWrapper>
            }
          />

          {/* Contact page - contact form and business information */}
          <Route
            path="/contact-page"
            element={
              <PageWrapper>
                <ContactPage />
              </PageWrapper>
            }
          />

          {/* About page - company information and features */}
          <Route
            path="/about-page"
            element={
              <PageWrapper>
                <About />
              </PageWrapper>
            }
          />

          {/* FAQ page - frequently asked questions organized by category */}
          <Route
            path="/faq-page"
            element={
              <PageWrapper>
                <FAQPage />
              </PageWrapper>
            }
          />

          {/* Cart page - shopping cart and checkout */}
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
      {/* ScrollToTop component - automatically scrolls page to top on route changes */}
      <ScrollToTop />

      {/* AnimatedRoutes component - renders all routes with page transition animations */}
      <AnimatedRoutes />
    </Router>
  );
};

// Export App as default - entry point for the React application
export default App;
