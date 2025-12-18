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


}
