import { createContext } from "react";
import { useFilter } from "../hooks";

export const FilterContext = createContext();

export const FilterProvider = ({ children, products}) => {
  const { selectedFilters, filteredProducts, filterButtonClick } =
    useFilter(products);

  return (
    <FilterContext.Provider
      value={{ selectedFilters, filteredProducts, filterButtonClick }}
    >
      {children}
    </FilterContext.Provider>
  );
};
