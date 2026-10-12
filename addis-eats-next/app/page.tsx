import Link from "next/link";

export default function HomePage() {
  return (
    <main className="space-y-4">
      <h1 className="text-3xl font-extrabold">☕ Welcome to Addis Eats</h1>
      <p className="text-gray-600">
        Authentic, traditional Ethiopian dishes delivered fast to your door.
      </p>
      <div>
        <Link
          href="/menu"
          className="inline-block bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
        >
          Explore Menu →
        </Link>
      </div>
    </main>
  );
}