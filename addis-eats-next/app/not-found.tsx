import Link from "next/link";

export default function NotFound() {
  return (
    <main className="text-center py-12 space-y-4">
      <h2 className="text-2xl font-bold text-red-600">404 - Page Not Found</h2>
      <p className="text-gray-600">Could not find the requested route or resource.</p>
      <Link href="/" className="text-blue-600 underline">
        Return to Home
      </Link>
    </main>
  );
}