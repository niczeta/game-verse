import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// ScrollToTop component - scrolls to the top of the page on every route change
export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Skip scrollToTop when navigating to "/" (home) and a section scroll is requested.
    // This prevents interfering with smooth section scrolls after actions like "Continue Shopping".
    const scrollToSection = localStorage.getItem("scrollToSection");
    if (pathname === "/" && scrollToSection === "pc-games") {
      // Let the HomePage handle the custom scroll instead.
      return;
    }
    // By default: scroll to top whenever the route changes.
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);

  // This component is for side effects only and does not render anything.
  return null;
};
