import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { product } from "./schema";
import dotenv from "dotenv";

dotenv.config();

const sql = neon(process.env.DATABASE_URL!);
const db = drizzle(sql);

const nikeProducts = [
  {
    name: "Nike Air Max 90",
    description:
      "The Nike Air Max 90 stays true to its OG running roots with the iconic Waffle outsole, stitched overlays and classic TPU accents.",
    price: 130.0,
    image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/wzitsrb4oucx3hljeb4x/AIR+MAX+90.png",
    category: "Shoes",
    stock: 25,
    featured: true,
  },
  {
    name: "Nike Air Force 1 '07",
    description:
      "The radiance lives on in the Nike Air Force 1 '07, the basketball original that puts a fresh spin on what you know best.",
    price: 115.0,
    image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/350e7f3a-979a-402b-9396-a7e4128adf5a/W+AIR+FORCE+1+%2707.png",
    category: "Shoes",
    stock: 40,
    featured: true,
  },
  {
    name: "Nike Dunk Low Retro",
    description:
      "Created for the hardwood but taken to the streets, the Nike Dunk Low Retro returns with crisp overlays and original team colors.",
    price: 115.0,
    image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b1bcddbb-4d0a-4379-860b-07de55ed0e4f/NIKE+DUNK+LOW+RETRO.png",
    category: "Shoes",
    stock: 30,
    featured: true,
  },
  {
    name: "Nike Sportswear Club Fleece Hoodie",
    description:
      "The Nike Sportswear Club Fleece Hoodie combines classic style with the soft comfort of fleece for an elevated everyday look.",
    price: 65.0,
    image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/do9055-247/M+NK+CLUB+BB+PO+HOODIE.png",
    category: "Clothing",
    stock: 50,
    featured: false,
  },
  {
    name: "Nike Air Max 270",
    description:
      "Nike's first lifestyle Air Max brings you style, comfort and big attitude in the Nike Air Max 270.",
    price: 160.0,
    image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/awvdsyenzmb2fohwwjzp/AIR+MAX+270.png",
    category: "Shoes",
    stock: 20,
    featured: true,
  },
  {
    name: "Nike Brasilia 9.5 Training Backpack",
    description:
      "Hit the gym or the trail with the Nike Brasilia Backpack. Durable and spacious, it has plenty of pockets for all your gear.",
    price: 40.0,
    image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/0e338cb9-c823-48d9-8179-83e0a0555c3d/BRSLA+M+BKPK+-+9.5+%2824L%29.png",
    category: "Accessories",
    stock: 60,
    featured: false,
  },
  {
    name: "Nike Pegasus 42",
    description:
      "The workhorse returns with responsive cushioning that makes every run feel effortless. A reliable ride for everyday training.",
    price: 140.0,
    image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f49e7b8d-36e3-47e6-89fc-98e498d324c1/NIKE+PEGASUS+42.png",
    category: "Shoes",
    stock: 35,
    featured: true,
  },
  {
    name: "Nike Sportswear Tech Fleece Joggers",
    description:
      "Slim, modern joggers made with lightweight Tech Fleece fabric for everyday warmth and comfort.",
    price: 110.0,
    image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/1acfbce3-14a2-4ad1-81da-0d134eb0ed7e/M+NK+TCH+FLC+JGGR.png",
    category: "Clothing",
    stock: 45,
    featured: false,
  },
];

async function seed() {
  console.log("Seeding database with Nike products...");

  await db.delete(product);
  await db.insert(product).values(nikeProducts);

  console.log(`Seeded ${nikeProducts.length} Nike products successfully!`);
  process.exit(0);
}

seed().catch((error) => {
  console.error("Seeding failed:", error);
  process.exit(1);
});
