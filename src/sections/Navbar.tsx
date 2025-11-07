// Navbar component - responsive navigation bar with desktop and mobile menu support
// Features logo, navigation links, authentication button, and mobile hamburger menu with smooth transitions

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink, Link } from "react-router-dom";
import { Button } from "../form-components/Button";

// Navigation links array - defines all available pages in the navbar
const navLinks = [
  { name: "Home", to: "/" },
  { name: "About", to: "/about-page" },
  { name: "FAQ", to: "/faq-page" },
  { name: "Contact Us", to: "/contact-page" },
  { name: "Cart", to: "/cart-page" },
];

// Navbar component - renders sticky header with navigation and authentication options
export const Navbar = () => {
  // Track mobile menu open/closed state
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-slate-950 via-indigo-950 to-slate-950 text-white sticky top-0 z-50 shadow-lg border-b border-indigo-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top navbar row - contains logo, desktop nav, and buttons */}
        <div className="flex items-center justify-between h-20">
          {/* Logo Section - clickable link to home page */}
          <Link
            to="/"
            className="flex items-center cursor-pointer select-none hover:opacity-90 transition"
          >
            <img src="/logo.png" alt="GameVerse Logo" className="size-32" />
          </Link>

          {/* Desktop Navigation - visible on medium+ screens (hidden on mobile) */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.to}
                className={({ isActive }) =>
                  // Active state shows cyan background and text, inactive shows on hover
                  `transition font-medium px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 ${
                    isActive
                      ? "text-cyan-400 bg-cyan-400/10" // Active link styling
                      : "text-gray-300 hover:text-cyan-400 hover:bg-cyan-400/5" // Inactive link styling
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Join Now Button (Desktop) - visible on medium+ screens, hidden on mobile */}
          <div className="hidden md:block">
            <Link to="/auth-page">
              <Button
                text="Join Now"
                variant="gradient"
                size="small"
                className="font-semibold rounded-full"
              />
            </Link>
          </div>

          {/* Mobile Menu Toggle Button - visible only on mobile, hidden on medium+ screens */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu" // Accessibility label for screen readers
              aria-expanded={isOpen} // Indicates menu open/closed state
              className="text-gray-300 hover:text-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded-lg p-1 transition"
            >
              {/* Menu icon (hamburger) when closed, X icon when open */}
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown - slides down when menu is open on mobile */}
      <div
        className={`md:hidden bg-slate-900/95 backdrop-blur border-t border-indigo-900/30 transition-[max-height] duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-screen" : "max-h-0" // Height transitions smoothly based on isOpen state
        }`}
      >
        {/* Mobile menu content - navigation links and join button */}
        <div className="px-4 pt-2 pb-4 space-y-2">
          {/* Mobile Navigation Links - same links as desktop but as block elements */}
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.to}
              className={({ isActive }) =>
                // Active state shows cyan background and text, inactive shows on hover
                `block px-3 py-2.5 rounded-lg font-medium transition focus:outline-none focus:ring-2 focus:ring-cyan-400 ${
                  isActive
                    ? "text-cyan-400 bg-cyan-400/10" // Active link styling
                    : "text-gray-300 hover:text-cyan-400 hover:bg-cyan-400/5" // Inactive link styling
                }`
              }
              // Close mobile menu when link is clicked
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </NavLink>
          ))}

          {/* Mobile Join Now Button - separator line then full-width button */}
          <div className="pt-2 mt-2 border-t border-indigo-900/30">
            <Link
              to="/auth-page"
              onClick={() => setIsOpen(false)}
              className="block"
            >
              <Button
                text="Join Now"
                variant="gradient"
                size="small"
                className="w-full font-semibold rounded-full"
              />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
