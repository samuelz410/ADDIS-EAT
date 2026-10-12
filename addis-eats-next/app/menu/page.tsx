export const revalidate = 3600;

import CategoryBar from "./CategoryBar";
import Link from "next/link";
import { Dish } from "@/types";

const mockDishes: Dish[] = [
  { id: "1", name: "Special Kitfo", price: 320, category: "Mains", spicy: true },
  { id: "2", name: "Shiro Tegabino", price: 180, category: "Mains", spicy: false },
  { id: "3", name: "Chechebsa", price: 160, category: "Breakfast", spicy: false },
  { id: "4", name: "Special Ful", price: 140, category: "Breakfast", spicy: true },
  { id: "5", name: "Spris Juice", price: 90, category: "Drinks", spicy: false },
  { id: "6", name: "Ethiopian Coffee", price: 50, category: "Drinks", spicy: false },
];

interface MenuPageProps {
  searchParams: Promise<{ category?: string }>;
}

export default async function MenuPage({ searchParams }: MenuPageProps) {
  const resolvedParams = await searchParams;
  const category = resolvedParams?.category || "All";

  const filteredDishes =
    category === "All"
      ? mockDishes
      : mockDishes.filter((d) => d.category === category);

  return (
    <main className="space-y-6">
      <h1 className="text-2xl font-bold">Our Menu</h1>
      <CategoryBar activeCategory={category} />

      <div className="grid gap-4 sm:grid-cols-2">
        {filteredDishes.map((dish) => (
          <div key={dish.id} className="p-4 border rounded-lg shadow-sm space-y-2">
            <h3 className="font-semibold text-lg">
              {dish.name} {dish.spicy && "🌶️"}
            </h3>
            <p className="text-gray-600">{dish.price} ETB</p>
            <Link
              href={`/menu/${dish.id}`}
              className="text-blue-600 text-sm hover:underline inline-block"
            >
              View Details →
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}