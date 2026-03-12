# Beacon Dev Challenge — Health Product Catalog

A fullstack technical assessment for Junior/Mid Web Developer candidates.

Build a health product catalog using **Next.js 15**, **TypeScript**, **MongoDB**, and **TailwindCSS**.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v20+
- [pnpm](https://pnpm.io/) v9+
- [MongoDB](https://www.mongodb.com/) running locally (or a free [MongoDB Atlas](https://www.mongodb.com/atlas) cluster)

### Setup

```bash
# 1. Clone the repository (or your fork)
git clone <your-fork-url>
cd beacon-dev-challenge

# 2. Install dependencies
pnpm install

# 3. Create your environment file
cp .env.example .env
# Edit .env and set your MONGODB_URI

# 4. Seed the database with sample products
pnpm seed

# 5. Start the development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) — you should see a landing page with a link to `/products`.

### Available Scripts

| Command           | Description                          |
|-------------------|--------------------------------------|
| `pnpm dev`        | Start dev server with Turbopack      |
| `pnpm build`      | Build for production                 |
| `pnpm seed`       | Seed MongoDB with 30 sample products |
| `pnpm test`       | Run tests with Vitest                |
| `pnpm test:watch` | Run tests in watch mode              |
| `pnpm lint`       | Lint with ESLint                     |
| `pnpm format`     | Check formatting with Prettier       |

---

## What's Included

This template gives you:

- **Next.js 15** with App Router and Turbopack
- **TypeScript** in strict mode
- **TailwindCSS 4** configured and ready
- **MongoDB connection utility** (`src/lib/db.ts`) with a singleton pattern
- **Seed script** (`src/seed.ts`) that populates 30 health/wellness products
- **Vitest** configured with an example test
- **ESLint + Prettier** configured
- A root layout and landing page

## What You Need to Build

The template intentionally leaves the core application for you to implement. There are **no product pages, models, API
routes, or components** — that's your job.

---

## Requirements

### Product Data Model

The seed script creates products with this shape — your Mongoose model should match it:

```typescript
{
  name: string;              // Product name
  slug: string;              // URL-friendly identifier
  description: string;       // Product description
  price: number;             // Price in USD
  category: string;          // "medicamentos" | "suplementos" | "cuidado-personal" | "dispositivos-medicos"
  brand: string;             // Brand name
  stock: number;             // Available quantity
  image: string;             // Placeholder image URL
  requiresPrescription: boolean;  // Whether prescription is needed
  createdAt: Date;           // Timestamp (auto-generated)
}
```

### Base Requirements (must complete)

| # | Requirement                                                                                                                             | Skills Tested                               |
|---|-----------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------|
| 1 | **Product Mongoose model** (`src/models/product.ts`) with TypeScript interface                                                          | Mongoose, TypeScript                        |
| 2 | **Product listing page** (`/products`) — Server Component that fetches all products from MongoDB and displays them in a responsive grid | Next.js SSR, Server Components, TailwindCSS |
| 3 | **Product detail page** (`/products/[slug]`) with `generateMetadata` for SEO                                                            | Dynamic routes, metadata API                |
| 4 | **Search functionality** — filter products by name (client-side or server-side)                                                         | React state or URL search params            |
| 5 | **Category filter** — filter by product category                                                                                        | UI/UX, filtering logic                      |
| 6 | **Add product form** — create new products via Server Action or API Route with validation                                               | Forms, validation, Server Actions           |
| 7 | **Responsive layout** — works on mobile, tablet, desktop                                                                                | TailwindCSS responsive design               |
| 8 | **TypeScript throughout** — no `any` types, proper interfaces                                                                           | TypeScript discipline                       |
| 9 | **Clean code structure** — logical file organization, meaningful names                                                                  | Code quality                                |

### Bonus Challenges (optional, for mid-level signal)

| #  | Bonus                                                             | Skills Tested                |
|----|-------------------------------------------------------------------|------------------------------|
| B1 | **Loading states** — `loading.tsx` or Suspense boundaries         | Next.js streaming, UX        |
| B2 | **Error handling** — `error.tsx` boundary, form validation errors | Error boundaries             |
| B3 | **One Vitest test** — unit test for a utility or component        | Testing fundamentals         |
| B4 | **Edit/Delete product** — full CRUD operations                    | API design, UI completeness  |
| B5 | **Pagination or infinite scroll**                                 | Performance, data fetching   |
| B6 | **Sort products** by price, name, or date                         | UI interaction, query params |
| B7 | **Image optimization** using `next/image`                         | Performance awareness        |
| B8 | **Accessible markup** — semantic HTML, ARIA labels, keyboard nav  | Accessibility                |

---

## Evaluation Criteria

| Category              | Weight | What We Look For                                                |
|-----------------------|--------|-----------------------------------------------------------------|
| **Functionality**     | 25%    | All base requirements work correctly                            |
| **Code Quality**      | 25%    | Clean structure, TypeScript usage, naming, no dead code         |
| **UI/UX**             | 15%    | Responsive, visually coherent, good TailwindCSS usage           |
| **Next.js Patterns**  | 15%    | Correct use of Server/Client Components, App Router conventions |
| **MongoDB/Backend**   | 10%    | Proper Mongoose model, validation, error handling               |
| **SEO & Performance** | 5%     | Metadata, semantic HTML, image optimization                     |
| **Bonus Features**    | 5%     | Completed bonus items                                           |

---

## Submission

1. Fork this repository
2. Complete the challenge on your fork
3. Create a Pull Request against the `main` branch of **your fork**
4. Include a brief description in the PR of:
    - Your approach and key decisions
    - Any bonus challenges you completed
    - What you would improve with more time

**Time expectation:** 3–4 hours. Focus on quality over quantity — a well-implemented subset is better than a rushed
complete solution.

---

## Tips

- Start with the Mongoose model and the listing page — get data flowing first
- Use Server Components by default; only add `"use client"` where you need interactivity
- The seed data includes products with low stock (< 5) and prescription requirements — use these for interesting UI
  details
- Run `pnpm test` to verify Vitest works — the example test is in `src/__tests__/example.test.ts`
- Check the four categories in the seed data for the category filter values

Good luck!
