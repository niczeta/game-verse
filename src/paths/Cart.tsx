import { FaTrash, FaShoppingCart, FaArrowLeft, FaCheck } from "react-icons/fa";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import type { CartItem } from "../components/cardUtils";

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

  const subtotal = cartItems.reduce((sum, item) => {
    const price = typeof item.price === "number" ? item.price : 0;
    return sum + price;
  }, 0);
  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  const handleCheckout = async () => {
    setIsLoading(true);

    // Simulazione del processo di checkout (3 secondi)
    await new Promise((resolve) => setTimeout(resolve, 3000));

    setIsLoading(false);
    setCheckoutSuccess(true);
    clearCart();

    // Nascondi il messaggio di successo dopo 5 secondi
    setTimeout(() => {
      setCheckoutSuccess(false);
    }, 5000);
  };

  const handleContinueShopping = () => {
    // Se siamo già sulla home, scrolla subito
    if (window.location.pathname === "/") {
      const element = document.getElementById("pc-games");
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      // Altrimenti naviga prima
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById("pc-games");
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 800);
    }
  };

  return (
    <section className="w-full bg-gray-950 text-white">
      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden flex items-center justify-center bg-gradient-to-br from-cyan-600 via-indigo-700 to-purple-800">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl sm:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-yellow-300 to-purple-500">
            Your Shopping Cart
          </h1>
          <p className="text-xl text-neutral-200 max-w-2xl mx-auto">
            {cartItems.length} item{cartItems.length !== 1 ? "s" : ""} in your
            cart
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-6 sm:px-12 md:px-20 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Success Message */}
          {checkoutSuccess && (
            <div className="mb-8 p-6 bg-green-500/20 border-2 border-green-500 rounded-lg animate-pulse">
              <div className="flex items-center justify-center gap-3">
                <FaCheck className="text-green-400 text-2xl" />
                <div className="text-center">
                  <p className="text-green-400 font-semibold text-lg">
                    ✓ Payment Successful!
                  </p>
                  <p className="text-green-300 text-sm mt-1">
                    Your order has been placed. Check your email for
                    confirmation.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Empty Cart */}
          {cartItems.length === 0 && !checkoutSuccess && (
            <div className="text-center py-16">
              <FaShoppingCart className="text-gray-500 text-6xl mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-yellow-400 mb-4">
                Your cart is empty
              </h2>
              <p className="text-gray-300 mb-8">
                Start adding games to your cart!
              </p>
              <button
                onClick={handleContinueShopping}
                className="inline-flex items-center gap-2 px-8 py-3 bg-cyan-500 text-white font-semibold rounded-lg hover:bg-cyan-600 transition"
              >
                <FaArrowLeft /> Continue Shopping
              </button>
            </div>
          )}

          {/* Cart Content */}
          {cartItems.length > 0 && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Column - Cart Items */}
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold text-yellow-400 mb-6">
                  Items ({cartItems.length})
                </h2>
                <div className="space-y-4">
                  {cartItems.map((item) => {
                    const price =
                      typeof item.price === "number" ? item.price : 0;
                    return (
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
                              €{price.toFixed(2)}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center">
                          <button
                            onClick={() => removeFromCart(item.id)}
                            disabled={isLoading}
                            className="p-3 bg-red-500/20 text-red-400 rounded-lg hover:bg-red-500/40 transition disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            <FaTrash size={18} />
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Right Column - Summary */}
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

                  {/* Loading Bar */}
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
                    <button
                      onClick={handleCheckout}
                      disabled={isLoading}
                      className={`w-full py-3 px-4 font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 transform ${
                        isLoading
                          ? "bg-gray-600 text-gray-300 cursor-not-allowed"
                          : "bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white hover:scale-105 active:scale-95"
                      }`}
                    >
                      {isLoading ? (
                        <>
                          <div className="animate-spin">
                            <FaShoppingCart size={16} />
                          </div>
                          <span>Processing...</span>
                        </>
                      ) : (
                        <>
                          <FaShoppingCart size={16} />
                          <span>Proceed to Checkout</span>
                        </>
                      )}
                    </button>
                    <button
                      onClick={handleContinueShopping}
                      disabled={isLoading}
                      className={`w-full py-3 px-4 border-2 border-yellow-400 text-yellow-400 font-semibold rounded-lg text-center transition ${
                        isLoading
                          ? "opacity-50 cursor-not-allowed"
                          : "hover:bg-yellow-400/10"
                      }`}
                    >
                      Continue Shopping
                    </button>
                  </div>

                  {/* Info */}
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
