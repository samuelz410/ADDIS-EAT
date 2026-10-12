import { NextResponse } from "next/server";
import { Dish } from "@/types";

const mockDishes: Dish[] = [
  { id: "1", name: "Special Kitfo", price: 320, category: "Mains", spicy: true },
  { id: "2", name: "Shiro Tegabino", price: 180, category: "Mains", spicy: false },
  { id: "3", name: "Chechebsa", price: 160, category: "Breakfast", spicy: false },
  { id: "4", name: "Special Ful", price: 140, category: "Breakfast", spicy: true },
  { id: "5", name: "Spris Juice", price: 90, category: "Drinks", spicy: false },
  { id: "6", name: "Ethiopian Coffee", price: 50, category: "Drinks", spicy: false },
];

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (id) {
    const dish = mockDishes.find((d) => d.id === id);
    if (!dish) {
      return NextResponse.json({ error: "Dish not found" }, { status: 404 });
    }
    return NextResponse.json(dish);
  }

  return NextResponse.json(mockDishes);
}