import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaArrowLeft, FaShoppingCart, FaPlay, FaCheck } from "react-icons/fa";
import { Button } from "../form-components/Button";
import {
  featuredGames,
  PCGames,
  PlayGames,
  SwitchGames,
  XBoxGames,
} from "../sections/gamesData";
import { useAddToCart, isItemInCart } from "../components/cardUtils";

// Utility: get YouTube embed URL from string
function getYoutubeEmbedUrl(url: string) {
  if (!url) return null;
  const match = url.match(/(?:watch\?v=|youtu\.be\/|embed\/)([A-Za-z0-9_-]{11})/);
  return match ? `https://www.youtube.com/embed/${match[1]}` : null;
}

// Gather all game sources together
const allGames = [
  ...featuredGames,
  ...PCGames,
  ...PlayGames,
  ...XBoxGames,
  ...SwitchGames,
];

export const GameDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const game = allGames.find((g) => String(g.id) === id);

  // Cart state management
  const addToCart = useAddToCart();
  const [isAdded, setIsAdded] = useState(() => (game ? isItemInCart(game.id) : false));
  useEffect(() => {
    if (!game) return;
    setIsAdded(isItemInCart(game.id));
    const handleCartUpdate = () => setIsAdded(isItemInCart(game.id));
    window.addEventListener("cartUpdated", handleCartUpdate);
    return () => window.removeEventListener("cartUpdated", handleCartUpdate);
  }, [game]);
  const handleAddToCart = () => {
    if (!game) return;
    const wasAdded = addToCart({
      id: game.id,
      title: game.title,
      price: typeof game.price === "number" ? game.price : parseFloat(game.price as string),
      imageUrl: game.imageUrl,
    });
    if (wasAdded) setIsAdded(true);
  };

  if (!game) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-gray-950 text-white">
        <h2 className="text-3xl font-bold mb-6">Game not found</h2>
        <Button
          text="Back to Home"
          onClick={() => navigate("/")}
          variant="outline"
          color="yellow"
        />
      </div>
    );
  }

  const youtubeEmbed = game.youtubeUrl ? getYoutubeEmbedUrl(game.youtubeUrl) : null;

  return (
    <section className="min-h-screen bg-gradient-to-br from-cyan-950 via-gray-950 to-indigo-900 py-12 text-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-8">
        {/* Header section */}
        <div className="flex items-center justify-between gap-2 mb-8 flex-wrap">
          <Button
            icon={<FaArrowLeft />}
            iconPosition="left"
            text="Back"
            variant="outline"
            color="yellow"
            onClick={() => navigate(-1)}
            className="flex-shrink-0"
          />
          <h1 className="text-4xl sm:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-yellow-400 text-center flex-1 mx-4 whitespace-normal">
            {game.title}
          </h1>
          <span className="text-xl sm:text-2xl font-black bg-yellow-400/30 px-4 py-2 rounded-full text-yellow-300 shadow flex-shrink-0">
            {typeof game.price === "number" ? `€${Number(game.price).toFixed(2)}` : game.price}
          </span>
        </div>

        {/* Platforms and tags */}
        {game.platforms && (
          <div className="flex gap-3 justify-center flex-wrap mb-2">
            {game.platforms.map((platform) => (
              <span key={platform} className="px-3 py-1 bg-cyan-900/30 rounded-full font-bold text-cyan-300 text-xs">{platform}</span>
            ))}
            {game.tags?.map((tag) => (
              <span key={tag} className="px-3 py-1 bg-amber-900/30 rounded-full text-yellow-200 text-xs font-semibold">{tag}</span>
            ))}
          </div>
        )}

        {/* Genre and publisher */}
        {game.genre && <div className="text-sm text-cyan-200 font-semibold text-center mb-2">{game.genre}</div>}
        {game.publisher && <div className="text-xs text-gray-400 text-center mb-3">by {game.publisher}</div>}

        {/* Release date and rating */}
        <div className="flex gap-4 justify-center mb-8 text-xs text-gray-400">
          {game.releaseDate && <span>Release: {game.releaseDate}</span>}
          {game.rating && <span>{game.rating}</span>}
        </div>

        {/* Main video/image preview */}
        <div className="flex flex-col items-center w-full mb-9">
          {youtubeEmbed ? (
            <div className="w-full max-w-2xl aspect-video rounded-3xl shadow-2xl overflow-hidden mb-6 border-2 border-cyan-800">
              <iframe
                src={youtubeEmbed}
                title={`${game.title} Trailer`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
          ) : game.videoUrl ? (
            <div className="w-full max-w-2xl aspect-video rounded-3xl shadow-2xl overflow-hidden mb-6 border-2 border-cyan-800 relative group">
              <video
                src={game.videoUrl}
                autoPlay
                loop
                muted
                playsInline
                poster={game.imageUrl}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none group-hover:opacity-0 transition">
                <FaPlay className="text-cyan-400 text-4xl bg-black/30 rounded-full p-4" />
              </div>
            </div>
          ) : (
            <img
              src={game.imageUrl}
              alt={game.title}
              className="w-full max-w-2xl rounded-3xl shadow-2xl mb-6 border-2 border-cyan-800"
            />
          )}
        </div>

        {/* Gallery screenshots -- LARGE */}
        {game.screenshots && game.screenshots.length > 0 && (
          <div className="flex gap-4 justify-center mb-8">
            {game.screenshots.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Screenshot ${i+1}`}
                className="h-48 w-auto rounded-xl shadow-2xl border-2 border-cyan-900"
              />
            ))}
          </div>
        )}

        {/* Feature list */}
        {game.features && (
          <ul className="list-disc text-gray-300 text-base space-y-1 max-w-xl mx-auto mb-8 pl-6">
            {game.features.map((f, idx) => <li key={idx}>{f}</li>)}
          </ul>
        )}

        {/* Centered description */}
        <p className="text-lg text-gray-200 mb-10 text-center leading-relaxed max-w-xl mx-auto">
          {game.description}
        </p>

        {/* Cart button */}
        <div className="flex flex-col items-center">
          {isAdded ? (
            <Button
              text="In Cart"
              icon={<FaCheck />}
              iconPosition="left"
              disabled
              className="w-full max-w-md bg-gradient-to-r from-green-500 to-green-600 text-white cursor-not-allowed mb-2"
            />
          ) : (
            <Button
              text="Add to Cart"
              icon={<FaShoppingCart />}
              iconPosition="left"
              onClick={handleAddToCart}
              size="large"
              variant="gradient"
              className="w-full max-w-md mb-2"
            />
          )}
        </div>
      </div>
    </section>
  );
};
