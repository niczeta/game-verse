// Type definition for items stored in the shopping cart
export type CartItem = {
  id: number;
  title: string;
  price: number;
  imageUrl: string;
};

// Custom hook that provides a function to add items to the cart
// Returns a function that accepts a CartItem and adds it to localStorage if not already present
// Returns true if item was successfully added, false if it already exists in cart
export const useAddToCart = () => {
  return (item: CartItem): boolean => {
    // Retrieve current cart from localStorage, default to empty array if not found
    const current = JSON.parse(localStorage.getItem("cart") || "[]");

    // Check if item with same id already exists in cart
    const exists = current.find((i: CartItem) => i.id === item.id);

    // Only add item if it doesn't already exist
    if (!exists) {
      localStorage.setItem("cart", JSON.stringify([...current, item]));
      // Emit custom event to notify other components that cart has been updated
      window.dispatchEvent(new Event("cartUpdated"));
      return true; // Item successfully added
    }
    return false; // Item already exists in cart
  };
};

// Utility function that checks whether a specific item exists in the shopping cart
// Returns true if item with given id is found in cart, false otherwise
export const isItemInCart = (itemId: number): boolean => {
  // Retrieve cart from localStorage, default to empty array if not found
  const cart = JSON.parse(localStorage.getItem("cart") || "[]");
  // Return true if any item in cart matches the provided itemId
  return cart.some((item: CartItem) => item.id === itemId);
};
