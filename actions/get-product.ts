import { products } from "@/lib/constants";
import { Product } from "@/types";

const getProduct = async (id: string): Promise<Product | undefined> => {
  const data = products.find((product) => product.id === id);
  return data;
};

export default getProduct;
