import { useProducts } from "../../api/hooks";
import { ProductCard } from "./ProductCard";

const ProductEmptyState = () => <h1>No product is available</h1>;

export function ProductGrid() {
  const { products, loading,error } = useProducts(); // retrived product from custom hook
if (loading) {
    return <div>Loading......</div>
}
if(error){
   return <div> Failed to fetch data : (</div>
}
  return (
    <div className="grid grid-cols-3 gap-4">
      {products.length === 0 ? (
        <ProductEmptyState />
      ) : (
        products.map((product) => (
          <ProductCard key={product.name} product={product} />
        ))
      )}
    </div>
  );
}
