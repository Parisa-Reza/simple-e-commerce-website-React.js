import { useProducts } from "../../api/hooks/useProducts";
import { ProductCard } from "./ProductCard";


const ProductEmptyState =()=> <h1>No product is available</h1>

export function ProductGrid({setCart}) {
const products=useProducts() // retrived product from custom hook
  return (
    <div className="flex flex-wrap gap-4">




        
      {products.length === 0?
  (<ProductEmptyState/>)
      :( products.map((product) => (
        <ProductCard
          key={product.id}
         product={product}
         setCart={setCart}
        />
      )))}







    </div>
  );
}
