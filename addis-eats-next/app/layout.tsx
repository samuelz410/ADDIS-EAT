import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Addis Eats",
  description: "Authentic Ethiopian food ordering application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="max-w-4xl mx-auto p-6 font-sans">
        <nav className="flex gap-6 pb-4 mb-6 border-b border-gray-200">
          <Link href="/" className="font-bold hover:text-amber-600">
            Home
          </Link>
          <Link href="/menu" className="font-bold hover:text-amber-600">
            Menu
          </Link>
          <Link href="/cart" className="font-bold hover:text-amber-600">
            Cart
          </Link>
          <Link href="/checkout" className="font-bold hover:text-amber-600">
            Checkout
          </Link>
        </nav>
        {children}
      </body>
    </html>
  );
}