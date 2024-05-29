"use client";

import { color2 } from "@/lib/constants";
import { useEffect, useState } from "react";

const formatter = new Intl.NumberFormat("es-CL", {
  style: "currency",
  currency: "CLP",
});

interface CurrencyProps {
  value?: string | number;
}

const Currency: React.FC<CurrencyProps> = ({ value = 0 }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="font-semibold text-white">
      {formatter.format(Number(value))}
    </div>
  );
};

export default Currency;
