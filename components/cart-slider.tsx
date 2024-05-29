"use client";

import { Summary } from "@/components/cart/summary";
import { CartPage } from "@/components/cart/cart-page";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import useCart from "@/hooks/use-cart";
import { ShoppingBag } from "lucide-react";
import { color1 } from "@/lib/constants";

export default function SheetDemo() {
  const cart = useCart();
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button
          type="button"
          className="px-4 py-2 rounded bg-pink-300 text-white hover:bg-pink-400 transition-colors flex gpa-2"
        >
          <ShoppingBag size={20} color="white" />
          <span className="ml-2 text-sm font-medium text-white">
            {cart.items.length}
          </span>
        </button>
      </SheetTrigger>
      <SheetContent
        style={{ backgroundColor: `${color1}` }}
        className="text-white"
      >
        <SheetHeader>
          <div className="pb-3 text-center">
            <h2 className="text-2xl">Carrinho</h2>
            <h2 className="text-lg">Agrega produtos.</h2>
          </div>
        </SheetHeader>

        <div className="flex flex-col justify-between min-h-screen pb-20">
          <CartPage />

          <div className="lg:p-5 pb-5">
            <Summary />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
