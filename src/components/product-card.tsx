"use client";

import Image from "next/image";
import type { Product } from "@/db/schema";
import { useCartStore } from "@/store/cart-store";

export function ProductCard({ product }: { product: Product }) {
  const addItem = useCartStore((s) => s.addItem);

  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white transition-shadow hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900">
      <div className="relative aspect-square overflow-hidden bg-zinc-100 dark:bg-zinc-800">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {product.featured && (
          <span className="absolute top-3 left-3 rounded-full bg-black px-3 py-1 text-xs font-semibold text-white dark:bg-white dark:text-black">
            Featured
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-2 p-4">
        <span className="text-xs font-medium tracking-wide text-zinc-500 uppercase dark:text-zinc-400">
          {product.category}
        </span>
        <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
          {product.name}
        </h3>
        <p className="line-clamp-2 text-sm text-zinc-600 dark:text-zinc-400">
          {product.description}
        </p>

        <div className="mt-auto flex items-center justify-between pt-3">
          <span className="text-lg font-bold text-zinc-900 dark:text-zinc-50">
            ${product.price.toFixed(2)}
          </span>
          <button
            onClick={() => addItem(product)}
            className="cursor-pointer rounded-full bg-black px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
          >
            Add to Cart
          </button>
        </div>

        {product.stock <= 10 && product.stock > 0 && (
          <p className="text-xs text-amber-600 dark:text-amber-400">
            Only {product.stock} left in stock
          </p>
        )}
      </div>
    </div>
  );
}
