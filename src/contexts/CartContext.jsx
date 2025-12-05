import { createContext } from "react";
import { useCart } from "../hooks";



export const CartContext = createContext();

export const CartProvider=({children})=>{

    const {cart, clickAddToCart }=useCart()
    // const [cart, setCart] = useState([]);

//     const clickAddToCart=(product)=>{

//     setCart ((previousState)=> [...previousState,product] )
//   }

    return(
        <CartContext.Provider value={{ cart, clickAddToCart }}>{children}</CartContext.Provider>
    )
}