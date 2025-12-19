import { useState, useEffect } from "react";

export const useFilter = (products) => {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const filterButtonClick = (selectedCategory) => {
    if (selectedFilters.includes(selectedCategory)) {
      let updatedFilters = selectedFilters.filter(
        (category) => category !== selectedCategory
      );
      setSelectedFilters(updatedFilters);
    } else {
      setSelectedFilters([...selectedFilters, selectedCategory]);
    }
  };

  useEffect(() => {
    displayingFilteredProducts();

    console.log("use effect called");
    
  }, [selectedFilters, products]);

  const displayingFilteredProducts = () => {
    if (selectedFilters.length === 0) {
      setFilteredProducts([...products]);
    } else if (selectedFilters.length > 0) {
      let filteredResults = selectedFilters.map((eachFilter) => {
        let productsUnderOneFilter = products.filter(
          (product) => product.type === eachFilter
        );
        return productsUnderOneFilter;
      });
      setFilteredProducts(filteredResults.flat());
    }
  };

  return { selectedFilters, filteredProducts, filterButtonClick };
};
