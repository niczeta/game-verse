import { SiNintendo } from "react-icons/si";
import { GameCard } from "../components/Card";
import { FaWindows, FaPlaystation, FaXbox } from "react-icons/fa";
import { Flame } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { featuredGames, PCGames, PlayGames, SwitchGames, XBoxGames } from "./gamesData";

export const GamesGallery = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-gray-950 p-4 sm:p-6 md:p-10">

      {/* Featured Games */}
      <div id="featured-games" style={{ scrollMarginTop: "100px" }}>
        <h2 className="flex items-center text-white text-3xl font-bold mb-6 text-center md:text-left gap-3">
          <Flame className="text-yellow-400 w-8 h-8" />
          Featured Games
          <Flame className="text-yellow-400 w-8 h-8" />
        </h2>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {featuredGames.map((game) => (
            <div key={game.id} className="group">
              <GameCard
                id={game.id}
                title={game.title}
                description={game.description}
                imageUrl={game.imageUrl}
                youtubeUrl={game.youtubeUrl}
                youtubePreviewStart={game.youtubePreviewStart}
                youtubePreviewDuration={game.youtubePreviewDuration}
                price={game.price}
                onDetailsClick={() => navigate(`/game/${game.id}`)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* PC Games */}
      <div id="pc-games" style={{ scrollMarginTop: "80px" }} className="mt-20">
        <h2 className="flex items-center text-white text-3xl font-bold mb-6 text-center md:text-left gap-3">
          PC Games <FaWindows size={30} />
        </h2>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {PCGames.map((game) => (
            <div key={game.id} className="group">
              <GameCard
                id={game.id}
                title={game.title}
                description={game.description}
                imageUrl={game.imageUrl}
                youtubeUrl={game.youtubeUrl}
                youtubePreviewStart={game.youtubePreviewStart}
                youtubePreviewDuration={game.youtubePreviewDuration}
                price={game.price}
                onDetailsClick={() => navigate(`/game/${game.id}`)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* PlayStation Games */}
      <div id="playstation-games" style={{ scrollMarginTop: "80px" }} className="mt-20">
        <h2 className="flex items-center text-white text-3xl font-bold mb-6 text-center md:text-left gap-3">
          PlayStation Games <FaPlaystation size={30} />
        </h2>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {PlayGames.map((game) => (
            <div key={game.id} className="group">
              <GameCard
                id={game.id}
                title={game.title}
                description={game.description}
                imageUrl={game.imageUrl}
                youtubeUrl={game.youtubeUrl}
                youtubePreviewStart={game.youtubePreviewStart}
                youtubePreviewDuration={game.youtubePreviewDuration}
                price={game.price}
                onDetailsClick={() => navigate(`/game/${game.id}`)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Xbox Games */}
      <div id="xbox-games" style={{ scrollMarginTop: "80px" }} className="mt-20">
        <h2 className="flex items-center text-white text-3xl font-bold mb-6 text-center md:text-left gap-3">
          XBOX Games <FaXbox size={30} />
        </h2>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {XBoxGames.map((game) => (
            <div key={game.id} className="group">
              <GameCard
                id={game.id}
                title={game.title}
                description={game.description}
                imageUrl={game.imageUrl}
                youtubeUrl={game.youtubeUrl}
                youtubePreviewStart={game.youtubePreviewStart}
                youtubePreviewDuration={game.youtubePreviewDuration}
                price={game.price}
                onDetailsClick={() => navigate(`/game/${game.id}`)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Nintendo Switch Games */}
      <div id="switch-games" style={{ scrollMarginTop: "80px" }} className="mt-20">
        <h2 className="flex items-center text-white text-3xl font-bold mb-6 text-center md:text-left gap-3">
          Nintendo Switch Games <SiNintendo size={30} />
        </h2>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {SwitchGames.map((game) => (
            <div key={game.id} className="group">
              <GameCard
                id={game.id}
                title={game.title}
                description={game.description}
                imageUrl={game.imageUrl}
                youtubeUrl={game.youtubeUrl}
                youtubePreviewStart={game.youtubePreviewStart}
                youtubePreviewDuration={game.youtubePreviewDuration}
                price={game.price}
                onDetailsClick={() => navigate(`/game/${game.id}`)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
