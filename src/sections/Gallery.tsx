import { SiNintendo } from "react-icons/si";
import { GameCard } from "../components/Card";
import { FaWindows, FaPlaystation, FaXbox } from "react-icons/fa";

type Game = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  videoUrl: string;
  price: number;
};

export const GamesGallery = () => {
  const PCGames: Game[] = [
    {
      id: 4,
      title: "Grand Theft Auto VI",
      description: "Open-world action-adventure game set in a sprawling modern city with immersive storylines and dynamic gameplay.",
      imageUrl: "/gta-img.webp",
      videoUrl: "/gta6.mp4",
      price: 69.99,
    },
    {
      id: 5,
      title: "Cyberpunk 2077",
      description: "Futuristic RPG set in a dystopian metropolis with deep story, character customization, and intense combat.",
      imageUrl: "/cyberpunk.jpg",
      videoUrl: "/gta6.mp4",
      price: 42.50,
    },
    {
      id: 6,
      title: "Red Dead Redemption II",
      description: "Epic Western-themed open-world game featuring rich storytelling and realistic environments.",
      imageUrl: "/red-dead-redemption.jpg",
      videoUrl: "/gta6.mp4",
      price: 34.99,
    },
    {
      id: 7,
      title: "Elden Ring",
      description: "Challenging dark fantasy RPG with vast open-world exploration and intricate lore.",
      imageUrl: "/elden-ring.avif",
      videoUrl: "/gta6.mp4",
      price: 49.90,
    },
    {
      id: 5,
      title: "Minecraft",
      description: "Sandbox game offering limitless creativity through building, exploration, and survival modes.",
      imageUrl: "/minecraft.jpg",
      videoUrl: "/gta6.mp4",
      price: 24.99,
    },
    {
      id: 8,
      title: "The Witcher 3 - Wild Hunt",
      description: "Open-world RPG with deep narrative, complex characters, and rich fantasy setting.",
      imageUrl: "/the-witcher.jpg",
      videoUrl: "/gta6.mp4",
      price: 19.99,
    },
    {
      id: 7,
      title: "Hogwarts Legacy",
      description: "Open-world action RPG set in the Harry Potter universe with magic, exploration, and story-driven quests.",
      imageUrl: "/hogwarts-legacy.jpg",
      videoUrl: "/gta6.mp4",
      price: 59.99,
    },
    {
      id: 9,
      title: "Battlefield 6",
      description: "First-person shooter featuring large-scale multiplayer battles and realistic military combat.",
      imageUrl: "/battlefield.jpg",
      videoUrl: "/gta6.mp4",
      price: 54.90,
    },
  ];

  // Aggiungi ID unici per ogni piattaforma (es. 100+, 200+, 300+)
  const PlayGames: Game[] = PCGames.map((game, index) => ({
    ...game,
    id: 100 + index,
  }));
  const XBoxGames: Game[] = PCGames.map((game, index) => ({
    ...game,
    id: 200 + index,
  }));
  const SwitchGames: Game[] = PCGames.map((game, index) => ({
    ...game,
    id: 300 + index,
  }));

  return (
    <section className="bg-gray-950 p-4 sm:p-6 md:p-10">
      {/* PC Games */}
      <div
        id="pc-games"
        style={{ scrollMarginTop: "100px" }}
      >
        <h2 className="flex items-center text-white text-3xl font-bold mb-6 text-center md:text-left gap-3">
          PC Games
          <FaWindows size={30} />
        </h2>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {PCGames.map(({ id, title, description, imageUrl, videoUrl, price }) => (
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
          ))}
        </div>
      </div>

      {/* PlayStation Games */}
      <div
        id="playstation-games"
        style={{ scrollMarginTop: "80px" }}
        className="mt-20"
      >
        <h2 className="flex items-center text-white text-3xl font-bold mb-6 text-center md:text-left gap-3">
          PlayStation Games
          <FaPlaystation size={30} />
        </h2>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {PlayGames.map(({ id, title, description, imageUrl, videoUrl, price }) => (
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
          ))}
        </div>
      </div>

      {/* XBOX Games */}
      <div
        id="xbox-games"
        style={{ scrollMarginTop: "80px" }}
        className="mt-20"
      >
        <h2 className="flex items-center text-white text-3xl font-bold mb-6 text-center md:text-left gap-3">
          XBOX Games
          <FaXbox size={30} />
        </h2>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {XBoxGames.map(({ id, title, description, imageUrl, videoUrl, price }) => (
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
          ))}
        </div>
      </div>

      {/* Nintendo Switch Games */}
      <div
        id="switch-games"
        style={{ scrollMarginTop: "80px" }}
        className="mt-20"
      >
        <h2 className="flex items-center text-white text-3xl font-bold mb-6 text-center md:text-left gap-3">
          Nintendo Switch Games
          <SiNintendo size={30} />
        </h2>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {SwitchGames.map(({ id, title, description, imageUrl, videoUrl, price }) => (
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
          ))}
        </div>
      </div>
    </section>
  );
};