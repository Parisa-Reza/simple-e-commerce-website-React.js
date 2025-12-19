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
        // becatse the fetched data does not have id, but DataGrid needs id field 
        const productsWithId = response.data.map((product, index) => ({
          id: index + 1,
          ...product, // shallow copy, smemory references are different  and there is no nested object.
        }));
        setProducts(productsWithId);
        setLoading(0);
      })
      .catch((error) => {
       
        setError(error.message);
        setLoading(0);
      });
  }, []);
  return { products, loading, error };


}
