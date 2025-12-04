import { getProduct } from "../services";
export function useProducts() {
  const products = getProduct();

  return  products ; // more can be exported ...then use {} ...here as well as where been imported
}
