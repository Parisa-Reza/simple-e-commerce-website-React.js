import { useProducts } from "../../api/hooks/useProducts";
import { ProductCard } from "./ProductCard";

const ProductEmptyState = () => <h1>No product is available</h1>;

export function ProductGrid() {


  const products = useProducts(); // retrived product from custom hook

  
  return (
    <div className="grid grid-cols-3 gap-4">
      {products.length === 0 ? (
        <ProductEmptyState />
      ) : (
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      )}
    </div>
  );
}
