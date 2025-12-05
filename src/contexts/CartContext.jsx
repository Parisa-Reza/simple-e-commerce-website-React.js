import { createContext, useState } from "react";


export const CartContext = createContext();

export const CartProvider=({children})=>{

    const [cart, setCart] = useState([]);

    const clickAddToCart=(product)=>{

    setCart ((previousState)=> [...previousState,product] )
  }

    return(
        <CartContext.Provider value={{ cart, clickAddToCart }}>{children}</CartContext.Provider>
    )
}