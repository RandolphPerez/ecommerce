"use client";

import type { Product } from "@/db/schema";
import { ProductCard } from "./product-card";

export function ProductList({ products }: { products: Product[] }) {
  if (products.length === 0) {
    return (
      <div className="py-20 text-center">
        <p className="text-lg text-zinc-500 dark:text-zinc-400">
          No products found.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
