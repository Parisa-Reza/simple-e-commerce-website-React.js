import { FilterSection } from "./FilterSection";
import { ProductGrid } from "../product";
import { LeftPanelHeader } from "./LeftPanelHeader";


export function LeftPanel({setCart}) {

  const headerTitie="Krishti";
  // const products=getProduct();


  return (
    <div className="mt-6 ml-20 w-[70%]">
      <LeftPanelHeader headerTitie={ headerTitie} />
      <FilterSection />
      <ProductGrid setCart={setCart}/>
    </div>
  );
}
