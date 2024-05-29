"use client";

import { Button } from "@/components/ui/button";
import Currency from "@/components/ui/currency";
import useCart from "@/hooks/use-cart";
import { color1, color2 } from "@/lib/constants";
import { Product } from "@/types";
import { ShoppingCart } from "lucide-react";

interface InfoProps {
  data: Product;
}

const Info: React.FC<InfoProps> = ({ data }) => {
  const cart = useCart();

  const onAddToCart = () => {
    cart.addItem(data);
  };

  const formatDescription = (description: string) => {
    // Reemplazar saltos de línea con elementos <br>
    const lines = description.split("\n");
    return lines.map((line, index) => <p key={index}>{line}</p>);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-white">{data.name}</h1>
      <div
        className="text-md font-semibold text-white whitespace-normal"
        style={{ wordWrap: "break-word" }}
      >
        {formatDescription(data.desc)}
      </div>
      <div className="mt-3 flex items-end justify-between">
        <p className="text-2xl text-gray-900">
          <Currency value={data.price} />
        </p>
      </div>
      <hr className="my-4" />

      <div className="mt-10 flex items-center gap-x-3">
        <button
          type="button"
          className="px-4 py-2 rounded bg-pink-300 text-white hover:bg-pink-400 transition-colors flex gpa-2"
          onClick={onAddToCart}
        >
          Agregar ao carrinho
          <ShoppingCart size={20} />
        </button>
      </div>
    </div>
  );
};

export default Info;
