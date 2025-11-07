// Hero Section component - full-screen landing page banner with animated elements, CTA buttons, and scroll indicator
// Features gradient background, animated text, and smooth scroll navigation to featured games

import { Button } from "../form-components/Button";
import { FaChevronDown } from "react-icons/fa";

export const HeroSection = () => {
  // Scroll to featured games section with smooth scrolling behavior
  // Finds the featured-games element and scrolls it into view smoothly
  const handleScrollToFeatured = () => {
    const featuredSection = document.getElementById("featured-games");
    if (featuredSection) {
      featuredSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-screen overflow-hidden flex items-center justify-center bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950">
      {/* Dark gradient overlay - enhances text readability by darkening background behind content */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/80 pointer-events-none"></div>

      {/* Animated background shapes - subtle decorative blobs for visual depth and movement */}
      {/* Cyan blob - top left corner with pulse animation */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl opacity-20 animate-pulse pointer-events-none"></div>

      {/* Indigo blob - bottom right corner with pulse animation */}
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl opacity-20 animate-pulse pointer-events-none"></div>

      {/* Main content wrapper - centered with z-index above background, slightly offset upward */}
      <div
        className="relative z-10 flex flex-col items-center justify-center text-center px-6 w-full max-w-4xl mx-auto"
        style={{ marginTop: "-120px" }}
      >
        {/* Subtitle badge - introduces platform concept with frosted glass effect */}
        <div className="mb-4 inline-block px-3 py-1.5 rounded-full bg-white/5 backdrop-blur border border-cyan-400/40 animate-fade-in">
          <span className="text-xs sm:text-sm font-medium text-cyan-300">
            🎮 Welcome to the next generation of gaming
          </span>
        </div>

        {/* Main Hero Title - large prominent heading with cyan glow text-shadow effect */}
        {/* GameVerse is highlighted in yellow with enhanced glow */}
        <h1
          className="text-5xl sm:text-6xl lg:text-7xl font-extrabold animate-titlepop tracking-tight mb-3 leading-tight whitespace-nowrap"
          style={{
            color: "#fff", // White text with cyan glow effect
            textShadow:
              "0 0 20px rgba(31, 225, 255, 0.8), 0 0 40px rgba(96, 239, 255, 0.5), 0 4px 20px rgba(0,0,0,0.9)",
          }}
        >
          Welcome to{" "}
          <span
            style={{
              color: "#FACC15", // Yellow color for brand name
              textShadow:
                "0 0 30px rgba(250, 204, 21, 0.9), 0 0 60px rgba(255, 215, 0, 0.6), 0 4px 20px rgba(0,0,0,0.9)", // Yellow glow effect
            }}
          >
            GameVerse
          </span>
        </h1>

        {/* Description text - key value proposition about pricing and game selection */}
        <p className="mb-8 text-sm sm:text-base lg:text-lg text-gray-200 animate-fade-in2 max-w-2xl mx-auto font-medium drop-shadow-lg leading-relaxed">
          Discover thousands of games across all platforms at{" "}
          <span className="text-yellow-400 font-bold">unbeatable prices</span>.
        </p>

        {/* CTA Buttons Container - two call-to-action buttons for user engagement */}
        <div className="flex flex-col sm:flex-row gap-3 animate-fade-in3">
          {/* Shop Now button - primary CTA using gradient variant */}
          {/* Calls handleScrollToFeatured on click */}
          <Button
            text="Shop Now"
            variant="gradient"
            size="large"
            onClick={handleScrollToFeatured}
            className="max-w-[180px]"
          />

          {/* Explore Games button - secondary CTA with outline style */}
          {/* Alternative option for users preferring secondary action */}
          <button
            onClick={handleScrollToFeatured}
            className="px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base font-semibold rounded-md border-2 border-cyan-400 text-cyan-300 hover:bg-cyan-400/20 hover:scale-105 transition-all duration-300"
          >
            Explore Games
          </button>
        </div>
      </div>

      {/* Scroll Indicator - animated chevron button prompting users to scroll down */}
      {/* Shows text and bouncing chevron icon positioned at bottom of screen */}
      <button
        onClick={handleScrollToFeatured}
        className="absolute z-20 left-1/2 -translate-x-1/2 animate-bounce hover:opacity-70 transition cursor-pointer focus:outline-none"
        style={{ bottom: "20%" }} // Position 20% from bottom
        aria-label="Scroll to featured games" // Accessibility label
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs sm:text-sm text-gray-300 whitespace-nowrap font-medium">
            Scroll to explore
          </span>
          {/* Animated chevron icon with pulse effect */}
          <FaChevronDown className="text-cyan-400 text-2xl sm:text-3xl animate-pulse" />
        </div>
      </button>

      {/* Custom CSS Animations - defines fade-in and title pop effects for smooth entrance animations */}
      <style>
        {`
          /* Subtitle fade-in animation - slides up from bottom with fade effect */
          @keyframes fadeIn {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }


          /* Description text fade-in animation - staggered with more distance */
          @keyframes fadeIn2 {
            0% { opacity: 0; transform: translateY(30px); }
            100% { opacity: 1; transform: translateY(0); }
          }


          /* Buttons fade-in animation - staggered with most distance */
          @keyframes fadeIn3 {
            0% { opacity: 0; transform: translateY(40px); }
            100% { opacity: 1; transform: translateY(0); }
          }


          /* Title pop animation - expands letter spacing and fades in from top */
          @keyframes titlepop {
            0% { 
              letter-spacing: 10px; // Wide initial spacing
              opacity: 0;
              transform: translateY(-20px); // Start higher
            }
            100% { 
              letter-spacing: 2px; // Normal spacing
              opacity: 1;
              transform: translateY(0); // Move to final position
            }
          }


          /* Animation class assignments with timing and easing functions */
          .animate-fade-in { animation: fadeIn 0.8s cubic-bezier(.4,2,.7,.9) 0.2s both; }
          .animate-fade-in2 { animation: fadeIn2 0.8s cubic-bezier(.4,2,.7,.9) 0.4s both; }
          .animate-fade-in3 { animation: fadeIn3 0.8s cubic-bezier(.4,2,.7,.9) 0.6s both; }
          .animate-titlepop { animation: titlepop 1.2s cubic-bezier(.4,2,.7,.9) 0s both; }
        `}
      </style>
    </section>
  );
};
