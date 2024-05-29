import getProduct from "@/actions/get-product";
import Content from "./components/content";

export const revalidate = 0;

interface ProductPageProps {
  params: {
    productId: string;
  };
}

const ProductPage: React.FC<ProductPageProps> = async ({ params }) => {
  const product = await getProduct(params.productId);

  return <Content product={product} />;
};

export default ProductPage;
