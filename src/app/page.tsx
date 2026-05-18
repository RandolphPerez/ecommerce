import { db } from "@/db";
import { product, type Product } from "@/db/schema";
import { ProductList } from "@/components/product-list";
import { desc } from "drizzle-orm";

export const dynamic = "force-dynamic";

async function getProducts(): Promise<Product[]> {
  try {
    return await db
      .select()
      .from(product)
      .orderBy(desc(product.featured), desc(product.createdAt));
  } catch {
    return [];
  }
}

export default async function Home() {
  const products = await getProducts();

  return (
    <>
      <section className="bg-gradient-to-b from-zinc-100 to-white px-4 py-16 dark:from-zinc-900 dark:to-zinc-950 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl">
            Nike Collection
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-zinc-600 dark:text-zinc-400">
            Discover the latest Nike shoes, apparel, and accessories.
          </p>
        </div>
      </section>

      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {products.length === 0 ? (
          <div className="py-20 text-center">
            <p className="text-lg text-zinc-500 dark:text-zinc-400">
              No products available. Please configure your{" "}
              <code className="rounded bg-zinc-200 px-2 py-1 text-sm dark:bg-zinc-800">
                DATABASE_URL
              </code>{" "}
              and run the seed script.
            </p>
            <pre className="mt-4 inline-block rounded-lg bg-zinc-100 px-4 py-3 text-left text-sm text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
              {`# 1. Copy .env.example to .env and add your Neon DB URL\ncp .env.example .env\n\n# 2. Push the schema to your database\nnpx drizzle-kit push\n\n# 3. Seed the database\nnpx tsx src/db/seed.ts`}
            </pre>
          </div>
        ) : (
          <ProductList products={products} />
        )}
      </main>
    </>
  );
}
