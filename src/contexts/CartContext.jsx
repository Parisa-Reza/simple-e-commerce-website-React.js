import { createContext } from "react";
import { useCart } from "../hooks";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const { cart, clickAddToCart,removeFromCart } = useCart();

  return (
    <CartContext.Provider value={{ cart, clickAddToCart,removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
