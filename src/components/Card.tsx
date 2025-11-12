import { FaShoppingCart, FaPlay, FaCheck } from "react-icons/fa";
import { useState, useEffect } from "react";
import { isItemInCart, useAddToCart } from "./cardUtils";
import { Button } from "../form-components/Button";

// Props for GameCard component (single game preview)
type GameCardProps = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  youtubeUrl?: string;
  youtubePreviewStart?: number;      // Preview start (seconds)
  youtubePreviewDuration?: number;   // Preview duration (seconds)
  price: number | string;
  onDetailsClick?: () => void;       // Card click handler
};

// Helper: produces auto-playing, muted YouTube embed preview (custom time window)
function getYoutubeEmbedUrl(
  url?: string,
  opts?: { start?: number; duration?: number }
) {
  if (!url) return null;
  // Extract video ID from various YouTube URL formats
  const match = url.match(/(?:watch\?v=|youtu\.be\/|embed\/)([A-Za-z0-9_-]{11})/);
  if (!match) return null;
  const videoId = match[1];
  // Calculate start/end for preview segment
  const start = opts?.start ?? 10;
  const end = opts?.duration ? start + opts.duration : undefined;
  // Build embed params
  const params = [
    "autoplay=1",                // auto-play on show
    "mute=1",                    // mute required for autoplay
    "controls=0",                // no play controls
    "rel=0",                     // don't show related videos
    "loop=1",                    // loop preview segment
    `playlist=${videoId}`,       // required for loop to work on segment
    ...(start ? [`start=${start}`] : []),   // where preview starts
    ...(end ? [`end=${end}`] : []),         // where preview ends
  ].join("&");
  return `https://www.youtube.com/embed/${videoId}?${params}`;
}

export const GameCard = ({
  id,
  title,
  description,
  imageUrl,
  youtubeUrl,
  youtubePreviewStart,
  youtubePreviewDuration,
  price,
  onDetailsClick,
}: GameCardProps) => {
  // Cart logic: sync local state with global cart, listen to updates
  const addToCart = useAddToCart();
  const [isAdded, setIsAdded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    setIsAdded(isItemInCart(id));
    // Listen for cart changes (keep in sync with outside button clicks)
    const handleCartUpdate = () => setIsAdded(isItemInCart(id));
    window.addEventListener("cartUpdated", handleCartUpdate);
    return () => window.removeEventListener("cartUpdated", handleCartUpdate);
  }, [id]);

  // Handler: add to cart, prevent event bubbling
  const handleAddToCart = (e?: React.MouseEvent<HTMLButtonElement>) => {
    e?.stopPropagation();
    const wasAdded = addToCart({
      id,
      title,
      price: typeof price === "number" ? price : parseFloat(price as string),
      imageUrl,
    });
    if (wasAdded) setIsAdded(true);
  };

  // YouTube embed URL for hover preview, only when hovered
  const ytEmbedUrl =
    youtubeUrl && isHovered
      ? getYoutubeEmbedUrl(youtubeUrl, {
          start: youtubePreviewStart ?? 10,      // defaults
          duration: youtubePreviewDuration ?? 10
        })
      : null;

  return (
    <article
      className="relative bg-gradient-to-b from-neutral-900 to-neutral-800 rounded-xl shadow-lg overflow-hidden cursor-pointer select-none transition transform hover:scale-[1.04] hover:shadow-2xl h-[420px] flex flex-col group border border-neutral-700 hover:border-cyan-400/50"
      onClick={onDetailsClick}
      tabIndex={0}
      role="button"
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onDetailsClick?.();
        }
      }}
      aria-label={`More details about ${title}`}
    >
      {/* Main preview area: image + video in hover */}
      <div
        className="relative h-56 sm:h-64 overflow-hidden bg-neutral-800"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        tabIndex={0}
        onFocus={() => setIsHovered(true)}
        onBlur={() => setIsHovered(false)}
      >
        {/* Game thumbnail: fades out on hover if video available */}
        <img
          src={imageUrl}
          alt={title}
          className={`w-full h-full object-cover transition-all duration-300 ${
            isHovered && youtubeUrl ? "opacity-0" : "opacity-100"
          }`}
          loading="lazy"
        />
        {/* YouTube video preview: only visible in hover */}
        {ytEmbedUrl && (
          <iframe
            src={ytEmbedUrl}
            title={`${title} Preview`}
            allow="autoplay; encrypted-media"
            className="absolute inset-0 w-full h-full object-cover border-none"
            tabIndex={-1}
          />
        )}
        {/* Overlay play icon: shows if video */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          {youtubeUrl && (
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-cyan-500/80 backdrop-blur">
              <FaPlay className="text-white text-sm ml-1" />
            </div>
          )}
        </div>
        {/* Price badge */}
        <div className="absolute top-3 right-3 bg-yellow-400/90 backdrop-blur px-3 py-1.5 rounded-full text-black font-bold text-sm shadow-lg">
          {typeof price === "number" ? `€${price.toFixed(2)}` : price}
        </div>
      </div>

      {/* Card content: title, description, and button */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          {/* Game title - truncated if too long */}
          <h3 className="text-cyan-400 text-base font-bold mb-2 line-clamp-2 group-hover:text-cyan-300 transition">
            {title}
          </h3>
          {/* Short game description - expands on hover */}
          <p className="text-gray-300 text-xs sm:text-sm line-clamp-2 group-hover:line-clamp-3 transition">
            {description}
          </p>
        </div>
        {/* Cart button: shows "In Cart" or "Add to Cart" with correct state */}
        <div className="mt-4">
          {isAdded ? (
            <Button
              text="In Cart"
              icon={<FaCheck size={14} />}
              iconPosition="left"
              disabled={true}
              className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white cursor-not-allowed"
            />
          ) : (
            <Button
              text="Add to Cart"
              icon={<FaShoppingCart size={14} />}
              iconPosition="left"
              onClick={handleAddToCart}
              className="w-full bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white"
            />
          )}
        </div>
      </div>
    </article>
  );
};
