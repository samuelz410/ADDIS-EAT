"use client";

import { useState } from "react";
import useSWR from "swr";
import { fetcher } from "@/lib/fetcher";
import { useDebounce } from "@/hooks/useDebounce";

export default function PagedMenu() {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  
  const debouncedSearch = useDebounce(search, 300);


  const key = debouncedSearch ? `/api/dishes?search=${encodeURIComponent(debouncedSearch)}&page=${page}` : null;

  const { data, isLoading } = useSWR(key, fetcher, {
    keepPreviousData: true, 
  });

  return (
    <div className="space-y-4">
      <input
        type="text"
        placeholder="Search dishes..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setPage(1); 
        }}
        className="w-full p-2 border rounded"
      />

      {!debouncedSearch ? (
        <p className="text-gray-500">Type something to search dishes...</p>
      ) : isLoading && !data ? (
        <p className="text-gray-500">Searching...</p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2">
          {data?.dishes?.map((dish: any) => (
            <div key={dish.id} className="p-4 border rounded shadow-sm">
              <h3 className="font-bold">{dish.name}</h3>
              <p>{dish.price} ETB</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}