// Home page - main landing page that displays hero section, featured games, and games gallery
// Composed of reusable section components for a modular and maintainable structure

import { GamesGallery } from "../sections/Gallery";
import { HeroSection } from "../sections/Hero";

// HomePage component - renders the main landing page with three key sections
export const HomePage = () => {
  return (
    <div className="w-full min-h-screen bg-neutral-50">
      {/* Hero Section - Main banner with call-to-action and marketing message */}
      <HeroSection />

      {/* Games Gallery Section - Displays full catalog of games available for purchase */}
      <GamesGallery />
    </div>
  );
};
