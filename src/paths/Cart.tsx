import { FaTrash, FaShoppingCart, FaArrowLeft, FaCheck } from "react-icons/fa";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import type { CartItem } from "../components/cardUtils";
import { Button } from "../form-components/Button";

export const Cart = () => {
  const navigate = useNavigate();

  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("cart");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        const validItems = parsed.filter(
          (item: CartItem) => item.price && !isNaN(item.price)
        );
        setCartItems(validItems);
      } catch {
        setCartItems([]);
      }
    }
    const handleCartUpdate = () => {
      const saved = localStorage.getItem("cart");
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          const validItems = parsed.filter(
            (item: CartItem) => item.price && !isNaN(item.price)
          );
          setCartItems(validItems);
        } catch {
          setCartItems([]);
        }
      }
    };
    window.addEventListener("cartUpdated", handleCartUpdate);
    return () => window.removeEventListener("cartUpdated", handleCartUpdate);
  }, []);

  const removeFromCart = (id: number) => {
    const updated = cartItems.filter((item) => item.id !== id);
    setCartItems(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
    window.dispatchEvent(new Event("cartUpdated"));
  };

  const clearCart = () => {
    setCartItems([]);
    localStorage.setItem("cart", "[]");
    window.dispatchEvent(new Event("cartUpdated"));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => (typeof item.price === "number" ? sum + item.price : sum),
    0
  );
  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  const handleCheckout = async () => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 3000));
    setIsLoading(false);
    setCheckoutSuccess(true);
    clearCart();
    setTimeout(() => {
      setCheckoutSuccess(false);
    }, 5000);
  };

  // Correct version: only set flag and navigate
  const handleContinueShopping = () => {
    localStorage.setItem("scrollToSection", "pc-games");
    navigate("/");
  };

  return (
    <section className="w-full bg-gray-950 text-white">
      {/* Hero Section */}
      <div className="relative h-80 overflow-hidden flex items-center justify-center bg-gradient-to-br from-cyan-600 via-indigo-700 to-purple-800">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl sm:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-yellow-300 to-purple-500 pb-2">
            Your Shopping Cart
          </h1>
          <p className="text-xl text-neutral-200 max-w-2xl mx-auto">
            {cartItems.length} item{cartItems.length !== 1 ? "s" : ""} in your cart
          </p>
        </div>
      </div>
      <div className="px-6 sm:px-12 md:px-20 py-16">
        <div className="max-w-7xl mx-auto">
          {checkoutSuccess && (
            <div className="mb-8 p-8 bg-gradient-to-r from-green-500/30 to-green-600/20 border-2 border-green-400 rounded-lg shadow-lg shadow-green-500/20">
              <div className="flex flex-col items-center justify-center gap-4">
                <div className="bg-green-500/30 p-4 rounded-full">
                  <FaCheck className="text-green-300 text-4xl" />
                </div>
                <div className="text-center">
                  <p className="text-green-300 font-bold text-2xl mb-2">
                    Payment Successful!
                  </p>
                  <p className="text-green-200 text-base">
                    Your order has been placed successfully.
                  </p>
                  <p className="text-green-200/80 text-sm mt-1">
                    Check your email for confirmation details.
                  </p>
                </div>
              </div>
            </div>
          )}

          {cartItems.length === 0 && !checkoutSuccess && (
            <div className="text-center py-16">
              <FaShoppingCart className="text-gray-500 text-6xl mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-yellow-400 mb-4">
                Your cart is empty
              </h2>
              <p className="text-gray-300 mb-8">
                Start adding games to your cart!
              </p>
              <Button
                text="Continue Shopping"
                icon={<FaArrowLeft />}
                iconPosition="left"
                onClick={handleContinueShopping}
                variant="outline"
                color="yellow"
                className="inline-flex"
              />
            </div>
          )}

          {cartItems.length > 0 && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold text-yellow-400 mb-6">
                  Items ({cartItems.length})
                </h2>
                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="bg-gray-800 rounded-lg p-6 flex gap-6 hover:bg-gray-700 transition"
                    >
                      <div className="flex-shrink-0">
                        <img
                          src={item.imageUrl}
                          alt={item.title}
                          className="w-24 h-24 rounded-lg object-cover"
                        />
                      </div>
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <h3 className="text-cyan-400 font-semibold text-lg mb-2">
                            {item.title}
                          </h3>
                          <p className="text-2xl font-bold text-yellow-400">
                            €{typeof item.price === "number" ? item.price.toFixed(2) : "0.00"}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <button
                          onClick={() => removeFromCart(item.id)}
                          disabled={isLoading}
                          className="p-3 bg-red-500/20 text-red-400 rounded-lg hover:bg-red-500/40 transition disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                        >
                          <FaTrash size={18} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:col-span-1">
                <div className="bg-gray-800 rounded-lg p-8 sticky top-24">
                  <h2 className="text-2xl font-bold text-yellow-400 mb-6">
                    Order Summary
                  </h2>
                  <div className="space-y-4 mb-8 border-b border-gray-700 pb-6">
                    <div className="flex justify-between text-gray-300">
                      <span>Subtotal</span>
                      <span>€{subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-gray-300">
                      <span>Tax (10%)</span>
                      <span>€{tax.toFixed(2)}</span>
                    </div>
                  </div>
                  <div className="flex justify-between text-xl font-bold text-cyan-400 mb-8">
                    <span>Total</span>
                    <span>€{total.toFixed(2)}</span>
                  </div>
                  {isLoading && (
                    <div className="mb-6">
                      <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                        <div className="bg-gradient-to-r from-cyan-500 to-cyan-600 h-full w-full animate-pulse"></div>
                      </div>
                      <p className="text-center text-cyan-400 text-sm mt-3 font-semibold">
                        Processing payment...
                      </p>
                    </div>
                  )}
                  <div className="space-y-3">
                    <Button
                      text={isLoading ? "Processing..." : "Proceed to Checkout"}
                      icon={
                        isLoading ? (
                          <div className="animate-spin">
                            <FaShoppingCart size={16} />
                          </div>
                        ) : (
                          <FaShoppingCart size={16} />
                        )
                      }
                      iconPosition="left"
                      onClick={handleCheckout}
                      disabled={isLoading}
                      className="w-full bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white"
                    />
                    <Button
                      text="Continue Shopping"
                      onClick={handleContinueShopping}
                      disabled={isLoading}
                      variant="outline"
                      color="yellow"
                      className="w-full"
                    />
                  </div>
                  <div className="mt-6 p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg">
                    <p className="text-blue-300 text-xs text-center">
                      💳 Test payment • Use any card number
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
