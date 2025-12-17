
import { getProduct } from "../services";
export function useProducts() {
 
  const { products, loading,error } = getProduct();

  return { products, loading,error }; // more can be exported ...then use {} ...here as well as where been imported
}
