import getProducts from "@/actions/get-products";
import Container from "@/components/ui/container";
import ProductCard from "@/components/ui/product-card";
import { color2 } from "@/lib/constants";

export const revalidate = 0;

const HomePage = async () => {
  const products = await getProducts();

  return (
    <Container>
      <div className="pb-10 pt-10">
        <div>
          <div
            className="flex flex-col lg:flex-row gap-10 px-10 py-10 items-center justify-center"
            style={{ backgroundColor: `${color2}` }}
          >
            <div className="flex flex-col gap-20 lg:w-1/2 pr-20 items-center justify-center">
              <div className="flex flex-col gap-5 items-center justify-center">
                {" "}
                <h1 className="text-6xl">Conheça PERSEPHONE</h1>
                <p>
                  A Persephone é uma loja que se dedica a proporcionar cuidados
                  com a pele por meio de produtos inovadores e sustentáveis, que
                  resistem ao teste do tempo. Com atenção aos detalhes,
                  garantimos uma experiência de compra simplesmente perfeita do
                  início ao fim. Explore nosso site para saber mais sobre nossa
                  marca e padrões de qualidade.
                </p>
                <video src="/vid.mp4" autoPlay loop muted width={400}></video>
              </div>
            </div>
            <div className="w-[300px] md:w-[400px]">
              {products.map((item) => (
                <ProductCard key={item.id} data={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
