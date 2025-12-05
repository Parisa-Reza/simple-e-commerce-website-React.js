import { useContext } from "react";
import productImg from "../../assets/react.svg";
import { CartContext } from "../../contexts/CartContext";



export function ProductCard({ product}) {


const {clickAddToCart}=useContext(CartContext)

  
  return (
    <div>
      <div className="flex flex-col w-[300px] border p-5 gap-4 rounded items-center justify-center">
        
          <img src={productImg} alt="product image" width={200} />
          <p>{product.name}</p>
          <p>{`$${product.price}`}</p>
          <button onClick={()=> clickAddToCart(product)} className="bg-blue-500  text-white font-semibold rounded px-2 py-2">
            Add to Cart
          </button>
        </div>
      </div>
    
  );
}
