import {  useState, useEffect } from "react";



export const useFilter = (products) => {
const [selectedFilters, setSelectedFilters] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState(products);

  // Update filtered products when filters or products change
  useEffect(() => {
    displayingFilteredProducts();
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
  return { selectedFilters, filteredProducts, filterButtonClick };
}