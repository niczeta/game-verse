import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import "./index.css";
import { motion, AnimatePresence } from "framer-motion";
import { Layout } from "./layout/Layout";
import { ScrollToTop } from "./layout/ScrollToTop";
import { About } from "./paths/About";
import { ContactPage } from "./paths/ContactPage";
import { AuthPage } from "./paths/AuthPage";
import { Home } from "./paths/home";
import { FAQPage } from "./paths/FAQPage";
import { Cart } from "./paths/Cart";

type PageWrapperProps = {
  children: React.ReactNode;
};

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

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
      <Route element={<Layout />}>
        <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
        <Route path="/auth-page" element={<PageWrapper><AuthPage /></PageWrapper>} />
        <Route path="/contact-page" element={<PageWrapper><ContactPage /></PageWrapper>} />
        <Route path="/about-page" element={<PageWrapper><About /></PageWrapper>} />
        <Route path="/faq-page" element={<PageWrapper><FAQPage /></PageWrapper>} />
        <Route path="/cart-page" element={<PageWrapper><Cart /></PageWrapper>} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <AnimatedRoutes />
    </Router>
  );
};

export default App;
