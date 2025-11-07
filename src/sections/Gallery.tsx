// GamesGallery component - displays games organized by gaming platform (PC, PlayStation, Xbox, Nintendo Switch)
// Each platform section has its own grid of game cards with unique IDs to prevent key conflicts

import { SiNintendo } from "react-icons/si";
import { GameCard } from "../components/Card";
import { FaWindows, FaPlaystation, FaXbox } from "react-icons/fa";

// Type definition for game data structure
type Game = {
  id: number; // Unique identifier for the game
  title: string; // Game title displayed on card
  description: string; // Game description shown on card hover
  imageUrl: string; // URL to game thumbnail image
  videoUrl: string; // URL to game preview video (plays on hover)
  price: number; // Game price in euros
};

// GamesGallery component - renders multiple platform sections with game grids
export const GamesGallery = () => {
  // PC Games data array - base games list used for all platforms
  const PCGames: Game[] = [
    {
      id: 4,
      title: "Grand Theft Auto VI",
      description:
        "Open-world action-adventure game set in a sprawling modern city with immersive storylines and dynamic gameplay.",
      imageUrl: "/gta-img.webp",
      videoUrl: "/gta6.mp4",
      price: 69.99,
    },
    {
      id: 5,
      title: "Cyberpunk 2077",
      description:
        "Futuristic RPG set in a dystopian metropolis with deep story, character customization, and intense combat.",
      imageUrl: "/cyberpunk.jpg",
      videoUrl: "/gta6.mp4",
      price: 42.5,
    },
    {
      id: 6,
      title: "Red Dead Redemption II",
      description:
        "Epic Western-themed open-world game featuring rich storytelling and realistic environments.",
      imageUrl: "/red-dead-redemption.jpg",
      videoUrl: "/gta6.mp4",
      price: 34.99,
    },
    {
      id: 7,
      title: "Elden Ring",
      description:
        "Challenging dark fantasy RPG with vast open-world exploration and intricate lore.",
      imageUrl: "/elden-ring.avif",
      videoUrl: "/gta6.mp4",
      price: 49.9,
    },
    {
      id: 5,
      title: "Minecraft",
      description:
        "Sandbox game offering limitless creativity through building, exploration, and survival modes.",
      imageUrl: "/minecraft.jpg",
      videoUrl: "/gta6.mp4",
      price: 24.99,
    },
    {
      id: 8,
      title: "The Witcher 3 - Wild Hunt",
      description:
        "Open-world RPG with deep narrative, complex characters, and rich fantasy setting.",
      imageUrl: "/the-witcher.jpg",
      videoUrl: "/gta6.mp4",
      price: 19.99,
    },
    {
      id: 7,
      title: "Hogwarts Legacy",
      description:
        "Open-world action RPG set in the Harry Potter universe with magic, exploration, and story-driven quests.",
      imageUrl: "/hogwarts-legacy.jpg",
      videoUrl: "/gta6.mp4",
      price: 59.99,
    },
    {
      id: 9,
      title: "Battlefield 6",
      description:
        "First-person shooter featuring large-scale multiplayer battles and realistic military combat.",
      imageUrl: "/battlefield.jpg",
      videoUrl: "/gta6.mp4",
      price: 54.9,
    },
  ];

  // PlayStation Games - Same games as PC but with unique IDs (100+) to prevent key conflicts in React lists
  const PlayGames: Game[] = PCGames.map((game, index) => ({
    ...game,
    id: 100 + index,
  }));

  // Xbox Games - Same games as PC but with unique IDs (200+) to prevent key conflicts
  const XBoxGames: Game[] = PCGames.map((game, index) => ({
    ...game,
    id: 200 + index,
  }));

  // Nintendo Switch Games - Same games as PC but with unique IDs (300+) to prevent key conflicts
  const SwitchGames: Game[] = PCGames.map((game, index) => ({
    ...game,
    id: 300 + index,
  }));

  return (
    <section className="bg-gray-950 p-4 sm:p-6 md:p-10">
      {/* PC GAMES SECTION */}
      <div
        id="pc-games" // Anchor ID for smooth scrolling to this section
        style={{ scrollMarginTop: "100px" }} // Offset for fixed header when scrolling
      >
        {/* Section heading with Windows icon */}
        <h2 className="flex items-center text-white text-3xl font-bold mb-6 text-center md:text-left gap-3">
          PC Games
          <FaWindows size={30} />
        </h2>

        {/* Responsive grid - 1 col mobile, 2 col tablet, 3 col medium, 4 col large screens */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {PCGames.map(
            ({ id, title, description, imageUrl, videoUrl, price }) => (
              <div key={id} className="group">
                <GameCard
                  id={id}
                  title={title}
                  description={description}
                  imageUrl={imageUrl}
                  videoUrl={videoUrl}
                  price={price}
                  onDetailsClick={() => alert(`More info about ${title}`)}
                />
              </div>
            )
          )}
        </div>
      </div>

      {/* PLAYSTATION GAMES SECTION */}
      <div
        id="playstation-games" // Anchor ID for smooth scrolling
        style={{ scrollMarginTop: "80px" }} // Offset for fixed header
        className="mt-20" // Top margin to separate from previous section
      >
        {/* Section heading with PlayStation icon */}
        <h2 className="flex items-center text-white text-3xl font-bold mb-6 text-center md:text-left gap-3">
          PlayStation Games
          <FaPlaystation size={30} />
        </h2>

        {/* Responsive game grid */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {PlayGames.map(
            ({ id, title, description, imageUrl, videoUrl, price }) => (
              <div key={id} className="group">
                <GameCard
                  id={id}
                  title={title}
                  description={description}
                  imageUrl={imageUrl}
                  videoUrl={videoUrl}
                  price={price}
                  onDetailsClick={() => alert(`More info about ${title}`)}
                />
              </div>
            )
          )}
        </div>
      </div>

      {/* XBOX GAMES SECTION */}
      <div
        id="xbox-games" // Anchor ID for smooth scrolling
        style={{ scrollMarginTop: "80px" }} // Offset for fixed header
        className="mt-20" // Top margin to separate from previous section
      >
        {/* Section heading with Xbox icon */}
        <h2 className="flex items-center text-white text-3xl font-bold mb-6 text-center md:text-left gap-3">
          XBOX Games
          <FaXbox size={30} />
        </h2>

        {/* Responsive game grid */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {XBoxGames.map(
            ({ id, title, description, imageUrl, videoUrl, price }) => (
              <div key={id} className="group">
                <GameCard
                  id={id}
                  title={title}
                  description={description}
                  imageUrl={imageUrl}
                  videoUrl={videoUrl}
                  price={price}
                  onDetailsClick={() => alert(`More info about ${title}`)}
                />
              </div>
            )
          )}
        </div>
      </div>

      {/* NINTENDO SWITCH GAMES SECTION */}
      <div
        id="switch-games" // Anchor ID for smooth scrolling
        style={{ scrollMarginTop: "80px" }} // Offset for fixed header
        className="mt-20" // Top margin to separate from previous section
      >
        {/* Section heading with Nintendo icon */}
        <h2 className="flex items-center text-white text-3xl font-bold mb-6 text-center md:text-left gap-3">
          Nintendo Switch Games
          <SiNintendo size={30} />
        </h2>

        {/* Responsive game grid */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {SwitchGames.map(
            ({ id, title, description, imageUrl, videoUrl, price }) => (
              <div key={id} className="group">
                <GameCard
                  id={id}
                  title={title}
                  description={description}
                  imageUrl={imageUrl}
                  videoUrl={videoUrl}
                  price={price}
                  onDetailsClick={() => alert(`More info about ${title}`)}
                />
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};
