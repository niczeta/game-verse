import { FeaturedGames } from "../sections/FeaturedGames";
import { GamesGallery } from "../sections/Gallery";
import { HeroSection } from "../sections/Hero";


export const Home = () => {
  return (
    <div className="w-full min-h-screen bg-neutral-50">
        <HeroSection />
        <FeaturedGames />
        <GamesGallery />
    </div>
  );
};
