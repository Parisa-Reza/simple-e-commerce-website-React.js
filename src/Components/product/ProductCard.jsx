import { useContext } from "react";
import productImg from "../../assets/react.svg";
import { CartContext } from "../../contexts";

export function ProductCard({ product }) {
  const { clickAddToCart } = useContext(CartContext);

  return (
    <div className="bg-white p-4 rounded shadow">
      <img
        className="w-full mb-4"
        src={productImg}
        alt="product image"
        width={100}
      />
      <p className="text-lg font-semibold">{product.name}</p>
      <p className="text-gray-700">{`$${product.price}`}</p>
      <button
        onClick={() => clickAddToCart(product)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
      >
        Add to Cart
      </button>
    </div>
  );
}
