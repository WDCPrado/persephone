"use client";

import { Expand, ShoppingCart } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { MouseEventHandler } from "react";

import { Button } from "@/components/ui/button";
import Currency from "@/components/ui/currency";
import IconButton from "@/components/ui/icon-button";
import useCart from "@/hooks/use-cart";
import usePreviewModal from "@/hooks/use-preview-modal";
import { Product } from "@/types";
import { color1, color2, color3 } from "@/lib/constants";

interface ProductCard {
  data: Product;
  summary?: boolean;
}

const ProductCard: React.FC<ProductCard> = ({ data, summary = false }) => {
  const previewModal = usePreviewModal();
  const cart = useCart();
  const router = useRouter();

  const handleClick = () => {
    if (!summary) {
      router.push(`/product/${data.id}`);
    }
  };

  const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();

    previewModal.onOpen(data);
  };

  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();

    cart.addItem(data);
  };

  return (
    <div
      className="group cursor-pointer rounded-xl p-3 space-y-4"
      style={{ backgroundColor: `${color2}` }}
    >
      {/* Image & actions */}
      <div className="aspect-square rounded-xl bg-gray-100 relative">
        <Image
          onClick={handleClick}
          src={data.images?.[0]?.url}
          alt=""
          fill
          className="aspect-square object-cover rounded-md"
        />
        <div className="opacity-60 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
          <div className="flex gap-x-6 justify-center">
            {!summary && (
              <IconButton
                onClick={onPreview}
                icon={<Expand size={20} className="text-gray-600" />}
              />
            )}
          </div>
        </div>
      </div>
      {!summary && (
        <>
          <div>
            <p className="font-semibold text-lg text-white">{data.name}</p>
          </div>
          <div className="flex items-center justify-between">
            <Currency value={data?.price} />

            <button
              type="button"
              className="px-4 py-2 rounded bg-pink-300 text-white hover:bg-pink-400 transition-colors flex gpa-2"
              onClick={onAddToCart}
            >
              Agregar ao carrinho
              <ShoppingCart size={20} />
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductCard;
