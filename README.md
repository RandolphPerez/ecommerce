# Nike Store — Ecommerce

A modern e-commerce application built with **Next.js 16**, **TypeScript**, **Tailwind CSS**, **Drizzle ORM**, **Neon PostgreSQL**, **Better Auth**, and **Zustand**.

## Tech Stack

| Layer          | Technology                    |
| -------------- | ----------------------------- |
| Framework      | Next.js 16 (App Router)       |
| Language       | TypeScript                    |
| Styling        | Tailwind CSS v4               |
| Database       | Neon PostgreSQL (serverless)  |
| ORM            | Drizzle ORM                   |
| Authentication | Better Auth                   |
| State Mgmt     | Zustand                       |
| Linting        | ESLint                        |

## Getting Started

### Prerequisites

- Node.js 20+
- A [Neon](https://neon.tech) PostgreSQL database

### Setup

```bash
# 1. Install dependencies
npm install

# 2. Create environment variables
cp .env.example .env
# Edit .env with your Neon DATABASE_URL and BETTER_AUTH_SECRET

# 3. Push the database schema
npm run db:push

# 4. Seed the database with sample Nike products
npm run db:seed

# 5. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the app.

## Project Structure

```
src/
├── app/
│   ├── api/auth/[...all]/route.ts   # Better Auth API handler
│   ├── globals.css                   # Tailwind CSS imports
│   ├── layout.tsx                    # Root layout with Navbar
│   └── page.tsx                      # Homepage (queries products via Drizzle)
├── components/
│   ├── cart-button.tsx               # Cart icon with item count
│   ├── navbar.tsx                    # Sticky navigation bar
│   ├── product-card.tsx              # Single product card
│   └── product-list.tsx              # Product grid layout
├── db/
│   ├── index.ts                      # Drizzle + Neon client
│   ├── schema.ts                     # Product, User, Session, Account tables
│   └── seed.ts                       # Seed script for Nike products
├── lib/
│   ├── auth.ts                       # Better Auth server config
│   └── auth-client.ts                # Better Auth React client
└── store/
    └── cart-store.ts                 # Zustand cart store
```

## Available Scripts

| Script            | Description                          |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Start development server             |
| `npm run build`   | Create production build              |
| `npm run start`   | Start production server              |
| `npm run lint`    | Run ESLint                           |
| `npm run db:push` | Push schema to database              |
| `npm run db:seed` | Seed database with Nike products     |
| `npm run db:generate` | Generate Drizzle migrations      |
| `npm run db:studio`   | Open Drizzle Studio              |
