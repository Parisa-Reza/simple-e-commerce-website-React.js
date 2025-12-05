import { FilterSection } from "./FilterSection";
import { ProductGrid } from "../product";
import { LeftPanelHeader } from "./LeftPanelHeader";


export function LeftPanel() {

  const headerTitie="Krishti";



  return (
    <div className="mt-6 ml-20 w-[70%]">
      <LeftPanelHeader headerTitie={ headerTitie} />
      <FilterSection />
      <ProductGrid />
    </div>
  );
}
