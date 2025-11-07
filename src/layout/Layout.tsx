// Main layout wrapper component that provides consistent page structure
// Renders Navbar at top, page content in middle via Outlet, and Footer at bottom
// Used with React Router to maintain layout across all pages

import { Outlet } from "react-router-dom";
import { Footer } from "../sections/Footer";
import { Navbar } from "../sections/Navbar";

// Layout component that creates the standard page structure with header, content, and footer
// Outlet renders the current page content based on the active route
export const Layout = () => {
  return (
    <>
      {/* Navigation bar - displayed at top of every page */}
      <Navbar />

      {/* Page content - renders different components based on current route */}
      <Outlet />

      {/* Footer - displayed at bottom of every page */}
      <Footer />
    </>
  );
};
