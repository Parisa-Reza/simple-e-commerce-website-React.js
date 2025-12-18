import { useContext } from "react";
import { FilterContext } from "../../contexts/FilterContext";
import { ProductCard } from "./ProductCard";

const ProductEmptyState = () => <h1>No product is available</h1>;

export function ProductGrid() {
  const { filteredProducts } = useContext(FilterContext);




  if (filteredProducts.length === 0) {
    return <ProductEmptyState />;
  }

  return (
    <div className="grid grid-cols-3 gap-4">
      {filteredProducts.map((product) => (
        <ProductCard key={product.name} product={product} />
      ))}
    </div>
  );
}



