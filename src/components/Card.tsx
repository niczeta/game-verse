// Game card component - displays individual game with image, video preview, price, and add to cart functionality
// Syncs with global cart state and updates button appearance based on whether item is already in cart

import { FaShoppingCart, FaPlay, FaCheck } from "react-icons/fa";
import { useState, useEffect } from "react";
import { isItemInCart, useAddToCart } from "./cardUtils";

// Type definition for GameCard component props
type GameCardProps = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  videoUrl?: string; // Optional video preview on hover
  price: number | string;
  onDetailsClick?: () => void; // Callback when card is clicked
};

export const GameCard = ({
  id,
  title,
  description,
  imageUrl,
  videoUrl,
  price,
  onDetailsClick,
}: GameCardProps) => {
  const addToCart = useAddToCart();
  const [isAdded, setIsAdded] = useState(false);

  // Check if item is in cart on component mount and listen for cart updates from other components
  // Syncs local button state with global cart state whenever cartUpdated event is triggered
  useEffect(() => {
    setIsAdded(isItemInCart(id));

    const handleCartUpdate = () => {
      setIsAdded(isItemInCart(id));
    };

    window.addEventListener("cartUpdated", handleCartUpdate);
    return () => window.removeEventListener("cartUpdated", handleCartUpdate);
  }, [id]);

  // Handle add to cart button click
  // Prevents event propagation (so card click doesn't fire) and updates state if item was successfully added
  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();

    const wasAdded = addToCart({
      id,
      title,
      price: typeof price === "number" ? price : parseFloat(price as string),
      imageUrl,
    });

    if (wasAdded) {
      setIsAdded(true);
    }
  };

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
      {/* Image container with hover effects - displays game thumbnail image */}
      <div className="relative h-56 sm:h-64 overflow-hidden bg-neutral-800">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110 group-hover:opacity-0"
          loading="lazy"
        />

        {/* Video preview plays on hover if provided - fades in to replace image */}
        {videoUrl && (
          <video
            src={videoUrl}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          />
        )}

        {/* Overlay with play icon appears on hover when video is available */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          {videoUrl && (
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-cyan-500/80 backdrop-blur">
              <FaPlay className="text-white text-sm ml-1" />
            </div>
          )}
        </div>

        {/* Price badge - positioned at top-right, displays formatted price */}
        <div className="absolute top-3 right-3 bg-yellow-400/90 backdrop-blur px-3 py-1.5 rounded-full text-black font-bold text-sm shadow-lg">
          {typeof price === "number" ? `€${price.toFixed(2)}` : price}
        </div>
      </div>

      {/* Content section with game title, description, and add to cart button */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          {/* Game title - truncated to 2 lines */}
          <h3 className="text-cyan-400 text-base font-bold mb-2 line-clamp-2 group-hover:text-cyan-300 transition">
            {title}
          </h3>
          {/* Game description - expands to 3 lines on hover */}
          <p className="text-gray-300 text-xs sm:text-sm line-clamp-2 group-hover:line-clamp-3 transition">
            {description}
          </p>
        </div>

        {/* Add to cart button with state-based styling */}
        {/* Changes appearance and functionality based on whether item is already in cart */}
        <div className="mt-4">
          <button
            onClick={handleAddToCart}
            disabled={isAdded}
            className={`w-full py-2.5 px-3 font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group/btn transform ${
              isAdded
                ? "bg-gradient-to-r from-green-500 to-green-600 text-white cursor-not-allowed hover:scale-100"
                : "bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white hover:scale-105 active:scale-95"
            }`}
          >
            {isAdded ? (
              // Button state when item is already in cart
              <>
                <FaCheck size={14} />
                <span className="text-sm">In Cart</span>
              </>
            ) : (
              // Button state when item can be added to cart
              <>
                <FaShoppingCart size={14} />
                <span className="text-sm">Add to Cart</span>
              </>
            )}
          </button>
        </div>
      </div>
    </article>
  );
};
