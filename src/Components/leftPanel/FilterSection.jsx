export function FilterSection() {
  const productList = [
    "Clay & Terracotta",
    "Wood & Bamboo Crafts",
    "Jute Products",
    "Metal Crafts",
    "Paintings & Artwork",
    "Home Decor Items",
    "Traditional Jewelry",
    "Handmade Accessories",
  ];

  return (
    <div className="flex flex-col mt-5 mb-5 gap-4">
      <div className="flex gap-3">
      {productList.map(
        (productItem) => (
          <button className="bg-blue-500  text-white font-semibold rounded py-1 px-1" key={productItem}>{productItem}</button>
        )
      )}
      </div>
      <div>
        <button  className="bg-red-300  text-white font-semibold rounded px-2 py-2">Clear Filter</button>
      </div>
    </div>
  );
}
