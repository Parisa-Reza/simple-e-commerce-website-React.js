import { FilterSection } from "./FilterSection";
import { ProductGrid } from "../product";

export function LeftPanel() {
  const headerTitie = "Simple E-commerce";

  return (
    <div className="mt-6 ml-20 w-[70%]">
      <FilterSection />
      <ProductGrid />
    </div>
  );
}
