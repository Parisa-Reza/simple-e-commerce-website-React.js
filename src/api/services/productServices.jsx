import { useEffect, useState } from "react";
import axios from "axios";
export function getProduct() {
  const [loading, setLoading] = useState(0);
  const [error, setError] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setLoading(1);
    axios
      .get(
        "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
      )
      .then((response) => {
        setProducts(response.data);
        setLoading(0);
      })
      .catch((error) => {
       
        setError(error.message);
        setLoading(0);
      });
  }, []);
  return { products, loading, error };


  
  //     return  [
  //   {
  //     id: 1,
  //     name: "Gaming Laptop",
  //     price: 1500,
  //     image: "./assets/images/product-placeholder.webp",
  //     categories: ["Laptops", "Gaming"],
  //   },
  //   {
  //     id: 2,
  //     name: "Wireless Mouse",
  //     price: 50,
  //     image: "./assets/images/product-placeholder.webp",
  //     categories: ["Accessories", "Peripherals"],
  //   },
  //   {
  //     id: 3,
  //     name: "Mechanical Keyboard",
  //     price: 100,
  //     image: "./assets/images/product-placeholder.webp",
  //     categories: ["Accessories", "Peripherals"],
  //   },
  //   {
  //     id: 4,
  //     name: "External Hard Drive",
  //     price: 120,
  //     image: "./assets/images/product-placeholder.webp",
  //     categories: ["Storage", "Accessories"],
  //   },
  //   {
  //     id: 5,
  //     name: "Graphics Card",
  //     price: 500,
  //     image: "./assets/images/product-placeholder.webp",
  //     categories: ["Components", "Gaming"],
  //   },
  //   {
  //     id: 6,
  //     name: "Portable SSD",
  //     price: 200,
  //     image: "./assets/images/product-placeholder.webp",
  //     categories: ["Storage", "Accessories"],
  //   },
  //   {
  //     id: 7,
  //     name: "Gaming Monitor",
  //     price: 300,
  //     image: "./assets/images/product-placeholder.webp",
  //     categories: ["Monitors", "Gaming"],
  //   },
  //   {
  //     id: 8,
  //     name: "All-in-One Printer",
  //     price: 150,
  //     image: "./assets/images/product-placeholder.webp",
  //     categories: ["Peripherals", "Printers"],
  //   },
  // ];
}
