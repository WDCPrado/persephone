"use client";

import Gallery from "@/components/gallery";
import Info from "@/components/info";
import Container from "@/components/ui/container";
import { color2 } from "@/lib/constants";
import { Product } from "@/types";

export default function Content({ product }: { product: Product | any }) {
  return (
    <div style={{ backgroundColor: `${color2}` }}>
      <Container>
        <div className="px-4 py-10 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-3 lg:items-start lg:gap-x-8 pt-10">
            <Gallery images={product?.images ?? []} />

            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
              <Info data={product} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
