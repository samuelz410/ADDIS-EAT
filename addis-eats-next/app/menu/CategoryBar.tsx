"use client";

import { useRouter } from "next/navigation";

const categories = ["All", "Breakfast", "Mains", "Drinks"] as const;

interface CategoryBarProps {
  activeCategory: string;
}

export default function CategoryBar({ activeCategory }: CategoryBarProps) {
  const router = useRouter();

  return (
    <div className="flex gap-2">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() =>
            router.push(cat === "All" ? "/menu" : `/menu?category=${cat}`)
          }
          className={`px-3 py-1 rounded border text-sm ${
            activeCategory === cat
              ? "bg-black text-white font-bold"
              : "bg-white text-gray-700"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}