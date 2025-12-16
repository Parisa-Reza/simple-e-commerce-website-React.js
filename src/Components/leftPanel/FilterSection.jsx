export function FilterSection() {
  const productList = [
    "Laptops",
    "Gaming",
    "Accessories",
    "Peripherals",
    "Storage",
    "Components",
    "Monitors",
    "Printers"
  ];

  return (
    <div className="flex flex-col mt-5 mb-5 gap-4 ">
      <div className="flex gap-3 mb-4">
      {productList.map(
        (productItem) => (
          <button className="hover:bg-gray-300 font-semibold py-2 px-4 rounded mr-2 bg-gray-200 text-gray-800" key={productItem}>{productItem}</button>
        )
      )}
      </div>
      <div className="py-2">
        <button  className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 mr-3 rounded">Apply Filter</button>
         <button  className="bg-red-400 hover:bg-red-500 text-white font-bold py-2 px-4 rounded">Clear Filter</button>

      </div>
    </div>
  );
}
