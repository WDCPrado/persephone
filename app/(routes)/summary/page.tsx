"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import useCart from "@/hooks/use-cart";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page() {
  const searchParams = useSearchParams();
  const [params, setParams] = useState<{ [key: string]: string }>({});
  const cart = useCart();

  useEffect(() => {
    const paramsObj = Object.fromEntries(
      new URLSearchParams(searchParams.toString()).entries()
    );
    setParams(paramsObj);
    console.log(paramsObj);

    // Limpiar el carrito si el parámetro 'paid' es igual a '1'
    if (cart.items.length > 0) {
      cart.payment();
    }
  }, [searchParams, cart]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Resumo do pago</CardTitle>
          <CardDescription>Detalhe do pago</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-5">
            <div>
              {Object.entries(params).map(([key, value]) => (
                <div key={key} className="mb-2">
                  {key === "paymentMethod" && (
                    <div className="flex items-center gap-x-2">
                      <div className="text-lg font-semibold">
                        Forma de pagamento
                      </div>
                      <div className="text-sm">{value}</div>
                    </div>
                  )}
                  {key === "total" && (
                    <div className="flex items-center gap-x-2">
                      <div className="text-lg font-semibold">Total</div>
                      <div className="text-sm">{value}</div>
                    </div>
                  )}
                  {key === "first_names" && (
                    <div className="flex items-center gap-x-2">
                      <div className="text-lg font-semibold">Nome</div>
                      <div className="text-sm">{value}</div>
                    </div>
                  )}
                  {key === "last_names" && (
                    <div className="flex items-center gap-x-2">
                      <div className="text-lg font-semibold">Sobrenome</div>
                      <div className="text-sm">{value}</div>
                    </div>
                  )}
                  {key === "email" && (
                    <div className="flex items-center gap-x-2">
                      <div className="text-lg font-semibold">Email</div>
                      <div className="text-sm">{value}</div>
                    </div>
                  )}
                  {key === "cep" && (
                    <div className="flex items-center gap-x-2">
                      <div className="text-lg font-semibold">CEP</div>
                      <div className="text-sm">{value}</div>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-3">
              <img src="/prod2.jpg" alt="Logo" className="w-60" />
              <span className="text-foreground">Cheiro de Poçao do Amor</span>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <p>Agradecemos sua compra!</p>
        </CardFooter>
      </Card>
    </div>
  );
}
