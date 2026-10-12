import { notFound } from "next/navigation";
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

export async function generateStaticParams(): Promise<{ id: string }[]> {
  return mockDishes.map((dish) => ({ id: dish.id }));
}

interface DishDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function DishDetailPage({ params }: DishDetailPageProps) {
  const resolvedParams = await params;
  const dish = mockDishes.find((d) => d.id === resolvedParams.id);

  if (!dish) {
    notFound();
  }

  return (
    <main className="space-y-4">
      <Link href="/menu" className="text-blue-600 text-sm hover:underline">
        ← Back to Menu
      </Link>
      <h1 className="text-3xl font-bold">
        {dish.name} {dish.spicy && "🌶️"}
      </h1>
      <p className="text-gray-600">Category: {dish.category}</p>
      <p className="text-xl font-semibold">{dish.price} ETB</p>
    </main>
  );
}