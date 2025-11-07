// Custom hook component that automatically scrolls to top of page when route changes
// Prevents users from landing mid-page when navigating to a new route

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// ScrollToTop component - automatically scrolls viewport to top whenever the current route changes
// useLocation hook detects pathname changes and triggers scroll on each page navigation
export const ScrollToTop = () => {
  // Get current pathname from URL
  const { pathname } = useLocation();

  // Scroll to top whenever pathname changes (i.e., when user navigates to a different page)
  // behavior "auto" scrolls instantly; use "smooth" for animated scroll effect
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);

  // Component returns null as it only handles side effects, doesn't render any UI
  return null;
};
