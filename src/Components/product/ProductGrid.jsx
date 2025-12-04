import { ProductCard } from "./ProductCard";

const ProductEmptyState =()=> <h1>No product is available</h1>

export function ProductGrid({ products }) {
  return (
    <div className="flex flex-wrap gap-4">




        
      {products.length === 0?
  (<ProductEmptyState/>)
      :( products.map((product) => (
        <ProductCard
          key={product.id}
          productName={product.name}
          productPrice={product.price}
        />
      )))}







    </div>
  );
}
