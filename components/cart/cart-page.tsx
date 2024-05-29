"use client";

import { useEffect, useState } from "react";
import useCart from "@/hooks/use-cart";
import { CartItem } from "./cart-item";
import { ScrollArea } from "@/components/ui/scroll-area";

export const revalidate = 0;

export const CartPage = () => {
  const [isMounted, setIsMounted] = useState(false);
  const cart = useCart();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div>
      {cart.items.length === 0 && (
        <p className="text-center">Carrinho vazio.</p>
      )}
      <ScrollArea>
        <ul className="h-[60vh] border-b lg:px-5">
          {cart.items.map((item) => (
            <CartItem key={item.id} data={item} />
          ))}
        </ul>
      </ScrollArea>
    </div>
  );
};
