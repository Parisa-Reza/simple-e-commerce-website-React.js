import productImg from "../../assets/react.svg";
export function ProductCard({ productName, productPrice }) {
  return (
    <div>
      <div className="flex flex-col w-[300px] border p-5 gap-4 rounded items-center justify-center">
        
          <img src={productImg} alt="product image" width={200} />
          <p>{productName}</p>
          <p>{`$${productPrice}`}</p>
          <button className="bg-blue-500  text-white font-semibold rounded px-2 py-2">
            Add to Cart
          </button>
        </div>
      </div>
    
  );
}
