export type CartItem = {
  id: number;
  title: string;
  price: number;
  imageUrl: string;
};

export const useAddToCart = () => {
  return (item: CartItem): boolean => {
    const current = JSON.parse(localStorage.getItem("cart") || "[]");
    const exists = current.find((i: CartItem) => i.id === item.id);
    if (!exists) {
      localStorage.setItem("cart", JSON.stringify([...current, item]));
      window.dispatchEvent(new Event("cartUpdated"));
      return true; // Item aggiunto con successo
    }
    return false; // Item già nel carrello
  };
};

export const isItemInCart = (itemId: number): boolean => {
  const cart = JSON.parse(localStorage.getItem("cart") || "[]");
  return cart.some((item: CartItem) => item.id === itemId);
};
