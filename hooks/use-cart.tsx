import { toast } from "react-hot-toast";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import { Product } from "@/types";

interface CartStore {
  items: Product[];
  addItem: (data: Product) => void;
  removeQuantity: (id: string) => void;
  removeItem: (id: string) => void;
  removeAll: () => void;
  payment: () => void;
}

const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      items: [],
      addItem: (data: Product) => {
        const currentItems = get().items;
        const existingItemIndex = currentItems.findIndex(
          (item) => item.id === data.id
        );

        if (existingItemIndex !== -1) {
          // Si el artículo ya existe en el carrito, incrementa su cantidad
          const updatedItems = currentItems.map((item, index) =>
            index === existingItemIndex
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
          set({ items: updatedItems });
          toast("Item agregado ao carrinho.");
        } else {
          // Si el artículo no existe en el carrito, agrégalo con una cantidad de 1
          set({ items: [...currentItems, { ...data, quantity: 1 }] });
          toast.success("Agregado ao carrinho.");
        }
      },

      removeQuantity: (id: string) => {
        const currentItems = get().items;
        const existingItemIndex = currentItems.findIndex(
          (item) => item.id === id
        );

        if (existingItemIndex !== -1) {
          if (currentItems[existingItemIndex].quantity >= 1) {
            const updatedItems = [...currentItems];
            updatedItems[existingItemIndex].quantity--;
            set({ items: updatedItems });
            toast("Se resto al producto existente.");
          } else {
            set({ items: [...get().items.filter((item) => item.id !== id)] });
            toast.success("Item eliminado del carrito.");
          }
        }
      },

      removeItem: (id: string) => {
        set({ items: [...get().items.filter((item) => item.id !== id)] });
        toast.success("Item removido do carrinho.");
      },
      removeAll: () => {
        set({ items: [] });
        toast.success("Carrinho limpo.");
      },
      payment: () => {
        set({ items: [] });
        toast.success("Pago completado com sucesso.");
      },
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useCart;
