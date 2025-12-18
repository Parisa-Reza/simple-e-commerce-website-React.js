import { useContext } from "react";
import { FilterContext } from "../../contexts/FilterContext";

export function FilterSection() {
  let productCategory = ["meat", "vegetables", "soup"];

  const { selectedFilters, filterButtonClick } = useContext(FilterContext);

  return (
    <div className="flex flex-col mt-5 mb-5 gap-4 ">
      <div className="flex gap-3 mb-4">
        {productCategory.map((category) => (
          <button
            onClick={() => filterButtonClick(category)}
            className={`${selectedFilters?.includes(category) ? "font-semibold py-2 px-4 rounded mr-2 bg-red-400 text-white" : "font-semibold py-2 px-4 rounded mr-2 bg-gray-200 text-gray-800"}`}
            key={category}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}
