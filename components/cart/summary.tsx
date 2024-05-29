"use client";

import axios from "axios";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Currency from "@/components/ui/currency";
import useCart from "@/hooks/use-cart";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import * as z from "zod";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { formatPhoneNumber, formatedRut } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { color1, color2, color3 } from "@/lib/constants";
import { useOrigin } from "@/hooks/use-origin";

const formSchema = z.object({
  first_names: z.string().min(2, {
    message: "O nome deve ter pelo menos 2 caracteres.",
  }),
  last_names: z.string().min(2, {
    message: "O sobrenome deve ter pelo menos 2 caracteres.",
  }),
  email: z.string().email({
    message: "Deve ser um email válido.",
  }),
  cep: z.string().min(4, {
    message: "O CEP deve ter pelo menos 8 caracteres.",
  }),
  paymentMethod: z.string().nonempty({
    message: "Deve seleccionar uma forma de pagamento.",
  }),
});

export const Summary = () => {
  const items = useCart((state) => state.items);
  const cart = useCart();
  const router = useRouter();
  const [openModal, setOpenModal] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      first_names: "",
      last_names: "",
      email: "",
      cep: "",
      paymentMethod: "",
    },
  });
  console.log(form.getValues());

  const totalPrice = items.reduce((total, item) => {
    return total + Number(item.price) * Number(item.quantity);
  }, 0);

  const onPayment = async (values: z.infer<typeof formSchema>) => {
    console.log(values);

    window.location.href = `/summary?${new URLSearchParams(
      values
    ).toString()}&total=${totalPrice}`;
    setOpenModal(false);
  };

  return (
    <div
      className="rounded-lg px-4 p-20 py-2 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8 mb-20 md:mt-5"
      style={{ backgroundColor: `${color3}` }}
    >
      <div className="flex gap-2 justify-between">
        <h2 className="text-lg font-medium">Resumo do pedido</h2>

        <button
          type="button"
          className="text-center cursor-pointer px-4 py-2 rounded bg-pink-300 text-white hover:bg-pink-400 transition-colors flex gap-2"
          disabled={cart.items.length === 0}
          onClick={() => cart.removeAll()}
        >
          Limpar carrinho
        </button>
      </div>

      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <div className="text-base font-medium">Total</div>
          <Currency value={totalPrice} />
        </div>
      </div>

      <Dialog open={openModal} onOpenChange={setOpenModal}>
        <DialogTrigger asChild>
          <button
            type="button"
            className="cursor-pointer px-4 py-2 rounded bg-pink-300 text-white hover:bg-pink-400 transition-colors flex gap-2 w-full"
            disabled={items.length === 0}
          >
            Continuar ao pagamento
          </button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Formulario de pago</DialogTitle>
            <DialogDescription>
              Por favor preencha o formulario para continuar com o pago
            </DialogDescription>
          </DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onPayment)} className="space-y-3">
              <FormField
                control={form.control}
                name="first_names"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nomes</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Nomes"
                        disabled={form.formState.isSubmitting}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="last_names"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Sobrenome</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Sobrenome"
                        disabled={form.formState.isSubmitting}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Email"
                        disabled={form.formState.isSubmitting}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="cep"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Cep</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="cep"
                        disabled={form.formState.isSubmitting}
                        type="number"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="paymentMethod"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Forma de pago</FormLabel>
                    <FormControl>
                      <ToggleGroup
                        type="single"
                        variant={"outline"}
                        value={field.value}
                        onValueChange={(value) =>
                          form.setValue("paymentMethod", value)
                        }
                        className="w-full"
                      >
                        <ToggleGroupItem
                          value="PIX"
                          aria-label="Toggle PIX"
                          className="bg-pink-300 text-white"
                        >
                          PIX
                        </ToggleGroupItem>
                        <ToggleGroupItem
                          value="DEBITO"
                          aria-label="Toggle DEBITO"
                          className="bg-pink-300 text-white"
                        >
                          DEBITO
                        </ToggleGroupItem>
                        <ToggleGroupItem
                          value="CREDITO"
                          aria-label="Toggle CREDITO"
                          className="bg-pink-300 text-white"
                        >
                          CREDITO
                        </ToggleGroupItem>
                      </ToggleGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="pt-5">
                <button
                  type="submit"
                  className="text-center px-4 py-2 rounded bg-pink-300 text-white hover:bg-pink-400 transition-colors flex gap-2 w-full"
                  disabled={form.formState.isSubmitting}
                >
                  Pagar
                </button>
              </div>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </div>
  );
};
