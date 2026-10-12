"use client";

interface MenuErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function MenuError({ error, reset }: MenuErrorProps) {
  return (
    <div className="p-4 border border-red-400 bg-red-50 text-red-700 rounded space-y-2">
      <h2 className="font-bold">⚠️ Failed to load menu segment</h2>
      <p className="text-sm">{error.message || "An error occurred."}</p>
      <button
        onClick={() => reset()}
        className="px-3 py-1 bg-red-600 text-white rounded text-sm hover:bg-red-700"
      >
        Try Again
      </button>
    </div>
  );
}