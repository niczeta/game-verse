import { useEffect } from "react";
import { GamesGallery } from "../sections/Gallery";
import { HeroSection } from "../sections/Hero";

export const HomePage = () => {
  useEffect(() => {
    const scrollToSection = localStorage.getItem("scrollToSection");
    if (scrollToSection === "pc-games") {
      const element = document.getElementById("pc-games");
      if (element) {
        const yOffset = -80; // Offset: adjust for sticky navbar if needed
        const y =
          element.getBoundingClientRect().top +
          window.pageYOffset +
          yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
      localStorage.removeItem("scrollToSection");
    }
  }, []);

  return (
    <div className="w-full min-h-screen bg-neutral-50">
      <HeroSection />
      <section id="pc-games">
        <GamesGallery />
      </section>
    </div>
  );
};
