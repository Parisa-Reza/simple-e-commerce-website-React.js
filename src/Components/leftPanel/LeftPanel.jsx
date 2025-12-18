import { FilterProvider } from "../../contexts/FilterContext";
import { useProducts } from "../../api/hooks";
import { FilterSection } from "./FilterSection";
import { ProductGrid } from "../product";

export function LeftPanel() {

  const { products, loading, error } = useProducts();

  if (loading) {
    return <div>Loading......</div>;
  }

  if (error) {
    return <div>Failed to fetch data :(</div>;
  }

  return (
    <div className="mt-6 ml-20 w-[70%]">
      <FilterProvider products={products}>
        <FilterSection />
        <ProductGrid />
      </FilterProvider>
    </div>
  );
}
