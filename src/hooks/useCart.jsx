import { useState } from "react";

export const useCart = () => {
  const [cart, setCart] = useState([]);
  const clickAddToCart = (product) => {
    if (cart.find((cartItem) => cartItem.name === product.name)) {
      alert(
        "Already product added !! duplicate product from the list... duplicate key!! "
      );
      return;
    }
    setCart((previousState) => [...previousState, product]);
  };

  return { cart, clickAddToCart };
};
