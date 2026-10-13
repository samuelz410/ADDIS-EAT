"use client";

import useSWR from "swr";
import { fetcher } from "@/lib/fetcher";

interface OrderPollingViewProps {
  orderId: string;
  initialData: any;
}

export default function OrderPollingView({ orderId, initialData }: OrderPollingViewProps) {
  const { data } = useSWR(`/api/orders/${orderId}`, fetcher, {
    fallbackData: initialData, 
    refreshInterval: 5000,     
  });

  return (
    <div className="p-6 border rounded shadow-sm space-y-4 max-w-md">
      <h2 className="text-xl font-bold">Order Tracking #{orderId}</h2>
      <div className="flex items-center gap-2">
        <span className="font-semibold">Status:</span>
        <span className="px-2 py-1 bg-amber-100 text-amber-800 rounded text-sm">
          {data?.status || "Processing"}
        </span>
      </div>
    </div>
  );
}