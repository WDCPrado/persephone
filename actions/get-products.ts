import { products } from "@/lib/constants";
import { Product } from "@/types";

const getProducts = async (): Promise<Product[]> => {
  return products;
};

export default getProducts;
