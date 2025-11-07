// FeaturedGames section - displays a curated selection of featured games in a responsive grid
// Uses GameCard component to render individual game cards with images, videos, and pricing

import { GameCard } from "../components/Card";

// Type definition for game data structure
type Game = {
  id: number; // Unique identifier for the game
  title: string; // Game title displayed on card
  description: string; // Game description shown on card hover
  imageUrl: string; // URL to game thumbnail image
  videoUrl: string; // URL to game preview video (plays on hover)
  price: number | string; // Game price or "FREE" for free games
};

// Featured games data array - curated list of games to highlight
const featuredGames: Game[] = [
  {
    id: 1,
    title: "Cyber Quest",
    description:
      "Dive into an immersive futuristic RPG with huge open-world cities, advanced gear upgrades, and epic battles against powerful foes. Customize your character, explore hidden districts, and uncover a branching narrative shaped by your choices.",
    imageUrl: "/gta-img.webp",
    videoUrl: "/gta6.mp4",
    price: 34.99,
  },
  {
    id: 2,
    title: "Space Raiders",
    description:
      "Engage in intense space battles as you pilot advanced ships through asteroid belts and hostile warzones. Tackle solo missions, team up for multiplayer raids, upgrade your arsenal, and rise through galactic ranks to become a legendary raider.",
    imageUrl: "/gta-img.webp",
    videoUrl: "/gta6.mp4",
    price: 22.49,
  },
  {
    id: 3,
    title: "Mystic Lands",
    description:
      "Explore mystical realms filled with magic, danger, and ancient secrets. Solve environmental puzzles, master powerful spells, and fight mythical creatures to protect the world from a looming darkness. Your decisions determine the fate of old kingdoms!",
    imageUrl: "/gta-img.webp",
    videoUrl: "/gta6.mp4",
    price: "FREE",
  },
];

// FeaturedGames component - renders section with featured games in responsive grid layout
export const FeaturedGames = () => {
  return (
    <section
      className="bg-gray-950 p-4 sm:p-6 md:p-10"
      id="featured-games" // Anchor ID for smooth scrolling
      style={{ scrollMarginTop: "80px" }} // Offset for fixed header when scrolling to this section
    >
      {/* Section heading with fire emojis and responsive text alignment */}
      <h2 className="text-white text-3xl font-bold mb-6 text-center md:text-left mt-4">
        🔥 Featured Games 🔥
      </h2>

      {/* Responsive grid container - adapts column count based on screen size */}
      {/* 1 column on mobile, 2 on tablet, 3 on desktop */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {/* Map through featured games and render GameCard for each */}
        {featuredGames.map(
          ({ id, title, description, imageUrl, videoUrl, price }) => (
            <div key={id} className="group">
              {/* GameCard component - displays individual game with image, video preview, and price */}
              <GameCard
                id={id}
                title={title}
                description={description}
                imageUrl={imageUrl}
                videoUrl={videoUrl}
                price={price}
                // Callback when card is clicked - can be replaced with navigation logic
                onDetailsClick={() => alert(`Opening details for ${title}`)}
              />
            </div>
          )
        )}
      </div>
    </section>
  );
};
